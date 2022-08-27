function total_score(){
    var score = 0
    var q1 = document.getElementById('py_quiz1_q1')
    var q2 = document.getElementById('py_quiz2_q4')
    var q3 = document.getElementById('py_quiz3_q3')
    var q4 = document.getElementById('py_quiz4_q3')
    var q5 = document.getElementById('py_quiz5_q2')
    var q6 = document.getElementById('py_quiz6_q2')
    var q7 = document.getElementById('py_quiz7_q1')
    var q8 = document.getElementById('py_quiz8_q3')
    var q9 = document.getElementById('py_quiz9_q2')
    var q10 = document.getElementById('py_quiz10_q3')
 
    if(q1 = 'A'){
        score++
    }

    if(q2 = 'D'){
        score++
    }

    if(q3 = 'C'){
        score++
    }

    if(q4 = 'C'){
        score++
    }

    if(q5 = 'B'){
        score++
    }

    if(q6 = 'B'){
        score++
    }

    if(q7 = 'A'){
        score++
    }

    if(q8 = 'C'){
        score++
    }

    if(q9 = 'B'){
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
