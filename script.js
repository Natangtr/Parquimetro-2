class Parquimetro {

    calcular(valor) {

        if (isNaN(valor) || valor < 1) {
            return "Valor insuficiente";
        }

        let tempo = 0;
        let troco = 0;

        if (valor >= 3) {
            tempo = 120;
            troco = valor - 3;
        } 
        else if (valor >= 1.75) {
            tempo = 60;
            troco = valor - 1.75;
        } 
        else {
            tempo = 30;
            troco = valor - 1;
        }

        return `Tempo: ${tempo} minutos | Troco: R$ ${troco.toFixed(2)}`;
    }
}

// cria objeto
const parquimetro = new Parquimetro();

// botão funcionando
document.getElementById("btnCalcular").addEventListener("click", function(){

    const valor = parseFloat(document.getElementById("valor").value);

    const resultado = parquimetro.calcular(valor);

    document.getElementById("resultado").textContent = resultado;

});