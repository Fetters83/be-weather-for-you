# be-weather-for-you

This `README.md` provides installation steps, usage instructions, endpoint descriptions, and testing guidance to help developers set up and use your project.

## Description
**be-weather-for-you** is a backend application that provides weather information using the [Weather API](https://www.weatherapi.com/). It allows users to retrieve the current weather and a 3-day forecast for any location using simple RESTful endpoints.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites
1. Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
2. Sign up at [Weather API](https://www.weatherapi.com/) to get an API key.

### Steps
1. Clone the repository:
   git clone https://github.com/Fetters83/be-weather-for-you.git


2. Navigate to the project directory:
   cd be-weather-for-you

3. Install the required dependencies:
   npm install

4. Create a .env file in the root directory and add your Weather API key:
   API_KEY=<your-api-key>

### Usage

1. Start the application:
   npm run start

2. Open POSTMAN or any other API client and use the following endpoints to retrieve weather data.


## API Endpoints
### Retrieve 6 capital cities:
GET /api

Description: Retrieves the current weather for 6 locations on the landing screen.
Parameters: :none
Example: /api


### Retrieve Current Weather:
GET /api/current/:locale

Description: Retrieves the current weather for the specified location.
Parameters: :locale - The location (city name or latitude/longitude) for which to retrieve the weather.
Example: /api/current/London or /api/current/37.7749,-122.4194

### Retrieve 3-Day Weather Forecast
GET /api/forecast/:locale

Description: Retrieves the 3-day weather forecast for the specified location.
Parameters: :locale - The location (city name or latitude/longitude) for which to retrieve the forecast.
Example: /api/forecast/London or /api/forecast/37.7749,-122.4194

## Testing
To run the tests, use the following command:
npm run test

Testing is done using Jest along with Supertest for API testing. Jest-extended and Jest-sorted are used for additional matchers and sorting tests.

## Contributing
If you encounter any issues or have suggestions for improving this project, please feel free to open an issue at the Issues Page.

## License
This project is licensed under the ISC License. See the LICENSE file for more details.

