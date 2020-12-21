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

