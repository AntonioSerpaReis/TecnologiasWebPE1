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

animacaoEntrada();