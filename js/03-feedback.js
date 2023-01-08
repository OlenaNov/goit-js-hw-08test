// import throttle from 'lodash.throttle';
// var throttle = require('lodash.throttle');
import throttle from 'node_modules/lodash.throttle';

const formFeedback = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');

formFeedback.addEventListener('input', throttle(onFormFeedbackSave, 500));

function onFormFeedbackSave() {
    console.log(messageTextarea.value);
    localStorage.setItem('feedback-form-state', JSON.stringify({ email: emailInput.value, message: messageTextarea.value }))
};

formFeedback.addEventListener('submit', onFormFeedbackSubmit);

function onFormFeedbackSubmit(e) {
    e.preventDefault();
    const feedbackFormObj = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(feedbackFormObj);
    localStorage.removeItem('feedback-form-state');
    formFeedback.reset()
};

window.addEventListener('load', onFormFeedbackGet);

function onFormFeedbackGet() {

    const feedbackFormState = JSON.parse(localStorage.getItem('feedback-form-state')) || "";

    if(feedbackFormState) {
        emailInput.value = feedbackFormState.email;
        messageTextarea.value = feedbackFormState.message;
    };
}