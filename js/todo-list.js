const botaoAdicionar = document.querySelector(".btn.btn-success");
const tarefas = document.querySelector("#tarefas");

botaoAdicionar.addEventListener("click", adicionarLinha);

function adicionarLinha() {

    const novaRow = document.createElement('div');
    novaRow.className = 'row mt-1';
    novaRow.innerHTML =  `
            <div class="col d-flex">
                <div class="input-group mb-1">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                    <input type="checkbox" aria-label="Checkbox for following text input">
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox">
                <button type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button>
                </div>
            </div>`;

    tarefas.appendChild(novaRow)

    const novoCheckbox = novaRow.querySelector('input[type="checkbox"]');
    const novoInputText = novaRow.querySelector('input[type="text"]');
    const novoButton = novaRow.querySelector('button');
    console.log('Elementos novos:', { novoCheckbox, novoInputText, novoButton });

    function handlerCheck(event) {
        novoInputText.disabled = event.target.checked
    }

    function handlerDelete() {
        novaRow.remove()
    }

    novoCheckbox.addEventListener('change', handlerCheck);
    novoButton.addEventListener('click', handlerDelete);
}
