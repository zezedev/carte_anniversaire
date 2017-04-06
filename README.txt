# carte_anniversaire
Une carte d'anniversaire interactive

Pour commencer, j'ajoute l'image de fond et la bibliothèque jQuery en CDN dans la même page que l'index.html.

Je fabrique toute la structure finale en html sauf l'image de fond:
le titre avec son bouton,
les 3 paragraphes,
les scripts de jquery et du fichier anniversaire.js...

Ensuite je donne le style en CSS simplement,
et je met display:none sur les 3 paragraphes!

Pour finir je manipule le tout avec le fichier anniversaire.js
où j'utilise JQuery pour:
	- Au clic sur le bouton: le faire disparaître, 
	  redimensionner le titre, faire apparaître le 1er message.
	- Au clic sur le 1er message faire apparaître le 2nd.
	- Au clic sur le 2nd message faire apparaître le 3ème.
	- Au clic sur le 3ème message: faire apparaître l'image de fond,
	  et remplacer les textes des 3 msg en Happy Birthday!

C'est juste pour un exercice !!!
