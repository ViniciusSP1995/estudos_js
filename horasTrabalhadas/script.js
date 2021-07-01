function calcular(){
    
    var horas = window.document.getElementById('horas')
    var resultado = window.document.getElementById('resultado')

    var excesso, salario, limiteHoras, extra, salarioLimite

    if(horas.value <= 0) {
        alert('Digite um número maior que 0')
       
    } else if(horas.value > 50) {
        limiteHoras = 50
        excesso = Number(horas.value) - 50
        extra = excesso * 20
        salarioLimite = limiteHoras * 10
        resultado.innerHTML = `Você deve receber o total de R$ ${salarioLimite + extra} com o extra de R$ ${extra}`

    } else {
        salario = Number(horas.value) * 10
        
        resultado.innerHTML = `Você deve receber o total de R$ ${salario}`
    }
    

}

