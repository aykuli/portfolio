
const btnNext = document.getElementById('btnNext');
const btnPrev = document.getElementById('btnPrev');
const repair = document.getElementById('repair');
const theyallow = document.getElementById('theyallow');

const educationOpener = document.getElementById('educationOpener');
const educationList = document.getElementById('educationList');
const repairDescBtn = document.getElementById('repairDescBtn');
const repairProjectDesc = document.getElementById('repairProjectDesc');
const theyallowDescBtn = document.getElementById('theyallowDescBtn');
const theyallowProjectDesc = document.getElementById('theyallowProjectDesc');

btnNext.addEventListener('click', () => {
    if (repair.style.left == '0px') {
        theyallow.style.left = '0px';
        repair.style.left = '100%';
    } else {
        theyallow.style.left = '100%';
        repair.style.left = '0px';        
    }
});

btnPrev.addEventListener('click', () => {
    if (repair.style.left == '0px') {
        theyallow.style.left = '0px';
        repair.style.left = '100%';
    } else {
        theyallow.style.left = '100%';
        repair.style.left = '0px';        
    }
});

educationOpener.addEventListener('click', () => {
    if (educationList.style.display == 'none') {
        educationList.style.display = 'block';
    } else {
        educationList.style.display = 'none';
    }
});