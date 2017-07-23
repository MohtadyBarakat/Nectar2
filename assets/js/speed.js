function speedup(section){
    location.href='#'+section;
    a="if"+section;
    if( document.getElementById(a) != undefined){
    document.getElementById(a).src="/pages/"+section+"/"+section+".html";
    console.log("/pages/"+section+"/"+section+".html");
    }
};