import { nanoid } from "nanoid";
import supabase from "../config/supabase.js";

export const healthCheck = (req, res) => {
  res.send("App is running");
};

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }try{
  const { error } = await supabase
    .from("users")
    .insert({ name: name, email: email, password: password });
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  res.status(201).json({message:"User registered successfully"})
}catch(error){
  console.error(error);
  res.status(500).json({message:"Internal server error"})
  
}
};

export const addurl = async (req, res) => {
  const shortCode = nanoid(6);
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }
  const { error } = await supabase
    .from("urlList")
    .insert({ url: url, shorturl: shortCode });
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(201).json({
    message: "URL shortned successfully",
    shorturl: `${req.protocol}://${req.get("host")}/${shortCode}`,
  });
};

export const searchurl = async (req, res) => {
  const { get } = req.body;
  const { data, error } = await supabase.from("urlList").select();
  return res.json({ url: data });
};
