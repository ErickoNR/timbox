<?php
session_start();
if (isset( $_GET['usuario']) && ( $_GET['usuario'] != "" ) ) {
  $_SESSION['usuario'] = $_GET['usuario'];
  $_SESSION['pass'] = $_GET['pass'];
  $_SESSION['correo'] = $_GET['correo'];
  $_SESSION['rfc'] = $_GET['rfc'];
  header('Location: principal.php');
}else{
  $_SESSION['usuario'] = null;
  $_SESSION['pass'] = null;
  $_SESSION['correo'] = null;
  $_SESSION['rfc'] = null;
  session_destroy();
  header('Location: ../index.html');
}

?>