import express from "express";
import "./database.js";
const app = express();
app.listen(3000);
console.log("Server on port", 3000);
