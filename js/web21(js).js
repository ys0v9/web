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


for (let i = 2; i<10; i++) {
    for (let j=1; j<10; j++)
        console.log(i+'*'+j+'='+i*j)
}