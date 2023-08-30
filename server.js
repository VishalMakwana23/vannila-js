const http = require("http");
const getReq = require("./methods/get-request");
const postReq = require("./methods/post-request");
const putReq = require("./methods/put-request");
const deleteReq = require("./methods/delete-request");
let movies = require("./data/movies.json");
require("dotenv").config();

const PORT = process.env.PORT || 5001;
console.log("🚀 ~ file: server.js:4 ~ PORT:", PORT);

const server = http.createServer((req, res) => {
  req.movies = movies;
  console.log("req.method ", req.method);

  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;
    default:
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({
          title: "Not Found",
          message: "server js Route not found",
        })
      );
      res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
});
