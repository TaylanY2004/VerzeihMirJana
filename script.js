// Daten für die Slides (Du kannst die Texte hier anpassen!)
const slides = [
    { 
        top: "Hallo Pookie bitte hör mir zu und les alles durch.", 
        img: "images/img1.jpeg", // <--- HIER GEÄNDERT
        bottom: "Erinnerst du dich an diese Bild von unserem ersten Date? Ich weiß noch ganz genau wie nervös ich war weil sich die schönste und lustiggste Frau der Welt entschiedn hat mit mir auf ein Date zu gehen" 
    },
    { 
        top: "Dieses lächeln bringt mich noch heute jedes mal zum schmmelzen und ich will NIE der Grund dafür sein dass du aufhörst zu lächeln", 
        img: "images/img2.jpeg", // <--- HIER GEÄNDERT
        bottom: "αστέρι μου" 
    },
    { 
        top: "In jedem Universum und in jedem Leben...", 
        img: "images/img3.jpeg", // <--- HIER GEÄNDERT
        bottom: "Würde ich mich immer wieder für dich entscheiden." 
    },
    { 
        top: "Ja, manchmal sage oder mache ich dumme Sachen die dich traurig machen wie zB heute...", 
        img: "images/img4.jpeg", // <--- HIER GEÄNDERT
        bottom: "aber ICH VERSPRECHE DIR ICH GEBE MEIN BESTES JEDEN MOMENT MIT DIR ZU GENIEßen, FÜR DICH IMMER DA ZUSEIN UND DICH ZU LIEBEN ❤️" 
    },
    { 
        top: "BITTE VERZEIH DEINEM VOLLIDIOT TOLLPATSCH FREUND", 
        img: "images/img5.jpeg", // <--- HIER GEÄNDERT
        bottom: "Ich war die letzten tag einfach unruhig weil es dir nicht gut ging und ich dachte das ich der Grund dafür bin, weshalb ich verunsichert war. Dabei hab ich hinterfragt ob du mit mir unzufrienden warst und aus dem Grund hab ich dann so ein Müll geredet ohne nachzudenken. TUT MIR ECHT LEID  " 
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
