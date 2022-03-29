const game = () => {
  let pScore = 0;
  // atualiza com uma função onde o jogador chega a 10 pontos e o jogo recomeça
  let cScore = 0;
  // Começa o jogo
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const matchScreen = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut"); // classe do CSS
      matchScreen.classList.add("fadeIn");
    });

  };

  // Jogar uma partida
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    // vai manipular o movimento das mãos
    hands.forEach(hand => {
      hand.addEventListener('animationend', function() {
        this.style.animation = "";
      });
    });

    // opções do pc
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option =>{
      option.addEventListener("click", function() {
        // Escolha do PC
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice =  computerOptions[computerNumber];

        setTimeout(() => {
        // Comparação entre as mãozinhas
        compareHands(this.textContent, computerChoice);
        // Atualizar as mãozinhas
        playerHand.src = `./imagens/${this.textContent}.png`;
        computerHand.src = `./imagens/${computerChoice}.png`;
        }, 2000);

        // Animação das mãozinhas
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });     
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    // Empate
    if(playerChoice === computerChoice) {
      winner.textContent = "It's a tie!";
      return;
    };
    // Checar para Rock
    if(playerChoice === 'rock') {
      if(computerChoice === 'scissors') {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      }
    };
    // Checar para Paper
        if(playerChoice === 'paper') {
          if(computerChoice === 'scissors') {
            winner.textContent = "Computer wins!";
            cScore++;
            updateScore();
            return;
          } else {
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
            return;
          }
        };

      // Checar para Scissors
    if(playerChoice === 'scissors') {
      if(computerChoice === 'rock') {
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      }
    };
  };


  // chamar as funções feitas
  startGame();
  playMatch();
};

// Função do jogo
game();