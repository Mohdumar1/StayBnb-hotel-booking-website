const navbar = document.getElementById('navbar');
const menubtn = document.querySelector('.menu-btn');

menubtn.addEventListener('click', function(){
    navbar.classList.toggle('show-menu');
})
