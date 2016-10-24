'use strict';

//An array of objects representing a couple of music tracks
var songs = [{
    name: "Bohemian Rhapsody - Remastered 2011",
    album_image: "https://i.scdn.co/image/622b72a639157786783cffaccfcea7b306051225",
    preview_url: "https://p.scdn.co/mp3-preview/d5bc71c0bdc98b547a39aeba9538a7c6d33fc342",    
  }, {
    name: "Starman - 2012 Remastered Version",
    album_image: "https://i.scdn.co/image/9598d123dc969fc75835eba82b45b86748e58cbe",
    preview_url: "https://p.scdn.co/mp3-preview/61bef2960dfceea5c37dcb8d4d3e5ef77cb4e533",
  }, {
    name: "Nasty",
    album_image: "https://i.scdn.co/image/821ce8b515a40320fbfccd3c4ab31374327eaaac",
    preview_url: "https://p.scdn.co/mp3-preview/8f1e48f29b418c274ce96fd6ae0f6b5002aefe02",
  }];

var nowPlaying = new Audio();


/**
 * This function takes in an object representing a SINGLE music track
 * and displays it on the page.
 */
function renderTrack(track){

  //select the `.records` section that will contain the records
  //you could also do this before the function declaration
  var records = document.querySelector(".records");

  //create a new `img` element to visually represent the track
  var imgElement = document.createElement('img');

  //set the image's `src` to be the track's `album_image`
  imgElement.setAttribute('src', track.album_image);

  //always give images `alt` attributes! The `name` of the track will work fine
  imgElement.setAttribute('alt', track.name);

  //attach the image element to the `.records` section
  records.appendChild(imgElement);

  //add an event listener so that when the track is clicked on,
  //it starts to spin! (add the Font-Awesome utility class `fa-spin`)
  //
  //IMPORTANT: use the callback's `event` parameter and get the `target`
  //to change the element that was clicked on!
  //
  //Bonus: can you make the track stop spinning when clicked again?
  imgElement.addEventListener('click', function(event) {
    var whichRecord = event.target;

    if (nowPalying.src === track.preview_url){
      if(nowPlaying.paused) {
        nowPlaying.play();
      } else {
        nowPlaying.pause();
      }
    } else {
      nowPlaying = new Audio(track.preview_url);
    }

    whichRecord.classList.toggle('fa-spin');
  });

} //end method

//call this function `forEach` element in the `songs` array!
// songs.forEach(renderTrack);

var form = document.querySelector('form');
form.addEventListener('submit', function(event){
  console.log("Submitted!");

  event.preventDefault();

  // do my thing

  return false; 
});