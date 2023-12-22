var Titles = ["Golden Goodness",
"Green Glow",
"Orange Oasis Cleanse",
"Pine-Apple"
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



    })







});