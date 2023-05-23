const humberger = document.getElementById("humberger");
const mobileMenu = document.getElementById("mobile_menu");
const close = document.getElementById("cross");
const myMobileMain = document.getElementById("myMobileMain");
const mobileMenu2 = document.getElementById("mainMObileMenu");
/** display mobile menu function */
function displayMenu() {
  mobileMenu2.style.display = "block";
  mobileMenu.style.display = "inline-block";
  humberger.style.display = "none";
  close.style.display = "inline-block";
}
/** close mobile menu function */
function closeMenu() {
  mobileMenu.style.display = "none";
  close.style.display = "none";
  humberger.style.display = "inline-flex";
  mobileMenu2.style.display = "none";
}

humberger.addEventListener("click", displayMenu);
close.addEventListener("click", closeMenu);
myMobileMain.addEventListener("click", displayMenu);
