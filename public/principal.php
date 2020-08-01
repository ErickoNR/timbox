<?php
session_start();
if (!isset($_SESSION['usuario']) || ($_SESSION['usuario']) == null || $_SESSION['usuario']=="" ) {
    header('Location: ../index.html');
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

<!-- estilos propios-->
<script type="text/javascript" src="./../js/principal.js"></script>
<script type="text/javascript" src="./../js/main.js"></script>

<link rel="stylesheet" type="text/css" href="../css/main.css" media="screen" />

<!-- iconos -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">

    <title>Principal</title>
    
    
</head>
<body>
<button class="float-right btn btn-secondary m-3"  data-toggle="modal" data-target="#Modal">Editar Perfil <i class='fas fa-user-cog'></i></button>
<button class="float-lefth btn btn-danger m-3" id="salir">Salir <i class='fas fa-times'></i></button>



<br>
    <div class="text-center mt-3 pt-5" >
        <h1> Bienvenido <?php echo $_SESSION['usuario'] ?> </h1>
       
    
    </div>
    <div class="text-center">
        <div class="mt-5  mx-auto py-5 primero w-50" >
            <h2 class="small font-weight-bold "> Ingresa una palabra </h2>
            <input class="form-control w-75 mx-auto " id="palabra" type="text" placeholder="ingresa palabra" /> 
            <input type="submit" class="btn btn-info mt-4" id="validar" value="validar palabra" ><br><br> 
            <b class="mt-5" id="respuesta"></b>
        </div>
    </div>
    


     <!-- Modal -->
  <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="Modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalScrollableTitle">Registro</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body ">
            <div>
                <form>
                    <div class="form-group row">
                      <label for="nombre" class="col-sm-4 col-form-label">Nombre</label>
                      <div class="col-sm-8">
                        <input type="text" class="entradas form-control"  id="nombre" value="<?php echo $_SESSION['usuario'] ?>" placeholder="Nombre">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="correo" class="col-sm-4 col-form-label">Correo Electronico</label>
                      <div class="col-sm-8">
                        <input type="email" class="entradas form-control"  id="correo" value="<?php echo $_SESSION['correo'] ?>" placeholder="Correo Electronico">
                      </div>
                    </div>
                    <div class="form-group row">
                        <label for="rfc" class="col-sm-4 col-form-label">RFC (solo mayusculas)</label>
                        <div class="col-sm-8">
                          <input type="text" class="entradas form-control" id="rfc" value="<?php echo $_SESSION['rfc'] ?>" placeholder="RFC">
                        </div>
                      </div>
                     
                        <div class="form-inline ">
                            <label for="contra" class="col-sm-4 col-form-label">Password</label><br/>
                            <div class="input-group col-sm-8 ">
                                <input class="entradas form-control " type="password" id="contra" name="contra" value="<?php echo $_SESSION['pass'] ?>" placeholder="Password" />
                                <i id="cambio2" name="1" class='fas fa-eye'></i>  
                            </div>
                        </div>

                       
                      
                                           
                </form>



            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary"  data-dismiss="modal">Salir</button>
          <button type="button" class="btn btn-primary" id="actualizar" >Actualizar</button>
        </div>
      </div>
    </div>
  </div>


    
</body>
</html>