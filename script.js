
// var n = 1;
// var m = 2;
// var o = 5; 
var randomButton = Math.floor(Math.random()*1)+50;
var randomGreenButton = Math.floor(Math.random()*1)+79;
var intervalLoop;
var intervalLoop2;
var div = document.createElement("div");
document.body.appendChild(div);
div.setAttribute("class","divClass");

function startButton(){
    document.getElementById("loseImage").style.display = "none";
    document.getElementById("entry").style.display = "none";
     intervalLoop = setInterval(Button, randomButton);
     intervalLoop2 = setInterval(buttonGreen, randomGreenButton);
    
}

function Button(){
   
    for(var i=1;i<2;i++){
        var btn = document.createElement("button");
        div.appendChild(btn);
        btn.setAttribute("class","clickWhite");
        
        window.scrollTo({
            top : document.body.scrollHeight,
            behavior: 'smooth'
        });
    
    }
    $(".clickWhite").click(function() {
        $(this).css("background-color","Red");
        // alert("Loose...........");
        clearInterval(intervalLoop);
        clearInterval(intervalLoop2);
        $("div").hide();
        document.getElementById("start-button").style.display = "none";
        document.getElementById("loseImage").style.display = "block";
        document.getElementById("retryGame").style.display = "block";
        window.scrollTo(0, 0);         
    });
}
function buttonGreen(){
    var btnGreen = document.createElement("button");
    div.appendChild(btnGreen);
    btnGreen.setAttribute("class","clickBlue");
    btnGreen.setAttribute("style","background-color: #4CAF50");
    // var x = $(".clickBlue").position();
    // if(x.top==23){
    // alert(x.top);
    // }
    // var y = $(this).position();
    // alert(y.top);
    $(".clickBlue").click(function() {
        $(this).css("background-color","Blue");
        // var y = $(this).position();
        // alert(y.top);
    });
}


