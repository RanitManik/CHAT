<div align="center">
  <img height="70px" src="https://github.com/user-attachments/assets/7a6263bf-858b-4c53-82c5-ac447b2f976f" alt="CHAT favicon">
  <h1>CHAT – Connect, Have A Talk</h1>
  <a href="https://chat.ranitmanik.live/">View Demo</a>
  ·
  <a href=".github/ISSUE_TEMPLATE/bug_report.md">Report Bug</a>
  ·
  <a href=".github/ISSUE_TEMPLATE/feature_request.md">Request Feature</a>
  <br/>
  <br/>
  
  ![GitHub Created At](https://img.shields.io/github/created-at/RanitManik/CHAT)
  ![GitHub repo size](https://img.shields.io/github/repo-size/RanitManik/CHAT)
  ![GitHub Discussions](https://img.shields.io/github/discussions/RanitManik/CHAT)
  ![GitHub License](https://img.shields.io/github/license/RanitManik/CHAT)
  ![GitHub stars](https://img.shields.io/github/stars/RanitManik/CHAT?style=default)
  ![GitHub forks](https://img.shields.io/github/forks/RanitManik/CHAT?style=default)
  <br/>
  ![Netlify Status](https://api.netlify.com/api/v1/badges/81260c78-410f-4aaf-8505-588d7900d19f/deploy-status)
  ![Wakatime](https://wakatime.com/badge/github/RanitManik/CHAT.svg)
  
</div>  

Welcome to **CHAT – *Connect, Have A Talk***, a real-time chat application built with React and Firebase. This application provides an interactive chat experience, leveraging modern technologies to deliver fast and reliable communication.

## Table of Contents

- [Overview](#overview)
    - [Why This Application?](#why-this-application)
    - [Technologies Used](#technologies-used)
    - [Features](#features)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Development Server](#running-the-development-server)
    - [Building for Production](#building-for-production)
    - [Linting and Formatting](#linting-and-formatting)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Overview

### Why This Application?

CHAT is designed to offer a seamless real-time chat experience, making it easier to connect and communicate. Built with React and Firebase, it ensures real-time data synchronization and a smooth user interface, making it ideal for modern communication needs.

### Technologies Used

<p>
   <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" height="30px">
   <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase&logoColor=white" alt="FirebaseContext" height="30px">
   <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" height="30px">
   <img src="https://img.shields.io/badge/shadcn%2Fui-000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="ShadcnUI" height="30px">
   <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" height="30px">
   <img src="https://img.shields.io/badge/PostCSS-%23DD3A0A.svg?style=for-the-badge&logo=postcss&logoColor=white" alt="PostCSS" height="30px">
   <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" height="30px">
   <img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=for-the-badge&logo=Prettier&logoColor=black" alt="Prettier" height="30px">
   <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" height="30px" />
</p>

### Features

- **React**: A powerful JavaScript library for building user interfaces.
- **FirebaseContext**: A comprehensive app development platform for managing databases, authentication, and hosting.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Shadcn/UI**: A UI component library for building beautiful interfaces.
- **JavaScript**: The programming language that powers the web.
- **PostCSS**: A tool for transforming CSS with JavaScript plugins.
- **ESLint**: Code linting to maintain consistent code quality.
- **Prettier**: Code formatting to ensure a consistent code style.

## Getting Started

### Prerequisites

- **Node.js** (>= 20.0.0)
- **npm** (>= 10.0.0) or **yarn** (>= 1.22.0)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/RanitManik/CHAT.git
   cd CHAT
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

or

```bash
yarn dev
```

Open your browser and navigate to `http://localhost:5173` to see the application in action.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

or

```bash
yarn build
```

The built files will be located in the `dist` directory.

### Linting and Formatting

To lint your code, run:

```bash
npm run lint
```

or

```bash
yarn lint
```

To format your code, run:

```bash
npm run format
```

or

```bash
yarn format
```

## Project Structure

The project structure is as follows:

```
CHAT/
├── public/ # Public static assets
├── src/ # Main source code
│   ├── assets/ # Application assets (e.g., images, icons)
│   ├── components/ # Reusable React components
│   │   ├── ui/ # UI components (e.g., buttons, forms)
│   │   └── block/ # Custom reusable components
│   ├── context/ # React contexts for state management
│   ├── hooks/ # Custom React hooks
│   ├── index.css # Global styles
│   ├── App.jsx # Main application component
│   └── main.jsx # Entry point for React application
├── .env.example # Template for environment variables
├── .gitignore # Files and directories to be ignored by Git
├── .prettierrc # Prettier configuration file
├── index.html # HTML template for the app
├── LICENSE # License information
├── package.json # Project dependencies and scripts
├── package-lock.json # Lock file for dependencies
├── postcss.config.js # PostCSS configuration
├── README.md # Project documentation
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
├── tsconfig.node.json # TypeScript configuration for Node.js
└── vite.config.js # Vite configuration file
```

## Contributing

We welcome contributions to enhance the CHAT application. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature-name
   ```

3. Make your changes and commit them with clear and descriptive messages.
4. Push your changes to your fork:

   ```bash
   git push origin feature-name
   ```

5. Create a pull request to the main repository, detailing the changes and enhancements you have made.

## Contact

<table>
  <tr>
    <th></th>
    <th>Social Media</th>
    <th>Username</th>
    <th>Link</th>
  </tr>
  <tr>
    <td><img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" width="20" /></td>
    <td>Email</td>
    <td><code>ranitmanik.dev@gmail.com</code></td>
    <td><a href="mailto:ranitmanik.dev@gmail.com" target="_blank">Email</a></td>
  </tr>
  <tr>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" width="20" /></td>
    <td>LinkedIn</td>
    <td><code>Ranit Manik</code></td>
    <td><a href="https://www.linkedin.com/in/ranit-manik/" target="_blank">LinkedIn</a></td>
  </tr>
  <tr>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" width="20" /></td>
    <td>Instagram</td>
    <td><code>ranit_manik_</code></td>
    <td><a href="https://www.instagram.com/ranit_manik_/" target="_blank">Instagram</a></td>
  </tr>
  <tr>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" width="20" /></td>
    <td>Facebook</td>
    <td><code>RanitKumarManik</code></td>
    <td><a href="https://www.facebook.com/RanitKumarManik/" target="_blank">Facebook</a></td>
</tr>
</table>

_Feel free to reach out if you have questions or just want to chat about web adventures!_

## Acknowledgments

This project wouldn't be possible without the collaboration and resources of the developer community. Thanks to the community and tools like React and Firebase. Special appreciation goes to friends and family. I hope it inspires further learning.

---

<p align="center">
   Thank you for using <strong>CHAT</strong>! Happy chatting! 🚀
</p>

