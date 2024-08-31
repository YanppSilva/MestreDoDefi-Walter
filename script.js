// FAQ Toggle
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.querySelector("h4").addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// Formulário de Contato
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // Captura os dados do formulário
  const formData = new FormData(contactForm);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };
  // Aqui você pode enviar os dados para o servidor usando fetch ou AJAX
  console.log("Formulário enviado:", data);
  alert("Mensagem enviada com sucesso!");
  contactForm.reset();
});

// Smooth Scroll para botões de CTA
const ctaButtons = document.querySelectorAll(".cta-button");

ctaButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Função para abrir o modal
function openModal(message) {
    var modal = document.getElementById('modal');
    var modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    modal.style.display = 'flex';
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Abrir modal ao clicar no botão de validar
document.getElementById('validate-button').addEventListener('click', function() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var telegram = document.getElementById('telegram').value.trim();

    if (name !== '' && email !== '' && telegram !== '') {
        document.getElementById('signup-link').style.display = 'inline-block';
        openModal('Informações validadas com sucesso! Após o pagamento, entre em contato via WhatsApp ou Email para confirmar seu pagamento.');
    } else {
        openModal('Por favor, preencha todos os campos para liberar o link de inscrição.');
    }
});

// Fechar modal ao clicar no X
document.querySelector('.close').addEventListener('click', closeModal);

// Fechar modal ao clicar fora da área de conteúdo do modal
window.addEventListener('click', function(event) {
    var modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Função para validar o nome
function validateName() {
    const nomeInput = document.querySelector('input[name="name"]');
    const spanNome = document.querySelector('.span-required.nome');

    if (nomeInput.value.trim() !== "" && nomeInput.value.length < 3) {
        spanNome.style.display = "block";
        return false;
    } else {
        spanNome.style.display = "none";
        return true;
    }
}

// Função para validar o email
function validateEmail() {
    const emailInput = document.querySelector('input[name="email"]');
    const spanEmail = document.querySelector('.span-required.email');
    const emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    if (emailInput.value.trim() !== "" && !emailPattern.test(emailInput.value)) {
        spanEmail.style.display = "block";
        return false;
    } else {
        spanEmail.style.display = "none";
        return true;
    }
}

// Função para validar o usuário do Telegram
function validateTelegram() {
    const telegramInput = document.querySelector('input[name="telegram"]');
    const spanTelegram = document.querySelector('.span-required.telegram');

    if (telegramInput.value.trim() !== "" && telegramInput.value.length < 3) {
        spanTelegram.style.display = "block";
        return false;
    } else {
        spanTelegram.style.display = "none";
        return true;
    }
}

// Adiciona evento 'focusout' para validar o campo apenas ao sair dele e se houver conteúdo
document.getElementById('name').addEventListener('focusout', validateName);
document.getElementById('email').addEventListener('focusout', validateEmail);
document.getElementById('telegram').addEventListener('focusout', validateTelegram);

// Evento de envio do formulário
document.getElementById('validate-button').addEventListener("click", function() {
    const nameValid = validateName();
    const emailValid = validateEmail();
    const telegramValid = validateTelegram();

    if (nameValid && emailValid && telegramValid) {
        openModal('Informações validadas com sucesso! Após o pagamento, entre em contato via WhatsApp ou Email para confirmar seu pagamento.');
        document.getElementById('signup-link').style.display = 'inline-block';
        document.getElementById('signup-link').addEventListener('click', function() {
            document.getElementById('signup-form').submit();
        });
    } else {
        openModal('Por favor, preencha todos os campos corretamente para liberar o link de inscrição.');
    }
});
