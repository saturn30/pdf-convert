const fs = require("fs");
const imgToPDF = require("image-to-pdf");

(function main() {
  imgToPDF(getPages(), "A4").pipe(fs.createWriteStream("output.pdf"));
})();

function getPages() {
  return fs
    .readdirSync("./images")
    .sort((a, b) => getPageIndex(a) - getPageIndex(b))
    .map((fileName) => `./images/${fileName}`);
}

function getPageIndex(fileName) {
  return fileName.replace(/[^0-9]/g, "");
}
