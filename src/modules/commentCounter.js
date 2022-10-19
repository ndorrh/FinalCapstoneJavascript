const counter = document.getElementById('no-of-comments');
const commentCounter = (arrOfComments) => {
  counter.innerHTML = `(${arrOfComments.length})`;
};

export { counter, commentCounter };