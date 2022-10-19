const btn = document.getElementById('btn')
const sectionChilds = document.querySelector('section').children
const btnNumbers = document.getElementsByClassName('btn-number')
const option = document.getElementById('option')

// Adding the event to each btn-number
for (let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].addEventListener('click', currentOption)    
}

// Adding function to btn-submit 
btn.addEventListener('click', submit)

function currentOption(e){
    option.innerHTML = `You selected ${e.originalTarget.innerText} out of 5`
}

function submit() {
    for (let i = 0; i < sectionChilds.length; i++) {
        sectionChilds[i].classList.toggle("hidden")
    } 
}


