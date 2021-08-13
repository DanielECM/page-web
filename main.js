document.getElementById("btn_toggle").addEventListener("click", open_close_menu);

var btn = document.getElementById("btn_toggle");
var navMenu = document.getElementById("nav_menu");

    function open_close_menu(){
        navMenu.classList.toggle("nav-menu_visible");
    }