function validar() {
  
    let nombre = document.formularioo.txt_nombre.value;
    let apellido = document.formularioo.txt_apellido.value;
    let edad = document.formularioo.txt_edad.value
    let rut = document.getElementById("txt_rut");
    let expRut = /^\d{8}-\d{1}$/;
    let telefono = document.getElementById("txt_telefono"); 
    let expTelefono = /^\d{9}$/; 
    

    
    if ((nombre.charAt(0)!='A') || (nombre.length!=6))
    {
        alert("nombre debe iniciar con:A, y tener un largo de 6 caracteres");
        document.formularioo.txt_nombre.focus();
        return false;
    
    
       
    }
    if ((apellido.length!=6))
    {
        alert("nombre debe iniciar con:A, y tener un largo de 6 caracteres");
        document.formularioo.txt_apellido.focus();
        return false;
    
    
       
    }
    if (parseInt(edad)<18 || parseInt(edad)>65)                
    {
           alert("edad debe ser entre 18 y 65");
           document.fomularioo.txt_edad.focus();
           return false;
   }
   if(!rut.value.match(expRut))
   { 
     alert("Formato RUT no valido"); 
      rut.focus(); 
     return false; 
   }
   if(!telefono.value.match(expTelefono))
   { 
      alert("Movil no valido"); 
         movil.focus(); 
             return false; 
    } 
    alert("¡¡¡ Todo Correcto !!!");
}  