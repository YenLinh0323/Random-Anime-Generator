var anime = ["Tokyo Ghoul","Dragon Ball","Asobi Asobase","Assasination Classroom","Naruto","Your lie in April","My Hero Academia","One Punch Man","Yuri on Ice","Kuroko no basket","Haikyuu!","Bloom into You", "Say I Love You","The Beginning", "Sakura Trick","Avatar the Last Airbender","Sword Art Online","Angels of Death","Full Metal Alchemist","Fairy Tail","Citrus","Pokemon","Hunter x Hunter","Death Note","Noragami","Silent Voice","Inuyasha","One Piece","Bleach"];

//console.log(anime[round]);
// document.getElementById("button").innerHTML="click here!";

var button = document.getElementById("button");

button.addEventListener("click", function(){
  var rand = Math.random();
  var bigger = rand * anime.length;
  var round = Math.floor(bigger);
  document.getElementById("placeholder").innerHTML= anime[round];

});
