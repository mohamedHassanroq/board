
  document.addEventListener("DOMContentLoaded", function () {
    let selectedStatusCell = null;
    let selectedStatusText = "";
    let selectedStatusClass = "";
    const dropdowns = {};

    // فتح dropdown وتخزين العنصر المرتبط
    document.querySelectorAll(".custom-status-btn").forEach(button => {
      const dropdownId = button.getAttribute("data-dropdown-id");
      const dropdown = document.getElementById(dropdownId);

      dropdowns[dropdownId] = {
        element: dropdown,
        originalParent: dropdown.parentElement
      };

      button.addEventListener("click", function (e) {
        e.stopPropagation();
        selectedStatusCell = button.closest(".status-cell");

        // اقفل أي dropdown مفتوح
        document.querySelectorAll(".custom-dropdown").forEach(d => {
          d.classList.add("d-none");
          d.classList.remove("d-block");
        });

        document.body.appendChild(dropdown);

        setTimeout(() => {
          const rect = button.getBoundingClientRect();
          dropdown.style.top = (rect.bottom + window.scrollY) + "px";
          dropdown.style.left = (rect.left + window.scrollX) + "px";

          dropdown.classList.toggle("d-block");
          dropdown.classList.toggle("d-none");
        }, 0);
      });
    });

    // عند اختيار حالة من القائمة
    document.querySelectorAll(".change-status").forEach(link => {
      link.addEventListener("click", function () {
        if (!selectedStatusCell) return;

        selectedStatusText = this.textContent.trim();

        // حددي الكلاس المناسب بناءً على النص
        switch (selectedStatusText) {
          case "تم":
            selectedStatusClass = "completed";
            break;
          case "رفض":
            selectedStatusClass = "danger";
            break;
          case "انتظر":
            selectedStatusClass = "waiting";
            break;
          default:
            selectedStatusClass = "pending";
        }
      });
    });

    // عند الضغط على تأكيد في المودال
    const confirmBtn = document.querySelector("#confirmModal .success-btn");
    confirmBtn?.addEventListener("click", function () {
      if (selectedStatusCell && selectedStatusText) {
        // غير المحتوى بالكامل للزر
        selectedStatusCell.innerHTML = `
           <div class="status ${selectedStatusClass}">${selectedStatusText}</div>
        `;

        // بعد التغيير، ممكن تعيدي تفعيل الزر الجديد (لو محتاجة)
        // ✅ أو تعملي refresh للـ event listeners عليه

        // اقفل المودال وافتح أي مودال تاني
        const confirmModal = bootstrap.Modal.getInstance(document.getElementById("confirmModal"));
        confirmModal?.hide();

        const taskModal = new bootstrap.Modal(document.getElementById("Task_Details"));
        taskModal?.show();

        // Reset
        selectedStatusCell = null;
        selectedStatusText = "";
        selectedStatusClass = "";
      }
    });

    // اقفل dropdown عند الضغط خارج
    document.addEventListener("click", function () {
      document.querySelectorAll(".custom-dropdown").forEach(d => {
        d.classList.add("d-none");
        d.classList.remove("d-block");
      });
    });
  });
