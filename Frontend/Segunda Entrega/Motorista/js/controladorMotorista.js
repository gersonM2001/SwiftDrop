// //Parte para los datos
var usuarios=[]
var motorista=[]
var pedidos=[]
var inventario=[]
var ordenen=[]

const OPCION_PEDIDOS = 1;
const OPCION_HOME = 2;
const OPCION_USERS = 3;
const ordenesDisponibles = 4;
const ordenesSinEntregar = 5;
const OPCION = 6;


const seleccionarOpcion = (opcion) => {
    switch (opcion) {
        case OPCION_PEDIDOS:
            document.getElementById('header').style.display="block";
            document.getElementById('content-0').style.display= "none";
            document.getElementById('content-1').style.display="block";
            document.getElementById('content-2').style.display="none";
            document.getElementById('content-3').style.display="none";
            document.getElementById('content-4').style.display="none";
            document.getElementById('content-5').style.display="none";
            document.getElementById('content-6').style.display="none";
            generarPedidos();
            
        break;
        case OPCION_HOME:
            document.getElementById('header').style.display="block";
            document.getElementById('content-0').style.display="block";
            document.getElementById('content-1').style.display="none";
            document.getElementById('content-2').style.display="none";
            document.getElementById('content-3').style.display="none";
            document.getElementById('content-4').style.display="none";
            document.getElementById('content-5').style.display="none";
            document.getElementById('content-6').style.display="none";
        break;
        case OPCION_USERS:
            document.getElementById('header').style.display="block";
            document.getElementById('content-0').style.display="none";
            document.getElementById('content-1').style.display="none";
            document.getElementById('content-2').style.display="none";
            document.getElementById('content-3').style.display="block";
            document.getElementById('content-4').style.display="none";
            document.getElementById('content-5').style.display="none";
            document.getElementById('content-6').style.display="none";
            generarPerfil();
        break;
        case ordenesDisponibles:
            /**Parte de cambio de color con clicks */
            document.getElementById('content-0').style.display= "none";
            document.getElementById('content-1').style.display="none";
            document.getElementById('content-2').style.display="none";
            document.getElementById('content-3').style.display="none";
            document.getElementById('content-0').style.display="none";
            document.getElementById('content-4').style.display="block";
            document.getElementById('content-5').style.display="none";
            document.getElementById('content-6').style.display="none";
            generarOrden();
        break;
    case ordenesSinEntregar:
            /**Parte de cambio de color con clicks */
            document.getElementById('content-0').style.display= "none";
            document.getElementById('content-1').style.display="none";
            document.getElementById('content-2').style.display="none";
            document.getElementById('content-3').style.display="none";
            document.getElementById('content-0').style.display="none";
            document.getElementById('content-4').style.display="none";
            document.getElementById('content-5').style.display="block";
            document.getElementById('content-6').style.display="none";
            generarOrden2();

        break;  
    case OPCION:
            /**Parte de cambio de color con clicks */
            document.getElementById('content-0').style.display= "none";
            document.getElementById('content-1').style.display="none";
            document.getElementById('content-2').style.display="none";
            document.getElementById('content-3').style.display="none";
            document.getElementById('content-0').style.display="none";
            document.getElementById('content-4').style.display="none";
            document.getElementById('content-5').style.display="none";
            document.getElementById('content-6').style.display="block";
            generarOrden3();
        break;
        default:
            break;
    }
    
}
/*Funcion Switch que se encarga de cambiar al color del texto de
los botones aside y cambiar el contenido que se muestra en los
div con id container*/
const obtenerMotoristas = () =>{
    fetch('http://localhost:3002/motoristas', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(res => {
    motorista = res.result;
    generarPerfil();
    console.log(res);
  });
}

obtenerMotoristas();


    function regresar(){
        `<href="./motorista.html">`
    }
    //funciones que generan la informacion con los jsons
    function generarArticulos() {
        document.getElementById('content-2').innerHTML = "";
        inventarios.forEach(function (list) {
            document.getElementById('content-2').innerHTML+=
            `<h4>Ordenes disponibles</h4>
            <div class="card">
            <section class="seccion1">
            <form action="./clientepago.html"><button class="botonimg"><img src="${list.imagen}" alt=""></button></form>
                <p class="precios">Lps.${list.precio}.00</p>
            </section>
            <section class="seccion2">
                <h4 id="NombreArticulo">${list.nombre}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, repudiandae?
                </p>
            </section> 
            </div>
            `   
            
        });   
        }
    
        //Obtener los usuarios
        const obtenerUsuarios = () =>{
            fetch('http://localhost:3002/usuarios', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(res => {
            usuarios = res.result;
            generarPerfil();
            mostrarPedido();
            console.log(res);
          });
        }
        
        obtenerUsuarios();

    //Genera el peril del usuario    
    function generarPerfil() {
        document.getElementById('content-3').innerHTML = "";
            usuarios.forEach((user) => {
                document.getElementById('content-3').innerHTML+=
                `
                <div class="contentUser">
                <section class="imagenPerfil">
                <button class="profilepic"><img id="imagenDePerfil" src="${user.foto}" alt=""></button>
                </section>
                <section class="infoPerfil">
                    <h4 id="nombreUser">${user.Nombre}</h4>
                    <p id="ubicacionUser"> Dirección: ${user.direccion} y Telefono: ${user.Number}</p>
                </section> 
                </div>
                <hr id="linea">
                `   
                
            });   
        }
        const obtenerOrdenes = () =>{
            fetch('http://localhost:3002/pedidos', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(res => {
            ordenen = res.result;
            generarOrden();
            generarOrden2();
            generarOrden3();
            generarPedidos();
            console.log(res);
          });
        }
        
        obtenerOrdenes();
    function generarOrden() {
        document.getElementById('header').style.display = "block";
        document.getElementById('content-4').innerHTML = "";
            ordenen.forEach(function (user) {
                if (user.entregado == false){
                    document.getElementById('content-4').innerHTML+=
                    `<div id="cuadro">
                        <div id="orden">
                        <section class="empresas" id="empresa1" onclick="mostrarPedido()"><p class="empresas-text">Orden ${user.id} </p><button class="boton-asignar">Ver</button>
                        </div>
                    </div>
                `   
                }else{
                    "No hay pedidos"
                }
                
                
            });   
        }
        function generarOrden2() {
            document.getElementById('header').style.display = "block"
            document.getElementById('content-5').innerHTML = "";
            ordenen.forEach(function (user) {
                if (user.entregado == false){
                    document.getElementById('content-5').innerHTML+=
                    `<div id="cuadro">
                        <div id="orden">
                        <section class="empresas" id="empresa1" onclick="mostrarPedido2()"><p class="empresas-text">Orden: ${user.id} </p><button class="boton-asignar">Ver</button>
                        </div>
                    </div>
                `     
                }else{
                    "Entragas realizadas"
                }
                
                
            });   
         }
        function generarOrden3() {
            document.getElementById('header').style.display = "block"
            document.getElementById('content-6').innerHTML = "";
            ordenen.forEach(function (user) {
                if (user.entregado == true){
                    document.getElementById('content-6').innerHTML+=
                    `<div id="cuadro">
                        <div id="orden">
                        <section class="empresas" id="empresa1" onclick="mostrarPedido3()"><p class="empresas-text">Orden: ${user.id} </p><button class="boton-asignar">Ver</button>
                        </div>
                    </div>
                `   
                }else{
                    "No ha sido entregada ninguna"
                }
                
                
            });   
        }

    //Llamado de el inventario
    const obtenerInventario = () =>{
        fetch('http://localhost:3002/inventario', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(res => {
        inventario = res.result;
       // generarPedidos();
        console.log(res);
    });
    }

obtenerInventario();

        

             function generarPedidos() {
                document.getElementById('content-1').innerHTML = "";
                ordenen.forEach(function (pedido) {
    
                    document.getElementById('content-1').innerHTML+=
                    `
                    <div class="contentPedidos">
                            <section class="imagenDeProducto">
                            <button class="producto"><img id="imagenProducto" src="${pedido.portada}" alt=""></button>
                            </section>
                            <section class="infoPedido">
                                <h4 id="numero">Pedido#${pedido.id} </h4>
                                <h3 id="Pedido">${pedido.nombre}</h3>
                                <h3 id="total">Total a pagar: ${pedido.precio}</h3>
                                <h3 id="LugarEntrega">Cantidad: ${pedido.cantidad} </h3>
                            </section> 
                        </div>
                    `   
                    
                 });   
                 }

            // function generarPedidos2() {
            //     document.getElementById('content-5').innerHTML = "";
            //     pedidos.forEach(function (pedido) {
            //         document.getElementById('content-5').innerHTML+=
            //         `
            //         <div class="contentPedidos">
            //                 <section class="imagenDeProducto">
            //                 <button class="producto"><img id="imagenProducto" src="${pedido.portada}" alt=""></button>
            //                 </section>
            //                 <section class="infoPedido">
            //                     <h4 id="numero">Pedido#${pedido.id} </h4>
            //                     <h3 id="Pedido">${pedido.pedido}</h3>
            //                     <h3 id="total">Total a pagar: ${pedido.total}</h3>
            //                     <h2 id="LugarEntrega">Cantidad: ${pedido.cantitad} </h2>
            //                 </section> 
            //             </div>
            //         `   
                    
            //     });   
            //     }
    
    //Funciones para el codigo de clientes pedido
    //funcion del input number
        const mostrarPedido = () =>{
            document.getElementById('header').style.display="block";
            document.getElementById('content-4').innerHTML = "";
           
            usuarios.forEach((user) => {
                document.getElementById('content-4').innerHTML += 
            `
            <div id="paginaPedido">
                <button id="back" onclick="generarOrden()"><i class="fa-solid fa-arrow-left"></i></button></form>
                <h1 class="h1">Resumen del pedido</h1>
            
                <section class="inf">
                <h2 class="r"> Información del cliente</h2><br>
                <ul>
                <li>Cliente: ${user.Nombre}</li>
                <li>Numero: ${user.Number}</li>
                <li>Correo: ${user.email}</li>
                </ul>
                </section>
                <section class="info2">
                <h2 class="r">Detalles del envio: </h2><br>
                <br></br><ul>
                <li>Productos: Articulo1</li>
                <li>Empresa: Empresa 1</li>
                <li>Total a pagar: L. 400.00</li>
                <li>Ubicacion: ${user.direccion}</li>
                </ul>
                <center><img src="./multimedia/map.jpeg" alt="" srcset=""></center>
                </section>
            </div>
            `});
        }

        const mostrarPedido2 = () =>{
            document.getElementById('header').style.display="none";
            document.getElementById('content-5').innerHTML = "";
            document.getElementById('content-5').innerHTML += 
            `
            <div id="paginaPedido">
                <button id="back" onclick="generarOrden2()"><i class="fa-solid fa-arrow-left"></i></button></form>
                <h1 class="h1">Resumen del pedido</h1>
            
                <section class="inf">
                <h2 class="r"> Información del cliente</h2><br>
                <ul>
                <li>Cliente: Daniel Aguilar</li>
                <li>Numero: +504 99050076</li>
                <li>Correo: danAgui123@gmail.com</li>
                </ul>
                </section>
                <section class="info2">
                <h2 class="r">Detalles del envio: </h2><br>
                <br></br><ul>
                <li>Productos: Articulo1</li>
                <li>Empresa: Empresa 1</li>
                <li>Total a pagar: L. 400.00</li>
                <li>Ubicacion: Primera entrada junto a Burger King</li>
                </ul>
                <center><img src="./multimedia/map.jpeg" alt="" srcset=""></center>
                </section>
            </div>
            `
        }

        const mostrarPedido3 = () => {
            document.getElementById('header').style.display="block";
            document.getElementById('content-6').innerHTML = "";
           
            usuarios.forEach((user) => {
                document.getElementById('content-6').innerHTML += 
            `
            <div id="paginaPedido">
                <button id="back" onclick="generarOrden()"><i class="fa-solid fa-arrow-left"></i></button></form>
                <h1 class="h1">Resumen del pedido</h1>
            
                <section class="inf">
                <h2 class="r"> Información del cliente</h2><br>
                <ul>
                <li>Cliente: ${user.Nombre}</li>
                <li>Numero: ${user.Number}</li>
                <li>Correo: ${user.email}</li>
                </ul>
                </section>
                <section class="info2">
                <h2 class="r">Detalles del envio: </h2><br>
                <br></br><ul>
                <li>Productos: Articulo1</li>
                <li>Empresa: Empresa 1</li>
                <li>Total a pagar: L. 400.00</li>
                <li>Ubicacion: ${user.direccion}</li>
                </ul>
                <center><img src="./multimedia/map.jpeg" alt="" srcset=""></center>
                </section>
            </div>
            `});
        }

        const crearCuenta = () =>{
             document.getElementById('formulario').style.display = "none";
             document.getElementById('crearNuevaCuenta').innerHTML="";
            document.getElementById('crearNuevaCuenta').style.display = "block";
            document.getElementById('crearNuevaCuenta').innerHTML += 
            `
            <section id="formularioAcceso" >
                    <h5>Ingresa las credenciales que desea agregar</h5>
                    <br>
                    <input class="input" type="text" placeholder="Ingrese su Nombre" id="nombre">
                    <input class="input" type="email" placeholder="Ingrese su Correo" id="correo">
                    <input class="input" type="text" placeholder="Ingrese su direccions" id="direccion">
                    <input class="input" type="text" placeholder="Ingrese su numero" id="numero">
                    <input class="input" type="text" placeholder="Ingrese su email" id="email">
                    <input class="input" type="text" placeholder="Ingrese su Contraseña" id="password">
                    <br>
                    <br>
                    <input type="submit"id="submit" onclick="newUser()">
                    </form>
    
                </section> `;
            
            

            
            
        }

        const newUser = ( nombre, direccion, Number, email, password) =>{

            const pedidoInfo={
            nombre: nombre,
            foto: "./multimedia/user1.jpeg",
            direccion: direccion,
            Number: numero,
            email:correo,
            password:password
            };
            
            fetch('http://localhost:3002/usuarios', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(pedidoInfo)
        }).then(res => res.json())
        .then(pedidoInfo => {
            console.log(pedidoInfo);
        }).catch(error=>{
            console.error(error);
        });
        };

        const volverLogin = () =>{
            document.getElementById('crearNuevaCuenta').style.display = "none";
            document.getElementById('formulario').style.display = "block";
        }
        
    //     const newUser = (nombre, contrasenia, correo) =>{
    //         nombre: nombre,
    //         foto: "./multimedia/user1.jpeg",
    //         direccion: direccion
    //         Number: numero,
    //         email:correo,
    //         password:password
        
    //         fetch('http://localhost:3002/usuarios', {
    //         method: 'POST',
    //         headers: {
    //         'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newUser)
    //     }).then(res => res.json())
    //     .then(newUser => {
    //         console.log(newUser);
    //     }).catch(error=>{
    //         console.error(error);
    //     });
    // };