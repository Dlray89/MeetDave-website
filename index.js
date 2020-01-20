var controller = 
new ScrollMagic.Controller("spacer");

$(".wrapper").each(function() {
    var t1 = new TimelineMax();
    var child = $(this).find(".child");
    t1.to(child, 1, { y: -180, ease: Linear.easeNone});

    var scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.4,
        duration: "100%"
    })

    .setTween(t1)
    .addIndicators({
        colorTrigger: "black",
        colorStart: "black",
        colorEnd: "black",
        indent: 10
    })
    .addto(controller)
})