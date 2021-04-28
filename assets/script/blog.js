let star= document.getElementById("star");
let temp_container=document.getElementById("temporary-container");


function morestars(){
    let starcopy=star.cloneNode(true);
    starcopy.style.animationDuration= Math.random()*7+4+"starry";
    starcopy.style.opacity=Math.random()*1;
    starcopy.style.position="absolute";
    starcopy.style.top=150;
    starcopy.style.left=Math.random()*1440;

    temp_container.append(starcopy);
}

let starry=setInterval(morestars, 100);
setTimeout(()=>{
    clearInterval(starry);
},3000);


let fatstar=document.getElementById("star2");
    function morefatstars(){
    let starfat=fatstar.cloneNode(true);
    starfat.style.animationDuration= Math.random()*5+3+"starry";
    starfat.style.opacity=Math.random()*1;
    starfat.style.position="absolute";
    starfat.style.top=175;
    starfat.style.left=Math.random()*1440;

    temp_container.append(starfat);
}

let newstarry=setInterval(morefatstars, 300);
    setTimeout(()=>{
        clearInterval(newstarry);
    }, 1500);
