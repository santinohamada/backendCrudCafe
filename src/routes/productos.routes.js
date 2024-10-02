import { Router } from "express";
import { leerPrueba,crearProducto, listarProductos, listarProducto, borrarProducto,editarProducto } from "../controllers/productos.controllers.js";
const router = Router();
router.route("/prueba").get(leerPrueba);
router.route("/productos").post(crearProducto).get(listarProductos).put().delete()
router.route("/productos/:id").get(listarProducto).delete(borrarProducto).put(editarProducto)
export default router;
