<?php 
session_start();
if (isset($_SESSION["al"])){

$img_url= $_GET["img_url"];
$h= $_GET["h"];
$figcaption= $_GET["figcaption"];
$p= $_GET["p"];
$a= $_GET["a"];
$asrc= $_GET["asrc"];
$id= $_GET["id"];
 
// Load the HTML document
$dom = new DOMDocument;

$dom->validateOnParse = true;

// we want a nice output
$dom->formatOutput = true;
libxml_use_internal_errors(true);
$dom->loadHtmlFile( 'News.html');
    
$parnt=$dom->getElementById($id)->getElementsByTagName('table')->item(0)->getElementsByTagName('tr')->item(0)->getElementsByTagName('td')->item(0)->getElementsByTagName('figure')->item(0);
    
 $parnt2=$dom->getElementById($id)->getElementsByTagName('table')->item(0)->getElementsByTagName('tr')->item(0)->getElementsByTagName('td')->item(1);
    
$img = $parnt->getElementsByTagName('img')->item(0);
$capt = $parnt->getElementsByTagName('figcaption')->item(0);

$h3 = $parnt2->getElementsByTagName('h3')->item(0);
$par = $parnt2->getElementsByTagName('p')->item(0);
$atag = $parnt2->getElementsByTagName('a')->item(0);

$img->setAttribute('src',$img_url);
$capt->nodeValue = $figcaption;
    
$h3->nodeValue = $h;
$par->nodeValue = $p;
$atag->nodeValue = $a;
$atag->setAttribute('href',$asrc);
    
echo 'Wrote: ' . $dom->saveHTMLFile("News.html") . ' bytes';
echo ("ya rab :)");
libxml_clear_errors();
    }else{
    echo ("ya rab :) adkol");
}
?>

