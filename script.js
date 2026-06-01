const cards = [
  {
    question: "Was bedeutet Demenz?",
    answer: "Eine fortschreitende Beeinträchtigung von Gedächtnis, Denken und Alltagshandlungen."
  },
  {
    question: "Was ist im Umgang mit Menschen mit Demenz wichtig?",
    answer: "Geduld, Wertschätzung, einfache Sprache und eine ruhige Umgebung."
  },
  {
    question: "Warum ist Biografiearbeit wichtig?",
    answer: "Sie hilft, Verhalten besser zu verstehen und individuell auf die Person einzugehen."
  }
];

let currentCard = 0;
let flipped = false;

function showCard() {
  document.getElementById("question").textContent = cards[currentCard].question;
  document.getElementById("answer").textContent = cards[currentCard].answer;
  document.getElementById("question").classList.remove("hidden");
  document.getElementById("answer").classList.add("hidden");
  flipped = false;
}

function flipCard() {
  flipped = !flipped;

  document.getElementById("question").classList.toggle("hidden");
  document.getElementById("answer").classList.toggle("hidden");
}

function nextCard() {
  currentCard = (currentCard + 1) % cards.length;
  showCard();
}

showCard();
