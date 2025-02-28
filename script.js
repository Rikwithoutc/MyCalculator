let string = "";

let buttons = document.querySelectorAll(".button");

// console.log(buttons);
Array.from(buttons).forEach((button) => {

    button.addEventListener('click', (e) => {
        // console.log(e.target);
        if (e.target.innerHTML == "=") {
            try {
                string = Function('"use strict"; return (' + string + ')')();
            } catch {
                string = "Error";
            }
            document.querySelector('.input').value = string;
            string = "";
        
        }else if (e.target.innerHTML == "C") {
            string = "";
            document.querySelector('.input').value = string

        }else if (e.target.innerHTML == "CE"){
            string = string.slice(0,-1);
            document.querySelector('.input').value = string;
        }else {
            if ("+-*/".includes(e.target.innerHTML) && "+-*/".includes(string.slice(-1))) {
                return; 
            }
            string += e.target.innerHTML;
            document.querySelector('.input').value = string;
        }
    })
})

document.addEventListener('keydown', (e) => {
    if (e.key == "Enter" || e.key == "=") {
        try {
            string = Function('"use strict"; return (' + string + ')')();
        } catch {
            string = "Error";
        }
        document.querySelector('.input').value = string;
        string = "";

    } else if (e.key == "Backspace") {
        string = string.slice(0,-1);
        document.querySelector('.input').value = string;

    } else if (e.key == "Delete") {
        string = "";
        document.querySelector('.input').value = string;

    } else if (/\d/.test(e.key) || "+-*/.".includes(e.key)) {
        if ("+-*/".includes(e.key) && "+-*/".includes(string.slice(-1))) {
            return; 
        }
        string += e.key;
        document.querySelector('.input').value = string;

    } else {
        return;
    }
})