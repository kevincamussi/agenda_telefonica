const tabela = document.getElementById('dados');
const inputNome = document.getElementById('nome');
const inputTelefone = document.getElementById('telefone');
const formulario = document.getElementById('formulario');
const contatos = [];
const telefones = [];
const mensagem = document.getElementById('mensagem');
const mensagemErro = '<p>O contato já está na agenda</p>';

let linhas = '';

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    adcionarLinhas();
    atualizarTabela();
})

function adcionarLinhas() {

    if (contatos.includes(inputNome.value) || telefones.includes(inputTelefone.value)) {
        inputNome.style.borderColor = 'red';
        inputTelefone.style.borderColor = 'red';

        mensagem.innerHTML = mensagemErro;
        mensagem.classList.add('msg-erro');
    } else {
        inputNome.style.borderColor = '';
        inputTelefone.style.borderColor = '';

        mensagem.classList.remove('msg-erro');
        mensagem.innerHTML = '';

        contatos.push(inputNome.value);
        telefones.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`
        linha += '</tr>';
        linhas += linha;
    }
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

