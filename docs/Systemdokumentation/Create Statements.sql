---- create new database
--CREATE DATABASE EcarDB;
--
---- create new user
--CREATE USER 'ecar'@'localhost' IDENTIFIED BY '12345';
--
---- grant new user all premissions for the new database
--GRANT ALL PRIVILEGES ON EcarDB . * TO 'ecar'@'localhost';
--FLUSH PRIVILEGES;

--USE EcarDB;

CREATE TABLE Hersteller (
  HId int,
  Name varchar(255)
);

CREATE TABLE Elektroauto (
  Eid int NOT NULL PRIMARY KEY,
  Hersteller_HId int NOT NULL,
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

  FOREIGN KEY(Hersteller_HId) REFERENCES Hersteller(HId)
);

CREATE TABLE Werkstatt (
  WId int NOT NULL PRIMARY KEY,
  Hersteller_HId int NOT NULL,
  Name varchar(255),
  Laengengrad int,
  Breitengrad int,

  FOREIGN KEY(Hersteller_HId) REFERENCES Hersteller(HId)
);

CREATE TABLE Ladestation (
  LId int NOT NULL PRIMARY KEY,
  Hersteller_HId int NOT NULL,
  Laengengrad int,
  Breitengrad int,
  Steckertyp varchar(255),

  FOREIGN KEY(Hersteller_HId) REFERENCES Hersteller(HId)
);

CREATE TABLE Filter (
  FId int NOT NULL PRIMARY KEY,
  Sichtbar tinyint,
  Name varchar(255),
  Typ int,
  Daten text,
  Gewichtung int
);

create table Benutzer (
  BId int NOT NULL PRIMARY KEY,
  Benutzername varchar(45),
  Email varchar(45),
  Passwort varchar(45)
);

create table Bewertung (
  BewId int NOT NULL PRIMARY KEY,
  Elektroauto_EId int NOT NULL,
  Benutzer_BId int NOT NULL,

  FOREIGN KEY(Benutzer_BId) REFERENCES Benutzer(BId),
  FOREIGN KEY(Elektroauto_EId) REFERENCES Elektroauto(EId)
);
