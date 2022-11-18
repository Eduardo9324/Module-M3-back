var fs = require("fs");
const request = require("request");

module.exports = {
  pwd: (args) => process.stdout.write(process.cwd()),
  date: (args) => process.stdout.write(Date()),
  ls: (args) => {
    fs.readdir(".", function (err, files) {
      if (err) throw err;

      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      });
    });
  },
  echo: (args) => {
    process.stdout.write(args.join(" "));
  },
  cat: (args) => {
    fs.readFile(args[0], 'utf-8', (err, data) => {
      if (err) throw err;
      process.stdout.write(data);
    })
  },
  head: (args) => {
    fs.readFile(args[0], "utf-8", (err, data) => {
      if (err) throw err;
      process.stdout.write(data.split("\n").slice(0,10).join("\n"));
    });
  },
  tail: (args) => {
    fs.readFile(args[0], "utf-8", (err, data) => {
      if (err) throw err;
      process.stdout.write(data.split("\n").slice(-10).join("\n"));
    });
  },
  curl: (args) => {
    request(args[0], (err, response, body) => {
      if (err) throw err;
      process.stdout.write(body)
    }) 
  }

};
