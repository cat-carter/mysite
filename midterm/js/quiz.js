"use strict"

const questions = document.querySelectorAll('.question');
const btnNext = document.getElementById('btn-next');
const btnBack = document.getElementById('btn-back');
const btnSubmit = document.getElementById('btn-submit');
const progressfill = document.querySelector('.progress-fill');
const progressLanel = document.querySelector('.progress-label');

let currentQuestion = 0;

function showQuestion(index) {

questions[index].classList.add('active');

const percent = Math.round(((index + 1) / questions.length) * 100);
    progressfill.style.width = percent + '%';
    progressLanel.textContent = percent + '% Complete';

btnBack.style.display = index === 0 ? 'none' : 'inline-block';

if (index === questions.length - 1) {
    btnNext.style.display = 'none';
    btnSubmit.style.display = 'inline-block';
}   else {
    btnNext.style.display = 'inline-block';
    btnSubmit.style.display = 'none';
}

btnBack.addEventListener('click', function() {
    currentQuestion--;
    showQuestion(currentQuestion);
});

showQuestion(0);

btnNext.addEventListener('click', function() {
    if (lisAnswered()) {
    alert('Please answer the question before proceeding.');
    return;
    }
    currentQuestion++;
    showQuestion(currentQuestion);
});