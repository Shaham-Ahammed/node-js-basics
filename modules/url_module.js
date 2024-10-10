//! PRASING THE URL

//* url.parse(urlString, parseQueryString, slashesDenoteHost);

/*
- urlString: (string) The URL string that you want to parse.
parseQueryString: (boolean, optional)
If set to true, the query property will be parsed into an object using querystring.parse(). Default is false.
*/

var http = require('http');
var url = require('url')
var fs = require('fs')

let u ="https://console.firebase.google.com/u/0/project/trim-spot/overview";
let parsed = url.parse(u,true)

//* important query parameters

//   protocol: 'https:',
//   host: 'console.firebase.google.com',
//   path: '/u/0/project/trim-spot/overview',

//opens the file http://localhost:800/a.txt if we go with this address

http.createServer((req,res)=>{
 let par = url.parse(req.url,true);
  let file ="."+par.path;
  fs.readFile("modules/"+file,(err,data)=>{
    if (err) {
        res.write("404 error "+err)
        res.end();
    }else{
        res.write(data);
        res.end();
    }
  })

}).listen(800);