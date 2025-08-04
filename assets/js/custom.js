document.addEventListener("DOMContentLoaded", function () {
  // Set up file input functionality
  const fileNameDisplay = document.getElementById("file-name");
  const fileInput = document.getElementById("file-upload");
  const fileInfo = document.getElementById("file-info");

  // Click event for the visible input
  fileNameDisplay?.addEventListener("click", function () {
    fileInput.click();
  });

  // Change event for the file input
  fileInput?.addEventListener("change", function () {
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

  // to let select readonly 
  document.querySelectorAll(".readonly_select").forEach(function (select) {
    select.addEventListener("mousedown", function (e) {
      e.preventDefault(); // يمنع فتح القائمة بالماوس
    });
    select.addEventListener("keydown", function (e) {
      e.preventDefault(); // يمنع التغيير بالكيبورد
    });
  });

  //  <!-- script to appear choosen file -->
  let input = document.getElementById("myFiles");
  let label = document.getElementById("fileLabel");

  input?.addEventListener("change", function () {
    if (this.files.length > 0) {
        let names = Array.from(this.files).map(file => file.name).join(", ");
        label.textContent = names;
        label.classList.remove("text-muted"); // يشيل لون النص الرمادي
    } else {
        label.textContent = "";
        label.classList.add("text-muted");
    }
  });

  // tooltip js
  let tooltipTriggerList = [].slice.call(document.querySelectorAll('[title]'));
  tooltipTriggerList?.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

});

