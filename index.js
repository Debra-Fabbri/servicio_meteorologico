/*cree un algoritmo que tiene una entrada de datos con un prompt que pide una ubicacion y depende 
de la ubicacion que elija el usuario, le trae un dato del array, donde mediante DOM imprime
la temperatura, humedad, etc, todo lo que hay guardado en ese array*/

//Comencemos

/*Queremos una persistencia de estos datos en el navegador, para eso, usaremos "localStorage"
esto nos va a permitir que cuando el usuario entre por primera vez y escriba su provincia elijiendola
como predeterminada, cuando cierre la pagina, esta misma informacion va a persistir cuando vuelva a 
acceder a la misma.

declaro con "let" mis variables que van a estar en el localStorage
la negacion de ubicacion significa que si nunca a entrado a la pagina desde su navegador, entrara
dentro del if y donde mediante un prompt nos pide ingresar la provincia y luego que la confirme nuevamente, y 
finalmente lo guarda en el localStorage, una vez que ya este guardado cuando el usuario vuelve
a reiniciar la pagina o paga la computadora y entra, ya reconoce que hay algo y se muestra un "alert" de bienvenida */

//Modificamos el prototype de RainyDay para agregar la funcion de stop
RainyDay.prototype.destroy = function () {
    this.canvas.parentNode.removeChild(this.canvas)
  
    if (this.bckStyle) {
      this.imgSource.style.background = this.bckStyle.background
    }
  
    Object.keys(this).forEach(function (item) {
      delete this[item]
    })
  }

let usuario = localStorage.getItem('usuario');
let ubicacion = localStorage.getItem('ubicacion');
let volverUbicacion = localStorage.getItem('ubicacion');

function onPageLoad() {
    if (!ubicacion == true) {
        usuario = prompt("Bienvenid@, Por favor ingrese su nombre");
        ubicacion = prompt(`Hola ${usuario}!! Por favor, Ingrese su provincia predeterminada dentro de Argentina.`);
        volverUbicacion = prompt("Por favor, confirme nuevamente la provincia ingresada.");
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('ubicacion', ubicacion);
        setearClima();
    } else {
        alert('Bienvenid@ nuevamente');
        setearClima();
    }
}
//Esta funcion nos permite "validar" esa ubicacion/provincia para que posteriormente me traiga los datos de la misma
//Ademas le da la oportunidad al usuario de que si no quiere la que ingreso, la puede cambiar
/*La funcion del while es la siguiente: mientras la "ubicacion" ingresada sea distinta de la "volverUbicacion" 
se va a repetir hasta que sean "exactamente Iguales", entonces sale de ese bucle y vemos que entramos o accedimos 
a la pagina con su informacion"*/

function validarUbicacion(ubicacion, volverUbicacion) {

    while (ubicacion !== volverUbicacion) {

        alert("Ups! No ha ingresado la misma ubicación, por favor vuelva a intentarlo");
        ubicacion = prompt("Hola! Por favor, Ingrese una provincia dentro de Argentina.");
        volverUbicacion = prompt("Por favor, confirme nuevamente la provincia ingresada.");
    }

}

//para llamar a la funcion, lo hago de la siguiente manera:

validarUbicacion(ubicacion, volverUbicacion);

//Luego creo una clase Provincia, que contiene un "constructor" donde le paso parametros que luego voy a utilizar en un Array 


class provincias {
    constructor(nombre, estado, temperatura, sensacionTermica, humedad, velocidadDelViento, presionDelAire, visibilidad, indiceUV) {
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
}

//Array para Provincias, donde cada posicion es un objeto con sus atributos

const provinciasArgentinas = [
    new provincias("Buenos Aires", "Lluvioso", 22, 22, 76, 11, 1.021, 5, "Bajo, 2"),
    new provincias("Ciudad Autonoma de Buenos Aires", "Tormenta Electrica", 15, 16, 83, 19, 1.006, 10, "Moderado, 4"),
    new provincias("Catamarca", "Soleado", 23, 23, 49, 37, 1.017, 16, "Moderado, 4"),
    new provincias("Chaco", "Soleado", 23, 23, 48, 13, 1.020, 16, "Moderado, 3"),
    new provincias("Chubut", "Soleado", 22, 23, 22, 19, 1.010, 16, "Bajo, 2"),
    new provincias("Cordoba", "Soleado", 25, 26, 60, 3, 1.021, 10, "Alto, 6"),
    new provincias("Corrientes", "Soleado", 23, 23, 46, 11, 1.020, 10, "Moderado, 4"),
    new provincias("Entre Rios", "Tormenta Electrica", 15, 16, 91, 18, 1.006, 10, "Bajo, 2"),
    new provincias("Formosa", "Soleado", 22, 22, 48, 18, 1.019, 10, "Bajo, 2"),
    new provincias("Jujuy", "Nublado", 16, 16, 91, 8, 1.019, 10, "Bajo, 2"),
    new provincias("La Pampa", "Soleado", 23, 23, 30, 19, 1.019, 16, "Bajo, 2"),
    new provincias("La Rioja", "Parcialmente nublado", 23, 23, 59, 11, 1.016, 16, "Moderado, 3"),
    new provincias("Mendoza", "Mayormente soleado", 23, 23, 31, 3, 1.016, 14, "Moderado, 3"),
    new provincias("Misiones", "Soleado", 20, 20, 55, 14, 1.017, 14, "Bajo, 2"),
    new provincias("Neuquen", "Mayormente soleado", 24, 24, 26, 18, 1.016, 10, "Bajo, 2"),
    new provincias("Rio Negro", "Soleado", 22, 22, 27, 19, 1.016, 16, "Bajo, 1"),
    new provincias("Salta", "Nublado", 17, 17, 72, 13, 1.022, 10, "Bajo, 1"),
    new provincias("San Juan", "Mayormente Soleado", 26, 26, 27, 10, 1.015, 14, "Moderado, 3"),
    new provincias("San Luis", "Mayormente soleado", 24, 24, 27, 11, 1.017, 16, "Bajo, 2"),
    new provincias("Santa Cruz", "Mayormente nublado", 19, 19, 45, 21, 1.005, 16, "Bajo, 1"),
    new provincias("Santa Fe", "Lluvioso", 16, 16, 87, 3, 1.007, 10, "Bajo, 2"),
    new provincias("Santiago del Estero", "Mayormente soleado", 22.4, 22, 31, 4, 1.018, 10, "Moderado, 4"),
    new provincias("Tierra del Fuego", "Parcialmente nublado", 11, 8, 55, 31, 999, 14, "Bajo, 1"),
    new provincias("Tucuman", "Mayormente nublado", 22, 22, 54, 11, 1.020, 10, "Bajo, 2"),
]

/*mediante un "Find" le digo --> "encontrame en "provinciasArgentinas" el nombre que 
le pase anteriormente en el prompt y devolveme, mostrandome en pantalla todo lo que tenga 
ese nombre, (siendo que esta misma informacion se va a guardar en el localStorage)*/

const resultado = provinciasArgentinas.find(x => x.nombre == volverUbicacion)
console.log(resultado);


//Para que el "resultado" se muestre en pantalla 
const vistaA = document.getElementById("vistaA");
vistaA.innerHTML = `<h1>${resultado.temperatura} Cº</h1>
                <h5>Sensacion termica: ${resultado.sensacionTermica} Cº</h5>
                <h3>${resultado.estado}</h3>
                <h2>${resultado.nombre}, Argentina</h2>`;

const humedad = document.getElementById("humedad");
humedad.innerHTML = `<h5>Humedad: ${resultado.humedad} % </h5>`;

const velocidadViento = document.getElementById("velocidadViento");
velocidadViento.innerHTML = `<h5>Velocidad del Viento: ${resultado.velocidadDelViento} km/h </h5>`;

const presionDelAire = document.getElementById("presionAire");
presionDelAire.innerHTML = `<h5>Presion del Aire: ${resultado.presionDelAire} mbar </h5>`;

const visibilidad = document.getElementById("visibilidad");
visibilidad.innerHTML = `<h5>Visibilidad: ${resultado.visibilidad} km </h5>`;

const indiceUV = document.getElementById("indiceUV");
indiceUV.innerHTML = `<h5>Indice UV: ${resultado.indiceUV} % </h5>`;


/*Esta funcion permite al usuario una vez elegida su provincia como predeterminda y quiera ver 
que sucede en las otras, mediente un input se escribe la provincia que se quiera buscar y al hacer click en el boton
esta busca dentro del Array de provinciasArgentinas mediante un find la misma y luego con un if creo la condicion de que 
si la encuentra imprima su informacion y si no la encuentra, sale un alert diciendo que no esta.
lo que hace "toLowerCase" es pasar todas las letras a minuscula, para que si el usuario escribe todo en minuscula o 
mayuscula lo reconozca igual*/
document.getElementById('buscar').addEventListener("click", function () {
    const name = document.getElementById('name').value.toLowerCase();
    const city = provinciasArgentinas.find(city => city.nombre.toLowerCase() === name);

    if (city) {
        //alert(`La provincia buscada es ${name}`);
        var vistaA = document.getElementById("vistaA");
        vistaA.innerHTML = `<h1>${city.temperatura} Cº</h1>
                <h5>Sensacion termica: ${city.sensacionTermica} Cº</h5>
                <h3>${city.estado}</h3>
                <h2>${city.nombre}, Argentina</h2>`;

        var humedad = document.getElementById("humedad");
        humedad.innerHTML = `<h5>Humedad: ${city.humedad} % </h5>`;

        var velocidadViento = document.getElementById("velocidadViento");
        velocidadViento.innerHTML = `<h5>Velocidad del Viento: ${city.velocidadDelViento} km/h </h5>`;

        var presionDelAire = document.getElementById("presionAire");
        presionDelAire.innerHTML = `<h5>Presion del Aire: ${city.presionDelAire} mbar </h5>`;

        var visibilidad = document.getElementById("visibilidad");
        visibilidad.innerHTML = `<h5>Visibilidad: ${city.visibilidad} km </h5>`;

        var indiceUV = document.getElementById("indiceUV");
        indiceUV.innerHTML = `<h5>Indice UV: ${city.indiceUV} % </h5>`;

        setearClima(false);
    } else {
        //alert('Esa provincia no se encuentra, por favor, vuela a intentarlo')
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La informacion solicitada no se encuentra, por favor, vuela a intentarlo!',
        })
    };
    //aca dentro tambien debe ir la libreria rainyday.js
});

/*PASOS PARA EJECUTAR Y MOSTRAR UN RELOJ Y FECHA EN TIEMPO REAL

    TENGAMOS EN CUENTA QUE LOS DATOS QUE SE TRAEN Y MUESTRAN SON DEL ORDENADOR DEL USUARIO
    QUE ESTE VISITANDO LA PAGINA

    Para crear un reloj y fecha en tiempo real
    utilizaremos una funcion arrow setInterval('...' , '...') ya que 
    queremos que se ejecute cada segundo, la misma recibe 2 parametros:
        1ero) va a ser una funcion que en su interior tiene declaradas
            variables como: dia, mes, hora, mes, etc y arrays
        2do) un numero, son los segundos (1000)*/

setInterval(() => {

    //Variables para la fecha

    /* document.getElementsByClassName("...") retorna un objeto similar a un array de los elementos 
    hijos que tengan todos los nombres de clase indicados. Cuando es llamado sobre el objeto document, 
    la busqueda se realiza en todo el document, incluido el nodo raíz
    [0] significa en la posicion 0*/

    const fecha = document.getElementsByClassName("fecha")[0];
    const diaSemana = new Date();
    const diaSem = diaSemana.getDay();
    const dia = diaSemana.getDate();
    const mes = diaSemana.getMonth();
    const year = diaSemana.getFullYear();

    //Arrays para la semana y para los meses
    const semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    //La propiedad Element.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.
    //Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva.
    fecha.innerHTML = `${semana[diaSem]} ${dia} de ${meses[mes]} del ${year}`;

    //Variables para el reloj
    //OPTIMIZADO
    let reloj = new Date();
    let hora = reloj.getHours();
    let minutos = reloj.getMinutes();
    let segundos = reloj.getSeconds();
    var ampm;
    
    if (hora >= 12) {
        hora = hora - 12;
        ampm = 'PM';
    } else {
        ampm = 'AM';
    };

    if (minutos < 10) {
        minutos = "0" + minutos
    };

    if (segundos < 10) {
        segundos = "0" + segundos
    };

    document.getElementsByClassName("reloj")[0].innerHTML = `${hora}:${minutos}:${segundos} ${ampm}`;

}, 1000);

/*Agrego un evento "click", para ello, creo varias "const" que me permiten, mediante 
document.getElementById(''); buscar en el documento el Id correspondiente*/
const entrarButton = document.getElementById('entrar');
const volverButton = document.getElementById('volver');
const container = document.getElementById('container');

/* El método addEventListener() permite definir qué evento escuchar sobre cualquier elemento seleccionado.
El primer parámetro corresponde al nombre del evento y el segundo a la función de respuesta.
En las siguientes lineas se ejecuta lo siguiente:
en la primera: cuando escuches que se haga "click" en el boton que tiene como id "entrar" move, en este caso, el panel hacia la derecha
en la segunda: cuando escuches que se haga "click" en el boton que tiene como id "volver" remove ese panel a su posicion original
*/
entrarButton.addEventListener('click', () => container.classList.add('right-panel-active'));
volverButton.addEventListener('click', () => container.classList.remove('right-panel-active'));

//Funcion traida de la "Libreria Highcharts"
Highcharts.chart('container2', {

    title: {
        text: 'Highcharts Wind Barbs'
    },

    xAxis: {
        type: 'datetime',
        offset: 40
    },

    plotOptions: {
        series: {
            pointStart: Date.UTC(2017, 0, 29),
            pointInterval: 36e5
        }
    },

    series: [{
        type: 'windbarb',
        data: [
            [9.8, 177.9],
            [10.1, 177.2],
            [11.3, 179.7],
            [10.9, 175.5],
            [9.3, 159.9],
            [8.8, 159.6],
            [7.8, 162.6],
            [5.6, 186.2],
            [6.8, 146.0],
            [6.4, 139.9],
            [3.1, 180.2],
            [4.3, 177.6],
            [5.3, 191.8],
            [6.3, 173.1],
            [7.7, 140.2],
            [8.5, 136.1],
            [9.4, 142.9],
            [10.0, 140.4],
            [5.3, 142.1],
            [3.8, 141.0],
            [3.3, 116.5],
            [1.5, 327.5],
            [0.1, 1.1],
            [1.2, 11.1]
        ],
        name: 'Wind',
        color: Highcharts.getOptions().colors[1],
        showInLegend: false,
        tooltip: {
            valueSuffix: ' m/s'
        }
    }, {
        type: 'area',
        keys: ['y', 'rotation'], // rotation is not used here
        data: [
            [9.8, 177.9],
            [10.1, 177.2],
            [11.3, 179.7],
            [10.9, 175.5],
            [9.3, 159.9],
            [8.8, 159.6],
            [7.8, 162.6],
            [5.6, 186.2],
            [6.8, 146.0],
            [6.4, 139.9],
            [3.1, 180.2],
            [4.3, 177.6],
            [5.3, 191.8],
            [6.3, 173.1],
            [7.7, 140.2],
            [8.5, 136.1],
            [9.4, 142.9],
            [10.0, 140.4],
            [5.3, 142.1],
            [3.8, 141.0],
            [3.3, 116.5],
            [1.5, 327.5],
            [0.1, 1.1],
            [1.2, 11.1]
        ],
        color: Highcharts.getOptions().colors[0],
        fillColor: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
                [0, Highcharts.getOptions().colors[0]],
                [
                    1,
                    Highcharts.color(Highcharts.getOptions().colors[0])
                        .setOpacity(0.25).get()
                ]
            ]
        },
        name: 'Wind speed',
        tooltip: {
            valueSuffix: ' m/s'
        },
        states: {
            inactive: {
                opacity: 1
            }
        }
    }]

});

var snippet = [].slice.call(document.querySelectorAll('.hover'));
if (snippet.length) {
    snippet.forEach(function (snippet) {
        snippet.addEventListener('mouseout', function (event) {
            if (event.target.parentNode.tagName === 'figure') {
                event.target.parentNode.classList.remove('hover')
            } else {
                event.target.parentNode.classList.remove('hover')
            }
        });
    });
}

/*
var rainyday = undefined;
function setearClima(test = true) {
    const lluvioso = provinciasArgentinas.filter(j => j.estado === "Lluvioso");
    //const soleado = provinciasArgentinas.filter(l => l.estado === "Soleado");
    
    if(test == lluvioso) {
        quellueva();
    } else {
        rainyday.destroy();
        var image = document.getElementById('background');
        image.onload = null;
        image.src = "images/cielo-sol.jpg";
    }
}

function quellueva() {
    var image = document.getElementById('background');
    image.onload = function () {
        rainyday = new RainyDay({
            image: this,
            blur: 10,
            opacity: 1,
            gravityAngle: Math.PI / 2,
            gravityAngleVariance: 0
        });
        rainyday.gravity = rainyday.GRAVITY_NON_LINEAR;
        rainyday.trail = rainyday.TRAIL_SMUDGE;
        rainyday.rain([
            [0, 3, 8],
            [3, 8, 1]
        ], 50);
    };
    image.crossOrigin = 'anonymous';
    image.src = 'images/bg1.jpg';
}
*/
//quellueva();

//----------------------API FETCH----------------------------------------------

const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY ='f821be9dc0701e6d3e96177924d90672';


getWeatherData()
function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=f821be9dc0701e6d3e96177924d90672`).then(res => res.json()).then(data => {

        console.log(data)
        showWeatherData(data);
        })

    })
}

function showWeatherData (data){

    let otherDayForcast = ''
    data.daily.forEach((day, idx) => {
        if(idx == 0){
            currentTempEl.innerHTML = `
            <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt*1000).format('dddd')}</div>
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            
            `
        }else{
            otherDayForcast += `
            <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            
            `
        }
    })


    weatherForecastEl.innerHTML = otherDayForcast;
}

