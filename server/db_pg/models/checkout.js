module.exports = () => {
  return (
    `CREATE TABLE IF NOT EXISTS checkout (
      id              SERIAL PRIMARY KEY,
      propId       INTEGER,
      checkin       DATE NOT NULL,
      checkout        DATE NOT NULL
    );`
  );
};