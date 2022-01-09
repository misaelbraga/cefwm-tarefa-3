console.log('Cronometro ;)');

const botaoStart = document.querySelector('.btn.btn-success');
const botaoPause = document.querySelector('.btn.btn-warning');
const botaoStop = document.querySelector('.btn.btn-danger');

botaoStart.addEventListener('click', () => computa('inicia'));
botaoPause.addEventListener('click', () => computa('pausa'));
botaoStop.addEventListener('click', () => computa('reinicia'));

const output = document.querySelector('output');

let contagem = 0;
let estado = 'parado';
let timer;


// Estados:
// - Parado
// - Rodando (incrementando) [a cada 100ms, contagem = contagem + 0.1]

// Transições: eventos:
// Parado -> Rodando: inicia
// Rodando -> Parado: pausa
// Rodando -> Parado: reinicia [contagem = 0]
// Parado -> Parado: reinicia [contagem = 0]

// Maquina de estados

function computa(acao) {

    switch (estado) {
        case 'parado':
            if (acao === 'inicia') {
                estado = 'rodando';
                timer = setInterval(() => computa('tick'), 100);
            }
            if (acao === 'reinicia') {
                estado = 'parado';
                contagem = 0;
                clearInterval(timer);
            } 
            break;
        case 'rodando':
            contagem += 0.1;
            if (acao === 'pausa') {
                estado = 'parado';
                clearInterval(timer);
            } 
            if (acao === 'reinicia') {
                estado = 'parado';
                contagem = 0;
                clearInterval(timer);
            } 
            break;
    }
    output.innerHTML = `${contagem.toFixed(1).replace('.',',')} s`;
}
