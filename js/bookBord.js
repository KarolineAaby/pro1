/*
bookBord.js
Kunne ikke få min book bord til at virke i js.js
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


// Book bord - Selvstudiedag 3 Spørgsmål 3
btn1.addEventListener('click', function(){
  gæster.style.display = 'block';
  navn.style.display = 'none';
})
btn2.addEventListener('click', function(){
  tidspunkt.style.display = 'block';
  gæster.style.display = 'none';
})
btn3.addEventListener('click', function(){
  radio.style.display = 'block';
  tidspunkt.style.display = 'none';
})
btn4.addEventListener('click', function(){
  lastField.style.display = 'block';
  radio.style.display = 'none';
})

//Book bord - tilbageknapper
tilbagebtn1.addEventListener('click', function(){
  navn.style.display = 'block';
  gæster.style.display = 'none';
})
tilbagebtn2.addEventListener('click', function(){
  gæster.style.display = 'block';
  tidspunkt.style.display = 'none';
})
tilbagebtn3.addEventListener('click', function(){
  tidspunkt.style.display = 'block';
  radio.style.display = 'none';
})
tilbagebtn4.addEventListener('click', function(){
  radio.style.display = 'block';
  lastField.style.display = 'none';
})

//Book bord - Selvstudiedag 3 Spørgsmål 5
function validateForm() {
  let x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Navn skal udfyldes");
    return false;
  }
}
function validateForm() {
  let x = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert("Email skal udfyldes");
    return false;
  }
}
