var nossosTrs = document.getElementsByClassName("paciente");

for(var posicaoDoTrAtual = 0; posicaoDoTrAtual <= nossosTrs.length - 1; posicaoDoTrAtual++){
    var trAtual = nossosTrs[posicaoDoTrAtual];
    var nomeTd = trAtual.getElementsByClassName("info-nome")[0]; // pega tr do nome do paciente atual
    var pesoTd = trAtual.getElementsByClassName("info-peso")[0]; // pega tr do peso do paciente atual
    var alturaTd = trAtual.getElementsByClassName("info-altura")[0]; // pega tr do altura do paciente atual
    var imcTd = trAtual.getElementsByClassName("info-imc")[0]; // pega tr do imc do paciente atual

    var paciente = {
        nome : nomeTd.textContent,
        peso : pesoTd.textContent,
        altura : alturaTd.textContent
    }

    if(paciente.altura != 0){
        var imcDoPaciente = paciente.peso / (paciente.altura * paciente.altura);

        imcTd.textContent = imcDoPaciente;

        console.log(imcDoPaciente); // 25
    }else{
        console.log("Não posso executar uma divisão por 0!");
    }

}
