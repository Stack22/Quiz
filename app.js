// State
var state = {
  questions: [
    {
      question: "Understeer can happen under braking, or accelleration. What definition below BEST describes understeer?"
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
