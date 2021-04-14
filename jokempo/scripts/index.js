const $buttonMoveStonePlayer1=document.querySelector(`.button-move-stone-player-1`)
const $buttonMovePaperPlayer1=document.querySelector(`.button-move-paper-player-1`)
const $buttonMoveScissorsPlayer1=document.querySelector(`.button-move-scissors-player-1`)
const $buttonMoveStonePlayer2=document.querySelector(`.button-move-stone-player-2`)
const $buttonMovePaperPlayer2=document.querySelector(`.button-move-paper-player-2`)
const $buttonMoveScissorsPlayer2=document.querySelector(`.button-move-scissors-player-2`)

const $battlefieldPlayer1=document.querySelector(`.battlefield-player-1`)
const $battlefieldPlayer2=document.querySelector(`.battlefield-player-2`)

const $buttonPlay=document.querySelector(`.button-play`)
const $buttonReset=document.querySelector(`.button-reset`)

const $resultPlayer1=document.querySelector('.result-player-1')
const $resultPlayer2=document.querySelector('.result-player-2')

let player1 = ''
let player2 = ''

let winner = ''
let started = false

let pointsPlayer1=0
let pointsPlayer2=0


function verifyWinner (){
    if ( player1==player2){
        setTimeout(function(){
             alert('empatou')
             resetbattlefield()
             resetresult()
        }, 700)
    }else if ( player1 =='scissors' && player2 =='paper'){
        setTimeout(function (){
            alert('player one wins')
            pointsPlayer1
            resetbattlefield()
            resetresult()
            addpontinhos(1)
            addpoints(1)
        }, 700)
    }else if (player1 =='paper' && player2 =='stone'){
        setTimeout(function (){
            alert('player one wins')
            pointsPlayer1
            resetbattlefield()
            resetresult()
            addpontinhos(1)
            addpoints(1)
        }, 700)
    }else if(player1=='stone' && player2=='scissors'){
        setTimeout(function(){
            alert('player one wins')
            pointsPlayer1
            resetbattlefield()
            resetresult()
            addpontinhos(1)
            addpoints(1)
        }, 700)
    }else if(player1 =='paper' && player2== 'scissors'){
        setTimeout(function (){
            alert('player two wins')
            pointsPlayer2
            resetbattlefield()
            resetresult()
            addpontinhos(2)
            addpoints(2)
        }, 700)
    }else if (player1 == 'scissors' && player2== 'stone'){
        setTimeout(function (){
            alert('player two wins')
            pointsPlayer2
            resetbattlefield()
            resetresult()
            addpontinhos(2)
            addpoints(2)
        },700)
    }else if (player1 == 'stone' && player2=='paper'){
        setTimeout(function(){
            alert('player two wins')
            pointsPlayer2
            resetbattlefield()
            resetresult()
            addpontinhos(2)
            addpoints(2)
        }, 700)
    }
}

const addpoints=(winner)=>{
    
    if (winner==1){
        if(pointsPlayer1 <= 9){
            $resultPlayer1.innerHTML = '0' +  pointsPlayer1
        }
    }
    if (winner==2){
        if(pointsPlayer2 <= 9){
            $resultPlayer2.innerHTML = '0' + pointsPlayer2
        }
    }
}

const addpontinhos = (winner) =>{
    if(winner==1){
        pointsPlayer1 =  pointsPlayer1 + 1
    }
    if(winner==2){
        pointsPlayer2 =  pointsPlayer2 + 1
    }
}

function resetbattlefield(){
    $battlefieldPlayer1.innerHTML = ''
    $battlefieldPlayer2.innerHTML = ''
}

function resetresult(){
    pointsPlayer1 = ''
    pointsPlayer2 = ''
}
 
function resetbattlefieldbutton(){
    $battlefieldPlayer1.innerHTML = ''
    $battlefieldPlayer2.innerHTML = ''
}

function resetbutton(){
    $resultPlayer1.innerHTML = ''
    $resultPlayer2.innerHTML = ''
}

$buttonReset.addEventListener('click' , function(){
    resetbattlefieldbutton()
    resetbattlefield()
    resetbutton()
    resetresult()
})

$buttonPlay.addEventListener('click', function(){
     started=true
})

$buttonMoveStonePlayer1.addEventListener(`click`,function(){
    if (started == false) return
     player1 ='stone'
    $battlefieldPlayer1.innerHTML="<img src='./images/pedra.jpeg'/>"
    verifyWinner()
})

$buttonMovePaperPlayer1.addEventListener(`click`, function(){
    if (started == false) return
     player1='paper'
    $battlefieldPlayer1.innerHTML="<img src='./images/papel.jpeg'/>"
    verifyWinner()
})

$buttonMoveScissorsPlayer1.addEventListener(`click` ,function(){
    if (started == false) return
     player1='scissors'
    $battlefieldPlayer1.innerHTML="<img src='./images/tesoura.jpeg'/>"
    verifyWinner()
})
 
$buttonMoveStonePlayer2.addEventListener(`click`, function(){
    if (started == false) return
     player2='stone'
    $battlefieldPlayer2.innerHTML="<img src='./images/pedra.jpeg'/>"
    verifyWinner()
})

$buttonMovePaperPlayer2.addEventListener(`click`, function(){
    if (started == false) return
     player2='paper'
    $battlefieldPlayer2.innerHTML="<img src='./images/papel.jpeg'/>"
    verifyWinner()
})
$buttonMoveScissorsPlayer2.addEventListener(`click`, function(){
    if (started == false) return
     player2='scissors'
    $battlefieldPlayer2.innerHTML="<img src='./images/tesoura.jpeg'/>"
    verifyWinner()
})