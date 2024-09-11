function exibirErro(id, mensagem) {
    const elemento = document.getElementById(id);
    elemento.innerText = mensagem;
    elemento.style.display = 'block'; // Assegura que o erro é exibido
}

function limparErro(id) {
    const elemento = document.getElementById(id);
    elemento.innerText = "";
    elemento.style.display = 'none'; // Assegura que o erro é ocultado
}

function validarNome() {
    const nome = document.getElementById('nome').value.trim();
    if (!/^[a-zA-Z]+ [a-zA-Z]+$/.test(nome)) {
        exibirErro('nomeError', 'Nome inválido');
    } else {
        limparErro('nomeError');
    }
}

function validarEmail() {
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        exibirErro('emailError', 'Email inválido');
    } else {
        limparErro('emailError');
    }
}

function validarTelefone(campo) {
    const telefone = document.getElementById(campo).value.trim();
    const telefoneError = document.getElementById(campo + "Error");
    const telefoneRegex = /^\(\d{2}\)\d{4,5}-\d{4}$/;
    if (!telefoneRegex.test(telefone)) {
        exibirErro(campo + "Error", 'Telefone inválido');
    } else {
        limparErro(campo + "Error");
    }
}

function validarMatricula() {
    const matricula = document.getElementById('matricula').value.trim();
    const tipo = document.querySelector('input[name="tipo"]:checked');
    if (!tipo) return; // Se nenhum tipo estiver selecionado, não valida a matrícula

    const isProfessor = tipo.value === "Professor";
    const matriculaRegex = isProfessor ? /^\d{5}$/ : /^\d{10}$/;

    if (!matriculaRegex.test(matricula)) {
        exibirErro('matriculaError', 'Matrícula inválida');
    } else {
        limparErro('matriculaError');
    }
}

function validarCurso() {
    const curso = document.getElementById('curso').value.trim();
    if (curso === "") {
        alert("Curso é obrigatório");
    }
}

function validarArea() {
    const area = document.getElementById('area').value.trim();
    if (area === "") {
        alert("Área de atuação é obrigatória");
    }
}

function validarFormulario(event) {
    event.preventDefault(); // Evita envio automático

    // Valida todos os campos
    validarNome();
    validarEmail();
    validarTelefone("telefoneFixo");
    validarTelefone("telefoneCelular");
    validarMatricula();

    // Valida curso ou área dependendo do tipo selecionado
    const tipo = document.querySelector('input[name="tipo"]:checked');
    if (tipo && tipo.value === "Aluno") {
        validarCurso();
    } else {
        validarArea();
    }

    // Se não houver erros, enviar formulário
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
