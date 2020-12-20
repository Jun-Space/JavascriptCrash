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