SELECT birthday, color, cake, icecream
FROM Info i
JOIN Friends f ON f.friend_id = i.id
WHERE f.user_id = $1 AND f.friend_id = $2;