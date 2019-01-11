#!/bin/bash
#ToDo: Erstellte Dateien wieder löschen (create_statements.sh, Setuplog.txt)
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
if [ $? -ne 0 ]; then
	printf "## Changed: ##\n" | sudo tee -a /etc/httpd/conf/httpd.conf >/dev/null
fi
cat /etc/httpd/conf/httpd.conf | grep -w "#LoadModule unique_id_module" >/dev/null
if [ $? -ne 0 ]; then
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
awk 'NR < 35 { next } { print }' $0/docs/Systemdokumentation/Create\ Statements.sql >> create_statements.sql 
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
if [ $? -ne 0 ]; then
	sudo sed -i '/LoadModule\ npm_event_module\ modules\/mod_npm_event.so/d' /etc/httpd/conf/httpd.conf
	printf "#LoadModule npm_event_module modules/mod_npm_event.so" | sudo tee -a /etc/httpd/conf/httpd.conf >/dev/null
fi
cat /etc/httpd/conf/httpd.conf | grep "#LoadModule unique_id_module modules"
if [ $? -ne 0 ]; then
	sudo sed -i '/LoadModule\ unique_id_module\ modules\/mod_unique_id.so/d' /etc/httpd/conf/httpd.conf
	printf "#LoadModule unique_id_module modules/mod_unique_id.so\n" | sudo tee -a /etc/httpd/conf/httpd.conf >/dev/null
fi
cat /etc/httpd/conf/httpd.conf | grep "LoadModule mpm_prefork_module"
if [ $? -ne 0 ]; then
	printf "LoadModule mpm_prefork_module modules/mod_mpm_prefork.so\n"  | sudo tee -a /etc/httpd/conf/httpd.conf >/dev/null
fi
cat /etc/httpd/conf/httpd.conf | grep "LoadModule php7_module"
if [ $? -ne 0 ]; then
	printf "LoadModule php7_module modules/libphp7.so\n" | sudo tee -a /etc/httpd/conf/httpd.conf >/dev/null
	printf "AddHandler php7-script php\nInclude conf/extra/php7_module.conf\n" | sudo tee -a /etc/httpd/conf/httpd.conf >/dev/null
	printf "Include conf/extra/php7_module.conf\n" | sudo tee -a /etc/httpd/conf/httpd.conf >/dev/null
fi


printf "phpMyAdmin wird installiert..."
if [ $paketmanager == "pacman" ]
then
	sudo pacman -S phpmyadmin php-mcrypt
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
if[ $? -ne 0 ]
then
	printf "; [Changed]\n" | sudo tee -a /etc/php/php.ini >/dev/null
	sudo sed -i '/extension=bz2.so/d' /etc/php/php.ini
	printf "extension=bz2.so\n" | sudo tee -a /etc/php/php.ini >/dev/null
	sudo sed -i '/extension=mcrypt.so/d' /etc/php/php.ini
	printf "extension=mcrypt.so\n" | sudo tee -a /etc/php/php.ini >/dev/null
	sudo sed -i '/extension=mysqli.so/d' /etc/php/php.ini
	printf "extension=mysqli.so\n" | sudo tee -a /etc/php/php.ini >/dev/null
	printf "; \n" | sudo tee -a /etc/php/php.ini >/dev/null
fi
touch /etc/httpd/conf/extra/phpmyadmin.conf > /dev/null
if [ $? -ne 0 ]
then
	sudo mkdir -p /etc/httpd/conf/extra/
	sudo printf "Alias /phpmyadmin \"/usr/share/webapps/phpMyAdmin\"\n<Directory \"/usr/share/webapps/phpMyAdmin\">\n\tDirectoryIndex index.php\n\tAllowOverride All\n\tOptions FollowSymlinks\n\tRequire all granted\n</Directory>" > /etc/httpd/conf/extra/phpmyadmin.conf
fi

cat /etc/httpd/conf/httpd.conf | grep "Include conf/extra/phpmyadmin.conf" >/dev/null
if [ $? -ne 0 ]; then
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
	printf "Bitte installieren sie den Node Package Manager (NPM) über diesen Link: \nhttps://nodejs.org/en/download/\n"
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

hostaddress="localhost"
if [ $createconfig -eq 0 ]
then
	printf "Geben sie die adresse ihrer Datenbank an (Voreingestellt: $hostaddress).\n"
	read hostaddress
	ping -c1 $hostaddress > Setuplog.txt
	cat Setuplog.txt | grep -w "1 received,"
	if [ $? -ne 0 ] 
	then
		printf "Diese Adresse scheint nicht erreichbar zu sein. Bitte probieren sie es erneut, sobald sie die Verbindung hergestellt haben.\n"
		exit 2
	fi
	rm Setuplog.txt

	port=3000
	printf "Port Nummer (Voreingestellt: $port): \n"
	read port
	printf "Portnummer ist $port\n"

	printf "Erstelle config.json...\n"
	if [ $delconfig -eq 1 ]
	then
		printf "Erstelle eine Backup von config.json in config.json.bak..\n"
		cat config.json >> config.json.bak
		printf "Lösche config.json\n"
		rm config.json
	fi
	printf "json" > config.json
	printf "{" >> config.json
	printf "\t\"db\": {" >> config.json
	printf "\t\t\"host\": \"$hostaddress\"," >> config.json
	printf "\t\t\"database\": \"$dbname\"," >> config.json
	printf "\t\t\"user\": \"root\"," >> config.json
	printf "\t\t\"password\": \"$password\"" >> config.json
	printf "\t}," >> config.json
	printf "\t\"server\": {" >> config.json
	printf "\t\t\"port\": \"$port\"" >> config.json
	printf "\t}" >> config.json
	printf "}" >> config.json
fi












answer="X"
while [[ $answer != "Y" ]] && [[ $answer != "N" ]]
do
	printf "Installieren des Servers ist fertig. Wollen sie den Client auch hier installieren? (J,N)\n"
	read answer
	printf "\n"
	if [ $answer == "J" ]
	then
		printf "Fahre fort...\n"
	elif [ $answer == "N" ]; then
		printf "Installation erfolgreich.\n"
		exit 0
	else
		printf "Falsche Eingabe. Bitte versuchen sie es erneut..\n"
	fi
done



cd ../client
if [ $? -ne 0 ] 
then
	printf "Dateibaum scheint nicht intakt zu sein oder Arbeitsverzeichnis stimmt nicht...\n"
	exit 1
fi

printf "Installiere Client..\n"
