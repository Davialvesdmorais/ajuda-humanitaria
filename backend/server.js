const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/ajuda")

const PedidoSchema = new mongoose.Schema({

nome: String,
tipo: String,
mensagem: String,
local: String,
data: {
type: Date,
default: Date.now
}

})

const Pedido = mongoose.model("Pedido", PedidoSchema)

app.post("/pedido", async (req,res)=>{

const pedido = new Pedido(req.body)

await pedido.save()

res.send(pedido)

})

app.get("/pedidos", async (req,res)=>{

const pedidos = await Pedido.find()

res.send(pedidos)

})

app.listen(3000, ()=>{
console.log("Servidor rodando")
})
