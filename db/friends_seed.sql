DROP TABLE IF EXISTS Friends;

CREATE TABLE Friends (
    id SERIAL PRIMARY KEY,
    user_id INT,
    friend_id INT
);

INSERT INTO Friends ( user_id, friend_id )
VALUES (4, 2),
(4, 3),
(2, 4),
(3, 4),
(4, 5),
(5, 4);