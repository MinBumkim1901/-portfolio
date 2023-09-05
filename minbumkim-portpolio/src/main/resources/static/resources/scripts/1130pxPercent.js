let front = 0;
let back = 0;

// 1번씩만 실행하기 위한 변수
const pro = document.querySelectorAll('.front-progress');
const pro1 = document.querySelectorAll('.back-progress');

function frontPercent() {
    if (front === 0) {
        front = 1;
        let elem = document.querySelectorAll('.frontPercent');
        let width = 0;
        let id = setInterval(frame, 20);
        const targetWidth = 60;
        const increment = targetWidth / (1000 / 50); // 증가량 계산

        function frame() {
            if (width >= targetWidth) {
                clearInterval(id);
                front = 0;
            } else {
                width += increment;
                for (let i = 0; i < pro.length; i++) {
                    pro[i].style.width = `${width}%`;
                }
                elem[0].innerHTML = Math.round(width) + "%"; // 반올림하여 정수로 표시
                elem[1].innerHTML = Math.round(width) + "%";
                elem[2].innerHTML = Math.round(width) + "%";
            }
        }
    }
}

function BackPercent() {
    if (back === 0) {
        back = 1;
        let elem = document.querySelectorAll('.backPercent');
        let width = 0;
        let id = setInterval(frame, 20);
        const targetWidth = 75;
        const increment = targetWidth / (1000 / 50); // 증가량 계산

        function frame() {
            if (width >= targetWidth) {
                clearInterval(id);
                back = 0;
            } else {
                width += increment;
                for (let i = 0; i < pro1.length; i++) {
                    pro1[i].style.width = `${width}%`;
                }
                elem[0].innerHTML = Math.round(width) + "%";
                elem[1].innerHTML = Math.round(width) + "%";
                elem[2].innerHTML = Math.round(width) + "%";
                elem[3].innerHTML = Math.round(width) + "%";
            }
        }
    }
}


frontPercent();
BackPercent();
