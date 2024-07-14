## PeoplePulse

This project is a CRUD (Create, Read, Update, Delete) API for managing contacts. Users can register, log in, and perform CRUD operations using an HTTP client. Data is stored in a MongoDB database.

## Features

- User registration and authentication
- CRUD operations for managing contacts
- MongoDB database integration

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- HTTP client (e.g., Postman, Axios, Fetch)

## Installation

1. Clone the repository:


git clone https://github.com/Amaan-Khan14/Contact-Management-CRUD-API.git


2. Navigate to the project directory:


cd mycontacts-backend


3. Install dependencies:


npm install


4. Set up environment variables:

   - Create a .env file in the root directory.
   - Add the following environment variables:

   PORT=3000
   
	 CONNECTION_STRING=your-mongodb-uri

   ACCESS_TOKEN_SECRET=your-jwt-secret
   

## Usage

1. Start the server:


npm run dev


2. Access the API endpoints using an HTTP client such as Postman or cURL.

## API Endpoints

- POST /api/users/register: Register a new user.
- POST /api/users/login: Log in with existing credentials.
- GET /api/users/current: Get current user details (username, email, id).
- GET /api/contacts: Get all contacts.
- GET /api/contacts/:id: Get a specific contact.
- POST /api/contacts: Add a new contact.
- PUT /api/contacts/:id: Update an existing contact.
- DELETE /api/contacts/:id: Delete a contact.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues.
