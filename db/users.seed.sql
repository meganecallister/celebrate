CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    display_name TEXT,
    auth_id TEXT,
    img TEXT,
    birthday TEXT,
    color TEXT,
    cake TEXT,
    iceCream TEXT,
    candy TEXT,
    drink TEXT,
    restaurant TEXT,
    mail BOOLEAN,
    surprises BOOLEAN
);

INSERT INTO Users ( display_name, auth_id, img, birthday, color, cake, iceCream, candy, drink, restaurant, mail, surprises )
VALUES ('Meg Call', '12345', 'http...', '12/12/12', 'yellow', 'cinnamon', 'mint', 'snickers', 'Dr. Pepper', 'Zupas', true, true);