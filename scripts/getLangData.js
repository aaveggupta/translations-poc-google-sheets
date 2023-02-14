var fs = require("fs");

var fileName = "src/langData.json";

async function fetchLangData() {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxexVdUh9ZCO-TPf2w8e4OV6DwL7S4nLiol2D1A2tqBOkbyd4p6u2mGYScqisnzSEkt/exec"
    );
    const res = await response.json();
    fs.writeFileSync(fileName, JSON.stringify(res.data, null, "\t"), "utf8");
  } catch (error) {
    console.error(error);
  }
}

fetchLangData();
