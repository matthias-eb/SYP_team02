INSERT INTO Hersteller (Name) VALUES ('Mercedes'),('Volkswagen'),('Tesla'),('Ford'),('Audi');

INSERT INTO Werkstaetten(Hersteller_HId, Name, Laengengrad, Breitengrad) 
VALUES 
	((SELECT HId FROM Hersteller WHERE Name='Mercedes'), 'Daimler-KFZWerkstatt Neumarkt', 50.936300, 6.947830),
	((SELECT HId FROM Hersteller WHERE Name='Mercedes'), 'Daimler-KFZWerkstatt Kyotostraße', 50.9482477, 6.9449996),
	((SELECT HId FROM Hersteller WHERE Name='Mercedes'), 'Mercedes-KFZWerkstatt Hansaring', 50.9484576, 6.9491848),
	((SELECT HId FROM Hersteller WHERE Name='Mercedes'), 'Mercedes-KFZWerkstatt Cäcilienstraße', 50.9368813, 6.9514635),
	((SELECT HId FROM Hersteller WHERE Name='Volkswagen'), 'VW-KFZWerkstatt auf der Fähre', 50.9389838, 6.9547548),
	((SELECT HId FROM Hersteller WHERE Name='Tesla'), 'Tesla-KFZWerkstatt Remscheid', 51.1690608, 7.1848244),
	((SELECT HId FROM Hersteller WHERE Name='Ford'), 'Ford-KFZWerkstatt Brühl', 50.8192399, 6.9236327);

INSERT INTO 
	Elektroautos(Hersteller_HId, 
		Modellname,
		Typ,
		Stecker,
		Bild,
		Erscheinungsjahr,
		Leistung,
		Sitze,
		Leergewicht,
		Gesamtgewicht,
		Reichweite,
		MaxDrehmoment,
		Hoechstgeschwindigkeit,
		Laderaum,
		Kaufpreis,
		Leasingpreis,
		Beschleunigung,
		Batteriekapazitaet,
		Verbrauch,
		Batterieart,
		Sitzmaterial,
		Farbe,
		Verkleidungsmaterial,
		Rekuperation,
		Klimaanlage,
		Parkhilfe,
		Tempomat,
		Reifendrucksensor,
		Autoparkfunktion,
		Sitzheizung,
		ABS,
		Fensterheber,
		Spurhalter,
		Bluetooth,
		Bordcomputer,
		Navi,
		Beifahrerairbag)

	VALUES
		((SELECT HId FROM Hersteller WHERE Name='Mercedes'),
			'Mercedes EQC', -- Modellname
			'Limousine', 	-- Typ
			'CCS Typ2',		-- Stecker
			'https://mercedes-benz-eqc.de/assets/images/04_Exterieur/large/gallery_01.jpg',	-- Bild
			2018,			-- Erscheinungsjahr
			300,			-- Leistung
			5,				-- Sitze
			2425,			-- Leergewicht
			2930,			-- Gesamtgewicht
			450,			-- Reichweite
			765,			-- Maximales Drehmoment
			180,			-- Hoechstgeschwindigkeit
			500,			-- Laderaum
			70000,			-- Kaufpreis
			0,				-- Leasingpreis
			5.1,			-- Beschleunigung
			80,				-- Batteriekapazität
			22.2,			-- Verbrauch
			'Lithium-Ionen',	-- Batterieart
			'Leder, Polyester',	-- Sitzmaterial
			'Silber',		-- Farbe
			'Plastik',		-- Verkleidungsmaterial
			1,				-- Rekuperation
			1,				-- Klimaanlage
			1,				-- Parkhilfe
			1,				-- Tempomat
			1,				-- Reifendrucksensor
			0,				-- Autoparkfunktion
			1,				-- Sitzheizung
			1,				-- ABS
			1,				-- Fensterheber
			0,				-- Spurhalter
			1,				-- Bluetooth
			1,				-- Bordcomputer
			1,				-- Navi
			1),				-- Beifahrerairbag
		((SELECT HId FROM Hersteller WHERE Name='Volkswagen'),
			'e-Golf',
			'Golf',
			'CCS Typ2',
			'https://www.volkswagen.de/content/dam/vw-ngw/international-mastersite/showrooms/e-golf-2016/content/highlights/efficiency/GL4811_e-inmotion.jpg/_jcr_content/renditions/original.transform/med/img.jpg',
			2016,
			85,
			5,
			1518,
			1518,
			140,
			270,
			140,
			343,
			34900,
			450,
			10.4,
			24.2,
			12.7,
			'Lithium-Ionen',
			'Leder',
			'Silber',
			'Plastik',
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			1),
			((SELECT HId FROM Hersteller WHERE Name='Tesla'),
			'Tesla Model S P90D', -- Modellname
			'Limousine', 	-- Typ
			'CCS Typ2, Supercharger, Schuko',		-- Stecker
			'https://www.tesla.com/tesla_theme/assets/img/models/v1.0/section-hero-background.jpg?20180111',
			2013,			-- Erscheinungsjahr
			345,			-- Leistung
			7,				-- Sitze
			2425,			-- Leergewicht
			2930,			-- Gesamtgewicht
			509,			-- Reichweite
			967,			-- Maximales Drehmoment
			250,			-- Hoechstgeschwindigkeit
			500,			-- Laderaum
			69999,			-- Kaufpreis
			799,			-- Leasingpreis
			3.3,			-- Beschleunigung
			90,				-- Batteriekapazität
			22.3,			-- Verbrauch
			'Lithium-Ionen',	-- Batterieart
			'Leder, Schaumstoff',	-- Sitzmaterial
			'Silber',		-- Farbe
			'Plastik, Eiche',		-- Verkleidungsmaterial
			1,				-- Rekuperation
			1,				-- Klimaanlage
			1,				-- Parkhilfe
			1,				-- Tempomat
			1,				-- Reifendrucksensor
			1,				-- Autoparkfunktion
			1,				-- Sitzheizung
			1,				-- ABS
			1,				-- Fensterheber
			1,				-- Spurhalter
			1,				-- Bluetooth
			1,				-- Bordcomputer
			1,				-- Navi
			1),				-- Beifahrerairbag
			
			((SELECT HId FROM Hersteller WHERE Name='Ford'),
			'Ford Focus Electric', -- Modellname
			'Kombi', 	-- Typ
			'CCS Typ2, Schuko',		-- Stecker
			'https://media.ed.edmunds-media.com/ford/focus/2017/oem/2017_ford_focus_4dr-hatchback_electric_fq_oem_1_815.jpg',
			2018,			-- Erscheinungsjahr
			107,			-- Leistung
			5,				-- Sitze
			0,			-- Leergewicht
			0,			-- Gesamtgewicht
			185,			-- Reichweite
			0,			-- Maximales Drehmoment
			135,			-- Hoechstgeschwindigkeit
			402,			-- Laderaum
			29995,			-- Kaufpreis
			210.27,			-- Leasingpreis
			0,			-- Beschleunigung
			0,				-- Batteriekapazität
			33.5,			-- Verbrauch
			'Lithium-Ionen (Wassergekühlt)',	-- Batterieart
			'Leder, Schaumstoff',	-- Sitzmaterial
			'Rot',		-- Farbe
			'Plastik',		-- Verkleidungsmaterial
			1,				-- Rekuperation
			1,				-- Klimaanlage
			1,				-- Parkhilfe
			1,				-- Tempomat
			0,				-- Reifendrucksensor
			0,				-- Autoparkfunktion
			1,				-- Sitzheizung
			1,				-- ABS
			1,				-- Fensterheber
			0,				-- Spurhalter
			1,				-- Bluetooth
			0,				-- Bordcomputer
			1,				-- Navi
			1),				-- Beifahrerairbag

			((SELECT HId FROM Hersteller WHERE Name='Audi'),
			'Audi R8 e-tron', -- Modellname
			'Sportwagen', 	-- Typ
			'CCS Typ2',		-- Stecker
			'http://www.energietarife.com/elektroauto-datenbank/galerie/Audi/R8-e-tron/pr_r8_R8e150003.jpg',
			2016,			-- Erscheinungsjahr
			340,			-- Leistung
			2,				-- Sitze
			1615,			-- Leergewicht
			2930,			-- Gesamtgewicht
			450,			-- Reichweite
			967,			-- Maximales Drehmoment
			250,			-- Hoechstgeschwindigkeit
			600,			-- Laderaum
			0,			-- Kaufpreis
			0,			-- Leasingpreis
			3.9,			-- Beschleunigung
			90,				-- Batteriekapazität
			22.3,			-- Verbrauch
			'Lithium-Ionen',	-- Batterieart
			'Leder, Schaumstoff',	-- Sitzmaterial
			'Silber',		-- Farbe
			'Plastik, Eiche',		-- Verkleidungsmaterial
			1,				-- Rekuperation
			1,				-- Klimaanlage
			0,				-- Parkhilfe
			1,				-- Tempomat
			0,				-- Reifendrucksensor
			0,				-- Autoparkfunktion
			1,				-- Sitzheizung
			1,				-- ABS
			1,				-- Fensterheber
			1,				-- Spurhalter
			1,				-- Bluetooth
			1,				-- Bordcomputer
			1,				-- Navi
			1);				-- Beifahrerairbag


INSERT INTO Benutzer(Benutzername, Email, Passwort)
VALUES
	('Georg', 'georg@hotmail.de', 'D6E075AD15048C12F2974D121A25C3D9FC5898072C7A4236FE5245D342A41C7D'),
	('Gettopunk96', 'messdiener22@gmail.com', '3F16A9535055AC7E33E184FAC4B148B90C6B0233F24F5E44DAB094E474087409'),
	('XxGruftixX', 'grufti@grufti.com', 'A66FB722C08488CD9B54349529CAB266FEF869181713C29D52EF495D6D992C57');

INSERT INTO Filter(FId, Name, Typ, Daten, Gewichtung, Sichtbar)
VALUES

(1, 'ABS', 2, '', 20, 1),
(2, 'Autoparkfunktion', 2, '', 20, 1),
(3, 'Batterieart', 1, '{ "sql": "SELECT DISTINCT Batterieart AS ''id'', Batterieart AS ''value'' FROM Elektroautos ORDER BY value DESC"}', 20, 1),
(4, 'Batteriekapazitaet', 3, '{ "sql": "SELECT DISTINCT Batteriekapazitaet AS ''value'' FROM Elektroautos ORDER BY value DESC"}', 20, 1),
(5, 'Beifahrerairbag', 2, '', 20, 1),
(6, 'Beschleunigung', 3, '{ "sql": "SELECT DISTINCT Beschleunigung AS ''value'' FROM Elektroautos ORDER BY value DESC"}', 20, 1),
(7, 'Bluetooth', 2, '', 20, 1),
(8, 'Bordcomputer', 2, '', 20, 1),
(9,'Erscheinungsjahr', 1, '{ "sql": "SELECT DISTINCT Erscheinungsjahr AS ''id'', Erscheinungsjahr AS ''value'' FROM Elektroautos ORDER BY value DESC"}', 20, 1),
(10, 'Farbe', 1, '{ "sql": "SELECT DISTINCT Farbe AS ''id'', Farbe AS ''value'' FROM Elektroautos ORDER BY value DESC"}', 20, 1),
(11, 'Fensterheber', 2, '', 20, 1),
(12, 'Gesamtgewicht', 2, '', 20, 1),
(13,'Hersteller', 1, '{ "sql": "SELECT DISTINCT HId AS ''id'', Name AS ''value'' FROM Hersteller ORDER BY value ASC" }', 10, 1),
(14, 'Hoechstgeschwindigkeit', 3, '{ "sql": "SELECT DISTINCT Hoechstgeschwindigkeit AS ''value'' FROM Elektroautos ORDER BY value DESC"}', 20, 1),
(15,'Preis', 3, '{ "sql": "SELECT DISTINCT Kaufpreis AS ''id'', Kaufpreis AS ''value'' FROM Elektroautos ORDER BY value DESC"}', 20, 1),
(16, 'Klimaanlage', 2, '', 20, 1),
(17, 'Laderaum', 2, '', 20, 1),
(18, 'Leasingpreis', 3, '{ "sql": "SELECT DISTINCT Leasingpreis AS ''value'' FROM Elektroautos ORDER BY value DESC"}', 20, 1),
(19, 'Leergewicht', 2, '', 20, 1),
(20, 'Leistung', 3, '{ "sql": "SELECT DISTINCT Leistung AS ''value'' FROM Elektroautos ORDER BY value DESC"}', 20, 1),
(21, 'MaxDrehmoment', 2, '', 20, 1),
(22, 'Modellname', 1, '{ "sql": "SELECT DISTINCT Modellname AS ''id'', Modellname AS ''value'' FROM Elektroautos ORDER BY value DESC"}', 20, 1),
(23, 'Navi', 2, '', 20, 1),
(24, 'Parkhilfe', 2, '', 20, 1),
(25, 'Reichweite', 3, '{ "sql": "SELECT DISTINCT Reichweite AS ''value'' FROM Elektroautos ORDER BY value DESC"}', 20, 1),
(26, 'Reifendrucksensor', 2, '', 20, 1),
(27, 'Rekuperation', 2, '', 20, 1),
(28,'Sitze', 1, '{ "sql": "SELECT DISTINCT Sitze AS ''id'', Sitze AS ''value'' FROM Elektroautos ORDER BY value ASC" }', 10, 1),
(29, 'Sitzheizung', 2, '', 20, 1),
(30,'Sitzmaterial', 1, '{ "sql": "SELECT DISTINCT Sitzmaterial AS ''id'', Sitzmaterial AS ''value'' FROM Elektroautos ORDER BY value ASC" }', 10, 1),
(31, 'Spurhalter', 2, '', 20, 1),
(32,'Stecker', 1, '{ "sql": "SELECT DISTINCT Stecker AS ''id'', Stecker AS ''value'' FROM Elektroautos ORDER BY value ASC" }', 10, 1),
(33, 'Tempomat', 2, '', 20, 1),
(34,'Typ', 1, '{ "sql": "SELECT DISTINCT Typ AS ''id'', Typ AS ''value'' FROM Elektroautos ORDER BY value ASC" }', 10, 1),
(35, 'Verbrauch', 2, '', 20, 1),
(36,'Verkleidungsmaterial', 1, '{ "sql": "SELECT DISTINCT Verkleidungsmaterial AS ''id'', Verkleidungsmaterial AS ''value'' FROM Elektroautos ORDER BY value ASC" }', 10, 1);

INSERT INTO Bewertungen(Benutzer_BId, Elektroautos_EId, Bewertung)
VALUES
	((SELECT BId FROM Benutzer WHERE Benutzername='Gettopunk96'), (SELECT EId FROM Elektroautos WHERE Modellname='Mercedes EQC'), 8),
	((SELECT BId FROM Benutzer WHERE Benutzername='Georg'), (SELECT EId FROM Elektroautos WHERE Modellname='Mercedes EQC'), 6),
	((SELECT BId FROM Benutzer WHERE Benutzername='Gettopunk96'), (SELECT EId FROM Elektroautos WHERE Modellname='e-Golf'), 7),
	((SELECT BId FROM Benutzer WHERE Benutzername='Georg'), (SELECT EId FROM Elektroautos WHERE ModellName='e-Golf'), 10);

INSERT INTO Ladestationen(Netzwerk, Bezeichnung, Betreiber, Postleitzahl, Stadt, Strasse, Stecker) VALUES
('RheinEnergie AG', 'TankE Köln', 'TankE - RheinEnergie Kundenparkplatz', 50823, 'Köln', 'Parkgürtel 24', 'CCS Typ2'),
('The New Motion Deutschland GmbH', 'New Motion', 'Autohaus Jörg Lessing', 12683, 'Berlin', '', 'CCS Typ2'),
('The New Motion Deutschland GmbH', 'New Motion', 'City-Autohaus Steffen', 17309, 'Pasewalk', '', 'CCS Typ2'),
('The New Motion Deutschland GmbH', 'New Motion', 'DENSO Europe', 0, 'Weesp', '', 'CCS Typ2'),
('The New Motion Deutschland GmbH', 'New Motion', 'Drehstromkiste (DSK) ViCon', 30659, 'Hannover', '', 'CCS Typ2'),
('The New Motion Deutschland GmbH', 'New Motion', 'Kenniscentrum Handel', 0, 'Ede', '', 'CCS Typ2'),
('The New Motion Deutschland GmbH', 'New Motion', 'Pitch & Putt Golf Koudum', 0, 'Koudum', '', 'CCS Typ2'),
('The New Motion Deutschland GmbH', 'New Motion', 'St. Antonius Alnata', 0, 'Nieuwegein', '', 'CCS Typ2'),
('The New Motion Deutschland GmbH', 'New Motion', 'Stadion Galgenwaard', 0, 'Utrecht', '', 'CCS Typ2'),
('The New Motion Deutschland GmbH', 'New Motion', 'Wok ''N'' Golf Sensazia', 0, 'Enschede', 'Colosseum 80', 'CCS Typ2'),
('EnBW Energie Baden-Württemberg AG', 'EnBW', '9 Rue des Balayeurs', 67000, 'Strasbourg', '9 Rue des Balayeurs ', 'CCS Typ2'),
('SMATRICS', 'keins', 'ADEG', 2700, 'Wiener Neustadt', 'Brunner Straße 116', 'CCS Typ2'),
('SMATRICS', 'keins', 'ADEG Wiener Neustadt', 2700, 'Wiener Neustadt', 'Brunner Straße 116', 'CCS Typ2'),
('keins', 'M4 Eastbound.', 'Applegreen Enfield Service Station', 0, '', '', 'CCS Typ2'),
('keins', 'M4 Westbound', 'Applegreen Enfield Service Station', 0, '', '', 'CCS Typ2'),
('Volkswagen AG', 'Volkswagen (Charge&Fuel)', 'Autohaus Breitschwert Nürnberger Str.', 91522, 'Ansbach', 'Nürnberger Straße 74', 'CCS Typ2'),
('Volkswagen AG', 'Volkswagen (Charge&Fuel)', 'Autohaus Breitschwert - ', 91522, 'Ansbach', 'Bandelstraße 21', 'CCS Typ2'),
('Stadtwerke Gießen AG', 'keins', 'Besucherparkplatz Rathaus Pohlheim', 35415, 'Pohlheim', 'Ludwigstraße 31', 'CCS Typ2'),
('EWE VERTRIEB GmbH', 'keins', 'Ecenter Schomacker', 27628, 'Hagen im Bremischen', '', 'CCS Typ2'),
('EWE VERTRIEB GmbH', 'keins', 'EDEKA Böttjer', 27446, 'Selsingen', '', 'CCS Typ2'),
('EWE VERTRIEB GmbH', 'keins', 'EDEKA Haselünne', 49740, 'Haselünne', '', 'CCS Typ2'),
('EWE VERTRIEB GmbH', 'keins', 'Edeka Tiemann', 26349, 'Jaderberg', '', 'CCS Typ2'),
('EWE VERTRIEB GmbH', 'keins', 'Edo-Wiemken-Straße', 26316, 'Varel', 'Edo-Wiemken-Straße 61', 'CCS Typ2'),
('keins', '74722 Buchen ', 'Eisenbahnstraße 4A', 0, '74722', 'Buchen', 'CCS Typ2'),
('SMATRICS', 'keins', 'Ekazent Schwechat', 2320, 'Schwechat', 'Wiener Straße 12-16', 'CCS Typ2'),
('SMATRICS', 'keins', 'FMZ Fürstenfeld ', 8280, 'Fürstenfeld', 'Körmenderstraße 19', 'CCS Typ2'),
('Technische Werke Schussental GmbH & Co. KG', 'ladenetz', 'Gablerstraße', 88250, 'Weingarten', '', 'CCS Typ2'),
('EWE VERTRIEB GmbH', 'keins', 'Gesundheitsamt Landkreis Ammerland', 26655, 'Westerstede', '', 'CCS Typ2'),
('Galactico', 'keins', 'Hala Targowa', 0, 'Wrocław', 'Bajana 1', 'CCS Typ2'),
('SMATRICS', 'keins', 'Merkur Feldkirchen', 9560, 'Feldkirchen in Kärnten', 'Ossiacher Bundesstraße 8', 'CCS Typ2'),
('SMATRICS', 'keins', 'MPREIS Reutte ', 6600, 'Gemeinde Reutte', 'Innsbrucker Straße 22', 'CCS Typ2'),
('ON Power', 'keins', 'ON Power Schnelllader Sævarhöfði Reykjavík', 0, 'Reykjavík', '', 'CCS Typ2'),
('Stadtwerke Konstanz GmbH', 'ladenetz', 'Parkhaus Altstadt Laube', 78462, 'Konstanz', 'Untere Laube 24', 'CCS Typ2'),
('Stromnetz Hamburg GmbH', 'keins', 'TOTAL Tankstelle - Mundsburger Damm', 22087, 'Hamburg', 'Mundsburger Damm 47', 'CCS Typ2'),
('e-mobil Saar', 'keins', 'Völklingen', 66333, 'Völklingen', 'Hohenzollernstraße 4', 'CCS Typ2'),
('Volkswagen AG', 'Volkswagen (Charge&Fuel)', 'Volkswagen Autohaus Gohm+Graf Hardenberg', 78467, 'Konstanz', 'Max-Stromeyer-Straße 116', 'CCS Typ2'),
('Volkswagen AG', 'Volkswagen (Charge&Fuel)', 'Volkswagen Automobile Berlin', 12099, 'Berlin', 'Oberlandstraße 88', 'CCS Typ2'),
('Digital Energy Solutions GmbH & Co KG', 'keins', 'W.L.Gore&Associates GmbH', 85640, 'Putzbrunn', '', 'CCS Typ2'),
('Golde Hotel- und Gaststättenbetriebs GmbH', 'keins', '"Altes Kasino" Hotel am See', 16816, 'Neuruppin ', 'An der Seepromenade 11-12', 'CCS Typ2'),
('Ladestation Smart Essent_New_Energy', 'RWE innogy', '''s-Hertogenbosch - Willemsplein', 0, '''s-Hertogenbosch', 'Willemsplein 2-4', 'CCS Typ2'),
('Ladebox Smart Essent_New_Energy', 'RWE innogy', '''s-Hertogenbosch - Willemsplein', 0, '''s-Hertogenbosch', 'Willemsplein 2-4', 'CCS Typ2'),
('be.ENERGISED Development Tests', 'keins', '001 - Phoenix Contact Leipzig - Teststation', 4356, 'Leipzig', '', 'CCS Typ2'),
('EnBW Energie Baden-Württemberg AG', 'EnBW', '1 Place du Maréchal de Lattre de Tassigny', 67000, 'Strasbourg', '1 Place du Maréchal de Lattre de Tassigny ', 'CCS Typ2'),
('keins', 'Istenhegyi út 55', '1125 Budapest', 0, '1125 ', 'Budapest', 'CCS Typ2'),
('EnBW', 'route de Bischwiller', '146', 0, '67300', 'Schiltigheim', 'CCS Typ2'),
('Swarco Traffic Systems GmbH', 'keins', '16_100007', 70191, 'Stuttgart', '', 'CCS Typ2'),
('eeMobility GmbH', 'keins', '17433602', 65185, 'Wiesbaden', '', 'CCS Typ2'),
('EnBW Energie Baden-Württemberg AG', 'EnBW', '2 Place de la République', 67000, 'Strasbourg', '2 Place de la République ', 'CCS Typ2'),
('EnBW Energie Baden-Württemberg AG', 'EnBW', '2 Rue Gerlinde', 67000, 'Strasbourg', '2 Rue Gerlinde ', 'CCS Typ2'),
('Nomadpower', 'keins', '24 Autohof Homberg', 34593, 'Knüllwald', '', 'CCS Typ2'),
('Unterfränkische Überlandzentrale eG', 'ladenetz', '24-Shell Autohof Gramschatzer Wald', 97262, 'Hausen', 'Am Wiesenweg 10', 'CCS Typ2'),
('24-TOTAL Autohof Neuberg', 'keins', '24-TOTAL Autohof Neuberg', 63526, 'Erlensee', '', 'CCS Typ2'),
('Sonstige', 'keins', '3Bar''''s Portogruaro', 30026, 'Portogruaro', 'Via Venezia 15/B', 'CCS Typ2'),
('Stadtwerke Hilden', 'keins', '3M Deutschland - Werk Hilden', 40721, 'Hilden', 'Horster Allee 20', 'CCS Typ2'),
('NEW AG', 'RWE innogy', '41366 Schwalmtal', 41366, 'Schwalmtal', 'Gartenstraße 10', 'CCS Typ2'),
('Enovos Luxembourg', 'RWE innogy', '6 Place du marché - Grevenmacher', 6755, 'Grevenmacher', '6 Place du marché ', 'CCS Typ2'),
('A1 Telekom Austria AG', 'keins', '6100', 1030, 'Wien', '', 'CCS Typ2'),
('A1 Telekom Austria AG', 'keins', 'A1 Maria Taferl', 3672, 'Maria Taferl', 'Maria Taferl 35', 'CCS Typ2'),
('A1 Telekom Austria AG', 'keins', 'A1 Exerzierplatzstraße Graz', 8051, 'Graz', 'Exerzierplatzstraße 34', 'CCS Typ2'),
('A1 Telekom Austria AG', 'keins', 'A1 Graz Keplerstraße', 8020, 'Graz', 'Keplerstraße 57', 'CCS Typ2'),
('A1 Telekom Austria AG', 'keins', 'A1 Riesenradplatz Wien', 1020, 'Wien', 'Straße des Ersten Mai 90', 'CCS Typ2'),
('A1 Telekom Austria AG', 'keins', 'A1 Telefonzelle Klagenfurt Neuer Platz', 9020, 'Innere Stadt', 'Neuer Platz 5', 'CCS Typ2'),
('A1 Telekom Austria AG', 'keins', 'A1 Telefonzelle Alpbach', 6236, 'Alpbach', 'Alpbach 278', 'CCS Typ2'),
('A1 Telekom Austria AG', 'keins', 'A1 Telefonzelle Bludenz', 6700, 'Bludenz', 'Bahnhofplatz 6', 'CCS Typ2'),
('A1 Telekom Austria AG', 'keins', 'A1 Telefonzelle Bregenz', 6900, 'Bregenz', 'Seestraße 5', 'CCS Typ2'),
('A1 Telekom Austria AG', 'keins', 'A1 Telefonzelle Donauturm in Wien', 1220, 'Wien', 'Mispelweg 6', 'CCS Typ2'),
('A1 Telekom Austria AG', 'keins', 'A1 Telefonzelle in Melk', 3390, 'Melk', 'Hauptstraße 12', 'CCS Typ2'),
('A1 Telekom Austria AG', 'keins', 'A1 Telefonzelle Klagenfurt', 9020, 'Klagenfurt am Wörthersee', 'Villacher Straße 241', 'CCS Typ2'),
('A1 Telekom Austria AG', 'keins', 'A1 Telefonzelle Korneuburg', 2100, 'Korneuburg', 'Hauptplatz 29-30', 'CCS Typ2'),
('A1 Telekom Austria AG', 'keins', 'A1 Telefonzelle Lasallestraße Wien', 1020, 'Wien', 'Lassallestraße 9', 'CCS Typ2'),
('A1 Telekom Austria AG', 'keins', 'A1 Telefonzelle Pressbaum', 3021, 'Pressbaum', 'Hauptstraße 58', 'CCS Typ2'),
('A1 Telekom Austria AG', 'keins', 'A1 Telefonzelle Salzburg', 5020, 'Salzburg', 'Franz-Josef-Straße 34', 'CCS Typ2'),
('A1 Telekom Austria AG', 'keins', 'A1 Telefonzelle Salzburg Alpenstraße', 5020, 'Salzburg', 'Alpenstraße 5', 'CCS Typ2'),
('A1 Telekom Austria AG', 'keins', 'A1 Telefonzelle Waidhofen an der Ybbs', 3340, 'Waidhofen an der Ybbs', 'Unterer Stadtplatz 2', 'CCS Typ2'),
('A1 Telekom Austria AG', 'keins', 'A1 Telefonzelle Windischgarsten', 4580, 'Windischgarsten', 'Gleinkerseestraße 13', 'CCS Typ2'),
('EVN AG', 'TANKE Österreich', 'A2 - Shell Autobahnrastation Zöbern', 0, 'Aspang', '', 'CCS Typ2'),
('Nissan Händler', 'keins', 'A6 CORUÑA', 28023, 'MADRID', 'CTRA. LA CORUÑA', 'CCS Typ2'),
('Nissan Händler', 'keins', 'A6 IBERAUTO', 28222, 'MAJADAHONDA', 'C/ DE LA CIRUELA', 'CCS Typ2'),
('smartlab Innovationsgesellschaft mbH', 'ladenetz', 'A8 Raststätte Pforzheim Nord', 75223, 'Niefern-Öschelbronn', 'BAB8', 'CCS Typ2'),
('ENI Suisse', 'keins', 'A9 - Aire de Lavaux', 1091, 'Lutry', 'Autoroute A9 - Relais de Lavaux ', 'CCS Typ2'),
('ČEZ – ENERGIEGRUPPE', 'keins', 'AAA Auto', 0, 'Brno', 'Cernovická 1183/38', 'CCS Typ2'),
('Innogy SE', 'RWE innogy', 'Aachen: Strangenhäuschen 10', 52070, 'Aachen', 'Strangenhäuschen 10', 'CCS Typ2'),
('EnBW Energie Baden-Württemberg AG', 'EnBW', 'Aachenerstraße 50', 70376, 'Stuttgart', 'Aachenerstraße 50', 'CCS Typ2'),
('AAE Naturstrom Vertrieb GmBH', 'keins', 'AAE Ladestation Kötschach', 9640, 'Kötschach', 'Kötschach 270', 'CCS Typ2'),
('Allego GmbH', 'keins', 'Aalsmeer - Copernicusstraat', 0, 'Aalsmeer', '', 'CCS Typ2'),
('Allego GmbH', 'keins', 'Aalsmeer - Copierstraat', 0, 'Aalsmeer', '', 'CCS Typ2'),
('Allego GmbH', 'keins', 'Aalsmeer - Fonteinkruidhof', 0, 'Aalsmeer', '', 'CCS Typ2'),
('Allego GmbH', 'keins', 'Aalsmeer - Korfstraat', 0, 'Aalsmeer', '', 'CCS Typ2'),
('Allego GmbH', 'keins', 'Aalsmeer - Linnaeuslaan', 0, 'Aalsmeer', '', 'CCS Typ2'),
('Allego GmbH', 'keins', 'Aalsmeer - Manillehof', 0, 'Aalsmeer', '', 'CCS Typ2'),
('Allego GmbH', 'keins', 'Aalsmeer - Mendelstraat', 0, 'Aalsmeer', '', 'CCS Typ2'),
('Allego GmbH', 'keins', 'Aalsmeer - Ophelialaan 97', 0, 'Aalsmeer', '', 'CCS Typ2'),
('Allego GmbH', 'keins', 'Aalsmeer - Stuurboordstraat', 0, 'Aalsmeer', '', 'CCS Typ2'),
('City of Amsterdam', 'RWE innogy', 'Aalsmeerplein - Amsterdam', 0, '', '', 'CCS Typ2'),
('Amsterdam', '1059 TS', '', 0, '', '', 'CCS Typ2'),
('Allego GmbH', 'keins', 'Aalst - Driehoekstraat ', 9320, 'Aalst', 'Driehoekstraat 3', 'CCS Typ2'),
('Tesla Motors', 'Supercharger', 'Äänekoski Supercharger', 44250, 'Lahti', 'Suonenjoentie 10', 'CCS Typ2'),
('Groupe E', 'MOVE', 'Aarau: Hinterdorfstr. 40', 5032, 'Aarau', 'Hinterdorfstr. 40', 'CCS Typ2'),
('EnergieDienst', 'keins', 'Aarberg TRITEC AG', 3270, 'Aarberg', 'Heckenweg 25', 'CCS Typ2'),
('ABB', 'keins', 'ABB Plant', 0, 'Aleksandrów ?ódzki', 'ul. Placydowska 27', 'CCS Typ2'),
('ABB', 'keins', 'ABB Research Centre', 0, 'Kraków', 'ul. Starowi?lna 13a', 'CCS Typ2');
