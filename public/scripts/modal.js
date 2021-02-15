// CAPTURE VALUES
const modal = document.querySelector('.result-modal');
const exitModal = document.querySelector('.close');

// FUNCTIONS

function closeModal(){
    document.querySelector('.result-modal').style.animation = 'modalClose 300ms ease-in-out';

    setTimeout(()=>{
        document.querySelector('.result-modal').parentElement.removeChild(document.querySelector('.result-modal'))
    }, 200)
}

function basal(){
    // INPUTS
    const name = document.querySelector('input[name="name"]').value;
    const age = document.querySelector('input[name="age"]').value;
    const weight = document.querySelector('input[name="weight"]').value;
    const heigth = document.querySelector('input[name="heigth"]').value;
    const genre = document.querySelector('#genre').value;
    const error = document.querySelector('.error');


    // CALC
    var calc = Math.round(66 + (13.8 * weight) + (5 * heigth) - (6.8 * age));
    // IF

    // VALIDAÇÃO DE PREENCHIMENTO DOS INPUTS
    if(age.length <= 0 || weight.length <= 0 || heigth.length <= 0 || genre == "genre"){
        if(error){
            return
        }
        var typeError = `                   
            <div class="error">
                <p>Campos inválidos!</p>
            </div>
        `
        document.querySelector('.basal-content').insertAdjacentHTML("beforeend", typeError)
    }
    
    // VALIDAÇÃO DO GÊNERO MASCULINO
    if(genre == 0){
        // VALIDAÇÃO PARA TER APENAS 1 MODAL NA PÁGINA
        if(modal){
            return
        }
        if(error){
            error.parentElement.removeChild(error)
        }
        var output = `
        <div class="result-modal">
        <span class="close" onclick="closeModal()">
            <span></span>
            <span></span>

            </span>
            <h1>Olá <span>${name}</span>!</h1>
            <p>Sua taxa metabolica basal é de <br> <span>${calc}</span> calorias.</p>
        </div>
        `
        document.querySelector('.basal-content').insertAdjacentHTML("afterbegin", output)
    }
    // VALIDAÇÃO DE GÊNERO FEMININO
    else if(genre == 1){
        calc = Math.round(655 + (9.6 * weight) + (1.8 * heigth) - (4.7 * age));
        if(modal){
            return
        }
        var output = `
        <div class="result-modal">
        <span class="close" onclick="closeModal()">
            <span></span>
            <span></span>

            </span>
            <h1>Olá <span>${name}</span>!</h1>
            <p>Sua taxa metabolica basal é de <br> <span>${calc}</span> calorias.</p>
        </div>
        `
        document.querySelector('.basal-content').insertAdjacentHTML("afterbegin", output)
    }
    else{
        return 
    }
}