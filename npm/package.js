// packages includes many modules which are ready made
// inorder to  install a package run command //*npm install packageName
// then the package will be installed to a folder called node_modules and we can use that

//using uppercase module

var http = require('http');
var uc = require('upper-case')

http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':"text/html"});
  res.write(uc.upperCase("hellllllo"));
  res.end();
}).listen(100);
