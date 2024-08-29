function atualizarRelogio() {
    const data = new Date();
    
    let horas = String(data.getHours()).padStart(2, '0');
    let minutos = String(data.getMinutes()).padStart(2, '0');
    let segundos = String(data.getSeconds()).padStart(2, '0');
    
    const horarioAtual = `${horas}:${minutos}:${segundos}`;
    
    document.getElementById("relogio").innerText = horarioAtual;
    
    setTimeout(atualizarRelogio, 1000); // Chama a função a cada 1 segundo
}

atualizarRelogio();
