/* ============= Displaying time on scree starts here ============= */
const current_time = document.querySelector('.current_time')! as HTMLHtmlElement;
setInterval(() => {
    var curretYear: number | string
     = new Date().getFullYear();
    var currentMonth: number | string
     = new Date().getMonth() + 1;
    var currentDay: number | string
     = new Date().getDay() + 5;
    var currentHours: number | string
     = new Date().getHours();
    var currnetMinutes: number | string
     = new Date().getMinutes();
    var currentSeconds: number | string
     = new Date().getSeconds();
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

const noInput = document.querySelector('.noInput')! as HTMLElement;

/* Adding new todo when clicking add button */
add_btn.onclick = () => {
    if (new_todos_input.value.length > 0) {
        addNewTodo();
        new_todos_input.value = '';
        new_todos_input.focus();
    } else {
        setTimeout(() => {
            noInput.textContent = 'No Input!';
        }, 0);
        setTimeout(() => {
            noInput.textContent = '';
        }, 1000);
    }
    ifLiExist();

}

/* Adding new todo when pushing Enter keyboard */
window.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        if (new_todos_input.value.length > 0) {
            addNewTodo();
            new_todos_input.value = '';
            new_todos_input.focus();
        } else {
            setTimeout(() => {
                noInput.textContent = 'No Input!';
            }, 0);
            setTimeout(() => {
                noInput.textContent = '';
            }, 1000);
        }
    }
    ifLiExist();
})

/* Background sentence for empty todo list */
const emptyListElement = document.createElement('h1')! as HTMLElement;
emptyListElement.classList.add('empty');
const ifLiExist = () => {
    const lis = document.querySelectorAll('li')! as NodeListOf<HTMLLIElement>;
    if (lis.length > 0) {
        emptyListElement.textContent = '';
    } else {
        emptyListElement.innerHTML = 'Emplty To-Dos <br> Add Smth';
    }
    document.body.appendChild(emptyListElement);
}

const clear_button = document.getElementById('clear_button') as HTMLButtonElement;
const lis = document.querySelectorAll('li')! as NodeListOf<HTMLLIElement>;

clear_button.onclick = () => location.reload();