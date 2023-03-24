function checkMail(){

    if(email.value.match(/^[A-Za-z\._\-0-9]*[@][a-z]*[\.][a-z]{2,4}$/) && psw.value.match(/^[A-Za-z\-0-9]{1,20}$/))
    {
        window.confirm("welcome!!!");
        window.location.href='index.html';
        return true;
    }
    else{
        window.confirm("check your email or password");
        return false;
        
    }   
}
