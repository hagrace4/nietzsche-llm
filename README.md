# Full-Stack Application with React and Express

This repository contains the code for a full-stack application using React for the frontend and Node.js with Express for the backend. The application also uses MongoDB for data storage and integrates OpenAI's API to enhance functionality.

## Overview

The project is split into two main parts:

- **Frontend**: A React application created with Vite, responsible for the user interface.
- **Backend**: An Express server that handles API requests, and interacts with MongoDB, the MongoDB is hosted using MongoDB Atlas Cloud - which stores data for user Authentication/Authorization and Chat history.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm
- Git

## Installation

### Clone the Repository

```bash
git clone git@github.com:hagrace4/nietzsche-llm.git
cd nietzsche-llm
```

# Project Setup

This document provides instructions on setting up the environment and obtaining the necessary credentials for the `.env` file. This configuration file contains sensitive information required for the application to run properly.

## Setting Up `.env` File

Create a `.env` file in the root directory of your project and populate it with the necessary credentials as described below:

```plaintext
OPENAI_ORGANIZATION_ID=your_openai_organization_id_here
OPEN_AI_SECRET=your_openai_secret_here
MONGODB_URL=your_mongodb_connection_string_here
JWT_SECRET=your_jwt_secret_key_here
COOKIE_SECRET=your_cookie_secret_here
PORT=your_preferred_port_number_here
```
