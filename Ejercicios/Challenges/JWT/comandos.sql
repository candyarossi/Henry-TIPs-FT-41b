CREATE DATABASE jwtchallenge;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (email, password) VALUES ('ejemplo@gmail.com', '1234');

SELECT * FROM users;