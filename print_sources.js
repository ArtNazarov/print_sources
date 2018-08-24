var args = process.argv.slice(2);
if (args.length == 0){
  console.log('developed by admin@artnazarov.ru');
  console.log('usage: node print_sources.js path filename');
  process.exit(0);
};
var dirName = args[0];
var writeTo = args[1];
var recursive = require("recursive-readdir");
var fs = require('fs');


recursive(dirName, function (err, files) {
  
   var content = "";
   var data = "";

  
  
   if (err) { throw err; };
   console.log(files);
  // `files` is an array of file paths
    files.map( (filename, i)=>
    {
     data = data+"\n\r ----- "+filename+"----------\n\r";
     var content = fs.readFileSync(filename);
     console.log(String(content));
     data = data + String(content).split(/\r?\n/).map((item,i)=>{return String(i+1)+' '+item}).join("\n\r");
    });
  

   console.log(data);
   fs.writeFileSync(writeTo, data);
   
}); 
  