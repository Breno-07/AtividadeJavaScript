let tasks = [];
let currentTaskIndex = null;

function addTask() {
    const name = document.getElementById('taskName').value.trim();
    const description = document.getElementById('taskDescription').value.trim();

    if (name && description) {
        tasks.push({
            name: name,
            description: description,
            status: 'pendente'
        });
        document.getElementById('taskName').value = '';
        document.getElementById('taskDescription').value = '';
        renderTasks();
    } else {
        alert('Preencha o nome e a descrição da tarefa.');
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${task.status === 'concluída' ? 'completed' : ''}">${task.name}</span>
            <div>
                <button class="action-btn" onclick="viewDetails(${index})">Detalhes</button>
                ${task.status === 'pendente' ? `<button class="action-btn complete-btn" onclick="completeTask(${index})">Concluir</button>` : ''}
                <button class="action-btn remove-btn" onclick="removeTask(${index})">Remover</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function viewDetails(index) {
    const task = tasks[index];
    document.getElementById('modalTitle').innerText = task.name;
    document.getElementById('modalDescription').innerText = task.description;
    document.getElementById('modalStatus').innerText = `Status: ${task.status}`;
    currentTaskIndex = index;
    document.getElementById('taskModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('taskModal').style.display = 'none';
}

function markAsCompleted() {
    if (currentTaskIndex !== null) {
        tasks[currentTaskIndex].status = 'concluída';
        renderTasks();
        closeModal();
    }
}

function completeTask(index) {
    tasks[index].status = 'concluída';
    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
