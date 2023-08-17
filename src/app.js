import express from "express";

const app = express();

app.get("/algo-simple", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }

  res.send(sum.toString());
});

app.get("/algo-complejo", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 5e8; i++) {
    sum += i;
  }

  res.send(sum.toString());
});

app.get("/", (req, res) => {
  res.send("test Artillery!");
});

app.listen(8080, () => console.log("http://localhost:8080"));
