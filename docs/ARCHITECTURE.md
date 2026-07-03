# Ripple Architecture

Ripple uses a feature-first architecture in each app.

## Backend

The backend is an Express API with MongoDB through Mongoose. Runtime boundaries are grouped by feature under `src/modules`, while cross-cutting code lives under `src/shared`.

Core backend concerns:

- Request validation at route boundaries.
- JWT authentication middleware.
- Centralized error handling.
- Cloudinary-backed media upload with Multer.
- Socket.IO gateway for presence, typing, seen status, and one-to-one messaging.

## Mobile

The mobile app is an Expo React Native app. It uses React Navigation for flows, Redux Toolkit for durable UI/session state, React Query for server state, Axios for API calls, AsyncStorage for persisted auth/theme, and React Hook Form for forms.

## Website

The website is a React app styled with TailwindCSS and intended for Vercel deployment.

## Design System

Ripple uses burgundy `#800020` as the primary brand color, white as the default light background, and a dark mode built around `#111111` surfaces and `#1E1E1E` cards.
