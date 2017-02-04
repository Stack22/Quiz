// State
var state = {
  questions: [
    {
      question: "Understeer can happen under braking, or accelleration. What definition below BEST describes understeer?",
      answers: ["The need to turn the steering wheel more", "When steering input has little to no affect on vehicle direction", "When the front tires are pushed beyong their grip limit, necessitating further driving input adjustments", "When the front of the car hits the wall"],
      correctAnsIndex: 2
    },
    {
      question: "Why is it generally considered bad form to use a lower gear to help slow a vehicle under braking?",
      answers: ["Because engines aren't designed to slow cars", "Because it can lead to an unbalanced vehicle", "Too many actions at once can lead to mistakes", "All of the above"],
      correctAnsIndex: 3
    },
    {
      question: "What is 'The Racing Line'?",
      answers: ["Any path on the track used to gain or maintain an advantage in position or time", "the 'worn' part of any race circuit", "The line used in qualifying by top-level racers"],
      correctAnsIndex: 2
    },
    {
      question: "True or False: The fastest limit around any corner involves some loss of grip",
      answers: ["True", "False"],
      correctAnsIndex: 0
    },
    {
      question: "Is 'Rubbing Racing'?",
      answers: ["Yes", "No"],
      correctAnsIndex: 0
    }
  ],
  praises: ["Kick ass man!", "Aaaand... Across The Line!", "Well done old chap!"],
  admonishments: ["Sorry bud, if ya ain't first, you're last", "DOH! Try harder", "Juuuuust a bit outside"],
  correctTotal: 0,
  currentQuestionIndex: 0,
  route: "start",
  lastAnswerCorrect: false,
  feedbackRandom: 0
};

var choiceTemplate =
  '<label class="choice js-choice"><input type="radio" name="answer"> </label><br>'

// Read State
function readQuestionIndex(state) {
  return state.currentQuestionIndex;
};

function readQuestion(state, questionIndex) {
  return state.questions[questionIndex].question;
};

function readAnswers(state, questionIndex) {
  return state.questions[questionIndex].answers;
  // returns array of answers
};

function readCorrectAnsIndex(state, questionIndex) {
  return state.questions[questionIndex].correctAnsIndex;
  // return index of correct answer w/in answers array
};

// Update State

function resetState(state) {
  state.correctTotal = 0;
  state.currentQuestionIndex = 0;
  state.route = "start";
  state.lastAnswerCorrect = false;
  state.feedbackRandom = 0;
  return state;
}
function updateQuestionIndex(state) {
  state.currentQuestionIndex++;
  return state.currentQuestionIndex;
  // make current question id +1 (or update id string using loop int)
};

function renderHeader(state, headerElement) {
  var content = "Question " + (state.currentQuestionIndex) + " of " + state.questions.length;
  headerElement.html(content);
}
// Render

function renderQuestion(state, questionElement) {
  var content = "<p>" + state.questions[state.currentQuestionIndex].question + "</p>";
  questionElement.html(content);
};

function renderAnswers(state, answersElement) {
  var answersArray = state.questions[state.currentQuestionIndex].answers;
  var content = answersArray.map(function(item) {
    return '<label class="choice js-choice"><input type="radio" name="answer">' + item + '</label><br>';
  });
  answersElement.html(content);
};

function renderScore() {
  // show score totals after 1st question Submit
};

function renderFinalScore() { // if/else?
  // show final score after final question Submit
};

function showButton(button) {
    button.removeClass("hidden");
  // toggle between Start, Submit, Continue, Finish
};

function hideButton(button) {
  button.addClass("hidden");
};

// Handle
function handleStart(state, startButton, startTextElement, headerElement, questionElement, answersElement, submitButton) {
  startButton.click(function(event) {
    startTextElement.addClass("hidden");
    updateQuestionIndex(state);
    renderHeader(state, headerElement);
    headerElement.removeClass("hidden");
    renderQuestion(state, questionElement);
    renderAnswers(state, answersElement);
    showButton(submitButton);
    hideButton(startButton);
  });
  // renderQuestion()
  // renderButton()
};

function handleSubmit() {
  // updateCorrect()
  // updateIncorrect()
  // renderButton()
};

function handleContinue() {
  //
};

function handleFinish() { // if/else?

};

/* Event Listeners
  - On Start Click
  - On Submit Click
  - On Continue Click
  - On New Quiz Click
*/

// On Page Load
$(function() {
  var startTextElement = $(".js-start-text");
  var headerElement = $(".js-header");
  var questionElement = $(".js-question-element");
  var answersElement = $(".js-answers-element");
  var buttonsElement = $(".js-buttons-element");
  var startButton = $("#js-start");
  var submitButton = $("#js-submit");
  var continueButton = $("#js-continue");
  var finishButton = $("#js-finish");

  handleStart(state, startButton, startTextElement, headerElement, questionElement, answersElement, submitButton);
  handleSubmit(state, submitButton, headerElement, questionElement, answersElement, continueButton, finishButton);
});

// var questionIndex = readQuestionIndex(state);
// console.log(readQuestion(state, questionIndex));
// console.log(readAnswers(state, questionIndex));
// console.log("before: " + state.currentQuestionIndex + " ... After: " + updateQuestionIndex(state));
