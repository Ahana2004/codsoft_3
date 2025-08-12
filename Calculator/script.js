let input = document.getElementById('input-box');
let b = document.querySelectorAll('button');

let str = ""; 
let arr = Array.from(b); 

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            str = eval(str).toString();
            input.value = str;
        }

        else if (e.target.innerHTML == 'AC') {
            str = "";
            input.value = "0";
        }

        else if (e.target.innerHTML == 'DEL') {
            str = str.substring(0, str.length - 1);
            input.value = str;

            if (str === "") {
                input.value = "0";
            }
            else {
                input.value = str;
            }
        }

        else if (['+', '-', '*', '/', '%'].includes(e.target.innerHTML)) {
            if (str === '0' || str === '') {
                return;
            }

            else {
                str += e.target.innerHTML;
                input.value = str;
            }
        }

        else {
            str += e.target.innerHTML;
            input.value = str;
        }
    })
})