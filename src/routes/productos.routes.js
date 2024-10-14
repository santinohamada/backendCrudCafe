import { Router } from "express";
import { check } from "express-validator";
import {
  leerPrueba,
  crearProducto,
  listarProductos,
  listarProducto,
  borrarProducto,
  editarProducto,
} from "../controllers/productos.controllers.js";
import validacionProducto from "../../helpers/validacionProducto.js";
const router = Router();
router.route("/prueba").get(leerPrueba);
router
  .route("/productos")
  .post(
    [validacionProducto],
    crearProducto
  )
  .get(listarProductos);
router
  .route("/productos/:id")
  .get(listarProducto)
  .delete(borrarProducto)
  .put([validacionProducto],editarProducto);
export default router;
