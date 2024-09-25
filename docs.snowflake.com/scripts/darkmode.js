(function () {
  let darkMode = localStorage.getItem('dark-mode');
  if ((darkMode === undefined || darkMode === null) && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode = 'true';
  }
  if (darkMode === 'true') {
    document.querySelector('html').classList.add('dark');
  }
})();
