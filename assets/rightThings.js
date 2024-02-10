$(function () {


    /* Animation btn trigger */
    let tmpAnimation1 = 0;
    let tmpAnimation2 = 0;
    let tmpAnimation3 = 0;


    /* Btn groupe 1 */
    $('#btnTurn1').on('click', () => {

        let element = $('#btnTurn1');

        tmpAnimation1 = tmpAnimation1 - 180;
        $('.grp1').toggle("slow"),
            $({
                degrees: tmpAnimation1 - 180
            }).animate({
                degrees: tmpAnimation1
            }, {
                duration: 1000,
                step: function (now) {
                    element.css({
                        transform: 'rotate(' + now + 'deg)'
                    });
                }
            });
    });
    /* Btn groupe 2 */
    $('#btnTurn2').on('click', () => {

        let element = $("#btnTurn2");

        tmpAnimation2 = tmpAnimation2 - 180;


        $('.grp2').toggle("slow"), $({
            degrees: tmpAnimation2 - 180
        }).animate({
            degrees: tmpAnimation2
        }, {
            duration: 1000, step: function (now) {
                element.css({
                    transform: 'rotate(' + now + 'deg)'
                });
            }
        });
    });
    /* Btn groupe 3 */
    $('#btnTurn3').on('click', () => {

        let element = $("#btnTurn3");

        tmpAnimation3 = tmpAnimation3 - 180;

        $('.grp3').toggle("slow"), $({
            degrees: tmpAnimation3 - 180
        }).animate({
            degrees: tmpAnimation3
        }, {
            duration: 1000, step: function (now) {
                element.css({
                    transform: 'rotate(' + now + 'deg)'
                });
            }
        });
    });
});
$.fn.animateRotate = function (angle, duration, easing, complete) {
    let $elem = $(this);
    $({
        deg: 180
    }).animate({
        deg: angle
    }, {
        duration: duration, easing: easing, step: function (now) {
            $elem.animate({
                transform: 'rotate(90deg)'
            });
        }, complete: complete || $.noop
    });
};