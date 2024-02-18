function validation(){
    if(document.fill.username.value==""){
        document.getElementById("result").innerHTML="Enter username*";
        return false;
    }
    else if(document.fill.username.value.length<6){
        document.getElementById("result").innerHTML="At least six letter*";
        return false;
    }
    else if(document.fill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your email*";
        return false;
    }
    else if(document.fill.password.value==""){
        document.getElementById("result").innerHTML="Enter your password*";
        return false;
    }
    else if(document.fill.password.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6 digits*";
        return false;
    }
    
    else if(document.fill.cpassword.value==""){
        document.getElementById("result").innerHTML="Enter confirm password*";
        return false;
    }
    else if(document.fill.cpassword.value!==document.fill.password.value){
        document.getElementById("result").innerHTML="password does'nt match*";
        return false;
    }
    else if(document.fill.password.value==document.fill.cpassword.value){
        popup.classList.add("open-slide")
        return false;
    }
    
    
}
var popup=document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove("open-slide")
}