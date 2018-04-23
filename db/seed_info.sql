DROP TABLE IF EXISTS Info;

CREATE TABLE Info (
    id SERIAL PRIMARY KEY,
    birthday TEXT,
    color TEXT,
    cake TEXT,
    icecream TEXT,
    candy TEXT,
    treat TEXT
);

INSERT INTO Info ( birthday, color, cake, icecream, candy, treat )
VALUES ( 'fluff birthday', 'fluff color', 'fluff cake', 'fluff icecream', 'fluff candy', 'fluff treat'),
( 'sniffs birthday', 'sniffs color', 'sniffs cake', 'sniffs icecream', 'sniffs candy', 'sniffs treat' ),
( 'nappy birthday', 'nappy color', 'nappy cake', 'nappy icecream', 'nappy candy', 'nappy treat'),
( '1999-02-22', 'Blue', 'Chocolate', 'Vanilla' ),
( 'Meg birthday', 'Meg color', 'Meg cake', 'Meg icecream' );