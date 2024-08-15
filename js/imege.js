// Select the Service menu link
const serviceLink = document.querySelector(".nav-menu__link:nth-child(3)");

// Add click event listener to toggle dropdown
serviceLink.addEventListener("click", function () {
  this.classList.toggle("active");
});
