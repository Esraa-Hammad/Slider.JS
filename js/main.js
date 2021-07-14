var imgs=Array.from(document.getElementsByClassName("img-fluid"));
// imgs.style.cursor="pointer";
var lightbox=document.querySelector(".lightbox");
var close=document.getElementById("close");
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var lightboxitem=document.getElementById("lightbox-item")
var currentindex=0;
for(var i=0;i<imgs.length;i++){
  
imgs[i].addEventListener("click",function(e){
    lightbox.style.display="flex";
    currentindex=imgs.indexOf(e.target);   
    var imgSrc=e.target.src;  
   lightboxitem.style.backgroundImage=`url(${imgSrc})`      
    })
    }
    
   next.addEventListener("click",getnext )
   function getnext() {
      currentindex ++;
      if(currentindex==imgs.length){
         currentindex=0;
      }
      var imgSrc=imgs[currentindex].src;
      lightboxitem.style.backgroundImage=`url(${imgSrc})`   
      
   }
   prev.addEventListener("click",getprev )
   function getprev() {
      currentindex --;
      if(currentindex<0){
         currentindex=imgs.length-1;
      }
      var imgSrc=imgs[currentindex].src;
      lightboxitem.style.backgroundImage=`url(${imgSrc})`   
      
   }
       
   

 close.addEventListener("click",funclose)
 function funclose() {
    lightbox.style.display="none"
 }
 document.addEventListener("keydown",function (e) {
    if(e.keyCode==27){
       funclose()
    }
   else if(e.keyCode==39){
      getnext()
   }
  else if(e.keyCode==37){
      getprev()
   }
    
 })