class Tarefa {
    constructor(nome, descricao, status = 'pendente') {
        this.nome = nome;
        this.descricao = descricao;
        this.status = status;
    }

    concluir() {
        this.status = 'concluída';
    }
}

class GerenciadorDeTarefas{
    constructor() {
        this.tarefas = [];
        this.indiceTarefaAtual = null;
    }

    adicionarTarefa(nome, descricao){
        if (nome.trim() && descricao.trim()) {
            const tarefa = new Tarefa(nome, descricao);
            this.tarefas.push(tarefa);
            this.limparCampos();
            this.listarTarefas();
        } else {
            alert('Preencha o nome e a descrição da tarefa.');
        }
    }

    limparCampos() {
        document.getElementById('nomeTarefa').value = '';
        document.getElementById('descricaoTarefa').value = '';
    }

    listarTarefas() {
        const listaTarefas = document.getElementById('listaTarefas');
        listaTarefas.innerHTML = '';

        this.tarefas.forEach((tarefa, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="${tarefa.status === 'concluída' ? 'completed' : 'bold'}">${tarefa.nome}</span>
                <div>
                    <button class="action-btn" onclick="gerenciador.visualizarDetalhes(${index})">Detalhes</button>
                    ${tarefa.status === 'pendente' ? `<button class="action-btn complete-btn" onclick="gerenciador.marcarComoConcluida(${index})">Concluir</button>` : ''}
                    <button class="action-btn remove-btn" onclick="gerenciador.removerTarefa(${index})">Remover</button>
                </div>
            `;
            listaTarefas.appendChild(li);
        });
    }

    visualizarDetalhes(index) {
        const tarefa = this.tarefas[index];
        document.getElementById('modalTitulo').innerText = tarefa.nome;
        document.getElementById('modalDescricao').innerText = tarefa.descricao;
        document.getElementById('modalStatus').innerText = `Status: ${tarefa.status}`;
        this.indiceTarefaAtual = index;
        document.getElementById('modalTarefa').style.display = 'flex';
    }

    fecharModal() {
        document.getElementById('modalTarefa').style.display = 'none';
    }

    marcarComoConcluida(index = null) {
        if (index !== null) {
            this.tarefas[index].concluir();
        } else if (this.indiceTarefaAtual !== null) {
            this.tarefas[this.indiceTarefaAtual].concluir();
        }
        this.listarTarefas();
        this.fecharModal();
    }

    removerTarefa(index) {
        this.tarefas.splice(index, 1);
        this.listarTarefas();
    }
}

const gerenciador = new GerenciadorDeTarefas();

function adicionarTarefa() {
    const nome = document.getElementById('nomeTarefa').value;
    const descricao = document.getElementById('descricaoTarefa').value;
    gerenciador.adicionarTarefa(nome, descricao);
}

function fecharModal() {
    gerenciador.fecharModal();
}

function marcarComoConcluida() {
    gerenciador.marcarComoConcluida();
}
