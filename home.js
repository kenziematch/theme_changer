
const body = document.body;



function changeBG1() {

    body.classList.toggle('theme-1');
    body.classList.remove('theme-2');
    body.classList.remove('theme-3');
    body.classList.remove('theme-4');

}

function changeBG2() {

    body.classList.remove('theme-1');
    body.classList.toggle('theme-2');
    body.classList.remove('theme-3');
    body.classList.remove('theme-4');

}

function changeBG3() {

    body.classList.remove('theme-1');
    body.classList.remove('theme-2');
    body.classList.toggle('theme-3');
    body.classList.remove('theme-4');

}

function changeBG4() {

    body.classList.remove('theme-1');
    body.classList.remove('theme-2');
    body.classList.remove('theme-3');
    body.classList.toggle('theme-4');

}