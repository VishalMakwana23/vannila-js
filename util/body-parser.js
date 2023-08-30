module.exports = async (request) => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      request.on("data", (chunk) => {
        body += chunk;
      });
      request.on("end", () => {
        resolve(JSON.parse(body));
      });
    } catch (error) {
      console.log("body-parser error :", error);
      reject(error);
    }
  });
};
