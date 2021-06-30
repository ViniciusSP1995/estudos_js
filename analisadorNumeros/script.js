let numero = document.getElementById('fNum')
let lista = document.getElementById('fLista')
let resultado = document.getElementById('resultado')
let valores = []

function isNumero(n) {
 if(Number(n) >= 1 && (Number(n) <= 100)) {
     return true
 } else {
     return false
 }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if(isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value)) //adcionar número no vetor
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        lista.appendChild(item) //dar o valor visual para a lista
        resultado.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    numero.value = '' // zerar o input de adicionar o número
    numero.focus() // voltar o foco para o input de adcionar número
}

function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        let totalElementos = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]


            if (valores[pos] > maior)
                maior = valores[pos]
                if (valores[pos] < menor)
                menor = valores[pos]

        }

        media = soma / totalElementos

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${totalElementos} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores digitados é ${media}` 
    }
}