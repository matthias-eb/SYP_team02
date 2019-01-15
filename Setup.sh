#!/bin/bash
#ToDo: Erstellte Dateien wieder löschen (create_statements.sh, Setuplog.txt)
clienterstellt=0

menueauswahl() {
	menueauswahl=0
	while [[ $menueauswahl -eq 0 ]]
	do
		printf "##### MENUE #####\n"
		printf "1) Server installieren\n"
		printf "2) Client installieren\n"
		printf "3) Setup beenden\n"
		if [ $menueauswahl -ne 1 ] && [ $menueauswahl -ne 2 ] && [ $menueauswahl -ne 3 ]
		then
			menueauswahl=0
		fi
		read menueauswahl	
	done
	return $menueauswahl
}

port=3000
hostaddress="http://localhost"

paketmanager="keiner"
printf "Willkommen zum Installationsskript.\n"
command -v pacman > /dev/null 2>&1
if [ $? -eq 0 ]
then
	printf "Paketmanager pacman gefunden..\n"
	paketmanager="pacman"
fi

command -v apt-get > /dev/null 2>&1
if [ $? -eq 0 ]
then
	printf "Paketmanager APT gefunden..\n"
	paketmanager="apt"
fi

if [ $paketmanager == "keiner" ]
then
	printf "Kein Paketmanager gefunden, Manuelle Installation erforderlich.\n"
fi

system="none"
command -v systemctl > /dev/null 2>&1 || { printf "Systemctl nicht installiert.. Teste service..\n"; }
if [ $? -eq 0 ]
then
	system="systemd"
	printf "Systemd erkannt..\n"
else
	command -v service > /dev/null 2>&1
	if [ $? -eq 0 ]
	then
		system="init"
		printf "Init erkannt...\n"
	else
		printf "System nicht erkannt. Manuelles starten der Services erforderlich. Zum abbrechen drücken sie (Strg+C)\n"
	fi
fi

while [ 1 -eq 1 ] # Endlosschleife
do
	menueauswahl
	if [ $? -eq 1 ]
	then
		printf "Installiere Apache..\n"
		if [ $paketmanager == "pacman" ]
		then
			sudo pacman -S apache
		elif [ $paketmanager == "apt" ]
		then
			sudo apt-get install apache
		else
			printf "Bitte installieren sie apache über diesen Link: https://httpd.apache.org/download.cgi\n"
			printf "Wenn sie fertig sind, drücken sie enter.."
			read
			printf "\n"
		fi

		cat /etc/httpd/conf/httpd.conf | grep "## Changed: ##" >/dev/null
		if [ $? -ne 0 ]
		then
			printf "## Changed: ##\n" | sudo tee -a /etc/httpd/conf/httpd.conf >/dev/null
		fi
		cat /etc/httpd/conf/httpd.conf | grep -w "#LoadModule unique_id_module" >/dev/null
		if [ $? -ne 0 ]
		then
			sudo sed -i '/LoadModule\ unique_id_module\ modules\/mod_unique_id.so/d' /etc/httpd/conf/httpd.conf
			printf "#LoadModule unique_id_module modules/mod_unique_id.so\n" | sudo tee -a /etc/httpd/conf/httpd.conf >/dev/null
		fi

		printf "System: $system\n"
		if [ $system == "systemd" ]
		then
			systemctl enable httpd
			systemctl restart httpd
		elif [ $system == "init" ]
		then
			service httpd start
		else
			printf "Starten sie den httpd Service jetzt.... (Enter wenn fertig)"
			read
		fi




		if [ $paketmanager == "pacman" ]
		then
			printf "Installiere mariadb..\n"
			sudo pacman -S mariadb
			if [ $? -ne 0 ]
			then
				printf "Ein Fehler ist aufgetreten, beende...\n"
				exit 1
			fi
		elif [ $paketmanager -eq "apt" ]
		then
			sudo apt-get install mariadb
			if [ $? -ne 0 ]
			then
				printf "Ein Fehler ist aufgetreten, beende...\n"
				exit 1
			fi
		else
			printf "Bitte laden sie MariaDB von folgender Adresse herunter:\nhttps://mariadb.org/download/\n"
		fi

		sudo mysql_install_db --user=mysql --basedir=/usr --datadir=/var/lib/mysql
		if [ $system == "systemd" ]
		then
			printf "Starte mysqld...\n"
			sudo systemctl start mysqld
			sudo systemctl enable mysqld
		elif [ $system == "init" ]
		then
			printf "Starte mysqld...\n"
			sudo service mysqld start
		else
			printf "Service mysqld jetzt starten..."
			read
			printf "\n"

		fi
		printf "Konfiguriere mariadb...\n"
		mysql_secure_installation

		stty -echo
		printf "Erstelle Datenbank mit Tabellen...\n"
		printf "Geben sie ihr root Passwort ein, das sie eben konfiguriert haben: "
		read password
		printf "\n"
		stty echo

		dbname="ECarDB"
		mysql --user=root --password=$password -e "create database $dbname;"
		printf "use $dbname;\n" > create_statements.sql
		cat ../../docs/Systemdokumentation/Create\ Statements.sql >> create_statements.sql 
		mysql --user=root --password=$password < create_statements.sql

		printf "Installiere php...\n"
		if [ $paketmanager == "pacman" ]
		then
			printf "Installiere mariadb..\n"
			sudo pacman -S php php-apache
			if [ $? -ne 0 ]
			then
				printf "Ein Fehler ist aufgetreten, beende...\n"
				exit 1
			fi
		elif [ $paketmanager -eq "apt" ]
		then
			sudo apt-get install php libapach2-mod-php php-mcrypt php-mysql
			if [ $? -ne 0 ]
			then
				printf "Ein Fehler ist aufgetreten, beende...\n"
				exit 1
			fi
		else
			printf "Bitte laden sie Php von folgender Adresse herunter:\nhttps://secure.php.net/downloads.php\n"
		fi

		printf "Konfiguriere Php..\n"
		cat /etc/httpd/conf/httpd.conf | grep "#LoadModule npm_event_module modules"
		if [ $? -ne 0 ]
		then
			sudo sed -i '/LoadModule\ npm_event_module\ modules\/mod_npm_event.so/d' /etc/httpd/conf/httpd.conf
			printf "#LoadModule npm_event_module modules/mod_npm_event.so\n" | sudo tee -a /etc/httpd/conf/httpd.conf >/dev/null
		fi
		cat /etc/httpd/conf/httpd.conf | grep "#LoadModule unique_id_module modules"
		if [ $? -ne 0 ]
		then
			sudo sed -i '/LoadModule\ unique_id_module\ modules\/mod_unique_id.so/d' /etc/httpd/conf/httpd.conf
			printf "#LoadModule unique_id_module modules/mod_unique_id.so\n" | sudo tee -a /etc/httpd/conf/httpd.conf >/dev/null
		fi
		cat /etc/httpd/conf/httpd.conf | grep "LoadModule mpm_prefork_module"
		if [ $? -ne 0 ]
		then
			printf "LoadModule mpm_prefork_module modules/mod_mpm_prefork.so\n"  | sudo tee -a /etc/httpd/conf/httpd.conf >/dev/null
		fi
		cat /etc/httpd/conf/httpd.conf | grep "LoadModule php7_module"
		if [ $? -ne 0 ]
		then
			printf "LoadModule php7_module modules/libphp7.so\n" | sudo tee -a /etc/httpd/conf/httpd.conf >/dev/null
			printf "AddHandler php7-script php\nInclude conf/extra/php7_module.conf\n" | sudo tee -a /etc/httpd/conf/httpd.conf >/dev/null
			printf "Include conf/extra/php7_module.conf\n" | sudo tee -a /etc/httpd/conf/httpd.conf >/dev/null
		fi


		printf "phpMyAdmin wird installiert..."
		if [ $paketmanager == "pacman" ]
		then
			sudo pacman -S phpmyadmin
		elif [ $paketmanager == "apt" ]
		then
			sudo apt-get install phpmyadmin
		else
			printf "Bitte installieren sie apache über diesen Link: https://httpd.apache.org/download.cgi\n"
			printf "Wenn sie fertig sind, drücken sie enter.."
			read
			printf "\n"
		fi

		printf "phpMyAdmin wird konfiguriert..\n"
		cat /etc/php/php.ini | grep "; [Changed]" >/dev/null
		if [ $? -ne 0 ]
		then
			printf "; [Changed]\n" | sudo tee -a /etc/php/php.ini >/dev/null
			sudo sed -i '/extension=bz2/d' /etc/php/php.ini
			printf "extension=bz2\n" | sudo tee -a /etc/php/php.ini >/dev/null
			sudo sed -i '/extension=mysqli/d' /etc/php/php.ini
			printf "extension=mysqli\n" | sudo tee -a /etc/php/php.ini >/dev/null
			printf "; \n" | sudo tee -a /etc/php/php.ini >/dev/null
		fi

		touch /etc/httpd/conf/extra/phpmyadmin.conf > /dev/null
		if [ $? -ne 0 ]
		then
			sudo mkdir -p /etc/httpd/conf/extra/
			sudo printf "Alias /phpmyadmin \"/usr/share/webapps/phpMyAdmin\"\n<Directory \"/usr/share/webapps/phpMyAdmin\">\n\tDirectoryIndex index.php\n\tAllowOverride All\n\tOptions FollowSymlinks\n\tRequire all granted\n</Directory>" > /etc/httpd/conf/extra/phpmyadmin.conf
		fi

		cat /etc/httpd/conf/httpd.conf | grep "Include conf/extra/phpmyadmin.conf" >/dev/null
		if [ $? -ne 0 ]
		then
			printf "Include conf/extra/phpmyadmin.conf\n" | sudo tee -a /etc/httpd/conf/httpd.conf >/dev/null
			printf "#########\n" | sudo tee -a /etc/httpd/conf/httpd.conf >/dev/null
		fi

		if [ $system == "systemd" ]
		then
			printf "Starte httpd neu...\n"
			sudo systemctl restart httpd
		elif [ $system == "init" ]
		then
			printf "Starte httpd neu...\n"
			sudo service httpd restart
		else
			printf "Service httpd jetzt neu starten..."
			read
			printf "\n"
		fi


		cd src/server
		if [ $? -ne 0 ] 
		then
			printf "Ordnerstruktur scheint nicht intakt zu sein oder Arbeitsverzeichnis ist nicht korrekt. Verlasse Setup...\n"
			exit 1
		fi

		printf "Installiere npm...\n"
		if [ $paketmanager == "pacman" ]
		then
			sudo pacman -S npm
		elif [ $paketmanager == "apt" ]
		then
			sudo apt-get install npm
		else
			printf "Bitte installieren sie den Node Package Manager (NPM) über diesen Link: \nhttps://nodejs.org/de/download/\n"
			printf "Wenn sie fertig sind, drücken sie enter.."
			read
			printf "\n"
		fi

		printf "Installiere Driving-E-Car Server...\n"
		npm install
		printf "Konfiguriere Driving-E-Car Server...\n"

		createconfig=-1
		delconfig=0
		touch config.json
		if [ $? -ne 0 ]
		then
			printf "Keine valide config Datei gefunden, erstelle...\n"
			createconfig=0	
		else
			while [ $createconfig -eq -1 ]
			do
				printf "Es scheint bereits eine config.json zu existieren. Wollen sie trotzdem eine neue erstellen? (J,N)\n"
				read answer
				if [ $answer == "J" ]
				then
					delconfig=1
					createconfig=0
				elif [ $answer == "N" ]; then
					createconfig=1
				else
					createconfig=-1
					printf "Falsche Eingabe. Bitte erneut versuchen..\n"
				fi
			done
		fi

		
		if [ $createconfig -eq 0 ]
		then
			printf "Geben sie die adresse ihrer Datenbank an (Voreingestellt: $hostaddress).\n"
			read eingabe
			if [ ! -z $eingabe ]
			then
				hostaddress=$eingabe
			fi
			ping -c1 $hostaddress > Setuplog.txt
			cat Setuplog.txt | grep -w "1 received,"
			if [ $? -ne 0 ] 
			then
				printf "Diese Adresse scheint nicht erreichbar zu sein. Bitte probieren sie es erneut, sobald sie die Verbindung hergestellt haben.\n"
				exit 2
			fi
			rm Setuplog.txt

			printf "Port Nummer (Voreingestellt: $port): \n"
			read eingabe
			if [ ! -z $eingabe ]
			then
				port=$eingabe
			fi
			printf "Portnummer ist $port\n"

			printf "Erstelle config.json...\n"
			if [ $delconfig -eq 1 ]
			then
				printf "Erstelle eine Backup von config.json in config.json.bak..\n"
				cat config.json >> config.json.bak
				printf "Lösche config.json\n"
				rm config.json
			fi
			printf "{\n" > config.json
			printf "\t\"db\": {\n" >> config.json
			printf "\t\t\"host\": \"$hostaddress\",\n" >> config.json
			printf "\t\t\"database\": \"$dbname\",\n" >> config.json
			printf "\t\t\"user\": \"root\",\n" >> config.json
			printf "\t\t\"password\": \"$password\"\n" >> config.json
			printf "\t},\n" >> config.json
			printf "\t\"server\": {\n" >> config.json
			printf "\t\t\"port\": \"$port\"\n" >> config.json
			printf "\t}\n" >> config.json
			printf "}\n" >> config.json
		fi

	elif [ $? -eq 2 ]
	then
		cd ../client
		if [ $? -ne 0 ] 
		then
			printf "Dateibaum scheint nicht intakt zu sein oder Arbeitsverzeichnis stimmt nicht...\n"
			exit 1
		fi

		printf "Installiere NodePackageManager..\n"
		if [ $paketmanager == "pacman" ]
		then
			sudo pacman -S npm
		elif [ $paketmanager == "apt" ]
		then
			sudo apt-get install npm
		else
			printf "Bitte installieren sie den Node Package Manager (NPM) über diesen Link: \nhttps://nodejs.org/de/download/\n"
			printf "Wenn sie fertig sind, drücken sie enter.."
			read
			printf "\n"
		fi

		printf "Installation des Clients beginnt..\n"
		npm install

		printf "Konfiguriere Client...\n"
		createconfig=-1
		delconfig=0
		touch config.json
		if [ $? -ne 0 ]
		then
			printf "Keine valide config Datei gefunden, erstelle...\n"
			createconfig=0	
		else
			while [ $createconfig -eq -1 ]
			do
				printf "Es scheint bereits eine config.json zu existieren. Wollen sie trotzdem eine neue erstellen? (J,N)\n"
				read answer
				if [ $answer == "J" ]
				then
					delconfig=1
					createconfig=0
				elif [ $answer == "N" ]; then
					createconfig=1
				else
					createconfig=-1
					printf "Falsche Eingabe. Bitte erneut versuchen..\n"
				fi
			done
		fi

		if [ $createconfig -eq 0 ]
		then
			printf "Geben sie die Adresse ihres Servers an (Voreingestellt: $hostaddress).\n"
			read eingabe
			if [ ! -z $eingabe ]
			then
				hostaddress=$eingabe
			fi
			ping -c1 $hostaddress > Setuplog.txt
			cat Setuplog.txt | grep -w "1 received,"
			if [ $? -ne 0 ] 
			then
				printf "Diese Adresse scheint nicht erreichbar zu sein. Bitte probieren sie es erneut, sobald sie die Verbindung hergestellt haben.\n"
				exit 2
			fi
			rm Setuplog.txt

			
			printf "Port Nummer (Voreingestellt: $port): \n"
			read eingabe
			if [ ! -z $eingabe ]
			then
				port=$eingabe
			fi
			printf "Portnummer ist $port\n"

			printf "Erstelle config.json...\n"
			if [ $delconfig -eq 1 ]
			then
				printf "Erstelle eine Backup von config.json in config.json.bak..\n"
				cat config.json >> config.json.bak
				printf "Lösche config.json\n"
				rm config.json
			fi
			printf "{\n" > config.json
			printf "\t\"ServerBaseUrl\": \"$hostaddress:$port\"\n" >> config.json
			printf "}\n" >> config.json
		fi

		eingabe="X"
		while [ $eingabe != "J" ] && [ $eingabe != "N" ]
		do
			printf "Wollen sie eine Android App erstellen? (J,N)\n"
			read eingabe
			if [ $eingabe != "J" ] && [ $eingabe != "N" ]
			then
				printf "Falsche eingabe\n"
			fi
		done
		if [ $eingabe == "J" ]
		then
			ionic cordova platform add android
			npm run build

			printf "APK wird erstellt..."
			ionic cordova build android --release
		fi

	else
		printf "Setup beendet.\n"
		exit 0
	fi
done
