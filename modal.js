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
    const name = document.querySelector('input[name="name"]').value;const age = document.querySelector('input[name="age"]').value;
    const weight = document.querySelector('input[name="weight"]').value;
    const heigth = document.querySelector('input[name="heigth"]').value;
    const genre = document.querySelector('#genre').value;

    // CALC
    const calc = Math.round(66 + (13.8 * weight) + (5 * heigth) - (6.8 * age));
    // IF
    if(genre == 0){
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
}


/* 66 + (13,8 x peso em kg.) + (5 x altura em cm) - (6,8 x idade em anos). */