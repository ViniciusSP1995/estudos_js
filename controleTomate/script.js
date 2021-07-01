var kilos = document.getElementById('kilos')
var resultado = document.getElementById('resultado')

function calcular(){
    var m = 4
    var limite = 50

    if(kilos.value < 0){
        alert('O número digitado está negativo! Tente novamente!')
    } else if (kilos.value > 50) {
        resultado.innerHTML = `Você deverá pagar multa de ${(kilos.value - limite)* m} R$`

    } else {
        resultado.innerHTML = 'Você está isento de multas!'
    }
}

