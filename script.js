function verificar() {
    var anoAtual = new Date().getFullYear();
    var fAno = window.document.getElementById('txtano');
    var resultado = window.document.getElementById('res');

    if(fAno.value.length == 0 || Number(fAno.value) > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fSex = window.document.getElementsByName('radsex');
        var idade = anoAtual - Number(fAno.value);
        var sexo = '';
        var img = window.document.getElementById('imagem');

        if(fSex[0].checked) {
            sexo = 'Homem';
            if(idade < 5) {
                img.src = 'imagens/bebe-menino.jpg';
            } else if(idade < 12) {
                img.src = 'imagens/menino-crianca.jpg';
            } else if(idade < 30) {
                img.src = 'imagens/homem-jovem.jpg';
            } else if(idade < 60) {
                img.src = 'imagens/homem-adulto.jpg';
            } else {
                img.src = 'imagens/homem-idoso.jpg';
            }
        } else if(fSex[1].checked) {
            sexo = 'Mulher';
            if(idade < 5) {
                img.src = 'imagens/bebe-menina.jpg';
            } else if(idade < 12) {
                img.src = 'imagens/menina-crianca.jpg';
            } else if(idade < 30) {
                img.src = 'imagens/mulher-jovem.jpg';
            } else if(idade < 60) {
                img.src = 'imagens/mulher-adulta.jpg';
            } else {
                img.src = 'imagens/mulher-idosa.jpg';
            }
        }

        resultado.style.textAlign = 'center';
        resultado.innerHTML = `<strong>Detectamos ${sexo} com ${idade} anos de idade!</strong>`;
        resultado.appendChild(img);
        
    }
}