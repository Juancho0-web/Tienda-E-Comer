import mongoose from "mongoose"
 const pedidoShema = new mongoose.Schema({
    productos:[{productid:{type:Number,requerid:true},
    Nombre:{type:String,requerid:true},
    Precio:{type:Number,requerid:true},
    Cantidad:{type:Number,requerid:true, default: 1},
    Imagen:String}],
    Total:{type:Number,requerid:true},
    Estado:{type:String, enum:['pendiente','procesando','entregado','cancelado'],default:'pendiente'},
    metodoPago:{type:String,requerid:true},
    Direccion:{type:String,requerid:true},
    fechaPedido:{type:Date, default:Date.now}
 });
 export default mongoose.model('pedido',pedidoShema)

