# Foodies 🍽️

A modern food-sharing web application built with Next.js, TypeScript, Tailwind CSS, and SQLite.

🌐 **Live Demo**
**Preview:** https://your-app-url.com/

---

## Overview

Foodies is a community-driven recipe platform where users can discover meals from around the world and share their own recipes with others.

The application provides a clean, modern, and responsive experience that allows visitors to browse meals, view detailed recipes, and contribute new dishes to the community.

For simplicity and lightweight data management, the application uses a **SQLite database** to store meal information and recipe metadata. Uploaded food images are stored in the application's public images directory, while image paths and recipe details are stored in the database.

---

## Features

### 🏠 Home Page

The home page includes:

* Food image slider showcasing delicious meals.
* Hero banner section with call-to-action buttons.
* Responsive design optimized for desktop and mobile devices.
* Modern food-themed user interface built with Tailwind CSS.

---

### 🍛 Browse Meals

Users can browse all available recipes shared on the platform.

Each meal card displays:

* Meal image
* Meal title
* Creator name
* Short summary
* View Details button

Features include:

* Responsive card grid layout
* Hover animations
* Optimized image rendering using Next.js Image component
* Fast page loading and navigation

---

### 📖 Meal Details

Clicking on a meal opens a dedicated details page containing complete recipe information.

Meal model:

```typescript
export interface Meal {
  title: string;
  slug: string;
  image: string;
  summary: string;
  cooking_instructions: string;
  creator: string;
  creator_email: string;
}
```

Displayed information:

* Featured food image
* Meal title
* Creator name
* Creator email (clickable mailto link)
* Recipe summary
* Detailed cooking instructions

---

### ➕ Share Meal

Visitors can contribute their own recipes using the Share Meal page.

The form contains:

* Your Name
* Your Email
* Meal Title
* Short Summary
* Cooking Instructions
* Food Image Upload

Features:

* Custom image picker
* Image preview before submission
* Responsive form layout
* User-friendly validation

---

## Image Upload Process

When a user uploads a recipe image:

1. The user selects an image from their device.
2. A preview is displayed instantly.
3. The image is stored inside the application's public images folder.
4. The image path is saved in the database.
5. The recipe becomes publicly visible on the Browse Meals page.

Example:

```text
/public/images/burger.jpg
```

Stored in database:

```text
/images/burger.jpg
```

---

## User Workflow

### Browse Recipes

1. Open the application.
2. Navigate to Browse Meals.
3. Explore available recipes.
4. Click a meal card.
5. View complete recipe details.

### Share a Recipe

1. Navigate to Share Meal.
2. Enter recipe information.
3. Upload a food image.
4. Submit the form.
5. Recipe is stored in the database.
6. Uploaded image is saved in the public images folder.
7. Recipe becomes visible to all users on the Browse Meals page.

---

## Technology Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js Server Actions
* Node.js
* Database Integration

### Image Handling

* Next.js Image Component
* File Upload Support
* Image Preview Functionality

---

## Project Structure

```text
app/
├── page.tsx
├── not-found.tsx
├── meals/
│   ├── page.tsx
│   ├── share/
│   │   └── page.tsx
│   └── [slug]/
│       └── page.tsx
│
components/
├── header/
├── banner/
├── meals/
├── image-picker/
│
lib/
├── meals.ts
│
public/
└── images/
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Future Enhancements

* Authentication and user accounts
* Recipe categories
* Search and filtering
* Favorites and bookmarks
* Ratings and reviews
* Pagination
* Admin moderation panel
* Cloud image storage support

---

## License

This project was built for learning and demonstration purposes using Next.js, TypeScript, and Tailwind CSS.
