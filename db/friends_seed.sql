DROP TABLE IF EXISTS Friends;

CREATE TABLE Friends (
    id SERIAL PRIMARY KEY,
    auth_id TEXT,
    friend_auth_id TEXT
);

INSERT INTO Friends ( auth_id, friend_auth_id )
VALUES ('12345', '23456'),
('23456', '12345'),
('google-oauth2|107541882131869904021', '12345'),
('12345', 'google-oauth2|107541882131869904021');