document.addEventListener('DOMContentLoaded', function() {

    var next = document.getElementById('nextPicture');
    var prev = document.getElementById('prevPicture');
    var pictures = document.querySelector('.slider').children;
    // console.log(pictures);

    var slideIndex = 0;

    pictures[slideIndex].classList.add('visible');


    next.addEventListener('click', function() {
        // console.log(next);
        if (slideIndex < pictures.length - 1) {
            pictures[slideIndex].classList.remove('visible');
            slideIndex++;
            pictures[slideIndex].classList.add('visible');
        }


    });

    prev.addEventListener('click', function() {
        // console.log(prev);
        if (slideIndex > 0) {
            pictures[slideIndex].classList.remove('visible');
            slideIndex--;
            pictures[slideIndex].classList.add('visible');
        }
    });

});
