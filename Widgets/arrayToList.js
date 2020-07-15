console.log('Starting program');

let testArray = [1,2,3,4,5,6,7,8,9]



arrayToList = (arr) => {
  let res = {};

  for(let i = arr.length-1; i<1; i--){
    console.log('reverse loop started')
    // res.value = arr.shift();
    // res.rest = arr
    // console.log(res)
    let subres = {
      value: arr[i],
      rest: arr.slice(i-1,arr.length-1)
    }
    console.log(subres)
  }

  // arr.forEach(index => {
  //   console.log(index)
  //   res.value = arr.shift();
  //   res.rest = arr
  //   console.log(res)
  // });
};

arrayToList(testArray);