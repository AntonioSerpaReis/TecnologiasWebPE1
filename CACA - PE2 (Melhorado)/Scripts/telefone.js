document.addEventListener("DOMContentLoaded", function() {
    
    const input = document.querySelector("#telefone");
    
    // Inicializa a biblioteca
    const iti = window.intlTelInput(input, {
        initialCountry: "pt", 
        preferredCountries: ["pt", "br", "ao", "mz"], // Países no topo (opcional)
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/utils.js",
    });

    });