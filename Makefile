
all: README.md

README.md:
	echo "# Projet de jeu de devinette" > README.md
	echo "Date d'exécution : $(shell date)" >> README.md
	echo "Nombre de lignes de code dans guessinggame.sh : $(shell wc -l < guessinggame.sh)" >> README.md


run:
	bash guessinggame.sh
