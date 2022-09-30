// $('input').on('change', function () {
//     $('body').toggleClass('blue');
// });

const personnage = [
    {
        name: "Bulma",
        capacity: "Bulma (ブルマ, Buruma?) est un personnage de fiction créé par Akira Toriyama dans le manga Dragon Ball en 1984. Né le 19 août, elle apparaît pour la première fois le 20 novembre 1984 dans le premier épisode de Dragon Ball, publié dans Weekly Shōnen Jump. Elle y fait la rencontre du héros Goku et le recrute comme garde du corps pour voyager et partir à la quête des Dragon Balls en vue de réaliser ses vœux.Elle se mariera plus tard avec le Prince Vegeta, qui était d’abord son ennemi, mais qui deviendra plus tard son mari. Elle aura un fils avec lui, nommé Trunks, et une petite fille du nom de Bra"
    },
    {
        name: "Son Gohan",
        capacity: "Son Gohan (孫悟飯, Son Gohan?), également appelé Sangohan, dans la version française de l'anime, est un personnage de fiction du manga Dragon Ball créé par Akira Toriyama. Il apparaît pour la première fois dans le magazine Weekly Shōnen Jump, le 24 octobre 1988"
    },
    {
        name: "Son Goku",
        capacity: "Son Goku (孫悟空, Son Gokū?, anciennement orthographié Sangoku et Son Gokû), de son nom de naissance Kakarot (カカロット, Kakarotto?), est un personnage de fiction japonais créé par Akira Toriyama et le principal héros du manga Dragon Ball. Il apparaît pour la première fois le 20 novembre 1984 dans le Weekly Shōnen Jump. Le personnage s'inspire de Sun Wukong et Superman[réf. nécessaire], en raison de son histoire d'origine très similaire."
    },
    {
        name: "trunks",
        capacity: "Trunks (トランクス, Torankusu?) né le 12 octobre, Trunks est un personnage de fiction créé par Akira Toriyama dans le manga Dragon Ball en 1984. Ce personnage a la particularité d'exister deux fois dans l'histoire. En effet, le premier Trunks qui apparaît au début de la saga des cyborgs vient du futur et a remonté le temps grâce à une machine spéciale conçue par Bulma. Ce n'est que quelques années plus tard qu'il naît réellement. Dans la suite de l'article, on distingue donc « Trunks du présent » et « Trunks du futur »"
    },
    {
        name: "Vegeta",
        capacity: "Vegeta (ベジータ, Bejīta?), également orthographié Végéta, est un personnage de fiction du manga Dragon Ball créé par Akira Toriyama. Il apparaît pour la première fois le 19 décembre 1988 dans le Weekly Shōnen Jump, recherchant les Dragon Balls réalisant des vœux pour obtenir l'immortalité. Aux côtés de Goku, Gohan, Bulma, Krillin et Piccolo, il est un des personnages ayant reçu le plus de développement. Son personnage évolue de méchant à anti-héros et devient un héros au cours de la série. Il est l'un des personnages les plus populaires de la franchise Dragon Ball, et sa première confrontation avec Goku est considérée comme l'une des batailles les plus emblématiques du manga et de l'anime"
    },

]
function selectImg(carditem) {
    const info = document.getElementById("titre");
    info.innerText = personnage[carditem].name;
    const message = document.getElementById("msg");
    message.innerText = personnage[carditem].capacity;
}