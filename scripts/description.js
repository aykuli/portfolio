const educationOpener = document.getElementById('educationOpener');
const educationList = document.getElementById('educationList');

educationOpener.addEventListener('click', () => {
    if (educationList.style.display == 'none') {
        educationList.style.display = 'block';
    } else {
        educationList.style.display = 'none';
    }
});