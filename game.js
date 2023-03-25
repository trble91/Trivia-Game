const question0 = {
  question: "Where is the birthplace of Hip-Hop?",
  answers: {
    choices: ["Bronx, NY", "Detroit, MI", "Atlanta, GA", "Silver Springs, MD"],
    correct: "Bronx, NY",
  },
};

const question1 = {
  question: "Who is regarded as the Godfather of Hip-Hop?",
  answers: {
    choices: [
      "DJ Mustard",
      "DJ Kool Herc",
      "DJ AM (R.I.P)",
      "DJ Jazzy Jeff & The Fresh Prince",
    ],
    correct: "DJ Kool Herc",
  },
};

const question2 = {
  question: "Name one of the five elements of Hip-Hop?",
  answers: {
    choices: ["Twerking", "MC Battling", "Graffiti Art", "Dancing"],
    correct: "Graffiti Art",
  },
};

const question3 = {
  question: "Alongside DJ Run and DMC who else is a member of Run DMC?",
  answers: {
    choices: ["Biz Markie", "Jam Master Jay", "Akon", "DMX"],
    correct: "Jam Master Jay",
  },
};

const question4 = {
  question:
    "The album, Flesh of My Flesh, Blood of My Blood , was released by which hip hop group or artist?",
  answers: {
    choices: ["DMX", "Master P", "Kanye West", "Jay-Z"],
    correct: "DMX",
  },
};

const question5 = {
  question: "Who is the first Billionaire in Hip-Hop?",
  answers: {
    choices: ["Kanye West", "Michael B. Jordan", "Rihanna", "Jay-Z"],
    correct: "Jay-Z",
  },
};

const question6 = {
  question: "Brad Terrence Jordan is better known as what?",
  answers: {
    choices: ["Trick Daddy", "DMC", "Scarface", "Wiz Khalifa"],
    correct: "Scarface",
  },
};

const question7 = {
  question:
    "How many Diamond records (10x's Platinum) are in Eminem's Catalogue?",
  answers: {
    choices: ["6", "3", "2", "5"],
    correct: "2",
  },
};

const question8 = {
  question: "Which Notorious B.I.G album was released during his lifetime?",
  answers: {
    choices: ["No Way Out", "Born Again", "Life After Death", "Ready to Die"],
    correct: "Ready to Die",
  },
};

const question9 = {
  question: "Pras is a member of which NJ-based band, formed in 1994?",
  answers: {
    choices: [
      "The Porgies",
      "All Dash Digital",
      "The Fugees",
      "Naughty-by-Nature",
    ],
    correct: "The Fugees",
  },
};

const question10 = {
  question: "In what year was The Parental Advisory label introduced by the Recording Industry Association of America?",
  answers: {
    choices: [
      "1986",
      "1978",
      "1985",
      "1989",
    ],
    correct: "1985",
  },
};

const question11 = {
  question: "What is the time between the mid-1980s and mid-1990s known as regarding Hip-Hop?",
  answers: { 
    choices: [
      "The Golden Age",
      "The Rebirth",
      "The Sample Years",
      "The Prime Years",
    ],
    correct: "The Golden Age",
  },
};

const question12 = {
  question: "What subgenre started the blend of Hip-Hop and R&B?",
  answers: {
    choices: [
      "New Jack Swing",
      "Trap & B",
      "Boom Bap",
      "Chipmunk Sampling",
    ],
    correct: "New Jack Swing",
  },
};

const question13 = {
  question: "This female singer is regarded as the Queen of Hip-Hop Soul. Who is she?",
  answers: {
    choices: [
      "Beyonce",
      "Amerie",
      "Ashanti",
      "Mary J. Blige",
    ],
    correct: "Mary J. Blige",
  },
};

const question14 = {
  question: "This female is regarded as the Queen of Rap. Who is she?",
  answers: {
    choices: [
      "Lil' Kim",
      "Cardi B",
      "NIcki Minaj",
      "Queen Latifah ",
    ],
    correct: "NIcki Minaj",
  },
};

const question15 = {
  question: "What was the name of The Game's debut album in 2005?",
  answers: {
    choices: [
      "The Game",
      "The Truth",
      "The Show",
      "The Documentary",
    ],
    correct: "The Documentary",
  },
};

const question16 = {
  question: "Which hip hop star was the voice of Reptar on Rugrats?",
  answers: {
    choices: [
      "Busta Rhymes",
      "Q-Tip",
      "Biz Markie",
      "Doug E. Fresh",
    ],
    correct: "Busta Rhymes",
  },
};

const question17 = {
  question: "Which of these albums from Nas has no tracks produced by DJ Premier?",
  answers: {
    choices: [
      "It Was Written",
      "Stillmatic",
      "God's Son",
      "Nastradamus",
    ],
    correct: "God's Son",
  },
};

const question18 = {
  question: "Which producer graduated from Harvard before their music career took off?",
  answers: {
    choices: [
      "Diddy",
      "Ryan Leslie",
      "Swizz Beatz",
      "Steven Jordan",
    ],
    correct: "Ryan Leslie",
  },
};

const question19 = {
  question: "John Jackson is better known to his fans as?",
  answers: {
    choices: [
      "RIck Ross",
      "Fabaolous",
      "Pusha T",
      "Lil' Yatchy",
    ],
    correct: "Fabaolous",
  },
};

const question20 = {
  question: "This hit was written for Snoop Dogg & Dr. Dre by Jay-Z. Which song is it?",
  answers: {
    choices: [
      "The Chronic",
      "Gin & Juice",
      "Still Dre",
      "Drop It Like It's Hot",
    ],
    correct: "Still Dre",
  },
};

const question21 = {
    question: "This Hip-Hop Legend, produced Soul4Real's Candy Rain",
    answers: {
      choices: [
        "Heavy D",
        "Slick Rick",
        "Rakim",
        "Spoonie G",
      ],
      correct: "Heavy D",
    },
  };
  
const questions = [
  question0,
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
  question11,
  question12,
  question13,
  question14,
  question15,
  question16,
  question17,
  question18,
  question19,
  question20,
  question21,
];

let questionIndex = 0

///
////
let startButton = document.querySelector(".start");
let nextButton = document.querySelector(".next");
let checkButton = document.querySelector(".check");

function startGame() {
    displayQuestion()
    startButton.style.display = "none"
    nextButton.classList.remove("hide")
    checkButton.classList.remove("hide")
}

function handleNextQuestion(){
    questionIndex++
    displayQuestion()
}

function displayQuestion() {
  /* template literals / template strings are a great way to interpolate
    HTML elements with the DOM
    */

  let questionDiv = document.querySelector(".question");
  questionDiv.innerHTML = "";

//   let text = document.querySelector(".questions");
  let question = questions[questionIndex].question
  let choices = questions[questionIndex].answers.choices;
  // shuffle choices [Bonus]

  let questionText = `
    <div class="content">
        <h1>${question}</h1>
        <h3>Click One</h3>
        <ul>
        <input type="radio" name="choice" value="${choices[0]}"> ${choices[0]} <br>
        <input type="radio" name="choice" value="${choices[1]}"> ${choices[1]} <br>
        <input type="radio" name="choice" value="${choices[2]}"> ${choices[2]} <br>
        <input type="radio" name="choice" value="${choices[3]}"> ${choices[3]} <br>
        </ul>
    </div>
   `;
  // dot notation to reference different positions of the object
  // Clears the inner HTML after each text insertion

  // Appends character info to the end
  questionDiv.insertAdjacentHTML("beforeend", questionText);


}

function checkAnswer(){
    let userChoice = document.querySelector("input[name=choice]:checked").value;
    if (userChoice === questions[questionIndex].answers.correct){

      let checkDiv = document.querySelector(".check");
      checkDiv.innerHTML = "";

      let answerText = "You got it right!!!";

      checkDiv.insertAdjacentHTML("afterend", answerText);

      answerText.innerHTML = "";
      
        // What do you want to do when they get it right?
    } else {

      let wrongDiv = document.querySelector(".check");
      wrongDiv.innerHTML = "";

      let wrongText = "My Guy! Seriously!!";

      wrongDiv.insertAdjacentHTML("afterend", wrongText);
     
        // What do you want to do when they get it wrong?
    }

}



startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", handleNextQuestion)
checkButton.addEventListener("click", checkAnswer)