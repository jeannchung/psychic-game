let wins = 0
    let losses = 0
    let guessesLeft = 10
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let guessedLetters = []
    let compChoice = compGuess()

    function reset() {
      compChoice = compGuess()
      guessesLeft = 10
      guessedLetters = []
      document.querySelector('#message').innerHTML = "Guess what letter I'm thinking of"
      document.querySelector('#guessesLeft').innerHTML = '' + guessesLeft
      document.querySelector('#wins').innerHTML = '' + wins
      document.querySelector('#losses').innerHTML = '' + losses
      document.querySelector('#guesses').innerHTML = '' + guessedLetters.toString()
      console.log(compChoice)
    }

    function compGuess() {
      return letters[Math.floor(Math.random() * letters.length)]
    }


    function win() {
      wins++
      document.querySelector('#message').innerHTML = `You win!
      The letter was: ${compChoice}!
      Press ENTER to continue.`
      document.querySelector('#wins').innerHTML = '' + wins
      reset()
    }

    function lose(letter) {
      losses++
      document.querySelector('#message').innerHTML = `You lose!
      You guessed: ${letter}, but the correct answer was ${compChoice} 
      Press ENTER to continue.`
      document.querySelector('#losses').innerHTML = '' + losses
      reset()
    }

    function wrong() {
      guessesLeft--
      document.querySelector('#guessesLeft').innerHTML = '' + guessesLeft
      document.querySelector('#message').innerHTML = 'Wrong! Keep guessing.'
    }

    function alphaCheck(letter) {
      let result = false

      for (let i = 0; i < letters.length; i++) {
        if (letter === letters[i]) {
          return true
        }
      }
      return result
    }

    window.onload = function () {
      reset()
    }    
      

    document.onkeyup = function (event) {
      const letter = event.key
      if (letter == 'Enter') {
        reset()
      } else (alphaCheck(letter)) 

        guessedLetters.push(letter)
        document.querySelector('#guesses').innerHTML = guessedLetters.toString()


        document.querySelector('#guessesLeft').innerHTML = '' + guessesLeft
        letter === compChoice ? win() : (guessesLeft > 0 ? wrong() : lose(letter))
      
    }