$(function () {
    const getBackgroundColor = (pourcent) => {
        console.log("pourcent", pourcent)
        switch (true) {
            case pourcent < 35:
                return "#E9AF3E";
            case pourcent < 100:
                return "#E9AF3E";
            case pourcent === 100:
                return "#7dc323";
            default:
                return undefined;
        }
    };
    const getTextColor = (valeur) => {
        if(valeur === 34){
            return "#E9AF3E";
        }
        else if(valeur === 99){
            return "#7dc323";
        }
        return undefined;
    };

    function setProgress(progressgrp) {
        progressgrp.each(function () {
            let pourcent = parseInt($(this).attr("pourcent"));
            console.log("pourcent", pourcent);
            let width = pourcent + "%";

            // }
            let backgroundColor = getBackgroundColor(pourcent);
            console.log("backgroundColor", backgroundColor);
            $(this).animate({
                width, backgroundColor
            }, 1000);
        });
        $(".pourcent").each(function () {
            let pourcent = parseInt($(this).attr("pourcent"));
            let id = $(this).attr("id");

            const fonction_augmente = function () {
                let valeur = parseInt($("#" + id).html());
                if (valeur === pourcent) {
                    clearInterval(fonction_augmente);
                } else {
                    $("#" + id).html(valeur + 1);
                    let textColor = getTextColor(valeur);
                    $("#f" + id).css("color", textColor);
                }

            }
        }, 10);
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