/*
PRO1
case: Alices Restaurant
*/

// navbar - Selvstudiedag 2 Spørgsmål 4
let hide = true; // global

// hide or show
let hideShow = function(){

  if (hide == true) {
    document.getElementById('showBrg').style.display = 'block';
    hide = false;
  } else {
    document.getElementById('showBrg').style.display = 'none';
    hide = true;
  }

}

// detect click
hamburger.addEventListener('click', hideShow);


// Selvstudiedag 1 Spørgsmål 1+2
// globale variabler
let d = new Date(); // kan genbruges andre steder
let uge = ['søndag','mandag','tirsdag','onsdag','torsdag','fredag','lørdag'];
let maaneder = ['januar','februar','marts','april','maj','juni','juli','august','september','oktober','november','december'];

// footer som objekt
const info = {
  author: 'Karoline Aaby', // Spørgsmål 1
  dag: uge[ d.getDay() ],
  maaned: maaneder[ d.getMonth() ],
  dagImaaned: d.getDate(),
  aar: d.getFullYear(),
  time: d.getHours(),
  minut: d.getMinutes(),
  restaurant: 'Alice\'s Restaurant', // Spørgsmål 2
  adresse: 'Volden 234 <br>8000 Aarhus C',
  telefon: '+45 56 60 98 67',
  // Metoder
  skrivTilFooter: function() {
    footerInfo.innerHTML += `
      <br><p>
        &copy;
        ${this.author}
        ${this.dag}
        ${this.dagImaaned}.
        ${this.maaned}
        ${this.aar}.
      </p>
    `;
  },
  skrivAdresse: function() {
    footerInfo.innerHTML += `
      <div class="adresse">
        <h3>${this.restaurant}</h3>
        <p>
          ${this.adresse}<br>
          ${this.telefon}
        </p>
      </div>
    `
  }
}

info.skrivAdresse(); // Spørgsmål 2
info.skrivTilFooter(); // Spørgsmål 1


//medarbejdere array - Selvstudiedag 1 Spørgsmål 3
let navne,medarbejdere = [
  "Alice Johansen - Ejer",
  "Tjener - Jonas Christiansen",
  "Tjener - Camilla Fredriksen",
  "Opvasker - Sofia Bang Andersen",
  "Kok - Simon Lundkvist",
  "Tjener - Amalie Søndergaard",
  "Opvasker - Rasmus Hansen"
]

medarbejdere.sort();

for (navne in medarbejdere) {
  medarbejderListe.innerHTML += `
    <div class="ogDenHer">
      ${ medarbejdere[ navne ] }
    </div>
  `
}

//citat - Selvstudiedag 1 Spørgsmål 4
let citater = [
  '"Nothing brings people together like good food" <br> James Wood',
  '"Good food is the foundation og genuine happiness." <br> John Sørensen',
  '"All I ever wanted was to cook the perfect meal."<br>Alice',
  '"You can get anything you want at Alice\'s restaurant" <br> Arlo Guthrie',
  '"Laughter is brightest in the place where food is good" <br> Benedicte Poulsen',
  '"Life is like a mayonaise soda" <br> Lou Reed'
];

// citat - selvkørende funktion
(function dagensCitat() {
  rndNo = Math.floor(Math.random() * citater.length );
  citat.innerHTML = '<em>' +  citater[ rndNo ] + '</em>';
})();


//Sæsonens udvalgte - Selvstudiedag 2 Spørgsmål ekstra vdr. mouse events
menuEt.addEventListener('mouseover', function(){
  menuEtTekst.innerHTML = "Oksemørbrad med kantarelsauce";
  menuEt.style.opacity = "0.4";
})

menuEt.addEventListener('mouseout', function(){
  menuEtTekst.innerHTML = " ";
  menuEt.style.opacity = "1";
})

menuTo.addEventListener('mouseover', function(){
  menuToTekst.innerHTML = "Frisk laks med grønt";
  menuTo.style.opacity = "0.4";
})

menuTo.addEventListener('mouseout', function(){
  menuToTekst.innerHTML = " ";
  menuTo.style.opacity = "1";
})

menuTre.addEventListener('mouseover', function(){
  menuTreTekst.innerHTML = "Hjerte med peaunuts";
  menuTre.style.opacity = "0.4";
})

menuTre.addEventListener('mouseout', function(){
  menuTreTekst.innerHTML = " ";
  menuTre.style.opacity = "1";
})


// Selvstudiedag 4 Spørgsmål 1
// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    //height: '360',
    //width: '640',
    videoId: 'SVMF-KwlPHk', //ændret til min video
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  })
}

/* Player kontrolleres af funktioner */
function onPlayerReady(event) {
  console.log("player is ready");
  event.target.pauseVideo();
}

function playItSam(event) {
  console.log("player is ready");
  event.target.playVideo(); // event from player
}

function onPlayerStateChange() {
  console.log("player state change");

  if (event.data == YT.PlayerState.PLAYING && !done) {
    //setTimeout(stopVideo, 6000);
    done = true;
  }
}

/* is element visible? if ok playVideo() */
var elementet = document.getElementById("synlig");

window.addEventListener("scroll", function() {

  if (elFllVsbl(elementet)) {
    console.log("play video");
    player.playVideo(); // with player you can manipulate the video
  } else {
    console.log("pause video")
    player.pauseVideo();
  }
}); // end eventlistener

function elFllVsbl(el) {
  return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}


// Selvstudiedag 4
let day;

switch (new Date().getDay()) {

  case 1:
    day = 'Mandag 12:00 - 23:00';
    break;
  case 2:
    day = 'Tirsdag 12:00 - 23:00';
    break;
  case 3:
    day = 'Onsdag 17:00 - 23:00';
    break;
  case 4:
    day = 'Torsdag 18:00 - 22:15';
    break;
  case 5:
    day = 'Fredag 12:00 - 00:00';
    break;

  default:
    day = 'Weekend: Lukket'
}

infoAaben.innerHTML = day;
