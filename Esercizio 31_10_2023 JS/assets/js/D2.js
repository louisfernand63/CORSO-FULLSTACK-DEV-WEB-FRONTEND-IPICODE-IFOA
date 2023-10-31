/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
//let num1 = 5;
//let num2 = 7;

let num1 = Number(prompt("Inserisci il valore di num1, deve essere un numero intero !"));
let num2 = Number(prompt("Inserisci il valore di num2, deve essere un numero intero !"));
console.log("num1 = " + num1);
console.log("num2 = " + num2);

if (num1 > num2) {
  //print( num1 + " è più grande di " + num2);
  console.log(num1 + " è più grande di " + num2);
} else if (num1 === num2) {
  //print( num1 + " è uguale a " + num2);
  console.log(num1 + " è uguale a " + num2);
}else {
  //print( num2 + " è più grande di " + num1);
  console.log(num2 + " è più grande di " + num1);
}
*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const numb1 = 5;
let numb2 = Number(prompt("Inserisci un numero intero ! "));

console.log(numb1);
console.log(numb2);

if (numb2 != numb1) {
  //print( num"1 + " è più grande di " + num2);
  console.log("Sorry but " + numb2 + " is not equal to " + numb1 + " . Please, insert another number !");
} else {
  //print( num2 + " è più grande di " + num1);
  console.log(" Bravoooo, " + numb2 + " is equal to " + numb1 + " ! ");
}

*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let number1 = 5;
let number2 = Number(prompt("Inserisci un numero intero ! "));
let modulo = number2 % number1;

console.log("number1 = " + number1);
console.log("number2 = " + number2);
console.log("modulo = " + modulo);

if (modulo == 0) {
  //print(  number2 + " è divisibile per " + number1 + " . ");
  console.log( number2 + " è divisibile per " + number1 + " . ");
} else {
  //print( number2 + " non è divisibile per " + number1 + " . ");
  console.log( number2 + " non è divisibile per " + number1 + " . ");
}
*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
//let numero1 = Number(prompt("Inserisci il valore di numero1, deve essere un numero intero ! "));
//let numero2 = Number(prompt("Inserisci il valore di numero2, deve essere un numero intero ! "));
//let addizione = numero1 + numero2;
let numero1 = 5;
let numero2 = 7;
let addizione = numero1 + numero2;
let sottrazione;
  if (numero1 > numero2) {
    sottrazione = numero1 - numero2;
  } else { 
    sottrazione = numero2 - numero1;
  }

console.log("numero1 = " + numero1);
console.log("numero2 = " + numero2);
console.log(addizione);
console.log(sottrazione);

if (numero1 == 8 ) {
  //print(" Il valore di  numero1 è 8 ");
  console.log(" Il valore di  numero1 è 8 ");
} else if (numero2 == 8) {
  //print(" Il valore di  numero2 è 8 ");
  console.log(" Il valore di  numero2 è 8 ");
} else if (addizione == 8) {
  //print(" Il valore della lora addizione 8 ");
  console.log(" Il valore della lora addizione 8 ");
} else if (sottrazione == 8) {
  //print(" Il valore della lora sottrazione 8 ");
  console.log(" Il valore della lora sottrazione 8 ");
}
else {
  //print( " Nessuna dei valori è 8 ");
  console.log(" Nessuna dei valori è 8 ");
}
*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let totalShoppingCart = Number(prompt("Inserisci il valore totale del tuo acquisto, deve essere un numero intero ! "));

if (totalShoppingCart != null && totalShoppingCart > 50) {
  console.log("Congratulazioni, ha diritto alla spedizione gratuita !");
} else if (totalShoppingCart != null && totalShoppingCart == 50) {
  console.log("Con la nostra propozione in corso, può avere la spedizione gratuita con un acquisto supériore ai 50 !");
} else {
  console.log("Il costo alla spedizione è pari a 10 !");
}
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//  ANCORA DA FINIRE
/*
let totalShoppingCart = Number(prompt("Inserisci il valore totale del tuo acquisto, deve essere un numero intero ! "));

if (totalShoppingCart != null && totalShoppingCart > 50) {
  console.log("Congratulazioni, ha diritto alla spedizione gratuita !");
} else if (totalShoppingCart != null && totalShoppingCart == 50) {
  console.log("Con la nostra propozione in corso, può avere la spedizione gratuita con un acquisto supériore ai 50 !");
} else {
  console.log("Il costo alla spedizione è pari a 10 !");
}
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let variabili = [var1 = Number(prompt("Inserisci il valore di var1, deve essere un numero intero ! ")), var2 = Number(prompt("Inserisci il valore di var2, deve essere un numero intero ! ")), var3 = Number(prompt("Inserisci il valore di var3, deve essere un numero intero ! "))];

console.log("Il valore di var1 è " + var1);
console.log("Il valore di var2 è " + var2);
console.log("Il valore di var3 è " + var3);

if (variabili) {
  console.log(variabili.sort().reverse());
} else {
  console.log(" Devi inserire dei numeri interi !");
}
*/




/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* DA MIGLIORARE
//let dato = prompt("Inserisci il valore di dato ! ");
let dato = 44;

console.log("Il valore di dato è " + dato);
console.log(typeof(dato));

if (dato === isNaN) {
  console.log("Il valore " + dato + " fornito non è un numero !");
} else {
  console.log("Il valore " + dato + " fornito è un numero !");
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const number1 = 2;
let number2 = Number(prompt("Inserisci un numero intero ! "));
let modulo = number2 % number1;

console.log("number1 = " + number1);
console.log("number2 = " + number2);
console.log("modulo = " + modulo);

if (modulo == 0) {
  console.log( number2 + " è divisibile per " + number1 + " Quindi è pari. ");
} else {
  //print( number2 + " non è divisibile per " + number1 + " . ");
  console.log( number2 + " non è divisibile per " + number1 + " Quindi non è pari. ");
}
*/



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.

  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let val = 7
if (val < 10) {
  console.log(val + " è minore di 10. ");
} else if (val > 5) {
  console.log(val + " è maggiore di 5. ");
} else {
  console.log(val + " è maggiore o uguale a 10 .");
}
*/


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/*
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
/*
me.push("city: Toronto");
*/



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let lista_numeri; 
lista_numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(lista_numeri);
*/

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
lista_numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(lista_numeri);

lista_numeri[9] = 100;
console.log(lista_numeri);
*/