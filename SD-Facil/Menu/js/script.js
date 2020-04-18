function teste(){
  var menu_crm = document.getElementById("mySidenav");
  if (menu_crm.style.left != "0px"){
    menu_crm.style.left = "0px";
  }else{
    menu_crm.style.left = "-300px";
  }
}



function hover(elem) {
  if (elem.style.background != "rgba(0, 0, 0, 0.8)") {
    elem.style.background = "rgba(25, 25, 112, 0.8)";
  }
}
function mouseout(elem) {
  if (elem.style.background != "rgba(0, 0, 0, 0.8)") {
    elem.style.background = "rgba(0,0,139,1)";
  }
}
function fecha_menus() {
  var menu_crm = document.getElementById("mySidenav");
  var menu_oss = document.getElementById("mySidenav2");
  var menu_port = document.getElementById("mySidenav3");
  var bt_crm = document.getElementById("btn_l");
  var bt_oss = document.getElementById("btn_r");
  var bt_port = document.getElementById("btn_3");


  if (menu_crm.style.left != "-300px"||menu_oss.style.right != "-300px"||menu_port.style.left != "-300px") {
    menu_crm.style.left = "-300px";
    menu_oss.style.right = "-300px";
    menu_port.style.left = "-300px";
    bt_crm.style.background = "rgba(0,0,139,1)";
    bt_oss.style.background = "rgba(0,0,139,1)";
    bt_port.style.background = "rgba(0,0,139,1)";
    event.stopPropagation();
  }
  event.stopPropagation();
}
function abre_fechaCRM() {
  var box_oss = document.getElementById("mySidenav2");
  var box_crm = document.getElementById("mySidenav");
  var box_port = document.getElementById("mySidenav3");
  var bt_crm = document.getElementById("btn_l");
  var bt_oss = document.getElementById("btn_r");
  var bt_port = document.getElementById("btn_3");
  var corpo = document.getElementById("pagina");
    box_oss.style.right = "-300px";
    bt_oss.style.background = "rgba(0,0,139,1)";
    box_port.style.left ="-300px";
    bt_port.style.background ="rgba(0,0,139,1)";

  if (box_crm.style.left != "0px"){
    bt_crm.style.background = "rgba(0, 0, 0, 0.8)";
    box_crm.style.left = "0px";
  }else{
    bt_crm.style.background = "rgba(0,0,139,1)";
    box_crm.style.left = "-300px";
  }
}
function abre_fechaOSS() {
  var box_oss = document.getElementById("mySidenav2");
  var box_crm = document.getElementById("mySidenav");
  var box_port = document.getElementById("mySidenav3");
  var bt_crm = document.getElementById("btn_l");
  var bt_oss = document.getElementById("btn_r");
  var bt_port = document.getElementById("btn_3");
    box_crm.style.left = "-300px";
    bt_crm.style.background = "rgba(0,0,139,1)";
    box_port.style.left ="-300px";
    bt_port.style.background ="rgba(0,0,139,1)";

  if (box_oss.style.right != "0px"){
    bt_oss.style.background = "rgba(0, 0, 0, 0.8)";
    box_oss.style.right = "0px";
  }else{
    bt_oss.style.background = "rgba(0,0,139,1)";
    box_oss.style.right = "-300px";
  }
}
function abre_fechaPort() {
  var box_oss = document.getElementById("mySidenav2");
  var box_crm = document.getElementById("mySidenav");
  var box_port = document.getElementById("mySidenav3");
  var bt_crm = document.getElementById("btn_l");
  var bt_oss = document.getElementById("btn_r");
  var bt_port = document.getElementById("btn_3");
    box_crm.style.left = "-300px";
    bt_crm.style.background = "rgba(0,0,139,1)";
    box_oss.style.right = "-300px";
    bt_oss.style.background = "rgba(0,0,139,1)";

  if (box_port.style.left != "0px"){
    bt_port.style.background = "rgba(0, 0, 0, 0.8)";
    box_port.style.left = "0px";
  }else{
    bt_port.style.background = "rgba(0,0,139,1)";
    box_port.style.left = "-300px";
  }
}
