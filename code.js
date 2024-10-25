function encrementar(event) {
    const numero = event.target.id;
    let valor = parseInt(numero.replace("botao", " "), 10);
    if(calculo_mostra == "0") {
        calculo_mostra = valor.toString();
        calculo_mostra.toString();
    } else {
        calculo_mostra += valor.toString();
        calculo_mostra.toString();
    }
    mostrar()
}

function on() {     
    let tela = document.getElementById('tela');  
    let currentColor = window.getComputedStyle(tela).backgroundColor;

    if (currentColor === 'rgb(20, 87, 20)') { 
        tela.style.backgroundColor = '#1ead1e';
        mostrar();
    } else {
        tela.style.backgroundColor = '#145714';
        apagar()
    } 
}  

var calculo_mostra = "0";
var calculo = 0;

function mostrar() {
    let tela = document.getElementById('tela')
    if(tela.style.backgroundColor == '#1ead1e') {
        if(tela.children.length != 1) {
            let c = document.createElement('h4');
            c.innerHTML = calculo_mostra;
            c.id = 'm';
            tela.appendChild(c);
        }
    }
}

function apagar() {
    let tela = document.getElementById('tela');
    let x = document.getElementById('m')
    tela.removeChild(x)
}