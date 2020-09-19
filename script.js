'use strict';

function getDogImage(number) {
  fetch('https://dog.ceo/api/breeds/image/random/' + number)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson))
    .catch((error) => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('img').remove();
  for (let i = 0; i < responseJson.message.length; i++) {
    $('.results').append(
      '<img src="' + responseJson.message[i] + '" class="results-img">'
    );
  }
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit((event) => {
    event.preventDefault();
    const inputNumber = $('.inputNumber').val();
    getDogImage(inputNumber);
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
