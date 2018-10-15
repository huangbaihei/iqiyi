// init
// window.onscroll = function () {
$(document).ready(function(){
  $(window).scrollTop(0);
});
var controller = new ScrollMagic.Controller();
// define movement of panels
var wipeAnimation = new TimelineMax()
  .fromTo("#light", 1, {top: "0px"}, {top: "-100%", ease: Linear.easeNone}); // in from top
// create scene to pin and link animation
new ScrollMagic.Scene({
  triggerElement: "#pin",
  triggerHook:"onLeave",
  duration: "100%"
})
  .setPin("#pin")
  .setTween(wipeAnimation)
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller);
// }