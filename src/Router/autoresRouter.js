import express from "express";
import autorCtrl from "../services/ctrlAutor.js"; 
const router = express.Router();


router.get("/autores", autorCtrl.consultarAutores);

router.post("/autores", autorCtrl.agregarAutor);

router.put("/autores/:id", autorCtrl.actualizarAutor);

router.delete("/autores/:id", autorCtrl.eliminarAutor);

export default router;
