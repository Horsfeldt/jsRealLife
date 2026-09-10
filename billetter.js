<<<<<<< HEAD
let ticketTypes = [
	{
		name: "Voksen",
		price: 150
	},
	{
		name: "Barn",
		price: 100
	}
];
for (let i = 0; i < ticketTypes.length; i++) {
    console.log(ticketTypes[i].name + ": " + ticketTypes[i].price + " DKK");
}
let annualTypes = [
    {
        name: "Voksen",
        price: 395
    },
    {
        name: "Barn",
        price: 295
    },
    {
        name: "Studerende",
        price: 213
    }
];
let annualType = document.getElementById("annual-type");
let annualQuantity = document.getElementById("annual-quantity");

annualType.addEventListener("change", function() {

    let type = annualType.value;
    let quantity = Number(annualQuantity.value);

    let totalPrice = calculateAnnualPrice(type, quantity);

    let annualPriceElement = document.getElementById("annual-price");

    annualPriceElement.textContent = "Samlet pris: " + totalPrice + " DKK";
});
annualQuantity.addEventListener("change", function() {

    let type = annualType.value;
    let quantity = Number(annualQuantity.value);

    let totalPrice = calculateAnnualPrice(type, quantity);

    let annualPriceElement = document.getElementById("annual-price");

    annualPriceElement.textContent = "Samlet pris: " + totalPrice + " DKK";
});

console.log(annualType.value);
console.log(annualQuantity.value);
function calculateAnnualPrice(type, quantity) {

    let price = 0;

    if (type === "adult") {
        price = annualTypes[0].price;
    } else if (type === "child") {
        price = annualTypes[1].price;
    } else if (type === "student") {
        price = annualTypes[2].price;
    }

    let totalPrice = price * quantity;

    return totalPrice;
}

let adultTickets = document.getElementById("adult-tickets");
let childTickets = document.getElementById("child-tickets");

console.log(adultTickets.value);
console.log(childTickets.value);

function calculateTicketPrice(adults, children) {
	let adultPrice = ticketTypes[0].price;
	let childPrice = ticketTypes[1].price;

	let totalPrice = (adults * adultPrice) + (children * childPrice);

	return totalPrice;
}

let buyTicketButton = document.getElementById("buyTicketButton");
let buyAnnualButton = document.getElementById("buyAnnualButton");

buyAnnualButton.addEventListener("click", function() {

    let type = annualType.value;
    let quantity = Number(annualQuantity.value);

    let totalPrice = calculateAnnualPrice(type, quantity);

    let annualPriceElement = document.getElementById("annual-price");

    annualPriceElement.textContent = "Samlet pris: " + totalPrice + " DKK";

    console.log(totalPrice);
});

buyTicketButton.addEventListener("click", function() {

    let adults = Number(adultTickets.value);
    let children = Number(childTickets.value);

    let totalPriceElement = document.getElementById("total-price");
    let hasTickets = adults > 0 || children > 0;

    if (!hasTickets) {

        totalPriceElement.textContent = "Vælg mindst én billet";

    } else {

        let totalPrice = calculateTicketPrice(adults, children);

        totalPriceElement.textContent = "Samlet pris: " + totalPrice + " DKK";

        if (totalPrice >= 500) {
            totalPriceElement.textContent += " - Du har købt mange billetter!";
        }

        console.log(totalPrice);
    }
=======
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
>>>>>>> parent of a6f9c19 (Merge pull request #3 from Horsfeldt/Rawan)
});
