"use strict";
/* ============= Displaying time on scree starts here ============= */
const current_time = document.querySelector('.current_time');
setInterval(() => {
    var curretYear = new Date().getFullYear();
    var currentMonth = new Date().getMonth() + 1;
    var currentDay = new Date().getDay() + 5;
    var currentHours = new Date().getHours();
    var currnetMinutes = new Date().getMinutes();
    var currentSeconds = new Date().getSeconds();
    if (currentSeconds < 10) {
        currentSeconds = `0${currentSeconds}`;
    }
    if (currnetMinutes < 10) {
        currnetMinutes = `0${currnetMinutes}`;
    }
    if (currentHours < 10) {
        currentHours = `0${currentHours}`;
    }
    if (currentDay < 10) {
        currentDay = `0${currentDay}`;
    }
    if (currentMonth < 10) {
        currentMonth = `0${currentMonth}`;
    }
    current_time.textContent = `${currentDay}/${currentMonth}/${curretYear}  |  ${currentHours}:${currnetMinutes}:${currentSeconds}`;
}, 1000);
/* ============= Displaying time on scree end here ============= */
const noInput = document.querySelector('.noInput');
/* Adding new todo when clicking add button */
add_btn.onclick = () => {
    if (new_todos_input.value.length > 0) {
        addNewTodo();
        new_todos_input.value = '';
        new_todos_input.focus();
    }
    else {
        setTimeout(() => {
            noInput.textContent = 'No Input!';
        }, 0);
        setTimeout(() => {
            noInput.textContent = '';
        }, 1000);
    }
    ifLiExist();
};
/* Adding new todo when pushing Enter keyboard */
window.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        if (new_todos_input.value.length > 0) {
            addNewTodo();
            new_todos_input.value = '';
            new_todos_input.focus();
        }
        else {
            setTimeout(() => {
                noInput.textContent = 'No Input!';
            }, 0);
            setTimeout(() => {
                noInput.textContent = '';
            }, 1000);
        }
    }
    ifLiExist();
});
/* Background sentence for empty todo list */
const emptyListElement = document.createElement('h1');
emptyListElement.classList.add('empty');
const ifLiExist = () => {
    const lis = document.querySelectorAll('li');
    if (lis.length > 0) {
        emptyListElement.textContent = '';
    }
    else {
        emptyListElement.innerHTML = 'Emplty To-Dos <br> Add Smth';
    }
    document.body.appendChild(emptyListElement);
};
const clear_button = document.getElementById('clear_button');
const lis = document.querySelectorAll('li');
clear_button.onclick = () => location.reload();
