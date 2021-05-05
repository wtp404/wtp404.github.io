function eventOpenMenu (event) {
  event.currentTarget.classList.toggle("menu__trigger--close");
  let root = event.currentTarget.parentElement;
  while (!root.classList.contains("js-menu")) {
    root = root.parentElement;
  }
  root.classList.toggle("menu--hidden");
}

let menuRoot = document.querySelector(".js-menu");
if (menuRoot) {
  menuRoot.classList.add("menu--hidden");

  let menuTrigger = menuRoot.querySelector(".menu__trigger");
  menuTrigger.addEventListener("click", eventOpenMenu);
}
