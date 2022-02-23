let age = parseInt(prompt("Quanti anni hai?"));
if( age <= 0){
    do{
        age = prompt("Fecondazione fallita, scegli un'età valida perfavore");
    }while( age <= 0 );
}
else if ( age > 130 ) {
    do{
        age = parseInt(prompt("Scusi, i cadaveri non sono permessi sul treno, scegli un'età vivente"));
    }while( age > 130 );
}
else if ( isNaN(age)){
    do{
        age = parseInt(prompt("eta non valida, perfavore digita un numero"));
    }while(isNaN(age));
}

document.getElementById('eta').innerHTML += age;

let distance = parseFloat(prompt("Quanti chilometri devi percorrere?"));
if( distance <= 0){
    do{
        distance = parseFloat(prompt("Destinazione già raggiunta, digita una distanza da percorrere valida"));
    }while(distance <= 0);
}
else if ( isNaN(distance)){
    do{
        distance = parseFloat(prompt("distanza non valida, perfavore digita un numero"));
    }while(isNaN(distance));
}

document.getElementById('distanza').innerHTML += distance.toFixed(2);

let price;

if(age < 18){
    price = distance * 0.21 * 0.8;
}
else if(age >= 65){
    price =  distance * 0.21 * 0.6;
}
else{
    price = distance * 0.21;
}

document.getElementById('prezzo').innerHTML += price.toFixed(2);