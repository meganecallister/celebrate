SELECT birthday, color, cake, icecream
FROM Info i 
JOIN Users u ON u.id = i.id
WHERE i.id = $1;