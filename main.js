const $container = document.querySelector(".container");
const $counter = document.querySelector("#counter");
const $tonality = document.querySelector("#tonality");
const $brightness = document.querySelector("#brightness");
const $start = document.querySelector("#start");
const $restart = document.querySelector("#restart");

let counter = 0;
let colors = [];

$start.addEventListener("click", () => {
    colors = []
    for (let i = 0; i < 1000; i++) {
        newColors($tonality.value, $brightness.value)
    };
    createRectangles();
});

$restart.addEventListener("click", () => {
    while ($container.firstChild) {
        $container.removeChild($container.lastChild);
    };

    colors = [];
    counter = 0;
    $counter.innerHTML = counter;
})

function newColors(a, b) {
    let red;
    let green;
    let blue;

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    if (a === "red") {
        switch (b) {
            case "bright":
                red = Math.floor(Math.random() * (255 - 200) + 200);
                green = Math.floor(Math.random() * (160 - 130) + 130);
                blue = Math.floor(Math.random() * (160 - 130) + 130);
                break
            case "dark":
                red = Math.floor(Math.random() * (170 - 100) + 100);
                green = Math.floor(Math.random() * 80);
                blue = Math.floor(Math.random() * 80);
                break
            case "full":
                red = Math.floor(Math.random() * (255 - 170) + 170);
                green = Math.floor(Math.random() * 200);
                blue = Math.floor(Math.random() * 200);
                break
            default: console.log("something")
        }
        return colors.push(rgbToHex(red, green, blue))
    }

    if (a === "green") {
        switch (b) {
            case "bright":
                red = Math.floor(Math.random() * (160 - 130) + 130);
                green = Math.floor(Math.random() * (255 - 200) + 200);
                blue = Math.floor(Math.random() * (160 - 130) + 130);
                break
            case "dark":
                red = Math.floor(Math.random() * 80);
                green = Math.floor(Math.random() * (170 - 100) + 100);
                blue = Math.floor(Math.random() * 80);
                break
            case "full":
                red = Math.floor(Math.random() * 200);
                green = Math.floor(Math.random() * (255 - 170) + 170);
                blue = Math.floor(Math.random() * 200);
                break
            default: console.log("something")
        }
        return colors.push(rgbToHex(red, green, blue))
    }

    if (a === "blue") {
        switch (b) {
            case "bright":
                red = Math.floor(Math.random() * (160 - 130) + 130);
                green = Math.floor(Math.random() * (160 - 130) + 130);
                blue = Math.floor(Math.random() * (255 - 200) + 200);
                break
            case "dark":
                red = Math.floor(Math.random() * 80);
                green = Math.floor(Math.random() * 80);
                blue = Math.floor(Math.random() * (170 - 100) + 100);
                break
            case "full":
                red = Math.floor(Math.random() * 200);
                green = Math.floor(Math.random() * 200);
                blue = Math.floor(Math.random() * (255 - 170) + 170);
                break
            default: console.log("something")
        }
        return colors.push(rgbToHex(red, green, blue))
    }
    if (a === "full") {
        switch (b) {
            case "bright":
                red = Math.floor(Math.random() * (255 - 200) + 200);
                green = Math.floor(Math.random() * (255 - 200) + 200);
                blue = Math.floor(Math.random() * (255 - 200) + 200);
                break
            case "dark":
                red = Math.floor(Math.random() * 80);
                green = Math.floor(Math.random() * 80);
                blue = Math.floor(Math.random() * 80);
                break
            case "full":
                red = Math.floor(Math.random() * 255);
                green = Math.floor(Math.random() * 255);
                blue = Math.floor(Math.random() * 255);
                break
            default: console.log("something")
        }
        return colors.push(rgbToHex(red, green, blue))
    }

    if (a === "grey") {
        switch (b) {
            case "bright":
                red = Math.floor(Math.random() * (255 - 200) + 200);
                green = red;
                blue = red;
                break
            case "dark":
                red = Math.floor(Math.random() * 80)
                green = red;
                blue = red;
                break
            case "full":
                red = Math.floor(Math.random() * 255)
                green = red;
                blue = red;
                break
            default: console.log("something")
        }

        return colors.push(rgbToHex(red, green, blue))
    }
}

class Rectangle {
    constructor(color, left, top) {
        this.color = color;
        this.left = left;
        this.top = top;

        let newRectangle = document.createElement("div")

        const div = newRectangle
        div.classList.add("animated")
        div.style.position = "absolute"
        div.style.width = 2 + "%";
        div.style.height = 2 + "vh";
        div.style.backgroundColor = this.color;
        div.style.left = this.left + "%"
        div.style.top = this.top + "vh"

        $container.appendChild(div)
    }

}

function createRectangles() {
    for (let i = 0; i < 50; i++) {
        for (let j = 0; j < 50; j++){
            setTimeout(() => {

                let randomColor = Math.floor(Math.random() * colors.length);
                let left = j * 2
                let top = i * 2;
    
                new Rectangle(colors[randomColor], left, top)
    
                counter += 1
                $counter.innerHTML = counter
            }, i * 100)
        }
    }
}


class Person {
    constructor(_name, _age, _gender, _civilState, _address) {
        this.name = _name
        this.age = _age
        this.gender = _gender
        this.civilState = _civilState
        this.address = _address
    }

    get isOverEighteen() {
        return age >= 18
    }
}

class Programmer extends Person {
    constructor(_name, _age, _gender, _civilState, _address, _lenguages, _frameworks, _yearsOfExperience) {
        super(_name, _age, _gender, _civilState, _address);
        this.lenguages = _lenguages;
        this.frameworks = _frameworks;
        this.yearsOfExperience = _yearsOfExperience
    }

    get howManyLenguages() {
        return this.lenguages.length
    }

    showHowManyLenguages() {
        console.log(`${this.name} controls ${this.lenguages.length} programming lenguages`)
    }
}

let person1 = new Person("Santi", 6, "male", "single", "Bs.As.")
let programmer1 = new Programmer("Lucas", 20, "male", "single", "Bs.As.", ["HTML", "CSS", "JavaScript"], [], 0.2)

console.log(person1)
console.log(programmer1)

console.log(programmer1.showHowManyLenguages())
console.log(programmer1.howManyLenguages)

const peopleArray = [person1, programmer1]

console.log(peopleArray)

const adultPeople = peopleArray
    .map(item => {
        return {
            name: item.name,
            age: item.age,
            civilState: item.civilState
        }
    })
    .filter(item => {
        return item.age > 18
    })

console.log(adultPeople)

class Traductions {
    constructor(listElement, array) {
        this.listElement = listElement;
        this.textList = array
    }

    static createListItem(text) {
        const $li = document.createElement("li");
        $li.classList.add("nav-list-item")
        const $a = document.createElement("a")
        $a.classList.add("nav-link")
        $li.appendChild($a)
        $a.textContent = text;
        return $li;
    }

    update() {
        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild);
        }

        for (const text of this.textList) {
            this.listElement.appendChild(Traductions.createListItem(text));
        }
    }

    add(text) {
        this.textList.push(text);
        this.update();
    }

    remove(index) {
        this.textList.splice(index, 1);
        this.update();
    }
}

const $navList = document.querySelector("#nav-list")
const $navDeutsch = new Traductions($navList, ["Klasses Übung"])
