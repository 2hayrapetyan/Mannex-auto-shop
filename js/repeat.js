// Burger menu // 
const burgerBtn = document.querySelector('.burger-menu');
const navBar = document.querySelector('.nav-bar')
const navBarList = document.querySelector('.nav-list')
burgerBtn.addEventListener('click',()=> {
  navBar.classList.toggle('burger');
  navBarList.classList.toggle('burger-list')
})


const signInnBtn = document.querySelector('.signIn')
if(localStorage.hasOwnProperty('user')) {
  signInnBtn.innerText = JSON.parse(localStorage.getItem('user')).firstName,
  signInnBtn.href = '#'
}else {
  signInnBtn.innerText = 'Войти'
}
   


