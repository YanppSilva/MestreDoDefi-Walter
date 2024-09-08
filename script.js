const scrollTopButton = document.getElementById('scrollTopButton');

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    scrollTopButton.classList.add('show');
  } else {
    scrollTopButton.classList.remove('show');
  }
});

scrollTopButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  item.querySelector('h4').addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.getElementById('whatsapp-button');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.querySelector('.close');
    
    // Função para abrir o modal
    function openModal() {
      modal.style.display = 'block';
    }
  
    // Função para fechar o modal
    closeModalBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      // Após fechar o modal, redirecionar para o WhatsApp
      window.location.href = 'https://wa.me/5585989197100', '_blank';
    });
  
    // Abrir modal ao clicar no botão
    whatsappButton.addEventListener('click', function() {
      openModal();
    });
  
    // Fechar modal ao clicar fora do conteúdo
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
        // Redirecionar para o WhatsApp se o modal for fechado
        window.location.href = 'https://wa.me/5585989197100', '_blank';
      }
    });
  });
  