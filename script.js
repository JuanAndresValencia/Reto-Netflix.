

document.addEventListener('DOMContentLoaded', () => { 
    
    setTimeout(function(){
         let correouser = localStorage.getItem("Correo Usuario")
         let spacecorreo = document.getElementById("correouser").innerHTML = "Sesion activa : " + correouser;
    }, 1000);


})