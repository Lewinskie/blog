const express = require("express");
const path = require("path");
const config = require(".env");

config.config();
const configValues = process.env;
const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  console.log(
    `🚀 Client ready at http://localhost:${configValues.PORT || 5000}`
  );

  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(configValues.PORT || 5000);
