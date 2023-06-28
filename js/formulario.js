//quitar formulario et volver a la pagina principale

const btnClose= document.querySelector('.btn-close');
btnClose.addEventListener('click',() =>{
    window.location.href='/index.html';

});


const form = document.querySelector('.formulario');
const btnNext = document.querySelector('.btn-next');
const questions = document.querySelectorAll('.form-group');
const btnEnviar = document.querySelector('.btn-enviar');
let currentQuestion = 0;

addEventListener('load', () =>{
  btnEnviar.setAttribute('disabled','true')
})

// Masquer toutes les questions sauf la première
questions.forEach((question, index) => {
  if (index !== currentQuestion) {
    question.style.display = 'none';
  }
});

btnNext.addEventListener('click', () => {
  const currentAnswer = questions[currentQuestion].querySelector('select').value;

  if (currentAnswer === '') {
    alert('¡Responda la pregunta antes de pasar a la siguiente!');
    return;
  }

  localStorage.setItem(`question${currentQuestion}`, currentAnswer);
  questions[currentQuestion].style.display = 'none';
  currentQuestion++;

  if (currentQuestion < questions.length && currentQuestion<=6) {
    questions[currentQuestion].style.display = 'block';
  } else {
    // Toutes les questions ont été répondues, rediriger vers une autre page
    // window.location.href = 'traitemetform.html';
    console.log('terminamos')
    btnEnviar.removeAttribute('disabled');
  }
});

// Sélectionner le bouton "Envoyer"

btnEnviar.addEventListener('click', () => {
  
  // Vérifier si toutes les questions ont été répondues
  const unansweredQuestions = document.querySelectorAll('.form-group select[value=""]');
  
  if (unansweredQuestions.length < 7) {
    console.log('ok')
    location.href = 'traitemetform.html';
    return; 
  }

});









