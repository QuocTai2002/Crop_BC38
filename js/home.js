let mybutton = document.getElementById("top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    document.getElementById("header").classList.add("style_header")
  } else {
    mybutton.style.display = "none";
    document.getElementById("header").classList.remove("style_header")
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
var count = 1;
function sidebar(){
 
  if (count == 0){
    var a =  '<i class="fa fa-angle-double-left"></i>'
    document.getElementById("sidebar_btn").innerHTML = a
    count = 1;
  }
  else {
    var b = '<i class="fa fa-angle-double-right"></i>'
    document.getElementById("sidebar_btn").innerHTML = b
    count = 0;
  }
}