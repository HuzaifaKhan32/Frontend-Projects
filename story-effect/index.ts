let arrayOfStory = [
    {
        dp:  "https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:  "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://images.unsplash.com/photo-1709884732294-ac35fa831eb4?q=80&w=1563&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:  "https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://images.unsplash.com/photo-1709884735206-295d326752c7?q=80&w=1563&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:  "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://plus.unsplash.com/premium_photo-1661678244954-d1d766c00a57?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://images.unsplash.com/photo-1712651794803-fdf91d31d7b9?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]
let stories = document.querySelector(".storyian")!;

let insertElement : string = "";
arrayOfStory.forEach((element, idx) => {
    insertElement += `<div class="story">
                <img id="${idx}" src="${element.dp}" alt="">
            </div>`
});

stories.innerHTML = insertElement;
let fullScreen = document.querySelector(".full-screen") as HTMLDivElement;
stories.addEventListener("click", (dets : any) => {
    fullScreen.style.backgroundImage = `url(${arrayOfStory[dets.target.id].story})`
    fullScreen.style.display = "block";
    setTimeout(()=>{
        fullScreen.style.display = "none";
    }, 3000);
})