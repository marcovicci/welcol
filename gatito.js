var pet = 0;

async function init() {
    let getty_req = await fetch("https://getty.drewfitzgerald.co.nz/");
    var pet = parseInt(await getty_req.text());

    document.getElementById('c').innerHTML = pet;
}

function gatito() {
    console.log("gatito");
    let val = prompt("gatito?");

    if (val.toLowerCase().startsWith("y"))
        window.location = "https://drewfitzgerald.co.nz";
}

function pet_getty() {
    pet++;
    fetch("https://getty.drewfitzgerald.co.nz/pet");

    document.getElementById('c').innerHTML = pet;
}

init();