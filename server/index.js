// console.log("Implement servermu disini yak 😝!");
const http = require("http");
const PORT = 7000;
const getPage = require("../public/helpers/getPage");
const readStaticFiles = require("../public/helpers/readStaticFiles");

// const onReq = (req, res) => {
//   const url = req.url;
//   switch (url) {
//     case "/home":
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(getPage("landingPage.html"));
//       return;
//     case "/cars":
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(getPage("landingPage.html"));
//       return;
//   }
// };

const onReq = (req, res) => {
  const url = req.url;

  if (url === "/") {
    // console.log({ data });
    getPage("landingPage.html", res);
  } else if (url === "/cars") {
    getPage("listCar.html", res);
  } else if (url.match(".js$")) {
    readStaticFiles(url, res, "text/js", "UTF-8");
  } else if (url.match(".css$")) {
    readStaticFiles(url, res, "text/css", "UTF-8");
  } else if (url.match(".png$")) {
    readStaticFiles(url, res, "image/png");
  } else if (url.match(".jpg$")) {
    readStaticFiles(url, res, "image/png");
  }
};

const server = http.createServer(onReq);
server.listen(PORT, "localhost", () => {
  console.log(`Listening port ${PORT}`);
});
