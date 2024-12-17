document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burgerMenu");
  const menuList = document.getElementById("menuList");

  burgerMenu.addEventListener("click", function () {
    menuList.classList.toggle("active");
    burgerMenu.classList.toggle("active");
  });
});
