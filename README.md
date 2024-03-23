# Joke API Project

This project is a simple Express.js application that provides a RESTful API for retrieving jokes. It also demonstrates making requests to a third-party API to fetch programming-related jokes.

## Features

- **Get All Jokes:** Allows users to retrieve a list of all available jokes.
- **Get Joke by ID:** Retrieves a specific joke by its ID.
- **Add Joke:** Enables users to add a new joke to the collection.
- **Get List of Programming Jokes:** Fetches a list of programming-related jokes from a third-party API.

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies using `npm install`.
4. Run the server using `npm start`.

## Usage

### Endpoints

- **GET /allJokes**: Retrieve all available jokes.
- **GET /joke?id={jokeID}**: Retrieve a joke by its ID.
- **POST /addJoke**: Add a new joke to the collection. Send JSON data with the joke content.
- **GET /listProgrammingJokes?jokeAmount={amount}**: Fetch a list of programming jokes from a third-party API. Optionally specify the number of jokes to fetch.

## Contributing

Contributions are welcome! If you find any bugs or want to add new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
