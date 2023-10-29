function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }


/*const score = {
        wins: 0,
        losses: 0,
        ties: 0

    }; */
    let score = JSON.parse(localStorage.getItem('score'));
    if(!score){
        score = {
            wins:0 ,
            losses: 0,
            ties: 0
        };
    
    }
    UpdatescoreElement();
       
    
        function results(playerMove){
            let result='';
            const ComputerMove =  playGame();
            
            if(playerMove === 'scissors') {
                if(ComputerMove === 'rock') {
               result = 'You Lose';
           }else if(ComputerMove === 'paper') {
               result = 'You Win';
           }else if(ComputerMove === 'scissors'){
               result = 'Tie';
           }
          
                
            } 
            else if(playerMove === 'paper') {
                if(ComputerMove === 'rock') {
               result = 'You Win';
           }else if(ComputerMove === 'paper') {
               result = 'Tie';
           }else if(ComputerMove === 'scissors'){
               result = 'You Lose';
           }
          
            }
    
            else if(playerMove === 'rock') {
                if(ComputerMove === 'rock') {
               result = 'Tie';
           }else if(ComputerMove === 'paper') {
               result = 'You Lose';
           }else if(ComputerMove === 'scissors'){
               result = 'You Win';
           }
           
            }
            if(result === 'You Win'){
            score.wins = score.wins + 1;
           }else if(result === 'You Lose') {
            score.losses += 1;
           }else if(result === 'Tie') {
            score.ties += 1;
           }
    
        localStorage.setItem('score', JSON.stringify(score));
        UpdatescoreElement();
    
        document.querySelector('.js-result').innerHTML = result ;
        document.querySelector('.js-moves').innerHTML = `You : ${playerMove} - Computer Move : ${ComputerMove}`
    }
    /*
     alert(`You Picked ${playerMove}. And Computer Picked ${ComputerMove}. ${result}
    Wins: ${score.wins} , Losses: ${score.losses}, Ties: ${score.ties}`);
    */
      
    function UpdatescoreElement() {
        document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins} , Losses: ${score.losses}, Ties: ${score.ties}`
    }
    
    function playGame() {
        let ComputerMove ='';
        const randomMove = Math.random();
    
    if( randomMove >= 0 && randomMove < 1/3 ) {
       ComputerMove = 'rock';
    }else if(randomMove >= 1/3 && randomMove < 2/3) {
        ComputerMove = 'paper';
    }else if(randomMove >= 2/3 && randomMove < 1) {
        ComputerMove = 'scissors'
    }
    return ComputerMove;
    }