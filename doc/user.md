# User API SPEC

## Register User

### ![POST](https://img.shields.io/badge/POST-4CAF50?style=for-the-badge) `/api/users`

![Request](https://img.shields.io/badge/Request-Body-FF9800)

```json
{
  "username": "khannedy",
  "password": "rahasia",
  "name": "Eko Khannedy"
}
```

![Response](https://img.shields.io/badge/Response-Body-FF9800)

![201](https://img.shields.io/badge/201-Created-4CAF50)

```json
{
  "data": {
    "username": "khannedy",
    "name": "Eko Khannedy"
  }
}
```

![400](https://img.shields.io/badge/400-Failed-F44336)

```json
{
  "errors": "Username must not blank, ..."
}
```

## Login User

### ![POST](https://img.shields.io/badge/POST-4CAF50?style=for-the-badge) `/api/users/login`

![Request](https://img.shields.io/badge/Request-Body-FF9800)

```json
{
  "username": "khannedy",
  "password": "rahasia"
}
```

![Response](https://img.shields.io/badge/Response-Body-FF9800)

![200](https://img.shields.io/badge/200-OK-4CAF50)

```json
{
  "data": {
    "username": "khannedy",
    "name": "Eko Khannedy",
    "token": "uuid"
  }
}
```

![400](https://img.shields.io/badge/400-Failed-F44336)

```json
{
  "errors": "Username or password wrong, ..."
}
```

## GET USER

### ![GET](https://img.shields.io/badge/GET-2196F3?style=for-the-badge) `/api/users/current`

![Header](https://img.shields.io/badge/Request-Header-D32F2F)

X-API-TOKEN : token

![Response](https://img.shields.io/badge/Response-Body-FF9800)

![200](https://img.shields.io/badge/200-OK-4CAF50)

```json
{
  "data": {
    "username": "khannedy",
    "name": "Eko Khannedy"
  }
}
```

![401](https://img.shields.io/badge/401-Unauthorized-F44336)

```json
{
  "errors": "Unauthorized, ..."
}
```

## PATCH USER

### ![PATCH](https://img.shields.io/badge/PATCH-9C27B0?style=for-the-badge) `/api/users/current`

![Header](https://img.shields.io/badge/Request-Header-D32F2F)

X-API-TOKEN : token

![Request](https://img.shields.io/badge/Request-Body-FF9800)

```json
{
  "password": "rahasia", // tidak wajib
  "name": "Eko Khannedy" // tidak wajib
}
```

![Response](https://img.shields.io/badge/Response-Body-FF9800)

![200](https://img.shields.io/badge/200-OK-4CAF50)

```json
{
  "data": {
    "username": "khannedy",
    "name": "Eko Khannedy"
  }
}
```

![401](https://img.shields.io/badge/401-Unauthorized-F44336)

```json
{
  "errors": "Unauthorized, ..."
}
```

## LOGOUT USER

### ![DELETE](https://img.shields.io/badge/DELETE-F44336?style=for-the-badge) `/api/users/current`

![Header](https://img.shields.io/badge/Request-Header-D32F2F)

X-API-TOKEN : token

![Response](https://img.shields.io/badge/Response-Body-FF9800)

![200](https://img.shields.io/badge/200-OK-4CAF50)

```json
{
  "data": "OK"
}
```

![401](https://img.shields.io/badge/401-Unauthorized-F44336)

```json
{
  "errors": "Unauthorized, ..."
}
```
