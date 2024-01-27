
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import express from "express";
import exphbs from "express-handlebars";
import main from "./routes/main.js";
import connectDB from "./server/config/db.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname);

const app = express();
const PORT = 5000;

app.use("/", main)

app.listen(PORT, () =>{
    console.log(`App listen on port ${PORT}`);
});

connectDB();

// HBS template
app.engine("hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", join(__dirname, "views"));

//Static folder
app.use(
    express.static(join(__dirname, "public"), {
      extensions: ["html", "htm", "js"],
    })
  );