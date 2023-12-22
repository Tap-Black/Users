

var Titles = ["Golden Goodness",
"Green Glow",
"Orange Oasis Cleanse",
"Pine-Apple"
]

var Texts = [
    "A tropical blend of pineapple, mango, and lemon, offering a refreshing burst of immune-boosting vitamin C, antioxidants, and hydration.",
    "It's green juice bro. Drink at your own risk",
    "A healthful juice blend of oranges, carrots, and ginger, offering immune support, antioxidant benefits, and overall well-being",
    "It's in the name... Let's be so for real"

]
var currIndex = 0;
var maxIndex = Titles.length - 1

$(function(){

    $('#right').click(function(){

        if (currIndex === maxIndex){
            currIndex = 0;
        }
        else{
            currIndex++;
        }
        $('#title').fadeOut(500,function(){
            $(this).text(Titles[currIndex]).fadeIn(500);
        });
        $('#text').fadeOut(500,function(){
            $(this).text(Texts[currIndex]).fadeIn(500);
        });

        var element = document.querySelector('.Drink');
        var circle = document.querySelector('.Right_Bubble')
  
        // Using the animate method
        element.animate([
            { transform: 'rotate(-35deg)' },
            { transform: 'rotate(35deg)' },
            { transform: 'rotate(-35deg)' },
            { transform: 'rotate(35deg)' },
            { transform: 'rotate(-35deg)' },
            { transform: 'rotate(35deg)' },
            { transform: 'rotate(4deg)' },
        ], {
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease', // Animation easing function
            fill: 'forwards' // Animation fill mode
        });

        circle.animate([
            { transform: 'scale(1.3)' },
            { transform: 'scale(1)' },

        ], {
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease', // Animation easing function
            fill: 'forwards' // Animation fill mode
        });

    })

    $('#left').click(function(){

        if (currIndex === 0){
            currIndex = maxIndex;
        }
        else{
            currIndex--;
        }
        $('#title').fadeOut(500,function(){
            $(this).text(Titles[currIndex]).fadeIn(500);
        });
        $('#text').fadeOut(500,function(){
            $(this).text(Texts[currIndex]).fadeIn(500);
        });

        var element = document.querySelector('.Drink');
        var circle = document.querySelector('.Left_Bubble')
  
        // Using the animate method
        element.animate([
            { transform: 'rotate(-35deg)' },
            { transform: 'rotate(35deg)' },
            { transform: 'rotate(-35deg)' },
            { transform: 'rotate(35deg)' },
            { transform: 'rotate(-35deg)' },
            { transform: 'rotate(35deg)' },
            { transform: 'rotate(4deg)' },
        ], {
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease', // Animation easing function
            fill: 'forwards' // Animation fill mode
        });

        circle.animate([
            { transform: 'scale(1.3)' },
            { transform: 'scale(1)' },

        ], {
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease', // Animation easing function
            fill: 'forwards' // Animation fill mode
        });

    })







});