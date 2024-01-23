// Select all cards in the   navigate
let cards = document.querySelectorAll('.navigate .card');
let active = 0;

// Function to set initial styles for the   navigate cards
function loadShow() {
    cards.forEach((card, index) => {
        card.style.transform = `none`;
        card.style.zIndex = 1;
        card.style.filter = 'none';
        card.style.opacity = 0;
    });
    cards[active].style.opacity = 1;
    if (cards.length > 1) {
        let prevIndex = (active - 1 + cards.length) % cards.length;
        let nextIndex = (active + 1) % cards.length;
        cards[prevIndex].style.transform = `translateX(${-280}px) scale(${0.8}) `;
        cards[prevIndex].style.zIndex = -1;
        cards[prevIndex].style.opacity = 0.8;
        cards[nextIndex].style.transform = `translateX(${280}px) scale(${0.8}) `;
        cards[nextIndex].style.zIndex = -1;
        cards[nextIndex].style.opacity = 0.8;
    }
}

// Create buttons for each navigate card
let   navigateButtonsContainer = document.querySelector('.navigate-buttons');
for (let i = 0; i < cards.length; i++) {
    let button = document.createElement('button');
    button.innerHTML = "_";
    button.onclick = function () {
        active = i;
        loadShow();
        updateButtonStyles();
    };
      navigateButtonsContainer.appendChild(button);
}

// Function to update styles for navigate buttons
function updateButtonStyles() {
    let buttons = document.querySelectorAll('.navigate-buttons button');
    buttons.forEach((button, index) => {
        button.style.width = "10px";
        button.style.height = "20px";
        button.style.marginRight = "20px";
        button.style.border = "none";
        button.style.backgroundColor = "transparent";
        button.style.opacity = index === active ? 0.8 : 0.2;
        button.style.transition = "opacity 0.5s";
        button.style.color = "grey";
        button.style.fontFamily = "monospace";
        button.style.fontSize = "40px";
    });
}

// Set initial styles for the navigate
loadShow();

// Function for automatic sliding
function autoSlide() {
    active = (active + 1) % cards.length;
    loadShow();
    updateButtonStyles();
}

// Set interval for automatic sliding
let slideInterval = setInterval(autoSlide, 5000);

// Function to stop automatic sliding
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Event handlers for next and previous buttons
let next = document.getElementById('next');
let prev = document.getElementById('prev');

next.onclick = function () {
    active = (active + 1) % cards.length;
    loadShow();
    updateButtonStyles();
    stopAutoSlide();
};

prev.onclick = function () {
    active = (active - 1 + cards.length) % cards.length;
    loadShow();
    updateButtonStyles();
    stopAutoSlide();
};
