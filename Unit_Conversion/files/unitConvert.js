
let unitConvert = {
  CtF: (val)=>convertTemp('cel','far',val),
  CtK: (val)=>convertTemp('cel','kel',val),
  FtC: (val)=>convertTemp('far','cel',val),
  FtK: (val)=>convertTemp('far','kel',val),
  KtC: (val)=>convertTemp('kel','cel',val),
  KtF: (val)=>convertTemp('kel','far',val),
};

let errorMsg = "Error: unit input was not a number; unit input was - "

// These are various functions for converting one unit of 
// temperature (either K, C, or F) into another of the three types
convertTemp = (inp, out, val) => {
  //console.log(inp,out,val)
  if (isNaN(parseFloat(val))) { return `${errorMsg} ${typeof val}` };
  if ((inp === 'kel' || inp === 'cel' || inp === 'far') && ( out === 'kel' || out === 'cel' || out === 'far')) {/*console.log("Units are good")*/ }
  else { return `Temperature unit names not recognized` };
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

// export {unitConvert};