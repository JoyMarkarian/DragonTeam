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

    { //index=0
        nameCompetence: "Fusion",
        competence:
            "La technique de fusion est la plus célèbre de Dragon Ball. Il s'agit d'une technique venant d'un peuple nommé Metamors. Son Gokû l'a apprise lorsqu'il était au royaume des morts entre la saga de Cell et la saga de Majin Boo.",
    },
    {
        //index=1
        nameCompetence: "Bukû Jutsu",
        competence:
            "Pour utiliser cette technique, l'utilisateur concentre et manipule son énergie, cela lui permettant de s'élever dans les airs et donc de voler. Lorsqu'il vole, l'utilisateur peut augmenter son énergie, pour créer une sorte d'aura autour de son corps et ainsi augmenter considérablement sa vitesse. ",
    },
    {
        //index=2
        nameCompetence: "Super Kamé Hamé Ha",
        competence:
            "Cette technique consiste à concentrer toute l'énergie potentielle de son corps, ce qui forme une boule d'énergie entre les mains, et à la propulser en une fois avec force vers l'adversaire.",
    },
    {
        //index=3
        nameCompetence: "Ressentir le Ki",
        competence:
            "Cette technique permet à l'utilisateur de détecter un individu par rapport à son Ki. Chaque protagoniste dispose d'un Ki 'personnel' même s'il n'est pas très élevé. En plus de cela, cette technique permet de mesurer le KI et ainsi le danger qui pourrait arriver. Cette technique sera souvent déterminante pour localiser des protagonistes.",
    },
    {
        //index=4
        nameCompetence: "Télékinésie",
        competence:
            "La Télékinésie est une aptitude connue par beaucoup de protagonistes. Elle permet de contrôler à distance un ou plusieurs objets.",
    },
    {
        //index=5
        nameCompetence: "Intelligence",
        competence:
            "Bien que sa force physique soit celle d'un humain ordinaire, Bulma possède un intellect d'un niveau pratiquement surhumain, étant capable de créer une technologie capable d'exploits dépassant la science contemporaine. Elle fait généralement preuve de grandes capacités d'analyse et de reconnaissance des styles de conception et d'ingénierie, et peut même comprendre les sensibilités techniques de la machine à voyager dans le temps de son futur homologue. Étant donné que son père a été l'inventeur de la technologie Dynocap qui est fréquemment utilisée dans toute la série, il va sans dire que Bulma est très versée dans la microtechnologie compressible, comme le montre sa création de l'armure de combat Saiyan, qui s'ajuste à la taille du porteur, qui possède probablement la capacité de s'étirer aux êtres de la taille d'Oozaru tout comme les modèles originaux. Ses inventions sont souvent utilisées pour sa quête des Dragon Balls ou pour la compagnie de son père, ainsi que pour aider ses amis à gagner des batailles importantes.",
    },
    {
        //index=6
        nameCompetence: "Pilotage",
        competence:
            "Bulma a également prouvé à plusieurs reprises qu'elle était un pilote très compétent, pouvant même conduire des vaisseaux spatiaux et de grands avions. Ses compétences de pilote sont telles qu'elle est capable d'effectuer de nombreuses manœuvres complexes et audacieuses à des vitesses supersoniques, tant dans le ciel que dans les environnements subaquatiques, pouvant même intimider son fils lorsqu'elle est correctement motivée. On a pu le constater en essayant de provoquer une réaction de son mari stoïque en plein transit vers une île pour des vacances en famille, ses bouffonneries aériennes étant suffisamment terrifiantes et énervantes pour décontenancer les troncs.",
    },
    {
        //index=7
        nameCompetence: "Dragon Radar",
        competence:
            "Le Dragon Radar a été construit par Bulma afin qu'elle puisse retrouver rapidement et avec précision les Dragon Balls. Ce détecteur capte les ondes particulières émises par les Dragon Balls et indique leur emplacement avec précision. Le switch situé sur la partie supérieure du détecteur permet d’afficher leur position sur une carte quadrillée dont l’échelle peut être agrandie. Sur cette carte sont indiqués les quatre points cardinaux ainsi que la distance de la Dragon Ball le plus proche. Le rayon d’action de ce détecteur lui permet de capter les ondes de ces boules sur toute la surface de la Terre ainsi que sous les mers. Cependant, il ne peut trouver le signal radar de celles qui se trouvent à l’intérieur d’un être vivant, celui-ci empêchant la propagation de leurs ondes. Enfin, le radar fonctionne aussi pour les Dragon Balls se trouvant sur la planète Namek",
    },
    {
        //index=8
        nameCompetence: "Force",
        competence:
            "De temps en temps, sa force a été exagérée à des fins comiques, au point qu'elle est capable d'accomplir des prouesses de force que l'on croyait normalement impossibles pour une femme ordinaire.",
    },
    {
        //index=9
        nameCompetence: "Autre",
        competence:
            "Bien qu'elle ne possède pas la capacité de manipuler le kit elle-même, Bulma a été capable de sentir la puissance des autres combattants. Bien qu'elle ne soit pas une combattante, Bulma est habile au tir en utilisant différents types d'armes et de machines.",
    },
    {
        //index=10
        nameCompetence: "Kiai Hô",
        competence:
            "Trunks écarte ses bras et concentre son Ki dans ses paumes. Par la suite, il joint ses mains et tend ses deux index afin d'envoyer une sphère d'énergie à son adversaire.",
    },
    {
        //index=11
        nameCompetence: "Power ball",
        competence:
            "Boule d'energie pour simuler une pleine lune, pour qu'il puisse se transformer en singe géant.",
    },
    {
        //index=12
        nameCompetence: "Final Flash",
        competence:
            "C'est une technique de Vegeta. Pour cette attaque, il doit augmenter sa puissance au maximum et rassembler le plus d'énergie possible. Il écarte d'ailleurs les bras et les jambes afin de la libérer plus facilement. Toute l'énergie est ensuite concentrée dans les mains, qu'il tend en avant dans la seconde partie de sa préparation en formant un bol, puis projetée sur l'adversaire.",
    },
    {
        //index=13
        nameCompetence: "Le Big Bang Attack",
        competence:
            "C'est une technique propre à Vegeta. Pour cette attaque, Vegeta n'utilise qu'un seul bras avec la main ouverte, les doigts vers le haut et la paume vers l'avant, puis envoie une boule d'énergie extrêmement concentrée.",
    },
    {
        //index=14
        nameCompetence: "Genki Dama",
        competence:
            "Elle consiste à prendre l’énergie vitale de tous les êtres vivants quels qu'ils soient et à la concentrer en une boule d'énergie.",
    },
    {
        //index=15
        nameCompetence: "Kaioken",
        competence:
            "Cette technique sert à multiplier le potentiel de combat de son utilisateur. Celui qui maîtrise cette technique doit alors faire un travail de concentration aboutissant à une multiplication de sa puissance.",
    },
    {
        //index=16
        nameCompetence: "Super Saiyan",
        competence:
            "Cette technique est également connu sous le nom de Super Guerrier est un stade atteignable seulement par la race des Saiyans (d’où le nom de Super Saiyan).",
    },
];

const arene = [
    {
        //index 0
        name: "La tour du muscle",
        capacity:
            "La Muscle Tower est une tour de commandement du Red Ribbon dirigée par le Général White . Cette tour est haute de 6 étages. Plusieurs membres très puissants du Red Ribbon commandent chacun un niveaux.",
    },
    {
        //index 1
        name: "Namek (planète, agonisant)",
        capacity:
            "La Planète Namek est une planète d'un système solaire éloigné. Elle est la planète d'origine du Tout-Puissant, de Piccolo Daimaô, ainsi que de Dende et des autres nameks connus. Namek a été détruite par Freezer au cours de son combat avec Son Goku. Le peuple namek a ensuite été relogé sur une nouvelle planète Namek, après avoir été hébergé sur Terre pendant près d'un an.",
    },
    {
        //index 2
        name: "Capital de l'ouest",
        capacity:
            "La Capitale de l'Ouest (西の都, Nishi no Miyako) est l'une des villes majeures de la Terre, située le long de la côte ouest de son continent principal. Il est remarquable dans la série que la ville natale de Bulma est le siège de Capsule Corporation.",
    },
    {
        //index 3
        name: "Palais des dieux",
        capacity:
            "Le Palais de Dieu (神宮殿, Kami Kyūden) est une gigantesque plate-forme lévitant dans les airs terrestres. Il se situe à plusieurs centaines de kilomètres au dessus de la Tour Karin. C'est le lieu de résidence du Dieu de la Terre. D'ici, il peut observer tous les événements qui se déroulent sur Terre.",
    },
    {
        //index 4
        name: "Mont Paozu",
        capacity:
            "Le mont Paozu (パオズ山, Paozu yama) est la montagne dans laquelle vit Son Goku et son grand-père Son Gohan.",
    },

];
function selectImg(carditem) {
    const info = document.getElementById("nameCompetence");
    info.innerText = arene[carditem].name;
    const message = document.getElementById("msgCompetence");
    message.innerText = arene[carditem].capacity;
}
function selectImgCompetence(carditem) {
    const perso = document.getElementById("nameCompetence");
    perso.innerText = `${competencePersonnage[carditem].nameCompetence}`;
    const message = document.getElementById("msgCompetence");
    message.innerText = competencePersonnage[carditem].competence;
}

/* Partie de Sébastien*/
const button = document.getElementById("form-button");
button.addEventListener("click", function(event){
 event.preventDefault()
 alert("Nous vous remercions pour votre message. Nous vous répondrons dans les plus brefs délais");
});

/* Partie de Charlie*/

// const button = document.getElementById("form-button");
// button.addEventListener("submit", function(event){
const message = "Thank you for submitting your request. The.";

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
});


/* Partie de Joy*/
