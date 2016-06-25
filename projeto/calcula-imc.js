//calcula-imc.js

var trPacientes = document.getElementsByClassName("paciente"); //Array de trs

var posicaoAtual = 0;

while(posicaoAtual <= trPacientes.length - 1) {

    var pacienteTr = trPacientes[posicaoAtual];

    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

    var paciente = {nome : tdNome.textContent, peso : tdPeso.textContent, altura : tdAltura.textContent};

    if(paciente.altura != 0){

        var imc = paciente.peso / (paciente.altura * paciente.altura);

        var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
        tdImc.textContent = imc;

        console.log(imc);

    } else{

        console.log("Não posso executar uma divisão por 0!");
    }

    posicaoAtual++;
}
