/*cree un algoritmo que tiene una entrada de datos con un prompt que pide una ubicacion y depende 
de la ubicacion que elija el usuario, le trae un dato del array, donde, para este desafio,
imprime en pantalla con console.log la temperatura, humedad, etc, todo lo que hay puesto en ese array*/

//Comencemos

//Primero mediante un prompt le pido al usuario que ingrese su provincia y luego le pido que la confirme

let ubicacion = prompt("Hola! Por favor, Ingrese una provincia dentro de Argentina."); 
let volverUbicacion = prompt("Por favor, confirme nuevamente la provincia ingresada.");

//Esta funcion nos permite "validar" esa ubicacion/provincia para que posteriormente me traiga los datos de la misma
//Ademas le da la oportunidad al usuario de que si no quiere la que ingreso, la puede cambiar
/*La funcion del while es la siguiente: mientras la "ubicacion" ingresada sea distinta de la "volverUbicacion" 
se va a repetir hasta que sean "exactamente Iguales", entonces sale de ese bucle y nos avisa mediante un alert que 
"somos bienvenidos" y "que entramos o accedimos a la pagina con su informacion"*/

function validarUbicacion(ubicacion, volverUbicacion){
    
    while(ubicacion !== volverUbicacion){

            alert("Ups! No ha ingresado la misma ubicación, por favor vuelva a intentarlo");
            ubicacion = prompt("Hola! Por favor, Ingrese una provincia dentro de Argentina."); 
            volverUbicacion = prompt("Por favor, confirme nuevamente la provincia ingresada.");
    }
    
    alert("Genial!! Bienvenid@.");

}

//para llamar a la funcion, lo hago de la siguiente manera:

validarUbicacion(ubicacion, volverUbicacion);

//Luego cree una clase Provincia, que contiene un "constructor" donde le paso parametros que luego voy a utilizar en un Array 
//function variarTemperatura(temperatura) {};

class provincias{
    constructor(nombre, estado, temperatura, sensacionTermica, humedad, velocidadDelViento, presionDelAire, visibilidad, indiceUV){
        this.nombre = nombre;
        this.estado = estado;
        this.temperatura = parseFloat(temperatura);
        this.sensacionTermica = sensacionTermica;
        this.humedad = humedad;
        this.velocidadDelViento = velocidadDelViento;
        this.presionDelAire = parseFloat(presionDelAire);
        this.visibilidad = visibilidad;
        this.indiceUV = indiceUV;
    }

    variarTemperatura(){
        return (this.temperatura * 2.0 + 'Cº');
    }
}

//Array para Provincias, donde cada posicion es un objeto con sus atributos

let provinciasArgentinas = [
    new provincias("Buenos Aires","Lluvioso", 22, 22, 76, 11, 1.021, 5, "Bajo, 2"),
    new provincias("Ciudad Autonoma de Buenos Aires", "Mayormente soleado", 21, 21, 44, 13, 1.022, 10, "Bajo, 1"),
    new provincias("Catamarca","Soleado", 23, 23, 49, 37, 1.017, 16, "Moderado, 4"),
    new provincias("Chaco","Soleado", 23, 23, 48, 13, 1.020, 16, "Moderado, 3"),
    new provincias("Chubut","Soleado", 22, 23, 22, 19, 1.010, 16, "Bajo, 2"),
    new provincias("Cordoba","Soleado", 25, 26, 60, 3, 1.021, 10, "Alto, 6"),
    new provincias("Corrientes","Soleado", 23, 23, 46, 11, 1.020, 10, "Moderado, 4"),
    new provincias("Entre Rios","Soleado", 22, 21, 39, 11, 1.021, 16, "Moderado, 4"),
    new provincias("Formosa","Soleado", 22, 22, 48, 18, 1.019, 10, "Bajo, 2"),
    new provincias("Jujuy","Nublado",16, 16, 91, 8,  1.019, 10, "Bajo, 2"),
    new provincias("La Pampa","Soleado", 23, 23, 30, 19, 1.019, 16, "Bajo, 2"),
    new provincias("La Rioja","Parcialmente nublado", 23, 23, 59, 11, 1.016, 16,"Moderado, 3" ),
    new provincias("Mendoza","Mayormente soleado", 23, 23, 31, 3, 1.016, 14, "Moderado, 3"),
    new provincias("Misiones", "Soleado", 20, 20, 55, 14, 1.017, 14, "Bajo, 2"),
    new provincias("Neuquen", "Mayormente soleado", 24, 24, 26, 18, 1.016, 10, "Bajo, 2"),
    new provincias("Rio Negro", "Soleado", 22, 22, 27, 19, 1.016, 16, "Bajo, 1"),
    new provincias("Salta","Nublado",17, 17, 72, 13,  1.022, 10, "Bajo, 1"),
    new provincias("San Juan", "Mayormente soleado", 26, 26, 27, 10, 1.015, 14, "Moderado, 3"),
    new provincias("San Luis", "Mayormente soleado", 24, 24, 27, 11, 1.017, 16, "Bajo, 2"),
    new provincias("Santa Cruz","Mayormente nublado", 19, 19, 45, 21, 1.005, 16, "Bajo, 1"),
    new provincias("Santa Fe","Mayormente soleado", 24, 24, 31, 5, 1.021 , 10, "Moderado, 3"),
    new provincias("Santiago del Estero","Mayormente soleado", 22.4, 22, 31, 4, 1.018, 10, "Moderado, 4"),
    new provincias("Tierra del Fuego","Parcialmente nublado", 11, 8, 55, 31, 999, 14, "Bajo, 1"),
    new provincias("Tucuman", "Mayormente nublado", 22, 22, 54, 11, 1.020, 10, "Bajo, 2"),
]

/*mediante un "Find" le digo --> "encontrame en "provinciasArgentinas" el nombre que 
le pase anteriormente en el prompt (por eso tomo el "volverUbicacion") y devolveme, mostrandome
en pantalla todo lo que tenga ese nombre*/

const resultado = provinciasArgentinas.find(x => x.nombre == volverUbicacion)
console.log(resultado);

//Para que el "resultado" se muestre en pantalla 
var vistaA = document.getElementById("vistaA");
vistaA.innerHTML =`<h1>${resultado.temperatura} Cº</h1>
                <h5>Sensacion termica: ${resultado.sensacionTermica} Cº</h5>
                <h3>${resultado.estado}</h3>
                <h2>${resultado.nombre}, Argentina</h2>`;

var humedad = document.getElementById("humedad");
humedad.innerHTML =  `<h5>Humedad: ${resultado.humedad} % </h5>`;

var velocidadViento = document.getElementById("velocidadViento");
velocidadViento.innerHTML =  `<h5>Velocidad del Viento: ${resultado.velocidadDelViento} km/h </h5>`;

var presionDelAire = document.getElementById("presionAire");
presionDelAire.innerHTML =  `<h5>Presion del Aire: ${resultado.presionDelAire} mbar </h5>`;

var visibilidad = document.getElementById("visibilidad");
visibilidad.innerHTML =  `<h5>Visibilidad: ${resultado.visibilidad} km </h5>`;

var indiceUV = document.getElementById("indiceUV");
indiceUV.innerHTML =  `<h5>Indice UV: ${resultado.indiceUV} % </h5>`;


/*PASOS PARA EJECUTAR Y MOSTRAR UN RELOJ Y FECHA EN TIEMPO REAL

    TENGAMOS EN CUENTA QUE LOS DATOS QUE SE TRAEN Y MUESTRAN SON DEL ORDENADOR DEL USUARIO
    QUE ESTE VISITANDO LA PAGINA

    Para crear un reloj y fecha en tiempo real
    utilizaremos una funcion arrow setInterval('...' , '...') ya que 
    queremos que se ejecute cada segundo, la misma recibe 2 parametros:
        1ero) va a ser una funcion que en su interior tiene declaradas
            variables como: dia, mes, hora, mes, etc y arrays
        2do) un numero, son los segundos (1000)*/

setInterval( () => {
    
    //Variables para la fecha
    
    /* document.getElementsByClassName("...") retorna un objeto similar a un array de los elementos 
    hijos que tengan todos los nombres de clase indicados. Cuando es llamado sobre el objeto document, 
    la busqueda se realiza en todo el document, incluido el nodo raíz
    [0] significa en la posicion 0*/
    
        var fecha = document.getElementsByClassName("fecha")[0];
        var diaSemana = new Date();
        var diaSem = diaSemana.getDay();
        var dia = diaSemana.getDate();
        var mes = diaSemana.getMonth();
        var year = diaSemana.getFullYear();

    //Arrays para la semana y para los meses
        var semana = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    
    //La propiedad Element.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.
    //Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva.
        fecha.innerHTML = `${semana[diaSem]} ${dia} de ${meses[mes]} del ${year}`;

    //Variables para el reloj
        var reloj = document.getElementsByClassName("reloj")[0];
        var tiempoActual = new Date();
        var hora = tiempoActual.getHours();
        var ampm;
    
    //Creo condicionales 
    /*Este if lo que hace es transformar el reloj de 24hs a 12hs
    si pasan de las 12hs significa que estamos en la tarde (pm)
    sino son las horas de mañana (am)*/

            if(hora >= 12 ) {
                hora = hora - 12;
                ampm = 'PM';
            } else {
                ampm = 'AM';
            }

            if(hora == 0) {
                hora = 12;
            }
    
    /*cuando se este ejecutando el reloj, va a aparecer en los
    minutos y los segundos un solo numero asi: 10hs 1min 3seg.  bueno, no queremos 
    que eso pase, queremos que se nos muestre asi: 10hs 01min 06seg.
    con el 0 delante del minuto y del segundo, y cuando llegue a 10 cambie y no 
    aparezca, por lo tanto implementamos un if de la siguiente manera*/

        var minutos = tiempoActual.getMinutes();
    
            if (minutos < 10) {
                minutos = "0" + minutos
            }; 

        var segundos = tiempoActual.getSeconds();
        
            if (segundos < 10) {
                segundos = "0" + segundos
            }; 

        reloj.innerHTML = `${hora}:${minutos}:${segundos} ${ampm}`;

}, 1000);

/*Agrego un evento "click", para ello, creo varias "const" que me permiten, mediante 
document.getElementById(''); buscar en el documento el Id correspondiente*/
const entrarButton = document.getElementById('entrar');
const volverButton = document.getElementById('volver');
const container = document.getElementById('container');

/* El método addEventListener() permite definir qué evento escuchar sobre cualquier elemento seleccionado.
El primer parámetro corresponde al nombre del evento y el segundo a la función de respuesta.
En las siguientes lineas se ejecuta lo siguiente:
en la primera: cuando escuches que se haga "click" en el boton que tiene como id "signUp" move, en este caso, el panel hacia la derecha
en la segunda: cuando escuches que se haga "click" en el boton que tiene como id "signIn" remove ese panel a su posicion original
*/
entrarButton.addEventListener('click', () => container.classList.add('right-panel-active'));
volverButton.addEventListener('click', () => container.classList.remove('right-panel-active'));
