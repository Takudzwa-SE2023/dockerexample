//1. jQuery command that will create an alert once the page has

$(document).ready(function() {
alert("This page has loaded!");
});

// 2.jQuery command that will change the background once the page has loaded.
$(document).ready(function() {
    $("body").css("background-color", "lightblue");
});
    
    // 3.Create a jQuery function which changes only a single paragraph’s styling.
$(document).ready(function() {
    $("p:first").css({
    "background-color": "lightgray",
    "font-size": "1.5em",
    "padding": "20px"
    });
});

    // 4. Fade out any object that is clicked on
$(document).ready(function() {
    $("h2,p,img").click(function() {
     $(this).fadeOut();
    });
});

    // 5. jQuery function which creates a drop-down menu with the use of an accordion animation style when each hghlited heading is hovered over
    
$(document).ready(function(){
    $('.card').hover(function(){
        let index = $(this).index()
        let currCard = $('.card').eq(index)
        let currBody = $(this).find('.card-body')
          if(currBody.css('display') == 'block'){
            currBody.slideUp()
          }else{
            currCard.siblings('.card-body').slideUp()
            currBody.slideDown()
          }
    });
});
    
//6 jQuery function which contains a chained effect to slide all the elements of your page around repeatedly whilst changing the background.
$(document).ready(function(){
    var colors = ['red', 'green', 'blue', 'yellow', 'pink'];
    var counter = 0;
    function changeColor() {
    $('body').css('background-color', colors[counter]);
    counter = (counter + 1) % colors.length;
    }
    setInterval(changeColor, 1000);
    
    $('#accordian-wrapper').children().slideToggle(2000).slideToggle(2000);
    $('#accordian-wrapper').children().promise().done(function () {
    $('#accordian-wrapper').children().slideToggle(2000).slideToggle(2000);
    });
    
    $("#fadeInButton").click(function() {
    $("#picture").fadeIn();
    });
    $("#fadeOutButton").click(function() {
    $("#picture").fadeOut();
    });
    $("#stopButton").click(function() {
    $("#picture").stop();
    });
    });
    
  
//7jQuery function which fades a picture in and out over a period of 3 seconds each when the respective buttons are clicked
$(document).ready(function(){
    $('#fadeInButton').click(function(){
       $('#picture').fadeIn(3000);
            $('#fadeOutButton').click(function(){
            $('#picture').fadeOut(3000);
            });
    });
});
        
//8 jQuery function which can stop the animation of the fade in fade out animation

$(document).ready(function(){
    $('#stopButton').click(function() {
        $('#picture').stop();
    });
});

$(document).ready(function(){
    function slide() {
      $('body, html').animate({
          'margin-left': '+=100px'
      }, 1000, function () {
          $('body, html').animate({
              'margin-left': '-=100px'
          }, 1000, slide);
      });
    }
    slide();
    
    function changeBackground() {
      $('body').animate({
          backgroundColor: '#'+(Math.random()*0xFFFFFF<<0).toString(16)
      }, 2000, changeBackground);
    }
    changeBackground();
  });

  

    

    
    
    
    