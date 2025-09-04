!macro customInstall
  ; Message pour préciser que l'application sera cachée dans la zone de notification
  MessageBox MB_OK "BPM Finder to MIDI sera exécutée en arrière-plan et restera cachée dans la zone de notification de Windows."

  ; Demande à l'utilisateur s'il veut démarrer l'app au démarrage
  MessageBox MB_YESNO "Voulez-vous que BPM Finder to MIDI démarre automatiquement avec Windows ?" IDYES +2
  goto done

  ; Si Oui, ajouter au démarrage
  WriteRegStr HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "BPM Finder to MIDI" "$INSTDIR\BPMFinderToMIDI.exe"
done:
!macroend
