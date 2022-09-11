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
