//calcula-imc.js

var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");

var paciente = {peso : tdPeso.textContent, altura : tdAltura.textContent};

if(paciente.altura != 0){
    var imc = paciente.peso / (paciente.altura * paciente.altura);

    //buscando o elemento "imc-2"
    var tdImc = document.getElementById("imc-2");
    tdImc.textContent = imc; //atualizando o elemento com o IMC calculado

    console.log(imc);
} else{
    console.log("Não posso executar uma divisão por 0!");
}
