function somar() {
    var num1 = document.getElementById("01").valueAsNumber;
    var num2 = document.getElementById("02").valueAsNumber;
    var res1 = num1 + num2
    document.getElementById("resultadoSO").textContent = res1;
    console.log(res1);
}
function subtrair() {
    var num3 = document.getElementById("03").valueAsNumber;
    var num4 = document.getElementById("04").valueAsNumber;
    var res2 = num3 - num4
    document.getElementById("resultadoS").textContent = res2;
    console.log(res2);
}
function multiplicacao() {
    var num5 = document.getElementById("05").valueAsNumber;
    var num6 = document.getElementById("06").valueAsNumber;
    var res3 = num5 * num6
    document.getElementById("resultadoM").textContent = res3;
    console.log(res3);
}
function dividir() {
    var num7 = document.getElementById("07").valueAsNumber;
    var num8 = document.getElementById("08").valueAsNumber;
    var res4 = num7 / num8
    document.getElementById("resultadoD").textContent = res4;
    console.log(res4);
}
function media() {;
    var num1 = document.getElementById("09").valueAsNumber;
    var num2 = document.getElementById("10").valueAsNumber;
    var num3 = document.getElementById("11").valueAsNumber;
    var res5 = (num1+num2+num3)/3;
    document.getElementById("resultadoME").textContent = res5;
    console.log(res5);
}