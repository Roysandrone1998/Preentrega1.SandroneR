import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/static", express.static("public"));

app.listen(8080,()=> console.log("Server listening on port 8080"));