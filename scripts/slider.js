let items = document.querySelectorAll('.project');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    });
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}

document.querySelector('.arrow__prev').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem);
    }
});

document.querySelector('.arrow__next').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem);
    }
});

// swiper by Shalyapin
const swipeDetect = (el) => {
    let surface = el;
    let startX =  0;
    let startY = 0;
    let distX = 0;
    let distY = 0;
    
    let startTime = 0;
    let elapsedTime = 0;

    let threshold = 250;
    let restraint = 100;
    let allowedTime = 300;

    surface.addEventListener('mousedown', function(e) {
        e.preventDefault();
        startX = e.pageX;
        startY = e.pageY;
        startTime = new Date().getTime();
    });

    surface.addEventListener('mouseup', function(e) {
        e.preventDefault();
        distX = e.pageX - startX;
        distY = e.pageY - startY;
        elapsedTime = new Date().getTime() - startTime;

        console.log('distX = ', distX);
        console.log('distY = ', distY);
        console.log('elapsedTime = ', elapsedTime);

        if (elapsedTime <= allowedTime) {
            console.log('(elapsedTime <= allowedTime)');
            if ( ( Math.abs(distX) > threshold ) && ( Math.abs(distY) <= restraint ) ) {
                console.log('Math.abs(distX > threshold) && Math.abs(distY <= restraint)');
                if (distX > 0) {
                    console.log('--------------   distX > 0');
                    if (isEnabled) {
                        previousItem(currentItem);
                    }
                } else {
                    console.log('--------------   distX < 0');
                    if (isEnabled) {
                        nextItem(currentItem);
                    }
                }
            }
        }
    });
}

let el = document.querySelector('.slider');

swipeDetect(el);
// END of swiper by Shalyapin