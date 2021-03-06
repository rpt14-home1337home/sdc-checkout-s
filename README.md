# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
  1. [API Use](#api)
## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

## API Use

GET path '/checkout'

  - Fetches all checkout dates

POST path '/checkout/book/:id'

  - Posts one record, must pass an object with two date values and an id as properties
    - {
      id: 1,
      checkin: 2019-08-14T05:00:00.000Z,
      checkout: 2019-08-14T05:00:00.000Z
      }

PUT path '/checkout/:id'

  - Alters one record, must pass an on object like the one in the POST path along with an id
      - {
      checkin: 2019-08-14T05:00:00.000Z,
      checkout: 2019-08-14T05:00:00.000Z,
      id: 1
      }

DELETE path '/checkout/:id'

  - Deletes one record, must pass an id

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Connecting to Database

  - Ensure Postgres is running and has an open port of 5432
  - npm server/databases/db_pg/controllers/init.js

### Seeding Database

  - npm server/databases/dataGenerator.js
  - Go to postgres command line
    - airbnb=# \COPY checkout(propid, checkin, checkout)
      FROM 'FULL_PATH_TO_SEEDDATA.csv' DELIMITER ',' CSV HEADER;