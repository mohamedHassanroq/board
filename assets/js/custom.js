document.addEventListener("DOMContentLoaded", function () {
  // Set up file input functionality
  const fileNameDisplay = document.getElementById("file-name");
  const fileInput = document.getElementById("file-upload");
  const fileInfo = document.getElementById("file-info");

  // Click event for the visible input
  fileNameDisplay.addEventListener("click", function () {
    fileInput.click();
  });

  // Change event for the file input
  fileInput.addEventListener("change", function () {
    if (this.files.length > 0) {
      const file = this.files[0];
      fileNameDisplay.value = file.name;
      fileInfo.textContent = file.name; // Just show the file name
      fileInfo.style.display = "block";
    } else {
      fileNameDisplay.value = "";
      fileInfo.style.display = "none";
    }
  });
});
