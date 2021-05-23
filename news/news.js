function namenull(){
    localStorage.setItem("name","");
}
if(localStorage.getItem("name")!="" && !(localStorage.getItem("name") === null)){ document.getElementById("cname").innerHTML=localStorage.getItem("name");
                                           document.getElementById("item").innerHTML="Not you ?";
                                           }