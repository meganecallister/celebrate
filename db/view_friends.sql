SELECT u.img, u.display_name
FROM Users u
JOIN Friends f ON f.friend_id = u.id
WHERE f.user_id = $1;