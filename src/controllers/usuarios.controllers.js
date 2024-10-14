import Usuario from "../database/model/usuario.js";
import bcrypt from "bcrypt"
export const leerPrueba = (req, res) => {
  res.send("desde el backend");
};
export const crearUsuario = async (req, res) => {
  try {
    const {email, password} = req.body
    
    const saltos = bcrypt.genSaltSync(10)
    const passwordHasheado = bcrypt.hashSync(password,saltos)   
    console.log(passwordHasheado)
    const usuarioNuevo = new Usuario({email,password:passwordHasheado});
    await usuarioNuevo.save();
    
console.log(usuarioNuevo)
    res.status(201).json({
      mensaje: "El usuario fue creado correctamente",
    });
  } catch (error) {
    
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo crear el usuario",
    });
  }
};
export const login = async (req, res) => {
  try {
    const {email, password} = req.body
    
    const usuarioExistente = await Usuario.findOne({email})
    if(!usuarioExistente){

      return res.status(400).json({
        mensaje: "Correo y/o contraseña incorrectos - email",
      });
    }
    
    //verificar si el password es el mismo
    const passwordValido = bcrypt.compareSync(password,usuarioExistente.password)
    if(!passwordValido){

     return res.status(400).json({
        mensaje: "Correo y/o contraseña incorrectos - password",
      });
    }

    //el usuario y password corresponden
    res.status(200).json({
      mensaje: "Los datos del usuario son correctos",email
    });
  } catch (error) {
    
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo crear el usuario",
    });
  }
};

export const listarUsuarios = async (req, res) => {
  try {
    //pedirle a la bd la collection de usuarios
    const usuarios = await Usuario.find();
    //enviar en la respuesta la lista de los usuarios
    res.status(200).json(usuarios);
  } catch (error) {
    //enviar mensaje de error
    console.error(error);
    res.status(404).json({
      mensaje: "Ocurrio un error, no se encontraron los usuarios",
    });
  }
};
export const listarUsuario = async (req, res) => {
  try {
    //extraer de la solicitud el id

    //pedirle a la BD que busque ese usuario que tiene tal id
    const usuarioObtenido = await Usuario.findById(req.params.id);

    //agregar una respuesta adicional cuando usuarioBuscado es null

    if (!usuarioObtenido) {
      return res.status(404).json({ message: "No se encontró el usuario" });
    }
    //enviar en la respuesta el usuario

    console.log(usuarioObtenido);
    res.status(200).json(usuarioObtenido);
  } catch (error) {
    //enviar mensaje de error
    console.error(error);
    res.status(404).json({
      mensaje: "Ocurrio un error, no se encontró el usuario",
    });
  }
};


export const borrarUsuario = async(req,res)=>{
    try {
        const usuario = await Usuario.findById(req.params.id)
        console.log(req.params.id)
        if(!usuario){
          return res.status(404).json({message:"No existe el id enviado"})
        }

        await Usuario.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje:"El usuario fue eliminado correctamente"})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"ocurrio un error al intentar borrar un usuario"})
    }
}

export const editarUsuario = async(req,res)=>{
  try {
    //necesito el id y el body
    //validar los datos del body
    //pedir a la bd que busque si esta el id, sino envio codigo de error
    const usuarioBuscado = await Usuario.findById(req.params.id)
    if(!usuarioBuscado){
      return res.status(404).json({mensaje:"El usuario no fue encontrado"})
    }
    const usuarioEditado = await Usuario.findByIdAndUpdate(req.params.id,req.body)
    console.log(usuarioEditado)
    res.status(200).json({mensaje:"el usuario fue editado correctamente"})
  } catch (error) {
    console.error(error)
    res.status(500).json({mensaje:"Ocurrio un error al intentar editar el usuario"})
  }
}