
import 'bootstrap';
import Holder from 'holderjs';
import $ from 'jquery';

import './styles/index.scss';
require("./sticky");
/*
 * I didn't use arrow callback because in the current version of webpack
 * on production build it returns an error.
 */
$(window).on('load', function(){
	setTimeout(removeLoader, 500); //wait for page load PLUS two seconds.
  });
  function removeLoader(){
	  $( "#loading" ).fadeOut(500, function() {
		$( "#loading" ).remove();
	});  
  };

$('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
$('.quantity').each(function() {
  var spinner = $(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});
// $(".navigation__bottom").sticky({top:0,zIndex:9999});

$(function onReady() { // eslint-disable-line prefer-arrow-callback
  Holder.addTheme('thumb', {
    background: '#55595c',
    foreground: '#eceeef',
    text: 'Thumbnail',
  });
});
var responsiveMenu = function() {
  $(document).find('.toggle-menu').on('click',function() {
    $(this).toggleClass('toggle-menu-rev');
  });
}
responsiveMenu();

var cart = new Snap('#cart')
var p  = cart.select('#content-bottom');
var contentTop  = cart.select('#content-top');
var amount = 0;
p.animate({y: 120}, 1000);

cart.selectAll('.item').attr({
  transform:'translate(0,-50)',
  opacity: 0
});


$('body').on('click', function() {
  amount++;
  
  if (amount == 1) {
    
    p.animate({
      transform:'translate(0,0)',
      opacity: 1
    }, 400, mina.bounce );
  }

  if  (amount == 2) {

    contentTop.animate({
      transform:'translate(0,0)',
      opacity: 1
    }, 800, mina.bounce );
  }  
});



