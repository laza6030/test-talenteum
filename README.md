# General information

This is an API for saving user informations into a PostgreSQL database

## Technologies used

<ul>
    <li>Typescript</li>
    <li>NodeJS</li>
    <li>Express</li>
    <li>PostgreSQL</li>
    <li>Jest</li>
    <li>Supertest</li>
</ul>

## Run locally

Node version: _v20.8.0_

1. Clone the repository or [download](https://github.com/laza6030/test-talenteum/archive/refs/heads/main.zip) the zip file and extract it.

```
git clone https://github.com/laza6030/test-talenteum.git
```

2. Setup a postgres database

3. Open a command line, go to the root of the project and create a **.env** file

```
cd test-talenteum
touch .env
```

4. Fill the **.env** file like in the **.env.example** (with your own value)

5. Install dependencies

```
npm install
```

6. Build the project

```
npm run build
```

7. Start the server

```
npm run start
```

Now, you should be able to test the API via the url **http://localhost:3000/**

For development mode, run `npm run dev`
<br/>To run test, run `npm run test`

## How to test the API

You can use **Postman** to test the API. Send a POST request to the http://localhost:3000/save-user URL with the following body request:

```
{
"username": "John",
"email": "johndoe@user.com",
"age": 30
}
```

You can change these values as you want to test the API.
