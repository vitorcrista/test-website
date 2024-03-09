// grab everything we need
const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

//function to toggle hidden class
function toggleHidden() {
    menu.classList.toggle('hidden');
}

var x = window.matchMedia('(min-width: 768px)');

// add event listeners
btn.addEventListener('click', () => {
    toggleHidden();
});
