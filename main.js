let Color = document.querySelectorAll(".color span");

let styleIntO = document.head.appendChild(document.createElement("style"));
let styleIntT = document.head.appendChild(document.createElement("style"));

for (let i = 0; i < Color.length; i++) {
    Color[i].onclick = function() {
        if (Color[i] === Color[0]) { 
            styleIntO.innerHTML = ".card:before {background: #9ada2a;}";
            styleIntT.innerHTML = ".size span:hover:hover {background: #9ada2a;}";
        }else if (Color[i] === Color[1]) {
            styleIntO.innerHTML = ".card:before {background: #069ce4;}";
            styleIntT.innerHTML =".size span:hover:hover  {background: #069ce4;}";
        }else if (Color[i] === Color[2]) {
            styleIntO.innerHTML = ".card:before {background: #cc1011;}";
            styleIntT.innerHTML =".size span:hover:hover  {background: #cc1011;}";
        }
    }
}

