document.addEventListener('DOMContentLoaded', function () {
    [].forEach.call(document.querySelectorAll('.slider .animate'), function (carousel) {
        var lengthImgs = carousel.querySelectorAll('img').length,
            lengthDot = carousel.querySelectorAll('img').length,
            move = false,
            leftPoint = null,

            imgWidth = parseFloat(getComputedStyle(carousel.querySelector('img')).width),
            maxLeft = (lengthImgs - 1) * imgWidth,
            carouselLeftAbs, carouselLeftStart,
            slide = 0;

        carousel.addEventListener('dbclick', change, false);
        carousel.addEventListener('mousedown', moveFunc, false);
        carousel.addEventListener('mouseup', changeImg, false);
        carousel.addEventListener('mousemove', moveMouse, false);

        carousel.addEventListener('touchstart', moveFunc, false);
        carousel.addEventListener('touchend', changeImg, false);
        carousel.addEventListener('touchmove', moveMouse, false);

        function moveFunc() {
            move = true;
            carouselLeftStart = Math.abs(parseFloat(getComputedStyle(carousel).left));
        };


        function change() {

            carouselLeftAbs = Math.abs(parseFloat(getComputedStyle(carousel).left));

            console.log("carouselLeftAbs = ", carouselLeftAbs)
            console.log("carouselLeftStart = ", carouselLeftStart)
            console.log("imgWidth = ", imgWidth)

            if (carouselLeftStart + imgWidth / 4 < carouselLeftAbs) {
                slide++;
            }
            if (carouselLeftAbs >= maxLeft) {
                slide = 0;
            }

            if (carouselLeftAbs <= 0) {
                slide = lengthImgs;
            }

        }

        function changeImg() {
            carouselLeftAbs = Math.abs(parseFloat(getComputedStyle(carousel).left));

            console.log("carouselLeftAbs = ", carouselLeftAbs)
            console.log("carouselLeftStart = ", carouselLeftStart)
            console.log("imgWidth = ", imgWidth)

            if (carouselLeftStart + imgWidth / 4 < carouselLeftAbs) {
                slide++;
            }

            if (carouselLeftAbs >= maxLeft) {
                slide = 0
            }

            if (carouselLeftAbs <= 0) {
                slide = 4
            }

            carousel.style.left = -slide * imgWidth + 'px';
            move = false;
            leftPoint = null;
        };

        function moveMouse(event) {
            if (move) {
                if (leftPoint) {
                    var left = parseInt(carousel.style.left) + (event.clientX - leftPoint) * 2;
                    if (left > 0) {
                        left = 0;
                    } else if (Math.abs(left) > maxLeft) {
                        left = Math.abs(left) - maxLeft;
                    }
                    carousel.style.left = left + 'px';
                }
                ;
                leftPoint = event.clientX;
            }
            ;
        };
    });

    document.addEventListener('mousemove', function (event) {
        event.preventDefault();
    }, false);

}, false);