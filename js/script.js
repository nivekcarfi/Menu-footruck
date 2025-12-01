document.addEventListener('DOMContentLoaded', () => {
    // Selecciona tots els botons que activen els detalls
    const detailButtons = document.querySelectorAll('.details-button');

    // Afegeix un esdeveniment 'click' a cada botó
    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Troba la targeta (combo-card) que conté el botó
            const card = button.closest('.combo-card');
            
            // Alterna la classe 'open' a la targeta
            card.classList.toggle('open');

            // Canvia el text del botó
            if (card.classList.contains('open')) {
                button.textContent = 'OCULTAR DETALLS';
            } else {
                button.textContent = 'VEURE DETALLS';
            }
        });
    });
});
