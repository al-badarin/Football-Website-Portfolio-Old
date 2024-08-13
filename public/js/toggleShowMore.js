function toggleShowMore(contentId, button) {
  const content = document.getElementById(contentId);

  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    button.textContent = 'Show Less';
  } else {
    content.style.display = 'none';
    button.textContent = 'Show More';
  }
}
