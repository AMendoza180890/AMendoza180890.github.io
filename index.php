<!DOCTYPE html>
<html lang="en">

<!-- Aqui es el head y meta datos -->
 <?php
  include_once "pages/component/head.php";
 ?>

<body class="index-page">

  <!-- Aqui el header, Este espacio es para poder cargar las paginas -->
  <?php
  include_once "pages/Component/header.php";
  
  require_once "pages/component/pages.php";
  //$pages = array("main", "portfolio","portfolioDetail","resume");
  if (isset($_GET["r"])) {
    $ruta = $_GET["r"];
    foreach ($pages as $key => $value) {
      if ($ruta == $value){
        include_once "pages/".$ruta.".php";
      }
    }
  }
  ?>

  <!-- Aqui el main -->
  <?php
    include_once "pages/main.php";
  ?>

<!-- Este es el footer -->
<?php
  include_once "pages/component/footer.php";
 ?>
</body>

</html>