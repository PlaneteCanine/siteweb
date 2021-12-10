function loadingscreen(){
    var div = document.createElement("div");
    div.className = "loading";
    div.style.width = "1000px";
    div.style.margin = "auto";
    div.style.backgroundColor = "blue";
    div.style.position = "absolute";
    div.style.height = "100px";
    div.style.zIndex = 1;

    document.body.appendChild(div);
    console.log("aaaa");
}