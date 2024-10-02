const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const indexRouter = require("./routes/index");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit("ready");
  })
  .catch((e) => console.log(e));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/", indexRouter);

const port = process.env.PORT || 3000;
app.on("ready", () => {
  app.listen(port, () => {
    console.log(`Acessar http://localhost:${port}`);
    console.log(`Servidor executando na porta ${port}`);
  });
});
