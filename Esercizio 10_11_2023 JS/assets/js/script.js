
let tombola = () => {
    let table = document.querySelector("div table");
    for (let i = 0; i < 76; i++) {
        let table_element = document.createElement("div");

        table_element.className = "table_element";
        table_element.innerText = [i + 1];

        table_element.style.width = "10%";
        table_element.style.height = "10%";
        table_element.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        table_element.style.border = "1px solid #000";
        table_element.style.display = "inline-block";
        table_element.style.margin = "1rem";
        table_element.style.textAlign = "center";
        table_element.style.verticalAlign = "middle";
        table_element.style.lineHeight = "10rem";
        table_element.style.fontSize = "4rem";
        table_element.style.fontWeight = "bold";
        table_element.style.color = "#fff";
        table_element.style.borderRadius = "50%";
        table_element.style.boxShadow = "0 0 10px #000";
        table_element.style.cursor = "pointer";
        table_element.style.padding = "1rem";


        table.appendChild(table_element);
    }
}
tombola();

let faiLaTuaGiocata = () => {
    let btn = document.querySelector(".btn");
    btn.style.cursor = "pointer";
    btn.addEventListener("click", () => {
        let primaEstrazione = Math.floor(Math.random() * 76);
        //console.log(primaEstrazione);
        for (let i = 0; i < 76; i++) {
            let table_element_number = [i + 1];
            /*let table_element = document.createElement("div");*/

            table_element.className = "table_element";
            if (primaEstrazione === table_element_number) {
                table_element.style.backgroundColor = "green";
            } else {
                table_element.style.backgroundColor = "red";
            }
        }
    })
}
faiLaTuaGiocata();