import { Router } from "express";
import { leerPrueba,crearProducto } from "../controllers/productos.controllers.js";
const router = Router();
router.route("/prueba").get(leerPrueba);
router.route("/productos").post(crearProducto);
export default router;
