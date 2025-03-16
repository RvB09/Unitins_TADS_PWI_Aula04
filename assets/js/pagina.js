// Função para carregar e exibir os dados do LocalStorage
function carregarDados() {
    const dadosSalvos = localStorage.getItem('dadosFormulario');
    if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);
        const tabela = document.getElementById('tabela-dados').getElementsByTagName('tbody')[0];

        // Limpa a tabela antes de adicionar novos dados
        tabela.innerHTML = '';

        // Cria uma nova linha na tabela com os dados
        const novaLinha = tabela.insertRow();
        novaLinha.insertCell().textContent = dados.nome;
        novaLinha.insertCell().textContent = dados.email;
        novaLinha.insertCell().textContent = dados.telefone;
        novaLinha.insertCell().textContent = dados.endereco;
    } else {
        alert('Nenhum dado salvo no LocalStorage.');
    }
}

// Carrega os dados ao abrir a página
window.onload = carregarDados;