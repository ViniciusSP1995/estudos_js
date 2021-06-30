 function contar () {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var resultado = document.getElementById('resultado')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Faltam dados!')
        resultado.innerHTML = 'Impossível contar!'
    } else {
        resultado.innerHTML = 'Contando...'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }


        if (i < f) {
            //Contagem crescente
            for(var c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F449}` // emoji indicador
            }
            
            resultado.innerHTML += `\u{1F3C1}` // bandeira final
        } else {
            // Contagem regressiva
            for(var c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{1F449}` // emoji indicador
            }

            resultado.innerHTML += `\u{1F3C1}` // bandeira final
        }
        }
 
 }