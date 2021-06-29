
var intervalo = window.setInterval(() => {carregar()

},1000);


function carregar()
{
    var msg = window.document.getElementById('msg')
    var msgBv= window.document.getElementById('bv-msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = addZero(data.getMinutes())
    var segundos = addZero(data.getSeconds())

    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos} horas.`

    if(hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#F0D19A'
        msgBv.innerHTML = 'Tenha um ótimo dia!'

    } else if (hora >=12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#8FED68'
        msgBv.innerHTML = 'Tenha uma ótima tarde!'

    } else {
        img.src = 'noite.png'
        document.body.style.background = '#404530'
        msgBv.innerHTML = 'Tenha uma ótima noite!'
        
    }
}

function addZero(i) {
    if(i < 10) {
        i = "0" + i
    }

    return i;
}

