function ar() {
    document.getElementById('en-nav').style.display = "none";
    document.getElementById('ar-nav').style.display = "block";

    //    var etxt = document.getElementsByClassName("entxt");
    //    var atxt = document.getElementsByClassName("artxt");
    //    for (i = 0; i < etxt.length; i++) {
    //       // etxt[i].style.display = "none";
    //    } 
}

function en(x) {
    x = x || 0;
    document.getElementById('en-nav').style.display = "block";
    document.getElementById('ar-nav').style.display = "none";
    //    var etxt = document.getElementsByClassName("entxt");
    //    var atxt = document.getElementsByClassName("artxt");
    //    for (i = 0; i < etxt.length; i++) {
    //        etxt[i].style.display = "block";
    //        atxt[i].style.display = "none";
    //    }
}



function arvsen() {
    var txt = "";
    var url = window.location.href;
    var hashtag = /#/i;
    var exp = /ar$/;
    var ac = exp.exec(url);
    if (ac == "ar") {
        ar();
    } else {
        en();
    }
    if (url.match(hashtag) == "#") {
        txt = url.split("#")[1];
        if (txt == "About") {
            document.getElementById("ifAbout").src = "/pages/About/About.html";
        } else if (txt == "Industry") {
            document.getElementById("ifIndustry").src = "/pages/Industry/Industry.html";
        } else if (txt == "Team") {
            document.getElementById("ifTeam").src = "/pages/Team/Team.html";
        } else if (txt == "Competetions") {
            document.getElementById("ifCompetetions").src = "/pages/Competetions/Competetions.html";
        } else if (txt == "Media") {
            document.getElementById("ifMedia").src = "/pages/Media/Media.html";
        } else if (txt == "Parteners") {
            document.getElementById("ifParteners").src = "/pages/Parteners/Parteners.html";
        } else if (txt == "Services") {
            document.getElementById("ifServices").src = "/pages/Services/Services.html";
        } else if (txt == "News") {
            document.getElementById("ifNews").src = "/pages/News/News.html";
        } else if (txt == "Aboutar") {
            document.getElementById("ifAboutar").src = "/pages/Aboutar/Aboutar.html";
        } else if (txt == "Industryar") {
            document.getElementById("ifIndustryar").src = "/pages/Industryar/Industryar.html";
        } else if (txt == "Teamar") {
            document.getElementById("ifTeamar").src = "/pages/Teamar/Teamar.html";
        } else if (txt == "Competetionsar") {
            document.getElementById("ifCompetetionsar").src = "/pages/Competetionsar/Competetionsar.html";
        } else if (txt == "Mediaar") {
            document.getElementById("ifMediaar").src = "/pages/Mediaar/Mediaar.html";
        } else if (txt == "Partenersar") {
            document.getElementById("ifPartenersar").src = "/pages/Partenersar/Partenersar.html";
        } else if (txt == "Servicesar") {
            document.getElementById("ifServicesar").src = "/pages/Servicesar/Servicesar.html";
        } else if (txt == "Newsar") {
            document.getElementById("ifNewsar").src = "/pages/Newsar/Newsar.html";
        }
    } else {
        en();
    }

}

function wait() {
    arvsen();
    document.getElementById('landpage').classList.remove("page-section-current");
}

function ar_men_close() {
    $('#ar-nav').css("left","-355px");

}
$(document).ready(function () {
    $('.ar .fa-bars').click(function () {
        $('#ar-nav').css("left","0px");
    })
});




//the gard. of .., 3
