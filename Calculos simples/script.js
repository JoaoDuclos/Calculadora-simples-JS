var tn1 = window.document.getElementById('txtn1')
var tn2 = window.document.getElementById('txtn2')
var soma = window.document.getElementById('button')
var res = window.document.getElementById('res')
function somar() {
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerText = `Resultado: ${s}`
}
function subtrair() {
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 - n2
    res.innerText = `Resultado: ${s}`
}
function multiplicar() {
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 * n2
    res.innerText = `Resultado: ${s}`
}
function dividir() {
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 / n2
    var rest = n1 % n2
    res.innerText = `Resultado: ${s} e o seu resto é ${rest}`
}
