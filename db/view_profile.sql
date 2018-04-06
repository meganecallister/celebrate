SELECT birthday, color, cake, iceCream
FROM Info i 
JOIN Users u ON u.id = i.id
WHERE i.id = $1;