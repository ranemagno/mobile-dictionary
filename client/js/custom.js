(function() {
  'use strict';

  let extras = document.querySelectorAll('.extra');
  let extraInfo = document.querySelector('.extra-info')
  extraInfo.textContent = `here's a bunch of synonyms`

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

  // fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/hello`)
  // .then(data => { return data.json() })
  // .then(res => {console.log(res[0].word)})
  // .catch(err => {console.log(err)})

  let getWordInfo = async ( word ) => {
    let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).catch(err => {console.log(err)});
    // without await it will run before the response and the promise will stay pending
    let data = await response.json();
    let wordInfo = await data[0];

    console.log(wordInfo);
    return wordInfo
  }

  let sorry = async ( word ) => {
    console.log(`Sorry! Can't seem to find the word - `, word);
  }

  // Get the input field
  var input = document.querySelector("#searchInput");

  // Execute a function when the user releases a key on the keyboard
  input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
      event.preventDefault();
      getWordInfo(input.value)
    }
  });

  // Result Variables
  var word = document.querySelector('.word');
  var pronounce = document.querySelector('.pronounce');
  var definition = document.querySelector('.definition');

  function udpateInfo() {
    word.textContent = 'Cow';
  }
  udpateInfo();





}())
