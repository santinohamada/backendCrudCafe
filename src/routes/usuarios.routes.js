import { Router } from "express";
import { borrarUsuario, crearUsuario, editarUsuario, listarUsuario, listarUsuarios, login } from "../controllers/usuarios.controllers.js";

const router = Router()
router.route("/usuarios").post(crearUsuario).get(listarUsuarios)
router.route("/login").post(login)
router.route("/usuarios/:id").get(listarUsuario).delete(borrarUsuario).put(editarUsuario)
export default router