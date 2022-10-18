import './style.css';

import { render, commentPopUp } from './modules/commentPopUp.js';

commentPopUp.innerHTML = render();

const comment = document.getElementById('category');

console.log(comment);