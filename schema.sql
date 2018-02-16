DROP DATABASE IF EXISTS catfight;

CREATE DATABASE catfight;

USE catfight;

CREATE TABLE videos (
  id int NOT NULL AUTO_INCREMENT,
  max_votes integer,
  url varchar(255) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
