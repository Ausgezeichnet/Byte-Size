// Include data for accessing Google APIs

const apiKey = 'AIzaSyCAtqbXjICPp3Dze0t__FY87l01Ae-v0Nk';
const url = 'https://www.googleapis.com/urlshortener/v1/url';
const projection = 'FULL';

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
  const urlToExpand = url + '?key=' + apiKey +
'&shortUrl=' + $inputField.val();
  $.getJSON(urlToExpand, response => { $responseField.append('<p>Your expanded url is: </p><p>' +
  response.longUrl + '</p>');})
}

function shortenUrl() {
  const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = $inputField.val();
  $.post({
  url: urlWithKey,
  data: JSON.stringify({longUrl: urlToShorten},),
  dataType: 'json',
  contentType: 'application/json',  
  success(response) {
    $responseField.append('<p>Your shortened url is: </p><p>' + response.id + '</p>');
  },
  error(jqXHR, status, errorThrown) {
    console.log(jqXHR);
  }
});
}

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
}

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
}

// Call functions on submit

$expandButton.click(expand);
$shortenButton.click(shorten);
