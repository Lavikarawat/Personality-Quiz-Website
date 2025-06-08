function calculateResult() {
    // Initialize result object to store scores for each personality type
    var result = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0
    };

    // Loop through each question (1-10) to check selected answers
    for (var i = 1; i <= 10; i++) {
        var selectedAnswer = document.querySelector(`input[name="question${i}"]:checked`);
        
        // If no answer is selected for a question, alert the user and stop
        if (!selectedAnswer) {
            alert(`Please answer question ${i}`);
            return; // Stop the function if any question is unanswered
        }

        // Increase the score for the selected answer
        result[selectedAnswer.value]++;
    }

    // Find the maximum score
    var maxScore = Math.max(result.A, result.B, result.C, result.D, result.E);

    // Determine personality type based on the highest score
    var personalityType;
    if (result.A === maxScore) {
        personalityType = "You are an Introvert: thoughtful, reserved, and enjoy solitude.";
    } else if (result.B === maxScore) {
        personalityType = "You are an Extrovert: social, energetic, and thrive in group settings.";
    } else if (result.C === maxScore) {
        personalityType = "You are a Balanced Individual: adaptable, flexible, and comfortable in various situations.";
    } else if (result.D === maxScore) {
        personalityType = "You are a Go-Getter: active, dynamic, and driven to achieve your goals.";
    } else if (result.E === maxScore) {
        personalityType = "You are a Creative Thinker: imaginative, innovative, and enjoy exploring new ideas.";
    }

    // Display the personality result
    document.getElementById("personalityResult").textContent = personalityType;
    document.getElementById("result").style.display = "block"; // Show the result section
    document.getElementById("quizForm").style.display = "none"; // Hide the quiz form
}
