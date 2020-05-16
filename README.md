# Critical-hits


Dans le fichiers Search.js il y a une ligne de code non fonctionnelle fesant bugguer l'application.
Cette ligne permet d'appeler le vue FilmDetails contenue dans le fichiers FilmsDetails.js.



Voici le code de ma premiers App ReactNative Utilisant ReactNavigation

Pour lancer ce projets vous aurez besoin :   
- d'un ordinateur avec ReactNative 0.62 et ReactNavigation 5.0

https://reactnative.dev/docs/environment-setup

https://reactnavigation.org/docs/getting-started

- d'un smartphone Android ou ios. Vous pouvez utiliser un ou plusieurs Simulateur ios ou Android.
(si vous utiliser un smartphone telecharger l'appli expo et votre ordinateur et votre smatphone doivent etre sur le meme reseaux sans fils)

Le Fichiers App.js est les fichiers principale il appel le fichiers Navigation.js qui gere la navigation entre les vue.

Le fichiers Search.js est la page home de l'application qui affiche tout les film dans une listes.

Chaque critique de film est recuperer via une api  dans le dossier Api et est ensuite mis en forme dans FilmItems.js

Le dossiers FilmDetails contiendra le details du films selectionner.

Components :
- Filmdetail.js
- FilmItems.js
- Search.js

