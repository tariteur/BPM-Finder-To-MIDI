# BPM-Finder-To-MIDI

Ce projet est une application de bureau basée sur [Electron](https://www.electronjs.org/).  
Ce README explique comment configurer, développer et empaqueter l'application.

---

## Téléchargement

Téléchargez l'application prête à l'emploi pour **Windows** :

[![Télécharger pour Windows](https://img.shields.io/badge/Télécharger-Windows-brightgreen)](https://github.com/tariteur/BPM-Finder-To-MIDI/releases/download/1.0.0/BPM.Finder.to.MIDI.Setup.1.0.0.exe)

Si vous souhaitez compiler manuellement avec le code source :  

[![Code source](https://img.shields.io/badge/Code%20source-GitHub-blue)](https://github.com/tariteur/BPM-Finder-To-MIDI)

---

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (version 16 ou supérieure recommandée)
- [LoopMIDI](https://www.tobias-erichsen.de/software/loopmidi.html) (nécessaire pour la gestion MIDI)

> ⚠️ **Important :** LoopMIDI doit être lancé **en même temps que l'application** pour que la communication MIDI fonctionne correctement.

---

## Installation

Installer les dépendances :  
`npm install`

Lancer en développement/test :
`npm start`

Compiler l'application en fichier exécutable (.exe) :
`npm run build`
