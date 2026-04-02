"use strict";

const questions = document.querySelectorAll('.question');
const btnStart = document.getElementById('btn-start');
const btnNext = document.getElementById('btn-next');
const btnBack = document.getElementById('btn-back');
const btnSubmit = document.getElementById('btn-submit');
const progressFill = document.querySelector('.progress-fill');
const progressLabel = document.querySelector('.progress-label');
const quizHeader = document.querySelector('.quiz-header');
const progressWrapper = document.querySelector('.progress-wrapper');
const formFooter = document.querySelector('.form-footer');

let currentQuestion = 0;

function showQuestion(index) {
    questions.forEach(q => q.classList.remove('active'));
    questions[index].classList.add('active');

const percent = Math.round(((index + 1) / questions.length) * 100);
    progressFill.style.width = percent + '%';
    progressLabel.textContent = percent + '% Complete';

btnBack.style.display = index === 0 ? 'none' : 'inline-block';

if (index === questions.length - 1) {
    btnNext.style.display = 'none';
    btnSubmit.style.display = 'inline-block';
}   else {
    btnNext.style.display = 'inline-block';
    btnSubmit.style.display = 'none';
}

}

function lisAnswered() {
    const radios = questions[currentQuestion].querySelectorAll('input[type="radio"]');
    return ![...radios].some(r => r.checked);
}

btnStart.addEventListener('click', function() {
    quizHeader.style.display = 'none';
    progressWrapper.style.display = 'block';
    formFooter.style.display = 'flex';
    showQuestion(0);

});

btnBack.addEventListener('click', function() {
    currentQuestion--;
    showQuestion(currentQuestion);
});

btnNext.addEventListener('click', function() {
    if (lisAnswered()) {
    alert('Please answer the question before proceeding.');
    return;
    }
    currentQuestion++;
    showQuestion(currentQuestion);
});

