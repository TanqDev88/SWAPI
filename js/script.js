// script.js

// Función para el inicio de sesión
function functionLogin() {
    var usuario = document.getElementById("mail").value;
    var password = document.getElementById("pass").value;

    if (usuario === "juanperez@gmail.com" && password === "1787742836863899") {
        window.location.href = "tabla.html"; // Redireccionar al usuario a la tabla de resultados si las credenciales son correctas
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

// Función para consultar un personaje de Star Wars
function consultarPersonaje() {
    var Inputid = document.getElementById("Inputid").value;
    if (Inputid.length > 0 && !isNaN(Inputid)) { // Verificar que el ID sea un número
        inicializar_XHR(); 
        realizarPeticion('https://swapi.dev/api/people/' + Inputid, 'GET', funcionActuadora);
    } else {
        alert("Por favor, ingrese un ID válido");
    }
}

// Función para inicializar el objeto XMLHttpRequest
var peticionHttp;

function inicializar_XHR() {
    if (window.XMLHttpRequest) {
        peticionHttp = new XMLHttpRequest();
    } else {
        peticionHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
}

// Función para realizar la petición HTTP
function realizarPeticion(url, metodo, funcionA) {
    peticionHttp.onreadystatechange = funcionA;
    peticionHttp.open(metodo, url, true);
    peticionHttp.send(null);
}

// Función para manejar la respuesta de la petición HTTP
function funcionActuadora() {
    if (peticionHttp.readyState == 4) {
        if (peticionHttp.status == 200) {
            const datos = JSON.parse(peticionHttp.responseText);
            cargarTabla(datos);
        } else {
            alert("Error al cargar los datos del personaje");
        }
    }
}

// Función para cargar los datos del personaje en la tabla
function cargarTabla(datos) { 
    document.getElementById("nameid").innerHTML = datos.name;
    document.getElementById("heightid").innerHTML = datos.height;
    document.getElementById("massid").innerHTML = datos.mass;
    document.getElementById("hair_colorid").innerHTML = datos.hair_color;
    document.getElementById("skin_colorid").innerHTML = datos.skin_color;
    document.getElementById("eye_colorid").innerHTML = datos.eye_color;
    document.getElementById("birth_yearid").innerHTML = datos.birth_year;
    document.getElementById("genderid").innerHTML = datos.gender;
}
