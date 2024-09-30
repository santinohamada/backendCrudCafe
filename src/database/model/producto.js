import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    unique: true,
  },
  precio: {
    type: Number,
    required: true,
    min: 50,
    max: 20000,
  },
  imagen: {
    type: String,
    required: true,
    validate:{
        validator:(valor)=>{
            return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/.test(valor)
        }
    }
  },
  categoria: {
    type: String,
    required: true,
    enum: ['Infusiones', 'Batidos', 'Dulce', 'Salado'], // Opciones permitidas
  },
  descripcion_breve: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
  },
  descripcion_amplia: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 250,
  },
});

const Producto = mongoose.model('Producto', productoSchema);
export default Producto;
