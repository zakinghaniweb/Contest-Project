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
