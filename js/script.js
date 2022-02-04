const tagsEl = document.querySelector('#tags');
const textarea = document.querySelector('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => createTags(e.target.value));

function createTags(value) {
  const tags = value
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tagsEl.textContent = '';

  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.textContent = tag;
    tagsEl.appendChild(tagEl);
  });
}
