
let unitConvert = {
  temp: {
    CtF: (val)=>convertTemp('cel','far',val),
    CtK: (val)=>convertTemp('cel','kel',val),
    FtC: (val)=>convertTemp('far','cel',val),
    FtK: (val)=>convertTemp('far','kel',val),
    KtC: (val)=>convertTemp('kel','cel',val),
    KtF: (val)=>convertTemp('kel','far',val),
  },
  length: {

  }

};


let errorMsg = "Error: unit input was not a number; unit input was - "

// These are various functions for converting one unit of 
// temperature (either K, C, or F) into another of the three types
convertTemp = (inp, out, val) => {
  let validVals= ['kel','cel','far'];
  //console.log(inp,out,val)
  if (isNaN(parseFloat(val))) { return `${errorMsg} ${typeof val}` };
  if (validVals.indexOf(inp) === -1 || validVals.indexOf(out)=== -1) {return `Temperature unit names not recognized`}
  let res = 0;
  switch (inp) {
    case 'kel':
      out === 'cel' ? res = (parseFloat(val) - 273.15).toFixed(2) : res = ((parseFloat(val) - 273.15) * 1.8 + 32).toFixed(2);
      break;
    case 'cel':
      out === 'kel' ? res = (parseFloat(val) + 273.15).toFixed(2) : res = ((parseFloat(val)) * 1.8 + 32).toFixed(2);
      break;
    case 'far':
      out === 'kel' ? res = ((parseFloat(val) - 32) / 1.8 + 273.15).toFixed(2) : res = ((parseFloat(val)-32)/ 1.8).toFixed(2);
      break;
    default:
      return 'The temperature unit conversion you are looking for has not been written yet.'
  };
  return parseFloat(res);
}

// Use for converting lenghts
lengthConvert = (inp,out,val) => {
  if (isNaN(parseFloat(val))) { return `${errorMsg} ${typeof val}` };
  // List of metric multiplication factors
  let metMultFact = {
    // TtoG: Math.pow(10,3),
    // TtoM: Math.pow(10,6),
    // Ttok: Math.pow(10,9),
    // Ttoh: Math.pow(10,10),
    // Ttoda: Math.pow(10,11),
    // Ttom: Math.pow(10,12),
    // Ttod: Math.pow(10,13),
    // Ttoc: Math.pow(10,14),
    // Ttom: Math.pow(10,15),
    // Ttomicro: Math.pow(10,18),
    // Tton: Math.pow(10,21),
    // Ttop: Math.pow(10,24),
    toT: Math.pow(10,12),
    toG: Math.pow(10,9),
    toM: Math.pow(10,6),
    tok: Math.pow(10,3),
    toh: Math.pow(10,2),
    toda: Math.pow(10,1),
    tod: Math.pow(10,-1),
    toc: Math.pow(10,-2),
    tom: Math.pow(10,-3),
    tomicro: Math.pow(10,-6),
    ton: Math.pow(10,-9),
    top: Math.pow(10,-12)
  }
}

// export {unitConvert};