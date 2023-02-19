const express = require('express');
const app = express();

app.use(express.json()); // for parsing application/json

app.get('/', (req, res) => {
  res.send({
    message: 'hola',
  });
});

app.get("/test", (req, res) => {
  res.send({
    message: 'test',
  });
});

app.post("/sum", async (req, res) => {
  const { a, b } = req.body;
  let c = a + b;
  res.json({ result: c})
});

app.post('/product', (req, res) => {
  const { a, b } = req.body;
  let c = a * b;
  res.json({
    result: c
  });
});

app.post("/sumArray", (req, res) => {
  const { array, num } = req.body;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === num) {
        return res.json({ result: true });
      }
    }
  }
  return res.json({ result: false });
});

module.exports = app; // Exportamos app para que supertest session la pueda ejecutar
