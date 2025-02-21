document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const parent = question.closest('.faq-item');
        const toggle = parent.querySelector('.faq-toggle');
        parent.classList.toggle('active');
        toggle.textContent = parent.classList.contains('active') ? 'x' : '+';
    });
});