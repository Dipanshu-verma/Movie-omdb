# Movie Search Web Application

## Overview

This project is a simple movie search web application built using React.js. It allows users to search for movies by title and view details about each movie. The application fetches movie data from the OMDB API and displays it in a user-friendly interface.

## Features

- **Homepage**: Displays a search bar and a list of popular movies by default in a grid format.
- **Search Functionality**: Allows users to search for movies by title and view results including movie titles and release years.
- **Movie Details Modal**: Displays additional details about a selected movie, such as plot summary, genre, and ratings, in a modal.
- **Error Handling**: Shows a "No Data Found" message if the search query does not match any movies and "API error" handles API request errors.

## Screenshots

### Homepage

![Homepage](https://github.com/Dipanshu-verma/Movie-omdb/assets/128663583/7a9298b7-c312-4119-9e73-36ba20b40ade)
_The homepage displays movie cards in a grid format._

### Movie Details Modal

![Movie Details Modal](https://github.com/Dipanshu-verma/Movie-omdb/assets/128663583/8dc05a9a-65c2-44d8-b1ed-66522d0607aa)
_The modal shows detailed information about the selected movie._

### No Data Found

![No Data Found](https://github.com/Dipanshu-verma/Movie-omdb/assets/128663583/9187b7e0-0dbe-4038-abbd-ff95bef1cfdf)
_Displays when the search query does not match any movies._

### API Request Error

![API Request Error](https://github.com/Dipanshu-verma/Movie-omdb/assets/128663583/2a19905f-56cd-4d6b-b274-97afb9a8910a)
_Displays when there is an error making the API request._

## Getting an API Key

To use this application, you need an API key from OMDB. Follow these steps to obtain an API key:

1. Visit [OMDB API](https://www.omdbapi.com/).
2. Click on the "API Key" tab in the navbar.
    ![API Key Tab](https://github.com/Dipanshu-verma/Movie-omdb/assets/128663583/922451c2-f7d6-4ffb-969c-95d2c0221db6)
3. Select the free account type, enter your details, and submit the form.
    ![API Key Form](https://github.com/Dipanshu-verma/Movie-omdb/assets/128663583/7a69a96e-87d7-40d1-a8a2-a50dac20ab3c)
4. You will receive your API key via email.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/Dipanshu-verma/Movie-omdb.git
    cd your-repo-name
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Create a `.env` file** in the root directory and add your OMDB API key:
    ```
    REACT_APP_OMDB_API_KEY=your_api_key_here
    ```

4. **Run the application**:
    ```sh
    npm start
    ```

5. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Usage

- **Search for a movie**: Enter the movie title in the search bar and press Enter.
- **View movie details**: Click on a movie title from the search results to open the modal with additional details.

## Dependencies

- React.js
- axios (for making API requests)
- react-modal (for displaying the movie details modal)
- OMDB API

## License

This project is licensed under the MIT License.

## Notes

Feel free to fork this repository and make any modifications or improvements. If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

---

**Developer**: Rajat (Subhendu)

**Contact**: [your.email@example.com](mailto:your.email@example.com)
