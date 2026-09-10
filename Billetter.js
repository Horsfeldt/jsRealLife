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
});
