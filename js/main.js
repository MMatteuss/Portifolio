document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário normal.

    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Substitua pelo número do WhatsApp com DDI e DDD, exemplo: 55 + código da cidade + número.
    const phoneNumber = '558281094788'; 

    const fullMessage = `Nome: ${name}%0AAssunto: ${subject}%0AMensagem: ${message}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${fullMessage}`;

    window.open(whatsappURL, '_blank');
});

document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('load-more-projects');
    const additionalProjects = document.querySelector('.additional-projects');
    
    loadMoreBtn.addEventListener('click', function() {
        if (additionalProjects.style.display === 'none' || additionalProjects.style.display === '') {
            additionalProjects.style.display = 'grid'; // ou 'flex' dependendo do seu layout
            loadMoreBtn.textContent = 'Mostrar menos';
        } else {
            additionalProjects.style.display = 'none';
            loadMoreBtn.textContent = 'Ver mais projetos';
        }
    });
});