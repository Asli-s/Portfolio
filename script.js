/* document.querySelector(".plus").addEventListener('click',function(e){ console.log("clicked")},false);





 */




const button = document.querySelectorAll(".plus h1");

for(let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function(evt){ dropChip(evt.target) });
}


function dropChip(div) {
    console.log(div.parentElement.parentElement.parentElement);

const hideDiv = 
div.parentElement.parentElement.nextSibling.nextSibling;

if(hideDiv.classList.contains("hide-active")){
    console.log("active");
/*  div.innerHTML = "-" */
div.parentElement.parentElement.nextSibling.nextSibling.classList.remove("first-mobile");

div.parentElement.parentElement.parentElement.style.maxHeight ="600";
//div.parentElement.parentElement.parentElement.style.transition ="max-height 2.26s ease;";
div.style.transform = "rotate(45deg)";
div.style.transiton = "transform 0.26s ease;";
div.parentElement.parentElement.nextSibling.nextSibling.classList.remove("hide-active");
div.parentElement.parentElement.nextSibling.nextSibling.classList.remove("transition-in");
div.parentElement.parentElement.nextSibling.nextSibling.classList.add("transition-out");

}
 else{

div.parentElement.parentElement.parentElement.style.maxHeight ="50";
//div.parentElement.parentElement.parentElement.style.transition ="max-height 2.26s ease;";

    div.style.transform = "rotate(0deg)";
    div.style.transiton = "transform 0.26s ease;";

    div.parentElement.parentElement.nextSibling.nextSibling.classList.add("hide-active");
div.parentElement.parentElement.nextSibling.nextSibling.classList.remove("transition-out");
div.parentElement.parentElement.nextSibling.nextSibling.classList.add("transition-in");


 }


}
















/* import Swiper, {
    SwiperPluginLazyload,
    SwiperPluginPagination
} from 'tiny-swiper'

Swiper.use([ SwiperPluginLazyload, SwiperPluginPagination ])

const swiper = new Swiper(swiperContainer: HTMLElement | string, parameters?: TinySwiperParameters) */

/* new Splide( '.splide' ).mount(); */

/* var button= document.getElementsByClassName(sl-button);


button.array.forEach(element => {
    element.addEventListener("click", ()=>{


    })
    
}); */

/* document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#card-carousel', {
          perPage    : 2,
          breakpoints: {
              640: {
                  perPage: 1,
              },
          },
    } ).mount();
  } ); */
/* 

  var plus_Button = document.querySelectorAll(button-plus);

  plus_Button.array.forEach(element => {
    element.addEventListener("click", ()=>{
console.log("click");

    })}); */
    
/* function plusButton(i){
   var button= document.getElementsByClassName(i).style.opacity ="1";

   button.array.forEach(element => {
  
console.log("click");

    });
} */