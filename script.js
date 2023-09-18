const startbtn = document.querySelector(".startbtn");
const infobox = document.querySelector(".startbox")
const questionbox = document.querySelector(".questionbox")

// startbtn. = ()=>{
//     infobox.classList.add("activeInfo");
// }

function startQuiz(){
    console.log("hello")
    questionbox.classList.remove("hidden");
    infobox.classList.add("hidden");
    displayQuestion();
}


startbtn.addEventListener("click",startQuiz)




const questions = [//Sets questions and answers/choices//

    {
        question: "Which country has won the most world cups?",
        answers:
            [
                { text: "Germany", correct: false },
                { text: "France", correct: false },
                { text: "Brazil", correct: true },
                { text: "Italy", correct: false },
            ]
    },
    {
        question: "Who won the Superbowl in 1985 and is largely considered the best team in NFL history?",
        answers:
            [
                { text: "Packers", correct: false },
                { text: "Bears", correct: true },
                { text: "Patriots", correct: false },
                { text: "Steelers", correct: false },
            ]
    },
    {
        question: "Which of these players have won 6 NBA championships without a loss?",
        answers:
            [
                { text: "Michael Jordan", correct: true },
                { text: "Steph Curry", correct: false },
                { text: "Lebron James", correct: false },
                { text: "Shaquille O'Neil", correct: false },
            ]
    },
    {
        question: "Which athlete has the most Gold Medals?",
        answers:
            [
                { text: "Jesse Owens", correct: false },
                { text: "Usain Bolt", correct: false },
                { text: "Nadia Comaneci", correct: false },
                { text: "Michael Phelps", correct: true },
            ]
    },
    {
        question: "Which of these players has lost the most NBA Championship Series?",
        answers:
            [
                { text: "Michael Jordan", correct: false },
                { text: "Kobe", correct: false },
                { text: "Stephen Curry", correct: false },
                { text: "Lebron James", correct: true },
            ]
    },
    {
        question: "Which Country has won the most Gold Medals in the Olympics?",
        answers:
            [
                { text: "Russia", correct: false },
                { text: "Australia", correct: false },
                { text: "United States of America", correct: true },
                { text: "China", correct: false },
            ]
    }

];


const questionEl = document.getElementById("question");
const choiceEl = document.getElementById("choices");
const time = document.querySelector('h1');
let seconds= 60;

time.innerHTML = seconds;

const countDown = setInterval (()=>{
    seconds--;
    time.innerHTML = seconds;
},1000)

function hideall(){
    questionEl.setAttribute("hidden", true);
    choiceEl.setAttribute("hidden", true);
    time.setAttribute("hidden", true);

}







var currentQuestionIndex = 0;
var score = 0;

// function startQuiz(){
//     currentQuestionIndex= 0;
//     score = 0;
//      nextButton.innerHTML = "next";
//      displayQuestion();
// }

function displayQuestion(){
    // resetApp();
    choiceEl.innerHTML= "";
    var currentQuestion = questions[currentQuestionIndex];
    var questionNumber = currentQuestionIndex + 1;
    questionEl.innerHTML = questionNumber + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        choiceEl.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click" , selectAnswer)
        
    });


}

// function resetApp(){
//     nextButton.style.display= "none";
//     while (choiceEl.firstChild){
//         choiceEl.removeChild(choiceEl.firstChild);
//     }
// }

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        currentQuestionIndex++
        displayQuestion()
    }else{ 
            
        }

        currentQuestionIndex++

        displayQuestion()
    }
Array.from(choiceEl.children).forEach(button =>{
    if (button.dataset.correct === "true"){
        button.classList.add("Correct");
    }
})

function endQuiz(){
    hideall
    
}



// startQuiz();



