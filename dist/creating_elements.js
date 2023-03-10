"use strict";
var _a;
const add_btn = document.getElementById('add_btn'); // button for adding new todo
const new_todos_input = document.querySelector('.new_todos_input'); // input for entering new todo
const ulElement = document.getElementById('ulElement'); // HTML ul element is chosen
const defaultCheckbox = document.getElementById('default_checkbox');
const defaultParent = defaultCheckbox.parentElement;
const siblingElement = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent.nextElementSibling;
const defaultDeleteSVG = document.getElementById('delete');
const defaultDeleteSVG_ParentParentElement = (_a = defaultDeleteSVG.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
const defaultEditSVG = document.getElementById('edit');
function addNewTodo() {
    const newLi = document.createElement('li'); // created new li element
    newLi.classList.add('liElement');
    const checkbox_edit = document.createElement('div');
    ; // created new div element for checkbox and edit svg
    checkbox_edit.classList.add('checkbox_edit');
    const time_delete = document.createElement('div');
    ; // created new div element for time and delete svg
    time_delete.classList.add('time_delete');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    /* Here all neded SVG elements are created */
    const editSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    editSvg.setAttribute('fill', 'none');
    editSvg.setAttribute('viewBox', '0 0 24 24');
    editSvg.setAttribute('stroke-width', '1.5');
    editSvg.setAttribute('stroke', 'currentColor');
    editSvg.classList.add('h-6');
    editSvg.classList.add('w-6');
    editSvg.id = 'edit';
    const pathEdit = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEdit.setAttribute('stroke-linecap', 'round');
    pathEdit.setAttribute('stroke-linejoin', 'round');
    pathEdit.setAttribute('d', 'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10');
    editSvg.appendChild(pathEdit);
    checkbox_edit.append(checkbox, editSvg); // div cincludes 2 elements
    const deleteSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    deleteSVG.setAttribute('fill', 'none');
    deleteSVG.setAttribute('viewBox', '0 0 24 24');
    deleteSVG.setAttribute('stroke-width', '1.5');
    deleteSVG.setAttribute('stroke', 'currentColor');
    deleteSVG.classList.add('h-6');
    deleteSVG.classList.add('w-6');
    deleteSVG.id = 'delete';
    const pathDelete = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathDelete.setAttribute('stroke-linecap', 'round');
    pathDelete.setAttribute('stroke-linejoin', 'round');
    pathDelete.setAttribute('d', 'M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0');
    deleteSVG.appendChild(pathDelete);
    /* Element for showing added Time */
    const timeShow = document.createElement('h5');
    timeShow.classList.add('addedTime');
    const listAddedTime = () => {
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
        timeShow.textContent = `${currentDay}/${currentMonth}/${curretYear} | ${currentHours}:${currnetMinutes}:${currentSeconds}`;
    };
    listAddedTime();
    time_delete.append(timeShow, deleteSVG);
    /* SVG elements ended */
    const h3 = document.createElement('h3');
    h3.classList.add('h3Element');
    h3.textContent = new_todos_input.value;
    newLi.append(checkbox_edit, h3, time_delete);
    ulElement.append(newLi);
    function getParentElement() {
        const checkBoxParentElement = checkbox.parentElement;
        const h3Elemtnt = checkBoxParentElement === null || checkBoxParentElement === void 0 ? void 0 : checkBoxParentElement.nextElementSibling;
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                h3Elemtnt.style.textDecoration = 'line-through';
                h3Elemtnt.style.textDecorationColor = 'red';
                h3Elemtnt.style.color = 'darkgray';
            }
            else {
                h3Elemtnt.style.textDecoration = 'none';
                h3Elemtnt.style.color = 'wheat';
            }
        });
    }
    getParentElement(); /* Checking done ToDos */
    function deleteParentElement() {
        var _a;
        const DeletesvgParentParentElement = (_a = deleteSVG.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        deleteSVG.onclick = () => {
            DeletesvgParentParentElement.remove();
            ifLiExist();
        };
    }
    deleteParentElement(); /* Removing done ToDos */
    /* Editing Wrong Todo Input */
    function editTodoElement() {
        var _a;
        const editTodo = (_a = editSvg.parentElement) === null || _a === void 0 ? void 0 : _a.nextElementSibling;
        editSvg.onclick = () => {
            const editPrompt = prompt('Edit Your Todo', h3.innerText);
            editTodo.textContent = editPrompt;
        };
    }
    editTodoElement();
}
const defaultCheckboxFunction = () => {
    /* Marking Done ToDos */
    if (defaultCheckbox && defaultParent && siblingElement) {
        siblingElement.classList.add('completed');
        defaultCheckbox.addEventListener('change', () => {
            if (defaultCheckbox.checked) {
                siblingElement.style.textDecoration = 'line-through';
                siblingElement.style.textDecorationColor = 'red';
                siblingElement.style.color = 'darkgray';
            }
            else {
                siblingElement.style.textDecoration = 'none';
                siblingElement.style.color = 'wheat';
            }
        });
    }
};
defaultCheckbox.onclick = () => defaultCheckboxFunction();
const defaultDeleteSVGFunction = () => {
    /* Removing Done ToDos */
    if (defaultDeleteSVG_ParentParentElement) {
        defaultDeleteSVG_ParentParentElement.remove();
        ifLiExist();
    }
};
defaultDeleteSVG.onclick = () => defaultDeleteSVGFunction();
defaultEditSVG.onclick = () => alert('Default To Do cannot be canged!!!');
