# Users Info Next.js Application

## Project Overview

This Next.js application showcases user information fetched from an external API. It demonstrates the use of Next.js 15 features, including the app router and server-side rendering with server components, along with the integration of shadcn UI components.

## Key Features

- Fetches user data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- Displays a list of users with their basic information
- Provides detailed user profiles with additional data
- Implements a search functionality to filter users by name or email
- Utilizes Next.js 15 app router for efficient routing
- Employs server-side rendering and server components for improved performance and SEO
- Integrates shadcn UI components for a modern and consistent user interface

## Technologies Used

- Next.js 15
- React
- Tailwind CSS for styling
- TypeScript for type-safe code
- shadcn UI for pre-built, customizable components

## Project Structure

- `app/`: Contains the main application code
  - `page.tsx`: Home page component
  - `users/[id]/page.tsx`: Dynamic route for individual user profiles
- `components/`: Reusable React components, including shadcn UI components
- `lib/`: Utility functions and type definitions
- `public/`: Static assets

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Data Fetching

This project utilizes server-side rendering and server components for data fetching, leveraging the latest features of Next.js 15. This approach provides better performance and SEO benefits compared to client-side fetching.

## UI Components

The application uses shadcn UI components, which offer a set of pre-built, customizable React components. These components enhance the overall look and feel of the application while maintaining consistency and accessibility.
