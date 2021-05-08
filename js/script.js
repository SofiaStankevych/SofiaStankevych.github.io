document.addEventListener('DOMContentLoaded', function(){



   const tabs = document.querySelectorAll('.tabheader__item'),
         tabsContent = document.querySelectorAll('.tabcontent'),
         tabsParent = document.querySelector('.tabheader__items');
         


   function hideTab(){
      tabsContent.forEach(tab =>{
         tab.classList.add('hide');
         tab.classList.remove('fade');

      });
      tabs.forEach(tab =>{
         tab.classList.remove('tabheader__item_active'); 
      });
   }
   
   function showTab(i){
      tabsContent[i].classList.remove('hide');
      tabsContent[i].classList.add('fade');
      
      tabs[i].classList.add('tabheader__item_active');
   }
   
   tabsParent.addEventListener('click', function(event){
      const target = event.target;

      if( target && target.classList.contains('tabheader__item')){
         tabs.forEach(function(item,i){
              if( target == item){
               hideTab();
               showTab(i);
              } 
         });
      }
   });

   function changeTab(){
     const activeTab = document.querySelector('.tabheader__item_active');
     tabs.forEach((item, i)=>{
      if(tabsParent.lastElementChild == activeTab) {
         hideTab();
         showTab(0); 
      }
      else if(item==activeTab){
         hideTab();
         showTab(i+1);
       }
     });
   }
   
   const timerTabs = setInterval(changeTab, 5000);
   

   const modalBtns = document.querySelectorAll('button[data-modal]'),
         modal = document.querySelector('.modal'),
         closeBtn = document.querySelector('.modal__close');

   


   modalBtns.forEach((btn)=>{
      btn.addEventListener('click', function(event){
         modal.classList.add('show');
         modal.classList.add('fade');
         document.body.style.overflow = 'hidden';
      });
   });

   function closeModal(event){
      modal.classList.remove('show');
      modal.classList.remove('fade');

      document.body.style.overflow = 'auto';
   }

   closeBtn.addEventListener('click', closeModal);

   modal.addEventListener('click', (event)=>{
      if (event.target === modal){
         closeModal();
      }
   });


   const deadline = '2021-05-11';


   function getTimeRemain(deadline){
      endDate = Date.parse(deadline);
      const now = new Date(),
            t = endDate - now;


      const days = Math.floor(t / 1000 / 60/ 60 / 24)  ;  
      const hours = Math.floor((t / 1000 / 60 /60) % 24 );  
      const minutes = Math.floor((t / 1000 / 60) % 60) ;  
      const seconds = Math.floor((t / 1000) % 60) ;  

      return {
         'days': days,
         'hours':hours,
         'minutes': minutes,
         'seconds':seconds,
         'total': t
      };
   }

   function setClock(endtime){
      const timer = document.querySelector('.timer'),
            days = document.getElementById('days'),
            hours = document.getElementById('hours'),
            minutes = document.getElementById('minutes'),
            seconds = document.getElementById('seconds');           
            

            updateClock();

            let timerUpdate = setInterval(updateClock, 1000);

      function updateClock(){
         const newTime = getTimeRemain(endtime);
         
         days.innerHTML = newTime.days;
         hours.innerHTML = newTime.hours;
         minutes.innerHTML = newTime.minutes;
         seconds.innerHTML = newTime.seconds;

         if (newTime.total<=0){
            clearInterval(timerUpdate);

         }
      }
   }

   setClock(deadline);

 


  





/*
const swiper = new Swiper(slider, {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   
   allowTouchMove: true,
   freeMode: false,
   slidesPerView: 1,
   spaceBetween: 15,

   navigation: {
     nextEl: next,
     prevEl: prev,
   },
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });
*/


const slider = document.querySelector('.offer__slider'),
      slides = document.querySelectorAll('.offer__slide'),
      prev = document.querySelector('.offer__slider-prev'),
      next = document.querySelector('.offer__slider-next'),
      total = document.querySelector('#total'),
      current = document.querySelector('#current'),
      sliderWrapper = document.querySelector('.offer__slider-wrapper'),
      width = window.getComputedStyle(sliderWrapper).width,
      slidesField = document.querySelector('.offer__slider-inner');


 
let slideIndex = 1;
let offset = 0;

slidesField.style.width = 100 * slides.length + '%';
slidesField.style.display = 'flex';
slidesField.style.transition = '0.7s all';

total.textContent = slides.length;
current.textContent = slideIndex;

sliderWrapper.style.overflow = 'hidden';



slides.forEach(slide =>{
   slide.style.width = width;
   
});

let widthSlide = +width.slice(0, width.length - 2);

next.addEventListener('click',function(){
   if(offset ==  widthSlide * (slides.length - 1)){
      offset = 0;
      slideIndex = 1;
   }
   else{
      offset += widthSlide;
      slideIndex++;
   }

   slidesField.style.transform = `translateX(-${offset}px)`;
 
   current.textContent = slideIndex;
});

prev.addEventListener('click',function(){
   if(offset ==  0){
      offset = widthSlide * (slides.length-1);
      slideIndex = slides.length;
   }
   else{
      offset -= widthSlide;
      slideIndex--;
   }

   slidesField.style.transform = `translateX(-${offset}px)`;
   current.textContent = slideIndex;
});






















});