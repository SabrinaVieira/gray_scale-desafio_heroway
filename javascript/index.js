

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector('.cabeca-nav');

  window.addEventListener('scroll', () => {

    if (window.pageYOffset > 100) {
      console.log(window.scrollY);
      navbar.classList.add('fundoBranco');
    } else {
      navbar.classList.remove('fundoBranco');
    }
  });
})






/*let baixo = document.getElementById('nav-cab');
const px = '100';

window.addEventListener('scroll', () =>{
  console.log('rolado');
  console.log(window.scrollY);
  if(baixo.scrollTop > px) {
    baixo.style.backgroundColor = "#FFF";
  } else {
    baixo.style.backgroundColor = "0.3s ease-in-out";
  } 
});

let aa = baixo.classList;

window.addEventListener('scroll', () =>{
  console.log('rolado');
  
  if (window.scrollY > px) {
    if (!aa.contains('fundoBranco')) {
     aa.add('fundoBranco')
    }
  } else {
     if (aa.contains('fundoBranco')) {
      aa.remove('fundoBranco')
     }
   }
}); */