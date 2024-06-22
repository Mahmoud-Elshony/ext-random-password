function generateRandomPassword(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generateBtn');
  generateBtn.addEventListener('click', () => {
    const lengthInput = document.getElementById('lengthInput');
    const length = parseInt(lengthInput.value);
    if (isNaN(length) || length < 1) {
      alert('Please enter a valid length.');
      return;
    }
    const password = generateRandomPassword(length);
    const passwordOutput = document.getElementById('passwordOutput');
    passwordOutput.textContent = password;
  });
});
