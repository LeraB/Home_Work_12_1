var slideIndex = 0,
    start = 0;
showRightSlides();

function showLeftSlides(e) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = slides.length-1; i >=0; i--) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = dots.length-1; i >=0; i--) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex + 1].style.display = "block";
    dots[slideIndex + 1].className += " active";
}

function showRightSlides(e) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

document.getElementById("slideshow-container").addEventListener("click", function (e) {
    if(event.clientX -event.offsetX > 0){
    showRightSlides(e);}
    else
    {
    if(event.clientX -event.offsetX < 0)  {
        showLeftSlides(e);
    }  
    }
});

document.getElementById("dots-wraper").addEventListener("click", function (e) {
    showRightSlides(e);
});
document.getElementById("dots-wraper").addEventListener("click", function (e) {
    showRightSlides(e);
});