document.addEventListener("DOMContentLoaded", function() {
    
    const input = document.querySelector("#telefone");
    
    // Inicializa a biblioteca e guarda na janela
    window.iti = window.intlTelInput(input, {
        initialCountry: "pt", 
        preferredCountries: ["pt", "br", "ao", "mz"],
        separateDialCode: true, // É ESTA LINHA QUE CRIA O +351!
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/utils.js",
    });

});