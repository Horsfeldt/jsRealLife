//carousel
//Variabler (let/const) og Datatyper
const cards = Array.from(document.querySelectorAll('.card')); // array (ikke-primitive)
let current = 0;                                               // primitive number

//Objekt (ikke-primitive datatype)
const carouselState = {
  total: cards.length,
  highlightColor: "#2e7d32",
  lastClicked: null
};

//Funktion
function updateCarousel() {

  //Loop
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('center', 'left', 'right');
  }

  const center = current;
  const left = (current - 1 + cards.length) % cards.length;   // modulo = kontrolstruktur
  const right = (current + 1) % cards.length;

  //DOM MANIPULATION 
  cards[center].classList.add('center');
  cards[left].classList.add('left');
  cards[right].classList.add('right');
}

//Events
document.querySelector('.next').addEventListener('click', () => {
  current = (current + 1) % cards.length;  // infinite loop
  carouselState.lastClicked = "next";      // assignment operator
  updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
  current = (current - 1 + cards.length) % cards.length;
  carouselState.lastClicked = "prev";
  updateCarousel();
});

//Local Scope
function logPrices() {
  for (let card of cards) {
    let price = Number(card.dataset.price); // primitive number
    if (price > 0) {
      console.log("Pris:", price);
    } else {
      console.log("Gratis eller rabat");
    }
  }
}

//Global Scope
updateCarousel();
logPrices();
