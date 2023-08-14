
function btn_visible(){
    var a=document.getElementById("mobile-num").value;
    a=String(a)
    var temp=document.getElementById("btn-visible");
    temp.style.visibility="hidden";
    if(a.length==10)
        temp.style.visibility="visible";
    else
    temp.style.visibility="hidden";
    
}

