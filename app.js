let mejorPuntaje = 0
let nombreMayor = 'Hernan'
let jugadorX;
let jugadorO;
let ca1; let cb1; let cc1;
let ca2; let cb2; let cc2;
let ca3; let cb3; let cc3;
let puntossX = 0;
let puntossO = 0;
let turno = true;
let click = 0;
let nombreRecord;
let puntosRecord = 0;

if ( localStorage.getItem('nombretatetiv3')) {
   nombreRecord =  localStorage.getItem('nombretatetiv3')
   puntosRecord = localStorage.getItem('puntostatetiv3') 
   puntuacion.innerHTML = `${nombreRecord}  -  ${puntosRecord} Pts.`
    
}
// recibe el nombre de los jugadores y los muestra en pantalla
function jugar() {
    document.getElementById('formularioContenedor').style.display="none";
    jugadorX = document.getElementById('nombreX').value ;
    document.getElementById('nombreXX').innerHTML = jugadorX;
    jugadorO = document.getElementById('nombreO').value;
    document.getElementById('nombreOO').innerHTML = jugadorO
}


let tablero = document.querySelector('.tablero');
    tablero.addEventListener('click', (e) => {
    let objetoSelect = e.target.parentElement;
    
    let btn = e.target.classList.contains('cuadro');
    
    if (btn) {
        if ( turno ){            
            let id = objetoSelect.querySelector('.cuadro').dataset.cua1;            
            document.getElementById(id).innerHTML = `<img src="img/x.png" alt="X"  class="fichasTablero"/>`;
            document.getElementById('flecha').src='img/flechad.png';
            click = click + 1;
            turno = false;
            marcaJugada(id);
        }else {            
            let id = objetoSelect.querySelector('.cuadro').dataset.cua1;            
            document.getElementById(id).innerHTML = `<img src="img/o.png" alt="O"  class="fichasTablero" />`;
            document.getElementById('flecha').src='img/flechai.png';
            click = click + 1
            turno = true;
            marcaJugada(id)
        }
    }else {
        ohoh()
    }
    
})
// Suena cuando se hace click donde ya se hizo click antes
function ohoh() {
    const audio = new Audio();
    audio.src = "audios/ohoh.mp3";
    audio.play();
}
// Suena cuando se hace tateti
function ganador() {
    const sonido = new Audio();
    sonido.src ="audios/ganador.mp3";
    sonido.play();
}
// Suena cuando nadie gano
function empate() {
    const sonidos = new Audio();
    sonidos.src ="audios/empate.mp3";
    sonidos.play();
}
function record() {
    const sonidosss = new Audio();
    sonidosss.src ="audios/record.mp3";
    sonidosss.play();
}
// Indica en una variable si un casillero es X o O
function marcaJugada(id) {    
    switch(id) {
        case 'a1': if ( turno == false) {  ca1 = 'X'; verificaJugada()}else{ ca1 = 'O';verificaJugada()}
        break;

        case 'a2': if ( turno == false) {  ca2 = 'X'; verificaJugada()}else{ ca2 = 'O';verificaJugada() }
        break;

        case 'a3': if ( turno == false) {  ca3 = 'X'; verificaJugada()}else{ ca3 = 'O'; verificaJugada()}
        break;

        case 'b1': if ( turno == false) { cb1 = 'X';verificaJugada() }else{  cb1 = 'O';verificaJugada() }
        break;

        case 'b2': if ( turno == false) { cb2 = 'X';verificaJugada() }else{ cb2 = 'O';verificaJugada() }
        break;

        case 'b3': if ( turno == false) { cb3 = 'X';verificaJugada() }else{ cb3 = 'O';verificaJugada() }
        break;

        case 'c1': if ( turno == false) { cc1 = 'X';verificaJugada() }else{ cc1 = 'O';verificaJugada() }
        break;

        case 'c2': if ( turno == false) { cc2 = 'X';verificaJugada() }else{ cc2 = 'O';verificaJugada() }
        break;

        case 'c3': if ( turno == false) { cc3 = 'X';verificaJugada() }else{ cc3 = 'O';verificaJugada() }
        break;
    }

}
// Verifica si una jugada es ganadora.
function verificaJugada() {
    // fila A.
    if ( ca1 == 'X' && ca2 == 'X' && ca3 == 'X') { 
        document.getElementById('a1').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        document.getElementById('a2').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        document.getElementById('a3').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        ganador(); // Sonido de ganador
        setTimeout(sumaPuntosX,4000);  // pasan 4 segundos y continua el juego       
    }
    else if ( ca1 == 'O' && ca2 == 'O' && ca3 == 'O') { 
        document.getElementById('a1').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        document.getElementById('a2').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        document.getElementById('a3').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        ganador();
        setTimeout(sumaPuntosO,4000);}
    // fila B.
    else if ( cb1 == 'X' && cb2 == 'X' && cb3 == 'X') { 
        document.getElementById('b1').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        document.getElementById('b2').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        document.getElementById('b3').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        ganador();
        setTimeout(sumaPuntosX,4000);
    }
    else if ( cb1 == 'O' && cb2 == 'O' && cb3 == 'O') { 
        document.getElementById('b1').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        document.getElementById('b2').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        document.getElementById('b3').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        ganador();
        setTimeout(sumaPuntosO,4000);
    }
    // fila C.
    else if ( cc1 == 'X' && cc2 == 'X' && cc3 == 'X') { 
        document.getElementById('c1').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        document.getElementById('c2').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        document.getElementById('c3').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        ganador();
        setTimeout(sumaPuntosX,4000);
    }
    else if ( cc1 == 'O' && cc2 == 'O' && cc3 == 'O') { 
        document.getElementById('c1').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        document.getElementById('c2').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        document.getElementById('c3').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        ganador();
        setTimeout(sumaPuntosO,4000);
    }
    // diagonal izquierda.
    else if ( ca1 == 'X' && cb2 == 'X' && cc3 == 'X') { 
        document.getElementById('a1').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        document.getElementById('b2').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        document.getElementById('c3').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        ganador();
        setTimeout(sumaPuntosX,4000);
    }
    else if ( ca1 == 'O' && cb2 == 'O' && cc3 == 'O') { 
        document.getElementById('a1').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        document.getElementById('b2').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        document.getElementById('c3').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        ganador();
        setTimeout(sumaPuntosO,4000);
    }
    // DIAGONAL DERECHA.
    else if ( ca3 == 'X' && cb2 == 'X' && cc1 == 'X') { 
        document.getElementById('a3').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        document.getElementById('b2').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        document.getElementById('c1').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        ganador();
        setTimeout(sumaPuntosX,4000);
    }
    else if ( ca3 == 'O' && cb2 == 'O' && cc1 == 'O') {
        document.getElementById('a3').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        document.getElementById('b2').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        document.getElementById('c1').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        ganador();
        setTimeout(sumaPuntosO,4000);
    }
    // columna 1.
    else if ( ca1 == 'X' && cb1 == 'X' && cc1 == 'X') { 
        document.getElementById('a1').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        document.getElementById('b1').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        document.getElementById('c1').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        ganador();
        setTimeout(sumaPuntosX,4000);
    }
    else if ( ca1 == 'O' && cb1 == 'O' && cc1 == 'O') { 
        document.getElementById('a1').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        document.getElementById('b1').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        document.getElementById('c1').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        ganador();
        setTimeout(sumaPuntosO,4000);
    }
    // columna 2.
    else if ( ca2 == 'X' && cb2 == 'X' && cc2 == 'X') { 
        document.getElementById('a2').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        document.getElementById('b2').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        document.getElementById('c2').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        ganador();
        setTimeout(sumaPuntosX,4000);
    }
    else if ( ca2 == 'O' && cb2 == 'O' && cc2 == 'O') { 
        document.getElementById('a2').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        document.getElementById('b2').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        document.getElementById('c2').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        ganador();
        setTimeout(sumaPuntosO,4000);
    }
    // columna 3.
    else if ( ca3 == 'X' && cb3 == 'X' && cc3 == 'X') { 
        document.getElementById('a3').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        document.getElementById('b3').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        document.getElementById('c3').innerHTML = `<img src="img/X-win.gif" alt="X-gano"  class="fichasTablero" />`;
        ganador();
        setTimeout(sumaPuntosX,4000);
    }
    else if ( ca3 == 'O' && cb3 == 'O' && cc3 == 'O') { 
        document.getElementById('a3').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        document.getElementById('b3').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        document.getElementById('c3').innerHTML = `<img src="img/O-win.gif" alt="O-gano"  class="fichasTablero" />`;
        ganador();
        setTimeout(sumaPuntosO,4000);
    } else  {
        if ( click == 9) {
        empate(); // Sonido si hay empate
        setTimeout(borrarTablero,4000);
        }
    }
}
// suma los puntos del jugador X y los muestra en el tablero
function sumaPuntosX() {
    puntossX++;
    puntosX.innerHTML = puntossX;
    borrarTablero()
}
// suma los puntos del jugador O y los muestra en el tablero
function sumaPuntosO() {
    puntossO++;
    puntosO.innerHTML = puntossO;
    borrarTablero();    
    }

function borrarTablero() {
    ca1='a'; cb1='a';  cc1='a';
    ca2='a'; cb2='a';  cc2='a';
    ca3='a'; cb3='a';  cc3='a';
    document.getElementById('a1').innerHTML = ' ';
    document.getElementById('a2').innerHTML = ' ';
    document.getElementById('a3').innerHTML = ' ';
    
    document.getElementById('b1').innerHTML = ' ';
    document.getElementById('b2').innerHTML = ' ';
    document.getElementById('b3').innerHTML = ' ';
    
    document.getElementById('c1').innerHTML = ' ';
    document.getElementById('c2').innerHTML = ' ';
    document.getElementById('c3').innerHTML = ' ';
    click = 0;
    }

function juegoNuevo(){
        location.href=("index.html");
}

function finalizarJuego() {
        let mostrarCartel = document.querySelector('.finalizarJuego');
        
    if ( puntossX > puntossO) {
        mostrarCartel.style.display="flex";
        document.getElementById('nombreGanador').innerHTML = jugadorX;
        puntosGanador.innerHTML = `${puntossX} Pts`;
    }else {
        mostrarCartel.style.display="flex";
        document.getElementById('nombreGanador').innerHTML = jugadorO;
        puntosGanador.innerHTML = `${puntossO} Pts` ;       
    }
}

function ocultarCartel() {
        let ocultarCartel = document.querySelector('.finalizarJuego');
        ocultarCartel.style.display="none";
            // verifica si hay un nuevo record
            if ( puntossX > puntosRecord ) {
                localStorage.setItem('nombretatetiv3', jugadorX );
                localStorage.setItem('puntostatetiv3', puntossX);
                nuevoRecord(jugadorX,puntossX)           
            }else if ( puntossO > puntosRecord ) {
                localStorage.setItem('nombretatetiv3', jugadorO);
                localStorage.setItem('puntostatetiv3', puntossO);
                nuevoRecord(jugadorO,puntossO)
            } else {
        juegoNuevo(); }
}

function nuevoRecord(nombre,puntos) {
    record()
    let mostrarCartel = document.querySelector('.contenedorRecord');
        mostrarCartel.style.display="flex"
        document.getElementById('nombre').innerHTML = nombre;
        document.getElementById('puntos').innerHTML = puntos + ' Pts';
}
function ocultarNuevoRecord() {
    let mostrarCartel = document.querySelector('.contenedorRecord');
        mostrarCartel.style.display="none";
        juegoNuevo();
}
    