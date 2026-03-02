const buttons = document.querySelectorAll(".add-to-card-btn");

buttons.forEach(btn => btn.addEventListener('click', () => {
  const originalText = btn.textContent;
  btn.textContent = 'Добавлено'
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = originalText;
    btn.disabled = false;
  }, 2000);
}))

