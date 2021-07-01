var indice = document.getElementById('indice')
var resultado = document.getElementById('resultado')

function calcular(){
    if(indice.value <= 0){
        alert('O número informado está negativo ou vazio! Tente novamente!')
        
    } else if(indice.value >= 0.30 && indice.value < 0.39) {
        resultado.innerHTML = 'Indústrias do primeiro grupo, suas atividades estão suspensas devido ao índice de poluição ter atingido ou ultrapassado o limite de 0,3'

    } else if (indice.value >= 0.40 && indice.value < 0.49) {
        resultado.innerHMTL = 'Indústrias do primeiro e segundo grupo, suas atividades estão suspensas devido ao índice de poluição ter atingido ou ultrapassado o limite de 0,4'

    } else if (indice.value >= 0.5) {
        resultado.innerHTML = 'Atenção todas as indústrias, atividades interrompidas devido ao índice de poluição ter atingido ou ultrapassado o limite de 0,5'
    } else {
        resultado.innerHTML = 'As atividades podem seguir normalmente!'
    }
}

