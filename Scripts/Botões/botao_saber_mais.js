const btnSaberMais = document.getElementById("btn-saber-mais");
const textoOculto = document.getElementById("texto-oculto");

// Alterna a visibilidade do parágrafo extra na Hero Section
function saberMais() {
    if (textoOculto.style.display === "none" || textoOculto.style.display === "") {
        textoOculto.style.display = "block";   
        btnSaberMais.innerText = "Ler Menos";  
    } else {
        textoOculto.style.display = "none";    
        btnSaberMais.innerText = "Saber Mais"; 
    }
}

btnSaberMais.addEventListener("click", saberMais);