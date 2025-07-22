import express from "express";
import axios from "axios";
import path from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

// __dirname correct path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// setting
const app = express();
const PORT = 5000;
const API_URL = "https://afghan-proverbs-api-1-iolb.onrender.com"; // Backend URL Path

// set static files and ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// Show Proverbs
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.render("index", { proverbs: response.data });
  } catch (error) {
    res.send("خطا در دریافت اطلاعات!");
  }
});

// Add Proverb Page
app.get("/add", (req, res) => {
  res.send("این مسیر غیرفعال شده است. لطفاً از دکمه 'افزودن' استفاده کنید.");
});

// Add Proverb
app.post("/add", async (req, res) => {
  try {
    await axios.post(API_URL, req.body);
    res.redirect("/");
  } catch (error) {
    res.send("این مسیر غیرفعال شده است. لطفاً از دکمه 'افزودن' استفاده کنید.");
  }
});

// Edit Page
app.get("/edit/:id", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/${req.params.id}`);
    res.render("edit", { proverb: response.data });
  } catch (error) {
    res.send("این مسیر غیرفعال شده است. لطفاً از دکمه 'افزودن' استفاده کنید.");
  }
});

// Edit
app.post("/edit/:id", async (req, res) => {
  try {
    await axios.put(`${API_URL}/${req.params.id}`, req.body);
    res.redirect("/");
  } catch (error) {
    res.send("این مسیر غیرفعال شده است. لطفاً از دکمه 'افزودن' استفاده کنید.");
  }
});

// Show Details
app.get("/proverb/:id", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/${req.params.id}`);
    res.render("single", { proverb: response.data });
  } catch (error) {
    res.send("این مسیر غیرفعال شده است. لطفاً از دکمه 'افزودن' استفاده کنید.");
  }
});

// Delete Proverb
app.get("/delete/:id", async (req, res) => {
  try {
    await axios.delete(`${API_URL}/${req.params.id}`);
    res.redirect("/");
  } catch (error) {
    res.send("این مسیر غیرفعال شده است. لطفاً از دکمه 'افزودن' استفاده کنید.");
  }
});

app.listen(PORT, () => {
  console.log(`Frontend running on http://localhost:${PORT}`);
});
