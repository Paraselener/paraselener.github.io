document.addEventListener('DOMContentLoaded', () => {
  if (!location.pathname.startsWith('/archives')) return

  const title = document.querySelector('#page-header #site-title')
  if (title) title.textContent = 'timeline'
})
