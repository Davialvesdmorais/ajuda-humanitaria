const form = document.getElementById("form")
const lista = document.getElementById("lista")

form.addEventListener("submit", async (e)=>{

e.preventDefault()

const pedido = {

nome: document.getElementById("nome").value,
tipo: document.getElementById("tipo").value,
local: document.getElementById("local").value,
mensagem: document.getElementById("mensagem").value

}

await fetch("http://localhost:3000/pedido",{

method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(pedido)

})

carregar()

})

async function carregar(){

lista.innerHTML=""

const res = await fetch("http://localhost:3000/pedidos")

const dados = await res.json()

dados.forEach(p=>{

lista.innerHTML += `

<div class="card">

<b>${p.nome}</b><br>
${p.tipo}<br>
${p.local}<br>
${p.mensagem}

</div>

`

})

}

carregar()
