//  var usuarioAcceso = document.getElementById('nombreNuevo').value;
//  var correAcceso = document.getElementById('correoNuevo').value;
//  var password = document.getElementById('passwordNuevo').value;

// console.log(usuarioAcceso, correAcceso, password);
//var clientes =[]
var empresas=[]
var motoristasLibres=[]
var motoristasOcupado=[]
var pedidos=[]
var productos=[]



/*Funcion Switch que se encarga de cambiar al color del texto de
los botones aside y cambiar el contenido que se muestra en los
div con id container*/
function hacerClick(numero){
    switch (numero) {
    case 1:
        /**Parte de cambio de color con clicks */
        document.getElementById('btn1').classList.add('boton')
        document.getElementById('btn2').classList.remove('boton')
        document.getElementById('btn3').classList.remove('boton')
        document.getElementById('btn4').classList.remove('boton')
        /**Parte de cambio de info*/
        document.getElementById('main').style.display="none";
        document.getElementById('content-0').style.display="none";
        document.getElementById('content-1').style.display="block";
        document.getElementById('content-2').style.display="none";
        document.getElementById('content-3').style.display="none";
        document.getElementById('content-4').style.display="none";
        generarEmpresas()
        break;
    case 2:
        /**Parte de cambio de color con clicks */
        document.getElementById('btn2').classList.add('boton')
        document.getElementById('btn1').classList.remove('boton')
        document.getElementById('btn3').classList.remove('boton')
        document.getElementById('btn4').classList.remove('boton')
        /**Parte de cambio de info*/
        document.getElementById('main').style.display="none";
        document.getElementById('content-0').style.display="none";
        document.getElementById('content-1').style.display="none";
        document.getElementById('content-2').style.display="block";
        document.getElementById('content-3').style.display="none";
        document.getElementById('content-4').style.display="none";
        generarMotoritaslibres()
        generarMotoritasOcupado()

        break;  
    case 3:
        /**Parte de cambio de color con clicks */
        document.getElementById('btn3').classList.add('boton')
        document.getElementById('btn2').classList.remove('boton')
        document.getElementById('btn1').classList.remove('boton')
        document.getElementById('btn4').classList.remove('boton')
        /**Parte de cambio de info*/
        document.getElementById('main').style.display="none";
        document.getElementById('content-0').style.display="none";
        document.getElementById('content-1').style.display="none";
        document.getElementById('content-2').style.display="none";
        document.getElementById('content-3').style.display="block";
        document.getElementById('content-4').style.display="none";
        generarOrdenes()
        break;
    case 4:
        /**Parte de cambio de color con clicks */
        document.getElementById('btn4').classList.add('boton')
        document.getElementById('btn2').classList.remove('boton')
        document.getElementById('btn3').classList.remove('boton')
        document.getElementById('btn1').classList.remove('boton')
        /**Parte de cambio de info*/
        document.getElementById('main').style.display="none";
        document.getElementById('content-0').style.display="none";
        document.getElementById('content-1').style.display="none";
        document.getElementById('content-2').style.display="none";
        document.getElementById('content-3').style.display="none";
        document.getElementById('content-4').style.display="block";
        generarProductos()
        break;
    case 5:
        document.getElementById('main').style.display = "none";
        document.getElementById('principal').style.display = "block";
        generarPrincipal();
        break;
    default:
        break;
    }
}



//Obtiene las empresas

 const obtenerEmpresas = () =>{
    fetch('http://localhost:3002/empresas', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(res => {
    empresas = res.result;
    generarEmpresas();
    generarProductos();
    console.log(res);
  });
}

obtenerEmpresas();
//Funciones que genrearn contenido dinamico
const generarPrincipal = () =>{
    document.getElementById('principal').innerHTML = "";
        document.getElementById('principal').innerHTML +=
    `
    <div id="blur"> 
    <div id="encabezado"><h1>SwiftDrop</h1></div>
    <section class="middle">
        <aside>
            <section class="molde-aside"><button class="botones-laterales" id="btn1"  onclick="hacerClick(1)">EMPRESAS</button></section>
            <section class="molde-aside"><button class="botones-laterales" id="btn2" onclick="hacerClick(2)">MOTORISTA</button></section>
            <section class="molde-aside"><button class="botones-laterales" id="btn3" onclick="hacerClick(3)">ORDENES</button></section>
            <section class="molde-aside"><button class="botones-laterales" id="btn4" onclick="hacerClick(4)">PRODUCTOS</button></section>
        </aside>
        <div id="container-main">
            <div id="content-0" class="main">
                <h4>Ultimas Valoraciones</h4>
                <section class="cliente-valoracion"><div><h3 class="texto-0">Cliente: Daniel</h3></div>   <div><h3><i class="fa-solid fa-thumbs-up     valoracion"></i></h3> </div> </section>
                <section class="cliente-valoracion"><div><h3 class="texto-0">Cliente: VelozBoy</h3></div>      <div><h3><i class="fa-solid fa-thumbs-down       valoracion"></i></h3> </div></section>
                <section class="cliente-valoracion"><div><h3 class="texto-0">Cliente: MorteritoMan</h3></div>       <div><h3><i class="fa-solid fa-thumbs-up     valoracion"></i></h3></div> </section>
            </div>
            
            <div hidden id="content-1"></div>
            <div hidden id="content-2"></div>
            <div hidden id="content-3"></div>
            <div hidden id="content-4"></div>
                `
    
}


const  generarEmpresas = () => {
    document.getElementById('content-1').innerHTML = "";
    empresas.forEach(function (empresa){
    document.getElementById('content-1').innerHTML +=
    `
    <section class="empresas" id="empresa1"><p class="empresas-text">${empresa.Nombre} ${empresa.icono} <br>${empresa.direccion}</p></section>
    `
    });
    //document.querySelector(`#detalle-${player} h6`).innerHTML = players[player].firstName + ' ' + players[player].lastName;
    }


    //Obtiene los motoristas

 const obtenerMotoristas = () =>{
    fetch('http://localhost:3002/motoristas', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(res => {
    motoristasLibres = res.result;
    generarMotoritaslibres();
    console.log(res);
  });
}

obtenerMotoristas();

function generarMotoritaslibres() {
    document.getElementById('content-2').innerHTML = "";
    document.getElementById('content-2').innerHTML =
        `<h4 id="Free-text">MOTORISTAS LIBRES</h4>`;
    motoristasLibres.forEach(function (libre) {
        
        document.getElementById('content-2').innerHTML+=
        `
        <section class="motorista" id="Sin-Carrera">
                        

                        <div class="container-moto">
                            <section><img src="${libre.foto}" alt=""></section>
                            <section><p class="p-moto">${libre.nombre} /${libre.placaVehicular}</p></section>
                            <section><button class="boton-asignar">Asignar</button></section>
                        </div>

                    </section>
        `   
        
    });   
}

function generarMotoritasOcupado() {
    motoristasOcupado.forEach(function (ocupado) {
        document.getElementById('content-2').innerHTML+=
        `
        <section class="motorista" id="Con-Carrera">
        <h4 id="Taken-text">MOTORISTAS EN CARRERA</h4>
        <div class="container-moto">
            <section><img src="${ocupado.img1}" alt=""></section>
            <section><p class="p-moto">${ocupado.nombre1} /${ocupado.info1}</p></section>
            <section><button class="boton-abrobar">Aprobar</button></section>
        </div>

        <div class="container-moto">
            <img src="${ocupado.img2}" alt="">
            <p class="p-moto">${ocupado.nombre2} /${ocupado.info2}</p>
            <button class="boton-abrobar">Aprobar</button>
        </div>                       
    </section>
        `   
        
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
    generarOrdenes();
    console.log(res);
  });
}

obtenerPedidos();

function generarOrdenes() {
    document.getElementById('content-3').innerHTML = "";
    document.getElementById('content-3').innerHTML = 
    `<h4>PEDIDOS LISTOS PARA ENTREGA</h4>`;
    pedidos.forEach(function (pedido) {
        document.getElementById('content-3').innerHTML+=
        `
    
        <div class="pedido">
            <section id="img-pedido"><img src="${pedido.portada}" alt=""></section>
            <section id="info-pedido">${pedido.nombre}</section>
            <section class="boton-pedido"><button>Asignar</button></section>
        </div>
    }
        `   
        
    }); 
}

function generarProductos() {
    document.getElementById('content-4').innerHTML = "";
    document.getElementById('content-4').innerHTML =
    `
    <h4>Productos</h4>
    `
    empresas.forEach(function (producti) {
        document.getElementById('content-4').innerHTML+=
        `
        
        <div class="container-productos">   
            <section><h3>${producti.Nombre}</h3></section>
            <section><img src="${producti.product}"></img></section>
            <section><h5>${producti.direccion}</h5></section>
        </div>
        `   
        
    }); 
}


const crearNuevaCuenta = () =>{
    document.getElementById('formulario').style.display = "none";
    document.getElementById('formularioAcceso').style.display = "block";
}

const regresarPrincipal = () =>{
    document.getElementById('formulario').style.display = "block";
    document.getElementById('formularioAcceso').style.display = "none";
}


