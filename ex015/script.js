function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', '')
            } else if (idade < 21) {
                img.setAttribute('src', '')
            } else if (idade < 50) {
                img.setAttribute('src', '')
            } else { 
                img.setAttribute('src', '')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', '')
            } else if (idade < 21) {
                img.setAttribute('src', '')
            } else if (idade < 50) {
                img.setAttribute('src', '')
            } else {
                img.setAttribute('src', '')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos!`
        res.appendChild(img)
    }

}




    