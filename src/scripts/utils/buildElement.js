export default function(markup) {
  const div = document.createElement('div');
  div.innerHTML = markup.trim();
  return div.childNodes[0];
}
