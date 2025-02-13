// Navbar
function showSidebar(){
    const l1 = document.querySelector('.l1');
    l1.style.display = 'block'
}
function hideSidebar(){
    const l1 = document.querySelector('.l1');
    l1.style.display = 'none'
}

// side
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// Form
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
})

function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword;


    if (usernameVal === ' ') {
        setError(username, 'Username is Required')
    } else {
        setSuccess(username)
    }


    if (emailVal === '') {
        setError(email, 'Email is Required')
    } else if (!validateEmail(emailVal)) {
        setError(email, 'Email is inValid')
    } else {
        setSuccess(email)
    }


    if (password === ' ') {
        setError(password, 'Password is Required')
    } else if (passwordVal.length < 8) {
        setError(password, 'Password must be atleast 8 characters long')
    } else {
        setSuccess(password)
    }


    if (cpasswordVal === ' ') {
        setError(cpassword, 'Confirm Password is Required')
    } else if (cpasswordVal !== passwordVal) {
        setError(cpassword, "Password Dosen't Match")
    } else {
        setSuccess(cpassword)
    }

}
function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = ' ';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

// add to cart
const btnCart = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const btnClose = document.querySelector('#cart-close');

btnCart.addEventListener('click', () => {
    cart.classList.add('cart-active');
});

btnClose.addEventListener('click', () => {
    cart.classList.remove('cart-active');
});

// scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');

    if (window.scrollY > 110) {
      navbar.classList.add('scrolled');
    }
    else {
      navbar.classList.remove('scrolled')
    }
  });

// loading
window.addEventListener('load' , function (){
    const loading = document.getElementById('loading');

    const style1 = document.getElementsByClassName('style1');

    const runtime = 2000;

    this.setTimeout( () =>{
        loading.style.display = 'none'
        style1.style.display = 'block'
    }, runtime);
});
