module.exports = () => {
  return (
    `CREATE TABLE IF NOT EXISTS checkout (
      id              SERIAL PRIMARY KEY,
      checkin       VARCHAR(255) NOT NULL,
      checkout        VARCHAR(255)
    );`
  );
};