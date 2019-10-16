/*---------------------------------------*/
/*----------- Theyallow iframe ----------*/
/*---------------------------------------*/
const wrapTheyallow = document.getElementById('wrapTheyallow');

const btnMobileTheyallow = document.getElementById('btnMobileTheyallow');
const btnDesktopTheyallow = document.getElementById('btnDesktopTheyallow');

let wrapWidthTheyallow = document.getElementById('wrapTheyallow').offsetWidth;

if ( wrapWidthTheyallow > 1024) {
    btnMobileTheyallow.addEventListener('click', () => {
        wrapTheyallow.style.width = '600px';

        btnMobileTheyallow.style.display = 'none';
        btnDesktopTheyallow.style.display = 'block';
    });

    btnDesktopTheyallow.addEventListener('click', () => {
        wrapTheyallow.style.width = '1300px';
        btnMobileTheyallow.style.display = 'block';
        btnDesktopTheyallow.style.display = 'none';
    })
}

/*----------- end of Theyallow iframe ----------*/