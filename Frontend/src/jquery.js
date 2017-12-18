import $ from "jquery";
import { setTimeout } from "timers";

//Prevent scrolling too fast
const hideElements = (currentIndex) => {
    const currentHeight = $(`.video-${currentIndex} > .scroll-target`).css('top')
    $(`.video-${currentIndex} > .scroll-target`)
        .animate({'opacity': '.1', top: '100px'}, 1400, function () {
        $(this).css({'opacity': 1,  'top': currentHeight})
    })
}
const hideVideoDiv = (currentIndex) => {
    $(`.video-${currentIndex}`)
    .animate({ 'z-index': "-1", "opacity": '.1'} , 1000 , function () {
    $(this).css({'z-index': -1, 'opacity': 1})                    
    })
}
const showVideoDiv = (currentIndex) => {
    $(`.video-${currentIndex}`)
    .animate({ 'z-index': "1" }, 1000 , function () {
    $(this).css('z-index', 1)                    
})
}
const setSVG = (val) => {
    var $circle = $('#svg #bar');
    
    if (isNaN(val)) {
     val = 100; 
    }
    else{
      var r = $circle.attr('r');
      var c = Math.PI*(r*2);
     
      if (val < 0) { val = 0;}
      if (val > 100) { val = 100;}
      
      var pct = ((100-val)/100)*c;
      console.log(pct, 'pct')
        $circle.animate({ strokeDashoffset: pct}, 700, function () {
            if (pct === 0) {
                $circle.css({strokeDashoffset: c})
            }
        });
    }
}
$(document).ready(function () {
    const allVideos = $('.video-wrapper')
    const allVideoCount = allVideos.length
    let currentIndex = 0
    let currentPercentage = 0;
    const scrollMe = (event) => {
        //Hide previous div
        hideVideoDiv(currentIndex)
        hideElements(currentIndex)
        //Increment Index
        if (currentIndex < allVideoCount -1) {
            currentIndex++;
            currentPercentage = (currentIndex / allVideoCount) * 100
        }else {
            currentIndex = 0;
            currentPercentage = 100;
        }
        //Show next div
        setSVG(currentPercentage)        
        showVideoDiv(currentIndex)
        // Delay any more scolling
        event.preventDefault()        
        $( "body" ).off( "wheel",  scrollMe );            
        setTimeout(() => {
            $( "body" ).on( "wheel",  scrollMe );        
        }, 2000)
}
    $( "body" ).on( "wheel", scrollMe );


    
})