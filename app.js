
/**===========================
 * *PARTICLE.JS
 * ===========================
 */


// particlesJS.load('home__left','./assets/particlesjs-config/particles-dark.json', () => {
//     console.log('working')
// })
/**======================
 * *PARTICLE.JS ENDS
 * ======================
 */
 






//for activating burger menu
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('nav ul');
  const navItem = document.querySelectorAll('.nav-item');

  burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');
    //to animate burger menu
    burger.classList.toggle('toggle');
    
    
  });
  navItem.forEach((item,index) =>{
    //animate Items
    //if else so that i works more than one time
    if(item.style.animation){
      item.style.animation='';
    }
    else{
      item.style.animation = `navItemFade 0.5s ease forwards ${index/7}s`;
    }

    //menu closes when clicking one link
    item.addEventListener('click', ()=>{
      nav.classList.toggle('nav-active');  
      //to animate burger menu
    burger.classList.toggle('toggle');
    });
    
    
  });
  
}

//calling the function
navSlide();