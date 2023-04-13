function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'ftbbmenino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'ftjovemhomem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'fthomemadulto.png')
            } else {
                img.setAttribute('src', 'ftidoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'ftbbmenina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'ftjovemmulher.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'ftmulheradulta.png')
            } else {
                img.setAttribute('src', 'ftidosa.png')
            }
        }
        res.textAlign = 'center'   
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}



    