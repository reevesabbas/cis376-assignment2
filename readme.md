# Tweet API

This API allows you to interact with tweets and related data such as external links and user profiles. It is built using **Express** and **TypeScript**.

## Table of Contents
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [Get all tweets](#get-all-tweets)
  - [Get tweet by ID](#get-tweet-by-id)
  - [Get all links in tweets](#get-all-links-in-tweets)
  - [Get user profile](#get-user-profile)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install dependencies:

npm install

Run the application:

    npm start

    The server should be running on http://localhost:3000.

## API Endpoints

1. ### Get all tweets

    Route: GET /tweets/
    Description: Retrieves all available tweets in the archive.
    Response Example:

    [
      {
        "id": 1,
        "create_time": "2022-01-01T00:00:00Z",
        "text": "This is a sample tweet"
      },
      {
        "id": 2,
        "create_time": "2022-01-02T00:00:00Z",
        "text": "Another tweet"
      }
    ]

2. ### Get tweet by ID

    Route: GET /tweets/:id
    Description: Retrieves detailed information about a specific tweet by its ID.
    URL Parameter:
        id: The ID of the tweet you want to retrieve.
    Response Example:

    {
      "id": 1,
      "create_time": "2022-01-01T00:00:00Z",
      "text": "This is a sample tweet",
      "user": {
        "screen_name": "user1"
      }
    }

3. ### Get all links in tweets

    Route: GET /tweets/links/ OR /tweets/links/:id
    Description: Extracts all external links from all tweets or a specific tweet and groups them based on tweet IDs.
    Response Example:

    {
      "1": [
        "http://example.com/link1",
        "http://example.com/link2"
      ],
      "2": [
        "http://example.com/link3"
      ]
    }

4. ### Get user profile

    Route: GET /tweets/user/:screenName
    Description: Retrieves the profile information for a given Twitter user.
    URL Parameter:
        screenName: The screen_name of the Twitter user whose profile you want to retrieve.
    Response Example:

    {
      "screen_name": "user1",
      "location": "New York",
      "description": "Developer and Twitter enthusiast.",
      "followers_count": 500,
      "friends_count": 150
    }

## Testing

You can test the API using tools like Hoppscotch or Postman by making HTTP requests to the endpoints listed above.

    Get all tweets: Make a GET request to http://localhost:3000/tweets/.
    Get tweet by ID: Make a GET request to http://localhost:3000/tweets/:id, replacing :id with the tweet ID.
    Get all links in tweets: Make a GET request to http://localhost:3000/tweets/links/.
    Get user profile: Make a GET request to http://localhost:3000/tweets/user/:screenName, replacing :screenName with the Twitter user's screen name.


## Contributing

If you'd like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request. Please ensure that your code follows the coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

