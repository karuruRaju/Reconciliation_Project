# Bitespeed_Identity_Reconciliation_Project

Overview
This project implements a backend service for Bitespeed to identify and reconcile customer contacts based on email and phone number. The service is designed to link multiple contact entries that belong to the same customer, even if they use different email addresses or phone numbers across orders. This helps provide a personalized shopping experience on FluxKart.com.

The system stores contact information in a relational database and classifies contacts as primary or secondary based on the order of creation and shared identifiers. The service exposes an /identify API endpoint to process incoming contact data and return consolidated contact details.

Technologies Used
Node.js with TypeScript

Express.js for building RESTful API

H2 Database (in-memory SQL database)

Winston for logging

Jest for testing (optional for future extension)

Features
Create new primary contact if none exists with the given email or phone number.

Link contacts sharing the same email or phone number with proper primary-secondary precedence.

Validate incoming request payloads to ensure correct data formats.

Error handling middleware for consistent API error responses.

Logging support with Winston for better traceability.

API Endpoint
POST /identify
Request Body:

json
Copy
Edit
{
  "email": "string (optional)",
  "phoneNumber": "string or number (optional)"
}
Response:

json
Copy
Edit
{
  "contact": {
    "primaryContatctId": number,
    "emails": ["string"],
    "phoneNumbers": ["string"],
    "secondaryContactIds": [number]
  }
}
Setup and Running
Clone the repository.

Install dependencies:

bash
Copy
Edit
npm install
Start the server:

bash
Copy
Edit
npm start
The server will run on http://localhost:3000 by default.

Notes
The project uses an H2 database for easy setup and in-memory storage.

The focus is on clean code, modular structure, and maintainability.

Further improvements can include extended validation, persistent database support, and comprehensive testing.

Author
Karuru Raju

