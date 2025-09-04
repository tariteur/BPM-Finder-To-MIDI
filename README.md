# BPM-Finder-To-MIDI

Ce projet est une application de bureau basée sur [Electron](https://www.electronjs.org/).  
Ce README explique comment configurer, développer et empaqueter l'application.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (version 16 ou supérieure recommandée)
- [LoopMIDI](https://www.tobias-erichsen.de/software/loopmidi.html) (nécessaire pour la gestion MIDI)

> ⚠️ **Important :** LoopMIDI doit être lancé **en même temps que l'application** pour que la communication MIDI fonctionne correctement.

---

## Installation
Dépendence :
`npm install`

Lancer en développement/test :
`npm start`

Compiler l'application en fichier exécutable (.exe) :
`npm run build`
