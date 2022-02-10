
const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const currentElement = e.target.closest('li');
  if (currentElement) {
    currentElement.classList.toggle('hidden');
  }
});
