// Função para formatar o número de telefone
function formatarTelefone(event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    if (input.id === 'telefoneFixo') {
        // Formato: (xx) xxxx-xxxx
        if (value.length > 6) {
            value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
        } else if (value.length > 2) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else {
            value = `(${value}`;
        }
    } else if (input.id === 'telefoneCelular') {
        // Formato: (xx) xxxxx-xxxx
        if (value.length > 7) {
            value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
        } else if (value.length > 2) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else {
            value = `(${value}`;
        }
    }

    input.value = value;
}

// Função para exibir mensagens de erro
function exibirErro(id, mensagem) {
    const elemento = document.getElementById(id);
    elemento.innerText = mensagem;
    elemento.style.display = 'block'; 
}

// Função para limpar mensagens de erro
function limparErro(id) {
    const elemento = document.getElementById(id);
    elemento.innerText = "";
    elemento.style.display = 'none'; 
}

// Validação do campo Nome
function validarNome() {
    const nome = document.getElementById('nome').value.trim();
    if (!/^[a-zA-Z]+ [a-zA-Z]+$/.test(nome)) {
        exibirErro('nomeError', 'Nome inválido');
    } else {
        limparErro('nomeError');
    }
}

// Validação do campo Email
function validarEmail() {
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        exibirErro('emailError', 'Email inválido');
    } else {
        limparErro('emailError');
    }
}

// Validação do campo Telefone
function validarTelefone(campo) {
    const telefone = document.getElementById(campo).value.trim();
    const telefoneError = document.getElementById(campo + "Error");
    // Regex atualizado para permitir o formato com parênteses, espaço e hífen
    const telefoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    if (!telefoneRegex.test(telefone)) {
        exibirErro(campo + "Error", 'Telefone inválido');
    } else {
        limparErro(campo + "Error");
    }
}

// Validação do campo Matrícula
function validarMatricula() {
    const matricula = document.getElementById('matricula').value.trim();
    const tipo = document.querySelector('input[name="tipo"]:checked');
    if (!tipo) return; 

    const isProfessor = tipo.value === "Professor";
    const matriculaRegex = isProfessor ? /^\d{5}$/ : /^\d{10}$/;

    if (!matriculaRegex.test(matricula)) {
        exibirErro('matriculaError', 'Matrícula inválida');
    } else {
        limparErro('matriculaError');
    }
}

// Validação do campo Curso
function validarCurso() {
    const curso = document.getElementById('curso').value.trim();
    if (curso === "") {
        alert("Curso é obrigatório");
    }
}

// Validação do campo Área de Atuação
function validarArea() {
    const area = document.getElementById('area').value.trim();
    if (area === "") {
        alert("Área de atuação é obrigatória");
    }
}

// Validação geral do formulário
function validarFormulario(event) {
    event.preventDefault(); 

    validarNome();
    validarEmail();
    validarTelefone("telefoneFixo");
    validarTelefone("telefoneCelular");
    validarMatricula();

    const tipo = document.querySelector('input[name="tipo"]:checked');
    if (tipo && tipo.value === "Aluno") {
        validarCurso();
    } else {
        validarArea();
    }

    const erros = document.querySelectorAll(".error");
    const temErros = Array.from(erros).some(el => el.style.display !== "none");

    if (!temErros) {
        const form = document.getElementById("formulario");
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log(data);

        alert("Formulário enviado com sucesso!");
    }
}

// Manipulação da exibição dos campos baseados no tipo selecionado
document.querySelectorAll('input[name="tipo"]').forEach(function (input) {
    input.addEventListener("change", function () {
        if (this.value === "Aluno") {
            document.getElementById("cursoGroup").style.display = "block";
            document.getElementById("areaGroup").style.display = "none";
            document.getElementById("lattesGroup").style.display = "none";
        } else {
            document.getElementById("cursoGroup").style.display = "none";
            document.getElementById("areaGroup").style.display = "block";
            document.getElementById("lattesGroup").style.display = "block";
        }
    });
});

// Adiciona o evento input para formatar telefone
document.getElementById('telefoneFixo').addEventListener('input', formatarTelefone);
document.getElementById('telefoneCelular').addEventListener('input', formatarTelefone);

// Adiciona o evento submit para validar o formulário
document.getElementById('formulario').addEventListener('submit', validarFormulario);
