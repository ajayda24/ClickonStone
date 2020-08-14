document.getElementById("scoreForm").style.display= "none";
var score = 0;
var x;
var whiteSpeed = 600;
var greenSpeed = 530;
var intervalLoop;
var intervalLoop2;
var div = document.createElement("div");
document.body.appendChild(div);
div.setAttribute("class","divClass");



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
        if(score < 10){
            whiteSpeed = 550;
            greenSpeed = 500;
        } else if(score > 20){
            whiteSpeed = 500;
            greenSpeed = 450;
        } else if(score > 30){
            whiteSpeed = 450;
            greenSpeed = 400;
        } else if(score > 50){
            whiteSpeed = 400;
            greenSpeed = 350;
        } else if(score > 70){
            whiteSpeed = 350;
            greenSpeed = 300;
        } else if(score > 90){
            whiteSpeed = 300;
            greenSpeed = 250;
        } else if(score > 110){
            whiteSpeed = 250;
            greenSpeed = 200;
        } else if(score > 130){
            whiteSpeed = 200;
            greenSpeed = 150;
        } else if(score > 150){
            whiteSpeed = 150;
            greenSpeed = 100;
        } else if(score > 170){
            whiteSpeed = 100;
            greenSpeed = 50;
        } else if(score > 200){
            whiteSpeed = 50;
            greenSpeed = 25;
        }

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
