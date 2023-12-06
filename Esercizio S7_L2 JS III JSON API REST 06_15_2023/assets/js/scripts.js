/*
● Crea un semplice form di registrazione con un input field in cui l’utente possa inserire il proprio nome. A fianco di questo input field crea due pulsanti: uno salverà il valore in localStorage, uno rimuoverà il valore precedentemente salvato (se presente). 
Mostra sopra l’input field il valore precedentemente salvato, se presente. 
 */



let nome = document.querySelector("#nome");
let salva = document.querySelector("#salva");

let nomeSalvato = localStorage.getItem("nome");
let rimuovi = document.querySelector("#rimuovi");


if (nomeSalvato) {
    nome.value = nomeSalvato;
}

salva.addEventListener("click", function () {
    localStorage.setItem("nome", nome.value);
});

rimuovi.addEventListener("click", function () {
    localStorage.removeItem("nome");
});

/*
● Crea un contatore che tenga conto del tempo che passa, utilizzando sessionStorage. Aggiornando la pagina il valore prosegue, chiudendo la pagina - ovviamente - ricomincia. Il valore del contatore deve aggiornarsi ad ogni secondo. 
 */

let contatore = document.querySelector("#contatore");
let aggiorna = document.querySelector("#aggiorna");

let contatoreSalvato = sessionStorage.getItem("contatore");

if (contatoreSalvato) {
    contatore.innerHTML = contatoreSalvato;
}

aggiorna.addEventListener("click", function() {
    sessionStorage.setItem("contatore", contatore.innerHTML);
});  
