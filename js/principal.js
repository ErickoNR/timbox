$(document).ready(function(){



    $('#palabra').on("blur", function() {
    
            $("#respuesta").text("");
    
    });/// final para cambiar inconos y ver contraseñas
    

   



$('#validar').on("click", function() {
    
    var cadena = $("#palabra").val().toLowerCase();
    var cadenarevertida = "";
    if (cadena !="" ){
           //Itero la cadena de manera inversa
    for(var i = cadena.length-1; i>=0; i--)
    {
    //Voy concatenando el valor a la cadena resultado
    cadenarevertida += cadena[i];
    }
    
    console.log(cadenarevertida);
    console.log(cadena);

    if (cadena == cadenarevertida){
        $("#respuesta").text("¡es un paíndromo!");
    }else{
        $("#respuesta").text("NO es un paíndromo");
    }
    
    }else{
        $("#respuesta").text("no ingresaste la palabra");

    }

});/// final para cambiar inconos y ver contraseñas



$('#salir').on("click", function() {
   
       location.href ="./valida.php";

        

});/// final para cambiar inconos y ver contraseñas









});