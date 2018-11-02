// Get access to DOM elements
const header = document.querySelector('header');
const blueButton = document.getElementById('color-button-blue');
const brownButton = document.getElementById('color-button-brown');
const greenButton = document.getElementById('color-button-green');
const noneButton = document.getElementById('color-button-none');

// Click event listeners
blueButton.addEventListener('click', () => {
    header.classList.remove('brown-background', 'green-background');
    header.classList.add('blue-background', 'text-white');
});

brownButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'green-background');
    header.classList.add('brown-background', 'text-white');
});

greenButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'brown-background');
    header.classList.add('green-background', 'text-white');
});

noneButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'brown-background', 'green-background', 'text-white');
});

//New Post Function
function createNewPost() {
    //Create new post elements:article,h5,p
    let newArticle = document.createElement('article');
    let newHeader = document.createElement('h5');
    let newParagaraph = document.createElement('p');

    //Added text content to the created elements
    newHeader.textContent = 'New Post';
    newParagaraph.textContent = 'We are here.';

    //append the header and paragraph to the article tag
    newArticle.appendChild(newHeader);
    newArticle.appendChild(newParagaraph);

    //Add a class to the newArticle tag
    newArticle.classList.add('list-group-item');

    //Get the tag to append the new post
    const main = document.querySelector('main');

    //Return the HTML element built above
    return main.appendChild(newArticle);

}


//Event Listener to createNewPost function
const addPostButton = document.getElementById('add-post');
addPostButton.addEventListener('click', () => {
    createNewPost();
})







