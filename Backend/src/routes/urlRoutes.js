import express from "express";
import {
  healthCheck,
  addurl,
  searchurl,
} from "../controllers/urlController.js";

const router = express.Router();

router.get("/", healthCheck);
router.post("/addurl", addurl);
router.post("signup",signup)
router.post("/searchurl", searchurl);

export default router;
