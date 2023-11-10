//alert("ciao, sono il tuo nuovo compito !!!");

function creareLista() {
    let divSottostante = document.querySelector(".lista_sottostante");
    let ol = document.createElement("ol");
    let li = document.createElement("li");
    let button = document.querySelector("form button");

    ol.style.listStyleType = "none";
   
    button.addEventListener("click", () => {
        let name = document.querySelector('form input[name="nome_nuovo_task"]')
        //name.value.trim();
        if (name.value.trim()) {
            li.innerText = name.value;
            name.value = "";
        } else {
            li.innerText = "Devi inserire un testo valido";
        }
    })
    
    /*
    button.addEventListener("click",
        () => {
            let inputName = document.querySelector('form input[name="nome_nuovo_task"]');
            let task = inputName.value.trim();
            if (task.length > 2) {
                let li = document.createElement("li");
                li.innerText = task;
                let ol = document.createElement("ol");
                ol.appendChild(li);
                inputName.value = "";
            }
        }
    )*/
    ol.appendChild(li);


    divSottostante.appendChild(ol);
    //console.log(divSottostante);
}
//console.log(creareLista());
creareLista();


