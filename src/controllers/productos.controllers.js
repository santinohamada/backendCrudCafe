import Producto from "../database/model/producto.js";
export const leerPrueba = (req, res) => {
    res.send("desde el backend");
};
export const crearProducto = async (req, res) => {
    try {
        //validar los datos para crear el prod
        //pedir al modelo producto que genere uno nuevo
        console.log(req.body)
        const productoNuevo = new Producto(req.body);
        //guardo en la bd
        await productoNuevo.save()
        //envio una res al front
        
        res.status(201).json({
            mensaje:"El producto fue creado correctamente"
        })
        
    } catch (error) {
        //envio una res al front algo fallo
        console.error(error)
        res.status(500).json({
            mensaje: "Ocurrio un error, no se pudo crear el producto"
        })
    }
};
