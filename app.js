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
let tablero = document.querySelector('.tablero');
    tablero.addEventListener('click', (e) => {
    let objetoSelect = e.target.parentElement;
    
    let btn = e.target.classList.contains('cuadro');
    
    if (btn) {
        if ( turno ){            
            let id = objetoSelect.querySelector('.cuadro').dataset.cua1;
            
            document.getElementById(id).innerHTML = `<img src="img/x.png" alt="X"  class="fichasTablero"/>`;
            document.getElementById('flecha').src='img/flechad.png'
            turno = false;
            marcaJugada(id);
        }else {            
            let id = objetoSelect.querySelector('.cuadro').dataset.cua1;
            
            document.getElementById(id).innerHTML = `<img src="img/o.png" alt="O"  class="fichasTablero" />`;
            document.getElementById('flecha').src='img/flechai.png'
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
    audio.src = "ohoh.mp3";
    audio.play();
}

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

function verificaJugada() {
    // fila A.
    if ( ca1 == 'X' && ca2 == 'X' && ca3 == 'X') { sumaPuntosX()};
    if ( ca1 == 'O' && ca2 == 'O' && ca3 == 'O') { sumaPuntosO()};
    // fila B.
    if ( cb1 == 'X' && cb2 == 'X' && cb3 == 'X') { sumaPuntosX()};
    if ( cb1 == 'O' && cb2 == 'O' && cb3 == 'O') { sumaPuntosO()};
    // fila C.
    if ( cc1 == 'X' && cc2 == 'X' && cc3 == 'X') { sumaPuntosX()};
    if ( cc1 == 'O' && cc2 == 'O' && cc3 == 'O') { sumaPuntosO()};
    // diagonal izquierda.
    if ( ca1 == 'X' && cb2 == 'X' && cc3 == 'X') { sumaPuntosX()};
    if ( ca1 == 'O' && cb2 == 'O' && cc3 == 'O') { sumaPuntosO()};
    // DIAGONAL DERECHA.
    if ( ca3 == 'X' && cb2 == 'X' && cc1 == 'X') { sumaPuntosX()};
    if ( ca3 == 'O' && cb2 == 'O' && cc1 == 'O') { sumaPuntosO()};
    // columna 1.
    if ( ca1 == 'X' && cb1 == 'X' && cc1 == 'X') { sumaPuntosX()};
    if ( ca1 == 'O' && cb1 == 'O' && cc1 == 'O') { sumaPuntosO()};
    // columna 2.
    if ( ca2 == 'X' && cb2 == 'X' && cc2 == 'X') { sumaPuntosX()};
    if ( ca2 == 'O' && cb2 == 'O' && cc2 == 'O') { sumaPuntosO()};
    // columna 3.
    if ( ca3 == 'X' && cb3 == 'X' && cc3 == 'X') { sumaPuntosX()};
    if ( ca3 == 'O' && cb3 == 'O' && cc3 == 'O') { sumaPuntosO()};
}

function sumaPuntosX() {
    puntossX++;
    puntosX.innerHTML = puntossX;
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

}
function sumaPuntosO() {
    puntossO++;
    puntosO.innerHTML = puntossO;
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
    console.log(puntossO)
    }