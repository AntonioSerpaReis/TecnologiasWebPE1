const elementosAnimar = document.querySelectorAll(".animar-entrada");

// Função que verifica a posição de cada elemento sempre que fazes scroll
function verificarFadeIn() {
    // Descobre a altura total da janela visível do navegador
    const alturaEcra = window.innerHeight;

    for (let i = 0; i < elementosAnimar.length; i++) {
        var elemento = elementosAnimar[i];
        
        // Calcula a distância do topo deste elemento até ao topo do ecrã
        var posicaoElemento = elemento.getBoundingClientRect().top;

        // Se a posição do elemento for menor que a altura do ecrã 
        if (posicaoElemento < alturaEcra) {
            elemento.classList.add("visivel");
        }
    }
}

window.addEventListener("scroll", verificarFadeIn);