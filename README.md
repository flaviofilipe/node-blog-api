
# Node API Blog

  

## Description

  This is a blog backend API made with NodeJs, Express.js and [Objection.js](https://vincit.github.io/objection.js/)
## Development Mode
### Dependences
- Docker & Docker Compose
- Node v12.x
- npm

**Install dependences**
```
npm i
```
 **Eviroments variables**
 - Copy *.env.example* and rename to *.env*
 
 **Run tests**
 ```
 npm test
 ```

**Run Docker**
```
docker-compose up -d
```

**Run API**
```
npm run dev
```
  
## Endpoints
|Method| URL |
|--|--|
| POST | /api/login |
| POST | /api/sign-up |
| GET | /api/admin/authors |
| POST | /api/admin/authors |
| GET | /api/admin/authors/:id|
| PUT | /api/admin/authors/:id |
| DELETE | /api/admin/authors/:id|
| GET | /api/admin/articles |
| POST | /api/admin/articles |
| GET | /api/admin/articles/:id|
| PUT | /api/admin/articles/:id |
| DELETE | /api/admin/articles/:id|
