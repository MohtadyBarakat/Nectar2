<?php 
session_start();
ini_set('default_charset','UTF-8'); 
if (isset($_SESSION["al"])){

$h= $_GET["h"];
$p= $_GET["p"];
$id= $_GET["id"];
 

// Load the HTML document
$dom = new DOMDocument;

$dom->validateOnParse = true;

// we want a nice output
$dom->formatOutput = true;
libxml_use_internal_errors(true);
$dom->loadHtmlFile( 'Aboutar.html');

$par = $dom->getElementById($id)->getElementsByTagName('p')->item(0);
$h3 = $dom->getElementById($id)->getElementsByTagName('span')->item(0);

$h3->nodeValue = $h;
$par->nodeValue = $p;

echo 'Wrote: ' . $dom->saveHTMLFile("Aboutar.html") . ' bytes';
echo ("ya rab :)".$h.$id);
libxml_clear_errors();
    }else{
    echo ("ya rab :) adkol");
}
?>

