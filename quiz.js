var correct = ["London", "Sun", "India", "Max Verstappen"];
var questions = [
     "What is the capital of Great Britain?",
     "What is the closest to the Earth star?",
     "Which country has the highest population?", 
     "Who won the F1 Drivers Championship in 2022 season?"];
var choice_options = [
     ["London", "New York", "Paris", "Dublin"],
     ["Alpha Centauri", "Sirius", "Sun", "Andromeda"],
     ["India", "China", "USA", "Kazakhstan"],
     ["Lewis Hamilton", "Justin Bieber", "Fernando Alonso", "Max Verstappen"]];

$(document).ready(function(){
    
    quizBox = $("#quiz-box"); // Jquery
    
    quizBox.append ("<div class='question'>");
    

    for(let i = 0; i<questions.length; i++) {
     $('.question').append ("<p class='d'>" + questions[i] + "</p>");
     for(let j = 0; j<choice_options[i].length;j++){
          $('.question').append ("<label><input type='radio' name='q-"+i+"' value='"+choice_options[i][j]+"'>"+choice_options[i][j]+"</label>")
     }
    }

    reset = false;

    $("button").click (function (event){
     countCorrect = 0;
     for(let i = 0; i<questions.length; i++){
     $("input[name=q-"+i+"]").each (function (index){
            choice = $(this).parent().text(); 
            if ($( this ).prop("checked") == true && correct [i] == choice){
                 countCorrect += 1;
            }
     });
    }
     $("#quiz-box h2").last().remove();
     $("#quiz-box").append ("<h2>Result of the quiz is: " + countCorrect + " out of " + questions.length + "</h2>");
     }); 

});