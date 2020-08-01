$(document).ready(function(){

var base = new Array();

  

    function sinDatos(ide){
        console.log($("#"+ide).removeClass("entradas"));
        console.log($("#"+ide).addClass("alertar"));
        $("#"+ide).removeClass("entradas");
        $("#"+ide).addClass("alertar");
    }

    function conDatos(ide){
        $("#"+ide).removeClass("alertar");
        $("#"+ide).addClass("entradas");
    }


    
    $('#ingresar').on("click", function() {/// inicio cpmprobación de usuario y contraseña correcta
        let basee= ingresar( $("#usuario").val(), $("#pass").val() );
        if ( basee == false ) {
            $("#msj").text("¡Datos incorrectos!");
            $("#msj").css('color','red');
        }else{
            location.href ="./public/valida.php?usuario="+basee['nombre']+"&pass="+basee['contra']+"&correo="+basee['correo']+"&rfc="+basee['rfc']
        }
    });/// final comprobación de usuario y contraseña correcta


    function ingresar(usuario,contra){
        resultado = base.find( correo => correo.correo == usuario.toLowerCase() );
        if (resultado){
           
            resultado2 = base.find( contrasena => contrasena.contra == contra );

            if (resultado2){
                return resultado2;
            }

        }else{
            console.log("no se encontró");
        }
        return false;
    }



    function validarCorreo(){
        var email = $('#correo').val().toLowerCase();
        let salida =true;
        const caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
        if (caract.test(email) == false){
            sinDatos("correo");
            salida = false;
        }

        return salida;

    }
        
    function validarRFC(){
        let salida = true;
        const re = new RegExp( /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/);
        if (re.test( $("#rfc").val().toUpperCase() ) == false){
            sinDatos("rfc");
            salida = false;
        }else{

            resultado = base.find( busqueda => busqueda.rfc == $("#rfc").val().toUpperCase() );
            if (resultado){
                salida = false;
                sinDatos("rfc");
                $("#rfc").val("");
            }
        }
        return salida;
    }
    
   

    
        $("input").on("blur", function(){ /// inicio para poner en rojo los campos vacios
            let idd = $(this).attr("id");
            if ($("#"+idd).val()=="" ){
                sinDatos(idd);
            }else{
                conDatos(idd);
                
                if(idd == "rfc"){
                    validarRFC();
                }
            } 

            if(idd == "pass" || idd =="usuario"){
                $("#msj").text("");

            }else if(idd == "correo"){
                validarCorreo();
            }else if (idd == "c_contra"){
                if ( $("#contra").val() !=  $("#c_contra").val()){
                    sinDatos("c_contra");
                }

            }

        });    /// final para poner en rojo los campos vacios  
        
        


          $('i').on("click", function() {/// inicio para cambiar iconos y ver contraseñas
            let idd = $(this).attr("id");
            if( $('#'+idd).attr('name') == '1' ) {
                $('#'+idd).attr('name', '0');
                $('#'+idd).removeClass("fa-eye");
                $('#'+idd).addClass("fa-eye-slash");

                if (idd == "cambio3"){
                    $("#c_contra").prop("type", "text");
                }else if(idd == "cambio2"){
                    $("#contra").prop("type", "text");
                }else{
                    $("#pass").prop("type", "text");
                    
                }

            }else{
                $('#'+idd).attr('name', '1');
                $('#'+idd).removeClass("fa-eye-slash");
                $('#'+idd).addClass("fa-eye");

                if (idd == "cambio3"){
                    $("#c_contra").prop("type", "password");
                }else if(idd == "cambio2"){
                    $("#contra").prop("type", "password");
                }else{
                    $("#pass").prop("type", "password");
                     
                }
            }
        });/// final para cambiar inconos y ver contraseñas
    
        $('#guardar').on("click", function() {
            if (validarCorreo()==true  && validarRFC()==true && $("#nombre").val() != "" && $("#nombre").val() !="" ){
                let arreglo = {
                    "nombre" : $("#nombre").val(),
                    "correo" : $("#correo").val().toLowerCase(),
                    "rfc" : $("#rfc").val().toUpperCase(),
                    "contra" : $("#contra").val(),
                };
                base.push(arreglo);
                $("#nombre").val(""),
                $("#correo").val(""),
                $("#rfc").val(""),
                $("#contra").val(""),
                $('#ModalScrollable').modal('hide');
               
            }else{
                console.log("error");
            }
            
            
        });/// final para cambiar inconos y ver contraseñas
    


        $('#actualizar').on("click", function() {
            if (validarCorreo()==true  && validarRFC()==true && $("#nombre").val() != "" && $("#nombre").val() !="" ){
               alert("Se Realizaron los Cambios")
                location.href ="./valida.php?usuario="+$("#nombre").val()+"&pass="+$("#contra").val()+"&correo="+$("#correo").val().toLowerCase()+"&rfc="+$("#rfc").val().toUpperCase();
        
            }
                
    
        });/// final para cambiar inconos y ver contraseñas
















});