const form = document.getElementById("form-caca");

/**
 * Valida o campo do Nome Completo.
 * Verifica se o campo não está vazio ou preenchido apenas com espaços.
 * Exibe ou oculta a mensagem de erro correspondente no DOM.
 * * @returns {boolean} Retorna 'true' se o nome for válido, ou 'false' se for inválido.
 */
function validarNome() {
    const nome = document.getElementById("nome").value.trim();
    if (nome === "") {
        document.getElementById("erro-nome").style.display = "block";
        return false;
    } else {
        document.getElementById("erro-nome").style.display = "none";
        return true;
    }
}

/**
 * Valida o campo de E-mail.
 * Utiliza uma Expressão Regular (Regex) para garantir que o formato (x@y.z) é respeitado.
 * Exibe ou oculta a mensagem de erro correspondente no DOM.
 * * @returns {boolean} Retorna 'true' se o email for válido, ou 'false' se for inválido.
 */
function validarEmail() {
    const email = document.getElementById("email").value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexEmail.test(email) === false) {
        document.getElementById("erro-email").style.display = "block";
        return false;
    } else {
        document.getElementById("erro-email").style.display = "none";
        return true;
    }
}

/**
 * Valida o número de Telemóvel.
 * Depende da biblioteca global 'intl-tel-input' (window.iti) para verificar 
 * a validade do número consoante o país selecionado.
 * Exibe ou oculta a mensagem de erro correspondente no DOM.
 * * @returns {boolean} Retorna 'true' se o número for válido, ou 'false' se for inválido.
 */
function validarTelefone() {
    if (window.iti && window.iti.isValidNumber() === false) {
        document.getElementById("erro-telefone").style.display = "block";
        return false;
    } else {
        document.getElementById("erro-telefone").style.display = "none";
        return true;
    }
}

/**
 * Valida o menu dropdown do Assunto.
 * Verifica se o utilizador escolheu uma opção válida (diferente da opção vazia padrão).
 * Exibe ou oculta a mensagem de erro correspondente no DOM.
 * * @returns {boolean} Retorna 'true' se o assunto foi escolhido, ou 'false' se for inválido.
 */
function validarAssunto() {
    const assunto = document.getElementById("assunto").value;
    if (assunto === "") {
        document.getElementById("erro-assunto").style.display = "block";
        return false;
    } else {
        document.getElementById("erro-assunto").style.display = "none";
        return true;
    }
}

/**
 * Valida a caixa de texto da Mensagem.
 * Garante que o utilizador não apagou o texto pré-feito e deixou o campo totalmente vazio.
 * Exibe ou oculta a mensagem de erro correspondente no DOM.
 * * @returns {boolean} Retorna 'true' se a mensagem não estiver vazia, ou 'false' se estiver.
 */
function validarMensagem() {
    const mensagem = document.getElementById("mensagem").value.trim();
    if (mensagem === "") {
        document.getElementById("erro-mensagem").style.display = "block";
        return false;
    } else {
        document.getElementById("erro-mensagem").style.display = "none";
        return true;
    }
}



/**
 * Coordena o processo de submissão do formulário de contacto.
 * Interceta o evento de submissão, previne o recarregamento da página,
 * executa todas as validações e apresenta o feedback final ao utilizador.
 * * @param {Event} evento - O evento de submissão do formulário ('submit').
 * @returns {void} Esta função não retorna nenhum valor.
 */
function tratarSubmissao(evento) { 
    evento.preventDefault(); 

    // Executamos TODAS as validações primeiro e guardamos o resultado
    const isNomeValido = validarNome();
    const isEmailValido = validarEmail();
    const isTelefoneValido = validarTelefone();
    const isAssuntoValido = validarAssunto();
    const isMensagemValida = validarMensagem();

    // Se todos forem 'true', então o formulário todo é válido
    const formEstaValido = isNomeValido && isEmailValido && isTelefoneValido && isAssuntoValido && isMensagemValida;

    const msgSucesso = document.getElementById("mensagem-sucesso");

    // Lógica final de sucesso ou falha
    if (formEstaValido) {
        msgSucesso.style.display = "block"; 
        form.reset(); 
        
        setTimeout(function() {
            msgSucesso.style.display = "none";
        }, 5000); 
    } else {
        msgSucesso.style.display = "none"; 
    }
}

// Fica à escuta do clique no botão de Enviar
form.addEventListener("submit", tratarSubmissao);