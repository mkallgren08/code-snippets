// Node file for reading the bash.bashrc files and returning all of the aliases and the custom command file and returning the custom commands
const fs = require('fs');
const bashAliasPath = process.env.BASH_Path + '/bash.bashrc';
const bashCustomCommandsPath = process.env.BASH_Custom_Commands + '/.my_custom_commands.sh'
//console.log(process.argv)

getContent = (key, content) => {
  return new Promise((resolve, reject) => {
    if (key) {
      content = content.split(key);
      // console.log(`Type of content ${typeof content}`)
      //if (typeof content==='[object Array]')
      //console.log(content[1]);
      if (content[1].indexOf('#custom_commands_source') > -1) {
        content = content[1].split('#custom_commands_source');
        content = content[0]
      } else {
        content = content[1]
      }
      content = `
      ================= Aliases =========================================================
      ${content}
      `
      //console.log(content);

    } else {
      content = content.split("!/bin/bash"); 
      content = content[1];
      content = `
      ======== Custom Commands and Functions ============================================
      ${content}
      `
      //console.log(content);

    };
    // console.log(`Console Log: ${content}`)
    content ? resolve(content) : reject('There was a problem getting the content!')
  })

};

readFile = (path, key) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', read = (err, data) => {
      //if (err) { console.log(err); throw err; };
      getContent(key, data).then((res) => {
        err ? reject(err) : resolve(res);
      })

      // return getContent(key, data);
    });
  })

};

getBoth = () => {
  return new Promise((resolve,reject)=>{
    readFile(bashAliasPath, '# Alias List').then((res1) => {
      let content = res1;
      readFile(bashCustomCommandsPath, null).then((res2) => {
        if (content && res2){
          content = `
          ${content}
  
          ${res2}
          `;
          resolve(content);
        } else {
          reject('Error - there was a problem concatenating data!')
        }
 
      });
    });
  })
}

compileOutput = (flag) => {
  let content;
  switch (flag) {
    case '-a':
      readFile(bashAliasPath, '# Alias List').then((res) => {
        console.log(`>>>>>>>>>>>> Res:
       ${res}`);
      });
      break;
    case '-c':
      readFile(bashCustomCommandsPath, null).then((res) => {
        console.log(`>>>>>>>>>>>> Res:
       ${res}`);
      });
      break;

    case '-ac':
      getBoth().then((res)=>{
        console.log(`>>>>>>>>>>>> Res:
        ${res}`);
      });
      break;

    default:
      let error = `Error, please use one of the following flags: 
    \t-a = List aliases
    \t-c = List commands/functions
    \t-ac = List aliases and commands/functions
    `;
      console.log(error);
      return error;
  }
}
compileOutput(process.argv[2])


//readFile(bashAliasPath,'# Alias List')
