INSERT INTO Info
(id, birthday, color, cake, icecream, candy, treat)
VALUES ($1, '', '', '', '', '', '')
RETURNING *;;