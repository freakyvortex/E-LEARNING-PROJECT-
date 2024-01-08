let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

   setTimeout(() => {
     document.querySelector('.preloader').style.display = 'none';
   }, 3000);
   document.querySelector('.toggle-ball').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});