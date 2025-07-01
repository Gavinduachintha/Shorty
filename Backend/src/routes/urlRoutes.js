import express from "express"
import { healthCheck,addurl } from "../controllers/urlController.js"

const router = express.Router();

router.get("/",healthCheck)
router.post("/addurl",addurl)

export default router