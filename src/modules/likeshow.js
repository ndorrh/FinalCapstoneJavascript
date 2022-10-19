const likeShow = (array) => {
  const myArray = array.filter((object) => object.item_id !== '');
  myArray.forEach((object) => {
    const likes = document.querySelector(`#count${object.item_id}`);
    if (object.likes === null) {
      likes.innerHTML = '0 Likes';
    } else {
      likes.innerHTML = `${object.likes} Likes`;
    }
  });
};

export default likeShow;