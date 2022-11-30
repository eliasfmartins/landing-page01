const btn = document.querySelector('.btn-mobile')
const nav = document.querySelector('.options')
window.addEventListener('resize', ()=>{
  const nav = document.querySelector('.options')
  if(window.innerWidth<=600){
    nav.classList.remove('actived')
  }
})
btn.addEventListener('click', toogleMenu)
function toogleMenu(e) {
  const nav = document.querySelector('.options')
  nav.classList.toggle('actived')
}
function hideMenu(){
  nav.classList.remove('actived')
}