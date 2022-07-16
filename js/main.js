var elBody = document.querySelector(".burger-btn");
var elHeaderlist = document.querySelector(".header-list");

elBody.addEventListener("click", function(){
   elHeaderlist.classList.add("menu-open")
})