let elem = document.querySelectorAll(".element");



elem.forEach((val)=>{
    val.addEventListener("mouseenter", () => {
        val.childNodes[3].style.opacity = "1";
    })

    val.addEventListener("mousemove", (dets) => {
        val.childNodes[3].style.left = dets.x +"px";
    })

    val.addEventListener("mouseleave", () => {
        val.childNodes[3].style.opacity = "0";
    })   
})

