







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
        competence: "La technique de fusion est la plus célèbre de Dragon Ball. Il s'agit d'une technique venant d'un peuple nommé Metamors. Son Gokû l'a apprise lorsqu'il était au royaume des morts entre la saga de Cell et la saga de Majin Boo."
    },
    {
        nameCompetence: "Bukû Jutsu",
        competence: "Pour utiliser cette technique, l'utilisateur concentre et manipule son énergie, cela lui permettant de s'élever dans les airs et donc de voler. Lorsqu'il vole, l'utilisateur peut augmenter son énergie, pour créer une sorte d'aura autour de son corps et ainsi augmenter considérablement sa vitesse. "
    },
    {
        nameCompetence: "Super Kamé Hamé Ha",
        competence: "Cette technique consiste à concentrer toute l'énergie potentielle de son corps, ce qui forme une boule d'énergie entre les mains, et à la propulser en une fois avec force vers l'adversaire."
    },
    {
        nameCompetence: "Ressentir le Ki",
        competence: "Cette technique permet à l'utilisateur de détecter un individu par rapport à son Ki. Chaque protagoniste dispose d'un Ki 'personnel' même s'il n'est pas très élevé. En plus de cela, cette technique permet de mesurer le KI et ainsi le danger qui pourrait arriver. Cette technique sera souvent déterminante pour localiser des protagonistes."
    },
    {
        nameCompetence: "Télékinésie",
        competence: "La Télékinésie est une aptitude connue par beaucoup de protagonistes. Elle permet de contrôler à distance un ou plusieurs objets."
    },
    {
        nameCompetence: "Intelligence",
        competence: "Bien que sa force physique soit celle d'un humain ordinaire, Bulma possède un intellect d'un niveau pratiquement surhumain, étant capable de créer une technologie capable d'exploits dépassant la science contemporaine. Elle fait généralement preuve de grandes capacités d'analyse et de reconnaissance des styles de conception et d'ingénierie, et peut même comprendre les sensibilités techniques de la machine à voyager dans le temps de son futur homologue. Étant donné que son père a été l'inventeur de la technologie Dynocap qui est fréquemment utilisée dans toute la série, il va sans dire que Bulma est très versée dans la microtechnologie compressible, comme le montre sa création de l'armure de combat Saiyan, qui s'ajuste à la taille du porteur, qui possède probablement la capacité de s'étirer aux êtres de la taille d'Oozaru tout comme les modèles originaux. Ses inventions sont souvent utilisées pour sa quête des Dragon Balls ou pour la compagnie de son père, ainsi que pour aider ses amis à gagner des batailles importantes."
    },
    {
        nameCompetence: "Pilotage",
        competence: "Bulma a également prouvé à plusieurs reprises qu'elle était un pilote très compétent, pouvant même conduire des vaisseaux spatiaux et de grands avions. Ses compétences de pilote sont telles qu'elle est capable d'effectuer de nombreuses manœuvres complexes et audacieuses à des vitesses supersoniques, tant dans le ciel que dans les environnements subaquatiques, pouvant même intimider son fils lorsqu'elle est correctement motivée. On a pu le constater en essayant de provoquer une réaction de son mari stoïque en plein transit vers une île pour des vacances en famille, ses bouffonneries aériennes étant suffisamment terrifiantes et énervantes pour décontenancer les troncs."
    },
    {
        nameCompetence: "Dragon Radar",
        competence: "Le Dragon Radar a été construit par Bulma afin qu'elle puisse retrouver rapidement et avec précision les Dragon Balls. Ce détecteur capte les ondes particulières émises par les Dragon Balls et indique leur emplacement avec précision. Le switch situé sur la partie supérieure du détecteur permet d’afficher leur position sur une carte quadrillée dont l’échelle peut être agrandie. Sur cette carte sont indiqués les quatre points cardinaux ainsi que la distance de la Dragon Ball le plus proche. Le rayon d’action de ce détecteur lui permet de capter les ondes de ces boules sur toute la surface de la Terre ainsi que sous les mers. Cependant, il ne peut trouver le signal radar de celles qui se trouvent à l’intérieur d’un être vivant, celui-ci empêchant la propagation de leurs ondes. Enfin, le radar fonctionne aussi pour les Dragon Balls se trouvant sur la planète Namek"
    },
    {
        nameCompetence: "Force",
        competence: "De temps en temps, sa force a été exagérée à des fins comiques, au point qu'elle est capable d'accomplir des prouesses de force que l'on croyait normalement impossibles pour une femme ordinaire."
    },
    {
        nameCompetence: "Autre",
        competence: "Bien qu'elle ne possède pas la capacité de manipuler le kit elle-même, Bulma a été capable de sentir la puissance des autres combattants. Bien qu'elle ne soit pas une combattante, Bulma est habile au tir en utilisant différents types d'armes et de machines."
    },
]

const arene = [
    {
        name: "Désert de Yamcha (jour, soir, nuit)",
        capacity: "Texte sur Désert de Yamcha (jour, soir, nuit)"
    },
    {
        name: "Namek (planète, agonisant)",
        capacity: "La Planète Namek (ナメック星, Namekkusei) est une planète d'un système solaire éloigné. Elle est la planète d'origine du Tout-Puissant, de Piccolo Daimaô, ainsi que de Dende et des autres nameks connus. Namek a été détruite par Freezer au cours de son combat avec Son Goku. Le peuple namek a ensuite été relogé sur une nouvelle planète Namek, après avoir été hébergé sur Terre pendant près d'un an."
    },
    {
        name: "Capital City (ville, en ruines)",
        capacity: "La Capitale de l'Ouest (西の都, Nishi no Miyako) est l'une des villes majeures de la Terre, située le long de la côte ouest de son continent principal. Il est remarquable dans la série que la ville natale de Bulma est le siège de Capsule Corporation."
    },
    {
        name: "Terre dévastée",
        capacity: "Texte sur l'arene Terre dévastée"
    },
    {
        name: "Mont Paozu",
        capacity: "Le mont Paozu (パオズ山, Paozu yama) est la montagne dans laquelle vit Son Goku et son grand-père Son Gohan."
    },

]
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
const message =
    "Thank you for submitting your request. The.";

document
    .getElementById("form")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        alert(message);
    });

/* Partie de Joy*/

