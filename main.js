const $background = document.getElementById('background');
const $red = document.getElementById('red');
const $green = document.getElementById('green');
const $blue = document.getElementById('blue');
const $submit = document.getElementById('submit-button');
const downloadButton = document.getElementById('download-button');

let colors = [];

const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
};

const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

const getMaxColor = (value) => {
    const color = value === '' ? 0 : parseInt(value);
    if (color + 30 > 255) return 255;
    return color + 30;
};

const getMinColor = (value) => {
    const color = value === '' ? 0 : parseInt(value);
    if (color - 30 < 0) return 0;
    return color - 30;
};

const getRandomColor = (max, min) => Math.floor(Math.random() * (max - min) + min);

const createRectangle = (color, left, top) => {
    const div = document.createElement("div");
    div.classList.add("animated")
    div.style.position = "absolute"
    div.style.width = 2.5 + "%";
    div.style.height = 2.5 + "vh";
    div.style.backgroundColor = color;
    div.style.left = left + "%";
    div.style.top = top + "%";
    return div;
};

const saveImage = (canvas) => {
    const a = document.createElement('a');
    a.href = canvas.toDataURL();
    a.download = 'MosaicBackground.png';
    a.click()
};

document.addEventListener('DOMContentLoaded', () => {
    // GENERATING BACKGROUND
    $submit.addEventListener('click', (e) => {
        e.preventDefault()
        // Restart background and colors
        while ($background.firstChild) {
            $background.removeChild($background.lastChild);
        };
        colors = [];

        // Fill colors array
        for (let i = 0; i < 1000; i++) {
            addNewColor($red.value, $green.value, $blue.value)
        }
        // Fill background
        fillBackground()
    });

    function addNewColor(r, g, b) {
        const minRed = getMinColor(r);
        const minGreen = getMinColor(g);
        const minBlue = getMinColor(b);
        const maxRed = getMaxColor(r);
        const maxGreen = getMaxColor(g);
        const maxBlue = getMaxColor(b);

        const red = getRandomColor(maxRed, minRed);
        const green = getRandomColor(maxGreen, minGreen);
        const blue = getRandomColor(maxBlue, minBlue);

        return colors.push(rgbToHex(red, green, blue))
    };

    function fillBackground() {
        for (let i = 0; i < 40; i++) {
            for (let j = 0; j < 40; j++) {
                setTimeout(() => {
                    const randomColor = getRandomColor(colors.length, 0);
                    const left = j * 2.5;
                    const top = i * 2.5;

                    const newRectangle = createRectangle(colors[randomColor], left, top);
                    $background.appendChild(newRectangle)
                }, i * 100)
            }
        }
    };

    // SAVING BACKGROUND

    function divToImage(div) {
        html2canvas(div, { scrollY: -window.scrollY, scrollX: 0 }).then(canvas => saveImage(canvas))
    };

    downloadButton.addEventListener('click', () => divToImage($background));
});

module.exports = {
    rgbToHex,
    getMaxColor,
    getMinColor,
    getRandomColor,
    createRectangle
}