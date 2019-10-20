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

// swiper with mouse by Shalyapin
const swipeDetect = (el) => {
    let surface = el;
    let startX =  0;
    let startY = 0;
    let distX = 0;
    let distY = 0;
    
    let startTime = 0;
    let elapsedTime = 0;

    let threshold = 150;
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

        // console.log('distX = ', distX);
        // console.log('distY = ', distY);
        // console.log('elapsedTime = ', elapsedTime);

        if (elapsedTime <= allowedTime) {
            if ( ( Math.abs(distX) > threshold ) && ( Math.abs(distY) <= restraint ) ) {
                if (distX > 0) {
                    if (isEnabled) {
                        previousItem(currentItem);
                    }
                } else {
                    if (isEnabled) {
                        nextItem(currentItem);
                    }
                }
            }
        }
    });

    //touch events for mobiles and tablets
    surface.addEventListener('touchstart', function(e) {
        e.preventDefault();
        
        if (e.target.classList.contains('arrow')) {
            console.log('e.target.classList.contains( arrow )');
            if (e.target.classList.contains('arrow__prev')) {
                if (isEnabled) {
                    previousItem(currentItem);
                }
            } else if (e.target.classList.contains('arrow__next')) {
                if (isEnabled) {
                    nextItem(currentItem);
                }
            }
        }
        //open description
        if (e.target.classList.contains('project__desc-show--repair')) {
            e.preventDefault();
            console.log(document.querySelector('.project__desc--repair').classList);
            document.querySelector('.project__desc--repair').classList.toggle('open-desc');
        }

        if (e.target.classList.contains('project__desc-show--theyallow')) {
            e.preventDefault();
            console.log(document.querySelector('.project__desc--theyallow').classList);
            document.querySelector('.project__desc--theyallow').classList.toggle('open-desc');
        }

        let touchObj = e.changedTouches[0];
        startX = touchObj.pageX;
        startY = touchObj.pageY;
        startTime = new Date().getTime();
    });

        e.preventDefault();
    });

    surface.addEventListener('touchend', function(e) {
        e.preventDefault();

        let touchObj = e.changedTouches[0];
        distX = touchObj.pageX - startX;
        distY = touchObj.pageY - startY;
        elapsedTime = new Date().getTime() - startTime;

        // console.log('distX = ', distX);
        // console.log('distY = ', distY);
        // console.log('elapsedTime = ', elapsedTime);

        if (elapsedTime <= allowedTime) {
            if ( ( Math.abs(distX) > threshold ) && ( Math.abs(distY) <= restraint ) ) {
                if (distX > 0) {
                    if (isEnabled) {
                        previousItem(currentItem);
                    }
                } else {
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