var msg = window.document.getElementById('msg');
var img = window.document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
msg.innerHTML = `<p>Agora são ${hora} hora!</p>`
if (hora >= 0 && hora < 12) {
    img.src = 'manha1.png'
    document.body.style.background = '#a68139'
} else if (hora >= 12 && hora <= 18) {
    img.scr = 'tarde1.png'
    document.body.style.background = '#5a8050'
} else {
    img.scr = 'noite1.png'
    document.body.style.background = '#3f6687'
}
