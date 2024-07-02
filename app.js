const btnColor = document. querySelector('#btnColor');
const body = document.querySelector('body')
btnColor.addEventListener('click', function() {
    setInterval(() => {
        if (document.body.style.background == "white") {
            document.body.style.background = "black";
        } else {
            document.body.style.background = "white";
    }}, 100);
})

document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.querySelector('.links');
    const formId = document.querySelector('#formId');

    formId.addEventListener('submit', function(event) {
        event.preventDefault();

        const taskInput = document.querySelector('#taskInput');
        const taskValue = taskInput.value.trim();

        if (taskValue) {
            const newCard = createCard(taskValue);
            taskList.insertAdjacentHTML('beforeend', newCard);
            taskInput.value = '';
            taskInput.focus();
        }
    });
});

function createCard(text) {return `<li class="link--text">${text}</li>`};
