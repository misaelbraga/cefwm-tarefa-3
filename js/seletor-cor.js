console.log('Programa executando...');

let novoConteudo = '<i class=" mr-1 bi bi-eye-fill"></i> Exemplo \\ Outro Exemplo';
let num = 9;

let formulario = document.querySelector('form');

formulario.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
    const input = document.querySelector('input');
    const body = document.querySelector('body');

    body.style.backgroundColor = input.value;
    
    if(body.style.backgroundColor === input.value)
    {
        console.log('Estou fazendo log de', input.value);
    } else {
        console.error("Erro ao alterar a cor");
    }

    event.preventDefault();
    return false;
}

