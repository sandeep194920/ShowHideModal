'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');
const openModals = document.querySelectorAll('.show-modal');

function hideModal() {
    overlay.classList.add('hidden')
    modal.classList.add('hidden')
}

function showModal() {
    overlay.classList.remove('hidden')
    modal.classList.remove('hidden')
}

for (let i = 0; i < openModals.length; i++) {
    openModals[i].addEventListener('click', showModal)
}

close.addEventListener('click', hideModal)
overlay.addEventListener('click', hideModal)

document.addEventListener('keydown', function (e) {
    if (e.key === "Escape" && !modal.classList.contains('hidden'))
        hideModal()

})