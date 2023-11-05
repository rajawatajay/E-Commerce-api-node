const express = require("express");
const app = express();
const { connectDb } = require("./config/db");

const PORT = 5001 | process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, async () => {
  await connectDb();                
  console.log("ecommerce api listning on PORT :", PORT);
})