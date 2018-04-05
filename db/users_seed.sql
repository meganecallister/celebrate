DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    display_name TEXT,
    auth_id TEXT,
    img TEXT
);

INSERT INTO Users ( display_name, auth_id, img )
VALUES ('Meg Call', '12345', 'http...meg'),
('John Rose', '23456', 'http...john'),
('Jacob Jolly', '34567', 'http...jacob');
