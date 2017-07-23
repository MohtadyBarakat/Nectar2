        var nextnum = 1;
        var prevnum = 0;
        var tdlen = 0;

        function antiprev() {
            document.getElementById("showimg").style.display = "none";
            document.getElementById("data").style.zIndex = "100";
            document.getElementById("data").style.opacity = 1;
            document.body.style.background = "";
        }

        function nxt(n2shURL, n2shData) {
            prev(n2shURL);
            dt(n2shData)
        }

        function pst(p2shURL, n2shData) {}
        //=x.


        function ex() {
            $(document).mouseup(function (e) {
                var container = $("#previmg");
                var figcap = $("#figcaptiondata");
                var ntinxtex = $(".nxt");
                var prinxtex = $(".prev");
                var figp = $("#figtext");

                if (!container.is(e.target) && !figcap.is(e.target) && !prinxtex.is(e.target) && !ntinxtex.is(e.target) && !figp.is(e.target)) {
                    antiprev()
                }
            });
        }
        $(document).keyup(function (e) {
            if (e.keyCode == 27) {
                antiprev()
            }
        });

        function repeat() {
            data=localStorage.getItem("data");
            c = JSON.parse(localStorage.getItem("data"));
            localStorage.setItem("data", data);
            tdlen = c.x;
            var section = document.getElementsByTagName("section")[0];
            for (i = 0; i < tdlen ; i++) {

                var div = document.createElement("div");
                div.classList.add('td');
                div.setAttribute("data-index", i+1);
                div.setAttribute("data-im", c.data_im[i]);
                div.setAttribute("data-url", c.urls_disp[i]);
                section.appendChild(div);

                var img0 = document.createElement("img");
                img0.classList.add('dabus');
                img0.classList.add('a');
                img0.setAttribute("src", "clipart-pin.png");
                img0.setAttribute("width", "50px");
                div.appendChild(img0);

                var img1 = document.createElement("img");
                img1.classList.add('sh');
                img1.classList.add('example');
                img1.setAttribute("src", c.urls_main[i]);
                div.appendChild(img1);

                var div2 = document.createElement("div");
                div2.classList.add('de');
                div2.setAttribute("onclick", "prev(" + c.urls_disp[i] + ")");
                div.appendChild(div2);

                var p = document.createElement("p");
                var node = document.createTextNode(c.txt[i]);
                p.appendChild(node);
                div2.appendChild(p);

            }
            var imgs = document.querySelectorAll(".example")
            var ipoint = document.querySelectorAll(".a")
            var imne = document.querySelectorAll(".de")
            for (var x = 0; x < imgs.length; x++) {
                var rot = Math.floor(Math.random() * 21) - 10;
                n = "rotate(" + rot + "deg)";

                // Code for Safari
                ipoint[x].style.WebkitTransform = n;
                // Code for IE9
                ipoint[x].style.msTransform = n;
                // Standard syntax
                ipoint[x].style.transform = n;
                // Code for Safari
                imgs[x].style.WebkitTransform = n;
                // Code for IE9
                imgs[x].style.msTransform = n;
                // Standard syntax
                imgs[x].style.transform = n;
                // Code for Safari
                imne[x].style.WebkitTransform = n;
                // Code for IE9
                imne[x].style.msTransform = n;
                // Standard syntax
                imne[x].style.transform = n;
            }
            $(document).ready(function () {
                $(".example").hover(function () {
                        $(this).next().css("animation-name", "ex");
                        $(this).css("opacity", "0.8");
                        $(this).css("z-index", "100");
                        $(this).css("background-color", "#fff");
                        $(this).css("-webkit-filter", "blur(4px)");
                        $(this).css("filter", "blur(4px)");
                        $(this).css("box-shadow", " 0 0 7px 7px rgba(0, 140, 186, 0.3), 0px 0px 5px 5px gray");
                    },
                    function () {
                        $(this).next().css("animation-name", "antiex");
                        $(this).css("opacity", "1");
                        $(this).css("z-index", "100");
                        $(this).css("background-color", "none");
                        $(this).css("-webkit-filter", "blur(0px)");
                        $(this).css("filter", "blur(0px)");
                        $(this).css("box-shadow", "0px 0px 5px 5px gray");
                    }
                );

                $(".de").hover(function () {
                    $(this).css("animation-name", "ex");
                    $(this).prev().css("box-shadow", " 0 0 7px 7px rgba(0, 140, 186, 0.3), 0px 0px 5px 5px gray");
                    $(this).css("cursor", "pointer");
                    $(this).prev().css("opacity", "0.8");
                    $(this).prev().css("z-index", "100");
                    $(this).prev().css("background-color", "#fff");
                    $(this).prev().css("-webkit-filter", "blur(4px)");
                    $(this).prev().css("filter", "blur(4px)");

                }, function () {
                    $(this).css("animation-name", "antiex");
                    $(this).prev().css("opacity", "1");
                    $(this).prev().css("z-index", "100");
                    $(this).prev().css("background-color", "none");
                    $(this).prev().css("-webkit-filter", "blur(0px)");
                    $(this).prev().css("filter", "blur(0px)");
                    $(this).prev().css("box-shadow", "0px 0px 5px 5px gray");

                });

                $(document).on("click", ".td", function () {
                    document.getElementById("previmg").src = $(this).data("url");
                    document.getElementById("showimg").style.display = "block";
                    document.getElementById("data").style.zIndex = "-100";
                    document.getElementById("data").style.opacity = 0.1;
                    document.body.style.background = "rgba(150, 150, 150, 0.619608)";
                    var xx = $(this).data("index");
                    $("#figtext").text($(this).data("im"));
                    nexta = Number(xx);
                    if (xx == tdlen) {
                        nextnum = "1";
                        prevnum = tdlen-1;
                        
                    } else if (xx == 1){
                        nextnum = "2";
                        prevnum = tdlen;      
                               
                    }else {
                        var nextnumtxt = Number($(this).data("index")) + 1;
                        nextnum = nextnumtxt.toString();

                        var prevnumtxt = Number($(this).data("index"))-1;
                        prevnum = prevnumtxt.toString();
                    }
                });
                $(document).on("click", ".nxt", function () {
                    $("#figtext").text($(".td[data-index=" + nextnum + "]").data("im"));
                    document.getElementById("previmg").src = $(".td[data-index=" + nextnum + "]").data("url");
                    prevnum = nextnum-1;
                    var xx = Number(nextnum);
                    if (xx == tdlen) {
                        nextnum = "1";

                    } else {
                        var nextnumtxt = Number(nextnum) + 1;
                        nextnum = nextnumtxt.toString();
                    }

                });
                $(document).on("click", ".prev", function () {
                    $("#figtext").text($(".td[data-index=" + prevnum + "]").data("im"));
                    document.getElementById("previmg").src = $(".td[data-index=" + prevnum + "]").data("url");
                    nextnum = prevnum;
                    var xx = Number(prevnum);
                    if (xx == 1) {
                        prevnum = tdlen;

                    } else {
                        var prevnumtxt = Number(prevnum) - 1;
                        prevnum = prevnumtxt.toString();
                    }

                });

                $(".dabus").hover(function () {
                    $(this).next().next().css("animation-name", "ex");
                    $(this).next().css("opacity", "0.8");
                    $(this).next().css("z-index", "100");
                    $(this).next().css("background-color", "#fff");
                    $(this).next().css("-webkit-filter", "blur(4px)");
                    $(this).next().css("filter", "blur(4px)");
                    $(this).next().css("box-shadow", " 0 0 7px 7px rgba(0, 140, 186, 0.3), 0px 0px 5px 5px gray");
                    $(this).css("cursor", "pointer");
                }, function () {
                    $(this).next().next().css("animation-name", "antiex");
                    $(this).next().css("opacity", "1");
                    $(this).next().css("z-index", "100");
                    $(this).next().css("background-color", "none");
                    $(this).next().css("-webkit-filter", "blur(0px)");
                    $(this).next().css("filter", "blur(0px)");
                    $(this).next().css("box-shadow", "0px 0px 5px 5px gray");
                });
            });
        }
