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

--DROP TABLE Bewertung;
--DROP TABLE Benutzer;
--DROP TABLE Filter;
--DROP TABLE Ladestation;
--DROP TABLE Werkstatt;
--DROP TABLE Elektroauto;
--DROP TABLE Hersteller;


---------------------------------------------------------------------
-- CREATE TABLES
---------------------------------------------------------------------

CREATE TABLE Hersteller (
  HId int AUTO_INCREMENT,
  Name varchar(255) NOT NULL,

  CONSTRAINT pk_hersteller PRIMARY KEY (HId)
);

CREATE TABLE Elektroauto (
  EId int NOT NULL AUTO_INCREMENT,
  Hersteller_HId int NOT NULL,
  Modellname varchar(255),
  Typ varchar(45),
  PS int,
  Kaufpreis double,
  Leasingpreis double,
  Hoechstgeschwindigkeit int,
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

  CONSTRAINT pk_elektroauto PRIMARY KEY (Eid),
  CONSTRAINT fk_elektroauto_hersteller FOREIGN KEY (Hersteller_HId) REFERENCES Hersteller(HId)
);

CREATE TABLE Werkstatt (
  WId int NOT NULL AUTO_INCREMENT,
  Hersteller_HId int NOT NULL,
  Name varchar(255),
  Laengengrad double,
  Breitengrad double,

  CONSTRAINT pk_werkstatt PRIMARY KEY (WId),
  CONSTRAINT fk_werkstatt_hersteller FOREIGN KEY (Hersteller_HId) REFERENCES Hersteller(HId)
);

CREATE TABLE Ladestation (
  LId int NOT NULL AUTO_INCREMENT,
  Hersteller_HId int NOT NULL,
  Laengengrad double,
  Breitengrad double,
  Steckertyp varchar(255),

  CONSTRAINT pk_ladestation PRIMARY KEY (LId),
  CONSTRAINT fk_ladestation_hersteller FOREIGN KEY (Hersteller_HId) REFERENCES Hersteller(HId)
);

CREATE TABLE Filter (
  FId int NOT NULL AUTO_INCREMENT,
  Sichtbar tinyint,
  Name varchar(255),
  Typ int,
  Daten text,
  Gewichtung int,

  CONSTRAINT pk_filter PRIMARY KEY (FId)
);

CREATE TABLE Benutzer (
  BId int NOT NULL AUTO_INCREMENT,
  Benutzername varchar(50) NOT NULL,
  Email varchar(255) NOT NULL,
  Passwort varchar(64) NOT NULL,

  CONSTRAINT pk_benutzer PRIMARY KEY (BId)
);

CREATE TABLE Bewertung (
  BewId int NOT NULL AUTO_INCREMENT,
  Elektroauto_EId int NOT NULL,
  Benutzer_BId int NOT NULL,

  CONSTRAINT pk_bewertung PRIMARY KEY (BewId),
  CONSTRAINT fk_bewertung_benutzer FOREIGN KEY (Benutzer_BId) REFERENCES Benutzer(BId),
  CONSTRAINT fk_bewertung_elektroauto FOREIGN KEY (Elektroauto_EId) REFERENCES Elektroauto(EId)
);
