const ele = document.getElementById("ele1");


const pintar = function(color){
    ele.style.backgroundColor = color;
}

pintar("green");

ele.addEventListener("click", function() {
 pintar("yellow");   
});