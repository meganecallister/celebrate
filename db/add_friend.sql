INSERT INTO Friends
(user_id, friend_id)
VALUES ( $1, (SELECT id
                FROM Users u
                WHERE u.display_name = $2))
RETURNING *;

INSERT INTO Friends
(friend_id, user_id)
VALUES ( $1, (SELECT id
                FROM Users u
                WHERE u.display_name = $2))
RETURNING *;

SELECT u.img, u.display_name
FROM Users u
JOIN Friends f ON f.friend_id = u.id
WHERE f.user_id = $1;