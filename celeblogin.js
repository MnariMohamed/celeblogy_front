var c={
 name:"",
    color:""
};
var nom;
if(localStorage.getItem("name")!="" && !(localStorage.getItem("name") === null)){
    document.getElementById("c").style.display="none";
         document.getElementsByTagName("body")[0].style.backgroundColor="Black";
        document.getElementById("myVideo").style.display="none";
document.getElementById("welcome").innerHTML=localStorage.getItem("name")+" ! Welcome To <br> "+"<img src='files/logo.png' class='img'>";
        setTimeout(function() {
            document.getElementById("myVideo").style.display="block";
            document.getElementById("myVideo").style.right="0";
            document.getElementById("myVideo").src="files/cometebyGY (1).mp4"; }, 1500);
        setTimeout(function() { document.getElementById('form').submit(); }, 5000);
}
    setTimeout(function(){
    if(document.getElementById("input12").value.length==0 && document.getElementById("input11").value.length==0 && !document.getElementsByTagName('input')[0].checked && !document.getElementsByTagName('input')[1].checked){
         document.getElementsByTagName("body")[0].style.backgroundColor="Black";
        document.getElementById("myVideo").style.display="none";
                document.getElementById("c").style.display="none";
        document.getElementById("welcome").innerHTML=" ! Welcome To <br> "+"<img src='files/logo.png' class='img'>";
            setTimeout(function() {
            document.getElementById("myVideo").style.display="block";
            document.getElementById("myVideo").style.right="0";
            document.getElementById("myVideo").src="files/cometebyGY (1).mp4"; }, 1500);
        setTimeout(function() { document.getElementById('form').submit(); }, 5000);
    }
                         }, 5000);


function check(){
      var radios = document.getElementsByTagName('input');
var value;
      var icon = document.getElementById("icon11");
      var empt = document.getElementById("input12").value;
      if(empt.length <1 && document.getElementById("input11").value.length>0 ){

        // get value, set checked flag or do whatever you need to
        
       document.getElementById("h4").style.opacity="0.2";
          document.getElementById("h4").style.textDecoration="line-through";
          
           
                          c.name=document.getElementById("input11").value.toUpperCase();
        document.getElementById("c").style.display="none";
         document.getElementsByTagName("body")[0].style.backgroundColor="Black";
        document.getElementById("myVideo").style.display="none";
document.getElementById("welcome").innerHTML=c.name+" ! Welcome To <br> "+"<img src='files/logo.png' class='img'>";
        setTimeout(function() {
            document.getElementById("myVideo").style.display="block";
            document.getElementById("myVideo").style.right="0";
            document.getElementById("myVideo").src="files/cometebyGY (1).mp4"; }, 1500);
        setTimeout(function() { document.getElementById('form').submit(); }, 5000);
    if (document.getElementsByTagName('input')[0].checked) {
            localStorage.setItem("color","blue");

        }
        else
            localStorage.setItem("color","pink");
                         
    
           localStorage.setItem("name",c.name);
          return true;
        value = radios[i].value; 
}
      if(empt.length>0 && document.getElementById("input11").value.length>0 && ((radios[0].type === 'radio' && radios[0].checked) || (radios[1].type === 'radio' && radios[1].checked))){
        // get value, set checked flag or do whatever you need to
          document.getElementById("myVideo").style.display="none";
         document.getElementsByTagName("body")[0].style.backgroundColor="Black";
          icon.style.visibility="visible";
      icon.classList.add("i");
           setTimeout(
               function() { 
                   document.getElementById("c").style.display="none";
                          c.name=document.getElementById("input11").value.toUpperCase();
    document.getElementById("welcome").innerHTML=c.name+" ! Welcome To <br> "+"<img src='files/logo.png' class='img'>";                          localStorage.setItem("name",c.name);
               }, 2000);
    setTimeout(function() {
            document.getElementById("myVideo").style.display="block";
            document.getElementById("myVideo").style.right="0";
            document.getElementById("myVideo").src="files/cometebyGY (1).mp4"; }, 3500);
        setTimeout(function() { document.getElementById('form').submit();
                              }, 7000);
    if (document.getElementsByTagName('input')[0].checked) {
            localStorage.setItem("color","blue");

        }
        else
            localStorage.setItem("c.color","pink");
          return true;
    
        
   
    
    
    
    
   
}
        

    else
        alert("Make sure to write your name and select the gender !");
    
}
      



