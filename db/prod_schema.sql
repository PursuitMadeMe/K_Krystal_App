CREATE TABLE krystals (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    healing TEXT NOT NULL,
    chakra TEXT NOT NULL,
    image TEXT,
    numerology INT NOT NULL,
    category TEXT,
    is_favorite BOOLEAN
);

 DROP TABLE IF EXISTS users;

--  CREATE TABLE users(
--     user_id TEXT PRIMARY KEY UNIQUE NOT NULL, 
--     email TEXT NOT NULL,
--     username TEXT NOT NULL,
--     firsname TEXT NOT NULL,
--     lastname TEXT NOT NULL
--  );   

DROP TABLE IF EXISTS healears;

 CREATE TABLE healears(
    id SERIAL PRIMARY KEY, 
    feelings TEXT NOT NULL
 );   

DROP TABLE IF EXISTS chakras;

 CREATE TABLE chakras(
    id SERIAL PRIMARY KEY, 
    type TEXT NOT NULL,
    attribute TEXT NOT NULL
 );  

-- DROP TABLE IF EXISTS users_healers;

-- CREATE TABLE users_healers (
--     user_id TEXT NOT NULL,
--     healer_id INTEGER NOT NULL,
--     created TIMESTAMP DEFAULT NOW()
-- );

-- DROP TABLE IF EXISTS users_chakras;

-- CREATE TABLE users_chakras (
--     user_id TEXT NOT NULL,
--     chakra_id INTEGER NOT NULL,
--     created TIMESTAMP DEFAULT NOW()
-- );

