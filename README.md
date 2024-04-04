# MERN Travel-Booking Project

This is a MERN (MongoDB, Express.js, React.js, Node.js) project for learning purposes focused on developing a Travel-Booking application.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
  - [Backend Installation](#backend-installation)
  - [Frontend Installation](#frontend-installation)
- [Usage](#usage)
  - [Running Backend](#running-backend)
  - [Running Frontend](#running-frontend)
- [Environment Variables](#environment-variables)
- [Strengths](#strengths)
- [Deployments](#deployments)
  - [Backend Deployment](#backend-deployment)
  - [Frontend Deployment](#frontend-deployment)
- [Reference Application](#reference-application)

## Introduction

This project is designed to provide hands-on experience in building a Travel-Booking application using the MERN stack. The backend is developed using Node.js with Express.js to create API endpoints for fetching tour information and implementing features like data validation using Joi and JWT token authentication. The frontend is developed using React.js for building the user interface.

## Features

- Backend API endpoints for retrieving tour information
- Data validation using Joi
- JWT token authentication
- User-friendly frontend interface for booking tours
- Integration of Reactstrap for UI components
- Implementation of React Router for navigation

## Technologies

- MongoDB Atlas: Database
- Express.js: Backend framework for Node.js
- React.js: Frontend library for building user interfaces
- Node.js: JavaScript runtime environment
- JWT: JSON Web Tokens for authentication
- Joi: Library for data validation
- Reactstrap: Bootstrap components for React
- React Router DOM: Library for routing in React applications
- Vercel: Deployment platform for frontend

## Installation

### Backend Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the backend folder:

```bash
cd backend
```

3. Install dependencies:

```bash
npm install
```

### Frontend Installation

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

## Usage

### Running Backend

1. Navigate to the backend folder:

```bash
cd backend
```

2. Run the development server:

```bash
npm run dev
```

### Running Frontend

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Start the development server:

```bash
npm start
```

## Environment Variables

Make sure to create a `.env` file in both the backend and frontend folders with the following variables:

- `PORT`: Port number for the server
- `MONGO_URL`: MongoDB Atlas connection URL
- `JWT_SECRET_KEY`: Secret key for JWT token encryption

## Strengths

Upon completing this project, you will gain knowledge in the following areas:

- Building a full-stack web application using the MERN stack
- Creating API endpoints with Node.js and Express.js
- Data validation techniques using Joi
- User authentication using JWT tokens
- React.js for building dynamic user interfaces
- Integration of Reactstrap for UI components
- Implementation of React Router for navigation

## Deployments

### Backend Deployment

The backend can be deployed to a platform like Heroku or AWS Elastic Beanstalk.

### Frontend Deployment

The frontend can be deployed to Vercel, which provides seamless deployment for React applications.

## Reference Application

After completing this project, you can refer to the deployed Travel-Booking application [Travel-Booking](https://travel-booking-psi.vercel.app). This reference application will provide additional insights and serve as inspiration for further enhancements to your project.
