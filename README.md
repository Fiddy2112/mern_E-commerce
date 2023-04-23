# Building an App Social

## Used

- **Backend:**
  - [Nodejs](https://nodejs.org/en/)
  - [Nodemon](https://www.npmjs.com/package/nodemon)
  - [ExpressJs](https://expressjs.com/)
  - [Dotenv](https://www.npmjs.com/package/dotenv)
  - [Cors](https://www.npmjs.com/package/cors)
  - [Argon2](https://www.npmjs.com/package/argon2)
  - [Helmet](https://www.npmjs.com/package/helmet)
  - [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
  - [Morgan](https://www.npmjs.com/package/morgan)
  - [Mongoose](https://mongoosejs.com/)

## Requirements

- **nodejs >= v14.7.0**
- **npm >= v6.14.7**
- **yarn >= v1.19.1**

##### clone project and run test

```bash
$ git clone https://git_url_clone <project_dir>
$ cd <project_dir>
$ yarn install
$ yarn start
```

## _Note_

- Cloning out 1 array or 1 object is good but can't create a deep copy of the value i.e. it recursively clones the value

- Example:
  ```bash
  const cloneCard = [...card];
  ```
- Solution: using [Lodash](https://www.npmjs.com/package/lodash)
- [cloneDeep](https://github.com/lodash/lodash/blob/master/cloneDeep.js)
- `import {cloneDeep} from 'lodash'`
- Object inheritance is preserved.

## My website Blog

** Coming soon !! **

#### Thanks for watching!
