// let heading = document.getElementById('heading');
//     heading.onclick = function() {
//         heading.style.color = 'green';
// }


// alert("홈페이지에 오신 것을 환영합니다.");
// confirm("정말 홈페이지에 들어가시겠습니까?");
// prompt("정말 정말로 들어가시겠습니까?", "네");

// document.writeln("<h1>안녕하세요</h1>")
// document.writeln("안녕하세요");

// console.log("안녕하세요")

// let width = 200;
// let height = 50;
// let area = width * height;
// console.log(area);

// const PI = 3.14;
// let r = prompt("반지름을 입력하세요.");
// let area = PI * r ** 2;
// console.log(area);

// let number = parseInt(prompt('숫자를 입력하세요: '))
// if (number % 3 == 0)
//     console.log('3의 배수 입니다.');
// else
//     console.log('3의 배수가 아닙니다.')

// let userNumber = prompt ('숫자를 입력하세요.');
// if (userNumber != null){
//     if (parseInt(userNumber) % 3 === 0) 
//         console.log('3의 배수입니다.');
//     else
//         console.log('3의 배수가 아닙니다.')
// }
// else 
//     console.log('입력이 취소됐습니다.')



// let userNumber = prompt ('숫자를 입력하세요.');
// if (userNumber != null){
//     (parseInt(userNumber)%3 === 0)? console.log('3의 배수입니다.') : console.log('3의 배수가 아닙니다.');
// }
// else 
//     console.log('입력이 취소됐습니다.')

// let first = prompt('1과목 점수를 입력하세요.');
// let second = prompt('2과목 점수를 입력하세요.');
// let third = prompt('3과목 점수를 입력하세요.');
// avg = (parseInt(first)+parseInt(second)+parseInt(third))/3;
// if (avg>=60 && first>=40 && second>=40 && third>=40)
//     console.log('합격');
// else
//     console.log('불합격')

// let session = prompt("관심 세션을 선택해 주세요. 1-마케팅, 2-개발, 3-디자인");
// switch(session) {
//     case "1": document.writeln("마케팅 세션은 <b>201호</b>에서 진행됩니다.")
//         break;
//     case "2": document.writeln("개발 세션은 <b>203호</b>에서 진행됩니다.")
//         break;
//     case "3": document.writeln("디자인 세션은 <b>205호</b>에서 진행됩니다.")
//         break;
// default: alert("잘못 입력했습니다."); //1~3이 아닌 값을 입력 받으면 출력
// }


// for (let i = 2; i<10; i++) {
//     for (let j=1; j<10; j++)
//         console.log(`${i} * ${j} = ${i*j}`)
// }

// let stars = parseInt(prompt('몇 개의 별을 표시할까요?'));
//     while (stars > 0) {
//         document.writeln('*');
//         stars--;
//     }

// let stars2 = parseInt(prompt('몇 개의 별을 표시할까요?'));
//     do {
//         document.write('*');
//         stars2--;
//     }while (stars2>0);

// let n = parseInt(prompt('숫자를 입력해 주세요.'));
// let cnt = 0;
// let a = 1;

// if (n != null) {
//     while (a <= n) {
//         if (a % 3 === 0) {
//             document.write(a + " ");
//             cnt++;
//         }
//         a++;
//     }
//     document.write("<br>");
//     document.write(`3의 배수의 개수는 ${cnt}개`);
// } else {
//     console.log('입력이 취소됐습니다.');
// }

// function addNumber() {
//     let num1 = 2;
//     let num2 = 3;
//     let sum = num1 + num2;
//     console.log(`결괏값: ${sum}`);
// }
// addNumber();
// addNumber();

// var sum = 0; // 전역 변수 선언
// function addNumber() {
//     // var result; //지역 변수 선언
//     sum = 10 + 20;
//     result = 10 * 20;
// }
// addNumber();
// console.log(sum);
// console.log(result)

// var x = 10; //전역 변수 선언
// function displayNumber() {
//     //var y; 이거랑
//     console.log(`x is ${x}`);
//     console.log(`y is ${y}`);
//     var y = 20; //지역 변수 선언 및 값 할당
//     //let y = 20; << 오류
//     //y = 20; 이거는 var y = 20;이랑 같다.
// }
// displayNumber();

// var a = 3;
// var a = 5; //재선언
// a = 5; //재할당
// console.log(a);

// 오류 (let은 같은 이름으로 재선언 불가능)
// let b = 4; 
// let b = 5;
// 그러나 할당은 가능
// b = 5;

// function multiple(a, b = 5, c = 10) {
//     return a * b + c;
// }

// console.log(multiple(5,10,20)); // a = 5, b = 10, c = 20
// console.log(multiple(10,20)); // a = 10, b = 20, c = 10(기본값)
// console.log(multiple(30)); //a = 30, b = 5(기본값), c = 10(기본값)

// // 익명 함수
// let sum = function(a,b) {
//     return a + b;
// }
// console.log(`함수 실행 결과: ${sum(10,20)}`)

// // 즉시 실행 함수 (매개 변수 O)
// (function(a, b){ // 함수 선언을 위한 매개변수
//     sum = a + b;
// }(100, 200)); //마지막에 함수 실행을 위한 인수
// console.log(`함수 실행 결과 : ${sum}`);


let sum = (a,b) => a + b;

console.log(`함수 실행 결과: ${sum(10,20)}`)