function buttonMenuClick() {
  var menu = document.getElementsByClassName("nav-bar");
  menu.array.forEach((element) => {
    menu[element].classList.toggle("hide");
  });
}
