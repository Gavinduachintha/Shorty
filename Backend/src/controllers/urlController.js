import { nanoid } from "nanoid";
import qrcode from "qrcode";
import supabase from "../config/supabase.js";

export const healthCheck = (req, res) => {
  res.send("App is running");
};

export const signup = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(401).json({ Message: "Email and password required" });
  }
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      return res.status(401).json({ Message: error });
    }
    return res
      .status(201)
      .json({ Message: "User created successfully", data: data.user });
  } catch (error) {
    return res.status(500).json({ Message: error.Message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "All fields required",
    });
  }
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      return res.status(401).json({ Message: error });
    }
    return res
      .status(201)
      .json({ Message: "Login success", data: data.session.access_token,user:data.user.id });
    
  } catch (error) {
    res.status(500).json({ Message: error.Message });
  }
  const { data, error } = await supabase
  .from('urls')
  .select(user_id)
  
};

export const addurl = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Missing or invalid token" });
  }

  const token = authHeader.split(" ")[1];
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser(token);
  if (!user || userError) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const shortCode = nanoid(6);
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }
  const { error } = await supabase
    .from("urls")
    .insert({ original_url: url, short_code:`${req.protocol}://${req.get("host")}/${shortCode}`, user_id: user.id });
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(201).json({
    message: "URL shortened successfully",
    shorturl: `${req.protocol}://${req.get("host")}/${shortCode}`,
  });
};
export const searchurl = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("urlList")
      .select("id, url, shorturl");

    if (error) throw error;

    return res.json({ url: data });
  } catch (err) {
    console.error("Supabase error:", err);
    return res.status(500).json({ error: err.message });
  }
};

