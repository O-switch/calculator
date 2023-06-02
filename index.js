
let detail = document.getElementById('inputBox');
let btn = document.querySelectorAll('button');

let string = '';
let arr = Array.from(btn);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            detail.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string=''
            detail.value=string
        }
        else if (e.target.innerHTML== 'DEL') {
            string=string.substring(0, string.length-1);
            detail.value=string
        }
        else {
            string += e.target.innerHTML;
            detail.value = string
        }
    })
})
