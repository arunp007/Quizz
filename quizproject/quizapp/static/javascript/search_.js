function search(){
    var name = document.getElementById('name')

    if(name.value == "HTML" || name.value == "html"){
        window.open('https://quizz1234.herokuapp.com/quizapp/html_home')
    }

    if(name.value == 'CSS' || name.value =='css'){
        window.open('https://quizz1234.herokuapp.com/quizapp/css_home')
    }

    if(name.value == 'JAVASCRIPT' || name.value =='javascript'){
        window.open('https://quizz1234.herokuapp.com/quizapp/javascript_home')
    }

    if(name.value == 'MYSQL' || name.value =='mysql'){
        window.open('https://quizz1234.herokuapp.com/quizapp/mysql_home')
    }

    if(name.value == 'PYTHON' || name.value =='python'){
        window.open('https://quizz1234.herokuapp.com/quizapp/python_home')
    }

    if(name.value == ""){
        document.getElementById('name').style.borderColor="red"
        document.getElementById('name_error').innerHTML="** Please Enter A Valid Name **"
        document.getElementById('name_error').style.color="red"
        document.getElementById('name_error').style.display="block"
        return false;  
    }
}