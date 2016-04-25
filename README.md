# ReadSpeakerForCaptivate
Permet l'utilisation du service ReadSpeaker dans Captivate9

Ce document décrit l’utilisation du service de vocalisation de ReadSpeaker en ligne (dans le cloud) avec l’outil Captivate 9 de l’éditeur Adobe pour des publications de contenu en HTML5 (Scorm / Non-Scorm). Compatibilité : Google Chrome / Mozilla

Cette fonctionnalité offre la possibilité de vocaliser des contenus dans Captivate selon deux modes :
A la demande pour lire des consignes par exemple. La vocalisation se fait au déclenchement d’une action par l’utilisateur

A la lecture d’une séquence (Timeline dans Captivate) où la vocalisation s’exécute à l’apparition successive des informations à lire.

Bien entendu, il est nécessaire d’avoir une connexion à internet disponible

Principaux avantages :
- Il n’est plus nécessaire de recourir à des enregistrements de voix fastidieux
- Pas de stockage de fichier son donc un gain de stockage et de fluidité
- Corrections sonores directement dans Captivate par la modification du texte


Pré-requis
- Bénéficier du service ReadSpeaker en ligne
- Déclaration d’URL auprès du support ReadSpeaker
- Une version d’Adobe Captivate 9

Installation sur le client lourd Captivate :
Ouvir le package ou fichier compressé
Copier le fichier index.html dans le répertoire Adobe\Adobe Captivate 9 x64\HTML
Copier le répertoire asset/js dans Adobe\Adobe Captivate 9 x64\HTML\assets

Paramétrage du service et personnalisation
Modifier dans le script de HTML\assets\readspeaker.js le paramétrage de l’appel au service (en rouge) par les identifiants fournis par ReadSpeaker 
app-eu.readspeaker.com/cgi-bin/rsent?customerid=8336&amp;lang=fr_fr&amp;voice=Thomas

Remplacer la langue si besoin

Vous êtes prêts à utiliser ReadSpeaker dans Captivate


