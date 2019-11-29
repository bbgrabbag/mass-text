# Mass-Text

## API
All API requests to `/api` endpoints (besides `/api/auth/`) use a Bearer token:
| Header        | Value              
|---------------|---
| Authorization | Bearer `<api-token>` 

#### Authentication

##### `GET /api/auth/link`
Generate Google OAuth Link

```json
{
    "link": "<google oauth>"
}
```

#### Users

##### `GET /api/user/profile`
Returns user info for authenticated user
```json
{
    "_id": "5dca3eb86a972155b0b8b6d6",
    "email": "test@test.com",
    "name": "Benjamin Turner",
    "picture": "http://link-to-pic.png",
    "googleID": "abcdefgh",
    "serviceID": "12345",
    "__v": 0
}
```


