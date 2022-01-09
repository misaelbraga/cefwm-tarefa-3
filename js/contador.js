output = document.querySelector('output');
btnMinus = document.querySelector('.btn-danger');
btnPlus = document.querySelector('.btn-success');

console.log({btnMinus, btnPlus});
console.log({output});

btnMinus.addEventListener('click', () => soma(-1));
btnPlus.addEventListener('click', () => soma(+1));

/**
 * 
 * Computa a contagem atual, e então atualiza o elemento `<output>` 
 * 
 * @param {number} valor Valor a ser acrescido da contagem atual; pode
 * ser nagativo.
 */

function soma(valor) {
    const valorAtual = +output.innerHTML + valor
    output.innerHTML = valorAtual;

    if (valorAtual > 0) {
        output.classList.add('text-success');
    } else if (valorAtual < 0) {
        output.classList.add('text-danger');
    } else{
        output.classList.remove('text-success');
        output.classList.remove('text-danger');
    }
}