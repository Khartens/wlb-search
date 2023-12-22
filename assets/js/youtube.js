"use strict"
window.addEventListener('DOMContentLoaded', function() {
    let video = document.querySelector('.sliderTwo__slide-inner-video');

    if(video) {
        video.insertAdjacentHTML('afterbegin', '<iframe src="https://www.youtube.com/embed/zYxT3HL6oJw?si=R1QGZWZb3jeleSHQ&amp;controls=0&autoplay=1&mute=1&loop=1&playlist=zYxT3HL6oJw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    } 
    
})