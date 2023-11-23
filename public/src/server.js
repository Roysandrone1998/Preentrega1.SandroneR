import express from "express";
import { loader } from "../utils/multer.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static("public"));


app.post("/", loader.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(500).json({
        error: "Hubo un error al subir el archivo",
        });
    }

    console.log(req.file);

    console.log(req.body);

    res.json({
        message: "El archivo se subió correctamente",
    });
});

app.listen(8080,()=> console.log("Server listening on port 8080"));