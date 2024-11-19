#!/bin/bash

function guessing_game {

  local file_count=$(ls -1 | wc -l)
  local guess=-1

  echo "Devinez le nombre de fichiers dans le répertoire actuel :"

  while [[ $guess -ne $file_count ]]; do

    read guess
    if [[ $guess -lt $file_count ]]; then
      echo "C'est trop bas. Essayez encore."
    elif [[ $guess -gt $file_count ]]; then
      echo "C'est trop haut. Essayez encore."
    else
      echo "Bravo! Vous avez trouvé le nombre correct de fichiers."
    fi
  done
}

guessing_game
