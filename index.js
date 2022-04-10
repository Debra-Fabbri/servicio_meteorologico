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

class provincias{
    constructor(nombre, temperatura, sensacionTermica, humedad, velocidadDelViento, presionDelAire, visibilidad){
        this.nombre = nombre;
        this.temperatura = temperatura;
        this.sensacionTermica = sensacionTermica;
        this.humedad = humedad;
        this.velocidadDelViento = velocidadDelViento;
        this.presionDelAire = presionDelAire;
        this.visibilidad = visibilidad;
    }
}

//Este es el Array para Provincias, donde cada posicion es un objeto con sus atributos

let provinciasArgentinas = [
    new provincias("Buenos Aires", "27ºC","20ºC", "59%", "2km/h", 4, "98%"),
    new provincias("Ciudad Autonoma de Buenos Aires", "17ºC","20ºC", "39%", "6km/h", 6, "92%"),
    new provincias("Catamarca", "26ºC","20ºC", "79%", "2km/h", 4, "88%"),
    new provincias("Chaco", "20ºC","20ºC", "49%", "6km/h", 4, "90%"),
    new provincias("Chubut", "20ºC","20ºC", "49%", "6km/h", 4, "90%"),
    new provincias("Cordoba", "20ºC","20ºC", "49%", "6km/h", 4, "90%"),
    new provincias("Corrientes", "20ºC","20ºC", "49%", "6km/h", 4, "90%"),
    new provincias("Entre Rios", "20ºC","20ºC", "49%", "6km/h", 4, "90%"),
    new provincias("Formosa", "20ºC", "20ºC", "49%", "6km/h", 4, "90%"),
    new provincias("Jujuy", "20ºC","20ºC", "49%", "6km/h", 4, "90%"),
    new provincias("La Pampa", "20ºC","20ºC", "49%", "6km/h", 4, "90%"),
    new provincias("La Rioja", "20ºC","20ºC", "49%", "6km/h", 4, "90%"),
    new provincias("Mendoza", "20ºC","20ºC", "49%", "6km/h", 4, "90%"),
    new provincias("Misiones", "20ºC","20ºC", "49%", "6km/h", 4, "90%"),
    new provincias("Neuquen", "20ºC","20ºC", "49%", "6km/h", 4, "90%"),
    new provincias("Rio Negro", "20ºC","20ºC", "49%", "6km/h", 4, "90%"),
    new provincias("Salta", "20ºC", "20ºC","49%", "6km/h", 4, "90%"),
    new provincias("San Juan", "20ºC", "20ºC", "49%", "6km/h", 4, "90%"),
    new provincias("San Luis", "20ºC","20ºC", "49%", "6km/h", 4, "90%"),
    new provincias("Santa Cruz", "20ºC","20ºC", "49%", "6km/h", 4, "90%"),
    new provincias("Santa Fe", "20ºC","20ºC", "49%", "6km/h", 4, "90%"),
    new provincias("Santiago del Estero", "20ºC", "20ºC", "49%", "6km/h", 4, "90%"),
    new provincias("Tierra del Fuego", "20ºC","20ºC", "49%", "6km/h", 4, "90%"),
    new provincias("Tucuman", "20ºC","20ºC", "49%", "6km/h", 4, "90%"),
]

/*mediante un "Find" le digo --> "encontrame en "provinciasArgentinas" el nombre que 
le pase anteriormente en el prompt (por eso tomo el "volverUbicacion") y devolveme, mostrandome
en pantalla (de momento con console.log) todo lo que tenga ese nombre"*/

const resultado = provinciasArgentinas.find(x => x.nombre === volverUbicacion)
console.log(resultado);


//Aca mediante "Date" voy a crear un reloj y fecha en tiempo real que se le muestre al usuario, mientras chequea "el clima"

const fecha = new Date();
console.log(new Date()); //por ahora se ejecuta con console.log, todo lo que viene despues se va a modificar con DOM 

console.log(fecha.getHours() - 12); //la hora va a estar en formato PM / AM, por eso se resta - 12
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());

//Estos arreglos me van a ayudar a que cuando implemente DOM, la fecha se muestre en pantalla

var semana = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

console.log(fecha.getDay());
console.log(fecha.getDate());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());

/* Funcionamiento logico para el reloj
Primeramente se debe crear una funcion que contenga varias variables 
que nos permita traer cada elemento, como el dia, el mes, los minutos, etc
Esto lo pondre en marcha con DOM

Mientras ire definiendo como quiero el formato que se muestre al usuario:

Este if lo que hace es transformar el reloj de 24hs a 12hs
si pasan de las 12hs significa que estamos en la tarde (pm)
sino son (am)

    if(horas >= 12 ) {
        horas = horas - 12;
        ampm = 'PM';
    } else {
        ampm = 'AM';
    }

si son las 0 horas *que serian las 12 de la mañana*
transforma ese 0 a 12 de la mañana (seria la madrugada)

    if(horas == 0) {
        horas = 12;
    }

ademas, cuando se este ejecutando el reloj, me va a aparecer en los
minutos y los segundos un solo numero asi: 10hs 1min 3seg no? bueno, no queremos 
que eso pase, queremos que se nos muestre asi: 10hs 01min 06seg
con el 0 delante del minuto y del segundo, y cuando llegue a 10 cambie y no 
aparezca, por lo tanto implementare un if de la siguiente manera

    if (minutos < 10) {
        minutos = "0" + minutos
    }; 
    
    if (segundos < 10) {
            segundos = "0" + segundos
        }; 

*/