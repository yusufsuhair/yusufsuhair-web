document.querySelectorAll('[data-preview]').forEach((button) => {
  button.addEventListener('click', () => {
    const image = document.getElementById('feature-image');
    const caption = document.getElementById('feature-caption');
    const error = document.getElementById('image-error');
    document.querySelectorAll('[data-preview]').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    error.hidden = true;
    image.onerror = () => { error.hidden = false; };
    image.onload = () => { error.hidden = true; };
    image.src = button.dataset.preview;
    image.alt = button.dataset.alt;
    caption.textContent = button.dataset.caption;
  });
});
