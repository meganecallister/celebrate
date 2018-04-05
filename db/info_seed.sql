DROP TABLE IF EXISTS Info;

CREATE TABLE Info (
    id SERIAL PRIMARY KEY,
    birthday TEXT,
    color TEXT,
    cake TEXT,
    iceCream TEXT
);

INSERT INTO Info ( birthday, color, cake, iceCream )
VALUES ( '12/12/82', 'Yellow', 'Cinnamon Cake', 'Mint Chocolate Chip' ),
('4/24/81', 'Sea Foam', 'Carrot Cake', 'French Vanilla'),
( '5/15/85', 'Blue', 'Chocolate', 'Vanilla');