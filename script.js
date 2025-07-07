const questions = [
  { q: "What does a switch do?", o: ["Turns things on and off", "Draws pictures", "Adds numbers"], a: 0 },
  { q: "Which one is an electronic part?", o: ["Switch", "Pencil", "Eraser"], a: 0 },
  { q: "Which block is used to say something?", o: ["say Hello", "move 10 steps", "if then"], a: 0 },
  { q: "What is a variable?", o: ["A place to store information", "A type of robot", "A game"], a: 0 },
  { q: "Which block starts the code when you click the green flag?", o: ["when flag clicked", "repeat", "forever"], a: 0 },
  { q: "Which block makes decisions?", o: ["if then", "move", "say Hello"], a: 0 },
  { q: "Which block helps us make decisions?", o: ["if then", "say Hello", "when flag clicked"], a: 0 },
  { q: "What does a bulb do when there is power?", o: ["Lights up", "Turns black", "Melts"], a: 0 },
  { q: "What is Pictoblox mainly used for?", o: ["Coding and robotics", "Painting", "Watching videos"], a: 0 },
  { q: "What do we call the characters in Pictoblox?", o: ["Sprites", "Blocks", "Costumes"], a: 0 },
  { q: "Which block creates a variable?", o: ["Make a variable", "Move 10 steps", "Wait 1 second"], a: 0 },
  { q: "What is a battery used for?", o: ["To give power", "To make sound", "To code"], a: 0 },
  { q: "What can we use variables for?", o: ["To count scores", "To draw", "To paint"], a: 0 },
  { q: "What happens when we change a variable?", o: ["Its value updates", "It disappears", "It dances"], a: 0 },
  { q: "Which block is used to make a sprite move?", o: ["move 10 steps", "wait 1 second", "say Hello"], a: 0 },
  { q: "What happens when you use the wait 1 second block?", o: ["The sprite pauses", "The sprite disappears", "The sprite jumps"], a: 0 },
  { q: "Which of these is a variable name?", o: ["score", "move", "repeat"], a: 0 },
  { q: "Which part connects electricity?", o: ["Wire", "Paper", "Button"], a: 0 },
  { q: "Which of these is a Control block?", o: ["repeat", "move 10 steps", "say Hello"], a: 0 },
  { q: "What do we use to repeat actions in Pictoblox?", o: ["repeat", "wait", "say"], a: 0 },
  { q: "What color are the motion blocks?", o: ["Blue", "Yellow", "Green"], a: 0 },
  { q: "How do we stop all scripts?", o: ["stop all", "wait", "say Hello"], a: 0 },
  { q: "Which block waits for a second?", o: ["wait", "forever", "say"], a: 0 },
  { q: "What does the 'repeat' block do?", o: ["Repeats actions", "Plays music", "Draws shapes"], a: 0 },
  { q: "Which control block repeats something forever?", o: ["forever", "say Hello", "wait"], a: 0 }
];

let current = 0, score = 0;
let studentName = "";
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreSpan = document.getElementById("score");
const badge = document.getElementById("badge");
const music = document.getElementById("win-music");
const startBox = document.getElementById("start-box");

function startQuiz() {
  const nameInput = document.getElementById("student-name");
  if (nameInput.value.trim() === "") {
    alert("Please enter your name.");
    return;
  }
  studentName = nameInput.value.trim();
  startBox.classList.add("hidden");
  quizBox.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  let q = questions[current];
  questionEl.textContent = `${current + 1}. ${q.q}`;
  optionsEl.innerHTML = "";
  q.o.forEach((option, i) => {
    let btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      if (i === q.a) score++;
      current++;
      current < questions.length ? showQuestion() : showResult();
    };
    optionsEl.appendChild(btn);
  });
}

function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  const percent = Math.round((score / questions.length) * 100);
  scoreSpan.textContent = percent;

  if (percent >= 80) {
    music.play();
    badge.textContent = `${studentName}, you won a 🥇 Golden Badge!`;
  } else if (percent >= 50) {
    badge.textContent = `${studentName}, you won a 🥈 Silver Badge!`;
  } else {
    badge.textContent = `${studentName}, you won a 🥉 Bronze Badge!`;
  }
}
