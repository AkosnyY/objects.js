// Exercice DOM : Construction d'un carrousel d'images à l'aide d'une fonction constructeur

//     Etape 1 : Créer une fonction constructeur "Carrousel" qui prend en paramètre un tableau d'images et un identifiant d'élément HTML
//     Etape 2 : Utiliser la fonction constructeur pour créer une instance de l'objet "Carrousel" en utilisant un tableau d'images et l'identifiant de l'élément HTML où vous voulez afficher le carrousel.
//     Etape 3 : Ajouter une propriété "indexActuel" à l'objet qui indique l'index de l'image actuellement affichée
//    E Etape 4 : Ajouter des méthodes "suivant" et "precedent" à l'objet pour naviguer entre les images du carrousel.
//     Etape 5 : Utiliser les méthodes "appendChild" et "setAttribute" de l'objet DOM pour ajouter les images au carrousel et les mettre en forme
//     Etape 6 : Ajouter des boutons "suivant" et "precedent" à l'HTML et utiliser les méthodes "addEventListener" pour les rendre interactifs
//     Etape 7 : Ajouter une fonction pour faire défiler automatiquement les images toutes les 3 secondes

class Carrousel {
    constructor(images, htmlId) {
        this.images = images;
        this.htmlId = htmlId;
        this.carrouselImageContainer = document.getElementById(htmlId);
        this.indexActuel = 0;
        this.carouselElement = document.createElement('img'); 
        this.display();
    }
    display = () => {
        this.carouselElement.setAttribute('alt', "Alternative text");
        this.carouselElement.setAttribute('src', this.images[this.indexActuel]);

        this.carrouselImageContainer.appendChild(this.carouselElement);
    }
    suivant = () => {
        if (!this.images[this.indexActuel + 1]) {
            this.indexActuel = 0;
        } else {
            this.indexActuel += 1;
        }
        this.display()
    }
    precedent = () => {
        
        if (!this.images[this.indexActuel - 1]) {
            this.indexActuel = this.images.length - 1;
        } else {
            this.indexActuel -= 1;
        }
        this.display()
    }
}

const imagesArray = ["https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg", "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg", "https://images.pexels.com/photos/1227511/pexels-photo-1227511.jpeg"]
const carrousel1 = new Carrousel(imagesArray, "carouselContent")

const previousArrow = document.getElementById('arrowLeft');
const nextArrow = document.getElementById('arrowRight');


previousArrow.addEventListener('click', () => carrousel1.precedent())
nextArrow.addEventListener('click', () => carrousel1.suivant())

setInterval(() => {
    carrousel1.suivant()
}, 3000);