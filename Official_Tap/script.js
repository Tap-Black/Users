 var header = document.getElementById("Top");
 var text = document.getElementById("Bottom");
 var D1 = document.getElementById("D1");
 var D2 = document.getElementById("D2");
 var D3 = document.getElementById("D3");
 var D4 = document.getElementById("D4");


var Headers = [
    "One Card",
    "Simply Tap",
    "Connect",
    "Endless Possibilites"
]

var Texts = [
    "The perfect way to keep in touch with clients, mentors, or new friends.",
    "Tap your card on the phone of whoever you meet.",
    "Connect others to your network through your TapPage.",
    "Choose how you want them to engage. Whether through social media or LinkedIn, you are now instantly connected!"
]

var currIndex = 0;


 

 document.addEventListener('DOMContentLoaded', function() {

    


    
    

    header.textContent= Headers[currIndex];
    text.textContent= Texts[currIndex];

        /* Iteration 2*/
        setTimeout(function() {
            header.animate([
                {opacity: "100"},
                {opacity: "0"},
                {opacity: "100"}


            ],{
                duration: 1000,
                fill:'forwards'
            });
            text.animate([
                {opacity: "100"},
                {opacity: "0"},
                {opacity: "100"}


            ],{
                duration: 1000,
                fill:'forwards'
            });

            D1.style.backgroundColor = "#1F1f1f";
            D2.style.backgroundColor = "#C2E812";

          }, 7000);
           
      
        setTimeout(function(){
            currIndex++;
            header.textContent = Headers[currIndex];
            text.textContent = Texts[currIndex];
        },7500);
        
        
        /* Iteration 3*/
        setTimeout(function() {
            header.animate([
                {opacity: "100"},
                {opacity: "0"},
                {opacity: "100"}


            ],{
                duration: 1000,
                fill:'forwards'
            });
            text.animate([
                {opacity: "100"},
                {opacity: "0"},
                {opacity: "100"}


            ],{
                duration: 1000,
                fill:'forwards'
            });

            D2.style.backgroundColor = "#1F1f1f";
            D3.style.backgroundColor = "#C2E812";

          }, 10000);
           
      
        setTimeout(function(){
            currIndex++;
            header.textContent = Headers[currIndex];
            text.textContent = Texts[currIndex];
        },10500);


        /* Iteration 3*/
        setTimeout(function() {
            header.animate([
                {opacity: "100"},
                {opacity: "0"},
                {opacity: "100"}


            ],{
                duration: 1000,
                fill:'forwards'
            });
            text.animate([
                {opacity: "100"},
                {opacity: "0"},
                {opacity: "100"}


            ],{
                duration: 1000,
                fill:'forwards'
            });

            D3.style.backgroundColor = "#1F1f1f";
            D4.style.backgroundColor = "#C2E812";

          }, 14000);
           
      
        setTimeout(function(){
            currIndex++;
            header.textContent = Headers[currIndex];
            text.textContent = Texts[currIndex];
        },14500);
    
        

});


var T_index = 1;
var Designs = document.getElementsByClassName("Design_img");


function changeDot(index) {
   
    switch(index){
        case 1:
        D1.style.backgroundColor = "#C2E812";
        D2.style.backgroundColor = "#1F1f1f";
        D3.style.backgroundColor = "#1F1f1f";
        D4.style.backgroundColor = "#1F1f1f";

        break;

        case 2:
            D1.style.backgroundColor = "#1f1f1f";
            D2.style.backgroundColor = "#C2E812";
            D3.style.backgroundColor = "#1F1f1f";
            D4.style.backgroundColor = "#1F1f1f";
            break;

        case 3:
            D1.style.backgroundColor = "#1f1f1f";
            D2.style.backgroundColor = "#1f1f1f";
            D3.style.backgroundColor = "#C2E812";
            D4.style.backgroundColor = "#1F1f1f";
        break;

        case 4:
            D1.style.backgroundColor = "#1f1f1f";
            D2.style.backgroundColor = "#1f1f1f";
            D3.style.backgroundColor = "#1f1f1f";
            D4.style.backgroundColor = "#C2E812";
        break;




    }



}

function fadeAway(variable){

    variable.animate([
        { opacity: '100' },
        { opacity: '0' },

    ], {
        duration: 1000, // Animation duration in milliseconds
        easing: 'ease', // Animation easing function
        fill: 'forwards', // Animation fill mode

    }).finished.then(function() {
        variable.style.display = "none";

    });

}

function fadeIn(variable){

    variable.animate([
        { opacity: '0' },
        { opacity: '100' },

    ], {
        duration: 1000, // Animation duration in milliseconds
        easing: 'ease', // Animation easing function
        fill: 'forwards', // Animation fill mode

    }).finished.then(function() {
        variable.style.display = "flex";

    });

}


var Actual = document.querySelector(".Form");
var CashApp = document.querySelector(".Payment");
var Submit = document.getElementById("Submit");


$(function(){

    $('.Order-Box').click(function(){

        var DesignPick = Designs[T_index-1].getAttribute('id');

        var Selection = document.getElementById("Selection");
        Selection.value = DesignPick;
        console.log(Selection.value);

        var H1 = document.querySelector("#page1");
        var H2 = document.querySelector("#page2");

        var Form = document.querySelector(".Secondary");
        var Border = document.querySelector(".Border");
        var Dots = document.querySelector(".Dots");
        var OrderButton = document.querySelector(".Pick");
        


        fadeAway(Border);
        fadeAway(Dots);
        fadeAway(OrderButton);
        fadeAway(H1);

        fadeIn(Form);
        fadeIn(H2);
    

    });

    $('#right').click(function(){

        

        if(T_index === Designs.length){
            T_index = 1;
        }
        else{
            T_index++;
        }

        for(var i = 0; i < Designs.length; i++){
            Designs[i].style.display = "none";
            
        }

    


      
        changeDot(T_index);
        Designs[T_index-1].style.display = "block";

        

    });


    $('#left').click(function(){
     

        if(T_index === 1){
            T_index = Designs.length;
        }
        else{
            T_index--;
        }

        for(var i = 0; i < Designs.length; i++){
            Designs[i].style.display = "none";
            
        }

        Designs[T_index-1].style.display = "block";
        changeDot(T_index);
        



    });



});


function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/iVxAM2hDnF85Qmn2/',
        type:'post',
        data:$(".Form").serializeArray(),
        success: function(){
          alert("Form Data Submitted :)")
        },
        error: function(){
          alert("There was an error :(")
        }
    });

    fadeAway(Actual);
    fadeIn(CashApp);
    fadeAway(Submit);



}