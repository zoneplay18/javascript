function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verfique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-M.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-M.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-M.png')
            } else {
                img.setAttribute('src', 'foto-idoso-M.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-F.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-F.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-F.png')
            } else {
                img.setAttribute('src', 'foto-idoso-F.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}