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
            console.log(proveedor)
            contenido = contenido + '<tr>'+
            '<td>'+usuario.nombre+'</td>'+
            '<td>'+usuario.rol+'</td>'+
            '<td>'+usuario.estado+'</td>'+
            '</tr>'
        })
        objectId.innerHTML = contenido
    })

    /*for(i = 1; i<10; i++){
        contenido = contenido + '<tr>'+
        '<td>nombre</td>'+
        '<td>rol</td>'+
        '<td>estado</td>'
    }
    */

}

const registrarUsuario= () => {
    const nombre = document.getElementById('nombre').value;
    const password = document.getElementById('password').value
    const confirmarPassword = document.getElementById('confirmarPassword').value
    const rol = document.getElementById('rol').value
    const estado = document.getElementById('estado').value

    if(nombre.length == 0){
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido'

    }
    else if(password.length == 0){
        document.getElementById('passwordHelp').innerHTML = 'Dato requerido'
    }
    else if(rol == ""){
        document.getElementById('rolHelp').innerHTML = 'Dato requerido'
    }
    else if(estado == ""){
        document.getElementById('estadoHelp').innerHTML = 'Dato requerido'
    }
    else if(password != confirmarPassword){
        alert('Las contraseñas no coinciden')
    }
    else{
        let usuario ={
            nombre: nombre, //lo primero es la clave, lo segundo es lo que se va a enviar.
            password: password,
            rol: rol,
            estado: estado
        }
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(usuario), //Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            alert(json.msg)//Imprimir el mensaje de la transacción
        })
    }

}

const actualizarUsuario= () => {
    const nombre = document.getElementById('nombre').value;
    const password = document.getElementById('password').value
    const confirmarPassword = document.getElementById('confirmarPassword').value
    const rol = document.getElementById('rol').value
    const estado = document.getElementById('estado').value

    if(nombre.length == 0){
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido'

    }
    else if(password.length == 0){
        document.getElementById('passwordHelp').innerHTML = 'Dato requerido'
    }
    else if(rol == ""){
        document.getElementById('rolHelp').innerHTML = 'Dato requerido'
    }
    else if(estado == ""){
        document.getElementById('estadoHelp').innerHTML = 'Dato requerido'
    }
    else if(password != confirmarPassword){
        alert('Las contraseñas no coinciden')
    }
    else{
        let usuario ={
            nombre: nombre, //lo primero es la clave, lo segundo es lo que se va a enviar.
            password: password,
            rol: rol,
            estado: estado
        }
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(usuario), //Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            alert(json.msg)//Imprimir el mensaje de la transacción
        })
    }

}

document.querySelector('#btnRegistrar')
.addEventListener('click', registrarUsuario)


document.querySelector('#btnActualizar')
.addEventListener('click', actualizarUsuario)


//GET: listar/conseguir un dato en específico o todos
//PUT: Actualizar
//DELETE: ELIMINAR
//POST: Ingresar/registrar/enviar/crear