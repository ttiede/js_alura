var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(e){
    e.preventDefault();

    var campoNome = document.querySelector("#campo-nome");
    var campoPeso = document.querySelector("#campo-peso");
    var campoAltura = document.querySelector("#campo-altura");

    var novoPaciente = "<tr class='paciente'>"+
                "<td class='info-nome'>"+campoNome.value+"</td>"+
                "<td class='info-peso'>"+campoPeso.value+"</td>"+
                "<td class='info-altura'>"+campoAltura.value+"</td>"+
                "<td class='info-imc'></td>"+
             "</tr>";

    var todosPacientes = document.querySelector("table");
    todosPacientes.innerHTML +=  novoPaciente;

    var formPaciente = document.querySelector("form");
    formPaciente.reset();
});
