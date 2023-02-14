var fs = require("fs");

var fileName = "src/langData.json";

async function fetchLangData() {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxexVdUh9ZCO-TPf2w8e4OV6DwL7S4nLiol2D1A2tqBOkbyd4p6u2mGYScqisnzSEkt/exec"
    );
    const res = await response.json();

    // Create a new file in the src folder
    // const handle = await window.showSaveFilePicker({
    //   suggestedName: "langData.json",
    //   types: [
    //     {
    //       description: "JSON Files",
    //       accept: { "application/json": [".json"] },
    //     },
    //   ],
    //   excludeAcceptAllOption: true,
    // });

    // // Write the data to the file
    // const writable = await handle.createWritable();
    // await writable.write(JSON.stringify(data.data));
    // await writable.close();
    fs.writeFileSync(fileName, JSON.stringify(res.data, null, "\t"), "utf8");

    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
}

fetchLangData();
