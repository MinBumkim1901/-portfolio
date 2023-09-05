const content = "안녕하세요 \n 개발자 김민범의 \n 포트폴리오 입니다";
const text = document.querySelector(".first-text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}

setInterval(typing, 150);

