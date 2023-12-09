const quizForm = document.getElementById('quiz-form');
const alertBox = document.getElementById('alert');

quizForm.addEventListener('submit', function (event) {
event.preventDefault();

const correct = ['"Hi"', 'Recursion', 'element.dataset.count']; /*/ initialise les réponses correctes /*/
 
let score = 0; /*/ initialise le score à zéro /*/

const MyAnswers = [
    document.querySelector('input[name="answer-1"]:checked').value,
    document.querySelector('input[name="answer-2"]:checked').value,
    document.querySelector('input[name="answer-3"]:checked').value
  ]; /*/ constante pour les réponses que je vais choisir /*/

MyAnswers.forEach((MyAnswers, index) => {
if (MyAnswers === correct[index]) { /*/ pour chaque réponse à une question, si elle est correcte (voire constante correct).../*/
    score++; /*/ alors on augmente le score /*/
 }
});

if (score === 3) { /*/ si toutes nos réponses sont correctes, /*/
    alertBox.classList.add('correct');
    alertBox.innerHTML = '<div>Congratulations !!</div>You got them all right !'; /*/ alors affiche le message de félicitations en vert /*/
  } 
else {
    alertBox.classList.add('alert');
    alertBox.textContent = `Try again...`; /*/ sinon, message "essaies encore" en rouge /*/
  }
  alertBox.style.display = 'block'; /*/ affiche les messages /*/
});
