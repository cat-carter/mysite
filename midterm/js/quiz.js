"use strict";

const questions = document.querySelectorAll('.question');
const btnStart = document.getElementById('btn-start');
const btnNext = document.getElementById('btn-next');
const btnBack = document.getElementById('btn-back');
const btnSubmit = document.getElementById('btn-submit');
const progressFill = document.querySelector('.progress-fill');
const progressLabel = document.querySelector('.progress-label');
const quizSection = document.querySelector('.quiz-section');
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

function isAnswered() {
    const radios = questions[currentQuestion].querySelectorAll('input[type="radio"]');
    return ![...radios].some(r => r.checked);
}

btnStart.addEventListener('click', function() {
    document.getElementById('hero-section').style.display = 'none';
    quizSection.style.display = 'block';
    progressWrapper.style.display = 'block';
    formFooter.style.display = 'flex';
    showQuestion(0);
});

btnBack.addEventListener('click', function() {
    currentQuestion--;
    showQuestion(currentQuestion);
});

btnNext.addEventListener('click', function() {
    if (isAnswered()) {
    alert('Please answer the question before proceeding.');
    return;
    }
    currentQuestion++;
    showQuestion(currentQuestion);
});

const resultData = {
    Visual: {
        title: 'Visual Learner',
        description: 'You learn best through images, diagrams, charts, and videos. Try using colour-coded notes, mind maps, and visual aids when studying.'
    },
    Auditory: {
        title: 'Auditory Learner',
        description: 'You learn best by listening and discussing. Try reading aloud, joining study groups, and listening to recorded lectures.'
    },
    Kinesthetic: {
        title: 'Kinesthetic Learner',
        description: 'You learn best through hands-on practice. Try building things, role-playing scenarios, and taking regular breaks to move.'
    },
    Reflective: {
        title: 'Reflective Learner',
        description: 'You learn best through reading and writing. Try journaling, making detailed notes, and reviewing material regularly.'
    }
};

document.getElementById('quiz-form').addEventListener('submit', function(e){
    e.preventDefault();

    const scores = { Visual: 0, Auditory: 0, Kinesthetic: 0, Reflective: 0 };

    questions.forEach(function(question) {
        const selected = question.querySelector('input[type="radio"]:checked');
        if (selected) {
            const value = selected.value;
            if (scores.hasOwnProperty(value)) {
                scores[value]++;
            }
        }
    });

    // Optional: process scores and show result
    console.log(scores);
});


