let height = window.screen.height;
let width = window.screen.width;
console.log(height);
console.log(width); 
let bat;
let score1 = 0;
let score2 = 0;
let scores1 = 0 , scores2 = 0;


function start(){
    document.querySelector("#toss-id").classList.add("hide");
    document.querySelector("#game").classList.add("visible");
}

function rand_bat() {
     bat = true;
    let randomNumber1 = Math.floor(Math.random() * 6 + 1);
    let randomNumber2 = Math.floor(Math.random() * 6 + 1);
    score1 = score1 + randomNumber1;
    score2 = score2 + randomNumber2;
    if (randomNumber1 == randomNumber2) {
        document.querySelector(".player").setAttribute("src", "odd/giphy.gif");
        document.querySelector(".bot").setAttribute("src", "odd/out.gif");
        document.querySelector(".score1").innerHTML = "your score is" + score1;
    
        if(score1 > 0 &&score2 > 0){
        scores1 = score1;
        scores2 = score2;
        }
           if (scores1 > scores2) {
                  document.querySelector(".win").innerHTML = "you Win!!!!";
                  document.querySelector(".loss").innerHTML = "you Loose ";
             } else if (scores1 == scores2 && scores1 != scores2) {
                  document.querySelector(".win").innerHTML = "Draw";
                  document.querySelector(".loss").innerHTML = "Draw ";
           } else if (scores1 < scores2) {
                  document.querySelector(".win").innerHTML = "you Loose";
                  document.querySelector(".loss").innerHTML = "you Win ";
         }

    } else {
        change(randomNumber1);
        bot(randomNumber2);
    }    
}

function rand_bowl(){
    let randomNumber1 = Math.floor(Math.random() * 6 + 1);
    let randomNumber2 = Math.floor(Math.random() * 6 + 1);
     score1 = score1 + randomNumber1;
     score2 = score2 + randomNumber2;
     
    if (randomNumber1 == randomNumber2) {
        document.querySelector(".player").setAttribute("src", "odd/out.gif");
        document.querySelector(".bot").setAttribute("src", "odd/giphy.gif");
        document.querySelector(".score2").innerHTML = "your score is" + score2;

        if (score1 > 0 && score2 > 0) {
         scores1 = score1;
         scores2 = score2;
        }
           if (scores1 > scores2) {
              document.querySelector(".win").innerHTML = "you Win!!!!";
              document.querySelector(".loss").innerHTML = "you Loose ";
            }
            else if (scores1 == scores2 && scores1 != scores2) {
             document.querySelector(".win").innerHTML = "Draw";
             document.querySelector(".loss").innerHTML = "Draw ";
            } 
           else if (scores1 < scores2) {
              document.querySelector(".win").innerHTML = "you Loose";
              document.querySelector(".loss").innerHTML = "you Win ";
            }

         
    }
    else{
        change(randomNumber1);
        bot(randomNumber2);
     }
}

function rand(){
    if(bat == true)
     rand_bat();
     else
     rand_bowl();
}
 

function change(randomNumber1){     
       document.querySelector(".player").setAttribute("src", "odd/" + randomNumber1 + ".png");
}

function bot(randomNumber2){
     document.querySelector(".bot").setAttribute("src", "odd/" + randomNumber2 + ".png");
}
