var pet = 0;

async function init() {
    let getty_req = await fetch(`https://getty.drewfitzgerald.co.nz/?cache=${Math.random()}`);
    pet = parseInt(await getty_req.text());

    document.getElementById('c').innerHTML = pet;
}

function gatito() {
    console.log("gatito");
    let val = prompt("gatito?");

    if (val.toLowerCase().startsWith("y"))
        window.location = "https://drewfitzgerald.co.nz";
}

function pet_getty() {
    fetch(`https://getty.drewfitzgerald.co.nz/pet?cache=${Math.random()}`);
    pet++;

    document.getElementById('c').innerHTML = pet;
}

function openNav(e) {
    e.preventDefault();
    e.stopPropagation();

    document.getElementById("nav-content")
        .classList.toggle("open");
}

document.body.addEventListener('click', function(event) {
    if (event.target.id != "nav-content") {
        document.getElementById("nav-content").classList = "hamburger";
    }
});

init();