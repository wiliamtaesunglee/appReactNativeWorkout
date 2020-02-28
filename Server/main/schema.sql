 CREATE TABLE users(
	uid SERIAL PRIMARY KEY,
	username VARCHAR(255) UNIQUE,
	email VARCHAR(255),
	email_verified BOOLEAN,
	data_created DATE,
	last_login DATE
);

CREATE TABLE modules(
	mid SERIAL PRIMARY KEY,
	title VARCHAR(255),
	description VARCHAR(255),
	image VARCHAR(255)
);

CREATE TABLE contents(
	cid SERIAL PRIMARY KEY,
	modules_id INT REFERENCES modules(mid),
	title VARCHAR(255),
	desciption VARCHAR(255),
	image VARCHAR(255),
	video VARCHAR(255)
);

CREATE TABLE workouts(
	wid SERIAL PRIMARY KEY,
	content_id INT REFERENCES contents(cid),
	title VARCHAR(255),
	desciption VARCHAR(255),
	workout json NOT NULL
);
