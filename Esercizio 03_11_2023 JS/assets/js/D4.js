/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let l1 = Number(prompt("inserisci un numero intero"));
let l2 = Number(prompt("inserisci un numero intero"));

function area(l1, l2) {
    let rect_area = l1 * l2;
    console.log(rect_area);
    //return rect_area;
}

area(l1, l2);
*/

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let x = Number(prompt("inserisci un numero intero"));
let y = Number(prompt("inserisci un numero intero"));

function crazySum(x, y) {
    let sum = x + y;
    if (x === y) {
        let sum_per_tre = sum * 3;
        console.log(sum_per_tre);
        //return sum_per_tre;
    } else {
        console.log(sum);
        //return sum;
    }
    //console.log(sum)
    //return sum;
}

crazySum(x, y);
*/


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let number1 = Number(prompt("inserisci un numero intero number1"));

function crazyDiff(number1) {
    let diff_assol = Math.abs(number1 - 19);
    if (number1 > 19) {
        let diff_assol_per_tre = diff_assol * 3;
        console.log(diff_assol_per_tre);
        //return diff_assol_per_tre;
    } else {
        console.log(diff_assol);
        //return diff_assol;
    }
    //console.log(diff_assol)
    //return diff_assol;
}

crazyDiff(number1);
*/

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let n = Number(prompt("inserisci un numero intero n"));

function boundary(n) {
    if (n >= 20 && n <= 100 || n === 400) {
        console.log("true");
        //return true;
    } else {
        console.log("false");
        //return false;
    }
}
boundary(n);
*/

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let testo_stringa = prompt("inserisci qui un testo !");
const stringa = "EPICODE";

function epify(testo_stringa) {
    if (testo_stringa[0].indexOf(stringa) == 0) {
        console.log(testo_stringa[0]);
        //return testo_stringa[0];
    } else {
        console.log(stringa.concat(testo_stringa[0]));
        //return stringa.concat(testo_stringa[0]);
    }
}
epify(testo_stringa);
*/


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let number_pos = Math.abs(Number(prompt("inserisci un numero intero come number_pos")));

function check3and7(number_pos) {
    if (number_pos % 3 === 0 || number_pos % 7 === 0) {
        console.log("true");
        //return true;
    } else {
        console.log("false");
        //return false;
    }
}
check3and7(number_pos)
*/


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let revers_stringa = prompt("inserisci qui un testo !");

function reverseString(revers_stringa) {
    console.log(revers_stringa.split("").reverse().join(""));
    //return revers_stringa.split("").reverse().join("");
}
reverseString(revers_stringa);
*/


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let upperFirst_string = prompt("inserisci qui una tua frase !");

function upperFirst(upperFirst_string) {
    console.log(upperFirst_string[0].toUpperCase() + upperFirst_string.slice(1));
    //return upperFirst_string[0].toUpperCase() + upperFirst_string.slice(1);
}
upperFirst(upperFirst_string);
*/


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let cutString_stringa = prompt("inserisci qui una parola !");

function cutString(cutString_stringa) {
    console.log(cutString_stringa.slice(cutString_stringa.indexOf(), cutString_stringa.lastIndexOfindexOf()));
    //return;
}
cutString(cutString_stringa);
*/


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let nrand = Number(prompt("inserisci qui un numero intero !"));
let random_array = [];

function giveMeRandom(nrand) {
    console.log(random_array.push(Math.random(nrand)));
    //return random_array.push(Math.random(nrand));
}