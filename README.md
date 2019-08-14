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

POST path '/'

  - Posts one record, must pass an object with two date values as properties
    - {
      checkin: 2019-08-14T05:00:00.000Z,
      checkout: 2019-08-14T05:00:00.000Z
      }

PUT path '/checkout'

  - Alters one record, must pass an on object like the one in the POST path along with an id as the third prop:
      - {
      checkin: 2019-08-14T05:00:00.000Z,
      checkout: 2019-08-14T05:00:00.000Z,
      id: Number
      }



### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

