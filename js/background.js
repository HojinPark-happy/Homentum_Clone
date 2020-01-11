const body = document.querySelector("body");

const IMAGE_NUMBER = 18;

function paintImage(ImageNumber) {
    const image = new Image();
    image.src = `images/${ImageNumber}.jpg`
    
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom() {
    return Math.ceil(Math.random() * IMAGE_NUMBER);    
}

function init() {
    const randomNumber = genRandom()
    paintImage(randomNumber);
}

init(); 