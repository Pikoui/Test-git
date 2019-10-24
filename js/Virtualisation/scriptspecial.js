#! /bin/bash

# Je vais dans mon Bureau
cd /home/apprenant/Bureau
#Je crée mon dossier Vagrant
mkdir Vagrant
#Je vais dans mon dossier
cd Vagrant
#Je crée mon fichier Vagrant file
touch Vagrantfile
#Je vais dans mon Vagrant file
Vagrantfile
#Je décommande configvmbox
#Je change l'addresse IP
#utiliser "écho" pour écrire le Vagrantfile
echo "Bonjour" > Vagrantfile 
echo "Au revoir" >> Vagrantfile
echo "Adieu" >> Vagrantfile
#Definir l'IP via une variable
read IP #reçoit l'IP
echo "$IP">> fichier #Envoie l'IP au fichier
