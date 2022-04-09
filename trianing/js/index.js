function validateForm() {

    var validation = "";
    if (document.getElementById('name').value == "") {
        document.getElementById('nameval').innerHTML='invaid name';

    }
    if (document.getElementById('email').value == "") {
        document.getElementById('emailval').innerHTML='invaid email';

    }
    if (document.getElementById('username').value == "") {
        document.getElementById('usernval').innerHTML='invaid username';

    }
    if (document.getElementById('password').value == "") {
        document.getElementById('passval').innerHTML='invaid password';
    }
 if(document.getElementById('dropView').value==""){
  
    document.getElementById('dropval').innerHTML='invaid selection';
 }
 if(document.getElementById('accept').value==""){
   
   document.getElementById('chk').innerHTML='invaid pls select';
}


if(document.getElementById('radio').value==undefined){
    alert("pls select");
   document.getElementById('rdchk').innerHTML='invaid pls select';
}
   
    return true;
}




