INSERT INTO Hersteller (Name) VALUES ('Daimler'),('Mercedes'),('Volkswagen'),('Tesla'),('Ford');

INSERT INTO Werkstatt(Hersteller_HId, Name, Laengengrad, Breitengrad) 
VALUES 
	((SELECT HId FROM Hersteller WHERE Name='Daimler'), 'Daimler-KFZWerkstatt Neumarkt', 50.936300, 6.947830),
	((SELECT HId FROM Hersteller WHERE Name='Daimler'), 'Daimler-KFZWerkstatt Kyotostraße', 50.9482477, 6.9449996),
	((SELECT HId FROM Hersteller WHERE Name='Mercedes'), 'Mercedes-KFZWerkstatt Hansaring', 50.9484576, 6.9491848),
	((SELECT HId FROM Hersteller WHERE Name='Mercedes'), 'Mercedes-KFZWerkstatt Cäcilienstraße', 50.9368813, 6.9514635),
	((SELECT HId FROM Hersteller WHERE Name='Volkswagen'), 'VW-KFZWerkstatt auf der Fähre', 50.9389838, 6.9547548),
	((SELECT HId FROM Hersteller WHERE Name='Tesla'), 'Tesla-KFZWerkstatt Remscheid', 51.1690608, 7.1848244),
	((SELECT HId FROM Hersteller WHERE Name='Ford'), 'Ford-KFZWerkstatt Brühl', 50.8192399, 6.9236327);
