# K_Krystal_App

Full Stack Final project

Create an app that allows users to log their favorite cystals. Add functionality that allows users to see their crystals healing properties. 


## Overview

- Using a mono-repo template repository, create a full-stack web application
- Use express to build a full CRUD back-end application that adheres to RESTful routes
- Use create-react-app to build a full CRUD front-end application that interacts with the back-end
- Use unit tests to guide the building process
- Deploy the applications online, so anyone can see them online

### Back-end setup

It is recommended that you open a new terminal tab that will be dedicated to running and developing your back-end

- mkdir  back-end
- cd back-end
- touch .env .gitignore server.js app.js

**.gitignore**
```
.env 
node_modules
DS_Store
```

**.env**
```
PORT=3003
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=krystals_dev
```

- `npm init -y` -
- `npm install` - install npm packages listed in `package.json`

- mkdir controllers
- touch controllers/krystalController.js'
- mkdir db
- touch db/schema.sql
- touch db/seed.sql

- `psql -U postgres -f db/schema.sql` - initialize a new database and create tables
- `psql -U postgres -f db/seed.sql` - seed the table(s) with some data

- Visit http://localhost:3003/krystals/ and make sure you see some krystal data in the form of an array of objects
- `npm install express dotenv cors` - seed the table(s) with some data



- touch .env .gitignore server.js app.js

- `npm install pg-promise`
- touch db/dbConfig.js

**.env**
`````
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=krystals_dev
PG_USER=postgres
``````

- mkdir queries
- touch queries/krystals.js

- mkdir validations
- touch validations/checkKrystals.js

- `nodemon` - confirm that this is running on port 3333

### Front-end setup

It is recommended that you open a new terminal tab that will be dedicated to running and developing your front-end

- `npx create-react-app front-end`
- `cd front-end`
- `touch .env`

**.env**

```
REACT_APP_API_URL=http://localhost:3003
```
- `npm install` - install npm packages listed in `package.json`
- `npm install react-router-dom
- `npm install axios
- `npm start` - make sure your React app can start


Miro: 
Trello: 