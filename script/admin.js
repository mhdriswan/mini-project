console.log("Admin Module Loaded")

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
};


let sideBarItems = document.querySelectorAll(".nav-links li a")

sideBarItems.forEach(element => {
  element.addEventListener('click',function(e){
      sideBarItems.forEach(c => {
        if(e.target === c){
          c.classList.add("active")
        }else {
          c.classList.remove("active")
        }
      })
  })
})

$("#restaurant").hide()
$("#customer").hide()

$("#dashboardSideBtn").click(function(){
  $("#restaurant").hide()
  $("#customer").hide()
  $("#dashboard").show()
})

$("#restaurantSideBtn").click(function(){
  $("#dashboard").hide()
  $("#customer").hide()
  $("#restaurant").show()

})

$("#customerSideBtn").click(function(){
  $("#dashboard").hide()
  $("#restaurant").hide()
  $("#customer").show()
})





