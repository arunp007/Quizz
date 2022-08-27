function total_score(){
    var score = 0
    var q1 = document.getElementById('mysql_quiz1_q2')
    var q2 = document.getElementById('mysql_quiz2_q4')
    var q3 = document.getElementById('mysql_quiz3_q2')
    var q4 = document.getElementById('mysql_quiz4_q1')
    var q5 = document.getElementById('mysql_quiz5_q3')
    var q6 = document.getElementById('mysql_quiz6_q2')
    var q7 = document.getElementById('mysql_quiz7_q2')
    var q8 = document.getElementById('mysql_quiz8_q3')
    var q9 = document.getElementById('mysql_quiz9_q1')
    var q10 = document.getElementById('mysql_quiz10_q1')
 
    if(q1 = 'B'){
        score++
    }

    if(q2 = 'D'){
        score++
    }

    if(q3 = 'B'){
        score++
    }

    if(q4 = 'A'){
        score++
    }

    if(q5 = 'C'){
        score++
    }

    if(q6 = 'B'){
        score++
    }

    if(q7 = 'B'){
        score++
    }

    if(q8 = 'C'){
        score++
    }

    if(q9 = 'A'){
        score++
    }

    if(q10 = 'A'){
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
