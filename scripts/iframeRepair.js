const wrapRepair = document.getElementById('wrapRepair');

const btnMobileRepair = document.getElementById('btnMobileRepair');
const btnDesktopRepair = document.getElementById('btnDesktopRepair');

let wrapWidthRepair = document.getElementById('wrapRepair').offsetWidth;

if ( wrapWidthRepair > 800) {
    btnMobileRepair.addEventListener('click', () => {
        wrapRepair.style.width = '375px';

        btnMobileRepair.style.display = 'none';
        btnDesktopRepair.style.display = 'block';
    });

    btnDesktopRepair.addEventListener('click', () => {
        wrapRepair.style.width = '1440px';
        btnMobileRepair.style.display = 'block';
        btnDesktopRepair.style.display = 'none';
    })
}