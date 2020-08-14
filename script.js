document.getElementById("scoreForm").style.display= "none";
var score = 0;
var x;
var randomButton = Math.floor(Math.random()*1)+50;
var randomGreenButton = Math.floor(Math.random()*1)+79;
var whiteSpeed = 400;
var greenSpeed = 300;
var intervalLoop;
var intervalLoop2;
var div = document.createElement("div");
document.body.appendChild(div);
div.setAttribute("class","divClass");

if(score > 100){
    whiteSpeed = 150;
    greenSpeed = 125;
} else if(score > 200){
    whiteSpeed = 125;
    greenSpeed = 100;
} else if(score > 300){
    whiteSpeed = 100;
    greenSpeed = 75;
} else if(score > 400){
    whiteSpeed = 50;
    greenSpeed = 35;
}

function startButton(){

    document.getElementById("scoreDisplay").innerHTML = "Score : " + score; 
    document.getElementById("loseImage").style.display = "none";
    document.getElementById("entry").style.display = "none";
     intervalLoop = setInterval(Button, whiteSpeed);
     intervalLoop2 = setInterval(buttonGreen, greenSpeed);
     $("h1").setAttribute("class","margin");
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
        loseSound();
        $(this).css("background-color","Red");
        // alert("Loose...........");
        clearInterval(intervalLoop);
        clearInterval(intervalLoop2);
        document.getElementById("scoreDisplay").innerHTML = "Score : " + score;  
        $(".divClass").hide();
        $("#entry").hide();
        $("#game-head").hide();
        document.getElementById("start-button").style.display = "none";
        document.getElementById("loseImage").style.display = "block";
        document.getElementById("retryGame").style.display = "block";
        window.scrollTo(0, 0); 
        // -------------------------------------

    // -----------------------------------
              
    });
}
function buttonGreen(){
    var btnGreen = document.createElement("button");
    var btnBlue;
    div.appendChild(btnGreen);
    btnGreen.setAttribute("style","background-color: #4CAF50");
    btnGreen.setAttribute("class","clickBlue");

    
    $(btnGreen).click(function() {
        
        btnBlue = $(this).css("background-color","Blue");
        btnGreen.setAttribute("class","blueColor");
        score = score+1;
        document.getElementById("scoreDisplay").innerHTML = "Score : " + score;
        winSound(this);
        

    });
    window.addEventListener('scroll', function() {
        var element = document.querySelector('.clickBlue');
        var position = element.getBoundingClientRect();
        // checking whether fully visible
        if(position.top <= 0 && position.bottom <= window.innerHeight) {
            
            console.log('not visible');
            clearInterval(intervalLoop);
            clearInterval(intervalLoop2);
            $("#entry").hide();
            $(".divClass").hide();
            $("#game-head").hide();
            document.getElementById("scoreDisplay").innerHTML = "Score : " + score; 
            document.getElementById("start-button").style.display = "none";
            document.getElementById("loseImage").style.display = "block";
            document.getElementById("retryGame").style.display = "block";
            window.scrollTo(0, 0);
            // -------------------------------------
       
        // -----------------------------------
        }
    });
}

function scoreSubmit(){
    document.getElementById("scoreForm").value = score;
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxxBmocWi2977pbfU23fiBgdiMB-I88kc2anmHiIA/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            // alert("Form submitted successfully")
            window.location.reload();
        },
        error:function (err){
          window.location.href="failure.html";

        }
    })
}

function winSound(win){
    var greenSound = new Audio("green.mp3");
    greenSound.play();
}

function loseSound(){
    var whiteSound = new Audio("wrong.mp3");
    whiteSound.play();
}

function themeToggle(){
    var element = document.body;
   element.classList.toggle("dark-mode");
}    
