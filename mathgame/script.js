var gameRunning = false;
var action;
var score = 0;
var timeRemaining;
var sum;
//if we click on the start/startreset
document.getElementById("startreset").onclick = function startResetButton() {
   //if we are playing reload page
   if(gameRunning == true){location.reload();
   }
   //if we are not playing
   else{
      gameRunning = true;
      //change button to startreset
      document.getElementById('startreset').innerHTML = "Reset Game";
      //set score to 0

      document.getElementById('scoreValue').innerHTML = score;
      document.getElementById('scoreValue1').innerHTML = score;
      //show countdown box
      var countDownBox = document.getElementById('timeremaining').style.display="block";
         timeRemaining = 60;
         document.getElementById('timeremainingvalue').innerHTML = timeRemaining;
      //reduce time by 1 sec in loops
      //timeleft?
         //yes->continue
         //no_>gameover
      startCountdown();

      }
   }

      function startCountdown(){
         action = setInterval(function(){
            timeRemaining -= 1;
            document.getElementById('timeremainingvalue').innerHTML = timeRemaining;
            function stopCountdown(){
               clearInterval(action);
            }
            if(timeRemaining==0){ //game over
               stopCountdown();
               document.getElementById('gameover').style.display='block';
               document.getElementById('gameover').innerHTML= "<p>game over</p> <p>your score is " + score + "."
            }
         }, 1000);

      //generate new question and multiple answers
      function numberGen(){

      var a = Math.round(Math.random()*9+1);
         if(a<=1){
            a=2;
         }
      var b = Math.round(Math.random()*9+1);
         if(b<=1){
            b = Math.round(Math.random()*9+1);
         }
         if(b==a){
            b=Math.round(Math.random()*9+1);
         }
      var r = Math.round(Math.random()*9+1);
         if(r<=1){
            r=2;
         }
      var rr = Math.round(Math.random()*9+1);
         if(rr<=1){
            rr= Math.round(Math.random()*9+1);
         }
         if(rr==r){
            rr=Math.round(Math.random()*9+1);
         }

      sum = a*b
      var wrong1 = (a*b)+r;
      var wrong2 = (a*b)-rr+r;
      var wrong3 = (a*b)+rr;
      var neg1= 0-1;
         if(wrong1<0){
            wrong1 * neg1;
         }
         if(wrong2<0){
            wrong2 * neg1;
         }
         if(wrong3<0){
            wrong3 * neg1;
         }
         var answer = [sum, wrong1, wrong2, wrong3];

      answer.sort();

      document.getElementById('question').innerHTML = a + "x" + b;
      document.getElementById('box1').innerHTML = answer[0]
      document.getElementById('box2').innerHTML = answer[1]
      document.getElementById('box3').innerHTML = answer[2]
      document.getElementById('box4').innerHTML = answer[3]
      }
      numberGen();

//if we click on answer box
//correct?



      function correct(){
         document.getElementById('correct').style.display = "block"
         setTimeout(function(){ document.getElementById('correct').style.display = "none" }, 1250);
         }

      function wrong(){
         document.getElementById('wrong').style.display = "block"
         setTimeout(function(){ document.getElementById('wrong').style.display = "none" }, 1250);
         }


      document.getElementById('box1').onclick=function(){
         let box1 = document.getElementById('box1').innerHTML;
         if(box1 == sum){
            correct();
               //increase score
            score += 1;
            document.getElementById('scoreValue').innerHTML = score;
            document.getElementById('scoreValue1').innerHTML = score;
            numberGen();
            }else{
            wrong();
            numberGen();
            }
      }


      document.getElementById('box2').onclick=function(){
         let box1 = document.getElementById('box2').innerHTML;
         if(box1 == sum){
            correct();
               //increase score
            score += 1;
            document.getElementById('scoreValue').innerHTML = score;
            document.getElementById('scoreValue1').innerHTML = score;
            numberGen();
            }else{
            wrong();
            numberGen();
            }
      }


      document.getElementById('box3').onclick=function(){
         let box1 = document.getElementById('box3').innerHTML;
         if(box1 == sum){
            correct();
               //increase score
            score += 1;
            document.getElementById('scoreValue').innerHTML = score;
            document.getElementById('scoreValue1').innerHTML = score;
            numberGen();
            }else{
            wrong();
            numberGen();
            }
      }


      document.getElementById('box4').onclick=function(){
         let box1 = document.getElementById('box4').innerHTML;
         if(box1 == sum){
            correct();
               //increase score
            score += 1;
            document.getElementById('scoreValue').innerHTML = score;
            document.getElementById('scoreValue1').innerHTML = score;
            numberGen();
            }else{
            wrong();
            numberGen();
            }
      }




}
