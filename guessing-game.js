const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const randomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const checkGuess = (num) => {
    if(Number(num) > secretNumber){
        console.log('Too high.')
        return false
    } else if (Number(num) < secretNumber){
        console.log('Too low.')
        return false
    } else if (Number(num) === secretNumber){
        console.log('Correct!')
        return true
    }
}

const askGuess = () => {
    if(numAttempts !== 0){
        numAttempts--
        rl.question('Enter a guess: ', (num) => {
            if(checkGuess(num)){
                console.log('You win!')
                rl.close()
            } else askGuess()
        })
    } else {
        console.log("You lose.")
        rl.close()
    }
}

const askRange = () => {
    rl.question('Enter a minimum number: ', (minNum) => {
        rl.question('Enter a maximum number: ', (maxNum) => {
            console.log(`I'm thinking of a number between ${minNum} and ${maxNum}...`)
            secretNumber = randomInRange(Number(minNum), Number(maxNum))
            console.log(secretNumber)
            askGuess()
        })
    })
}

let askLimit = () => {
    rl.question('How many attempts would you like? ', (num) => {
        numAttempts = Number(num)
        askRange()
    })
}

askLimit()


//-----------------------------------------------------

//let askGuess =()=>{
//    return  rl.question(“Enter a guess “, (answer)=>{
//          let res = checkGuess(+answer)
//          if(res){
//            console.log(“You win”)
//              rl.close()
//              return “You win”
//          } else if(!res){
//              askGuess()
//          }
//      })
//  }
//  askGuess()
//  const readline = require(‘readline’)
//  const rl = readline.createInterface({
//      input: process.stdin,
//      output: process.stdout
//    });
//  let secretNumber =35
//  let checkGuess =(number)=>{
//      if(number >secretNumber){
//          console.log(“Too high”)
//          return false
//      }else if(number<secretNumber){
//          console.log(“Too low”)
//          return false
//      }else if(number === secretNumber){
//          console.log(“Correct!“)
//          return true
//      }else{
//          console.log(“Incorrect”)
//          return false
//      }
//  }
//  let askGuess =()=>{
//    return  rl.question(“Enter a guess “, (answer)=>{
//          let res = checkGuess(+answer)
//          if(res){
//            console.log(“You win”)
//              rl.close()
//              return “You win”
//          } else if(!res){
//              askGuess()
//          }
//      })
//  }
//  askGuess()
