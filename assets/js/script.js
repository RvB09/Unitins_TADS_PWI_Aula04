// Seleciona os elementos do formulário
const formulario = document.getElementById('formulario');
const limparBtn = document.getElementById('limpar');
const salvarBtn = document.getElementById('salvar');

// Função para limpar o formulário
limparBtn.addEventListener('click', () => {
    formulario.reset();
});

// Função para salvar os dados no LocalStorage
salvarBtn.addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;

    const dados = {
        nome,
        email,
        telefone,
        endereco
    };

    // Salva os dados no LocalStorage
    localStorage.setItem('dadosFormulario', JSON.stringify(dados));
    alert('Dados salvos com sucesso!');
});
