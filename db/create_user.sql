INSERT INTO Users
(img, display_name, auth_id)
VALUES ( $1, $2, $3 )
RETURNING *;