import express from 'express';

let app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World<h1>');
})

app.listen(5555);
