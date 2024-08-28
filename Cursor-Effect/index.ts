let body = document.querySelector("#main")!;

let crsr = document.querySelector(".cursor") as HTMLElement;

body.addEventListener("mousemove", (dets : any) => {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
})