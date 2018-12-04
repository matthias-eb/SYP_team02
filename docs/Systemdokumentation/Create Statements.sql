---------------------------------------------------------------------
-- CREATE DATABASE
---------------------------------------------------------------------

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


---------------------------------------------------------------------
-- DROP TABLES
---------------------------------------------------------------------

--DROP TABLE Filter;
--DROP TABLE Bewertungen;
--DROP TABLE Benutzer;
--DROP TABLE Ladestationen;
--DROP TABLE Werkstaetten;
--DROP TABLE Elektroautos;
--DROP TABLE Hersteller;


---------------------------------------------------------------------
-- CREATE TABLES
---------------------------------------------------------------------

CREATE OR REPLACE TABLE Hersteller (
  HId int AUTO_INCREMENT,
  Name varchar(255) NOT NULL,

  CONSTRAINT pk_hersteller PRIMARY KEY (HId)
);

CREATE OR REPLACE TABLE Elektroautos (
  EId int NOT NULL AUTO_INCREMENT,
  Hersteller_HId int NOT NULL DEFAULT 0,
  Modellname varchar(255),
  Typ varchar(45),
  Stecker varchar(45),
  Bild varchar(500) DEFAULT 'https://generationstrom.files.wordpress.com/2016/07/logo_allgemein_gruen.png?w=1400',
  Herstellerjahr int,
  Leistung int,
  Sitze int,
  Leergewicht int,
  Gesamtgewicht int,
  Reichweite int,
  MaxDrehmoment int,
  Hoechstgeschwindigkeit int,
  Laderaum int,
  Kaufpreis double,
  Leasingpreis double,
  Beschleunigung double,
  Batteriekapazitaet double,
  Verbrauch double,
  Batterieart varchar(255),
  Sitzmaterial varchar(255),
  Farbe varchar(45),
  Verkleidungsmaterial varchar(255),
  Rekuperation tinyint,
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
  Beifahrerairbag tinyint,

  CONSTRAINT pk_elektroautos PRIMARY KEY (Eid),
  CONSTRAINT fk_elektroautos_hersteller FOREIGN KEY (Hersteller_HId) REFERENCES Hersteller(HId)
);

CREATE OR REPLACE TABLE Werkstaetten (
  WId int NOT NULL AUTO_INCREMENT,
  Hersteller_HId int NOT NULL,
  Name varchar(255),
  Laengengrad double,
  Breitengrad double,

  CONSTRAINT pk_werkstaetten PRIMARY KEY (WId),
  CONSTRAINT fk_werkstaetten_hersteller FOREIGN KEY (Hersteller_HId) REFERENCES Hersteller(HId)
);

CREATE OR REPLACE TABLE Ladestationen (
  LId int NOT NULL AUTO_INCREMENT,
  Betreiber varchar(255),
  Netzwerk varchar(255),
  Bezeichnung varchar(500),
  Postleitzahl int,
  Stadt varchar(255),
  Strasse varchar(500),
  Stecker varchar(45),

  CONSTRAINT pk_ladestationen PRIMARY KEY (LId)
);

CREATE OR REPLACE TABLE Filter (
  FId int NOT NULL AUTO_INCREMENT,
  Sichtbar tinyint,
  Name varchar(255),
  Typ int,
  Daten text,
  Gewichtung int,

  CONSTRAINT pk_filter PRIMARY KEY (FId)
);

CREATE OR REPLACE TABLE Benutzer (
  BId int NOT NULL AUTO_INCREMENT,
  Benutzername varchar(50) NOT NULL,
  Email varchar(255) NOT NULL,
  Passwort varchar(64) NOT NULL,

  CONSTRAINT pk_benutzer PRIMARY KEY (BId)
);

CREATE OR REPLACE TABLE Bewertungen (
  BewId int NOT NULL AUTO_INCREMENT,
  Elektroautos_EId int NOT NULL,
  Benutzer_BId int NOT NULL,
  Bewertung int,

  CONSTRAINT pk_bewertungen PRIMARY KEY (BewId),
  CONSTRAINT fk_bewertungen_benutzer FOREIGN KEY (Benutzer_BId) REFERENCES Benutzer(BId),
  CONSTRAINT fk_bewertungen_elektroautos FOREIGN KEY (Elektroautos_EId) REFERENCES Elektroautos(EId)
);
