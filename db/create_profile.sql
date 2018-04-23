INSERT INTO Info ( birthday, color, cake, icecream, candy, treat )
VALUES ( $1, $2, $3, $4, $5, $6 )
WHERE id = $7
RETURNING *;