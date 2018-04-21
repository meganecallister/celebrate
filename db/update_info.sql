UPDATE Info 
SET birthday = $1, color = $2, cake = $3, icecream = $4
FROM Users
WHERE Users.id = $5
AND Users.id = Info.id
RETURNING *;
