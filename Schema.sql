CREATE SCHEMA CODDB;

USE CODDB;

CREATE TABLE players (
	id INT AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);