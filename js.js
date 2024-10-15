var altura = document.getElementById('Altura');
var peso = document.getElementById('Peso');

function calcularImc() {
    var valorAA = altura.value;
    var pesoBB = peso.value;
    var valorAIM = valorAA / 100;
    var IMC = (pesoBB / (valorAIM * valorAIM)).toFixed(2);

    if (IMC < 18.5) {
        window.alert("IMC está abaixo do peso!");
    } else if (IMC < 24.9) {
        window.alert("IMC está normal!");
    } else if (IMC < 29.9) {
        window.alert("Sobrepeso!");
    } else if (IMC < 39.9) {
        window.alert("Obesidade Tipo I!");
    } else if (IMC >= 39.9 && IMC < 500) {
        window.alert("Obesidade Tipo II!");
    } else if (IMC == 500) {
        window.alert("Obesidade Tipo III!");
    } else {
        window.alert("Valor de IMC inválido.");
    }

    console.log(IMC);
}
