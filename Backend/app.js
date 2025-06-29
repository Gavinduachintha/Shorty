import express from "express";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

const app = express();
const PORT = 3000;
app.use(express.json());
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
  const { error } = await supabase.from("urlList").insert({ url: url });
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(201).json({ message: "URL added successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
