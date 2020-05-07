// importing stylesheet
import './styles/main.scss';

// importing assets/images
import webpack_logo from './assets/img/webpack-logo.png';

// console log out
console.log('Webpack is running!');

// -- JS CODE --
// create elements
const container = document.getElementById('container');
const containerImg = new Image();

container.classList.add('app'); // sets the div style
containerImg.src = webpack_logo; // sets the img src
containerImg.classList.add('container__img'); // sets the img styling

container.appendChild(containerImg); // appends child to the parent container

document.body.appendChild(container); // appends the container to body

