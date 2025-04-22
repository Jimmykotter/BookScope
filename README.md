# BookScope

**BookScope** is a full-stack MERN application that allows users to search for books using the Google Books API and save their favorite reads to a personal collection. Originally built with RESTful APIs, this version has been refactored to use **GraphQL with Apollo Server**, providing a more flexible and performant way to manage and query data.

## Features

- Search books by title or keyword using the Google Books API
- View results with title, author, description, cover image, and link
- Create a user account and log in with JWT-based authentication
- Save and remove books from a personalized reading list
- View saved books on a separate dashboard
- Fully responsive and clean user interface

## Screenshots

![screenshot](https://github.com/user-attachments/assets/ff4e2ca7-0113-4c7d-ba72-a843da1fa886)

## Built With

**Frontend**
- [React](https://reactjs.org/) – Frontend UI library
- [Apollo Client](https://www.apollographql.com/docs/react/) – GraphQL client for managing API requests
- [React Router](https://reactrouter.com/) – Client-side routing
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework

**Backend**
- [Node.js](https://nodejs.org/) – Runtime environment
- [Express](https://expressjs.com/) – Server framework
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) – GraphQL API server
- [MongoDB](https://www.mongodb.com/) – NoSQL database
- [Mongoose](https://mongoosejs.com/) – ODM for MongoDB
- [JWT](https://jwt.io/) – Authentication with JSON Web Tokens
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) – Password hashing

## GraphQL API

**Queries**
- `me` – Returns the current user's profile and saved books

**Mutations**
- `login(email, password)` – Logs in user and returns token
- `addUser(username, email, password)` – Creates a new user and returns token
- `saveBook(bookInput)` – Saves a book to the user's profile
- `removeBook(bookId)` – Removes a saved book by ID

## Getting Started

### 1. Clone the repository
``bash
git clone https://github.com/your-username/bookscope.git
cd bookscope


2. Install dependencies:
# Frontend
cd client
npm install

3. Start the development server:
# Backend
cd ../server
npm run develop

## Contributing

This is a personal project and not currently accepting external contributions. However, feel free to fork it and customize it for your own portfolio!

## License

This project is licensed under the [MIT License](LICENSE).

## Author

**Jimmy**  
- [GitHub](https://github.com/jimmykotter)  
- [Email](mailto:Jimmykotter@gmail.com)

**Link to Deployed Website**

https://bookscope.onrender.com

https://github.com/Jimmykotter/bookscope
