CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    userName VARCHAR(100),
    firstName TEXT,
    lastName TEXT,
    authId TEXT,
    email VARCHAR(100),
    birthday TEXT,
    image TEXT,
    color TEXT,
    cake TEXT,
    iceCream TEXT,
    candy TEXT,
    drink TEXT,
    restaurant TEXT,
    mail BOOLEAN,
    surprises BOOLEAN
);

INSERT INTO Users ( userName, firstName, lastName, authId, email, birthday, image, color, cake, iceCream, candy, drink, restaurant, mail, surprises )
VALUES ('megcall', 'Megan', 'Call', '12345', 'ldsgirlo@hotmail.com', '12/12/12', 'http...', 'yellow', 'cinnamon', 'mint', 'snickers', 'Dr. Pepper', 'Zupas', true, true);