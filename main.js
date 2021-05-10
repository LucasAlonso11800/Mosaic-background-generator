// GENERATING BACKGROUND

const $background = document.getElementById('background');
const $red = document.getElementById('red');
const $green = document.getElementById('green');
const $blue = document.getElementById('blue');
const $submit = document.getElementById('submit-button');

let colors = [];

$submit.addEventListener('click', (e) => {
    e.preventDefault()
    while ($background.firstChild) {
        $background.removeChild($background.lastChild);
    };
    colors = [];

    for (let i = 0; i < 1000; i++){
        newColors($red.value, $green.value, $blue.value)
    }
    createRectangles()
});

function newColors(r, g, b){
    function componentToHex(c) {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    };

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    };

    if(r === '') r = 0;
    if(g === '') g = 0;
    if(b === '') b = 0;

    let maxRed = parseInt(r) + 20;
    if(maxRed > 255) maxRed = 255;
    let minRed = parseInt(r) - 20;
    if(minRed < 0) minRed = 0;

    let maxGreen = parseInt(g) + 20;
    if(maxGreen > 255) maxGreen = 255;
    let minGreen = parseInt(g) - 20;
    if(minGreen < 0) minGreen = 0;

    let maxBlue = parseInt(b) + 20;
    if(maxBlue > 255) maxBlue = 255;
    let minBlue = parseInt(b) - 20;
    if(minBlue < 0) minBlue = 0;

    let red = Math.floor(Math.random() * (maxRed - minRed) + minRed);
    let green = Math.floor(Math.random() * (maxGreen - minGreen) + minGreen);
    let blue = Math.floor(Math.random() * (maxBlue - minBlue) + minBlue);

    return colors.push(rgbToHex(red, green, blue))
};

class Rectangle {
    constructor(color, left, top) {
        this.color = color;
        this.left = left;
        this.top = top;

        let newRectangle = document.createElement("div")

        const div = newRectangle
        div.classList.add("animated")
        div.style.position = "absolute"
        div.style.zIndex = -10
        div.style.width = 4 + "%";
        div.style.height = 4 + "vh";
        div.style.backgroundColor = this.color;
        div.style.left = this.left + "%"
        div.style.top = this.top + "%"

        $background.appendChild(div)
    }
};

function createRectangles() {
    for (let i = 0; i < 25; i++) {
        for (let j = 0; j < 25; j++){
            setTimeout(() => {
                let randomColor = Math.floor(Math.random() * colors.length);
                let left = j * 4;
                let top = i * 4;
    
                new Rectangle(colors[randomColor], left, top)
            }, i * 100)
        }
    }
};

// SAVING BACKGROUND

const downloadButton = document.getElementById('download-button'); 

function save(canvas) {
    let a = document.createElement('a');
    a.href = canvas.toDataURL();
    a.download = 'MosaicBackground.png';
    a.click()
};

function divToImg(div) {
    html2canvas(div, {scrollY: -window.scrollY}).then(canvas => save(canvas))
};

downloadButton.addEventListener('click', () => divToImg($background));