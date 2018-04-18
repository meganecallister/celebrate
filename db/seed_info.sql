DROP TABLE IF EXISTS Info;

CREATE TABLE Info (
    id SERIAL PRIMARY KEY,
    birthday TEXT,
    color TEXT,
    cake TEXT,
    icecream TEXT
);

INSERT INTO Info ( birthday, color, cake, icecream )
VALUES ( 'fluff birthday', 'fluff color', 'fluff cake', 'fluff icecream' ),
( 'sniffs birthday', 'sniffs color', 'sniffs cake', 'sniffs icecream' ),
( 'nappy birthday', 'nappy color', 'nappy cake', 'nappy icecream' ),
( '1999-02-22', 'Blue', 'Chocolate', 'Vanilla' ),
( 'Meg birthday', 'Meg color', 'Meg cake', 'Meg icecream' );