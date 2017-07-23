"use strict";
var hi = "";
var h4i = "";
var pi = "";
var ha;
var figcaption;
var a;
var asrc;
var pa;
var tp;
var src;
var x = Array;
var i = 0;
var img_url;
var xa = Array;
var ia = 0;

Dropzone.options.myDropzone = {
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 1, // MB
    acceptedFiles: ".jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF",
    maxFiles: 1,
    resizeWidth: 250,
    renameFilename: function (filename) {
        xa[ia] = new Date().getTime() + '_' + filename;
        ia = ia + 1;
        return xa[ia - 1];
    },
    maxfilesexceeded: function (file) {
        this.removeAllFiles();
        this.addFile(file);
        $.ajax({
            url: '../../img_del.php',
            data: {
                x: xa[xa.length - 1]
            },
            success: function (data) {
                alert("hi " + data);
            }

        });
    }
};


function dis() {
    $("#flot").css("display", "block");
    $("#add").css("display", "none");
}

function dis2() {
    $("#flot2").css("display", "block");
    $("#add2").css("display", "none");
}

function cancel() {
    document.getElementById("h_3").value = "";
    document.getElementById("par").value = "";
    $("#h_r").prop("checked", false);
    $("#flot").css("display", "none");
    $("#add").css("display", "block");
    if (ia > 0) {
        $.ajax({
            url: '../../img_del.php',
            data: {
                x: xa[ia - 1]
            },
            success: function (data) {
                alert("hi " + data);
            }

        });
       Dropzone.forElement("#myDropzone").removeAllFiles(true);
    }
}

function edit(tis) {
    var dv = tis.parentElement;
    var dv2= dv.getElementsByTagName("figure")[0];
    var dv3= dv.getElementsByTagName("td")[1];

    hi = dv.getElementsByTagName("h3")[0].innerHTML;
    figcaption = dv.getElementsByTagName("figcaption")[0].innerHTML;

    pi = dv.getElementsByTagName("p")[0].innerHTML;
    pa = dv.getElementsByTagName("p")[0].attributes;

    src = dv2.getElementsByTagName("img")[0].src;
    
    a = dv.getElementsByTagName("a")[0].innerHTML;
    asrc = dv.getElementsByTagName("a")[0].href;

    var para0 = document.createElement("form");
    para0.classList.add('dropzone');
    para0.id = "myAwesomezone";
    para0.action = "../../upload.php";
    dv2.appendChild(para0);
    
    var para0_cap = document.createElement("textarea");
    var node0_cap = document.createTextNode(figcaption);
    para0_cap.appendChild(node0_cap);
    dv2.appendChild(para0_cap);
    
    
    var para = document.createElement("textarea");
    var node = document.createTextNode(hi);
    para.appendChild(node);
    dv3.appendChild(para);


    var para3 = document.createElement("textarea");
    var node3 = document.createTextNode(pi);
    para3.appendChild(node3);
    dv3.appendChild(para3);
    
    var para4 = document.createElement("textarea");
    var node4 = document.createTextNode(a);
    para4.appendChild(node4);
    dv3.appendChild(para4);

    var para5 = document.createElement("textarea");
    var node5 = document.createTextNode(asrc);
    para5.appendChild(node5);
    dv3.appendChild(para5);

    dv.getElementsByTagName("textarea")[2].style.height = '500px';

    dv.getElementsByClassName("edit_b")[0].style.display = "inline-block";
    dv.getElementsByClassName("edit_b")[1].style.display = "inline-block";

    dv.getElementsByTagName("h3")[0].remove();
    dv.getElementsByTagName("figcaption")[0].remove();
    dv.getElementsByTagName("p")[0].remove();
    dv.getElementsByTagName("a")[0].remove();
    dv2.getElementsByTagName("img")[0].remove();

    $("#myAwesomezone").dropzone({
        paramName: "file", // The name that will be used to transfer the file
        maxFilesize: 1, // MB
        acceptedFiles: ".jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF",
        maxFiles: 1,
        resizeWidth: 250,
        renameFilename: function (filename) {
            x[i] = new Date().getTime() + '_' + filename;
            i = i + 1;
            return x[i - 1];
        },
        accept: function (file, done) {
            if (file.name == "justinbieber.jpg") {
                done("Naha, you don't.");
            } else {
                done();
            }
        },
        maxfilesexceeded: function (file) {
            this.removeAllFiles();
            this.addFile(file);
            $.ajax({
                url: '../../img_del.php',
                data: {
                    x: "../../assets/images/" + x[x.length - 1]
                },
                success: function (data) {
                    alert("hi " + data);
                }

            });
        }

    });

}

function edit_save(ths) {
//    var dv = ths.parentElement.parentElement;
//
//    hi = dv.getElementsByTagName("textarea")[0].value;
//    pi = dv.getElementsByTagName("textarea")[1].value;
//
//
//    var para = document.createElement("h3");
//    var node = document.createTextNode(hi);
//    para.appendChild(node);
//    dv.appendChild(para);
//
//    tp = $("<textarea class='p'></textarea>").text(pi);
//
//    var para2 = document.createElement("p");
//    var node2 = document.createTextNode(pi);
//    para2.appendChild(node2);
//    dv.appendChild(para2);
//
//    dv.getElementsByTagName("textarea")[0].remove();
//    dv.getElementsByTagName("textarea")[0].remove();
//    src = dv2.getElementsByTagName("img")[0].remove();
//    dv.getElementsByClassName("edit_b")[0].style.display = "none";
//    dv.getElementsByClassName("edit_b")[1].style.display = "none";
//    return true;
}

function edit_cancel(ths) {
    var dv = ths.parentElement.parentElement;
    var dv2 = dv.getElementsByTagName("figure")[0];
    var dv3= dv.getElementsByTagName("td")[1];
    dv.getElementsByTagName("textarea")[0].remove();
    dv.getElementsByTagName("textarea")[0].remove();
    dv.getElementsByTagName("textarea")[0].remove();
    dv.getElementsByTagName("textarea")[0].remove();
    dv.getElementsByTagName("textarea")[0].remove();
    dv.getElementsByTagName("form")[0].remove();

    var para0 = document.createElement("img");
    para0.setAttribute("src", src);
    para0.setAttribute("width", "100");
    para0.setAttribute("height", "100");
    dv2.appendChild(para0);
    
    
    var para2 = document.createElement("figcaption");
    var node2 = document.createTextNode(h4i);
    para2.appendChild(node2);
    dv2.appendChild(para2);

    var para = document.createElement("h3");
    var node = document.createTextNode(hi);
    para.appendChild(node);
    dv3.appendChild(para);

    var para4 = document.createElement("p");
    var node4 = document.createTextNode(pi);
    para4.appendChild(node4);
    dv3.appendChild(para4);
    
    var para5 = document.createElement("a");
    var node5 = document.createTextNode(a);
    para5.appendChild(node5);
    para5.setAttribute("href", asrc);
    dv3.appendChild(para5);

    dv.getElementsByClassName("edit_b")[0].style.display = "none";
    dv.getElementsByClassName("edit_b")[1].style.display = "none";
    if (i > 0) {
        $.ajax({
            url: '../img_del.php',
            data: {
                x: "../../assets/images/" + x[i - 1]
            },
            success: function (data) {
                alert("hi " + data);
            }

        });
    }
}

function del(ths) {
    ths.parentElement.remove();
}
$(document).ready(function () {
    $('.edSave').click(function () {

        var dv = this.parentElement.parentElement;
        if (i > 0) {
            img_url = "../../../assets/images/" + x[i - 1];
            $.ajax({
            url: '../../img_del_url.php',
            data: {
                x: src
            },
            success: function (data) {
                alert("hi " + data);
            }

        });
        } else {
            img_url = src;
        }
        var figcaption = dv.getElementsByTagName("textarea")[0].value;
        var hi = dv.getElementsByTagName("textarea")[1].value;
        var pi = dv.getElementsByTagName("textarea")[2].value;
        var a = dv.getElementsByTagName("textarea")[3].value;
        var asrc = dv.getElementsByTagName("textarea")[4].value;
        var id = $(this).parent().parent().attr("id");
        
        $.ajax({
            url: 'news_edit.php',
            type: 'GET',
            data: {
                img_url:img_url,
                figcaption: figcaption,
                h: hi,
                p: pi,
                a:a,
                asrc:asrc,
                id: id
            },
            success: function (data) {
                alert(data);

            }
        });
    })
});

function brn() {
    if (ia > 0) {
        var img = "../../../assets/images/" + xa[ia - 1];
    } else {
        var img = "";
    }
    var h3 = document.getElementById("h_3").value;
    var figcaption = document.getElementById("figcaption").value;
    var a = document.getElementById("a").value;
    var asrc = document.getElementById("asrc").value;
    var pdata = document.getElementById("par").value;
    var max = $("ul:first-of-type").attr("id");

    $.ajax({
        url: 'news_e.php',
        type: 'GET',
        data: {
            img_src: img,
            h3: h3,
            figcaption: figcaption,
            p: pdata,
            max: max,
            a: a,
            asrc: asrc
        },
        success: function (data) {
            alert(data);

        }
    });
};
