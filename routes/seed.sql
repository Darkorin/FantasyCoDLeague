
DROP DATABASE IF EXISTS CODDB;
CREATE DATABASE CODDB;

USE CODDB;

CREATE TABLE players (
id INT NOT NULL AUTO_INCREMENT,
activisionID VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO players (activisionID)
VALUES ("Word#5968877");

INSERT INTO players (activisionID)
VALUES ("Appa#2546284");

INSERT INTO players (activisionID)
VALUES ("Aristo#3502113");

INSERT INTO players (activisionID)
VALUES ("Asylate#2110730");

INSERT INTO players (activisionID)
VALUES ("Athens#2718532");

INSERT INTO players (activisionID)
VALUES ("Colors#3684810");

INSERT INTO players (activisionID)
VALUES ("coolman#6872635");

INSERT INTO players (activisionID)
VALUES ("DirtyStyxx#2654357");

INSERT INTO players (activisionID)
VALUES ("Flick#1732420");

INSERT INTO players (activisionID)
VALUES ("Goku#8692749");

INSERT INTO players (activisionID)
VALUES ("Hschreddz401#3720690");

INSERT INTO players (activisionID)
VALUES ("huntfalcons#7806932");

INSERT INTO players (activisionID)
VALUES ("iZsimply-#5025015");

INSERT INTO players (activisionID)
VALUES ("Jamflowman03#8529024");

INSERT INTO players (activisionID)
VALUES ("Jyrell#3712230");

INSERT INTO players (activisionID)
VALUES ("LordChuy0_0#6456354");

INSERT INTO players (activisionID)
VALUES ("Masta Splinter#7138518");

INSERT INTO players (activisionID)
VALUES ("Mil#7326489");

INSERT INTO players (activisionID)
VALUES ("Nick#8253622");

INSERT INTO players (activisionID)
VALUES ("Not_Sickness#9491992");

INSERT INTO players (activisionID)
VALUES ("OVOFinesse6ix#6657015");

INSERT INTO players (activisionID)
VALUES ("Oxyclean#6587377");

INSERT INTO players (activisionID)
VALUES ("Pickle Rick#8063705");

INSERT INTO players (activisionID)
VALUES ("Qztp#9238347");

INSERT INTO players (activisionID)
VALUES ("Student Athlete#9814800");

INSERT INTO players (activisionID)
VALUES ("Tank#1793909");

INSERT INTO players (activisionID)
VALUES ("TheMilkMan#7521651");

INSERT INTO players (activisionID)
VALUES ("Tune#3334777");

INSERT INTO players (activisionID)
VALUES ("Vision#2601760");

INSERT INTO players (activisionID)
VALUES ("Woolley Mammoth#7681032"
);



SELECT * FROM players;
