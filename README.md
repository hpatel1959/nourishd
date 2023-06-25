# NourishD - Health Application

## Developers

- Harsh Patel - [Github](https://github.com/hpatel1959) / [LinkedIn](https://www.linkedin.com/in/harsh-patel-69a7161b9/)
- Koji Eguchi - [Github](https://github.com/Kody-Eguchi) / [LinkedIn](https://www.linkedin.com/in/kojieguchi/)

## Tech Stack

- React
- Ruby
- Ruby on Rails
- PostgreSQL
- Bootsrap

[Backend API](https://github.com/Kody-Eguchi/nourishd-api)

## Other Tools

- Trello
- Figma
- Photopia
- Font Awesome
- Google Font

## Dependancies

- axios
- nodemon
- react-router-dom
- net-http
- rack-cors
- bcrypt
- actionpack
- dotenv

## Third Party API

- [Edamam](https://www.edamam.com/)

## Applications Features

- users can keep tracks of their nutrient intakes
- users can serach healthy meal recipes from the database
- users can favourite recipes
- users can sign up to create a new account

## Screenshots

### Home (Desktop)

![Home Page](https://github.com/hpatel1959/nourishd/blob/main/docs/nourishd-home-desktop.png)

### Home (Mobile)

![Home Page](https://github.com/hpatel1959/nourishd/blob/main/docs/nourishd-home-mobile.png)

### Recipes (Desktop)

![Recipes Page](https://github.com/hpatel1959/nourishd/blob/main/docs/nourishd-recipes-desktop.png)

### Recipes (Mobile)

![Recipes Page](https://github.com/hpatel1959/nourishd/blob/main/docs/nourishd-recipes-mobile.png)

### Records (Desktop)

![Records Page](https://github.com/hpatel1959/nourishd/blob/main/docs/nourishd-tracker-desktop.png)

### Records (Mobile)

![Records Page](https://github.com/hpatel1959/nourishd/blob/main/docs/nourishd-records-mobile.png)

## Production URL Link

![Click Here](https://nourishd.netlify.app/)

## Project Notes

### Project Objectives

- Design and implement a relational data model using PostgreSQL (ERD Diagram Link).
- Implement cross-domain authentication using Rack-Cors.
- Utilize Ruby on Rails with ActiveRecord as an MVC framework.
- Write maintainable code in both the frontend and backend applications.
- Practice version control in a team environment.
- Create a backend application with Ruby on Rails (We learned RoR 10 days prior to this project).
- Integrate third-party APIs into the project.
- Use React UI libraries for enhanced UI/UX experiences.
- Integrate a pipeline(CircleCI) for CI/CD.
- Deploy the frontend application using Netlify.
- Deploy the Railway App to host a database and backend API using Railway CLI.

### Development Challenges

During the development of this project, we encountered several challenges that required innovative solutions. These challenges and their respective solutions include:

- CORS issues on both development and production environments due to the project running on two different servers (frontend on Netlify, backend on Railway). We resolved these issues by properly applying CORS middleware and allowing the correct server address to access the backend API.
- Reading cookies from the client-side when the cookies are created on the server-side. To address this, we implemented new actions on the RoR backend within a controller. When a request is made to the backend server, it reads the cookie, which exists on the backend server, and sends the appropriate data back to the frontend. However, it's important to note that cookies are not actually stored on the browser using this approach.
- Reading the client-side timezone from hardware when generating daily nutrient stats. As the data was generated with a UTC timestamp, errors occurred when users tried to access their data based on local time because the local time did not match the UTC timezone. We resolved this issue by modifying the config file for Active Record. Initially, it was set to create timestamps in the server-side UTC, but we changed it to read the machine users are using instead.
- Re-rendering certain components using state management tools such as Redux. To achieve this, we created a token to invoke state changes in other components and passed it down as props. Alternatively, we could have utilized useContext.
- Deployment issues on the Railway App for the backend API. Manually uploading from the Railway website resulted in improper compilation. However, we resolved this issue by installing Railway CLI and deploying directly from the command line terminal.

### Future Improvements

To further enhance the project, we plan to implement the following improvements in the future:

- Practice TDD (Test Driven Development) using Cypress or RSpec.
- Resolve browser-dependent issues (Safari browser currently does not allow Cross-Site Tracking).
- Implement more secure authentication methods. Currently, bcrypt is used to hash passwords, but exploring stronger authentication options would be beneficial.
