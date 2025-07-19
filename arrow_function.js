const num = (n) => n * n;

console.log(num(8));

// Object with arrows

var javascript = {
    name: "Javascript",
    libraries: ["React", "Angular", "Vue"],
    printLibraries: function () {
        this.libraries.forEach((s) => console.log(`${this.name} loves ${s}`))
    }
}

javascript.printLibraries();


const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thanks");

function show() {
    display.innerHTML = this.value;

    setTimeout(() => thanks.innerHTML = `You have typed: ${this.value}`, 2000)
}

searchInput.addEventListener("keyup", show);
