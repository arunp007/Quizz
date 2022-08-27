function total_score(){
    var score = 0
    var q1 = document.getElementById('css_quiz1_q2')
    var q2 = document.getElementById('css_quiz2_q1')
    var q3 = document.getElementById('css_quiz3_q2')
    var q4 = document.getElementById('css_quiz4_q3')
    var q5 = document.getElementById('css_quiz5_q4')
    var q6 = document.getElementById('css_quiz6_q1')
    var q7 = document.getElementById('css_quiz7_q3')
    var q8 = document.getElementById('css_quiz8_q2')
    var q9 = document.getElementById('css_quiz9_q3')
    var q10 = document.getElementById('css_quiz10_q4')
 
    if(q1 = 'B'){
        score++
    }

    if(q2 = 'A'){
        score++
    }

    if(q3 = 'B'){
        score++
    }

    if(q4 = 'C'){
        score++
    }

    if(q5 = 'D'){
        score++
    }

    if(q6 = 'A'){
        score++
    }

    if(q7 = 'C'){
        score++
    }

    if(q8 = 'B'){
        score++
    }

    if(q9 = 'C'){
        score++
    }

    if(q10 = 'D'){
        score++
    }


    document.getElementById('score').innerHTML="Your Score Is "+score
    document.getElementById('score').style.color="green"
    document.getElementById('score').style.fontWeight="bolder"
    document.getElementById('score').style.fontSize="30px"

    if(score == 10){
        document.getElementById('message').innerHTML="Excellent"
    }

    if(score == 9){
        document.getElementById('message').innerHTML="Congratulations"
    }

    if(score == 8){
        document.getElementById('message').innerHTML="Awesome"
    }

    if(score == 7 || score == 6 || score == 5){
        document.getElementById('message').innerHTML="Good"
    }

    if(score == 1 || score == 2 || score == 3 || score == 4){
        document.getElementById('message').innerHTML="You Need To Study More"
    }
    
}
