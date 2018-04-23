UPDATE Info 
SET birthday = $1, color = $2, cake = $3, icecream = $4, candy = $5, treat = $6
FROM Users
WHERE Users.id = $7
AND Users.id = Info.id
RETURNING *;
