function loadingscreen(){
    var div = document.createElement("div");
    div.className = "loading";
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.top = "0px";
    div.style.left = "0px";
    div.style.position = "absolute";
    div.style.backgroundColor = "#663b1e";
    div.style.zIndex = 10;
    div.style.textAlign = "center";
    
    

    var img = document.createElement("img");
    img.src = "../img/loadingscreen/dog foot.png";
    img.height = 50;
    img.width = 50;
    img.style.padding = "70px";
    img.style.position = "absolute";
    img.style.zIndex = '15';

    console.log("Starting the loading screen loop..");
    while(document.readyState != "complete"){
        console.log("Playing animation");
    }
    

    //document.body.appendChild(div);
    //document.body.getElementsByClassName("loading")[0].appendChild(img);
}