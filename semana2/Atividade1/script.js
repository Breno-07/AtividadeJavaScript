function exibirDataAtual() {
    const data = new Date();
    
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    
    const diaSemana = diasDaSemana[data.getDay()];
    const dia = data.getDate();
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();
    
    const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
    
    document.getElementById("dataAtual").innerText = dataFormatada;
}

exibirDataAtual();
