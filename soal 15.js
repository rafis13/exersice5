function playRockPaperScissors(playerChoice) {
    // Create an array of possible choices
    const choices = ["rock", "paper", "scissors"];

    // Generate a random choice for the computer
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determine the result of the game
    if (playerChoice === computerChoice) {
        return "Tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        return "Win";
    } else {
        return "Lose";
    }
}

// Example usage:
const playerChoice = "rock";
const result = playRockPaperScissors(playerChoice);
console.log("Player chose", playerChoice);
console.log("Computer chose", result === "Win" ? "scissors" : result === "Lose" ? "paper" : "rock");
console.log("Result:", result);