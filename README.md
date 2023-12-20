# Ads Dashboard

## Project Overview

**Ads Dashboard** is a React and TypeScript-based dashboard application with an elegant design and smooth transitions. It utilizes various technologies and React libraries to create a feature-rich platform for managing advertisements.

## Technologies Used

- **NextJs:** A React FrameWork to build production ready apps.
- **TypeScript:** A statically typed superset of JavaScript.
- **Material-UI (MUI):** A popular React UI framework.
- **React-Router-Dom:** A library for handling routing in React applications.
- **AGGrid:** A powerful data grid component for React.
- **Framer Motion:** A motion library for React that adds smooth animations and transitions.
- **Formik:** A form management library for React applications.
- **Yup:** A JavaScript schema validation library.

## Features

### 1. Lazy Loading

- The application optimizes performance by using lazy loading, taking care of suspension and handling 404 errors gracefully.

### 2. Reusable Generic Components

- A range of reusable generic components is designed and implemented, including a Standard Dashboard, Standard Button, and more, used throughout the application.

### 3. Page Transition Effect

- Smooth user experiences are achieved by adding page transition effects using Framer Motion.

### 4. Form Validation

- Forms are validated using Formik and Yup, providing a flexible and easily modifiable approach to form validation.

### 5. Clean Code Architecture

- The codebase follows a clean code architecture, making it easy to read and modify.

### Additional Features:

- Top navigation with options for "Dashboard" and "Create Ad."
- Tables support sorting options (High to Low and Low to High).
- A toggle for Ads Insights displays a doughnut chart and table.
- A dropdown for matrices in Ads Insights allows users to select a metric and display data in the doughnut chart.
- Based on checkboxes (Text Ad and/or Media Ad), the app redirects to the Fill Data page and displays respective inputs.
- After submitting the form, there's a redirect to "Ads Submitted," a 0.6-second wait, and a final redirect to the "Create Ads" page.

## Installation and Usage

1. Clone this repository.

2. Install the required dependencies:

## Installation and Usage

1. Clone this repository.

2. Install the required dependencies:

   ```
    npm install
   ```

3. Start the development server f:
   ```
   npm run dev
   ```
