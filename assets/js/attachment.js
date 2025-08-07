
    document.addEventListener("DOMContentLoaded", function () {
      let swiperInstance;
      let fileInput = document.getElementById('myFiles');
      let attachmentContainer = document.getElementById('attachmentContainer');
      let modal = new bootstrap.Modal(document.getElementById("attachment-modal-imgs"));
      let swiperWrapper = document.getElementById("swiper-wrapper");

      // دالة لإعادة تفعيل الأحداث على العناصر الجديدة
      function rebindAttachmentEvents() {
        // حذف
        document.querySelectorAll('.board-bin').forEach((binIcon) => {
          binIcon.onclick = () => {
            let attachmentItem = binIcon.closest('.attachment-item');
            if (attachmentItem) attachmentItem.remove();
          };
        });

        // عرض الصور داخل المودال
        document.querySelectorAll('.board-view').forEach((btn, index) => {
          btn.onclick = () => {
            // تحديث الصور الحالية
            const images = Array.from(document.querySelectorAll('.attachment-item img'));

            swiperWrapper.innerHTML = "";

            images.forEach(img => {
              let slide = document.createElement("div");
              slide.className = "swiper-slide";
              slide.innerHTML = `<img src="${img.src}" />`;
              swiperWrapper.appendChild(slide);
            });

            modal.show();

            setTimeout(() => {
              if (swiperInstance) swiperInstance.destroy(true, true);
              swiperInstance = new Swiper(".image-swiper", {
                initialSlide: index,
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
              });
            }, 200);
          };
        });
      }

      // عند اختيار مرفقات
      fileInput.addEventListener('change', function () {
        Array.from(this.files).forEach(file => {
          if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (e) {
              const imageElement = document.createElement('div');
              imageElement.className = 'attachment-item';
              imageElement.innerHTML = `
                <img src="${e.target.result}" />
                <div class="attachment-item-actions">
                  <i class="board-view icon"></i>
                  <i class="board-bin icon"></i>
                </div>
              `;
              attachmentContainer.appendChild(imageElement);
              rebindAttachmentEvents(); // أعِد ربط الأحداث
            };
            reader.readAsDataURL(file);
          } else {
            const fileBox = document.createElement('div');
            fileBox.className = 'attachment-item';
            fileBox.innerHTML = `
              <div class="file-preview">${file.name}</div>
              <div class="attachment-item-actions">
                <i class="board-bin icon"></i>
              </div>
            `;
            attachmentContainer.appendChild(fileBox);
            rebindAttachmentEvents(); // أعِد ربط الأحداث
          }
        });

        this.value = "";
      });

      // أول مرة عند التحميل
      rebindAttachmentEvents();
    });