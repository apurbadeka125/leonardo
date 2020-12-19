window.addEventListener("scroll",function(){
    var x=document.getElementById("stick");
    if(window.scrollY>20){
        x.classList.add("sticky");
    }else{
        x.classList.remove("sticky");
    }
})