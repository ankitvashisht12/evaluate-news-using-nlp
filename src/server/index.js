const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const FormData = require("form-data");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

dotenv.config();

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("dist"));

app.get("/", async function (req, res, next) {
  res.sendFile("dist/index.html");
});

app.post("/analyze", async function (req, res, next) {
  const key = process.env.MEANING_CLOUD_LINCENSE_KEY;
  const baseUrl = "https://api.meaningcloud.com/sentiment-2.1";
  const formData = new FormData();

  const lang = req.query.lang || "en";
  const model = req.query.model || "general";

  formData.append("key", key);
  formData.append("lang", lang);
  formData.append("txt", req.body.text);
  formData.append("model", model);

  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log("data", JSON.stringify(data, null, 2));
    return res.json({
      status: "success",
      polarity: data.score_tag === "P" ? "POSITIVE" : "NEGATIVE",
      subjectivity: data.subjectivity,
      text: req.body.text,
    });
  } catch (err) {
    console.error("Error in analyzing data", err);
    return res.json({ status: "error", message: "Error in analyzing data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
