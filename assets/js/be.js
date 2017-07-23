var xa = Array;
var ia = 0;
var c = "";
var c2 = "";
Dropzone.options.myAwesomeDropzone2 = {
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 1, // MB
    acceptedFiles: ".jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF",
    maxFiles: 1,
    resizeWidth: 250,
    renameFilename: function (filename) {
        xa[ia] = new Date().getTime() + '_';
        ia = ia + 1;
        c = xa[ia - 1] + filename;
        return c;
    },
    maxfilesexceeded: function (file) {
        this.removeAllFiles();
        this.addFile(file);
    }
};
var xp = Array;
var ip = 0;
Dropzone.options.myzone2 = {
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 5, // MB
    acceptedFiles: ".pdf",
    maxFiles: 1,
    renameFilename: function (filename) {
        c2 = xa[ia - 1] + filename;
        return c2;
    },
    maxfilesexceeded: function (file) {
        this.removeAllFiles();
        this.addFile(file);
    }
};

if (typeof (String.prototype.trim) === "undefined") {
    String.prototype.trim = function () {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

var name = "";
var city = "";
var Nationality = "";
var Qualification = "";
var FB = "";
var linkedin = "";
var Email = "";
var Phone = "";
var Birth;
var Gender = "";
var Specialization = "";

function next2(x) {
    if (x == 1) {
        name = $("#name2").val();
        city = $("#city2").val();
        Nationality = $("#Nationality2").val();
        if (name.trim() == "") {
            $("#city2").css("border-color", "#fff");
            $("#p12").html("الرجاء ادخال اسمك");
            $("#name2").css("border-color", "red");
        } else if (city.trim() == "") {
            $("#name2").css("border-color", "#fff");
            $("#p12").html("الرجاء ادخال مدينتك");
            $("#city2").css("border-color", "red");
        } else {
            $("#p12").html("");
            $("#name2").css("border-color", "#fff");
            $("#city2").css("border-color", "#fff");
            $("#pageone2").toggle("slide");
            $("#pagetwo2").toggle("slide");
        }
    } else if (x == 2) {
        Qualification = $("#Qualification2").val();
        if (Qualification.trim() == "") {
            $("#Qualification2").css("border-color", "red");
            $("#p22").html("الرجاء المؤهل الدراسي");
        } else {
            $("#pagetwo2").toggle("slide");
            $("#pagethree2").toggle("slide");
            $("#Qualification2").css("border-color", "#fff");
            $("#p22").html("");
        }
    } else if (x == 3) {
        Email = $("#Email2").val();
        Phone = $("#Phone2").val();
        Birth = $("#Birth2").val();
        FB = $("#FB2").val();
        linkedin = $("#linkedin2").val();
        Gender = $('input[name="gender2"]:checked').val();
        Specialization = $("#Specialization2").val();

        if (Email.trim() == "") {
            $("#Email2").css("border-color", "red");
            $("#p32").html("الرجاء ادخال الايميل");
            $("#Phone2").css("border-color", "#fff");

        } else if (Phone.trim() == "") {
            $("#Phone2").css("border-color", "red");
            $("#p32").html("الرجاء ادخال رقم الهاتف");
            $("#Email2").css("border-color", "#fff");
        } else if (Gender == undefined) {
            $("#p32").html("اختر نوعك رجاءاً");
            $("#Email2").css("border-color", "#fff");
            $("#Phone2").css("border-color", "#fff");

        } else {
            $("#Email2").css("border-color", "#fff");
            $("#Phone2").css("border-color", "#fff");
            $("#p32").html("");
            $("#pagethree2").toggle("slide");
            $("#pagefour2").toggle("slide");
            mail()
        }
    } else if (x == 4) {

        $("#pagefour2").toggle("slide");
        $("#pageone2").toggle("slide");

    }
}

Dropzone.options.myAwesomeDropzone = {
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 1, // MB
    acceptedFiles: ".jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF",
    maxFiles: 1,
    resizeWidth: 250,
    renameFilename: function (filename) {
        xa[ia] = new Date().getTime() + '_';
        ia = ia + 1;
        c = xa[ia - 1] + filename;
        return c;
    },
    maxfilesexceeded: function (file) {
        this.removeAllFiles();
        this.addFile(file);
    }
};
var xp = Array;
var ip = 0;
Dropzone.options.myzone = {
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 5, // MB
    acceptedFiles: ".pdf",
    maxFiles: 1,
    renameFilename: function (filename) {
        c2 = xa[ia - 1] + filename;
        return c2;
    },
    maxfilesexceeded: function (file) {
        this.removeAllFiles();
        this.addFile(file);
    }
};

if (typeof (String.prototype.trim) === "undefined") {
    String.prototype.trim = function () {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

var name = "";
var city = "";
var Nationality = "";
var Qualification = "";
var FB = "";
var linkedin = "";
var Email = "";
var Phone = "";
var Birth;
var Gender = "";
var Specialization = "";

function next(x) {
    if (x == 1) {
        name = $("#name").val();
        city = $("#city").val();
        Nationality = $("#Nationality").val();
        if (name.trim() == "") {
            $("#city").css("border-color", "#fff");
            $("#p1").html("Please enter your Name");
            $("#name").css("border-color", "red");
        } else if (city.trim() == "") {
            $("#name").css("border-color", "#fff");
            $("#p1").html("Please enter your City");
            $("#city").css("border-color", "red");
        } else {
            $("#p1").html("");
            $("#name").css("border-color", "#fff");
            $("#city").css("border-color", "#fff");
            $("#pageone").toggle("slide");
            $("#pagetwo").toggle("slide");
        }
    } else if (x == 2) {
        Qualification = $("#Qualification").val();
        if (Qualification.trim() == "") {
            $("#Qualification").css("border-color", "red");
            $("#p2").html("Please enter your Qualification");
        } else {
            $("#pagetwo").toggle("slide");
            $("#pagethree").toggle("slide");
            $("#Qualification").css("border-color", "#fff");
            $("#p2").html("");
        }
    } else if (x == 3) {
        Email = $("#Email").val();
        Phone = $("#Phone").val();
        Birth = $("#Birth").val();
        FB = $("#FB").val();
        linkedin = $("#linkedin").val();
        Gender = $('input[name="gender"]:checked').val();
        Specialization = $("#Specialization").val();

        if (Email.trim() == "") {
            $("#Email").css("border-color", "red");
            $("#p3").html("Please enter your Email");
            $("#Phone").css("border-color", "#fff");

        } else if (Phone.trim() == "") {
            $("#Phone").css("border-color", "red");
            $("#p3").html("Please enter your Phone");
            $("#Email").css("border-color", "#fff");
        } else if (Gender == undefined) {
            $("#p3").html("Please enter your Gender");
            $("#Email").css("border-color", "#fff");
            $("#Phone").css("border-color", "#fff");

        } else {
            $("#Email").css("border-color", "#fff");
            $("#Phone").css("border-color", "#fff");
            $("#p3").html("");
            $("#pagethree").toggle("slide");
            $("#pagefour").toggle("slide");
            mail()
        }
    } else if (x == 4) {

        $("#pagefour").toggle("slide");
        $("#pageone").toggle("slide");

    }
}
function mail() {
    var text = "<head>    <meta http-equiv='Content-Type' content='text/html;' charset='utf-8' /></head><h2 style='text-align:center;color:blue;'>I'm " + name + "<sub>(" + Gender + ")</sub></h2><h3 style='text-align:center;'>I live in " + city + "</h3>" + "<p> I was Borne " + Birth + "</p><br><p>I have finshed " + Qualification + "</p><br><p style:'color:red;'> It will be my pleasure to help in " + Specialization + " department</p><br><hr><p>Please fell free to contact me on </p><br><ul><li><a href='" + FB + "'> Facebook " + FB + "</a></li><li><a href='" + linkedin + "'> Linked In " + linkedin + "</a></li><li> My phone number is " + Phone + "</li></ul>" + " For my CV and my Photo please cheak the attached files ";
    $.ajax({
        url: 'benectarian.php',
        data: {
            text: text,
            x: c,
            xp: c2,
            name: name
        },
        success: function (data) {
            if (data == 1) {
                $(".final_alert").css("visibility", "visible");
            } else {
                alert(data)
            }
        }

    });
}