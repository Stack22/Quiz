// State
var state = [
  {
    question: 0,
    answer: "",
    correct: 0,
    incorrect: 0
  }
];

// Create State
function startState() {
  // make question: 1 (or id string?)
  // make answer: answer string
  // make correct: 0
  // make incorrect: 0
};

// Read State
function readQuestionNum() {
  // return current question id
};

function readAnswer() {
  // return answer string
};

function readCorrect() {
  // return correct current total
};

function readIncorrect() {
  // return incorrect current total
};

// Update State
function updateQuestionNum() {
  // make current question id +1 (or update id string using loop int)
};

function updateAnswer() {
  // make current answer = updated Q answer
};

function updateCorrect() {
  // make correct total +1
};

function updateIncorrect() { // if/else?
  // make incorrect total +1
};

// Delete State

// Render
function renderStart() {
  // Show start view w/start button visible
};

function renderQuestion() {
  // remove start view/start button
  // replace with question view
};

function renderScore() {
  // show score totals after 1st question Submit
};

function renderFinalScore() { // if/else?
  // show final score after final question Submit
};

function renderButton() {
  // toggle between Start, Submit, Next Question, Finish
}

// Handle
function handleStart() {
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
