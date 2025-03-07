function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();

    if (elemento != null && element.localname === 'audio') {
           elemento.play();
        } 
        else{
            console.log('Elemento não encontrado ou seletor inválido')
        }
    }

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(event){


        if (event.code === 'Space' || event.code === 'Enter'){
        tecla.classList.add('ativa');
        }
    }
        
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}