import mongoose,{Schema} from "mongoose";


const UsuarioSchema = new Schema({
    email:{
        type:String,
        required:true,
        validate:{
            validator:(valor)=>{
                return /^[a-z0-9!#$%&'*+\=?^_`{|}~-]{1,64}(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/gm.test(valor)
            }
        }
    },
    password:{
        type:String,
        required:true
    }
})

const Usuario = mongoose.model("Usuarios",UsuarioSchema)
export default Usuario