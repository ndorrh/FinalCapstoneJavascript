import display from './display.js';

const fetcher = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast', {
    method: 'GET',
  });
  const result = response.json();
  result.then((object) => display(object.meals));
};

export default fetcher;