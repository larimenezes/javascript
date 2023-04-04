function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha1.png'
        document.body.style.background = '#FAC953'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde1.png'
        document.body.style.background = '#D2817C'
    } else {
        img.src = 'noite1.png'
        document.body.style.background = '#5C466C'
    }
}