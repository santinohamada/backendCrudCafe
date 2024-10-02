import Producto from "../database/model/producto.js";
export const leerPrueba = (req, res) => {
  res.send("desde el backend");
};
export const crearProducto = async (req, res) => {
  try {
    //validar los datos para crear el prod
    //pedir al modelo producto que genere uno nuevo
    console.log(req.body);
    const productoNuevo = new Producto(req.body);
    //guardo en la bd
    await productoNuevo.save();
    //envio una res al front

    res.status(201).json({
      mensaje: "El producto fue creado correctamente",
    });
  } catch (error) {
    //envio una res al front algo fallo
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo crear el producto",
    });
  }
};

export const listarProductos = async (req, res) => {
  try {
    //pedirle a la bd la collection de productos
    const productos = await Producto.find();
    //enviar en la respuesta la lista de los productos
    res.status(200).json(productos);
  } catch (error) {
    //enviar mensaje de error
    console.error(error);
    res.status(404).json({
      mensaje: "Ocurrio un error, no se encontraron los productos",
    });
  }
};
export const listarProducto = async (req, res) => {
  try {
    //extraer de la solicitud el id

    //pedirle a la BD que busque ese producto que tiene tal id
    const productoObtenido = await Producto.findById(req.params.id);

    //agregar una respuesta adicional cuando productoBuscado es null

    if (!productoObtenido) {
      return res.status(404).json({ message: "No se encontró el producto" });
    }
    //enviar en la respuesta el producto

    console.log(productoObtenido);
    res.status(200).json(productoObtenido);
  } catch (error) {
    //enviar mensaje de error
    console.error(error);
    res.status(404).json({
      mensaje: "Ocurrio un error, no se encontró el producto",
    });
  }
};
