function Calculate() {

  function IMC(weight, height) {
    return weight / (height * height);
  }

  let namevalue = document.getElementById("name").value;
  let weightvalue = document.getElementById("weight").value;
  let heightvalue = document.getElementById("height").value;

  let imc = IMC(weightvalue, heightvalue);
  let imcfixed = imc.toFixed(2)

  if (Number.isNaN(imc)) {
    alert("Valor digitado inválido, por favor utilize somente números, ao separar as casas decimais, utilizar ponto e não vírgula.");
  } else {

          let newdiv = document.getElementById("hiddenDiv");
          newdiv.style.display = "flex";

    if (imcfixed < 18.6) {
      document.getElementById("paraImc").innerHTML = "Olá "+namevalue+", seu IMC é: "+ imcfixed + ". Segundo a classificação da OMS você está abaixo do peso ideal.";
    } else if (imcfixed < 24.9) {
      document.getElementById("paraImc").innerHTML = "Olá "+namevalue+", seu IMC é: "+ imcfixed + ". Segundo a classificação da OMS você está no peso ideal.";
    } else if (imcfixed < 29.9) {
      document.getElementById("paraImc").innerHTML = "Olá "+namevalue+", seu IMC é: "+ imcfixed + ". Segundo a classificação da OMS você está levemente acima do peso ideal.";
    } else if (imcfixed < 34.9) {
      document.getElementById("paraImc").innerHTML = "Olá "+namevalue+", seu IMC é: "+ imcfixed + ". Segundo a classificação da OMS você tem obesidade de grau I.";
    } else if (imcfixed < 39.9) {
      document.getElementById("paraImc").innerHTML = "Olá "+namevalue+", seu IMC é: "+ imcfixed + ". Segundo a classificação da OMS você você tem obesidade de grau II.";
    } else {
      document.getElementById("paraImc").innerHTML = "Olá "+namevalue+", seu IMC é: "+ imcfixed + ". Segundo a classificação da OMS você você tem obesidade de grau III.";
    }
  }
}










