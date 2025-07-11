import dotenv from "dotenv";
import cors from "cors";
import app from "./src/app.js";

app.use(cors({
  origin: "http://localhost:5174", // your frontend port
}));


dotenv.config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("App listening on port 3000!");
});
