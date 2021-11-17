## Running the project

npm i then
docker-compose up

## Application will start on port 5000

```
POST http://localhost:5000/login
request body example { "username":"root",
                       "password":"password"
                     }
response example {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvb3QiLCJpZCI6NywiaWF0IjoxNjM3MTU1MzQ1LCJleHAiOjE2MzcyNTUzNDR9.IdDhi4_YlqIXYH-pGzvFCUr4KrdaO3_-J145a0lZV-w"
                 }

```

Put the retrieved token in the Authorization header in the following get request, you can tune the query params as you wish

```
GET http://localhost:5000/beers?per_page=3&page=4

```
