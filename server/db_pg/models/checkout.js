module.exports = () => {
  return (
    `CREATE TABLE IF NOT EXISTS checkout (
      id              SERIAL PRIMARY KEY,
      prop_id       INTEGER,
      checkin       DATE NOT NULL,
      checkout        DATE NOT NULL
    );`
  );
};