//Parte para los datos

let inventarios=[]
let usuarios=[]
let pedidos=[]



const OPCION_PEDIDOS = 1;
const OPCION_HOME = 2;
const OPCION_USERS = 3;


//Switch para cambiar la informacion de los DIVs de contenido
const seleccionarOpcion = (opcion) => {
    switch (opcion) {
        case OPCION_PEDIDOS:
            document.getElementById('content-0').style.display="none"
            document.getElementById('content-0').classList.remove('main')
            document.getElementById('content-1').style.display="block"
            document.getElementById('content-1').classList.add('main')
            document.getElementById('content-2').style.display="none"
            document.getElementById('content-2').classList.remove('main')
            document.getElementById('content-3').style.display="none"
            document.getElementById('content-3').classList.remove('main')
            generarPedidos()
        break;
        case OPCION_HOME:
            document.getElementById('content-0').style.display="none"
            document.getElementById('content-0').classList.remove('main')
            document.getElementById('content-1').style.display="none"
            document.getElementById('content-1').classList.remove('main')
            document.getElementById('content-2').style.display="block"
            document.getElementById('content-2').classList.add('main')
            document.getElementById('content-3').style.display="none"
            document.getElementById('content-3').classList.remove('main')
            generarInventario()
        break;
        case OPCION_USERS:
            document.getElementById('content-0').style.display="none"
            document.getElementById('content-0').classList.remove('main')
            document.getElementById('content-1').style.display="none"
            document.getElementById('content-1').classList.remove('main')
            document.getElementById('content-2').style.display="none"
            document.getElementById('content-2').classList.remove('main')
            document.getElementById('content-3').style.display="block"
            document.getElementById('content-3').classList.add('main')
            generarUser()

        break
        default:
        break;
    }
    
}

//Peticiones Fetch

const obtenerUsuarios = () =>{
    fetch('http://localhost:3002/usuarios', {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json'
    }
}).then(res => res.json())
.then(res => {
    usuarios = res.result;
    generarUser();
    console.log(res);
});
}
    
obtenerUsuarios();

//funciones que generan la informacion del backend
function generarUser() {
    document.getElementById("content-3").innerHTML="  ";
    usuarios.forEach(function (u) {
        document.getElementById("content-3").innerHTML +=         
        `<div class="contentUser">         
        <section class="imagenPerfil">         
        <button class="profilepic"><img id="imagenDePerfil" src="${u.foto}" alt=""></button>         
        </section>         
        <section class="infoPerfil">             
        <h4 id="nombreUser">${u.Nombre}</h4>             
        <p id="ubicacionUser"> Dirección: ${u.direccion} y Telefono: ${u.Number}</p>         
        </section>          
        </div>         
        <hr id="linea">`
        
    });   
}




const obtenerInventario = () =>{
    fetch('http://localhost:3002/inventario', {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json'
    }
}).then(res => res.json())
.then(res => {
    inventarios = res.result;
    generarInventario();
    console.log(res);
});
}
    
obtenerInventario();

function generarInventario() {
    document.getElementById("content-2").innerHTML=" ";
    inventarios.forEach(function (i) {
		document.getElementById("content-2").innerHTML +=`<div class="card">
        <section class="seccion1">
        <form action="./clientepago.html"><button class="botonimg"><img src="${i.imagen}" alt=""></button></form>
            <p class="precios">Lps.${i.precio}.00</p>
        </section>
        <section class="seccion2">
            <h4 id="NombreArticulo">${i.nombre}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, repudiandae?
            </p>
        </section> 
        </div>`  
    });  
}


const obtenerPedidos = () =>{
    fetch('http://localhost:3002/pedidos', {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json'
    }
}).then(res => res.json())
.then(res => {
    pedidos = res.result;
    generarPedidos();
    console.log(res);
});
}
    
obtenerPedidos();

function generarPedidos() {
    document.getElementById("content-1").innerHTML=" ";
    pedidos.forEach( function (p) {
		document.getElementById("content-1").innerHTML +=
        ` <div class="contentPedidos">
        <section class="imagenDeProducto">
        <button class="producto"><img id="imagenProducto" src="${p.portada}" alt=""></button>
        </section>
        <section class="infoPedido">
            <h4 id="numero">Pedido#${p.id} </h4>
            <h3 id="Pedido">${p.nombre}</h3>
            <h3 id="total">Total a pagar: ${p.precio}</h3>
            <h2 id="LugarEntrega">Cantidad: ${p.cantidad} </h2>
        </section> 
    </div>`;
	});   
}



