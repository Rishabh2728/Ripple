# Ripple

Ripple is a modern community platform with integrated one-to-one messaging. It combines community discussion, rich posts, voting, profiles, notifications, bookmarks, and real-time private conversations without copying Reddit or WhatsApp.

## Architecture

The repository is organized as a multi-app workspace:

- `mobile/` - Expo React Native mobile app.
- `backend/` - Node.js, Express, MongoDB, Socket.IO API.
- `website/` - React and TailwindCSS marketing/support website.
- `docs/` - product, architecture, and API documentation.

The codebase uses TypeScript across app layers for maintainability, safer API contracts, and production-quality refactoring. The mobile app persists dark mode with AsyncStorage and shares a burgundy-first visual system.

## Features

- Authentication: register, login, JWT sessions, remember login, logout.
- Community: home feed, trending posts, categories, search, infinite scrolling.
- Posts: create, edit, delete, image upload, text posts.
- Voting: upvote and downvote.
- Comments: add comments and delete owned comments.
- Profiles: avatar, username, bio, user posts, edit profile.
- Bookmarks: save posts.
- Notifications: likes and comments.
- Messaging: one-to-one chats, real-time messages, seen status, online status, timestamps, image messages, typing indicator.

## Folder Structure

```text
Ripple/
  backend/
    src/
      app.ts
      server.ts
      config/
      modules/
      shared/
  mobile/
    src/
      app/
      components/
      features/
      navigation/
      services/
      store/
      theme/
  website/
    src/
      components/
      pages/
      styles/
  docs/
```

## Installation

```bash
npm install
cp backend/.env.example backend/.env
cp mobile/.env.example mobile/.env
cp website/.env.example website/.env
```

Run each app:

```bash
npm run dev:backend
npm run dev:mobile
npm run dev:website
```

## API Documentation

Initial API documentation lives in [docs/API.md](docs/API.md). Endpoint-level documentation will be expanded as each feature milestone is implemented.

## Deployment

- Backend: Render.
- Database: MongoDB Atlas.
- Website: Vercel.
- Mobile: Expo Application Services when release configuration is added.

## Future Scope

- Moderation tools for communities.
- Rich notification preferences.
- Advanced post ranking.
- Media processing pipeline.
- Push notifications.
- Full-text search indexing.
