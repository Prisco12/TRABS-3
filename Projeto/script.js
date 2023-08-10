// Seleciona o elemento pai ou um elemento estático que já existia
const elementoPai = document.getElementById('teste'); // Use o elemento pai correto aqui
elementoPai.draggable = false
elementoPai.addEventListener('mousedown', (event) => {
    const alvo = event.target;
    
    if (alvo.classList.contains('quadrado')) {
        
        let arrastando = true;
        let offsetx = event.clientX - alvo.getBoundingClientRect().left;
        let offsety = event.clientY - alvo.getBoundingClientRect().top;

        window.addEventListener('mousemove', move);
        
        window.addEventListener('mouseup', () => {
            arrastando = false;
            window.removeEventListener('mousemove', move);

        });

        function move(e) {
            if (arrastando) {
                const x = e.clientX - offsetx;
                const y = e.clientY - offsety;
                alvo.style.left = x + 'px';
                alvo.style.top = y + 'px';
            }
        }
    }
});

// Função para editar o tamanho da imagem
function editarTamanho(imagem) {
    const divEdicao = document.getElementById('formularioEdicao');
    const inputNovaLargura = document.getElementById('novaLargura');
    const inputNovaAltura = document.getElementById('novaAltura');
    const botaoAplicarEdicao = document.getElementById('aplicarEdicao');
    
    // Define a ação do botão Aplicar
    botaoAplicarEdicao.addEventListener('click', () => {
        const novaLargura = inputNovaLargura.value;
        const novaAltura = inputNovaAltura.value;
        
        if (novaLargura && novaAltura) {
            imagem.style.width = novaLargura + 'px';
            imagem.style.height = novaAltura + 'px';
        }
        
        // Esconde a div de edição
        divEdicao.style.display = 'none';
    });
    
    // Mostra a div de edição
    divEdicao.style.display = 'block';
}

// Seleciona o elemento pai que contém as imagens (delegação de eventos)
const container = document.getElementById('teste');

// Adiciona um evento de clique ao elemento pai (delegação de eventos)
container.addEventListener('click', event => {
    const alvo = event.target;

    // Verifica se o elemento clicado possui a classe "quadrado"
    if (alvo.classList.contains('quadrado')) {
        editarTamanho(alvo);
    }
});
