document.addEventListener('DOMContentLoaded', (event) => {
    const card = document.getElementsByClassName('card-services');

    for (let i = 0; i < card.length; i++) {
        const currentCard = card[i];

        currentCard.addEventListener('mouseover', function() {
            currentCard.classList.add('no-animation-hover');

        }, {once: true});

    }

});