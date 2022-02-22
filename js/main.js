let age = parseInt(prompt("Quanti anni hai?"));
if( age <= 0){
    age = prompt("Fecondazione fallita, scegli un'età valida perfavore");
}
else if ( age > 130) {
    age = prompt("Scusi, i cadaveri non sono permessi sul treno, scegli un'età vivente");
}

document.getElementById('eta').innerHTML += age;

let distance = parseFloat(prompt("Quanti chilometri devi percorrere?"));
if( distance <= 0){
    distance = prompt("Destinazione già raggiunta, digita una distanza da percorrere valida");
}

document.getElementById('distanza').innerHTML += distance.toPrecision(3);

let price;

if(age < 18){
    price = distance * 0.21 * 0.8;
}
else if(age >= 60){
    price =  distance * 0.21 * 0.6;
}
else{
    price = distance * 0.21;
}

document.getElementById('prezzo').innerHTML += price.toPrecision(3);