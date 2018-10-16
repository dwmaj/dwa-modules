/**
 * Récupère le texte à lire
 *
 * @returns {string} texte
 */
export function getText (post) {
  return post.querySelector('[data-ref="post.content"]').textContent;
}

/**
 * Ajoute l'estimation
 *
 * @export
 * @param {string} text
 * @returns {undefined}
 */
export function addText (post, text) {
  const el = document.createElement('time');

  el.classList.add('post__header__time');
  el.textContent = text;
  post.querySelector('[data-ref="post.header"]').appendChild(el);
}
