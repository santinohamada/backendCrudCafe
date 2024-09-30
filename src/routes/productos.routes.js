import { Router } from "express";
import { leerPrueba } from "../controllers/productos.controllers.js";
const router = Router();
router.route("/prueba").get(leerPrueba);
export default router;
