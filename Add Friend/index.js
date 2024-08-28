let btn = document.querySelector("#add");

let friend = document.querySelector("h5");
let flag = 0;
btn.addEventListener("click", () => {

    if (flag == 0) {
        friend.innerHTML = "Friends"
        friend.style.color = "green"
        btn.innerHTML = "Remove"
        btn.style.backgroundColor = "#dadada";
        btn.style.color = "black";
        flag++;
    }else{
        friend.innerHTML = "Stranger";
        friend.style.color = "red";
        btn.innerHTML = "Add Friend";
        btn.style.backgroundColor = "cadetblue";
        btn.style.color = "white";
        flag--;
    }
});



