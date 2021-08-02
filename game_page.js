
player1name = localStorage.getItem("player1");
player2name = localStorage.getItem("player2");

console.log(player1name);
console.log(player2name);

player1score = 0;
player2score = 0;

document.getElementById("player1").innerHTML = player1name + ":";
document.getElementById("player2").innerHTML = player2name + ":";

document.getElementById("player1score").innerHTML = player1score + ":";
document.getElementById("player2score").innerHTML = player2score + ":";

document.getElementById("player_question").innerHTML="Question turn :"+player1name;
document.getElementById("player_answer").innerHTML="Answer turn :"+player2name;

function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    console.log("word = " + word);

    charAT1=word.charAt(1);
    console.log(charAT1);

    var lengthd2=Math.floor(word.length/2);

    charAT2=word.charAt(lengthd2);
    console.log(charAT2);

    var lengthm1=word.length-1;

    charAT3=word.charAt(lengthm1);
    console.log(charAT3);

    var removecharAT1=word.replace(charAT1,"_");
    var removecharAT2=removecharAT1.replace(charAT2,"_");
    var removecharAT3=removecharAT2.replace(charAT3,"_");

    console.log("charAT3 ="+removecharAT3);
    questionword="<h4 id='word_display'> Q: "+removecharAT3+"</h4>";
    inputbox="<br> Answer : <input type='text' id ='input_check_box'>";
    check_btn="<br><br> <button class='btn btn-success' onclick='check()'> Check </button>";
    row=questionword+inputbox+check_btn;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

var question_turn="player1";
var answer_turn="player2";

function check(){
    getanswer=document.getElementById("input_check_box").value;
    answer=getanswer.toLowerCase();
    console.log(answer);
    if(answer==word){
        if (answer_turn=="player1") {
            player1score=player1score+1;
            document.getElementById("player1score").innerHTML=player1score;
        } else {
            player2score=player2score+1;
            document.getElementById("player2score").innerHTML=player2score;   
        }
    }
    if (question_turn=="player1") {
        question_turn="player2";
    } else {
        question_turn="player1";
    }
    if (answer_turn=="player1") {
        answer_turn="player2";
    } else {
        answer_turn="player1";
    }
    document.getElementById("output").innerHTML="";
}