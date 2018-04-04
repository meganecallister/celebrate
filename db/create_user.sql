INSERT INTO Users
(image, displayName, id)
VALUES ( $1, $2, $3 )
RETURNING *;