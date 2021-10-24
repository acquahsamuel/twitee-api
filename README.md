### Twitee-api

At Intelligent Innovations we take great pride in tackling complex problems and creating
solutions that are innovative and impactful. To deliver on that promise, we follow best practices
in developing applications, e.g, having a well-defined directory structure, writing clean modular
code and driving development via tests.


| Tool | Resources |
| --- | --- |
| `Install node.js ` | [Download node ](https://nodejs.org/en/download/) |
| `Postman ` | [Download Postman ](https://www.postman.com/downloads/) |
| `Mongodb  ` |  [Download Mongodb](https://www.mongodb.com/try/download/compass) |
| `Npm community` | [Exploration and npm packages](https://www.npmjs.com/) |


## Run api locally
clone project locally 
`git clone https://github.com/acquahsamuel/twitee-api.git`


Install required packages 
`npm install`



Configuring .env file 
```.env

MONGO_URI_USERNAME=twitee-api
MONGO_URI_PASSWORD=

MONGO_URI_PROD=
MONGO_URI_DEV=mongodb://localhost:27017/twitee-api


JWT_SECRET=thisisthejwtsecretcodetwiteeapi
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30

```


Start server
`npm start`


The API is live at [twitee-api](https://twitee-backend-api.herokuapp.com/)

