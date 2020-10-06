
// If the element with ID js is clicked , run the quiz function
document.getElementById("js").onclick = function(){
        /* 
    1. Store correct answers
    - When quiz begins, no answers are correct
    */

    let score = 0 ;


    // 2. Store the rank of a player

    let rank = "";


    /*
    3. Ask at least 5 questions
    - Store each answer in a variable
    - Keep track of the number of correct answers
    */

    questionOne = prompt("WELCOME TO THE QUIZ! \n 1. Finish the sentence: 'Feed the ...' ");
    const questionOneAnswer = "sandwich"
    if (questionOne.toUpperCase() === questionOneAnswer.toUpperCase()){
        score += 1;
    } 

    questionTwo = prompt("2. Fill in the blank: 'I'll press the ... button' ");
    const questionTwoAnswer = "red"
    if (questionTwo.toUpperCase() === "RED"){
        score += 1;
    } 

    questionThree = prompt("3. Fill in the blank: 'Jamie Jackson once ate ... sulphate' ");
    const questionThreeAnswer = "copper"
    if (questionThree.toUpperCase() === "COPPER"){
        score += 1;
    } 

    questionFour = prompt("4. Finish the sentence: 'Id be taller than all of you if I stood on my ...' ");
    const questionFourAnswer = "wallet"
    if (questionFour.toUpperCase() === "WALLET"){
        score += 1;
    } 

    questionFive = prompt("5. Fill in the blank: '... WHERE DID YOU FIND HIM?' (Use 2 spaces) ");
    const questionFiveAnswer = "hot dog dog"
    if (questionFive.toUpperCase() === "HOT DOG DOG"){
        score += 1;
    } 


    // 5. Output results to alert

    answers = prompt(`Your score was ${score}/5. Thanks for playing. Type 'answers' to see the answers(SPOILERS) or Cancel to try again.`);
    if (answers.toUpperCase() === "ANSWERS"){
        alert(`
        The answer to question 1 was 'Feed the ${questionOneAnswer}' and you said 'Feed the ${questionOne}'.
        The answer to question 2 was 'I'll press the ${questionTwoAnswer} button' and you said 'I'll press the ${questionTwo} button'.
        The answer to question 3 was 'Jamie Jackson once ate ${questionThreeAnswer} sulphate' and you said 'Jamie Jackson once ate ${questionThree} sulphate'.
        The answer to question 4 was 'Id be taller than all of you if I stood on my ${questionFourAnswer}' and you said 'Id be taller than all of you if I stood on my ${questionFour}'.
        The answer to question 5 was '${questionFiveAnswer} WHERE DID YOU FIND HIM?' and you said '${questionFive} WHERE DID YOU FIND HIM?'.
        Thanks for playing!
        `)
    }

};

