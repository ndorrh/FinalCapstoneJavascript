const itemcounter = () => {
  const display = document.querySelector('#chickencounter');
  const sections = document.querySelectorAll('.section');
  display.innerHTML = `(${sections.length})`;
};

export default itemcounter;