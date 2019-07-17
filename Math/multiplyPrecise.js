// Takes two decimal inputs, converts them to integers - by multiplying the decimals by a multiple of 10 - multiplys the integers,
// then divides that result but the value of the 10-multiple squared, i.e if you take 3 and 0.1, you multiply both by 10 to get 30 and 1, 
// then you divde the result by 100 (10 ^ 2) to get 0.3. The issue of multiplying 3 and 0.1 in JS is that you get a result of .30000000004 due
// to binary conversion errors in decimal values; integers do not have these errors

multiplyPrecise = (a, b) =>{
  console.log(a,b)
  let c = a.toString(10), d=b.toString(10), con1 = 10, con2 = 10;

  if (c.indexOf('.') > -1){console.log('decimal for c'); c = c.split('.'); c= c[1]; con1 = Math.pow(con1, parseInt(c.length))}
  if (d.indexOf('.') > -1){console.log('decimal for d'); d = d.split('.'); d = d[1]; con2 = Math.pow(con2, parseInt(d.length))}

  let con =0;
  if (con1 >= con2 ){con = con1} else { con = con2}

  console.log(c,d,con)
  a= a*con; b = b*con
  console.log(a, b)
  let num = a *  b; 
  console.log(a, b)
  // num = parseFloat(num.toFixed(1))
  console.log (num)

  num = num/Math.pow(con,2);
  console.log(num);

  return num;
}