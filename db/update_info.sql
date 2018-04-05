INSERT INTO Info
(birthday, color, cake, iceCream)
VALUES ( $1, $2, $3, $4 )
RETURNING *;