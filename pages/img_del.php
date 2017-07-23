<?php
session_start();
if (isset($_SESSION["al"])){
unlink("../assets/images/".$_GET["x"]);
echo($_GET["x"]);
    }else{
    echo ("ya rab :) adkol");
}
?>