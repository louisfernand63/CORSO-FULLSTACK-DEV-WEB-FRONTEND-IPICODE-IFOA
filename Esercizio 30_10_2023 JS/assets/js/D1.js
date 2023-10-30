/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* var number = 1; // qui è una variabile di tipo numero intero: int ! */
/* 
let stringa = "mi piace scrivere del codice da web dev fullstack !" // qui è una variabile di tipo stringa ! 
// const bulll = true; // qui è una variabile di tipo vero o falso, si dice boolean in inglese !
 
let numero_decimale = 10.9; // qui è una variabile di tipo numero decimale (numero con la virgola), si dice float in inglese ! 
 
console.log(numero_decimale); // per vedere il valore della variabile viene stampato dal terminale o dall'inspector del navigatore: google nel mio caso ! 

console.log(typeof numero_decimale); // per vedere il tipo de variabile dichiarato od inserito nel nostro codice. In questo caso la variabile è numero_decimale. Come dice il suo nome, è un numero con virgola ! 
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const name = "Louis Fernand !"; // qui è una variabile di tipo stringa ! 
console.log(name);
console.log(typeof name); 

{
const name = "Louis Fernand !"; // qui è una variabile di tipo stringa ! 
console.log(name);
console.log(typeof name); 
}
*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
let numb1 = 12; // qui è una variabile di tipo numero intero: int ! 
let numb2 = 20; // qui è una variabile di tipo numero intero: int ! 
let somma = numb1 + numb2; // qui è una variabile di tipo numero intero: int ! 
console.log(somma);
console.log(typeof somma); 
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let x; // qui è al creazione/dichiarazione di una variabile di tipo numero intero col nome x !
x = 12; // qui è l'assegnazione alla variabile x, il valore 12 di tipo numero intero: int !
console.log(x);
console.log(typeof x); 
*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let name = "DJEMBOU"; // si osserva chiaramente che abbiamo un errore in quanto, la variabile name essando dichiarata in alto come const (cioè con valore non variabile, valore che non deve variare), non puo prendere un altro valore diverso da quello già assegnato. In realtà il propblema viane anche dal fatto che la variabile name creata nell'esercizio 2 non è confinata all'interno di un blocco di codice con le {}. In quel modo, sarebbe nata e morta li dentro al blocco di codice. Vedere esercizio 2. 
*/



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
x -= 4;
console.log(x);
console.log(typeof x);
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let name1;
let name2;
let verifica1;
let lowercase;
let verifica2;

name1 = "john";
name2 = "John";

verifica1 = name1 === name2 ;
lowercase = name2.toLowerCase();
verifica2 = name1 === lowercase ;

console.log (verifica1); // il risultato qui è false
console.log (lowercase); 
console.log (verifica2); // il risultato qui è true
*/

