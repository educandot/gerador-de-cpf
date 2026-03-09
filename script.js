function gerarCPF() {
    const random = () => Math.floor(Math.random() * 9);
    let n = Array.from({length: 9}, random); // Gera 9 números aleatórios

    n.push(calcularDigito(n, 10)); // Calcula 1º DV
    n.push(calcularDigito(n, 11)); // Calcula 2º DV

    const cpfFormatado = n.join('').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    document.getElementById('cpf-display').innerText = cpfFormatado;
}

function calcularDigito(numeros, pesoInicial) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i] * (pesoInicial - i);
    }
    let resto = (soma * 10) % 11;
    return resto === 10 || resto === 11 ? 0 : resto;
}