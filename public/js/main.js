window.addEventListener('DOMContentLoaded', () => {
  if (!navigator.onLine) {
    const status = document.querySelector('.status')
    status.innerHTML = '⬤ offline'
    status.className = 'status status-offline'
  }
}, false)
