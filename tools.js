(function(){
  var b=document.body,tg=document.getElementById("tools-toggle");
  if(tg){
    tg.addEventListener("click",function(){
      var c=b.classList.toggle("tools-collapsed");
      tg.setAttribute("aria-expanded",c?"false":"true");
    });
  }
  var pn=document.getElementById("panel"),pm=document.getElementById("panel-min");
  if(pm&&pn){
    pm.addEventListener("click",function(){pn.classList.toggle("min")});
    new MutationObserver(function(){if(pn.classList.contains("hidden")&&pn.classList.contains("min"))pn.classList.remove("min")}).observe(pn,{attributes:true,attributeFilter:["class"]});
  }
})();
