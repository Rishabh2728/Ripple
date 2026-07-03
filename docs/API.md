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

- Auth: register, login, refresh session, logout, current user.
- Users: profile, avatar upload, profile updates.
- Posts: feed, create, edit, delete, image upload.
- Comments: create, list, delete owned comments.
- Votes: upvote, downvote, remove vote.
- Bookmarks: save and unsave posts.
- Notifications: list and mark read.
- Chats: conversation list and one-to-one chat creation.
- Messages: send, list, seen status, image messages.
