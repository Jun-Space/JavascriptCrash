// Rules to know
// 1. Don't use var [globally scoped], use const(immutalbe) or let(mutable) [block scoped]
// 2. Don't user innerHTML due to security reasons, but .textContent instead

// Challenge 1: Your Age in Days


function ageInDays() {
    var birthYear = prompt("What year were you born?");
    var answer = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');  //<h1> </h1> Element 생성                               // 현재 상태: <h1> </h1>
    var textAnswer = document.createTextNode('You are ' + answer + ' days old')  // 텍스트 Element 생성
    h1.setAttribute('id', 'theAgeInDays');  // h1의 id는 'theAgeInDays' 임                          // 현재 상태: <h1 id='theAgeInDays'> </h1>
    h1.appendChild(textAnswer);  // 선택한 요소에 자식 요소 추가                                    // 현재 상태: <h1 id='theAgeInDays'> [textAnswer] </h1>
    document.getElementById('flex-box-result').appendChild(h1);  //id가 'flex-box-result'인 Element를 찾아 h1 Element 추가
    // 현재 상태: <div id="flex-box-result">    <h1 id='theAgeInDays'> [textAnswer] </h1>           </div>
}


function reset() {
    document.getElementById('theAgeInDays').remove()  //h1가 id=theAgeInDays 이므로 찾아서 삭제 // 먼저 들어온 놈부터 삭제하는듯.
}


// Challenge 2: Cat Generator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('cat-box');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);
}


// Challenge 3: 가위, 바위, 보!
function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt())
    results = decideWinner(humanChoice, botChoice);  // [0,1] human lost, bot won
    message = finalMessage(results[0]);  //{ mesage: 'You Won', 'color': 'green'}
    rpsFrontEnd(humanChoice, botChoice, message);
}


function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}


choices = ['rock', 'paper', 'scissors']
function numberToChoice(number) {
    return choices[number];
}


function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper':1, 'scissors':0.5, 'rock': 0},
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}


function finalMessage(yourScore) {
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    }  else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You won!', 'color': 'blue'};
    }
}


function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    // 선택권을 보여주는 사진들 지우기
    document.getElementById('rock').remove();
    document.getElementById('scissors').remove();
    document.getElementById('paper').remove();
    
   var humanDiv = document.createElement('div');
   var botDiv = document.createElement('div');
   var messageDiv = document.createElement('div');
   
   // HTML 코드로 바로 작성 가능
   humanDiv.innerHTML = '<img src="' + imagesDatabase[humanImageChoice] + '" height=150 width=150 style="box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)">';
   messageDiv.innerHTML = "<h1 style='color: " + message['color'] + "; font-size: 40px; padding: 30px; '>" + message['message'] +"</h1>"
   botDiv.innerHTML = '<img src="' + imagesDatabase[botImageChoice] + '" height=150 width=150 style="box-shadow: 0px 10px 50px rgba(233, 50, 37, 1)">';

   document.getElementById('flex-box-rps-div').appendChild(humanDiv);
   document.getElementById('flex-box-rps-div').appendChild(messageDiv);  // 여기서 같은 줄 아무리 추가해도 그만큼 추가되지 않음. Why?
   document.getElementById('flex-box-rps-div').appendChild(botDiv);
}



// Challenge 4: 버튼 색깔을 바꿔라!  
// reset 기능을 위해 원래 색에 대한 정보를 저장하고 있어야 함.
var all_buttons = document.getElementsByTagName('button'); // button을 가진 모든 엘레멘트 리스트로

var copyAllButtons = [];
// 모든 버튼 복사해둠. 이것을 활용해서 리셋
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1])
}


function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'Red') {
        buttonRed();
    } else if (buttonThingy.value === 'Green') {
        buttonGreen();
    } else if (buttonThingy.value === 'Reset') {
        buttonColorReset();
    } else {
        buttonRandomColors();
    }
}


function buttonRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger')
    }
}


function buttonGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success')
    }
}


function buttonColorReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i])
    }
}


function buttonRandomColors() {
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[Math.floor(Math.random()*4)])
    }
}



// Challenge 5: 블랙잭
let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': {'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'K':10, 'J':10, 'Q':10, 'A':[1,11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
}

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/swish.m4a')
const winSound = new Audio('static/sounds/cash.mp3')
const lossSound = new Audio('static/sounds/aww.mp3')

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit)   //blackjack-hit-button의 click시 blackjackHit실행. HTML 안에 onclick이런거 안써도 됨.

document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic)

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal)

function blackjackHit() {
    if (blackjackGame['isStand'] === false) {
        let card = randomCard();
        showCard(card, YOU)
        updateScore(card, YOU)
        showScore(YOU)
    }
    
}


function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex]
}


function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');  // <img> </img>
        cardImage.src = `static/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}


function updateScore(card, activePlayer) {
    if (card === 'A') {
    // If adding 11 keeps me below 21, add 11, Otherwise, add 1.
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1]
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0]
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card]
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score']
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function dealerLogic() {
    blackjackGame['isStand'] = true;  // Stand를 한번 누르면 더이상 Hit을 할 수 없다.

    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true )  {
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(700);
    }

    blackjackGame['turnsOver'] = true;  // 게임이 끝나야 Deal을 누를 수 있게 한다. (deal 버튼 활성화)
    let winner = computeWinner()
    showResult(winner)
    
}


// compute winner and return who just won
function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
        // condition: higher score than dealer or when dealer busts but you're under
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            blackjackGame['wins']++;
            winner = YOU;

        } else if (YOU['score'] < DEALER['score']) {
            blackjackGame['losses']++;
            winner = DEALER;

        } else if (YOU['score'] === DEALER['score']) {
            blackjackGame['draws']++;
            
        }
    
    // condition: when user busts but dealer doesn't
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        blackjackGame['losses']++;
        winner = DEALER;
     
    // condition: both bust
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        blackjackGame['draws']++;
    }
    return winner
}


function blackjackDeal() {    
    if (blackjackGame['turnsOver'] === true) {  // 게임의 turn이 종료되어야 deal버튼을 실행시킬 수 있다. 

        blackjackGame['isStand'] = false;  // 다시 게임 시작하면 Hit 할 수 있도록

        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
        for (let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }

        for (let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;
        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;
        document.querySelector('#your-blackjack-result').style.color = '#ffffff';
        document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';

        document.querySelector('#blackjack-result').textContent = '강원랜드'
        document.querySelector('#blackjack-result').style.color = 'black'

        blackjackGame['turnsOver'] = false;  // 다시 게임 시작하면 게임 끝나기 전까지 deal 누를 수 없도록 (deal 버튼 비활성화)
    }
    
}


function showResult(winner) {
    let message, messageColor;

    // if (blackjackGame['turnsOver'] === true) {
        if (winner === YOU) {
            document.querySelector('#wins').textContent = blackjackGame['wins']
            message = 'You won!';
            messageColor = 'green';
            winSound.play()
        } else if (winner === DEALER) {
            document.querySelector('#losses').textContent = blackjackGame['losses']
            message = 'You lost!';
            messageColor = 'red';
            lossSound.play();
        } else {
            document.querySelector('#draws').textContent = blackjackGame['draws']
            message = 'You drew!';
            messageColor = 'blue';
        }
    
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    // }

}