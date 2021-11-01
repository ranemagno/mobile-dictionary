// Dictionary Project - Rane Magno - github.com/rraneighh
(function() {


  'use strict';


// Initial Variables and Setup -------------------------------------------------
  var word = document.querySelector('.word');
  var pronounce = document.querySelector('.pronounce');
  var definitionParent = document.querySelector('.cont-definition')
  var definition = document.querySelector('.definition');
  var body = document.querySelector('body');
  var variationParent = document.querySelector('.variations');
  var variation = document.querySelector('.variation');

  body.onload = async () => {
    let data = await getWordInfo('wet');
    updateInfo(data)
    changeInfo(data.meanings[0]);
  }

// Initial Variables and Setup -------------------------------------------------


// Getting Data ----------------------------------------------------------------

  let getWordInfo = async ( word ) => {
    let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    // without await it will run before the response and the promise will stay pending
    if (!response.ok){
      sorry(word)
    }
    let data = await response.json();
    let wordInfo = await data[0];
    // let update = await updateInfo(wordInfo);
    return wordInfo
  }

  // Error Msg
  let sorry = async ( word ) => {
    console.log(`Sorry! Can't seem to find the word - `, word);
  }

// Getting Data ----------------------------------------------------------------


// Updating & Change Page Info -------------------------------------------------

  let updateInfo = async ( data ) => {
    console.dir(data);

    // Initial Setup
    let wordData = data.word;
    let phoneticText = data.phonetics[0].text;
    let phoneticSound = data.phonetics[0].audio;
    word.textContent = wordData;
    pronounce.textContent = `/ ${phoneticText} /`;
    changeInfo(data.meanings[0]);
    variationParent.innerHTML = '';

    for (const meaning of data.meanings){
      let i = data.meanings.indexOf(meaning);
      variationParent.innerHTML += `
        <span class="variation">${i + 1}</span>
      `;
      let variationUpdated = await document.querySelectorAll('.variation');
      variationUpdated.forEach((variation) => {
        variation.addEventListener('click', () => {
          changeInfo(data.meanings[variation.textContent - 1])
        })
      })
    }

  // end - updateInfo
  }

  let changeInfo = ( def ) => {
    console.log(def);
    let typeData = def.partOfSpeech
    definitionParent.innerHTML = `<p class="definition">${typeData} - </p>`;

    let allDef = def.definitions;
    for (const def of allDef){
      let i = allDef.indexOf(def);
      // converting from numbers to corresponding letters
      let defCount = String.fromCharCode(97 + i);
      definitionParent.innerHTML += `<p class="definition">${defCount}. ${def.definition}</p>`;
    }

    let synonyms = def.definitions[0].synonyms;
    let strSynonyms = synonyms.join(', ')
    console.log(strSynonyms);

    changeExtras(strSynonyms, '', '')

  }

// Updating & Change Page Info -------------------------------------------------


// Synonyms and Antonyms -------------------------------------------------------

  let extras = document.querySelectorAll('.extra');
  let extraInfo = document.querySelector('.extra-info')

  let changeExtras = ( synonyms, antonyms, entymol ) => {
    // Initial Content
    extraInfo.textContent = synonyms

    extras.forEach(extras => {
      extras.addEventListener('click', () => {

        // Changing selection to blue
        let active = document.querySelector('.active');
        active.classList.remove('active');
        !extras.classList.contains('active') ? extras.classList.add('active') : null;

        extras.textContent == 'synonyms' ? extraInfo.textContent = synonyms
        : extras.textContent == 'antonyms' ? extraInfo.textContent = antonyms
        : extras.textContent == 'entymol.' ? extraInfo.textContent = entymol
        : null;

        extraInfo.textContent = synonyms

      })
    })
  }


  // Going through the extra tabs and changing to active when clicked
  // extras.forEach(extras => {
  //   extras.addEventListener('click', () => {
  //     let active = document.querySelector('.active');
  //     active.classList.remove('active');
  //     !extras.classList.contains('active') ? extras.classList.add('active') : null;
  //     // instead of current text it will be replaced with data grabbed from api
  //     extras.textContent == 'synonyms' ? extraInfo.textContent = `here's a bunch of synonyms`
  //     : extras.textContent == 'antonyms' ? extraInfo.textContent = `here's a bunch of antonyms`
  //     : extras.textContent == 'entymol.' ? extraInfo.textContent = `here's it's entymol`
  //     : null;
  //   })
  // })

// Synonyms and Antonyms -------------------------------------------------------


// Input Handler ---------------------------------------------------------------

  var input = document.querySelector("#searchInput");
  var searchIcon = document.querySelector('#searchIcon');

  // Execute a function when the user releases a key on the keyboard
  input.addEventListener('keyup', async (event) => {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
      event.preventDefault();
      let wordInfo = await getWordInfo(input.value);
      updateInfo(wordInfo);
    }
  });

  searchIcon.addEventListener('click', async (event) => {
    event.preventDefault();
    let wordInfo = await getWordInfo(input.value);
    updateInfo(wordInfo);
  });

// Input Handler ---------------------------------------------------------------


// END OF CODE
}())
