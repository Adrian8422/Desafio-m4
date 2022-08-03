import * as path from "path";
import * as express from "express";
import * as cors from "cors";
import { sendEmailToUser } from "./mailer";
import bodyParser = require("body-parser");

const app = express();
app.use(express.static("src"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
const port = process.env.PORT || 3003;
const pathResolve = path.resolve("", "src/index.html");
console.log("path", pathResolve);
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
