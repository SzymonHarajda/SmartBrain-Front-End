# Smart Brain Front-End

This is the frontend application for the Smart Brain web application. Smart Brain is a face detection application that allows users to detect faces in images by providing a URL to the image. This frontend application interacts with the backend API to provide a seamless user experience.

## Features

- **User Authentication**: Users can register for an account or sign in with existing credentials.
- **Image Input**: Users can input image URLs to detect faces in images.
- **Face Detection**: The application detects faces in images and highlights them for the user.
- **User Profile**: Registered users have a profile where they can see their name and the number of images they have submitted for face detection.

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Clarifai API**: Utilized for face detection in images.
- **ParticlesBg**: Library for adding particle backgrounds to the application.

## Installation

1. Clone the repository:

git clone https://github.com/SzymonHarajda/smartbrain-front-end.git

2. Install dependencies:

npm install

3. Run the application:

npm start


4. Access the application in your browser at `http://localhost:3000`.

## Usage

1. Register for a new account or sign in with existing credentials.
2. Once signed in, you will be directed to the home page.
3. Enter the URL of an image containing faces into the input field and click "Detect".
4. The application will detect and highlight the faces present in the image.
5. You can track the number of images you have submitted for face detection in your profile.

## Contributors

- [Szymon Harajda](https://github.com/SzymonHarajda)

## License

This project is licensed under the [MIT License](LICENSE).
