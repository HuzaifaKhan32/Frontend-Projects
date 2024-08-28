var body = document.querySelector("#main");
var crsr = document.querySelector(".cursor");
body.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
});
