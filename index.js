import express from "express";
import "dotenv/config";
import connectDB from "./src/db.js";
import booksRouter from "./src/Router/bookRouter.js";
import Autoresrouter from "./src/Router/autoresRouter.js";
const app = express();
const port = process.env.PORT || 9000;

app.use(express.json()); // Procesa JSON
app.use("/api/v1", booksRouter); // Prefijo para las rutas
app.use("/api/v1", Autoresrouter);
connectDB();

app.get("/", (req, res) => {
  res.send(
    `<h3>El servidor corre por el puerto ${port} y está funcionando OK </h3>`
  );
});

app.listen(port, (req, res) => {
  console.log(` Servidor ejecutándose en el puerto : ${port}`);
});
