(() => {
    var zindex = 10;

    const divCard = Array.from(document.querySelectorAll('.card'));

    divCard.forEach((card) => {
      card.addEventListener('click', (event) => {
        event.preventDefault();

        var isShowing = false;

        if (card.classList.contains('show')) {
          isShowing = true;
        }

        var cards = document.querySelector('.cards');

        if (cards.classList.contains("showing")) {
          // a card is already in view
          document.querySelector('div.card.show').classList.remove('show');

          if (isShowing) {
            // this card was showing - reset the grid
            cards.classList.remove("showing");
          } else {
            // this card isn't showing - get in with it
            card.style.zIndex = zindex;
            card.classList.add('show');
          }
          zindex++;
        } else {
          cards.classList.add('showing');
          card.style.zIndex = zindex;
          card.classList.add('show');

          zindex++;
        }
      });
    })
  })();