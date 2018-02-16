DROP DATABASE IF EXISTS catfight;

CREATE DATABASE catfight;

USE catfight;

CREATE TABLE videos (
  id varchar(255) NOT NULL,
  max_votes integer,
--  url varchar(255) NOT NULL,
  PRIMARY KEY (ID)
);

insert into videos
SET id="njSyHmcEdkw",
    max_votes=0;

insert into videos
SET id="WP4Uh66FA3A",
    max_votes=0;

insert into videos
SET id="-RUStXqbydY",
    max_votes=0;

insert into videos
SET id="ArFuTzQ5AzQ",
    max_votes=0;

insert into videos
SET id="1Kl4rNUTWCA",
    max_votes=0;




/*  Execute this file from the command line by typing:
 *    mysql -u root -p< schema.sql
 *  to create the database and the tables.*/
