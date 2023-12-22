"use strict"
document.addEventListener('DOMContentLoaded', function() {
    let btnModal = document.querySelectorAll('.btn-modal');
    let closeModal = document.querySelectorAll('.modal__close');
    let overlay = document.querySelector('.overlay');
    btnModal.forEach(function(item) {
        item.addEventListener('click', function (e) {
            e.preventDefault()
            let modalName = this.getAttribute('data-modal');

            let modal = document.querySelector('.js-modal[data-modal="' + modalName + '"]');

            modal.classList.add('show');
            overlay.classList.add('show');
            document.body.style.overflow = 'hidden';

            overlay.addEventListener('click', (e) => {
                if(e.target === overlay) {
                    modal.classList.remove('show');
                    overlay.classList.remove('show');
                    document.body.style.overflow = '';
                }
            })
            document.addEventListener('keydown', (e) => {
                if(e.code === 'Escape' && modal.classList.contains('show')) {
                    modal.classList.remove('show');
                    overlay.classList.remove('show');
                    document.body.style.overflow = '';
                }
            })
        });


    })
    closeModal.forEach(function(close) {
        close.addEventListener('click', function() {
            console.log('hi');
            let parent = this.parentNode;
            parent.classList.remove('show');
            overlay.classList.remove('show');
            document.body.style.overflow = '';
        })
    });
});