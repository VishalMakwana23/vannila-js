const fs = require("fs");
const path = require("path");

module.exports = (data) => {
  console.log("data 13 : -", data);
  console.log("stringify data ", JSON.stringify(data));
  console.log("data : -", data);
  try {
    fs.writeFileSync(
      path.join(__dirname, "..", "data", "movies.json"),
      JSON.stringify(data),
      "utf-8"
    );
  } catch (error) {
    console.log("Write to file Error : ", error);
  }
};
