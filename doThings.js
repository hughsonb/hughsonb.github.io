var answerbox = document.getElementById('AnswerBox');
var abilities = document.getElementsByClassName('ability');
var totalAbilitiesText = document.getElementById('denominator');
var answersCorrect = document.getElementById('numerator');


//Count the total abilities
totalAbilitiesText.innerHTML = abilities.length;
//Count initial amount correct (Should be 0)
updateCount();
//Enter answer

//Check if answer is correct

// THEN we need to check each value of it. Also do tolower
//Then if x == y update the .text of it with it's value

function checkAnswer()
{
    //Check if the entered value is one of the abilities
    $('.ability').each(function(){

        var guess = answerbox.value;
        var abilities = $(this).data('abilityname');
        var regex = new RegExp(abilities.join( "|" ), "i");
        
        //Answer is correct
        if(regex.test(guess)){
            $(this).text($(this).data('abilityname')[0]);//Display the answer
        }
     });

    //After all this updateCount
    updateCount();
    //Reset Answer 
    answerbox.value= "";
}


$("form").on("submit", function(e){
    e.preventDefault();
    checkAnswer();
});


//Count how many elements with ability are being shown.
function updateCount(){
    var counter = 0;
    $('.ability').each(function(){
        if($(this).text() !== ""){
            counter++;
        }
     });
    answersCorrect.innerHTML = counter;

    hideRow();
}


function showAnswers()
{
    //Iterate through each one and display the answers.
    $('.ability').each(function(){
            $(this).text($(this).data('abilityname')[0]);//Will show first acceptable answer
     });


    //Display appropriate message
    var denom = abilities.length;
    var numer = answersCorrect.innerHTML;
    var answer = (numer/denom)*100;
    alert("Your Percentage Correct is: " + parseFloat(answer).toFixed(2) + "%");
}

function clearAnswers()
{
        //Iterate through each one and hide the answers.
        $('.ability').each(function(){
            $(this).text("");//Display the answer
     });

     $('tr').each(function(){
        $(this).show();
     });

     updateCount();
}

function hideRow()
{
    /* I dont think we need this but I liked it 
    $('td:first-child').each(function() {
        console.log($(this).text());
    });
    */

    $('tr').each(function(){
        var trLength = $(this).children('td.ability').length;
        var counter = 0;
        //This being TR and we are now looking at each td
        $(this).find('td.ability').each (function() {
            if($(this).text() !== "")
            {
                counter++;
            }

            if(counter == trLength)
            {
                $(this).parent().hide();
            }
        });  
        counter = 0;                      
    });

}