let sliderIndex = 0;
const slideWidth = document.querySelector('.slide').clientWidth;
const slider = document.querySelector('.slider');
const slideCount = slider.children.length;
const lastSlideIndex = slideCount - 1;

function nextSlide() {
    sliderIndex = (sliderIndex + 1) % slideCount;
    slider.style.transition = 'transform 0.5s ease'; // 부드러운 전환을 위해 transition 추가
    slider.style.transform = `translateX(${-sliderIndex * slideWidth}px)`;

    // 마지막 사진에서 다음 버튼을 눌렀을 때, 첫 번째 사진으로 부드럽게 이동
    if (sliderIndex === 0) {
        setTimeout(() => {
            slider.style.transition = 'none'; // transition을 제거하여 순간이동
            slider.style.transform = `translateX(0)`;
        }, 500); // 0.5초 후에 transition을 제거하여 부드러운 전환을 만듦
    }
}

function beforeSlide() {
    sliderIndex = (sliderIndex - 1 + slideCount) % slideCount;
    slider.style.transition = 'transform 0.5s ease'; // 부드러운 전환을 위해 transition 추가
    slider.style.transform = `translateX(${-sliderIndex * slideWidth}px)`;

    // 첫 번째 사진에서 이전 버튼을 눌렀을 때, 마지막 사진으로 부드럽게 이동
    if (sliderIndex === lastSlideIndex) {
        setTimeout(() => {
            slider.style.transition = 'none'; // transition을 제거하여 순간이동
            slider.style.transform = `translateX(${-lastSlideIndex * slideWidth}px)`;
        }, 500); // 0.5초 후에 transition을 제거하여 부드러운 전환을 만듦
    }
}

const before = document.querySelector('.before');
const next = document.querySelector('.next');

before.addEventListener('click', () => {
    beforeSlide();
});

next.addEventListener('click', () => {
    nextSlide();
});