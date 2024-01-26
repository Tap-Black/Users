

var Titles = ["Golden Goodness",
"Green Glow",
"Orange Oasis Cleanse",
"Pine-Apple"
]

var Colors = ["yellow",
"#66690E",
"#F39354",
"yellow"
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
            /*
            var title = document.getElementById('title');
             title.style.color = Colors[currIndex];

            */

            
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





    var Orange_Oasis = 0;
    var Green_Glow = 0;
    var G_Price = Green_Glow *12;
    var O_Price = Orange_Oasis *12;
    
    var t_Price = 0;
    var t_Num = 0;
    

    var Green_Cart = document.getElementById("Green_Cart");
    var Green_Am = document.getElementById("Green_am");
    var Green_num = document.querySelectorAll(".G-num")
    var Green_price = document.querySelector(".G-price");

    
    var Orange_Cart = document.getElementById("Orange_Cart");
    var Orange_Am = document.getElementById("Orange_am");
    var Orange_num = document.querySelectorAll(".O-num")
    var Orange_price = document.querySelector(".O-price");

    var Payment_Screen = document.getElementById("Payment");
    var Total_Num = document.getElementById("total-num");
    var Total_Price = document.getElementById("total-price");

    var Cash_App = document.querySelector(".CashApp");
    var Pay_Link = document.getElementById("PayNow");





    $('#Green_Cart').click(function(){

        Green_Glow  = 1;

       

        Green_Cart.style.display = "none";
        Green_Am.style.display = "flex";

        var paymentStyle = window.getComputedStyle(Payment_Screen);

        var displayType = paymentStyle.getPropertyValue('display');
    

        if(displayType != "flex"){
            Payment_Screen.style.display = "flex";
            Cash_App.style.display = "flex";

            Payment_Screen.animate([
                { height: '0px' },
                { height: '300px' },
    
            ], {
                duration: 500, // Animation duration in milliseconds
                easing: 'ease', // Animation easing function
                fill: 'forwards' // Animation fill mode
            });
    
        }

        
        
        for (var i = 0; i < Green_num.length; i++) {
            Green_num[i].textContent = Green_Glow;


        }

        G_Price = Green_Glow*12;
        Green_price.textContent = "$"+(G_Price);

        t_Num = Green_Glow+Orange_Oasis;
        Total_Num.textContent = t_Num;

        t_Price = G_Price + O_Price;
        Total_Price.textContent = "$"+t_Price;
        Pay_Link.href = "https://cash.me/$CamML/"+t_Price+".00/";

        


    })

    $('#Orange_Cart').click(function(){

        Orange_Oasis  = 1;

       

        Orange_Cart.style.display = "none";
        Orange_Am.style.display = "flex";

        var paymentStyle = window.getComputedStyle(Payment_Screen);

        var displayType = paymentStyle.getPropertyValue('display');
    

        if(displayType != "flex"){
            Payment_Screen.style.display = "flex";

            Payment_Screen.animate([
                { height: '0px' },
                { height: '300px' },
    
            ], {
                duration: 500, // Animation duration in milliseconds
                easing: 'ease', // Animation easing function
                fill: 'forwards' // Animation fill mode
            });
    
        }
        
        for (var i = 0; i < Orange_num.length; i++) {
            Orange_num[i].textContent = Orange_Oasis;


        }

        O_Price = Orange_Oasis*12;
        Orange_price.textContent = "$"+(O_Price);

        t_Num = Green_Glow+Orange_Oasis;
        Total_Num.textContent = t_Num;

        t_Price = G_Price + O_Price;
        Total_Price.textContent = "$"+t_Price;
        Pay_Link.href = "https://cash.app/$CamML/"+t_Price+".00/";

        


    })





    $('#G-left').click(function(){

        Green_Glow -= 1;
       
        if(Green_Glow === 0){
            Green_Cart.style.display = "flex";
            Green_Am.style.display = "none";
        }

        for (var i = 0; i < Green_num.length; i++) {
            Green_num[i].textContent = Green_Glow;
       
        }

        G_Price = Green_Glow*12;
        Green_price.textContent = "$"+(G_Price);

        t_Num = Green_Glow+Orange_Oasis;
        Total_Num.textContent = t_Num;

        t_Price = G_Price+O_Price;
        Total_Price.textContent = "$"+t_Price;
        Pay_Link.href = "https://cash.me/$CamML/"+t_Price+".00/";

        

        if(Green_Glow === 0 && Orange_Oasis === 0){
            Payment_Screen.animate([
                { height: '300px' },
                { height: '0px' },

            ], {
                duration: 500, // Animation duration in milliseconds
                easing: 'ease', // Animation easing function
                fill: 'forwards', // Animation fill mode

            }).finished.then(function() {
                Payment_Screen.style.display = "none";
            });
        }   

       


    })


    $('#O-left').click(function(){

        Orange_Oasis -= 1;
       
        if(Orange_Oasis === 0){
            Orange_Cart.style.display = "flex";
            Orange_Am.style.display = "none";
        }

        for (var i = 0; i < Orange_num.length; i++) {
            Orange_num[i].textContent = Orange_Oasis;
       
        }

        O_Price = Orange_Oasis*12;
        Orange_price.textContent = "$"+(O_Price);

        t_Num = Green_Glow+Orange_Oasis;
        Total_Num.textContent = t_Num;

        t_Price = G_Price+O_Price;
        Total_Price.textContent = "$"+t_Price;

        Pay_Link.href = "https://cash.me/$CamML/"+t_Price+".00/";


        if(Green_Glow === 0 && Orange_Oasis === 0){
            
            Payment_Screen.animate([
                { height: '300px' },
                { height: '0px' },

            ], {
                duration: 500, // Animation duration in milliseconds
                easing: 'ease', // Animation easing function
                fill: 'forwards', // Animation fill mode

            }).finished.then(function() {
                Payment_Screen.style.display = "none";
            });

        }   

       


    })


    $('#G-right').click(function(){

        Green_Glow += 1;
        
        for (var i = 0; i < Green_num.length; i++) {
            Green_num[i].textContent = Green_Glow;


        }

        G_Price = Green_Glow*12;
        
        Green_price.textContent = "$"+(G_Price);
        
        G_Price = Green_Glow*12;
        Green_price.textContent = "$"+(G_Price);

        t_Num = Green_Glow+Orange_Oasis;
        Total_Num.textContent = t_Num;

        t_Price = G_Price+O_Price;
        Total_Price.textContent = "$"+t_Price;

        
        Pay_Link.href = "https://cash.me/$CamML/"+t_Price+".00/";



    })



    $('#O-right').click(function(){

        Orange_Oasis += 1;
        
        for (var i = 0; i < Orange_num.length; i++) {
            Orange_num[i].textContent = Orange_Oasis;


        }

        O_Price = Orange_Oasis*12;
        
        Orange_price.textContent = "$"+(O_Price);
        
        O_Price = Orange_Oasis*12;
        Orange_price.textContent = "$"+(O_Price);

        t_Num = Green_Glow+Orange_Oasis;
        Total_Num.textContent = t_Num;

        t_Price = G_Price+O_Price;
        Total_Price.textContent = "$"+t_Price;

        Pay_Link.href = "https://cash.me/$CamML/"+t_Price+".00/";

        
       


    })










});

var coll = document.getElementsByClassName("Info");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var tab = document.querySelector('.Collapse')
    var ctext = document.getElementById("MoreInfo")
    var arrow = document.querySelector(".Info img")
    this.classList.toggle("active");
    var content = this.previousElementSibling;
    
    if (window.getComputedStyle(content).display === "block") {
      content.style.display = "none";

        

      content.animate([
        {height: '100%'},
        {height: '0%' },

    ], {
        duration: 1000, // Animation duration in milliseconds
        easing: 'ease', // Animation easing function
        fill: 'none' // Animation fill mode
    });

    
    
    } else {
      content.style.display = "block";
    

      content.animate([
        {height: '0'},
        {height: '100%' }


    ], {
        duration: 1000, // Animation duration in milliseconds
        easing: 'ease', // Animation easing function
        fill: 'none' // Animation fill mode
    });

   
    }


  });
}
