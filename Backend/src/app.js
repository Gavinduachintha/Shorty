import express from "express";
import urlRoutes from "./routes/urlRoutes.js";
import session from "express-session";
import cors from "cors"
const app = express();
app.use(express.json());

app.use(cors({
    // origin: "http://localhost:5174", // your frontend port
  }));

app.use(session({
    secret: process.env.SESSION_SECRET || "fallback-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
       secure: false
       
    }
}))

app.use("/", urlRoutes);

export default app;
