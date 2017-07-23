<?php 
session_start();
if (isset($_SESSION["al"])){
                                
$img_src = $_GET["img_src"];
$h3 = $_GET["h3"];
$p = $_GET["p"];
$figcaption = $_GET["figcaption"];
$a = $_GET["a"];
$asrc = $_GET["asrc"];
$max = $_GET["max"];
$maxNum=(int)(substr($max,1));

// Load the HTML document
$dom = new DOMDocument;

// we want a nice output
$dom->formatOutput = true;
$dom->validateOnParse = true;

libxml_use_internal_errors(true);
$dom->loadHtmlFile( 'News.html');

    
$parent = $dom->getElementById($max);
//first parent div

$li = new DOMElement('li');
$parent->appendChild($li);
$li->setAttribute("id", "a".($maxNum+1));
    
$i1 = new DOMElement('i');
$i2 = new DOMElement('i');
$i3 = new DOMElement('i');
$br = new DOMElement('br');

$li->appendChild($i1);
$li->appendChild($i2);
$li->appendChild($i3);
$li->appendChild($br);

$i1->setAttribute("class", "fa fa-ellipsis-v sp");
$i1->setAttribute("aria-hidden", "true");

$i2->setAttribute("class", "fa fa-pencil-square-o sp");
$i2->setAttribute("aria-hidden", "true");
$i2->setAttribute("onclick", "edit(this)");

$i3->setAttribute("class", "fa fa-window-close sp");
$i3->setAttribute("aria-hidden", "true");
//$i3->setAttribute("onclick", "del(this)");

$divch1 = new DOMElement('div');
$li->appendChild($divch1);
$divch1->setAttribute("class", "button-container-2 edit_b");

$span1 = new DOMElement('span');
$divch1->appendChild($span1);
$span1->setAttribute("class", "mas");
$span1->nodeValue = "Save";

$b1 = new DOMElement('button');
$divch1->appendChild($b1);
$b1->setAttribute("class", "edSave");
$b1->setAttribute("type", "button");
$b1->setAttribute("name", "Hover");
$b1->nodeValue = "Save";


$divch2 = new DOMElement('div');
$li->appendChild($divch2);
$divch2->setAttribute("class", "button-container-1 edit_b");

$span2 = new DOMElement('span');
$divch2->appendChild($span2);
$span2->setAttribute("class", "mas");
$span2->nodeValue = "Cancle";

$b2 = new DOMElement('button');
$divch2->appendChild($b2);
$b2->setAttribute("onclick", "edit_cancel(this)");
$b2->setAttribute("type", "button");
$b2->setAttribute("name", "Hover");
$b2->nodeValue = "Cancle";

$table = new DOMElement('table');
$li->appendChild($table);    
    
$tr = new DOMElement('tr');
$table->appendChild($tr);    

$td1 = new DOMElement('td');
$tr->appendChild($td1); 

$td2 = new DOMElement('td');
$tr->appendChild($td2); 

$fig = new DOMElement('figure');
$td1->appendChild($fig); 

$img = new DOMElement('img');
$fig->appendChild($img); 
$img->setAttribute("src",$img_src);
$img->setAttribute("width","100px");
$img->setAttribute("height","100px");

$cap = new DOMElement('figcaption');
$fig->appendChild($cap); 
$cap->nodeValue = $figcaption;
    
$h_3 = new DOMElement('h3');
$td2->appendChild($h_3);
$h_3->nodeValue = $h3;
    
$p2 = new DOMElement('p');
$td2->appendChild($p2);
$p2->nodeValue = $p;

$atag = new DOMElement('a');
$td2->appendChild($atag);
$atag->nodeValue = $a;
$img->setAttribute("href",$asrc);
    
$parent->setAttribute("id", "p".($maxNum+1));


// Save the resulting HTML
echo 'Wrote: ' . $dom->saveHTMLFile("News.html") . ' bytes';
echo ("ya rab :)");
libxml_clear_errors();
    }else{
    echo ("ya rab :) adkol");
}
?>
