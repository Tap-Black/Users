 var header = document.getElementById("Top");
 var text = document.getElementById("Bottom");
 var D1 = document.getElementById("D1");
 var D2 = document.getElementById("D2");
 var D3 = document.getElementById("D3");
 var D4 = document.getElementById("D4");


var Headers = [
    "One Card",
    "Tap",
    "Connect",
    "Go"
]

var Texts = [
    "ahfadskjflajfklajfsa",
    "adsjfilkajfskaljfaljf",
    "Conadsfjlasdkjnect",
    "adsfafas"
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