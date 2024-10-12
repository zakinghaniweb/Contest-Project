// window.onload = function() {
//     var preloader = document.getElementById('preloader');
//     setTimeout(function() {
//         preloader.style = 'transform:scale(0)';
//         setTimeout(function() {
//         preloader.display = 'none';
//         }, 500);
//     }, 2000);
// };
// let preloaderHeading = document.querySelector('.preloader-heading');
// for (let i = 1; i <= 3; i++) {
//     preloaderHeading.innerHTML = 'Wait, Until the page is loaded ' + i;
// }










window.onload = function() {
    var preloader = document.getElementById('preloader');
    var dots = document.getElementById('dots');
    var dotCount = 0;
    function animateDots() {
        dotCount++;
        if (dotCount > 3) {
            dotCount = 0;
        }
        dots.innerHTML = '.'.repeat(dotCount);
    }
    var intervalId = setInterval(animateDots, 500);
    setTimeout(function() {
        preloader.style.opacity = '0';
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 500);
    }, 5000);
};
