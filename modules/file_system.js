var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    fs.readFile("node_js/demofile1.html", function (err, data) {
      if (err) {
        console.log(err);
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);


// writes hey man to demotext file
http
  .createServer(function (req, res) {
    fs.appendFile("node_js/demotext.txt", "heyy man", (err) => {
      if (err) {
        console.log("error");
      } else {
        console.log("success");
      }
    });
  })
  .listen(8000);


 http.createServer((req,res)=>{
   fs.unlink('node_js/demotext.txt',(err)=>{
    if (err) {
        console.log("error");
        
    }else{
        console.log("completed");    
    }
   })
 }).listen(700);

//! READ FILE

//* fs.readFile(path, options, callback);
/*
- path: (string) The file path to read.
- callback: (function)
err: (Error) Error object if an error occurred; otherwise, null.
data: (Buffer or string) The file contents.
*/

//! UPDATE OR CREATE (IF FILE DOESN'T EXIST)

//* 1) fs.appendFile(path, data, options, callback);
//  adds the command given in constructor to existing file. if file doesnt exist, a new file will be created
/*
- path: (string) The file path where to append the data.
- data: (string or Buffer) The data to append to the file.
- callback: (function)
err: (Error) Error object if an error occurred; otherwise, null.
*/

//* 2) fs.writeFile(path, data, options, callback);

//replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created
/* 
- path: (string) The file path where to write the data.
- data: (string or Buffer) The data to write to the file.
- callback: (function)
err: (Error) Error object if an error occurred; otherwise, null.
*/


//! DELETING

//* fs.unlink(path, callback);
/*
- path: (string) The file path to delete.
- callback: (function)
err: (Error) Error object if an error occurred; otherwise, null.
*/

//! RENAME

//* fs.rename(oldPath, newPath, callback);
/*
- oldPath: (string) The current file path.
- newPath: (string) The new file path.
- callback: (function)
err: (Error) Error object if an error occurred; otherwise, null.
*/

//! RETRIEVE INFORMATION

//* fs.stat(path, callback);
/*
- path: (string) The file path to retrieve information.
- callback: (function)
err: (Error) Error object if an error occurred; otherwise, null.
stats: (fs.Stats) An object containing information about the file.
*/