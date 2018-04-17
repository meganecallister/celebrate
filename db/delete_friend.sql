DELETE FROM Friends
WHERE user_id = $1 AND friend_id = $2;

DELETE FROM Friends
WHERE user_id = $2 AND friend_id = $1;

SELECT u.img, u.display_name, u.id
FROM Users u
JOIN Friends f ON f.friend_id = u.id
WHERE f.user_id = $1;