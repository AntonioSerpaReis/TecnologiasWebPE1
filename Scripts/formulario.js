const form = document.getElementById("form-caca");

// Valida e processa o envio do formulário de newsletter
function formulario(evento) { 
    evento.preventDefault(); // Impede a página de recarregar ao submeter

    // Captura os valores inseridos pelo utilizador
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const interesse = document.getElementById("interesse").value;
    const msgSucesso = document.getElementById("mensagem-sucesso");

    let temErros = false;

    // Validação dos campos obrigatórios
    if (nome === "") {
        document.getElementById("erro-nome").style.display = "block";
        temErros = true;
    } else {
        document.getElementById("erro-nome").style.display = "none";
    }

    if (email.includes("@") === false || email.includes(".") === false) {
        document.getElementById("erro-email").style.display = "block";
        temErros = true;
    } else {
        document.getElementById("erro-email").style.display = "none";
    }

    if (interesse === "") {
        document.getElementById("erro-interesse").style.display = "block";
        temErros = true;
    } else {
        document.getElementById("erro-interesse").style.display = "none";
    }

    // Feedback ao utilizador consoante o resultado da validação
    if (temErros === false) {
        msgSucesso.style.display = "block";
        form.reset(); // Limpa os campos após sucesso
        
        setTimeout(() => {
            msgSucesso.style.display = "none";
        }, 4000);
    } else {
        msgSucesso.style.display = "none";
    }
}

form.addEventListener("submit", formulario);