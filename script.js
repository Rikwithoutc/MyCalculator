let string = "";

let buttons = document.querySelectorAll(".button");
let inputField = document.querySelector(".input");

// Button Click Event
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerHTML;

        if (value === "=") {
            try {
                string = Function('"use strict"; return (' + string + ')')();
                if (string !== "Error") {
                    string = String(string);
                }
            } catch {
                string = "Error";
            }
            inputField.value = string;

        } else if (value === "C") {
            string = "";
            inputField.value = string;

        } else if (value === "CE") {
            string = string.slice(0, -1);
            inputField.value = string;

        } else if (value === "%") { 
            if (string.length > 0) {
                string = String(eval(string + "/100"));
            }
            inputField.value = string;
            
        }else {
            if ("+-*/".includes(value) && "+-*/".includes(string.slice(-1))) {
                return; // Prevent consecutive operators
            }
            if (value === "." && /\.\d*$/.test(string)) {
                return; // Prevent multiple decimal points
            }
            string += value;
            inputField.value = string;
        }
    });
});

// Keyboard Input Event
document.addEventListener("keydown", (e) => {
    let key = e.key;

    if (key === "Enter" || key === "=") {
        try {
            string = Function('"use strict"; return (' + string + ')')();
            if (string !== "Error") {
                string = String(string);
            }
        } catch {
            string = "Error";
        }
        inputField.value = string;

    } else if (key === "Backspace") {
        string = string.slice(0, -1);
        inputField.value = string;

    } else if (key === "Delete") {
        string = "";
        inputField.value = string;
    } else if (key === "%") {
        if (string.length > 0) {
            string = String(eval(string + "/100"));
        }

    } else if (/\d/.test(key) || "+-*/.".includes(key)) {
        if ("+-*/".includes(key) && "+-*/".includes(string.slice(-1))) {
            return;  // Prevent consecutive operators
        }
        if (key === "." && /\.\d*$/.test(string)) {
            return; // Prevent multiple decimal points
        }
        string += key;
        inputField.value = string;
    }
});
