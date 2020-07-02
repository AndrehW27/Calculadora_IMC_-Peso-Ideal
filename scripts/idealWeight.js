function FindWeight() {

    function IdealMax(height) {
        return 24.9 * (height * height);
    }

    function IdealMin(height) {
        return 18.6 * (height * height);
    }

    let namevalue = document.getElementById("name2").value;
    let heightvalue = document.getElementById("height2").value;


    let idealMax = IdealMax(heightvalue);
    let idealMaxFixed = idealMax.toFixed(2);

    let idealMin = IdealMin(heightvalue);
    let idealMinFixed = idealMin.toFixed(2);

    console.log("namevalue: "+namevalue);
    console.log("heightvalue: "+heightvalue);
    console.log("idelaMax: "+idealMax);
    console.log("idelaMaxFixed: "+idealMaxFixed);
    console.log("idelaMin: "+idealMin);
    console.log("idelaMinFixed: "+idealMinFixed);    

    // document.getElementById("paraWeight").innerHTML = "Olá " + namevalue + ", seu peso ideal está entre " + idealMinFixed + " Kg e " + idealMaxFixed + " Kg.";
    // let newdiv2 = document.getElementById("hiddenDiv2");
    // newdiv2.style.display = "flex";

    if (Number.isNaN(idealMax) ||  namevalue =="" || heightvalue =="" ) {
        alert("Valor digitado inválido, por favor utilize somente números, ao separar as casas decimais, utilizar ponto e não vírgula.");
    } else {
        let newdiv = document.getElementById("hiddenDiv2");
        newdiv.style.display = "flex";
        document.getElementById("paraWeight").innerHTML = "Olá " + namevalue + ", seu peso ideal está entre " + idealMinFixed + " Kg e " + idealMaxFixed + " Kg.";

    }


}



