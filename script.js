// Daten für die Slides (Du kannst die Texte hier anpassen!)
const slides = [
    { 
        top: "Pookie, lass uns eine kleine Reise machen...", 
        img: "images/img1.jpeg", // <--- HIER GEÄNDERT
        bottom: "Jedes Bild hält einen Moment fest, in dem wir glücklich waren." 
    },
    { 
        top: "Erinnerst du dich an diesen Tag?", 
        img: "images/img2.jpeg", // <--- HIER GEÄNDERT
        bottom: "Du hast so schön gelächelt." 
    },
    { 
        top: "In jedem Universum...", 
        img: "images/img3.jpeg", // <--- HIER GEÄNDERT
        bottom: "Würde ich mich immer wieder für dich entscheiden." 
    },
    { 
        top: "Du bedeutest mir die Welt!", 
        img: "images/img4.jpeg", // <--- HIER GEÄNDERT
        bottom: "Ich verspreche, mein Bestes zu geben." 
    },
    { 
        top: "Danke für deine Geduld.", 
        img: "images/img5.jpeg", // <--- HIER GEÄNDERT
        bottom: "Ich möchte nie der Grund sein, warum du aufhörst zu strahlen." 
    }
];
let currentIndex = 0;

const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const displayImg = document.getElementById('display-image');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

const mainContainer = document.getElementById('main-container');
const questionScreen = document.getElementById('question-screen');
const thanksScreen = document.getElementById('thanks-screen');
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

function updateSlide(index) {
    topText.innerText = slides[index].top;
    bottomText.innerText = slides[index].bottom;
    displayImg.src = slides[index].img;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlide(currentIndex);
    } else {
        // Nach dem 5. Bild zum Frage-Screen wechseln
        mainContainer.classList.add('hidden');
        questionScreen.classList.remove('hidden');
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlide(currentIndex);
    }
});

// Der "Nein"-Button weicht aus
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// "Ja"-Button Klick
yesBtn.addEventListener('click', () => {
    questionScreen.classList.add('hidden');
    thanksScreen.classList.remove('hidden');
});
