// Note - run 'yarn add xmlhttprequest' for this to work

const readline = require('readline');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let path = null;

process.argv[2]?path=process.argv:null;

loadFile = (path) => {
  let res = null;
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", path, false);
  xmlhttp.send();
  xmlhttp.status===200?res=xmlhttp.responseText:null;
  return res;
}
// path?console.log(loadFile(path)):console.log('Input "./test.txt"')

// export default loadFile;

// loadFile = (path) => {
//     let res = null;
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       let contents = e.target.result;
//       console.log(contents);
//     }
//     reader.send();
//     reader.status===200?res=xmlhttp.responseText:null;
//     return res;
// }

path?console.log(loadFile(path)):console.log('Input "./test.txt"')