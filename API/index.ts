import * as path from "path";
import * as express from "express";
let cors = require("cors");

import { sendEmailToUser } from "./mailer";
import bodyParser = require("body-parser");

const app = express();
app.use(express.static("dist"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
const port = process.env.PORT || 3002;
const pathResolve = path.resolve("", "./dist/index.html");

console.log("path", pathResolve);

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://portfolio-6357a.web.app",
    "http://127.0.0.1:8080"
  ); // Quité la barra al final de la URL
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
/// SENT EMAIL
app.post("/email", async (req, res) => {
  const { emailUser, emailFrom, name, message, cellphone } = req.body;
  if (!req.body) {
    res.status(404).json({ error: "faltan datos" });
  } else {
    const outputData = await sendEmailToUser(
      emailUser,
      emailFrom,
      name,
      message
    );
    res.json({ message: "enviado" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(pathResolve);
});

app.listen(port, () => {
  console.log(`service in http://localhost:${port}`);
});
