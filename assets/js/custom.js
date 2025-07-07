document.addEventListener("DOMContentLoaded", function () {
  /**************flat picker for inputs date  *********************/
  flatpickr(".datepicker", {
    dateFormat: "d/m/Y",
    locale: "en",
    disableMobile: true,
    static: true,
  });
});
