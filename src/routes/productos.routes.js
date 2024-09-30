import { Router } from "express";
import { leerPrueba,crearProducto, listarProductos } from "../controllers/productos.controllers.js";
const router = Router();
router.route("/prueba").get(leerPrueba);
router.route("/productos").post(crearProducto).get(listarProductos).put().delete()
export default router;
