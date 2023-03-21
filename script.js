const wrapper = document.querySelector('wrapper')
const loginLink = document.querySelector('.login-link')
const registrerLink  = document.querySelector('registrer-link')

registrerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
})