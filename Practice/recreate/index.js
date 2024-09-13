import express from "express"
import bodyParser from "body-parser"
import { dirname } from "path"
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function checkPass(req, res, next) {
    const pwd = req.body["password"]
    if (pwd === "StinkyPoopy"){
        app.post("/check", (req, res) => {
            res.sendFile(__dirname + "/public/secret.html");
        })
    } else {
        app.post("/check", (req, res) => {
            res.sendFile(__dirname + "/public/index.html");
        })
    }
    next();
}
app.use(checkPass)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});