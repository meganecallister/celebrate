UPDATE Info 
SET birthday = $1, color = $2, cake = $3, icecream = $4
FROM Users
WHERE Users.id = $6
AND Users.id = Info.id
RETURNING *;

SELECT birthday, color, cake, icecream
FROM Info i 
JOIN Users u ON u.id = i.id
WHERE i.id = $5;