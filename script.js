/* Partie de Sylvain*/
let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}
function closeNav() {
  sidenav.classList.remove("active");
}
/* Partie de Gaetan*/

// partie de gaëtan
const competencePersonnage = [
  {
    nameCompetence: "Fusion",
    competence:
      "La technique de fusion est la plus célèbre de Dragon Ball. Il s'agit d'une technique venant d'un peuple nommé Metamors. Son Gokû l'a apprise lorsqu'il était au royaume des morts entre la saga de Cell et la saga de Majin Boo.",
  },
  {
    nameCompetence: "competence 2",
    competence:
      "Déscriptiggggggg gggggggg ggggggg gggggggggggggg ggggggggggggg ggggggggggg ggg ggggggg gggggon de la competence 2",
  },
  {
    nameCompetence: "competence 3",
    competence: "Déscription de la competence 3",
  },
  {
    nameCompetence: "competence 4",
    competence: "Déscription de la competence 4",
  },
  {
    nameCompetence: "competence 5",
    competence: "Déscription de la competence 5",
  },
];

const arene = [
  {
    name: "Désert de Yamcha (jour, soir, nuit)",
    capacity:
      "Texte sur Désert de Yamcha (jour, soir, nuit)La Planète Namek (ナメック星, Namekkusei) est une planète d'un système solaire éloigné. Elle est la planète d'origine du Tout-Puissant, de Piccolo Daimaô, ainsi que de Dende et des autres nameks connus. Namek a été détruite par Freezer au cours de son combat ave",
  },
  {
    name: "Namek (planète, agonisant)",
    capacity:
      "La Planète Namek (ナメック星, Namekkusei) est une planète d'un système solaire éloigné. Elle est la planète d'origine du Tout-Puissant, de Piccolo Daimaô, ainsi que de Dende et des autres nameks connus. Namek a été détruite par Freezer au cours de son combat avec Son Goku. Le peuple namek a ensuite été relogé sur une nouvelle planète Namek, après avoir été hébergé sur Terre pendant près d'un an.",
  },
  {
    name: "Capital City (ville, en ruines)",
    capacity:
      "La Capitale de l'Ouest (西の都, Nishi no Miyako) est l'une des villes majeures de la Terre, située le long de la côte ouest de son continent principal. Il est remarquable dans la série que la ville natale de Bulma est le siège de Capsule Corporation.",
  },
  {
    name: "Terre dévastée",
    capacity:
      "Texte sur l'arene Terre dévastéeLa Planète Namek (ナメック星, Namekkusei) est une planète d'un système solaire éloigné. Elle est la planète d'origine du Tout-Puissant, de Piccolo Daimaô, ainsi que de Dende et des autres nameks connus. Namek a été détruite par Freezer au cours de son combat ave",
  },
  {
    name: "Mont Paozu",
    capacity:
      "Le mont Paozu (パオズ山, Paozu yama) est la montagne dans laquelle vit Son Goku et son grand-père Son Gohan.",
  },
];
function selectImg(carditem) {
  const info = document.getElementById("titre");
  info.innerText = arene[carditem].name;
  const message = document.getElementById("msg");
  message.innerText = arene[carditem].capacity;
}
function selectImgCompetence(carditem) {
  const perso = document.getElementById("nameCompetence");
  perso.innerText = `Compétence : ${competencePersonnage[carditem].nameCompetence}`;
  const message = document.getElementById("msgCompetence");
  message.innerText = competencePersonnage[carditem].competence;
}

/* Partie de Sébastien*/

/* Partie de Charlie*/

// const button = document.getElementById("form-button");
// button.addEventListener("submit", function(event){
const message = "Thank you for submitting your request. The.";

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});

/* Partie de Joy*/
