// Consider modules to be the same as JavaScript libraries.
// A set of functions you want to include in your application.


//*To include a module, use the require() function with the name of the module
var http = require("http");
//importing a module written in another file
var dt = require('./dt_module')



http
  .createServer((req, res) => {
   res.writeHead(200,{'Content-Type':'text/html'}) //HTTP Header
   res.write("hellow "+dt.dateTimeModule()+"\n");
   
   res.end()
  })
  .listen(8080);
 
