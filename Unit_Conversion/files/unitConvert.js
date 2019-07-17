
let unitConvert = {
  temp: {
    CtF: (val) => convertTemp('cel', 'far', val),
    CtK: (val) => convertTemp('cel', 'kel', val),
    FtC: (val) => convertTemp('far', 'cel', val),
    FtK: (val) => convertTemp('far', 'kel', val),
    KtC: (val) => convertTemp('kel', 'cel', val),
    KtF: (val) => convertTemp('kel', 'far', val),
  },
  length: {
    metCon: (inp, out, val) => convertLength(inp, out, val)
  }

};


let errorMsg = "Error: unit input was not a number; unit input was - "

// These are various functions for converting one unit of 
// temperature (either K, C, or F) into another of the three types
convertTemp = (inp, out, val) => {
  let validVals = ['kel', 'cel', 'far'];
  //console.log(inp,out,val)
  if (isNaN(parseFloat(val))) { return `${errorMsg} ${typeof val}` };
  if (validVals.indexOf(inp) === -1 || validVals.indexOf(out) === -1) { return `Temperature unit names not recognized` }
  let res = 0;
  switch (inp) {
    case 'kel':
      out === 'cel' ? res = (parseFloat(val) - 273.15).toFixed(2) : res = ((parseFloat(val) - 273.15) * 1.8 + 32).toFixed(2);
      break;
    case 'cel':
      out === 'kel' ? res = (parseFloat(val) + 273.15).toFixed(2) : res = ((parseFloat(val)) * 1.8 + 32).toFixed(2);
      break;
    case 'far':
      out === 'kel' ? res = ((parseFloat(val) - 32) / 1.8 + 273.15).toFixed(2) : res = ((parseFloat(val) - 32) / 1.8).toFixed(2);
      break;
    default:
      return 'The temperature unit conversion you are looking for has not been written yet.'
  };
  return parseFloat(res);
}

// Use for converting lenghts
convertLength = (inp, out, val) => {
  let metFactor = {
    "tera": 12, "giga": 9, "mega": 6, "kilo": 3,
    "hecta": 2, "deca":1, "prime": 0, "deci": -1, "centi": -2,
    "milli":-3, "micro":-6, "nano": -9, "pico":-12
  };

  let i = metFactor[inp]; let o = metFactor[out]; let v = parseFloat(val);
  if (i === undefined || o === undefined || isNaN(v)) {
    return `Error, please check the ${isNaN(v) ? `initial numeric` : (!i ? `input name` : `output name`)} value`;
  }
  // Finds value of x for the 10^x factor to multiply the value by
  let finalExp = exp10(i) / exp10(o)
  console.log(finalExp)
  // if finalExp is less than 1, use the multiply precise function to account for non-integer mult errors
  // else it just multiples the two values 
  let res = finalExp>=1?parseFloat((v * finalExp)):parseFloat(multiplyPrecise(v,finalExp  ));
  // let res = parseFloat(multiplyPrecise(v,finalExp));
  return res;
}

exp10 = (ex) => { return Math.pow(10, ex) };

// export {unitConvert};

// Allows precise multiplication of non-integer values
multiplyPrecise = (a, b) =>{
  //console.log(a,b)
  let c = a.toString(10), d=b.toString(10), con1 = 10, con2 = 10;

  if (c.indexOf('.') > -1 || c.indexOf('e-')> -1){/*console.log('decimal for c');*/ (c.indexOf('.') > -1)?(c = c.split('.')):(c.indexOf('e+')>-1?(c=c.split('e+')):(c=c.split('e-'))); c= c[1]; (c.indexOf('.') > -1)?(con1 = Math.pow(con1, parseInt(c.length))):(con1=Math.pow(con1,c));}
  if (d.indexOf('.') > -1 || d.indexOf('e-')> -1){/*console.log('decimal for d');*/ (d.indexOf('.') > -1)?(d = d.split('.')):(d.indexOf('e+')>-1?(d=d.split('e+')):(d=d.split('e-'))); d = d[1]; (d.indexOf('.') > -1)?(con2 = Math.pow(con2, parseInt(d.length))):(con2=Math.pow(con2,d));}

  let con =0;
  console.log(con1, con2)
  if (con1 >= con2 && con1 !== Infinity){con = con1} else { con = con2}

  console.log(c,d,con)
  a= Math.round(a*con); b = Math.round(b*con);
  console.log(a, b)
  num = a *  b; 
  //console.log(a, b)
  // num = parseFloat(num.toFixed(1))
  //console.log (num)

  num = num/Math.pow(con,2);
  //console.log(num);

  return num;
}