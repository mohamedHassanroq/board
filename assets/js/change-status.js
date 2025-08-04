 let selectedStatusCell = null;

    document.addEventListener("DOMContentLoaded", function () {
        let changeLinks = document.querySelectorAll(".change-status");

        changeLinks?.forEach(link => {
        link?.addEventListener("click", function () {
            // let targetId = this.getAttribute("data-status-target");
            // selectedStatusSpan = document.querySelector(targetId);
            selectedStatusCell = this?.closest(".status-cell");
        });
        });

        let confirmBtn = document.querySelector("#confirmModal .success-btn");
        confirmBtn?.addEventListener("click", function () {
        if (selectedStatusCell) {
            selectedStatusCell.innerHTML = `<div class="status completed">تم</div>`;

            let confirmModal = bootstrap.Modal.getInstance(document.getElementById("confirmModal"));
            confirmModal?.hide();

            let taskModal = new bootstrap.Modal(document.getElementById("Task_Details"));
            taskModal?.show();

            selectedStatusCell = null;
        }
        });
    });


   