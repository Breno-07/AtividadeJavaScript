document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';  
document.body.style.alignItems = 'center';  
document.body.style.height = '100vh';  
document.body.style.margin = '0';  
document.body.style.backgroundColor = '#f0f0f0';   

// Selecionando a div principal
const app = document.getElementById('app');

// Função para atualizar o display total
let totalCount = 0;
let manCount = 0;
let womanCount = 0;

function updateDisplay() {
  totalDisplay.value = totalCount;
  manCountDisplay.value = manCount;
  womanCountDisplay.value = womanCount;
}

function resetCounters() {
  totalCount = 0;
  manCount = 0;
  womanCount = 0;
  updateDisplay();
}

// Criando o container principal
const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.backgroundColor = '#fff';
container.style.padding = '40px';
container.style.borderRadius = '10px';
container.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
container.style.width = '300px';

// Criando a seção do total
const totalSection = document.createElement('div');
totalSection.style.display = 'flex';
totalSection.style.marginLeft = '240px';
totalSection.style.alignItems = 'center';
totalSection.style.width = '100%';
totalSection.style.marginBottom = '0';

// Título "Total"
const totalTitle = document.createElement('h3');
totalTitle.textContent = 'Total';
totalTitle.style.fontSize = '26px';
totalTitle.style.margin = '0';
totalTitle.style.fontFamily = 'Arial, sans-serif';
totalSection.appendChild(totalTitle);

// Botão de reset
const resetButton = document.createElement('button');
resetButton.innerHTML = '&#x21bb;';
resetButton.style.fontSize = '24px';
resetButton.style.background = 'none';
resetButton.style.border = 'none';
resetButton.style.cursor = 'pointer';
resetButton.style.marginLeft = '100px';
resetButton.addEventListener('click', resetCounters);
totalSection.appendChild(resetButton);

// Adicionando a seção do total no container
container.appendChild(totalSection);

// Display do total
const totalDisplay = document.createElement('input');
totalDisplay.type = 'text';
totalDisplay.value = '0';
totalDisplay.style.textAlign = 'center';
totalDisplay.style.fontSize = '24px';
totalDisplay.style.margin = '10px 0';
totalDisplay.style.width = '80px';
totalDisplay.style.height = '40px';
totalDisplay.style.border = '2px solid #000';
totalDisplay.style.borderRadius = '5px';
totalDisplay.style.backgroundColor = '#f9f9f9';
totalDisplay.readOnly = true;
container.appendChild(totalDisplay);

// Criando a seção de pessoas (homens e mulheres)
const peopleSection = document.createElement('div');
peopleSection.style.display = 'flex';
peopleSection.style.justifyContent = 'space-around';
peopleSection.style.width = '100%';

// Seção de homens
const manSection = document.createElement('div');
manSection.style.display = 'flex';
manSection.style.flexDirection = 'column';
manSection.style.alignItems = 'center';
manSection.style.fontFamily = 'Arial, sans-serif';

// Imagem de homem
const manImage = document.createElement('img');
manImage.src = '../Semana6/homem.png';
manImage.alt = 'Homem';
manImage.style.width = '80px';
manImage.style.height = '80px';
manSection.appendChild(manImage);

// Botões de incremento/decremento de homens
const manButtons = document.createElement('div');
manButtons.style.display = 'flex';
manButtons.style.gap = '10px';
manButtons.style.marginTop = '10px';

// Botão de incrementar homens
const addManButton = document.createElement('button');
addManButton.textContent = '+';
addManButton.style.fontSize = '24px';
addManButton.style.width = '50px';
addManButton.style.height = '50px';
addManButton.style.backgroundColor = '#4CAF50';
addManButton.style.color = 'white';
addManButton.style.border = 'none';
addManButton.style.borderRadius = '50%';
addManButton.style.cursor = 'pointer';
addManButton.addEventListener('click', () => {
  manCount++;
  totalCount++;
  updateDisplay();
});
manButtons.appendChild(addManButton);

// Botão de decrementar homens
const removeManButton = document.createElement('button');
removeManButton.textContent = '-';
removeManButton.style.fontSize = '24px';
removeManButton.style.width = '40px';
removeManButton.style.height = '40px';
removeManButton.style.backgroundColor = '#f44336';
removeManButton.style.color = 'white';
removeManButton.style.border = 'none';
removeManButton.style.borderRadius = '50%';
removeManButton.style.cursor = 'pointer';
removeManButton.style.marginTop = '5px';

removeManButton.addEventListener('click', () => {
  if (manCount > 0) {
    manCount--;
    totalCount--;
    updateDisplay();
  }
});
manButtons.appendChild(removeManButton);

manSection.appendChild(manButtons);

const manLabel = document.createElement('h3');
manLabel.textContent = 'Homens';
manSection.appendChild(manLabel);

// Display de homens
const manCountDisplay = document.createElement('input');
manCountDisplay.type = 'text';
manCountDisplay.value = '0';
manCountDisplay.style.textAlign = 'center';
manCountDisplay.style.fontSize = '24px';
manCountDisplay.style.width = '100px';
manCountDisplay.style.height = '40px';
manCountDisplay.style.border = '2px solid #000';
manCountDisplay.style.borderRadius = '5px';
manCountDisplay.style.backgroundColor = '#f9f9f9';
manCountDisplay.readOnly = true;
manSection.appendChild(manCountDisplay);

// Seção de mulheres
const womanSection = document.createElement('div');
womanSection.style.display = 'flex';
womanSection.style.flexDirection = 'column';
womanSection.style.alignItems = 'center';
womanSection.style.fontFamily = 'Arial, sans-serif';

// Imagem de mulher
const womanImage = document.createElement('img');
womanImage.src = '../Semana6/Mulher.png';
womanImage.alt = 'Mulher';
womanImage.style.width = '80px';
womanImage.style.height = '80px';
womanSection.appendChild(womanImage);

// Botões de incremento/decremento de mulheres
const womanButtons = document.createElement('div');
womanButtons.style.display = 'flex';
womanButtons.style.gap = '10px';
womanButtons.style.marginTop = '10px';

// Botão de incrementar mulheres
const addWomanButton = document.createElement('button');
addWomanButton.textContent = '+';
addWomanButton.style.fontSize = '24px';
addWomanButton.style.width = '50px';
addWomanButton.style.height = '50px';
addWomanButton.style.backgroundColor = '#4CAF50';
addWomanButton.style.color = 'white';
addWomanButton.style.border = 'none';
addWomanButton.style.borderRadius = '50%';
addWomanButton.style.cursor = 'pointer';

addWomanButton.addEventListener('click', () => {
  womanCount++;
  totalCount++;
  updateDisplay();
});
womanButtons.appendChild(addWomanButton);

// Botão de decrementar mulheres
const removeWomanButton = document.createElement('button');
removeWomanButton.textContent = '-';
removeWomanButton.style.fontSize = '24px';
removeWomanButton.style.width = '40px';
removeWomanButton.style.height = '40px';
removeWomanButton.style.backgroundColor = '#f44336';
removeWomanButton.style.color = 'white';
removeWomanButton.style.border = 'none';
removeWomanButton.style.borderRadius = '50%';
removeWomanButton.style.cursor = 'pointer';
removeWomanButton.style.marginTop = '5px';
removeWomanButton.addEventListener('click', () => {
  if (womanCount > 0) {
    womanCount--;
    totalCount--;
    updateDisplay();
  }
});
womanButtons.appendChild(removeWomanButton);

womanSection.appendChild(womanButtons);

const womanLabel = document.createElement('h3');
womanLabel.textContent = 'Mulheres';
womanSection.appendChild(womanLabel);

// Display de mulheres
const womanCountDisplay = document.createElement('input');
womanCountDisplay.type = 'text';
womanCountDisplay.value = '0';
womanCountDisplay.style.textAlign = 'center';
womanCountDisplay.style.fontSize = '24px';
womanCountDisplay.style.width = '100px';
womanCountDisplay.style.height = '40px';
womanCountDisplay.style.border = '2px solid #000';
womanCountDisplay.style.borderRadius = '5px';
womanCountDisplay.style.backgroundColor = '#f9f9f9';
womanCountDisplay.readOnly = true;
womanSection.appendChild(womanCountDisplay);

// Adicionando as seções de homens e mulheres na seção de pessoas
peopleSection.appendChild(manSection);
peopleSection.appendChild(womanSection);

// Adicionando a seção de pessoas ao container
container.appendChild(peopleSection);

// Adicionando o container à div #app
app.appendChild(container);
