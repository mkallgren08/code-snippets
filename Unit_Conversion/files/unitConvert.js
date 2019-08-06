
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
    // Convert between metric units
    metCon: (inp, out, val) => convertMetricUnit(inp, out, val),
    // Convert between imperial units
    impCon: (inp, out, val) => convertImperialLength(inp, out, val),
    // Convert between imperial and metric systems
    sysCon: (con,inp,out,val) => convertMetToImp(con,inp,out,val)
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
// Use for converting metric lengths
convertMetricUnit = (inp, out, val) => {
  let metFactor = {
    "tera": 12, "giga": 9, "mega": 6, "kilo": 3,
    "hecta": 2, "deca":1, "prime": 0, "deci": -1, "centi": -2,
    "milli":-3, "micro":-6, "nano": -9, "pico":-12
  };

  let i = metFactor[inp]; let o = metFactor[out]; let v = parseFloat(val);
  if (i === undefined || o === undefined || isNaN(v)) {
    let errorMsg = `Error, please check the ${isNaN(v) ? `initial metric numeric` : (!i ? `metric input name` : `metric output name`)} value`;
    console.log(errorMsg);
    return errorMsg;
    
  }
  // Finds value of x for the 10^x factor to multiply the value by
  console.log(exp10(i), exp10(o))
  let finalExp = exp10(i) / exp10(o)
  console.log(`Total Exponent: ${finalExp}`)
  // if finalExp is less than 1, use the multiply precise function to account for non-integer mult errors
  // else it just multiples the two values 
  let res = finalExp>=1?parseFloat((v * finalExp)):parseFloat(multiplyPrecise(v,finalExp  ));
  // let res = parseFloat(multiplyPrecise(v,finalExp));
  console.log(`Final result: ${res}`)
  return res;
};
// Use for converting imperial lengths
convertImperialLength = (inp,out,val) => {
  
  // Note: for imperial units, everything has to be converted to inch first before being converted to final units
  impFactors={
    "in": 1, "ft": 12, "yd": 36, "chain": 792, "furlong": 7920, "mile": 63360,
    "league": 190080, "fathom": 72.96012, "cable": 7296.012, "n_mile": 72960.12
  }
  let i = impFactors[inp]; let o = impFactors[out]; let v = parseFloat(val);
  if (i === undefined || o === undefined || isNaN(v)) {
    let errorMsg = `Error, please check the ${isNaN(v) ? `initial imperial numeric` : (!i ? `imperial input name` : `imperial output name`)} value`;
    console.log(errorMsg);
    return errorMsg;
  }
  // 1) Convert val to inches using by multiplying val*inp factor
  // 2) Convert val to output value by dividing val/inp factor
  // 3) return the final val
  return (val*impFactors[inp])/impFactors[out];
};
// convert from metric to imperial
convertMetToImp = (con,inp,out,val) =>{
  // Conversion factor of inches to meters
  let in_to_m = .0254;
  // If con = 'met' use in_to_m; else use 1/in_to_m
  if (con==='met'){
    val = convertMetricUnit(inp,'prime',val) 
    console.log(val)
    val = val/in_to_m;
    return parseFloat(convertImperialLength("in",out, (val)).toFixed(4));
  }else{
    val = convertImperialLength(inp,'in',val) 
    console.log(val)
    val = val*in_to_m;
    return parseFloat(convertMetricUnit("prime",out, (val)).toFixed(4));
  }
}
 
exp10 = (ex) => { return Math.pow(10, ex) }; 

// export {unitConvert};
convertEnergy = (inp,out,val) => {
  let energyFactors = {
   // Joule  // electronvolt        //Reciprocal cm, 
                                    // from eq: E = hv =hc/lambda
    "J": 1,   "eV": 1.60217653e-19, "cm-1": 1.98630e-23,
    "kcal/mol": 6.95e-21, "kJ/mol": 1.66e-21
  }

}
// Allows precise multiplication of non-integer values
multiplyPrecise = (a, b) =>{
  console.log(`First item: ${a}; Second item: ${b}`)
  // con = exponent value
  let c = a.toString(10), d=b.toString(10)
  var con1 = 10, con2 = 10;
  console.log(`Value of c: ${c}; Value of d: ${d}`)
  if (c.indexOf('.') > -1 || c.indexOf('e-')> -1 || c.indexOf('e+')){
    /*console.log('decimal for c');*/ 
    (c.indexOf('.') > -1)?(
      c = c.split('.')
    ):(
      c.indexOf('e+')>-1?(
        c=c.split('e+')
      ):(
        c=c.split('e-')
      )
    ); 
    // c= c[1];
    console.log(`Value of c: ${c}`); 
    (c.indexOf('.') > -1)?(
      con1 = Math.pow(con1, parseInt(c.length))
    ):(
      con1=Math.pow(con1,c)
    );
  };
  if (d.indexOf('.') > -1 || d.indexOf('e-')> -1 || c.indexOf('e+')){
    /*console.log('decimal for d');*/ 
    (d.indexOf('.') > -1)?(
      d = d.split('.')
    ):(
      d.indexOf('e+')>-1?(
        d=d.split('e+')
      ):(
        d=d.split('e-')
      )
    ); 
    d = d[1]; 
    console.log(`Value of d: ${d}`); 
    // (d.indexOf('.') > -1)?(
    //   con2 = Math.pow(con2, parseInt(d.length))
    // ):(
    //   con2=Math.pow(con2,d)
    // );
    con2 = Math.pow(con2, parseInt(d.length))
  };

  let con =0;
  console.log(`Multiple for first item ${con1}; Multiple for second item ${con2} `)
  if (con1 >= con2 && con1 !== Infinity){con = con1} else { con = con2}
  console.log(con)
  //console.log(c,d,con)
  a= Math.round(a*con); b = Math.round(b*con);
  console.log(a,b)
  num = a *  b; 
  //console.log(a, b)
  // num = parseFloat(num.toFixed(1))
  //console.log (num)

  num = num/Math.pow(con,2);
  //console.log(num);

  return num;
}