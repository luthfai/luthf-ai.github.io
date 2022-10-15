let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
var navBtn = document.querySelector('.header .navbar a');

for(let i = 0; i < navBtn.length; i++){
    navBtn[i].addEventListener('click', function(){
        var current = document.querySelector('.header .navbar .focus');
        current.classList.remove('focus');
        this.classList.add('focus');
    });
}


menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
});


var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
}, 3000);