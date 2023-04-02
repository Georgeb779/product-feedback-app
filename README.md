# Web App - Product Feedback App

This project is a solution to the Frontend Mentor's Product Feedback App coding challenge. It's a full-stack application built using Next.js, React, Prisma, and other dependencies listed in the `package.json` file.

## 🧐 What's inside?

- ⚡️ [Next.js 13](https://nextjs.org/) - The React Framework for Production
- 🧁 [TailwindCSS v3](https://tailwindcss.com/) - A utility-first CSS framework packed with classes
- ⚛️ [React 18](https://reactjs.org/) - A JavaScript library for building user interfaces
- 🧱 [React-Query](https://react-query.tanstack.com/) - A data-fetching library for React
- 🚀 [Next-Auth](https://next-auth.js.org/) - Authentication and authorization for Next.js
- 🍪 [Prisma](https://www.prisma.io/) - A next-generation ORM for Node.js and TypeScript
- 🌐 [Axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js
- 🔐 [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) - A library to help you hash passwords
- 🌈 [React-Toastify](https://github.com/fkhadra/react-toastify) - React notifications made easy
- 🎨 [Sass](https://sass-lang.com/) - Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
- 📏 [ESLint](https://eslint.org/) — Find and fix problems in your JavaScript code.
- 🦋 [Prettier](https://prettier.io/) — An opinionated code formatter.
- 🧪 [Jest](https://jestjs.io/) - A delightful JavaScript testing framework
- 🐶 [Testing Library](https://testing-library.com/) - Simple and complete testing utilities that encourage good testing practices

## Features

- Responsive design for optimal layout on various screen sizes
- Create, read, update, and delete product feedback requests
- Form validation for creating and editing feedback requests
- Sort suggestions by most/least upvotes and most/least comments
- Filter suggestions by category
- Add comments and replies to a product feedback request
- Upvote product feedback requests

## Installation

1. Clone this repository:

```bash
git clone https://github.com/Georgeb779/product-feedback-app
```

2. Change into the project directory:

```bash
cd web-app
```

3. Install the required dependencies:

```bash
npm install
```

## Environment Setup and Database Configuration

1. Create a .env file in the root directory of your project and add your database connection string:

```bash
DATABASE_URL="your_database_connection_string_here"
```

2. Run the Prisma migration to create the database schema:

```bash
npx prisma migrate dev
```

3. Generate Prisma Client based on your schema:

```bash
npx prisma generate
```

## Development

To run the development server, run:

```bash
npm run dev
```

The application will be available at http://localhost:3000.

## Building for Production

To create a production build, run:

```bash
npm run build
```

To start the production server, run:

```bash
npm run start
```

## Testing

To run tests in watch mode, use:

```bash
npm run test
```

To run tests in continuous integration mode, use:

```bash
npm run test:ci
```

## Linting

To check for linting issues, run:

```bash
npm run lint
```

## License

This project is open-source and available under the MIT License.

Save the above content in a `README.md` file in the root directory of your project.
