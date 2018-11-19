use EcarDB;

create table Hersteller(
HId int,
Name varchar(255));

create table Elektroauto(
Eid int not null primary key,
Hersteller_HId int not null,
Modellname varchar(255),
Typ varchar(45),
PS int,
Kaufpreis double,
Leasingpreis double,
Hoechstgeschwindigkeit double,
Batteriekapazitaet double,
Verbrauch double,
Bild varchar(500),
Sitze int,
Farbe varchar(45),
Lenkhilfe tinyint,
Klimaanlage tinyint,
Parkhilfe tinyint,
Tempomat tinyint,
Reifendrucksensor tinyint,
Autoparkfunktion tinyint,
Sitzheizung tinyint,
ABS tinyint,
Fensterheber tinyint,
Spurhalter tinyint,
Bluetooth tinyint,
Bordcomputer tinyint,
Navi tinyint,
Sitzmaterial varchar(255),
Garniturmaterial varchar(255),
Beifahrerairbag tinyint,
Rekuperation varchar(50),
foreign key(Hersteller_HId) references Hersteller(HId));

create table Werkstatt(
WId int not null primary key,
Hersteller_HId int not null,
Name varchar(255),
Laengengrad int,
Breitengrad int,
foreign key(Hersteller_HId) references Hersteller(HId));

create table Ladestation(
LId int not null primary key,
Hersteller_HId int not null,
Laengengrad int,
Breitengrad int,
Steckertyp varchar(255),
foreign key(Hersteller_HId) references Hersteller(HId));

create table Filter(
FId int not null primary key,
Sichtbar tinyint,
Name varchar(255),
Typ int,
Daten text,
Gewichtung int);

create table Benutzer(
BId int not null primary key,
Benutzername varchar(45),
Email varchar(45),
Passwort varchar(45));

create table Bewertung(
BewId int not null primary key,
Elektroauto_EId int not null,
Benutzer_BId int not null,
foreign key(Benutzer_BId) references Benutzer(BId),
foreign key(Elektroauto_EId) references Elektroauto(EId));
