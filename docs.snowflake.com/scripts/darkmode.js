(function () {
  const darkMode = localStorage.getItem('dark-mode') || 'false';
  if (darkMode === 'true') {
    document.querySelector('html').classList.add('dark');
  }
})();
