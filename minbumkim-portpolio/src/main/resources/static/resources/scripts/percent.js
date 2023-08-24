const HtmlGraph = document.querySelector('.HtmlPerCent');
const CssGraph = document.querySelector('.CssPerCent');
const JavaScriptGraph = document.querySelector('.JavaScriptPerCent');
const JavaGraph = document.querySelector('.JavaPerCent');
const MariaDbGraph = document.querySelector('.MariaDbPerCent');
const SpringBootGraph = document.querySelector('.SpringPerCent');

const SkillGraph = document.getElementById('SkillGraph'); //버튼 폼

let HtmlStart = 0;
let CssStart = 0;
let JavaScriptStart = 0;
let JavaStart = 0;
let MariaDBStart = 0;
let SpringBootStart = 0;
//퍼센트를 위한 함수

function HTMLPercent() {
    if(HtmlStart === 0) {
        HtmlStart = 1;
        var elem = document.getElementById("HTML");
        var width = 0;
        var id = setInterval(frame, 20);

        function frame() {
            if (width >= 65) {
                clearInterval(id);
                htmlStart = 0;
            } else {
                width++;
                elem.innerHTML = width + "%";
            }
        }
    }
} //html 그래프 텍스트 65%
function HTML() {
    makeChart(65, HtmlGraph, 'skyblue');
} //html 원형그래프바

function CssPercent() {
    if (CssStart === 0) {
        CssStart = 1;
        var elem = document.getElementById("CSS");
        var width = 0;
        var id = setInterval(frame, 20);

        function frame() {
            if (width >= 65) {
                clearInterval(id);
                CssStart = 0;
            } else {
                width++;
                elem.innerHTML = width + "%";
            }
        }
    }
} //CSS 그래프 텍스트
function CSS() {
    makeChart(65, CssGraph, 'skyblue');
} //CSS 원형그래프바

function JavaScriptPercent() {
    if (JavaScriptStart === 0) {
        JavaScriptStart = 1;
        var elem = document.getElementById("JavaScript");
        var width = 0;
        var id = setInterval(frame, 20);

        function frame() {
            if (width >= 65) {
                clearInterval(id);
                JavaScriptStart = 0;
            } else {
                width++;
                elem.innerHTML = width + "%";
            }
        }
    }
} //JavaScript 그래프 텍스트

function JavaScript() {
    makeChart(65, JavaScriptGraph, 'skyblue');
} //JavaScript 원형그래프바

function JavaPercent() {
    if (JavaStart === 0) {
        JavaStart = 1;
        var elem = document.getElementById("Java");
        var width = 0;
        var id = setInterval(frame, 20);

        function frame() {
            if (width >= 80) {
                clearInterval(id);
                JavaStart = 0;
            } else {
                width++;
                elem.innerHTML = width + "%";
            }
        }
    }
} //Java 그래프 텍스트
function Java() {
    makeChart(80, JavaGraph, 'skyblue');
} //Java 원형그래프바

function MairaDbPercent() {
    if (MariaDBStart === 0) {
        MariaDBStart = 1;
        var elem = document.getElementById("MariaDB");
        var width = 0;
        var id = setInterval(frame, 20);

        function frame() {
            if (width >= 80) {
                clearInterval(id);
                MariaDBStart = 0;
            } else {
                width++;
                elem.innerHTML = width + "%";
            }
        }
    }
} //MariaDB 그래프 텍스트
function MariaDB() {
    makeChart(80, MariaDbGraph, 'skyblue');
} //MaiaDB 원형그래프바

function SpringPercent() {
    if (SpringBootStart === 0) {
        SpringBootStart = 1;
        var elem = document.getElementById("SpringBoot");
        var width = 0;
        var id = setInterval(frame, 20);

        function frame() {
            if (width >= 80) {
                clearInterval(id);
                SpringBootStart = 0;
            } else {
                width++;
                elem.innerHTML = width + "%";
            }
        }
    }
} //SpringBoot 그래프 텍스트
function SpringBoot() {
    makeChart(80, SpringBootGraph, 'skyblue');
} //SpringBoot 원형그래프바


const colorFn = (i, classname, color) => {
    classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #dedede " + i + "% 100%)";
}
const makeChart = (percent, classname, color) => {
    let i = 1;
    let chartFn = setInterval(function () {
        if (i < percent) {
            colorFn(i, classname, color);
            i++;
        } else {
            clearInterval(chartFn);
        }
    }, 20);
}

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            HTML();
            HTMLPercent();
            CssPercent();
            CSS();
            JavaScriptPercent();
            JavaScript();
            JavaPercent();
            Java();
            MariaDB();
            MairaDbPercent();
            SpringPercent();
            SpringBoot();

            observer.disconnect(); //실행되고 연결 끊어줌
        }
    });
});

observer.observe(SkillGraph);





















