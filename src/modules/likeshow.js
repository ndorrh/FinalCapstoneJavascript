const likeShow = (array) => {
  const myArray = array.filter((object) => object.item_id !== '');
  myArray.forEach((object) => {
    const likes = document.querySelector(`#count${object.item_id}`);
    likes.innerHTML = (object.likes === null) ? '0 Likes' : `${object.likes} Likes`;
  });
};

export default likeShow;