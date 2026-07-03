# Ripple API

Base path: `/api/v1`

## Health

### `GET /health`

Returns API status.

```json
{
  "status": "ok",
  "service": "ripple-api"
}
```

## Planned Modules

- Auth: register, login, logout, current user.
- Users: profile, avatar upload, profile updates.
- Posts: feed, create, edit, delete, image upload.
- Comments: create, list, delete owned comments.
- Votes: upvote, downvote, remove vote.
- Bookmarks: save and unsave posts.
- Notifications: list and mark read.
- Chats: conversation list and one-to-one chat creation.
- Messages: send, list, seen status, image messages.

## Auth

### `POST /auth/register`

Creates a user account and returns a JWT access token.

Request:

```json
{
  "username": "rishabh_2728",
  "email": "rishabh@example.com",
  "password": "Password123"
}
```

Response `201`:

```json
{
  "token": "jwt-access-token",
  "user": {
    "id": "mongo-id",
    "username": "rishabh_2728",
    "email": "rishabh@example.com",
    "avatarUrl": null,
    "bio": "",
    "createdAt": "2026-07-03T00:00:00.000Z",
    "updatedAt": "2026-07-03T00:00:00.000Z"
  }
}
```

### `POST /auth/login`

Authenticates an existing user.

Request:

```json
{
  "email": "rishabh@example.com",
  "password": "Password123",
  "rememberMe": true
}
```

Response `200`: same shape as register.

### `GET /auth/me`

Returns the authenticated user.

Headers:

```text
Authorization: Bearer <jwt-access-token>
```

Response `200`:

```json
{
  "user": {
    "id": "mongo-id",
    "username": "rishabh_2728",
    "email": "rishabh@example.com",
    "avatarUrl": null,
    "bio": "",
    "createdAt": "2026-07-03T00:00:00.000Z",
    "updatedAt": "2026-07-03T00:00:00.000Z"
  }
}
```

### `POST /auth/logout`

Client-side JWT logout endpoint. The mobile app deletes its stored token after this call.

Headers:

```text
Authorization: Bearer <jwt-access-token>
```

Response `204`: empty body.
