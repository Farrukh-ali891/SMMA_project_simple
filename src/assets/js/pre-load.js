// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {
  // Get the preloader element
  var preloader = document.querySelector(".preloader");

  // Hide the preloader once the page is fully loaded
  function hidePreloader() {
      preloader.style.display = "none";
  }

  // Add event listener to remove the preloader when the page is fully loaded
  window.addEventListener("load", function() {
      // Use a timeout to give a little delay for the preloader to be visible
      setTimeout(hidePreloader, 500); // You can adjust the delay as needed
  });
});
