
let score = 0;
let rounds = 10;
let currentRound = 0;
let selectedModule = '';
let currentAnswer = '';
let selectedQuestions = [];
let startTime;



// Module Questions
let module1Questions = [
    { "question": "What is the place value of 7 in 47.382?", "answer": "tens" },
    { "question": "What is 0.6 as a fraction?", "answer": "3/5" },
    { "question": "What digit is in the thousandths place in 5.349?", "answer": "9" },
    { "question": "How do you write 7/10 as a decimal?", "answer": "0.7" },
    { "question": "Which is greater: 0.86 or 0.806?", "answer": "0.86" },
    { "question": "What is 5.407 in word form?", "answer": "five and four hundred seven thousandths" },
    { "question": "Convert 0.375 to a fraction.", "answer": "3/8" },
    { "question": "What is the value of 2 in 6.234?", "answer": "two tenths" },
    { "question": "Round 8.492 to the nearest tenth.", "answer": "8.5" },
    { "question": "Write 1/4 as a decimal.", "answer": "0.25" },
    { "question": "Which is smaller: 0.09 or 0.12?", "answer": "0.09" },
    { "question": "What is the place value of 3 in 9.385?", "answer": "tenths" },
    { "question": "What is 3.9 as a fraction?", "answer": "39/10" },
    { "question": "Express 14.07 in expanded form.", "answer": "10 + 4 + 0.07" },
    { "question": "Round 6.958 to the nearest hundredth.", "answer": "6.96" }
];

let module2Questions = [
    { "question": "Solve: 4.25 + 3.8", "answer": "8.05" },
    { "question": "Solve: 12.67 - 5.89", "answer": "6.78" },
    { "question": "Multiply: 3.4 × 2.5", "answer": "8.5" },
    { "question": "Multiply: 0.75 × 4.8", "answer": "3.6" },
    { "question": "Divide: 6.72 ÷ 3", "answer": "2.24" },
    { "question": "Divide: 9.36 ÷ 1.2", "answer": "7.8" },
    { "question": "A box weighs 2.5 lbs. What is the total weight of 8 boxes?", "answer": "20 lbs" },
    { "question": "$7.50 per yard. How many yards can you buy for $45?", "answer": "6 yards" },
    { "question": "Multiply: 3/4 × 2/5", "answer": "6/20" },
    { "question": "Multiply: 5/6 × 3/8", "answer": "15/48" },
    { "question": "1/2 cup flour per batch. How much flour for 3/4 of a batch?", "answer": "3/8 cup" },
    { "question": "A ribbon is 5/8 yard long. If cut into 4 equal pieces, how long is each?", "answer": "5/32 yard" },
    { "question": "Solve: 15.6 - 8.239", "answer": "7.361" },
    { "question": "Divide: 5.6 ÷ 0.8", "answer": "7" },
    { "question": "What is 3.75 as a fraction?", "answer": "15/4" }
];

let module3Questions = [
    { "question": "Convert 3/4 to a decimal.", "answer": "0.75" },
    { "question": "What is 0.75 as a fraction?", "answer": "3/4" },
    { "question": "Add: 2/5 + 3/5", "answer": "1" },
    { "question": "Subtract: 7/8 - 1/8", "answer": "3/4" },
    { "question": "Multiply: 4/9 × 3/5", "answer": "4/15" },
    { "question": "Divide: 3/4 ÷ 2", "answer": "3/8" },
    { "question": "Write 0.85 as a fraction.", "answer": "17/20" },
    { "question": "Find the area of a rectangle with length 12 cm and width 4 cm.", "answer": "48cm" },
    { "question": "Find the area of a triangle with base 10 cm and height 6 cm.", "answer": "30cm" },
    { "question": "How many sides does a regular pentagon have?", "answer": "5" },
    { "question": "Find the perimeter of a square with a side length of 8 inches.", "answer": "32in" },
    { "question": "Sally has 3/4 of a pizza. She eats 1/2 of it. How much is left?", "answer": "1/4" },
    { "question": "A bag of candy weighs 1.2 kg and is shared equally among 4 friends. How much does each get?", "answer": "0.3kg" },
    { "question": "Each pencil costs $0.60. How much do 7 pencils cost?", "answer": "$4.20" },
    { "question": "A farmer has 3/5 of an acre. He plants crops on 2/3 of it. How much land is planted?", "answer": "2/5" }
];

let module4Questions = [
    { "question": "Add: 6.48 + 3.57", "answer": "10.05" },
    { "question": "Subtract: 9.75 - 4.28", "answer": "5.47" },
    { "question": "Multiply: 2.5 × 4.6", "answer": "11.5" },
    { "question": "Divide: 7.2 ÷ 1.8", "answer": "4" },
    { "question": "Write 0.375 as a fraction.", "answer": "3/8" },
    { "question": "Add: 5/8 + 3/8", "answer": "1" },
    { "question": "Subtract: 7/10 - 3/10", "answer": "2/5" },
    { "question": "Multiply: 3/4 × 2/5", "answer": "3/10" },
    { "question": "Divide: 5/6 ÷ 1/2", "answer": "5/3" },
    { "question": "Convert 14/3 to a mixed number.", "answer": "4 2/3" },
    { "question": "Find the volume of a prism with dimensions 4 cm × 3 cm × 5 cm.", "answer": "60cm" },
    { "question": "Find the volume of a box that is 10 in × 2 in × 3 in.", "answer": "60in" },
    { "question": "Find the volume of a cube with a side length of 6 cm.", "answer": "216cm" },
    { "question": "A swimming pool has dimensions 12 m × 5 m × 3 m. What is its volume?", "answer": "180m" },
    { "question": "A container has a volume of 150 cm³ and a height of 5 cm. What is the area of its base?", "answer": "30cm" }
];

let module5Questions = [
        { "question": "Jackie and Ron build cube structures. Jackie’s is taller, but Ron says they have the same volume. Who is correct?", "answer": "ron" },
        { "question": "A rectangular prism has a volume of 378 ft, height of 3 ft, and length of 63 ft. What is its width?", "answer": "2" },
        { "question": "A cube has a height of 4 meters. What is its volume?", "answer": "64" },
        { "question": "A cube is 5 ft long, 4 ft high, and 3 ft wide. What is its volume?", "answer": "60ft" },
        { "question": "Jaquavion's tower is 5 ft wide and 6 ft tall. Manuel's is 6 ft wide and 7 ft tall. Whose tower has greater area?", "answer": "manuel" },
        { "question": "An aquarium is 5m long, 2m wide, and 3m high. What is its volume?", "answer": "30m" },
        { "question": "A cube has a side length of 3 ft. What is its volume?", "answer": "27ft" },
        { "question": "A garden is 8m long, 6m wide, and 0.5m deep. How much soil is needed?", "answer": "24m" },
        { "question": "Kermit’s house has a side length of 500 and volume of 999. What is its height?", "answer": "1.998" },
        { "question": "Calculate: 16 ½ × 4 ⅕", "answer": "69 3/10" },
        { "question": "A rectangular prism is 5 ft long and 7 ft tall. What is its volume?", "answer": "35ft" },
        { "question": "Calculate: 86m × 93m × 27m", "answer": "215,946m" },
        { "question": "A square has an area of 100 ft. What could its perimeter be?", "answer": "40ft" },
        { "question": "A rectangle has a length of 4 and height of 10. What is its volume?", "answer": "40" },
        { "question": "Calculate: 6m × 1.5m", "answer": "9m" }
];

let module6Questions = [
    { "question": "X = 28 more than Y, Y = 21. What is X?", "answer": "49" },
    { "question": "M = -7 less than Y, Y = 109. What is M?", "answer": "102" },
    { "question": "H = 35 more than Y, Y = 9973", "answer": "10008" },
    { "question": "X = 11 x Y, Y = 21 What Is X?", "answer": "231" },
    { "question": "L = 293, Lx42=?", "answer": "224" },
    { "question": "A = 15 x B, B = 12 What Is A?", "answer": "180" },
    { "question": "C = 24 x D, D = 9 What Is C?", "answer": "216" },
    { "question": "E = 7 x F, F = 18 What Is E?", "answer": "126" },
    { "question": "G = 25 x H, H = 4 What Is G?", "answer": "100" },
    { "question": "I = 13 x J, J = 17 What Is I?", "answer": "221" },
    { "question": "K = 32 x L, L = 6 What Is K?", "answer": "192" },
    { "question": "M = 19 x N, N = 11 What Is M?", "answer": "209" },
    { "question": "O = 14 x P, P = 13 What Is O?", "answer": "182" },
    { "question": "Q = 28 x R, R = 5 What Is Q?", "answer": "140" },
    { "question": "S = 22 x T, T = 8 What Is S?", "answer": "176" },
    { "question": "U = 16 x V, V = 14 What Is U?", "answer": "224" },
    { "question": "W = 9 x X, X = 27 What Is W?", "answer": "243" },
    { "question": "Y = 31 x Z, Z = 3 What Is Y?", "answer": "93" },
    { "question": "A1 = 26 x B1, B1 = 7 What Is A1?", "answer": "182" },
    { "question": "C1 = 29 x D1, D1 = 10 What Is C1?", "answer": "290" }
];


// Function to show the module selection menu
function showMenu() {
    document.getElementById("container").innerHTML = `
    <div class="manny" id="manny">
        <h1>Select a Module</h1>
    </div>
        <button class="menu-button" onclick="startCountdown(1)">Module 1: Place Value & Decimal Fractions</button>
        <button class="menu-button" onclick="startCountdown(2)">Module 2: Multi-Digit Whole Number & Decimal Operations</button>
        <button class="menu-button" onclick="startCountdown(3)">Module 3: Addition & Subtraction of Fractions</button>
        <button class="menu-button" onclick="startCountdown(4)">Module 4: Multiplication & Division of Fractions & Decimals</button>
        <button class="menu-button" onclick="startCountdown(5)">Module 5: Addition and Multiplication with Volume and Area</button>
        <button class="menu-button" onclick="startCountdown(6)">Module 6: Problem Solving with the Coordinate Plane</button>
        <button class="btm" id="btm" onclick="goBackToMenu()">Back To Menu</button>
    `;
}

// Function to open the game menu and hide the module menu
function openMenu() {
    document.getElementById('menu').style.display = 'block';  // Show the game menu
    document.getElementById('container').style.display = 'none';  // Hide the module content
}

// Function to go back to the game menu and hide the module content
function goBackToMenu() {
    document.getElementById('menu').style.display = 'block';  // Show the game menu
    document.getElementById('container').style.display = 'none';  // Hide the module content
}


function openModules() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('container').style.display = 'block';
    showMenu(); // Calls the function from script.js to show module selection
}

function openPopup(id) {
    document.getElementById(id).style.display = "block";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

// Function to handle the countdown before the module starts
function startCountdown(moduleNumber) {
    let countdownFrames = [ "3","3.","3..","2","2.","2..","1","1.","1..", "Go!"];
    let index = 0;

    function showNextFrame() {
        if (index < countdownFrames.length) {
            document.getElementById("container").innerHTML = `
                <h1>${countdownFrames[index]}</h1>
            `;
            index++;
            setTimeout(showNextFrame, 280);
        } else {
            startModule(moduleNumber);
        }
    }

    showNextFrame(); // Start the countdown animation
}

// Function to start the selected module
function startModule(moduleNumber) {
    score = 0;
    currentRound = 0;

    let allQuestions = moduleNumber === 1 ? module1Questions
                    : moduleNumber === 2 ? module2Questions
                    : moduleNumber === 3 ? module3Questions
                    : moduleNumber === 4 ? module4Questions
                    : moduleNumber === 5 ? module5Questions
                    : module6Questions;

    // Shuffle and select questions
    selectedQuestions = allQuestions.sort(() => Math.random() - 0.5).slice(0, rounds);
    selectedModule = `Module ${moduleNumber}`;
    startTime = new Date().getTime(); // Record start time

    document.getElementById("container").innerHTML = `
        <h1>${selectedModule}</h1>
        <p id="problem"></p>
        <input type="text" id="answer" placeholder="Enter your answer">
        <div class="keypad">
            <button onclick="appendToAnswer('1')">1</button>
            <button onclick="appendToAnswer('2')">2</button>
            <button onclick="appendToAnswer('3')">3</button>
            <button onclick="appendToAnswer('4')">4</button>
            <button onclick="appendToAnswer('5')">5</button>
            <button onclick="appendToAnswer('6')">6</button>
            <button onclick="appendToAnswer('7')">7</button>
            <button onclick="appendToAnswer('8')">8</button>
            <button onclick="appendToAnswer('9')">9</button>
            <button onclick="clearAnswer()">♻️</button>
            <button onclick="appendToAnswer('0')">0</button>
            <button onclick="checkAnswer()">✅</button>
        </div>
        <p id="feedback"></p>
        <p id="score">Points: 0</p>
        <p id="time">Time: 0s</p>
    `;
    generateQuestion();

    // Listen for keyboard input
    document.addEventListener("keydown", handleKeyboardInput);
}

// Function to generate the next question
function generateQuestion() {
    document.getElementById("problem").innerText = selectedQuestions[currentRound].question;
    currentAnswer = selectedQuestions[currentRound].answer;
    clearAnswer()
}

// Function to append numbers or symbols to the answer field (with lowercase conversion)
function appendToAnswer(value) {
    document.getElementById("answer").value += value.toLowerCase(); // Ensure lowercase
}

// Function to clear the answer field
function clearAnswer() {
    document.getElementById("answer").value = '';
}

// Function to check the user's answer
function checkAnswer() {
    let userAnswer = document.getElementById("answer").value.trim();
    let elapsedTime = Math.floor((new Date().getTime() - startTime) / 1000); // Time in seconds

    // Reset the fade-out class before showing new feedback
    document.getElementById("feedback").classList.remove('fade-out');
    document.getElementById("feedback").innerText = ""; // Clear old feedback

    // Check answer and display feedback
    if (userAnswer === currentAnswer) {
        score++;
        document.getElementById("feedback").innerText = "✅ You Got It Correct!";
    } else {
        document.getElementById("feedback").innerText = `❌ The Correct Answer Is ${currentAnswer}`;
    }

    // Display the updated score and time
    document.getElementById("score").innerText = `Points: ${score}`;
    document.getElementById("time").innerText = `Time: ${elapsedTime}s`;

    // Fade out the feedback after 1.5 seconds
    setTimeout(() => {
        document.getElementById("feedback").classList.add('fade-out');
    }, 1500); // Wait for 1.5 seconds before fading out the feedback

    currentRound++;

    if (currentRound < rounds) {
        generateQuestion();
    } else {
        document.getElementById("container").innerHTML = `
            <h1>Game Over!</h1>
            <p>Your Score: ${score} / ${rounds}</p>
            <p>Time Taken: ${elapsedTime} seconds</p>
            <button class="menu-button" onclick="startCountdown(${selectedModule.replace('Module ', '')})">Replay</button>
            <button class="menu-button" onclick="showMenu()">Main Menu</button>
        `;
    }
}

// Function to handle keyboard input
function handleKeyboardInput(event) {
    let key = event.key; // Get the pressed key

    // Prevent default action for the keypress (so it doesn't type twice)
    event.preventDefault();

    if (/^[/.a-z0-9]$/i.test(key)) { 
        // Allow only letters and numbers and append to the answer field
        appendToAnswer(key);  // Pass the key to appendToAnswer
    } else if (event.key === "Enter") {
        checkAnswer();
        clearAnswer();
    } else if (event.key === "Backspace") {
        removeLastCharacter();
    }
}


// Function to append characters to the answer field
function appendToAnswer(value) {
    document.getElementById("answer").value += value;
}

// Function to remove the last character from the answer field
function removeLastCharacter() {
    let answerField = document.getElementById("answer");
    answerField.value = answerField.value.slice(0, -1);
}

// Add event listener for keyboard input
document.addEventListener("keydown", handleKeyboardInput);


// Start game when page loads
window.onload = showMenu;
