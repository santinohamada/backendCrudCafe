import { Router } from "express";
import { leerPrueba,crearProducto, listarProductos, listarProducto } from "../controllers/productos.controllers.js";
const router = Router();
router.route("/prueba").get(leerPrueba);
router.route("/productos").post(crearProducto).get(listarProductos).put().delete()
router.route("/productos/:id").get(listarProducto)
export default router;
