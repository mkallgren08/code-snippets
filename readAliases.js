// Node file for reading the bash.bashrc files and returning all of the aliases and the custom command file and returning the custom commands
const fs = require('fs');
const bashPath = process.env.BASH_Path + '/bash.bashrc';
fs.readFile(bashPath, 'utf8',  read =(err, data) => {
  if (err) { console.log(err); throw err;};
  // console.log(data);
  getContent('# Alias List', data);
});
console.log(bashPath);

getContent = (key, content) => {
  content = content.split(key);
  console.log(`Type of content ${typeof content}`)
  //if (typeof content==='[object Array]')
  //console.log(content[1]);
  if(content[1].indexOf('#custom_commands_source')>-1){
    content = content[1].split('#custom_commands_source');
    content = content[0]
  } else {
    content = content[1]
  }
  console.log(content)
}