import { check, validationResult } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionProducto = [
  check("nombreProducto")
    .notEmpty()
    .withMessage("El nombre del producto es un dato obligatorio")
    .isLength({
      min: 2,
      max: 50,
    })
    .withMessage(
      "El nombre del producto debe contener hasta 50 caracteres inclusive"
    ),
  check("precio")
    .notEmpty()
    .withMessage("El precio es un dato obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un numero")
    .custom((valor) => {
      if (valor >= 50 && valor <= 20000) {
        return true;
      } else {
        throw new Error(
          "El precio debe estar entre 50 y 20mil pesos inclusive"
        );
      }
    }),
  check("imagen")
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio")
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/)
    .withMessage(
      "La imagen debe ser una URL valida y terminar en algunas de las siguientes extensiones (jpg/jpeg/gif/png)"
    ),
  check("categoria")
    .notEmpty()
    .withMessage("La categoria es un dato obligatorio")
    .isIn(["Infusiones", "Batidos", "Dulce", "Salado"])
    .withMessage(
      "La categoria debe contener una de las siguientes opciones: Dulce, Salado, Infusiones, Batidos"
    ),
  //agregar validaciones de la descripciones
  (req, res, next) => {
    resultadoValidacion(req,res,next);
  },
];
export default validacionProducto;
