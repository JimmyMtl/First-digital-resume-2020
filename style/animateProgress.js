$(function () {

    function setProgress(progressgrp) {
        progressgrp.each(function () {
            var pourcent = parseInt($(this).attr("pourcent"));

            if (pourcent < 35) {
                $(this).delay(300).animate({
                    width: "+=" + pourcent + "%"
                }, 500);
            } else if (pourcent < 100) {
                $(this).delay(300).animate({
                    width: "+=35%"
                }, 500);

                $(this).animate({
                    width: "+=" + (pourcent - 35) + "%",
                    backgroundColor: "#E9AF3E"
                }, 300);
            } else if (pourcent == 100) {
                $(this).delay(300).animate({
                        width: "+=35%"
                    }, 500)
                    .animate({
                        width: "+=35%",
                        backgroundColor: "#E9AF3E"
                    }, 300)
                    .animate({
                        width: "+=27%",
                        backgroundColor: "#7dc323"
                    }, 300);
            }
        });
        $(".pourcent").each(function () {
            var pourcent = parseInt($(this).attr("pourcent"));
            var id = $(this).attr("id");

            var fonction_augmente = function () {
                var valeur = parseInt($("#" + id).html());

                if (valeur == pourcent) {
                    clearInterval(fonction_augmente);
                } else {

                    $("#" + id).html(valeur + 1);
                    if (valeur == 34) {
                        $("#" + id).css("color", "#E9AF3E");
                        $("#f" + id).css("color", "#E9AF3E");
                    } else if (valeur == 99) {
                        $("#" + id).css("color", "#7dc323");
                        $("#f" + id).css("color", "#7dc323");
                    }
                }

            }
        },
        10);
    }
    $('#btnTurn1').on('click', () => {
        setProgress($('.progress_bar1'));
    })
    $('#btnTurn2').on('click', () => {
        setProgress($('.progress_bar2'));
    })
    $('#btnTurn3').on('click', () => {
        setProgress($('.progress_bar3'));
    })



    

});