const cover = document.getElementById('cover');
const model = document.querySelector('.more');
const stack = document.getElementById('stack');
const links = document.querySelectorAll('.links');
const bubble = document.querySelectorAll('.bubble');
const frontEnd = document.querySelector('.step-1.step-1:first-child');
const backEnd = document.querySelector('.step-1.step-1:nth-child(2)');
const dbms = document.querySelector('.step-1.step-1:nth-child(3)');
const closeButton = document.querySelector('button[name="close"]');


links.forEach((link, index) => {
    link.addEventListener('mouseenter', () => {
        // 마우스가 요소에 진입했을 때의 처리

        bubble[index].style.opacity = '1';
        // 링크에 해당하는 index(말풍선)의 투명도를 1로 설정하여 보이게 함
    });

    link.addEventListener('mouseleave', () => {
        // 마우스가 요소를 벗어났을 때의 처리

        bubble[index].style.opacity = '0';
        // 링크에 해당하는 index(말풍선)의 투명도를 0로 설정하여 감춤
    });
});


cover.show = () => {
    cover.classList.add('visible');
}

cover.hide = () => {
    cover.classList.remove('visible');
}

stack.hide = () => {
    stack.classList.remove('visible');
}

stack.show = () => {
    stack.classList.add('visible');
}

closeButton.addEventListener('click', () => {
    cover.hide();
    stack.hide();
});
// 눌렀을때 stack과 cover 안보이게


model.addEventListener('click', function() {
    cover.show();
    stack.show();
});
//클릭시 stack과 cover 보이게

frontEnd.addEventListener('click', () => {
    stack.classList.remove('back', 'dbms');
    stack.classList.add('front');
    updateColors();
});

backEnd.addEventListener('click', () => {
    stack.classList.remove('front', 'dbms');
    stack.classList.add('back');
    updateColors();

});

dbms.addEventListener('click', () => {
    stack.classList.remove('front', 'back');
    stack.classList.add('dbms');
    updateColors();
});


// 스타일 변경 함수
function updateColors() {
    if (stack.classList.contains('front')) {
        frontEnd.style.color = '#A4A4A4';
        backEnd.style.color = 'white';
        dbms.style.color = 'white';
    } else if (stack.classList.contains('back')) {
        frontEnd.style.color = 'white';
        backEnd.style.color = '#A4A4A4';
        dbms.style.color = 'white';
    } else if (stack.classList.contains('dbms')) {
        frontEnd.style.color = 'white';
        backEnd.style.color = 'white';
        dbms.style.color = '#A4A4A4';
    }
}

// 초기 로드 시에도 스타일 업데이트를 호출해 적절한 스타일을 적용
updateColors();
