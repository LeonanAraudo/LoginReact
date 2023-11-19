export const togglePasswordVisibility = (inputId, iconId) => {
    const passwordInput = document.getElementById(inputId);
    const eyeIcon = document.getElementById(iconId);
  
    if (passwordInput && eyeIcon) {
      const type = passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.type = type;
      eyeIcon.className = `fa fa-eye${type === 'password' ? '-slash' : ''}`;
    }
  };
  