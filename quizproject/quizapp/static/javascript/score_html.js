function total_score(){
    var score = 0
    var q1 = document.getElementById('html_quiz1_q1')
    var q2 = document.getElementById('html_quiz2_q2')
    var q3 = document.getElementById('html_quiz3_q3')
    var q4 = document.getElementById('html_quiz4_q1')
    var q5 = document.getElementById('html_quiz5_q2')
    var q6 = document.getElementById('html_quiz6_q4')
    var q7 = document.getElementById('html_quiz7_q3')
    var q8 = document.getElementById('html_quiz8_q4')
    var q9 = document.getElementById('html_quiz9_q1')
    var q10 = document.getElementById('html_quiz10_q3')
 
    if(q1 = 'A'){
        score++
    }

    if(q2 = 'B'){
        score++
    }

    if(q3 = 'C'){
        score++
    }

    if(q4 = 'A'){
        score++
    }

    if(q5 = 'B'){
        score++
    }

    if(q6 = 'D'){
        score++
    }

    if(q7 = 'C'){
        score++
    }

    if(q8 = 'D'){
        score++
    }

    if(q9 = 'A'){
        score++
    }

    if(q10 = 'C'){
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
