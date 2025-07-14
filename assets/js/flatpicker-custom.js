document.addEventListener("DOMContentLoaded", function () {
  // Your existing datepicker code
  flatpickr("input[type=datetime-local]", {
    dateFormat: "d / M / Y",
    // defaultDate: new Date(),
  });
});
