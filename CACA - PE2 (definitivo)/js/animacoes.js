const tl = gsap.timeline();

// Cria a sequência de animação da Hero Section ao carregar a página
function animacaoEntrada() {
    tl.from(".hero-image", {
        duration: 1.5,
        scale: 1.3,           
        opacity: 0,
        ease: "power2.out"
    })
    .from(".hero-title", { 
        duration: 0.8,
        y: 50,               
        opacity: 0
    }, "-=0.8") // "-=0.8" sobrepõe o tempo para uma entrada mais fluida               
    .from(".hero-content p", {
        duration: 0.8,
        y: 30,                
        opacity: 0
    }, "-=0.8")
    .from("#btn-saber-mais", {
        duration: 0.5,
        scale: 0,             
        opacity: 0
    }, "-=0.3");
}
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
animacaoEntrada();