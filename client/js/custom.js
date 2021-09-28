(function() {
  'use strict';

  let extras = document.querySelectorAll('.extra');
  let extraInfo = document.querySelector('.extra-info')

  // Going through the extra tabs and changing to active when clicked
  extras.forEach(extras => {
    extras.addEventListener('click', () => {
      let active = document.querySelector('.active');
      active.classList.remove('active');
      !extras.classList.contains('active') ? extras.classList.add('active') : null;
      // instead of current text it will be replaced with data grabbed from api
      extras.textContent == 'synonyms' ? extraInfo.textContent = `here's a bunch of synonyms`
      : extras.textContent == 'antonyms' ? extraInfo.textContent = `here's a bunch of antonyms`
      : extras.textContent == 'entymol.' ? extraInfo.textContent = `here's it's entymol`
      : null;
    })
  })



}())
