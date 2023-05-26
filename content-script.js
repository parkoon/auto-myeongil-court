window.onload = () => {
  if (document.querySelector('input[name="Use_Inwon"]')) {
    document.querySelector('input[name="Use_Inwon"]').value = 2;
    document.querySelector('[data-action="submit"]').click();
  }
};
