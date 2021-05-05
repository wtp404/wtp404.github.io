function eventOpenMenu () {
  menuTrigger.classList.toggle("menu__trigger--close");
  menuRoot.classList.toggle("menu--hidden");
}

let menuRoot = document.querySelector(".js-menu");
if (menuRoot) {
  menuRoot.classList.add("menu--hidden");
  let menuTrigger = menuRoot.querySelector(".menu__trigger");

  menuTrigger.addEventListener("click", eventOpenMenu);
}
