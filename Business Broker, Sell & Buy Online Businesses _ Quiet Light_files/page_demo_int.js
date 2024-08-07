$(function () {
    function output (data, $output) {
        var result = '<div>input: Object</div>';
        result +=   '<div>slider: Object</div>';
        result +=   '<div>min: ' + data.min + '</div>';
        result +=   '<div>min_pretty: ' + data.min_pretty + '</div>';
        result +=   '<div>max: ' + data.max + '</div>';
        result +=   '<div>max_pretty: ' + data.max_pretty + '</div>';
        result +=   '<div>from: ' + data.from + '</div>';
        result +=   '<div>from_pretty: ' + data.from_pretty + '</div>';
        result +=   '<div>from_percent: ' + data.from_percent.toFixed(2) + '</div>';
        result +=   '<div>from_value: ' + data.from_value + '</div>';
        result +=   '<div>to: ' + data.to + '</div>';
        result +=   '<div>to_pretty: ' + data.to_pretty + '</div>';
        result +=   '<div>to_percent: ' + data.to_percent.toFixed(2) + '</div>';
        result +=   '<div>to_value: ' + data.to_value + '</div>';

        $output.html(result);
    }
    


    var $d0 = $("#demo_0");
    var $d0_buttons = $(".js-btn__d0");
    $d0.ionRangeSlider({
        skin: "big",
        min: 0,
        max: 5,
        from: 2,
        onStart: function (data) {
            highlight("onStart");
        },
        onChange: function (data) {
            highlight("onChange");
        },
        onFinish: function (data) {
            highlight("onFinish");
        },
        onUpdate: function (data) {
            highlight("onUpdate");
        }
    });

    var d0_instance = $d0.data("ionRangeSlider");
    $d0_buttons.on("click", function () {
        d0_instance.update({
            from: 3
        });
    });

    function highlight (type) {
        var $elem = $(".js-" + type);
        $elem.addClass("--active");
        setTimeout(function () {
            $elem.removeClass("--active");
        }, 300);
    }



    var $d1 = $("#demo_1");
    var $output1 = $(".js-output__d1");
    $d1.ionRangeSlider({
        skin: "big",
        min: 5,
        max: 20,
        from:12,
        onStart: function (data) {
            output(data, $output1);
        },
        onChange: function (data) {
            output(data, $output1);
        },
        onFinish: function (data) {
            output(data, $output1);
        },
        onUpdate: function (data) {
            output(data, $output1);
        }
    });



    var $d2 = $("#demo_2");
    var $output2 = $(".js-output__d2");
    $d2.ionRangeSlider({
        skin: "big",
        type: "double",
        values: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        from: 1,
        to: 10,
        onStart: function (data) {
            output(data, $output2);
        },
        onChange: function (data) {
            output(data, $output2);
        },
        onFinish: function (data) {
            output(data, $output2);
        },
        onUpdate: function (data) {
            output(data, $output2);
        }
    });



    var $d3 = $("#demo_3");
    var $output3 = $(".js-output__d3");
    $d3.ionRangeSlider({
        skin: "big",
        min: 0,
        max: 10000,
        from: 5000
    });

    $d3.on("change", function () {
        var $inp = $(this);
        var from = $inp.prop("value");
        var from2 = $inp.data("from");

        $output3.html("<div>input value: " + from + ", data-from: " + from2 + "</div>");
    });



    var $d4 = $("#demo_4");
    var $output4 = $(".js-output__d4");
    $d4.ionRangeSlider({
        skin: "big",
        type: "double",
        min: 0,
        max: 10000,
        from: 4000,
        to: 6000
    });

    $d4.on("change", function () {
        var $inp = $(this);
        var v = $inp.prop("value");
        var from = $inp.data("from");
        var to = $inp.data("to");

        $output4.html("<div>input value: " + v + ", data-from: " + from + ", data-to: " + to + "</div>");
    });




    var $d5 = $("#demo_5");
    var $d5_buttons = $(".js-btn__d5");
    $d5.ionRangeSlider({
        skin: "big",
        type: "double",
        min: 0,
        max: 10,
        from: 4,
        to: 6,
        grid: true,
        step: 2
    });

    var d5_instance = $d5.data("ionRangeSlider");
    $d5_buttons.on("click", function () {
        var min = rand(0, 1000);
        var from = rand(min, min + 2000);
        var to = rand(from, from + 5000);
        var max = rand(to, to + 2000);
        var num = rand(4, 15);
        var step = rand(1, 100);

        d5_instance.update({
            min: min,
            max: max,
            from: from,
            to: to,
            grid_num: num,
            step: step
        });
    });

    function rand (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

});
