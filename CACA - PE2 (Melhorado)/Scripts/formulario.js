const form = document.getElementById("form-caca");

function formulario(evento) { 
    evento.preventDefault(); 

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim(); // NOVO
    const interesse = document.getElementById("interesse").value;
    const msgSucesso = document.getElementById("mensagem-sucesso");

    let temErros = false;

    // Valida Nome
    if (nome === "") {
        document.getElementById("erro-nome").style.display = "block";
        temErros = true;
    } else {
        document.getElementById("erro-nome").style.display = "none";
    }

    // NOVA Validação de Email com Expressões Regulares (Regex)
    // Este "código estranho" é a regra de ouro para emails
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Em vez de usarmos o includes, usamos o .test() para ver se o email passa na regra
    if (regexEmail.test(email) === false) {
        document.getElementById("erro-email").style.display = "block";
        temErros = true;
    } else {
        document.getElementById("erro-email").style.display = "none";
    }

    // ... código a seguir do telefone ...

    // NOVO: Valida Telemóvel
    // Remove os espaços em branco para contar apenas os números
    const telefoneLimpo = telefone.replace(/\s/g, ''); 
    
    // Verifica se está vazio, se contém letras (isNaN) ou se tem menos de 9 números
    if (telefoneLimpo === "" || isNaN(telefoneLimpo) || telefoneLimpo.length < 9) {
        document.getElementById("erro-telefone").style.display = "block";
        temErros = true;
    } else {
        document.getElementById("erro-telefone").style.display = "none";
    }

    // Valida Interesse
    if (interesse === "") {
        document.getElementById("erro-interesse").style.display = "block";
        temErros = true;
    } else {
        document.getElementById("erro-interesse").style.display = "none";
    }

    // Feedback final
    if (temErros === false) {
        msgSucesso.style.display = "block";
        form.reset(); 
        
        setTimeout(function() {
            msgSucesso.style.display = "none";
        }, 4000);
    } else {
        msgSucesso.style.display = "none";
    }
}

form.addEventListener("submit", formulario);