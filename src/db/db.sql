CREATE TABLE task (
    id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) DEFAULT NULL,
    description VARCHAR(150) DEFAULT NULL,
    status INT(1) DEFAULT NULL ,
    PRIMARY KEY (`id`)
    );

INSERT INTO task VALUES
    (1, 'Crear APP', 'Crear una APP para le IDL3', 1),
    (2, 'Crear una base de datos', 'Estructura y modelado', 0),
    (3, 'Alimentar al gato', 'Comprarle comida de calidad y darle agua también', 1);
