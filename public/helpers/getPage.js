const fs = require("fs");
const path = require("path");

const getPage = (pageName, res) => {
  const filePath = path.join("./public", pageName);
  fs.readFile(filePath, "UTF-8", (err, html) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  });
};

module.exports = getPage;
