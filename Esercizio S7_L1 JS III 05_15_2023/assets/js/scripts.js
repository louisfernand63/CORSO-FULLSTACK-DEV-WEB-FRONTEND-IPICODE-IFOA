/*
1. Crea una classe User per la creazione di oggetti di tipo “utente”. Il suo costruttore dovrà inizializzare ogni oggetto utente con i seguenti attributi:

- firstName
- lastName
- age
- location 

Aggiungi alla classe User anche un metodo che restituisca il confronto con l'età di un'altra persona. Ad esempio, date due istanze della classe utente “x” e “y” inizializzate con le proprietà sopra descritte, il metodo dovrà restituire una frase simile a “x è più vecchio di y” a seconda del risultato del confronto. 

Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni correttamente.
*/

class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
        } else if (this.age < otherUser.age) {
            return `${otherUser.firstName} è più vecchio di ${this.firstName}`;
        } else {
            return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
        }
    }
}

let x = new User("Luca", "Rossi", 20, "Milano");
let y = new User("Giulia", "Verdi", 21, "Bologna");
console.log(x.compareAge(y));

/*
2. Crea un form per la creazione di oggetti “Pet” (animali domestici). La classe Pet dovrà essere dotata delle seguenti proprietà:

- petName
- ownerName
- species // (cane, gatto, coniglio etc.)
- breed // (labrador, soriano, nano etc.) 

Nella classe che utilizzerai per creare questi oggetti aggiungi anche un metodo che restituisca true se due animali condividono lo stesso padrone. 

Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante.
*/ 

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    getOwnerName() {
        return this.ownerName;
    }

    getPetName() {
        return this.petName;
    }

    getSpecies() {
        return this.species;
    }

    getBreed() {
        return this.breed;
    }

    getFullName() {
        return `${this.ownerName} - ${this.petName}`;
    }

    compareOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

let felino = new Pet("Gatto", "Mario", "Mamifero", "Soriano");
let guardiano = new Pet("Cane", "Mario", "Mamifero", "Labrador");

console.log(felino.compareOwner(guardiano));