$(document).ready(function(){ 
//start

var avatarElem = document.getElementById('menu_header');
var ipad = document.getElementById('ipad_img');
var iphone = document.getElementById('iphone_img');
var macbook = document.getElementById('macbook_img');



//Скролл по определенному месту на странице
 window.onscroll = function() {
   if (avatarElem.classList.contains('fixed') && window.pageYOffset < 50) {
     avatarElem.classList.remove('fixed');
   } else if (window.pageYOffset > 50) {
     avatarElem.classList.add('fixed');
   }
   	if (window.pageYOffset >650) {
     ipad.classList.add('ipad_active');
   }	
   if (window.pageYOffset >980) {
     iphone.classList.add('iphone_active');
   }
   if (window.pageYOffset >1450) {
     macbook.classList.add('macbook_active');
   }
 };



// fancybox
 $("#single_1").fancybox({
          helpers: {
              title : {
                  type : 'float'
              }
          }
      });


 $("#single_2").fancybox({
          helpers: {
              title : {
                  type : 'float'
              }
          }
      });

 $("#single_3").fancybox({
          helpers: {
              title : {
                  type : 'float'
              }
          }
      });






//slider
 $('.slider').slick({
      autoplay: true,
      adaptiveHeight:true,
      arrows:true,
      centerPadding: "50px",
      dots:true,
      draggable: false,
      
 });







// Бургер меню, нужно дорабатывать...
$("#burger_menu").click( function() {
	$(".menu").toggleClass("close");
	$(".form_a").toggleClass("hidden");
	$(".block_left").toggleClass("open");
});

//Плавный скрол по якорям
$('a[href^="#"]').click(function(){
var el = $(this).attr('href');
$('body').animate({
scrollTop: $(el).offset().top}, 1000);
return false;
});


//end
});