CREATE TABLE brandinfo (
  id SERIAL PRIMARY KEY,
  brand_name VARCHAR(100),
  cruelty_free BOOLEAN,
  vegan BOOLEAN,
  parent_Company VARCHAR(100)
);

CREATE TABLE alternative (
  id SERIAL PRIMARY KEY,
  brand_id INTEGER,
  alternative_id INTEGER
);

-- COPY alternative FROM '/Users/marciapersaud/hackreactor/hr-rfe2-mvp/database/data/alternative.csv' DELIMITER ',' CSV HEADER;
