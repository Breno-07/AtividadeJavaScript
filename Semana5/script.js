class Task {
    constructor(name, description, status = 'pendente') {
        this.name = name;
        this.description = description;
        this.status = status;
    }

    complete() {
        this.status = 'concluída';
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
        this.currentTaskIndex = null;
    }

    addTask(name, description) {
        if (name.trim() && description.trim()) {
            const task = new Task(name, description);
            this.tasks.push(task);
            this.clearInputFields();
            this.renderTasks();
        } else {
            alert('Preencha o nome e a descrição da tarefa.');
        }
    }

    clearInputFields() {
        document.getElementById('taskName').value = '';
        document.getElementById('taskDescription').value = '';
    }

    renderTasks() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';

        this.tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="${task.status === 'concluída' ? 'completed' : 'bold'}">${task.name}</span>
                <div>
                    <button class="action-btn" onclick="taskManager.viewDetails(${index})">Detalhes</button>
                    ${task.status === 'pendente' ? `<button class="action-btn complete-btn" onclick="taskManager.completeTask(${index})">Concluir</button>` : ''}
                    <button class="action-btn remove-btn" onclick="taskManager.removeTask(${index})">Remover</button>
                </div>
            `;
            taskList.appendChild(li);
        });
    }

    viewDetails(index) {
        const task = this.tasks[index];
        document.getElementById('modalTitle').innerText = task.name;
        document.getElementById('modalDescription').innerText = task.description;
        document.getElementById('modalStatus').innerText = `Status: ${task.status}`;
        this.currentTaskIndex = index;
        document.getElementById('taskModal').style.display = 'flex';
    }

    closeModal() {
        document.getElementById('taskModal').style.display = 'none';
    }

    markAsCompleted() {
        if (this.currentTaskIndex !== null) {
            this.tasks[this.currentTaskIndex].complete();
            this.renderTasks();
            this.closeModal();
        }
    }

    completeTask(index) {
        this.tasks[index].complete();
        this.renderTasks();
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
        this.renderTasks();
    }
}

const taskManager = new TaskManager();

function addTask() {
    const name = document.getElementById('taskName').value;
    const description = document.getElementById('taskDescription').value;
    taskManager.addTask(name, description);
}

function closeModal() {
    taskManager.closeModal();
}

function markAsCompleted() {
    taskManager.markAsCompleted();
}
