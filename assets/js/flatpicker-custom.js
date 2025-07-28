document.addEventListener("DOMContentLoaded", function () {
  // Your existing datepicker code
  flatpickr("input[type=datetime-local]", {
    dateFormat: "d / M / Y",
    // defaultDate: new Date(),
  });

  flatpickr(".timePicker", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true,
    minuteIncrement: 15,
    disableMobile: true
  });

});
