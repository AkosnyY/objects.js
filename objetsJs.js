// correction des exercices 


// Exercice 1 : Création et manipulation d'objets
// Etape 1 : Créer un objet "voiture" avec les propriétés "marque", "modèle" et "année"
// function Voiture(marque, modele, annee) {
//     this.marque = marque;
//     this.modele = modele;
//     this.annee = annee;
//     // Etape 2 : Ajouter une méthode "conduire" à l'objet "voiture" qui affiche un message "La voiture de marque [marque] modèle [modèle] de l'année [année] roule sur la route."
//     this.conduire = () => {
//         console.log(`La voiture de marque ${this.marque} modèle ${this.modele} de l'année ${this.annee} roule sur la route.`);
//     }
// }

class Voiture {
    constructor(marque, modele, annee) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }
    conduire = () => {
        console.log(`La voiture de marque ${this.marque} modèle ${this.modele} de l'année ${this.annee} roule sur la route.`);
    }
}

// Etape 3 : Créer une instance de l'objet "voiture" en utilisant les propriétés "Toyota", "Camry" et "2020"
const voiture1 = new Voiture("Toyota", "Camry", 2020);
const voiture2 = new Voiture("Chevrolet", "Camaro", 2006);
const voiture3 = new Voiture("Fiat", "Multipla", 2002);
// Etape 4 : Appeler la méthode "conduire" sur l'instance de l'objet "voiture" pour afficher le message "La voiture de marque Toyota modèle Camry de l'année 2020 roule sur la route."
voiture1.conduire()

// Exercice 2 : Manipulation d'objets dans un tableau
// Etape 1 : Créer un tableau "garage" qui contient des instances de l'objet "voiture" créé dans l'exercice précédent
const garage = {
    voitures: [voiture1, voiture2, voiture3],
    afficherVoitures: function() {
        console.log(this.voitures);
    }
}
// Etape 2 : Ajouter une méthode "afficherVoitures" à l'objet "garage" qui affiche les propriétés de chaque voiture dans le tableau

// Etape 3 : Appeler la méthode "afficherVoitures" sur l'objet "garage" pour afficher les propriétés de chaque voiture dans le tableau
garage.afficherVoitures();

// Exercice 3 : Fonction constructeur
// Etape 1 : Créer une fonction constructeur "Personne" qui prend en paramètres "nom" et "âge"
function Personne(nom, age) {
    // Etape 2 : Ajouter les propriétés "nom" et "âge" à l'objet créé par la fonction constructeur
    this.nom = nom;
    this.age = age;
    // Etape 3 : Ajouter une méthode "sePresenter" à l'objet créé par la fonction constructeur qui affiche un message "Bonjour, je m'appelle [nom] et j'ai [âge] ans."
    this.sePresenter = () => {
        console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`)
    }
}
// Etape 4 : Utiliser la fonction constructeur pour créer une instance de l'objet "Personne" en utilisant les valeurs "John" et "30"
const john = new Personne("John", 30);


// Exercice 4 : Héritage de fonction constructeur
// Etape 1 : Créer une fonction constructeur "Etudiant" qui hérite des propriétés et méthodes de la fonction constructeur "Personne"
// function Etudiant(nom, age, matricule) {
//     // Etape 2 : Ajouter une propriété "matricule" à l'objet créé par la fonction constructeur "Etudiant"
//     Personne.call(this, nom, age);
//     this.matricule = matricule;
//     // Etape 3 : Ajouter une méthode "etudier" à l'objet créé par la fonction constructeur "Etudiant" qui affiche un message "L'étudiant [nom] avec le matricule [matricule] étudie pour son examen."
//     this.etudier = () => {
//         console.log(`L'étudiant ${this.nom} avec le matricule ${this.matricule} étudie pour son examen.`);
//     }
// }

class Etudiant extends Personne {
    constructor(nom, age, matricule) {
        super(nom, age);
        this.matricule = matricule;
    }
    etudier = () => {
        console.log(`L'étudiant ${this.nom} avec le matricule ${this.matricule} étudie pour son examen.`)
    }
}

// Etape 4 : Utiliser la fonction constructeur "Etudiant" pour créer une instance de l'objet "Etudiant" en utilisant les valeurs "Jane" et "22" pour les propriétés "nom" et "âge", et "123456" pour la propriété "matricule"
const jane = new Etudiant("Jane", 22, 123456);
// Etape 5 : Appeler la méthode "sePresenter" sur l'instance de l'objet "Etudiant" pour afficher le message "Bonjour, je m'appelle Jane et j'ai 22 ans."
jane.sePresenter();
// Etape 6 : Appeler la méthode "etudier" sur l'instance de l'objet "Etudiant" pour afficher le message "L'étudiant Jane avec le matricule 123456 étudie pour son examen."
jane.etudier();