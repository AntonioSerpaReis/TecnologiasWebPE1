const btnTopo = document.getElementById("btn-topo");

// Mostra o botão apenas se o utilizador já tiver feito algum scroll (desceu mais de 300px)
function botaoVoltarAoTopo() {
    if (window.scrollY > 300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
}

window.addEventListener("scroll", botaoVoltarAoTopo);

// Faz o ecrã deslizar suavemente até ao topo
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

btnTopo.addEventListener("click", scrollToTop);