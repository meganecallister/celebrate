DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    display_name TEXT,
    auth_id TEXT,
    img TEXT
);

INSERT INTO Users ( display_name, auth_id, img )
VALUES ('Fluffy Poof', '12345', 'https://www.flyingduchess.com/wp-content/uploads/2013/09/535804-1680x1050-e1380228899264.jpg'),
('Sir Sniffsalot', '23456', 'http://www.pethealthnetwork.com/sites/default/files/content/images/bunny-care-101-fb-119905630.jpg'),
('Nappy McGee', '34567', 'https://positively.com/files/bunny-on-side.jpg'),
('Megan Callister', 'google-oauth2|107541882131869904021', 'https://lh5.googleusercontent.com/-uR5_sf21SiU/AAAAAAAAAAI/AAAAAAAAAFo/6GKRQ-YOWGQ/photo.jpg'),
('Meg H', 'google-oauth2|103396375337188860605', 'https://lh5.googleusercontent.com/-Wo77KM2y98M/AAAAAAAAAAI/AAAAAAAAABM/q7bZ1zOnhSA/photo.jpg');
