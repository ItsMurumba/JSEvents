//Access DOM Elements
const header=document.querySelector('header');
const blueButton=document.getElementById('color-button-blue');
const brownButton=document.getElementById('color-button-brown');
const greenButton=document.getElementById('color-button-green');
const noneButton=document.getElementById('color-button-none');

//Click Event Listener
blueButton.addEventListener('click', () => {
    header.classList.add('blue-background', 'text-white');
    header.classList.remove('brown-background', 'green-background');
});
brownButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'green-background');
    header.classList.add('brown-background', 'text-white');
});
greenButton.addEventListener('click', () => {
    header.classList.remove('brown-background', 'blue-background');
    header.classList.add('green-background', 'text-white');
});
noneButton.addEventListener('click', () => {
    header.classList.remove('text-white','brown-background', 'green-background','blue-background');
});
