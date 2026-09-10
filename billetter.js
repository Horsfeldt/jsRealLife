console.log("JS virker");
// DOM-elementer (ikke-primitive datatyper: objekter)
const menuButton = document.querySelector(".menu-button");


// Primitive datatyper
let isMenuOpen = false;   // boolean
let ticketClicks = 0;     // number


// ARRAY med menu-valg (ikke-primitive datatype)
const menuItems = [
    "Billetter",
    "Årskort",
    "Odense Zoo fordele",
    "Oversigtskort",
    "Aktiviteter",
    "Kontakt",
    "Åbningstider",
    "Besøg Zoo"
];

// FUNKTION til at åbne/lukke dropdown
function toggleDropdown() {

    // Tjek om dropdown allerede findes
    let dropdown = document.getElementById("jsDropdown");

    // LOGIC + KONTROLSTRUKTUR
    if (!dropdown) {

     
        // Opret dropdown (DOM + objekt)
        dropdown = document.createElement("div");
        dropdown.id = "jsDropdown";

        // Inline styling via JS (simpelt)
        dropdown.style.position = "absolute";
        dropdown.style.top = "60px";
        dropdown.style.left = "20px";
        dropdown.style.background = "#007836";
        dropdown.style.border = "3px solid #002E24";
        dropdown.style.borderRadius = "8px";
        dropdown.style.padding = "10px";
        dropdown.style.boxShadow = "0 2px 10px #00543D";
        dropdown.style.zIndex = "9999";
        dropdown.style.lineHeight = "2.5";
        dropdown.style.color= "#E3EDCF";
        dropdown.style.height= "70%";
        dropdown.style.fontSize="18px"
       
        
        // LOOP der bygger dropdownen
        for (let i = 0; i < menuItems.length; i++) {
            const item = document.createElement("p");
            item.textContent = menuItems[i];
            item.style.margin = "5px 0";
            item.style.cursor = "pointer";

            // EVENT på hvert punkt
            item.addEventListener("click", function () {
                alert("Du har valgt: " + menuItems[i]);
            });

            dropdown.appendChild(item);
        }

        // Tilføj dropdown til siden
        document.body.appendChild(dropdown);

        isMenuOpen = true; // assignment operator

    } else {
        // Fjern dropdown
        dropdown.remove();
        isMenuOpen = false;
    }
}

// EVENT på menu-knappen
menuButton.addEventListener("click", toggleDropdown);


// Funktion til køb billet-knappen
function handleTicketClick() {

    ticketClicks++; // arithmetic operator

    // ARRAY + OBJEKT 
    const ticketInfo = {
        adultPrice: 150,
        childPrice: 95,
        message: "Tak fordi du vil købe billet!"
    };


}
// Header "Køb billet"-knap
const headerBuyTicket = document.getElementById("headerBuyTicket");

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

//zoomable image
const zoomArea = document.getElementById("zoomImage");
 const zoomImage = document.getElementById("zoomImage");

 let scale = 1;
 let zoomEnabled = false;
 const zoomStep = 0.1;
 const minScale = 1;
 const maxScale = 5;

 zoomImage.addEventListener("click", () => {
     zoomImage.style.cursor = "grab";
zoomEnabled = true;
});


document.addEventListener("click", (e) => {
if (e.target !== zoomImage) {
    zoomImage.style.cursor = "default";
zoomEnabled = false;}
});

 zoomArea.addEventListener("wheel", function (e) {
    if(!zoomEnabled) return;
 e.preventDefault();

 if (e.deltaY < 0) {
 scale += zoomStep;
 } else {
 scale -= zoomStep;
 }

 scale = Math.max(minScale, Math.min(maxScale, scale));

 zoomImage.style.transformOrigin = `${e.offsetX}px ${e.offsetY}px`;
 zoomImage.style.transform = `scale(${scale})`;


 });
