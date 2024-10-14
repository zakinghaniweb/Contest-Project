// ========= Preloader Js Start ==========
var preloader = document.querySelector('#preloader');
var dots = document.querySelector('#dots');
window.onload = function() {
    let dotCount = 0;
    function animateDots() {
        dotCount++;
        if (dotCount > 3) {
            dotCount = 0;
        }
        dots.innerHTML = '.'.repeat(dotCount);
    }
    var intervalId = setInterval(animateDots, 500);
    setTimeout(function() {
        preloader.style = 'transform:scale(0)';
        setTimeout(function() {
            var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
            modal.show();
        },500);
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 500);
    }, 2500);
};
// ========= Preloader Js End ==========
// ========= Navbar Js Start ==========

// =====---- Navbar Js Is Currently Mixed In Other Functions

// ========= Navbar Js End ==========
// ========= Modal Js Start ==========
var modal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    backdrop: 'static',
    keyboard: false
});
var nameSubmitButton = document.querySelector('.nameSubmitButton');
var userName = document.querySelector('.userName');
var nameInput = document.querySelector('.nameInput');
var nameInputGroup = document.querySelector('.input-group-custom');
var menu = document.querySelector('.main-menu')
nameSubmitButton.addEventListener('click', function() {
    if (nameInput.value == '') {
        nameInputGroup.style = "border: 3px solid red";
    } else {
        userName.innerHTML = nameInput.value;
        setTimeout(function() {
            menu.style = 'transform:translateY(0)';
        },0)
        var modalElement = document.querySelector('#exampleModal');
        var modalInstance = bootstrap.Modal.getInstance(modalElement);
        modalInstance.hide();
    }
});
// ========= Modal Js End ==========