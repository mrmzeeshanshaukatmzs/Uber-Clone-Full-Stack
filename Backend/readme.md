# User Registration Endpoint

## Endpoint
`POST /users/register`
## Middleware

### Authentication Middleware
This middleware checks if the user is authenticated by verifying the provided token.

#### Example Usage
```javascript
const authenticate = (req, res, next) => {
    // Token verification logic here
    next();
};
```

## Logout Endpoint

### Endpoint
`POST /users/logout`

### Description
This endpoint allows authenticated users to log out by invalidating their authentication token.

### Request Body
No request body is required.

### Response

#### Success Response
- **Status Code**: `200 OK`
- **Body**: A JSON object confirming the logout.

#### Example Success Response
```json
{
    "message": "Successfully logged out."
}
```

#### Error Responses

- **Status Code**: `401 Unauthorized`
    - **Description**: The user is not authenticated.

#### Example Error Response
```json
{
    "error": "User not authenticated."
}
```

## User Profile Endpoint

### Endpoint
`GET /users/profile`

### Description
This endpoint allows authenticated users to retrieve their profile details.

### Request Headers
- `Authorization` (string, required): The authentication token of the user.

### Response

#### Success Response
- **Status Code**: `200 OK`
- **Body**: A JSON object containing the user's profile details.

#### Example Success Response
```json
{
    "id": "1a2b3c4d",
    "username": "john_doe",
    "email": "john.doe@example.com",
    "fullName": "John Doe",
    "phoneNumber": "123-456-7890",
    "createdAt": "2023-10-01T12:34:56Z"
}
```

#### Error Responses

- **Status Code**: `401 Unauthorized`
    - **Description**: The user is not authenticated.

#### Example Error Response
```json
{
    "error": "User not authenticated."
}
```
## Description
This endpoint allows new users to register by providing their details.

## Request Body
The request body should be a JSON object containing the following fields:

- `username` (string, required): The desired username of the user.
- `email` (string, required): The email address of the user.
- `password` (string, required): The password for the user account.
- `fullName` (string, optional): The full name of the user.
- `phoneNumber` (string, optional): The phone number of the user.

### Example Request
```json
{
    "username": "john_doe",
    "email": "john.doe@example.com",
    "password": "securePassword123",
    "fullName": "John Doe",
    "phoneNumber": "123-456-7890"
}
```

## Response

### Success Response
- **Status Code**: `201 Created`
- **Body**: A JSON object containing the newly created user details (excluding the password).

### Example Success Response
```json
{
    "id": "1a2b3c4d",
    "username": "john_doe",
    "email": "john.doe@example.com",
    "fullName": "John Doe",
    "phoneNumber": "123-456-7890",
    "createdAt": "2023-10-01T12:34:56Z"
}
```

### Error Responses

- **Status Code**: `400 Bad Request`
    - **Description**: Missing or invalid fields in the request body.
    
- **Status Code**: `409 Conflict`
    - **Description**: The username or email already exists.

### Example Error Response
```json
{
    "error": "Username already exists."
}
``` 
# User Login Endpoint

## Endpoint
`POST /users/login`

## Description
This endpoint allows existing users to log in by providing their credentials.

## Request Body
The request body should be a JSON object containing the following fields:

- `email` (string, required): The email address of the user.
- `password` (string, required): The password for the user account.

### Example Request
```json
{
    "email": "john.doe@example.com",
    "password": "securePassword123"
}
```

## Response

### Success Response
- **Status Code**: `200 OK`
- **Body**: A JSON object containing the authentication token and user details (excluding the password).

### Example Success Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "id": "1a2b3c4d",
        "username": "john_doe",
        "email": "john.doe@example.com",
        "fullName": "John Doe",
        "phoneNumber": "123-456-7890",
        "createdAt": "2023-10-01T12:34:56Z"
    }
}
```

### Error Responses

- **Status Code**: `400 Bad Request`
    - **Description**: Missing or invalid fields in the request body.
    
- **Status Code**: `401 Unauthorized`
    - **Description**: Incorrect email or password.

### Example Error Response
```json
{
    "error": "Invalid email or password."
}
```
## Middleware

### Authentication Middleware
This middleware checks if the user is authenticated by verifying the provided token.

#### Example Usage
```javascript
const authenticate = (req, res, next) => {
    // Token verification logic here
    next();
};
```

## Logout Endpoint

### Endpoint
`POST /users/logout`

### Description
This endpoint allows authenticated users to log out by invalidating their authentication token.

### Request Body
No request body is required.

### Response

#### Success Response
- **Status Code**: `200 OK`
- **Body**: A JSON object confirming the logout.

#### Example Success Response
```json
{
    "message": "Successfully logged out."
}
```

#### Error Responses

- **Status Code**: `401 Unauthorized`
    - **Description**: The user is not authenticated.

#### Example Error Response
```json
{
    "error": "User not authenticated."
}
```

## User Profile Endpoint

### Endpoint
`GET /users/profile`

### Description
This endpoint allows authenticated users to retrieve their profile details.

### Request Headers
- `Authorization` (string, required): The authentication token of the user.

### Response

#### Success Response
- **Status Code**: `200 OK`
- **Body**: A JSON object containing the user's profile details.

#### Example Success Response
```json
{
    "id": "1a2b3c4d",
    "username": "john_doe",
    "email": "john.doe@example.com",
    "fullName": "John Doe",
    "phoneNumber": "123-456-7890",
    "createdAt": "2023-10-01T12:34:56Z"
}
```

#### Error Responses

- **Status Code**: `401 Unauthorized`
    - **Description**: The user is not authenticated.

#### Example Error Response
```json
{
    "error": "User not authenticated."
}
```

