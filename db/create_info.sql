INSERT INTO Info
(id, birthday, color, cake, icecream)
VALUES ($1, '', '', '', '')
RETURNING *;