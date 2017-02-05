// State
var state = {
  questions: [
    {
      question: "Understeer can happen under braking, or accelleration. What definition below BEST describes understeer?",
      answers: ["The need to turn the steering wheel more", "When steering input has little to no affect on vehicle direction", "When the front tires are pushed beyond their grip limit, necessitating further driving input adjustments", "When the front of the car goes off track first"],
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
      correctAnsIndex: 0
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
  incorrectTotal: 0,
  currentQuestionIndex: 0,
  currentChoice: "",
  route: "start",
  lastAnswerCorrect: false,
  feedbackRandom: 0
};

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

function readCorrectAnswer(state) {
  var quesIndex = readQuestionIndex(state);
  var ansIndex = readCorrectAnsIndex(state, quesIndex);
  return state.questions[quesIndex].answers[ansIndex];
}

function getAnswerChoice(state, answersElement, choiceItemID, submitButton) {
  answersElement.on('click', choiceItemID, function(event) {
    var choice = $(event.currentTarget.closest('label')).text();
    showElement(submitButton);
    state.currentChoice = choice;
    });
};

// Update State

function resetState(state) {
  state.correctTotal = 0;
  state.currentQuestionIndex = 0;
  state.route = "start";
  state.lastAnswerCorrect = false;
  state.feedbackRandom = 0;
  return state;
};

function updateQuestionIndex(state) {
  state.currentQuestionIndex++;
  return state.currentQuestionIndex;
};

function checkAnswer(choice, correctAns) {
  return choice === correctAns;
}

function updateScore(state, isCorrect) {
  if (isCorrect === true) {
    state.correctTotal = state.correctTotal + 1;
  } else {
    state.incorrectTotal = state.incorrectTotal + 1;
  };
};

// Render
function renderHeader(state, headerElement) {
  var content = "Question " + (state.currentQuestionIndex + 1) + " of " + state.questions.length;
  headerElement.html(content);
}

function renderQuestion(state, questionElement) {
  var content = "<p id='question'>" + state.questions[state.currentQuestionIndex].question + "</p>";
  questionElement.html(content);
};

function renderAnswers(state, answersElement) {
  var answersArray = state.questions[state.currentQuestionIndex].answers;
  var content = answersArray.map(function(item) {
    return '<label class="choice js-choice-item"><input type="radio" name="answer" class="js-choice">' + item + '</label><br>';
  });
  answersElement.html(content);
};

function renderResult(state, resultsElement, isCorrect) {
  resultsElement.removeClass("hidden");
  if (isCorrect === true) {
    var content = '<h2 id="correctStatement" class="resultsText">Great Job! That\'s correct!</h2>';
    resultsElement.html(content);
    } else {
      content = '<h2 id="incorrectStatement" class="resultsText">Oops... maybe need to brush up on that one</h2>' +
      '<h3>The correct answer is: <h4><em>' + readCorrectAnswer(state) + '</h4></em></h3>';
      resultsElement.html(content);
    };
};

function renderFinalScore(state, resultsElement) {
  var content = '<div id="finalScore"><h2 class="resultsText">Final score: ' + state.correctTotal + ' correct, ' + state.incorrectTotal + ' incorrect</h2></div>';
  resultsElement.html(content);;
};

function showElement(target) {
    target.removeClass("hidden");
  // toggle between Start, Submit, Continue, Finish
};

function hideElement(target) {
  target.addClass("hidden");
};

// Handle
function handleStart(state, startButton, startTextElement, headerElement, questionElement, answersElement, submitButton) {
  startButton.click(function(event) {
    resetState(state);
    startTextElement.addClass("hidden");
    renderHeader(state, headerElement);
    headerElement.removeClass("hidden");
    renderQuestion(state, questionElement);
    renderAnswers(state, answersElement);
    hideElement(startButton);
  });
};

function handleChoice (state, answersElement, submitButton, choiceItemID) {
    state.currentChoice = getAnswerChoice(state, answersElement, choiceItemID, submitButton);
};

function handleSubmit(state, headerElement, questionElement, submitButton, continueButton, finishButton, resultsElement) {
  submitButton.click(function(event) {
    var choice = state.currentChoice;
    var correctAns = readCorrectAnswer(state);
    var isCorrect = checkAnswer(choice, correctAns);
    renderResult(state, resultsElement, isCorrect);
    updateScore(state, isCorrect);
    hideElement(submitButton);
    if (state.currentQuestionIndex <= 3) {
      showElement(continueButton);
    } else if (state.currentQuestionIndex === 4){
      showElement(finishButton);
    };

  // need to stop event listener
  });
};

function handleContinue(state, headerElement, questionElement, answersElement, submitButton, continueButton, resultsElement) {
  continueButton.click(function(event) {
    hideElement(resultsElement);
    updateQuestionIndex(state);
    hideElement(continueButton);
    renderHeader(state, headerElement);
    renderQuestion(state, questionElement);
    renderAnswers(state, answersElement);
  });
};

function handleFinish(state, finishButton, resultsElement, headerElement, questionElement, answersElement, newGameButton) {
  finishButton.click(function() {
    hideElement(finishButton);
    hideElement(headerElement);
    hideElement(questionElement);
    hideElement(answersElement);
    renderFinalScore(state, resultsElement);
    showElement(newGameButton);
  });
};

function handleNewGame(newGameButton, resetLocation) {
  newGameButton.click(function(event) {
    resetLocation.reload(true);
  });
};

// On Page Load
var startTextElement = $(".js-start-text");
var headerElement = $(".js-header");
var questionElement = $(".js-question-element");
var answersElement = $("form[name='the-choices']");
var resultsElement = $(".results-element");
var choiceItemID = (".js-choice");

var startButton = $("#js-start");
var submitButton = $("#js-submit");
var continueButton = $("#js-continue");
var finishButton = $("#js-finish");
var newGameButton = $("#js-new-game");
var resetLocation = window.location;

$(function() {
  handleStart(state, startButton, startTextElement, headerElement, questionElement, answersElement, submitButton);
  handleChoice(state, answersElement, submitButton, choiceItemID);
  handleSubmit(state, headerElement, questionElement, submitButton, continueButton, finishButton, resultsElement);
  handleContinue(state, headerElement, questionElement, answersElement, submitButton, continueButton, resultsElement);
  handleFinish(state, finishButton, resultsElement, headerElement, questionElement, answersElement, newGameButton);
  handleNewGame(newGameButton, resetLocation);
});
