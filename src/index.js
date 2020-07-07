var http = require("http");
var fs = require("fs");

var error404 = "not_found.html";
var error = "";
try {
  fs.statSync("./" + error404);
  error = fs.readFileSync("./" + error404);
} catch (err) {
  error = "<html><body><h1>404 Not Found</h1></body></html>";
}

var count = 0;

//create a server object:
http
  .createServer(function(req, res) {
    let url = req["url"];
    switch (true) {
      case /counter$/.test(url):
        count++;
        res.write(
          "<html><body>あなたは" + count + "番目の来場者です</body></html>"
        );
        break;
      case /\/$/.test(url):
        url += "index.html";
        console.log("URL = " + url);
      default:
        try {
          fs.statSync("." + url);
          let text = fs.readFileSync("." + url);
          res.write(text); //write a response to the client
        } catch (err) {
          console.log("File is not found");
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write(error);
        }
    }
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
