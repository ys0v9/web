// let start = new Date('2025-06-01');
// let now = new Date();

// let pass_day = now.getTime() - start.getTime();
// pass_day = Math.round(pass_day / 1000 / 60 / 60 / 24);

// console.log(pass_day);

// document.getElementById('day').innerText = pass_day;


// //당첨자 뽑기
// let seed = prompt("전체 응모자 수");
// let picked = Math.floor((Math.random() * seed) + 1);

// document.getElementById("total").textContent = `전체 응모자수: ${seed}명`;
// document.getElementById("winner").textContent = `당첨자: ${picked}번`;

// window.open("popup.html", "공지", "width=500, height=500");
// open("popup.html", "공지", "width=500, height=500, left=200, top=100");

let b_left = window.screenX;
let b_top = window.screenY;

b_left = b_left + 100;
b_top = b_top + 100;

window.open("popup.html", "공지", `width=500, height=500, left=${b_left}, top=${b_top}`);