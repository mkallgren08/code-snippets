
// WORK IN PROGRESS!!!

// DEPENDENCIES
// =====================================
// Import the FS package for read/write.
const fs = require("fs");
const getopts = require("getopts")

// Module
// =====================================
// exports.jsonMod={

// }


// universal functions
strToArr = (string, delim) => {
    // creates a "rough draft" of the array by splitting the string data by the delim specified by the user
    let strArrRough = string.split(delim);
  
    // uses forea() to clean up the rough array
    let strArr = [];
    strArrRough.forEach(e => {
      // If the element 'e' is truthy, trim the element and push it to the final array
      if (e) {strArr.push(e.trim())}
    });
    console.log(strArr);
    return strArr
}


// Writes to the log.txt file
writeToLog = (data) => {
  // Append the JSON data and add a newline character to the end of the log.txt file
  fs.appendFile("log.txt", JSON.stringify(data) + "\n", function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("log.txt was updated!");
  });
};

// Function for running a command based on text file
var doWhatItSays = function() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    console.log(data);

    var dataArr = data.split(",");

    if (dataArr.length === 2) {
      pick(dataArr[0], dataArr[1]);
    }
    else if (dataArr.length === 1) {
      pick(dataArr[0]);
    }
  });
};

// Takes a string and splits via a delimiter into an array. It then takes the array and puts it into a JSON file for reading in the future
makeJson = (args) => {
  // args[0] = string, args[1] = delim, args[2]=tableTitle/key, args[3] = title
  // Use the 'strToArr' helper function to format an array
  let strArr=strToArr(args.str, args.delim)
  // Create an obj to push to a JSON with a key named args.key
  let obj = {[args.key]:strArr}
  // convert obj to a stringified JSON
  let json = JSON.stringify(obj,null,2)
  // write json to a file in this file's directory
  fs.writeFile(`${args.file}`, json, 'utf8', () => {console.log("Check the file!")})
}

appendNewKeyToJson = (args, title, tableName, newDataTable ,newData) => {
  // args[0] = title, args[1] = tableName, args[2]=newDataTable, args[3] = newData
  // pass the `args` to a local variable called 'params' for access in the fs.readFile callback
  let params=args
  fs.readFile(args.file, 'utf8', (err, data) => {
    if (err){
        console.log(err);
    } else {
    // console.log(`checking that the args were passed through properly: ${JSON.stringify(params,null,2)}`)
    let obj = JSON.parse(data); //now JSON file an object
    // console.log(obj)
    let strArr=strToArr(params.str, params.delim)
    // add the new key and array to the obj
    obj[params.key] = strArr 
    // console.log(obj)
    json = JSON.stringify(obj,null,2); //convert it back to json
    fs.writeFile(args.file, json, 'utf8', () => {console.log("Check the file!")}); // write it back 
}});
}

// Function for determining which command is executed
var pick = function(args) {
  console.log(`Case name: ${args.cmd}`)
  // first args is case name
  switch (args.cmd) {
  case "make-json":
    console.log(args)
    makeJson(args);
    break;
  case "new-key":
    console.log(args)
    appendNewKeyToJson(args);
    break;
  case "append-to-key":
    console.log(args)
    appendToJsonKey(args);
    break;
  case "do-what-it-says":
    doWhatItSays();
    break;
  case "log":
    writeToLog(args.data)
    break;
  default:
    console.log("Unknown option.");
    
  }
};

// Function which takes in command line arguments and executes correct function accordingly
var runThis = function(args) {
  console.log("Reading args")
  console.log (args)
  pick(args);
};

// MAIN PROCESS
// =====================================
// creates a list of all given parameters

// Documentation of getopts is here https://www.npmjs.com/package/getopts
const opts=getopts(process.argv.slice(2), {
  alias: {
    // Initial operation in the 'runThis' case statement
    cmd: ["c","cmd","op"],
    key: ["k", "key", "table"],
    delim: "d",
    file: "f",
    str: ["data", "string", "info"]
  }
}
    
)

// console.log(opts)

runThis(opts);
