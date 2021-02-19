
document.addEventListener('DOMContentLoaded', () => {
    
    let buttonnext = document.getElementById("buttonsubmit");
    buttonnext.addEventListener("click", (event) => {
        event.preventDefault()

        
        
        //Obtener campo de corre y contraseña
        let email = document.getElementById("inputemail").value;
        let password = document.getElementById("inputpassword").value;
        if (email == "" || password == ""){
            alert("No puede haber ningun campo vacio")
        }

        //Verificar si el correo no se ha usado 
        const checkemail = () => {
            let correostorage = localStorage.getItem("Correo Usuario")
            let email = document.getElementById("inputemail").value;
            
            if(correostorage == email){
                alert("Ya haz usado este correo, intenta con uno diferente")
            } else{
                if ( email != "" && password != "") {
                    localStorage.setItem("Correo Usuario", email)
                    localStorage.setItem("Contraseña", password)
                    window.location.href = "start.html"
                }
            }
        }

        checkemail()

        
            
        
        

        
        
    })
})