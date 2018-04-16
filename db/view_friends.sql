SELECT img, display_name
FROM Users u 
JOIN Friends f ON u.auth_id = f.auth_id
WHERE f.auth_id = $1;