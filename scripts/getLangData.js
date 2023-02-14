var fs = require("fs");

var fileName = "src/langData.json";
var enFileName = "src/locale/en.json";
var hiFileName = "src/locale/hi.json";
var idFileName = "src/locale/id.json";

async function fetchLangData() {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxexVdUh9ZCO-TPf2w8e4OV6DwL7S4nLiol2D1A2tqBOkbyd4p6u2mGYScqisnzSEkt/exec"
    );
    const res = await response.json();
    fs.writeFileSync(fileName, JSON.stringify(res.data, null, "\t"), "utf8");
    const result = [];

    for (const lang of ["en", "hi", "id"]) {
      const obj = {};
      for (const item of res.data) {
        obj[item.key] = item[lang];
      }
      result.push(obj);
    }
    fs.writeFileSync(enFileName, JSON.stringify(result[0], null, "\t"), "utf8");
    fs.writeFileSync(hiFileName, JSON.stringify(result[1], null, "\t"), "utf8");
    fs.writeFileSync(idFileName, JSON.stringify(result[2], null, "\t"), "utf8");
  } catch (error) {
    console.error(error);
  }
}

fetchLangData();
