function updateImgSrc(selector, options) {
  const picture = options[Math.floor(Math.random() * options.length)];
  document.querySelector(selector).setAttribute('src', picture);
}

updateImgSrc('img.logo', [
  './img/japan1.jpg',
  './img/japan2.jpg',
]);
