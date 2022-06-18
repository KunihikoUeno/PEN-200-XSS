const express = require("express");
const fs = require('fs');

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.get("/collect", (req, _) => {
  const time = new Date().toLocaleString();
  const query = JSON.stringify(req.query);
  const output = `${time}: ${query}\n`;

  fs.appendFile("log.txt", output, (error) => {
    console.log(error ? "Failed" : "Succeeded")
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

