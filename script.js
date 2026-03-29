// Daten für die Slides (Du kannst die Texte hier anpassen!)
const slides =[
    { 
        top: "Pookie, erinnerst du dich an unseren ersten Moment?", 
        img: "images/img1.jpg", 
        bottom: "Hier fing alles an..." 
    },
    { 
        top: "Dieses Lächeln von dir...", 
        img: "images/img2.jpg", 
        bottom: "Ich liebe es mehr als alles andere." 
    },
    { 
        top: "Egal was passiert ist,", 
        img: "images/img3.jpg", 
        bottom: "Du bist meine Nummer eins." 
    },
    { 
        top: "Ich möchte noch so viele Momente mit dir sammeln.", 
        img: "images/img4.jpg", 
        bottom: "Du machst mich zum glücklichsten Menschen." 
    },
    { 
        top: "Können wir bitte wieder so strahlen wie hier?", 
        img: "images/img5.jpg", 
        bottom: "Ich verspreche dir, ich werde an mir arbeiten." 
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
