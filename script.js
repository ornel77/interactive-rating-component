const form = document.querySelector('form');
const ratingCard = document.querySelector('#ratingCard');
const thanksCard = document.querySelector('#thanksCard');


const ratings = document.querySelector('.ratings');
const notes = document.querySelectorAll('input[name="rating"]');
const resultText = document.querySelector('.result') 



let score

form.addEventListener('submit', (e) => {
    e.preventDefault()
    notes.forEach(function(note) {
        if(note.checked) {
            score = note.value;
        }
    })
    ratingCard.style.display = 'none';
    thanksCard.style.display = 'block'
    resultText.innerHTML = `You selected ${score} out of 5`
})