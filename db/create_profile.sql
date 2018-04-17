INSERT INTO Info ( birthday, color, cake, icecream )
VALUES ( $1, $2, $3, $4)
WHERE id = $5
RETURNING *;