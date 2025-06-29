import express from "express";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import { nanoid } from "nanoid";

const app = express();
const PORT = 3000;
app.use(express.json());
const shortCode = nanoid(6)
dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

app.get("/", (req, res) => {
  res.send("app is runnig");
});

app.post("/addurl", async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }
  const { error } = await supabase.from("urlList").insert({ url: url, shorturl:shortCode });
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(201).json({ message: "URL shortned successfully",shorturl:`${req.protocol}://${req.get("host")}/${shortCode}` });
  
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
