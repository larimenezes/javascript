function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') 
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'ftbbmenino.png')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src', 'ftjovemhomem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fthomemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'ftidoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'ftbbmenina.png')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src', 'ftjovemmulher.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'ftmulheradulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'ftidosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}