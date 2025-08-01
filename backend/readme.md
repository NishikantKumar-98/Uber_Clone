# User Routes Documentation

This document describes the available user-related API endpoints for the backend of the Uber Clone project.

---

## Base Path

All routes are prefixed with `/users`.

---

## 1. Register User

**Endpoint:**  
`POST /users/register`

**Description:**  
Registers a new user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "yourpassword"
}
```

**Validation:**
- `email`: Must be a valid email address.
- `fullname.firstname`: Minimum 3 characters.
- `password`: Minimum 6 characters.

**Response:**
- **Success:**  
  `201 Created`
  ```json
  {
    "token": "<JWT_TOKEN>",
    "user": {
      "_id": "...",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "user@example.com"
      // other fields...
    }
  }
  ```
- **Validation Error:**  
  `400 Bad Request`
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
      // other errors...
    ]
  }
  ```

---

## 2. Login User

**Endpoint:**  
`POST /users/login`

**Description:**  
Authenticates an existing user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Validation:**
- `email`: Must be a valid email address.
- `password`: Minimum 6 characters.

**Response:**
- **Success:**  
  `200 OK`
  ```json
  {
    "token": "<JWT_TOKEN>",
    "user": {
      "_id": "...",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "user@example.com"
      // other fields...
    }
  }
  ```
- **Validation/Error:**  
  `400 Bad Request` or `401 Unauthorized`
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
      // other errors...
    ]
  }
  ```

---

## Notes

- All responses include a JWT token for authentication.
- Use the token for future authenticated requests.
- All request bodies must be sent as JSON.

---

For further details, refer to the backend code or contact the