//alert("ciao, sono il tuo nuovo compito !!!");

function creareLista() {
    let divSottostante = document.querySelector(".lista_sottostante");
    let ol = document.createElement("ol");
    let li = document.createElement("li");
    let button = document.querySelector("form button");

    ol.style.listStyleType = "none";

    button.addEventListener("click", () => {
        let name = document.querySelector('form input[name="nome_nuovo_task"]')
        if (name.value.trim()) {
            li.innerText = name.value;
        } else {
            li.innerText = "Devi inserire un testo valido";
        }
    })

    ol.appendChild(li);

    divSottostante.appendChild(ol);
    //console.log(divSottostante);
}
//console.log(creareLista());
creareLista();

