const contactForm = document.querySelector('[data-contact-form]');

if (contactForm) {
	contactForm.addEventListener('submit', (event) => {
		event.preventDefault();
		const feedback = contactForm.querySelector('.form-feedback');
		feedback.textContent = 'Mensagem recebida. Em breve falaremos com você.';
		contactForm.reset();
	});
}