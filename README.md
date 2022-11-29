# Description

Frontend portion of my bookstore project and displays a library of books with additional functions.

## Technologies Used

- `ReactJS`: Frontend framework used to build UI.
- `React-Query`: To handling asynchronous data fetching.
- `React-Router-DOM`: To handling routing.
- `Axios`: To fetch data from the backend.

## Before Using The Application

You have to run the [Bookstore-Backend](https://github.com/Rabeea-Safadi/bookstore-backend).
And then add a api.config.ts file to the src folder with the following config:
`export default { API_URI: 'http://localhost:<PORT>/api/v1/book' };`
