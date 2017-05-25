
var CapitalTomado;


//Obtener los datos ingresados
function getDatos(){
    var getCapital= document.getElementById("inputMonto").value;
    var getTasa= document.getElementById("inputTasa").value;
    var getMeses = document.getElementById("inputPlazo").value;

    parseFloat(getCapital).toFixed(2);
    parseFloat(getTasa).toFixed(2);
    parseFloat(getMeses).toFixed(2);



    var getInteresCliente= CalcInteresCliente(getTasa); //Metodo que retorna el interes que se le cobrara al cliente;
    var getCuotas = Cuotas(getCapital, getInteresCliente, getMeses); //Calcula las cuotas fijas
    CapitalTomado = getCapital; // El Capital tomado lo globalizo para mantener el valor y solo reduzco el que se toma por el input.
    var totalInteresApagar;
    totalInteresApagar=0; // El totlal de interes a pagar dependiendo de los meses
    var tbody= document.getElementById("bodyTable");
    tbody.innerHTML="";
    var cont; // contador para el numero de fila en la tabla.
    cont=0;
    getMeses ++;
    for(var a=1; a< getMeses; a++){


        //Interes
        var getgananciaBanco = CalcInteresBanco(getCapital, getInteresCliente);
        //Amortizacion
        var getbalance = BalancePagoPrestamo(getgananciaBanco, getCuotas);
        parseFloat(getbalance).toFixed(3);
        //Saldo
        getCapital= CalcCapital(getCapital, getbalance);
        parseFloat(getCapital).toFixed(3);

        totalInteresApagar= parseFloat(totalInteresApagar) + parseFloat(getgananciaBanco);  // Solo el interes que se va a pagar sin sumar el capital

        var tr= document.createElement("tr");
        var tdId= document.createElement("td");
        var tdCapital= document.createElement("td");
        var tdIntereses = document.createElement("td");
        var tdCuotas= document.createElement("td");
        var tdBalance = document.createElement("td");


          cont++;
          //Informacion que ingresara al body de la tabla.
              tdId.innerHTML= cont;
              tdCapital.innerHTML = "$RD"+" "+ getbalance.toString();
              tdIntereses.innerHTML= "$RD"+" "+ getgananciaBanco.toString();
              tdCuotas.innerHTML = "$RD"+" "+ getCuotas.toString();
              tdBalance.innerHTML = "$RD"+ " "+ getCapital.toString();



              tr.appendChild(tdId);
              tr.appendChild(tdCapital);
              tr.appendChild(tdIntereses);
              tr.appendChild(tdCuotas);
              tr.appendChild(tdBalance);

              tbody.appendChild(tr);



    }

    var capitalPlusInteres = parseFloat(CapitalTomado)+ parseFloat(totalInteresApagar);

    var tdTotalInteres= document.createElement("td");

    var tdCapitalMasInteres= document.createElement("td");

    tdTotalInteres.innerHTML="$RD"+ " "+ parseFloat(totalInteresApagar).toFixed(2).toString();
    tdCapitalMasInteres.innerHTML="$RD"+ " "+ parseFloat(capitalPlusInteres).toFixed(2).toString();

    tr.appendChild(tdTotalInteres);
    tr.appendChild(tdCapitalMasInteres);
}

//Balance restante.
function BalancePagoPrestamo(PgananciaBanco, PcuotaFija){
  var opBalancePrestamo = parseFloat(PcuotaFija)-parseFloat(PgananciaBanco);


  return parseFloat(opBalancePrestamo).toFixed(2);

}

//Calcular el interes al que el cliente va a pagar mensual

function CalcInteresCliente(Ptasa){
  var interes = parseFloat(Ptasa)/12.00;
  return interes;
}


//Calcular lo que el banco se ganara por cada pago realizado mensual.
function CalcInteresBanco( Pcapital,   PinteresCliente){

  var OpgananciaBanco= (parseFloat(Pcapital) * parseFloat(PinteresCliente)) /100;
  return parseFloat(OpgananciaBanco).toFixed(2);

}

// Calcular el capital
function CalcCapital(Pcapital, Pbalance){
  Pcapital= parseFloat(Pcapital) - parseFloat(Pbalance);

  return parseFloat(Pcapital).toFixed(2);
}


//Calcular las cuotas fijas mensuales
function Cuotas( Pcapital, PinteresCliente, Pmeses){
  parseFloat(PinteresCliente)
  var i = PinteresCliente /= 100;
  var pago =(parseFloat(Pcapital) * (Math.pow((1+i),parseFloat(Pmeses))*i) / (Math.pow((1+i),parseFloat(Pmeses)) - 1 ));

  return parseFloat(pago).toFixed(2);
}


function LimpiaCampos(){
  var getCapital= document.getElementById("inputMonto").value =" ";
  var getTasa= document.getElementById("inputTasa").value=" ";
  var getMeses = document.getElementById("inputPlazo").value=" ";
  var tbody=document.getElementById("bodyTable");
  tbody.innerHTML="";


}
