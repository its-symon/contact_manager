#  Contacts Manager API

A secure RESTful API built with Node.js, Express, MongoDB, and JWT for managing personal contacts. Only authenticated users can access and manipulate their own contacts.

---

##  Features

-  User Registration & Login with JWT Authentication
-  Secure routes using token-based auth
-  CRUD operations on personal contacts
-  Only owners can update/delete their contacts
-  Express Async Handler for smooth error handling
-  Dockerized for easy setup and deployment

---

##  Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT (JSON Web Tokens)
- **Utilities**: bcrypt, dotenv, express-async-handler
- **Containerization**: Docker, Docker Compose

---

## Installation (Without Docker)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/contacts-api.git
cd contacts-api
```

### 2. Install Dependencies
``` npm install ```

### 3. Create .env File
``` 
PORT=5000
MONGO_URI=mongodb://localhost:27017/contacts_db
ACCESSTOKEN=your_secret_token_key
```

### 4. Start the server
``` npm run dev ```


## Run with Docker 

### 1. Create .env File
``` 
PORT=5000
MONGO_URI=mongodb://localhost:27017/contacts_db
ACCESSTOKEN=your_secret_token_key
```

### 2. Run using Docker Compose
```
docker-compose up --build
```


## API Reference

### Auth Endpoints:
| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| POST   | `/api/users/register` | Register a new user     |
| POST   | `/api/users/login`    | Log in an existing user |
| GET    | `/api/users/current`  | Get current user info (Requires JWT) |

### Contact Endpoints:
| Method | Endpoint              | Description                                 |
|--------|-----------------------|---------------------------------------------|
| GET    | `/api/contacts/`      | Get all contacts of the logged-in user      |
| POST   | `/api/contacts/`      | Create a new contact                         |
| GET    | `/api/contacts/:id`   | Get a specific contact by ID                 |
| PUT    | `/api/contacts/:id`   | Update an existing contact by ID             |
| DELETE | `/api/contacts/:id`   | Delete a contact by ID                       |


## Author
**Symon**

- Github: [@sin1ter](https://github.com/its-symon)
