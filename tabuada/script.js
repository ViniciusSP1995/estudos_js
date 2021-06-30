function tabuada() {
    let numero = document.getElementById('txtn')
    let tabuada = document.getElementById('selTab')

    if(numero.value.length == 0) {
        window.alert("Por favor, digite um número!")
    } else {
        let n = Number(numero.value) 
        let c = 1
        tabuada.innerHTML = '' //limpar

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n * c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}