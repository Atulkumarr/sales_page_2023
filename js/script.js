// countdown 
jQuery(document).ready(function ($) {
    window.loopcounter = function (idWarp) {
        if (typeof idWarp != 'undefined') {
            var date = $('.' + idWarp).data('date');
            if (typeof date != 'undefined') {
                var start = new Date(date.replace(/-/g, "/")),
                    end = new Date(),
                    diff = new Date(start - end),
                    time = diff / 1000 / 60 / 60 / 24;

                var day = parseInt(time);
                var hour = parseInt(24 - (diff / 1000 / 60 / 60) % 24);
                var min = parseInt(60 - (diff / 1000 / 60) % 60);
                var sec = parseInt(60 - (diff / 1000) % 60);

                counterDate(idWarp, day, hour, min, sec);

                var interval = setInterval(function () {
                    if (sec == 0 && min != 0) {
                        min--;
                        sec = 60;
                    }
                    if (min == 0 && sec == 0 && hour != 0) {
                        hour--;
                        min = 59;
                        sec = 60;
                    }
                    if (min == 0 && sec == 0 && hour == 0 && day != 0) {
                        day--;
                        hour = 23;
                        min = 59;
                        sec = 60;
                    }
                    if (min == 0 && sec == 0 && hour == 0 && day == 0) {
                        clearInterval(interval);
                    } else {
                        sec--;
                    }
                    counterDate(idWarp, day, hour, min, sec);
                }, 1000);

                function counterDate(id, day, hour, min, sec) {
                    if (time < 0) { day = hour = min = sec = 0; }
                    $('.' + id + ' .counter-days').html(counterDoubleDigit(day));
                    $('.' + id + ' .counter-hours').html(counterDoubleDigit(hour));
                    $('.' + id + ' .counter-minutes').html(counterDoubleDigit(min));
                    $('.' + id + ' .counter-seconds').html(counterDoubleDigit(sec));
                }
                function counterDoubleDigit(arg) {
                    if (arg.toString().length <= 1) {
                        arg = ('0' + arg).slice(-2);
                    }
                    return arg;
                }
            }
        }
    }
    //loopcounter( 'counter-id' );
});
// run countdown
$(function () {
    loopcounter('myCountdown');
});


// accordion 
$(function () {

    //BEGIN
    $(".accordion__title").on("click", function (e) {

        e.preventDefault();
        var $this = $(this);

        if (!$this.hasClass("accordion-active")) {
            $(".accordion__content").slideUp(400);
            $(".accordion__title").removeClass("accordion-active");
            $('.accordion__arrow').removeClass('accordion__rotate');
        }

        $this.toggleClass("accordion-active");
        $this.next().slideToggle();
        $('.accordion__arrow', this).toggleClass('accordion__rotate');
    });
    //END

});


// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2022 24:00:00").getTime();
let put_days = document.querySelector('.counter-days')
console.log(put_days)
let put_hours = document.querySelector('.counter-hours')
let put_minutes = document.querySelector('.counter-minutes')
let put_seconds = document.querySelector('.counter-seconds')
// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // put_days.innerText = days

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d : " + hours + "h : "
        + minutes + "m : " + seconds + "s ";
         document.getElementById("second-p").innerHTML = days + "d : " + hours + "h : "
            + minutes + "m : " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);