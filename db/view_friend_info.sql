-- SELECT img, display_name, u.id
-- FROM Users u
-- JOIN Friends f ON f.friend_id = u.id
-- WHERE f.user_id = $1 AND f.friend_id = $2;

SELECT birthday, color, cake, icecream, i.id
FROM Info i
JOIN Friends f ON f.friend_id = i.id
WHERE f.user_id = $1 AND f.friend_id = $2;