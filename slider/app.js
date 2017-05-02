document.addEventListener('DOMContentLoaded', function() {

    const next = document.getElementById('nextPicture');
    const prev = document.getElementById('prevPicture');
    const pictures = document.querySelector('.slider').children;

    let slideIndex = 0;

    pictures[slideIndex].classList.add('visible');

    next.addEventListener('click', function() {
        if (slideIndex < pictures.length - 1) {
            pictures[slideIndex].classList.remove('visible');
            slideIndex++;
            pictures[slideIndex].classList.add('visible');
        }
    });

    prev.addEventListener('click', function() {
        if (slideIndex > 0) {
            pictures[slideIndex].classList.remove('visible');
            slideIndex--;
            pictures[slideIndex].classList.add('visible');
        }
    });

});
