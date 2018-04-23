SELECT birthday, color, cake, icecream, candy, treat
FROM Info i 
JOIN Users u ON u.id = i.id
WHERE i.id = $1;