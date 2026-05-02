const modal = document.getElementById("myModal");
const title = document.getElementById("title");
const span = document.getElementsByClassName("close")[0];

// Open the modal 
title.onclick = function() {
  modal.style.display = "block";
}

// Close the modal when clicking (x)
span.onclick = function() {
  modal.style.display = "none";
}