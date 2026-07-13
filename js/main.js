document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var dropdownToggle = document.querySelector(".nav-dropdown-toggle");
  var navItem = document.querySelector(".nav-item.has-dropdown");
  if (dropdownToggle && navItem) {
    dropdownToggle.addEventListener("click", function (e) {
      e.preventDefault();
      navItem.classList.toggle("open");
    });
  }
});
