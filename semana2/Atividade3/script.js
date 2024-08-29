function verificarPalindromo() {
    let texto = document.getElementById("textoPalindromo").value;
    texto = texto.toLowerCase().replace(/[\W_]/g, ''); // Remove espaços e pontuação

    const textoInvertido = texto.split('').reverse().join('');
    
    if (texto === textoInvertido) {
        alert("O texto é um palíndromo!");
    } else {
        alert("O texto não é um palíndromo.");
    }
}
