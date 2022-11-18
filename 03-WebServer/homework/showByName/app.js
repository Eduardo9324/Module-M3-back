var fs  = require("fs")
var http  = require("http")

// Escribí acá tu servidor
var port = 3000
const server = http.createServer((req, res) => {
  var url = req.url
  fs.readFile(__dirname + "/images" + url, (err, data) => {
    if (date) {
      res.writeHead(200, { "Content-Type": "image/jpeg" })
      res.end(data)
    } else {
      res.writeHead(404, { "Content-Type": "Text/plain" })
      res.end("Not found")
    }
  })
})

server.listen(port, "127.0.0.1", () => console.log(`Escuchando port: ${port}`))
