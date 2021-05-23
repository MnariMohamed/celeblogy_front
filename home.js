document.getElementById("cname").classList.add("btn-danger");

function namenull(){
    localStorage.setItem("name","");
}
var width = document.getElementById('cover').offsetWidth;
if(localStorage.getItem("color")=="pink"){
        document.getElementById("cname").style.backgroundColor="#785589";
    document.getElementById("cname").style.border="1px solid #785589";
    document.getElementById("nav1").style.backgroundColor="#785589";
        document.getElementsByClassName("a1")[0].style.color="white";
        document.getElementsByClassName("a1")[1].style.color="white";
document.getElementsByTagName("a")[0].setAttribute("class", "a11");
    document.getElementsByTagName("a")[1].setAttribute("class", "a11");


    document.getElementById("h3").style.color="pink";
        document.getElementById("h3").style.textDecoration="underline";

}
var slideIndex = 1;
var h=new Array("Grey's Anatomy's Milestone Episode Is the New Meredith Grey At Her Best",
                "Kate Middleton Jokes About Having Another Baby with Prince William",
                "Kate Middleton and Prince William Get Affectionate While Playing Soccer in Belfast",
                "'I'm Kinda Into the Python!' Watch Kristin Cavallari & Jay Cutler Eat Alligator, Rattlesnake and Other Exotic Meats!",
                "Vanderpump Rules Stars Tom Sandoval and Ariana Madix Buy $2 Million Home: See What It Looks Like"
               );
var sources=new Array("news/1.html",
                     "news/2.html",
                     "news/3.html",
                     "news/4.html",
                     "news/5.html");
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
    document.getElementById("description").innerHTML=h[slideIndex-1];
    document.getElementById("linkdes").href=sources[slideIndex-1];
}

var slidw=document.getElementById("slide").offsetWidth;

document.getElementById("slide").style.height=slidw/1.5+"px";


var body = document.body;

var height =body.scrollHeight;
var right=document.querySelector("#right");
var left=document.querySelector("#left");
var feet=document.querySelector("#feet");
right.style.height=left.offsetHeight+"px";
feet.style.marginTop=document.querySelector("#left").offsetHeight+150+"px";
window.onresize = function(){ 
 slidw=document.getElementById("slide").offsetWidth;
document.getElementById("slide").style.height=slidw/1.5+"px";
    
right.style.height=left.offsetHeight+"px";
feet.style.marginTop=document.querySelector("#left").offsetHeight+150+"px";

}
if(localStorage.getItem("name")!="" && !(localStorage.getItem("name") === null)){ document.getElementById("cname").innerHTML=localStorage.getItem("name");
                                           document.getElementById("item").innerHTML="Not you ?";
                                           }






 
