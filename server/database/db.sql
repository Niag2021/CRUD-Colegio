-- Create table Alumnos
CREATE TABLE alumnos (
	id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    nombre1 VARCHAR(20) NOT NULL, 
    apellido1 VARCHAR(20) NOT NULL, 
    apellido2 VARCHAR(20) NOT NULL, 
    edad INTEGER,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


-- Create table profesores
CREATE TABLE profesores (
	id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    nombre1 VARCHAR(20) NOT NULL, 
    apellido1 VARCHAR(20) NOT NULL, 
    apellido2 VARCHAR(20) NOT NULL, 
    direccion VARCHAR(20) NOT NULL, 
    ciudad VARCHAR(20) NOT NULL, 
    edad INTEGER,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create table cursos
CREATE TABLE cursos (
	id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    nombre VARCHAR(20) NOT NULL, 
    sala INTEGER(10) NOT NULL, 
    jornada VARCHAR(20) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create table talleres
CREATE TABLE talleres (
	id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    nombre VARCHAR(20) NOT NULL, 
    sala INTEGER NOT NULL, 
    jornada VARCHAR(20) NOT NULL,
    cantidadAlumnos INTEGER NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create table asignaturas
CREATE TABLE asignaturas (
	id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    nombre VARCHAR(20) NOT NULL, 
    profesor VARCHAR(20) NOT NULL,
    cantidadAlumnos INTEGER NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
