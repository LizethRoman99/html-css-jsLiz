const url = 'http://localhost:8282/proveedores'



const listarProveedores = async() => {
    //Objeto del html donde se deslegará la información
    let objectId = document.getElementById('contenido') 
    let contenido = ''//Contiene filas y celdas que se desplegarán en el tbody

    //Fecth permite reaizar peticiones http a una url
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((res) => res.json())//Obtener respuesta de la petición
    .then(function(data){//Se manipulan los datos obtenidos de la url
        let listaProveedores = data.msg //msg es el nombre de la lista retorna con json
        console.log(listaProveedores)
        listaProveedores.map(function (proveedor) {
            //se agrego esta linea para que los valores carguen en el formulario y se puedan editar para enviarlo por la url
            objetoProveedores=Object.keys(proveedor).map(key =>key + '='+encodeURIComponent(proveedor[key])).join('&');
            console.log(proveedor)
            contenido = contenido + `<tr>`+
            `<td>`+proveedor.idProveedor+`</td>`+
            `<td>`+proveedor.nombreProveedor+`</td>`+
            `<td>`+proveedor.nit+`</td>`+
            `<td>`+proveedor.direccion+`</td>`+
            `<td>`+proveedor.correo+`</td>`+
            `<td>`+proveedor.nombreContacto+`</td>`+
            `<td>`+proveedor.numeroContacto+`</td>`+
            `<td><button onclick ="redireccionarEditar('${objetoProveedores}')>Editar</button></td>`+
            `<td>`
        })
        objectId.innerHTML = contenido
    })

    

}

const registrarProveedor= () => {
    const nombreProveedor = document.getElementById('nombreProveedor').value;
    const nit = document.getElementById('nit').value
    const direccion = document.getElementById('direccion').value
    const correo = document.getElementById('correo').value
    const nombreContacto = document.getElementById('nombreContacto').value
    const numeroContacto = document.getElementById('numerocontacto').value

    if(nombreProveedor.length == 0){
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido'

    }
    else if(nit.length == 0){
        document.getElementById('NitHelp').innerHTML = 'Dato requerido'
    }
    else if(direccion.length == 0){
        document.getElementById('DireccionHelp').innerHTML = 'Dato requerido'
    }
    else if(correo.length == 0){
        document.getElementById('CorreoHelp').innerHTML = 'Dato requerido'
    }
    else if(nombreContacto.length == 0){
        document.getElementById('NombreContactoHelp').innerHTML = 'Dato requerido'
    }
    else if(numeroContacto.length == 0){
        document.getElementById('NumerocontactoHelp').innerHTML = 'Dato requerido'
    }
    else{
        let proveedor ={//variables de clave deben ser las mismas de la api
            nombreProveedor: nombreProveedor, //lo primero es la clave, lo segundo es lo que se va a enviar.
            nit:nit,
            direccion: direccion,
            correo:correo,
            nombreContacto:nombreContacto,
            numeroContacto:numeroContacto

        }
        //body= JSON.stringify(proveedor)
        //alert(body)
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(proveedor), //Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            alert(json.msg)//Imprimir el mensaje de la transacción
           
        })
    }

}

const actualizarProveedor= () => {
    const nombreProveedor = document.getElementById('nombreProveedor').value;
    const nit = document.getElementById('nit').value
    const direccion = document.getElementById('direccion').value
    const correo = document.getElementById('correo').value
    const nombreContacto = document.getElementById('nombreContacto').value
    const numeroContacto = document.getElementById('numeroContacto').value

    if(nombreProveedor.length == 0){
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido'

    }
    else if(nit.length == 0){
        document.getElementById('NitHelp').innerHTML = 'Dato requerido'
    }
    else if(direccion.length == 0){
        document.getElementById('DireccionHelp').innerHTML = 'Dato requerido'
    }
    else if(correo.length == 0){
        document.getElementById('CorreoHelp').innerHTML = 'Dato requerido'
    }
    else if(nombreContacto.length == 0){
        document.getElementById('NombreContactoHelp').innerHTML = 'Dato requerido'
    }
    else if(numeroContacto.length == 0){
        document.getElementById('NumerocontactoHelp').innerHTML = 'Dato requerido'
    }
    else{
        let proveedor ={
            nombreProveedor: nombreProveedor, //lo primero es la clave, lo segundo es lo que se va a enviar.
            nit:nit,
            direccion: direccion,
            correo:correo,
            nombreContacto:nombreContacto,
            numeroContacto:numeroContacto

        }
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(proveedor), //Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            alert(json.msg)//Imprimir el mensaje de la transacción
        })
    }

}
const redireccionarEditar=(objetoProveedores) =>{
    document.location.href='/proveedores?proveedor='+objetoProveedores
}
const editarProveedor=() =>{
    var urlParams = new URLSearchParams(window.location.search);
    document.getElementById('nombreProveedor').value =urlParams.get('nombreProveedor')
    document.getElementById('nit').value =urlParams.get('nit')
    document.getElementById('direccion').value =urlParams.get('direccion')
    document.getElementById('correo').value =urlParams.get('correo')
    document.getElementById('nombreContacto').value =urlParams.get('nombreContacto')
    document.getElementById('numeroContacto').value =urlParams.get('numeroContacto')

}

if (document.querySelector('#btnRegistrar')){ //Si objeto existe
    document.querySelector('#btnRegistrar')
.addEventListener('click', registrarProveedor)
}

if (document.querySelector('#btnActualizar')){
    document.querySelector('#btnActualizar')
.addEventListener('click', actualizarProveedor)
}
