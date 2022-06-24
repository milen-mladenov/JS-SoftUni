function solve() {
    const inputs = {
        task: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date'),
    }
 
    const sections = {
        open: document.querySelector('.orange').parentElement.nextElementSibling,
        inProgress: document.querySelector('.yellow').parentElement.nextElementSibling,
        complete: document.querySelector('.green').parentElement.nextElementSibling,
    }
 
    document.getElementById('add').addEventListener('click', onAddClick);
 
    const task = inputs.task.value;
    const description = inputs.description.value;
    const date = inputs.date.value;
 
    function onAddClick(ev) {
        ev.preventDefault();
        let article, div, startButton, deleteButton, finishButton;
 
        if (task && description && date) {
            article = createElement('article', null, sections.open);
            createElement('h3', task, article);
            createElement('p', `Description: ${description}`, article);
            createElement('p', `Due Date: ${date}`, article);
 
            div = createElement('div', '', article);
            div.className = 'flex';
 
            startButton = createElement('button', 'Start', div);
            startButton.className = 'green';
            startButton.addEventListener('click', onStartClick);
 
            deleteButton = createElement('button', 'Delete', div);
            deleteButton.className = 'red';
            deleteButton.addEventListener('click', onDeleteClick);
        }
 
        function onStartClick() {
            sections.inProgress.appendChild(article);
            startButton.remove();
 
            finishButton = createElement('button', 'Finish', div);
            finishButton.className = 'orange';
            finishButton.addEventListener('click', onFinishClick);
        }
 
        function onDeleteClick() {
            article.remove();
        }
 
        function onFinishClick() {
            sections.complete.appendChild(article);
            deleteButton.remove();
            finishButton.remove();
        }
    }
 
    function createElement(type, value, parent) {
        const element = document.createElement(type);
        element.textContent = value;
 
        if (parent) {
            parent.appendChild(element);
        }
 
        return element;
    }
}