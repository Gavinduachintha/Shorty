import express from "express";
import {
  healthCheck,
  addurl,
  searchurl,
  signup,
  login,
} from "../controllers/urlController.js";


router.get("/", healthCheck);
router.post("/addurl", addurl);
router.post("/signup", signup);
router.post("/login", login);
router.post("/searchurl", searchurl);

export default router;
