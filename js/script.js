
let full_name = [];
let selection = null;


// Immediate invoke function expression adding characters to array.
(function() {
    const characters = document.querySelectorAll(".header__name .character");
    for (let i = 0; i < characters.length; i++) {
        full_name.push(characters[i]);
    }
})();


// Make random letters blink.
const generate = () => {
    selection = Math.floor(Math.random() * full_name.length);
    setTimeout(animate, (Math.random() * 500) + 100);
}


// Add the neon class to each letter, one by one.
const animate = () => {
    full_name[selection].classList.add("neon");
    full_name.splice(selection, 1);
    if (full_name.length > 0) {
        generate();
    }
}


generate();
