const counter = document.getElementById('no-of-comments');
const commentCounter = (arrOfComments) => {
  counter.innerHTML = `(${arrOfComments.length})`;
  console.log(counter);
};

export { counter, commentCounter };