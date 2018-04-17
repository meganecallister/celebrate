SELECT u.img, u.display_name, u.id
FROM Users u
JOIN Friends f ON f.friend_id = u.id
WHERE f.user_id = $1;