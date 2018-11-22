//nombre del evento
function getEvento(){
    return new Promise(function(resolve, reject) {
        Contrato.evento(function(error, response) {
            if(error){
                reject(error);
            }else {
                resolve(response);
            }
        })
    });
}
async function evento(){
    try{
        evento = await getEvento();
        //document.body.innerHTML = evento;
   // console.log(evento);
        $("#evento").html(evento);

    } catch(error){
        console.log(error);
    }
}

//numero de entradas totales
function getEntradastotal(){
    return new Promise(function(resolve, reject) {
        Contrato.entradas(function(error, response) {
            if(error){
                reject(error);
            }else {
                resolve(response);
            }
        })
    });
}
async function entradastotal(){
    try{
        entradas = await getEntradastotal();
       // document.body.innerHTML = entradas;
    //console.log(entradas);
    $("#entrada").html("Entradas: "+ entradas);

    } catch(error){
        console.log(error);
    }
}
//precio de las entradas
function getPrecioBase(){
    return new Promise(function(resolve, reject) {
        Contrato.precioBase(function(error, response) {
            if(error){
                reject(error);
            }else {
                resolve(response);
            }
        })
    });
}
async function precioBase(){
    try{
        precio = await getPrecioBase();
       // document.body.innerHTML = precio;
        //console.log(precio);
    $("#precio").html("Precio: "+ precio);
    } catch(error){
        console.log(error);
    }
}

//direccion del vendedor
function getOwner(){
    return new Promise(function(resolve, reject) {
        Contrato.owner(function(error, response) {
            if(error){
                reject(error);
            }else {
                resolve(response);
            }
        })
    });
}
async function owner(){
    try{
        dueno = await getOwner();
        //document.body.innerHTML = dueno;
    //console.log(dueno);
    $("#owner").html("Dueño: "+ dueno);
    } catch(error){
        console.log(error);
    }
}

//balances de la cuenta con dni == DNI
function getBalance(dni){
    return new Promise(function(resolve, reject) {
        Contrato.getBalance(dni,function(error, response) {
            if(error){
                reject(error);
            }else {
                resolve(response);
            }
        })
    });
}
async function balance(dni){
    try{
        balances = await getBalance(dni);
       // document.body.innerHTML = balances;
   //console.log(balances);
    $("#balance").html("Cuenta: "+ balances);
    } catch(error){
        console.log(error);
    }
}

//entradas de una cuenta con dni
function getEntradas(dni){
    return new Promise(function(resolve, reject) {
        Contrato.getEntradas(dni,function(error, response) {
            if(error){
                reject(error);
            }else {
                resolve(response);
            }
        })
    });
}
async function entradasDispo(dni){
    try{
        numeroEntradas = await getEntradas(dni);
        //document.body.innerHTML = numeroEntradas;
        //console.log(numeroEntradas);
        let palabra="";
        if(dni==0){
            palabra = "Disponibles: ";
            $("#disponibles").html(palabra+ numeroEntradas);
    }
        else{ palabra = "Entradas a su nombre: ";}
        $("#entradas").html(palabra+ numeroEntradas);
    } catch(error){
        console.log(error);
    }
}

//get precio de la entrada de una cuenta
function getPrecioCuenta(direccion){
    return new Promise(function(resolve, reject) {
        Contrato.getPrecio(direccion,function(error, response) {
            if(error){
                reject(error);
            }else {
                resolve(response);
            }
        })
    });
}
async function precioReventa(direccion){
    try{
        precioCliente = await getPrecioCuenta(direccion);
        //document.body.innerHTML = precioCliente;
        //console.log(precioCliente);
        $("#precioVendedor").html("Precio del vendedor: "+ precioCliente);
    } catch(error){
        console.log(error);
    }
}
//cargar fondos a una cuenta
function cargarFondos(dni,monto){
    return new Promise(function(resolve, reject) {
        Contrato.cargarFondos(dni,{value:monto},function(error, response) {
            if(error){
                reject(error);
            }else {
                resolve(response);
            }
        })
    });
}
async function cargarCuenta(dni, monto){
    try{
        transaccion = await cargarFondos(dni, monto);
        //document.body.innerHTML = transaccion;
        //console.log(transaccion);
        $("#cargarFondos").html("transaccion: "+ transaccion);
    } catch(error){
        console.log(error);
    }
}
//comprar entrada al owner
function comprarEntrada(dni,monto){
    return new Promise(function(resolve, reject) {
        Contrato.compra(dni,{value:monto},function(error, response) {
            if(error){
                reject(error);
            }else {
                resolve(response);
            }
        })
    });
}
async function comprarConMonto(dni, monto){
    try{
        transaccion = await comprarEntrada(dni, monto);
        //document.body.innerHTML = transaccion;
        //console.log(transaccion);
        $("#comprar").html("transaccion: "+ transaccion);
    } catch(error){
        console.log(error);
    }
}
async function comprarSinMonto(dni){
    await comprarConMonto(dni,0);
}

//retirar fondos
function retirarFondos(dni,monto){
    return new Promise(function(resolve, reject) {
        Contrato.retirarFondos(dni,monto,function(error, response) {
            if(error){
                reject(error);
            }else {
                resolve(response);
            }
        })
    });
}
async function retirar(dni, monto){
    try{
        transaccion = await retirarFondos(dni, monto);
        //document.body.innerHTML = transaccion;
        //console.log(transaccion);
        $("#retirarFondos").html("transaccion: "+ transaccion);
    } catch(error){
        console.log(error);
    }
}

//setear precio de reventa
function setVenta(dni,precio){
    return new Promise(function(resolve, reject) {
        Contrato.setVenta(dni,precio,function(error, response) {
            if(error){
                reject(error);
            }else {
                resolve(response);
            }
        })
    });
}
async function vender(dni, precio){
    try{
        transaccion = await setVenta(dni, precio);
        //document.body.innerHTML = transaccion;
        //console.log(transaccion);
        $("#setVenta").html("transaccion: "+ transaccion);
    } catch(error){
        console.log(error);
    }
}

//compra reventa
function compraRevendida(direccion,dni,monto){
    return new Promise(function(resolve, reject) {
        Contrato.compraReventa(direccion,dni,{value:monto},function(error, response) {
            if(error){
                reject(error);
            }else {
                resolve(response);
            }
        })
    });
}
async function comprarReventaConMonto(direccion,dni,monto){
    try{
        transaccion = await compraRevendida(direccion,dni, monto);
        //document.body.innerHTML = transaccion;
        //console.log(transaccion);
        $("#comprarReventa").html("transaccion: "+ transaccion);
    } catch(error){
        console.log(error);
    }
}
async function comprarReventaSinMonto(direccion,dni){
comprarReventaConMonto(direccion,dni,0);
}

//cancelar reservas
function cancelarReserva(direccion){
    return new Promise(function(resolve, reject) {
        Contrato.cancelarReservas(direccion,function(error, response) {
            if(error){
                reject(error);
            }else {
                resolve(response);
            }
        })
    });
}
async function cancelar(direccion){
    try{
        transaccion = await cancelarReserva(direccion);
        //document.body.innerHTML = transaccion;
        //console.log(transaccion);
        $("#cancelar").html("transaccion: "+ transaccion);
    } catch(error){
        console.log(error);
    }
}




