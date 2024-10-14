import { validationResult } from "express-validator";
const resultadoValidacion = (req, res, next) => {
  const errors = validationResult(req);
  //errors.isEmpty()=>true: no se produjeron errores
  //pedir al modelo producto que genere uno nuevo

  //quiero saber si hay errores

  if (!errors.isEmpty()) return res.status(400).json(errors.array());
  //continuar con la ejecucion del siguiente codigo
  next();
};
export default resultadoValidacion;
