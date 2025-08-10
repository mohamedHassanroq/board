
      const passwordIcon = document.getElementById('togglePasswordIcon');
      passwordIcon.addEventListener('click', function () {
      const passwordInput = document.getElementById('passwordlogin');
    
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordIcon.classList.remove('board-closed-eyes');
        passwordIcon.classList.add('board-eye-close-up');
      } else {
        passwordInput.type = 'password';
        passwordIcon.classList.remove('board-eye-close-up');
        passwordIcon.classList.add('board-closed-eyes');
      }
    });