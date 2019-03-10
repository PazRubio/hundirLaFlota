const TAM = 10; /* tamanio del tablero */
var danios = [];
var tablero = []; /* nuestro array de barcos */
var tableroOponente = []; /* array de los barcos del oponente */
var contDisparos = 0; /*  */
var contDisparosOpo = 0; /*  */
var tirosAleatorios = []; /* array con los tiros que realiza el oponente */
var totalBarcos = 0;

/* Objeto Jugador con el nombre y los barcos */
function Jugador(nombre, turno, ganado, barcos, tablero) {
    this.nombre = nombre;
    this.turno = turno;
    this.ganado = ganado;
    this.barcos = barcos;
    this.tablero = tablero;
}

function Barco(coordenada, danio, dir, numeroCasillas) {
    this.numeroCasillas = numeroCasillas;
    this.coordenada = coordenada;
    this.danio = danio;
    this.dir = dir;
}

function Portaaviones(coordenada, dir) {
    Barco.call(this, coordenada, 0, dir, 5);
}

function Acorazado(coordenada, dir) {
    Barco.call(this, coordenada, 0, dir, 4);
}

function Buque(coordenada, dir) {
    Barco.call(this, coordenada, 0, dir, 3);
}

function Lancha(coordenada, dir) {
    Barco.call(this, coordenada, 0, dir, 2);
}

function Velero(coordenada, dir) {
    Barco.call(this, coordenada, 0, dir, 1);
}

/* Cogemos los datos del formulario para colocar a mano los barcos */
function validarColocacion() {
    //Portaaviones
    //fila
    var filaP = document.getElementById('filaP');
    var valorFilaP = filaP.options[filaP.selectedIndex].value;
    //columna
    var columnaP = document.getElementById('columnaP');
    var valorColumnaP = columnaP.options[columnaP.selectedIndex].value;
    // direccion
    var direccionP = document.getElementById('direccionP');
    var valorDireccionP =  direccionP.options[direccionP.selectedIndex].value;

    //Acorazado
    //fila
    var filaA = document.getElementById('filaA');
    var valorFilaA = filaA.options[filaA.selectedIndex].value;
    //columna
    var columnaA = document.getElementById('columnaA');
    var valorColumnaA = columnaA.options[columnaA.selectedIndex].value;
    // direccion
    var direccionA = document.getElementById('direccionA');
    var valorDireccionA =  direccionA.options[direccionA.selectedIndex].value;

    //Buque
    //fila
    var filaB = document.getElementById('filaB');
    var valorFilaB = filaB.options[filaB.selectedIndex].value;
    //columna
    var columnaB = document.getElementById('columnaB');
    var valorColumnaB = columnaB.options[columnaA.selectedIndex].value;
    // direccion
    var direccionB = document.getElementById('direccionB');
    var valorDireccionB =  direccionB.options[direccionB.selectedIndex].value;

    // Lancha 1
    //fila
    var filaL1 = document.getElementById('filaL1');
    var valorFilaL1 = filaL1.options[filaL1.selectedIndex].value;
    //columna
    var columnaL1 = document.getElementById('columnaL1');
    var valorColumnaL1 = columnaL1.options[columnaL1.selectedIndex].value;
    // direccion
    var direccionL1 = document.getElementById('direccionL1');
    var valorDireccionL1 =  direccionL1.options[direccionL1.selectedIndex].value;

    // Lancha 2
    //fila
    var filaL2 = document.getElementById('filaL2');
    var valorFilaL2 = filaL2.options[filaL2.selectedIndex].value;
    //columna
    var columnaL2 = document.getElementById('columnaL2');
    var valorColumnaL2 = columnaL2.options[columnaL2.selectedIndex].value;
    // direccion
    var direccionL2 = document.getElementById('direccionL2');
    var valorDireccionL2 =  direccionL2.options[direccionL2.selectedIndex].value;

    // Velero 1
    //fila
    var filaV1 = document.getElementById('filaV1');
    var valorFilaV1 = filaV1.options[filaV1.selectedIndex].value;
    //columna
    var columnaV1 = document.getElementById('columnaV1');
    var valorColumnaV1 = columnaV1.options[columnaV1.selectedIndex].value;
    // direccion
    var direccionV1 = document.getElementById('direccionV1');
    var valorDireccionV1 =  direccionV1.options[direccionV1.selectedIndex].value;

    // Velero 2
    //fila
    var filaV2 = document.getElementById('filaV2');
    var valorFilaV2 = filaV2.options[filaV2.selectedIndex].value;
    //columna
    var columnaV2 = document.getElementById('columnaV2');
    var valorColumnaV2 = columnaV2.options[columnaV2.selectedIndex].value;
    // direccion
    var direccionV2 = document.getElementById('direccionV2');
    var valorDireccionV2 =  direccionV2.options[direccionV2.selectedIndex].value;

    // Velero 3
    //fila
    var filaV3 = document.getElementById('filaV3');
    var valorFilaV3 = filaV3.options[filaV3.selectedIndex].value;
    //columna
    var columnaV3 = document.getElementById('columnaV3');
    var valorColumnaV3 = columnaV3.options[columnaV3.selectedIndex].value;
    // direccion
    var direccionV3 = document.getElementById('direccionV3');
    var valorDireccionV3 =  direccionV3.options[direccionV3.selectedIndex].value;
    //array con toda la informacion de los barcos f,c y direccion
    var barcos = [
        [valorFilaP, valorColumnaP, valorDireccionP, 5], 
        [valorFilaA, valorColumnaA, valorDireccionA, 4],
        [valorFilaB, valorColumnaB, valorDireccionB, 3],
        [valorFilaL1, valorColumnaL1, valorDireccionL1, 2],
        [valorFilaL2, valorColumnaL2, valorDireccionL2, 2],
        [valorFilaV1, valorColumnaV1, valorDireccionV1, 1],
        [valorFilaV2, valorColumnaV2, valorDireccionV2, 1],
        [valorFilaV3, valorColumnaV3, valorDireccionV3, 1]
    ];
    return colocar(barcos);
}

/* una vez cogidos los datos del formulario, se comprueba si todos los barcos estan bien colocados 
   (es decir, si no se tocan) */
function colocar(arrayComprobar){
    var posicionesCorrectas = true;
    var arrayBarcos = new Array();

    arrayComprobar.forEach(barco => {
        if(noSeTocan(arrayBarcos, barco[0], barco[1], barco[2], barco[3])){
            switch (barco[3]){
                case 5:                                        
                    barco = new Portaaviones([barco[0], barco[1]], barco[2]);
                    break;
                case 4:
                    barco = new Acorazado([barco[0], barco[1]], barco[2]);
                    break;
                case 3:
                    barco = new Buque([barco[0], barco[1]], barco[2]);
                    break;
                case 2:
                    barco = new Lancha([barco[0], barco[1]], barco[2]);
                    break;
                case 1:
                    barco = new Velero([barco[0], barco[1]], barco[2]);
                    break;
                }
            arrayBarcos.push(barco);
        } else {
            posicionesCorrectas = false;
        }  
    });
    if(!posicionesCorrectas){
        document.getElementById('mensajeError').innerHTML = "Posiciones incorrectas, los barcos no pueden super ponerse";        
    } else {
	    jugador = new Jugador("Nuestro", false, false, arrayBarcos, tablero);
    	arrayBarcos.forEach(barco => {        
	        var coord = generaCoordenadas(parseInt(barco.coordenada[0]), parseInt(barco.coordenada[1]), barco.dir, barco.numeroCasillas);
	        tablero.push(coord);
	    });
        generaJugadores("Oponente");
	    var primeraPagina = document.getElementById('primeraPagina');
	    primeraPagina.style.display='none';
	    caja.style.display = 'block';
        imprimirBarcos(jugador);
    }
    return posicionesCorrectas;  
}

/* pruebas */
function comprobarBarco(jugador, coordenadas) {
    var barcoEncontrado, barco;

    for (let i = 0; i < jugador.barcos.length; i++) {
        barco = jugador.barcos[i];

        barcoEncontrado = barco.localizaciones.filter(
            function (coordenadaActual) {
                return (coordenadaActual[0] === coordenadas[0]) && 
                    (coordenadaActual[1] === coordenadas[1]);
            })[0];

        if (barcoEncontrado) {
            danios.push();
            return true;
        }
        else{
            // no hacer nada
        }
    }

    return false;
}

/* pruebas */
function daniosEnElBarco (danios){
    if(danios.length == 0){
        return true;
        //return "No hay daños";
    }else{
        //return "Hay daños";
        return false;
    }
}

/**/
function colocaBarco(tableroFlota, fila, columna, tam){
    for(let i=0; i<tam; i++){
        tableroFlota[fila][columna+i] = tam;
    }
    return tableroFlota;
}

function generaJugadores(jugador){
    /* si el tablero es el del propio jugador, generamos los barcos e 
       imprimos el tablero */
    if(jugador == "nuestro"){
        var nuestro = generaFlotaAleatoria(jugador);
        imprimirBarcos(nuestro);
    }
    /* si es el del oponente, solo generamos la flota */
    generaFlotaAleatoria();
}

/* metodo para generar todos los barcos de un tablero.
   Devuelve el objeto Jugador con todos los barcos que tiene */
function generaFlotaAleatoria(jugador){
    var tableroBarcos = [TAM][TAM];// = iniTablero();
    var arrayBarcos = new Array();
    var tams = [1, 1, 1, 2, 3];
    var nBarcos = 8; 
    
    //    var portaaviones = 5, acorazado = 4, buque = 3, 
    //        lancha = 2, velero = 1;
    var tamBarco = 5; // 5, 4, 3, 2 y 1
    
    for(let i=0; i<nBarcos; i++){
        //numero de barcos de cada tamanio
        var cont = tams[i];
        while(cont>0){
            var fila = Math.floor((Math.random()*TAM));
            var columna = Math.floor((Math.random()*TAM));
            var direccion = Math.random() >= 0.5; // posicion aleatoria: 50% horizontal (1). 50% vertical (0)

            if(noSeTocan(arrayBarcos, fila, columna, direccion, tamBarco)){
                switch (tamBarco){
                    case 5:                                  
                        barco = new Portaaviones([fila, columna], direccion);
                        break;
                    case 4:
                        barco = new Acorazado([fila, columna], direccion);
                        break;
                    case 3:
                        barco = new Buque([fila, columna], direccion);
                        break;
                    case 2:
                        barco = new Lancha([fila, columna], direccion);
                        break;
                    case 1:
                        barco = new Velero([fila, columna], direccion);
                        break;
                }
                
                arrayBarcos.push(barco);
                cont--;
            }
        }
        // una vez hemos hecho todos los barcos de un tamanio,
        // restamos 1 y cogemos el siguiente num de barcos del array
        tamBarco--;
    }
    
    /* metemos en el array de los barcos todos los generados arriba
       y los metemos en el array "propio" o del oponente, dependiendo */
    arrayBarcos.forEach(barco => {
        var coord = generaCoordenadas(barco.coordenada[0], barco.coordenada[1], barco.dir, barco.numeroCasillas);
        if(jugador=="nuestro"){
            tablero.push(coord);
        } else {
            tableroOponente.push(coord);
        }
    });
    tablero.forEach(barco => { totalBarcos += barco.length; });
    return new Jugador("Oponente", false, false, arrayBarcos, tablero);
}

/* funcion que con una fila y columna de inicio, el tamanio del barco y su direccion
   genera todas las coordenadas que ocupa */
function generaCoordenadas(f, c, dir, tam){
    var ocupadas = [];
    if(dir){
        for(let i=c; i<tam+c; i++){
            ocupadas.push([f, i]);
        }
    } else {
        for(let i=f; i<tam+f; i++){
            ocupadas.push([i, c]);
        }
    } 
    return ocupadas;
}

/* metodo comprobacion para que los barcos que llegan no tengan coordenadas
   comunes con los barcos que ya estan colocados */
function noSeTocan(arrayBarcos, f, c, dir, tam){
    var coordenadaCoincidente = [];
    var noDesbordan;

    if(dir){ // si dir = 1 es horizontal
        noDesbordan = c+tam < TAM;
    } else {
        noDesbordan = f+tam < TAM;
    }

    if(!noDesbordan){
        return false;
    }

    if(arrayBarcos.length == 0){
        return noDesbordan;
    } else {
        /* para cada barco, calculamos el array con todas las coordenadas que ocupa
         por ejemplo, para un barco que empieza en [0,1], y ocupa dos horizontal, serian: [[0,1],[0,2]]*/
        for(let i=0; i<arrayBarcos.length; i++){
            ocupadas = generaCoordenadas(arrayBarcos[i].coordenada[0], arrayBarcos[i].coordenada[1], arrayBarcos[i].dir, arrayBarcos[i].numeroCasillas);
            nuevoBarco = generaCoordenadas(f, c, dir, tam);
            /* comparamos las coordenadas de los barcos ya guardados ("ocupadas") 
               con las coordenadas del barco que queremos guardar.
               Si el filtro devuelve alguna coincidente, devolvemos false y no se introduce en el array */
            for(let j=0; (j<ocupadas.length); j++){
                coordenadaCoincidente = nuevoBarco.filter(c => ocupadas[j][0] == c[0] && ocupadas[j][1] == c[1]);   
                if (coordenadaCoincidente.length!=0){
                    return false;
                }
            }            
        }
        /* si salimos del bucle de arrayBarcos sin devolver false, es que no coincide con ningun barco */
        return true;
    }
}

/* imprime el tablero del jugador con los iconos delos barcos al inicio de la partida */
function imprimirBarcos(jugador){
    var miTablero = document.getElementById('miTablero');
    var td = miTablero.getElementsByTagName("td");

    for(let i = 0; i < td.length; i++){
        let id = td[i].getAttribute('id');
        let coord = id.split(''); // id es F01, nos quedamos solo con el "01" por separado
        for(let j= 0; j < tablero.length; j++){
            let barco = tablero[j];
            barco.forEach(casilla => {
                if(casilla[0]==coord[1] && casilla[1]==coord[2]){
                    td[i].setAttribute('class', "barcos");
                }                
            });  
        }  
    }
}


/* evento para ocultar la primera "pagina" cuando generamos laflota aleatoria */
var aleatorio = document.getElementById('aleatorio');
var caja = document.getElementById("caja");
caja.style.display = 'none';

aleatorio.addEventListener('click', function(e){
    e.preventDefault;
    var primeraPagina = document.getElementById('primeraPagina');
    primeraPagina.style.display='none';
    caja.style.display = 'block';
});


/* a todos los button del tablero del oponente le aniadimos el evento
   que comprueba el tiro */
var botones = document.querySelectorAll("button");
botones.forEach(boton => {
    var idBoton = boton.getAttribute("id");
    boton.addEventListener("click", comprobarTiro(boton));    
});

/* Comprueba si el boton al que da el jugador tiene barco o agua */
function comprobarTiro(boton){
    return function(){
        var agua = true;
        var botonCoord = boton.getAttribute('id');
        var idBotonCoord = botonCoord.split('');
        var idFila = idBotonCoord[1];
        var idColumna = idBotonCoord[0];

        for(let i = 0; i<tableroOponente.length; i++){            
            for(let j = 0; j<tableroOponente[i].length; j++){
                var coordenada = tableroOponente[i][j];
                var fila = coordenada[0];
                var columna = coordenada[1];
                if(idFila == fila && idColumna == columna){ 
                    agua = false;
                    boton.setAttribute('class', 'tocado');
            		boton.setAttribute('disabled', 'disabled');
                    contDisparos++;
                }    
            }
        }

        if(contDisparos == totalBarcos){
            document.getElementById('mensajeFin').innerHTML = "Enhorabuena, has ganado!";
        }
        if(agua){
            boton.setAttribute('class', 'agua');
            boton.setAttribute('disabled', 'disabled');
            tiroAleatorio();
            // desactivar botones 
        }
    }
}

/* Metodo del tiro aleatorio del oponente sobre los barcos del propio.
   Si da a un barco sigue jugando, y si da agua le toca el turno al jugador. */
function tiroAleatorio(){
    var estaCoordenada = true; /* para entrar una vez al bucle */
    var numFila = Math.floor(Math.random()*TAM-1)+1;
    var numColum = Math.floor(Math.random()*TAM-1)+1;
    var coordTiro = [numFila, numColum];
    
    /* comprobacion de si el tiro aleatorio esta repetido
       Si no lo esta realizada la jugada, y si lo tiene busca otra */
    while(estaCoordenada && tirosAleatorios.length!=0){
        estaCoordenada = false;
        for(let i=0; i<tirosAleatorios.length; i++){
            if(tirosAleatorios[i][0] == coordTiro[0] && tirosAleatorios[i][1] == coordTiro[1]){
                estaCoordenada = true;
            }
        }
        
        numFila = Math.floor(Math.random()*TAM-1)+1;
        numColum = Math.floor(Math.random()*TAM-1)+1;
        coordTiro = [numFila, numColum];
    }    

    tirosAleatorios.push(coordTiro);
    var coordString = 'F' + numFila + '' + numColum;
    var td = document.querySelectorAll('td');
    for(let i = 0; i<td.length; i++){
        var valor = td[i].getAttribute('id');
        /*if(valor==null){
        	valor = td[i].firstElementChild.id;
        }*/
        for(let j = 0; j < tablero.length; j++){
            tablero[j].forEach(coordBarco => {
                var separarValor = valor.split('');

                if(valor == coordString){
                    if(coordBarco[0] == separarValor[1] && coordBarco[1] == separarValor[2]){
                        td[i].setAttribute('class', 'tocado');
                        contDisparosOpo++;
                        if(contDisparosOpo == totalBarcos){
				            document.getElementById('mensajeFin').innerHTML = "Lo sentimos, has perdido.";
				        }
                        tiroAleatorio();
                    }else{
                        td[i].setAttribute('class', 'agua');
                    }
                }
            });
        }
    }
}


//exportamos la funcion
//module.exports.comprobarBarco = comprobarBarco;
//module.exports.daniosEnElBarco = daniosEnElBarco;



