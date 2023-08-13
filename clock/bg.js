const body = document.querySelector("body");
const numberOfImages = 7;

function handleImgLoad() {
    console.log("finished");
}

function paintImage(num) {
    const image = new Image();
    image.src = `img/${num + 1}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * numberOfImages);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber)
}

init();