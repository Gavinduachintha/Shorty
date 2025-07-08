import { nanoid } from "nanoid";
// import bcrypt from "bcrypt";
import qrcode from "qrcode";
import supabase from "../config/supabase.js";

export const healthCheck = (req, res) => {
  res.send("App is running");
};

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Received signup request:", { name, email, password });

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    console.log("Supabase Auth Signup:", { data, error });

    const { user } = data;
    const { error: inserError } = await supabase.from("users").insert({
      id: user.id,
      name: name,
      email: email,
    });
    if (inserError) {
      return res.status(400).json({ message: inserError.message });
    }
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
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
    // const { data, error } = await supabase
    //   .from("users")
    //   .select()
    //   .eq("email", email)
    //   .single();
    // if (error || !data) {
    //   return res.status(401).json({ message: "Invalid email or password" });
    // }
    // const isMatch = await bcrypt.compare(password, data.password);
    // if (!isMatch) {
    //   return res.status(401).json({ message: "Invalid email or password" });
    // }
    return res.status(200).json({ message: "Login successfull", user: data });
  } catch (error) {
    console.error("Login error", error.message);
    return res.status(500).json({ message: "Internal server error" });
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
