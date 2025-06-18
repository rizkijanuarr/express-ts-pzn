# Contact API SPEC

## CREATE CONTACT

### ![POST](https://img.shields.io/badge/POST-4CAF50?style=for-the-badge) `/api/contacts`

![Header](https://img.shields.io/badge/Request-Header-D32F2F)

X-API-TOKEN : token

![Request](https://img.shields.io/badge/Request-Body-FF9800)

```json
{
  "first_name": "Eko Kurniawan",
  "last_name": "Khannedy",
  "email": "eko@example.com",
  "phone": "089999999"
}
```

![Response](https://img.shields.io/badge/Response-Body-FF9800)

![201](https://img.shields.io/badge/201-Created-4CAF50)

```json
{
  "data": {
    "id": 1,
    "first_name": "Eko Kurniawan",
    "last_name": "Khannedy",
    "email": "eko@example.com",
    "phone": "089999999"
  }
}
```

![400](https://img.shields.io/badge/400-Failed-F44336)

```json
{
  "errors": "first_name must not blank, ..."
}
```

## GET CONTACT

### ![GET](https://img.shields.io/badge/GET-2196F3?style=for-the-badge) `/api/contacts/:id`

![Header](https://img.shields.io/badge/Request-Header-D32F2F)

X-API-TOKEN : token

![Response](https://img.shields.io/badge/Response-Body-FF9800)

![200](https://img.shields.io/badge/200-OK-4CAF50)

```json
{
  "data": {
    "id": 1,
    "first_name": "Eko Kurniawan",
    "last_name": "Khannedy",
    "email": "eko@example.com",
    "phone": "089999999"
  }
}
```

![400](https://img.shields.io/badge/400-Failed-F44336)

```json
{
  "errors": "Contact is not found"
}
```

## UPDATE CONTACT

### ![PUT](https://img.shields.io/badge/PUT-9C27B0?style=for-the-badge) `/api/contacts/:id`

![Header](https://img.shields.io/badge/Request-Header-D32F2F)

X-API-TOKEN : token

![Request](https://img.shields.io/badge/Request-Body-FF9800)

```json
{
  "first_name": "Eko Kurniawan",
  "last_name": "Khannedy",
  "email": "eko@example.com",
  "phone": "089999999"
}
```

![Response](https://img.shields.io/badge/Response-Body-FF9800)

![200](https://img.shields.io/badge/200-OK-4CAF50)

```json
{
  "data": {
    "id": 1,
    "first_name": "Eko Kurniawan",
    "last_name": "Khannedy",
    "email": "eko@example.com",
    "phone": "089999999"
  }
}
```

![400](https://img.shields.io/badge/400-Failed-F44336)

```json
{
  "errors": "first_name must not blank, ..."
}
```

## DELETE CONTACT

### ![DELETE](https://img.shields.io/badge/DELETE-F44336?style=for-the-badge) `/api/contacts/:id`

![Header](https://img.shields.io/badge/Request-Header-D32F2F)

X-API-TOKEN : token

![Response](https://img.shields.io/badge/Response-Body-FF9800)

![200](https://img.shields.io/badge/200-OK-4CAF50)

```json
{
  "data": "OK"
}
```

![400](https://img.shields.io/badge/400-Failed-F44336)

```json
{
  "errors": "Contact is not found"
}
```

## SEARCH CONTACT

### ![GET](https://img.shields.io/badge/GET-2196F3?style=for-the-badge) `/api/contacts`

Query Parameter :
- name : string, contact first name or contact last name, optional
- phone : string, contact phone, optional
- email : string, contact email, optional
- page : number, default 1
- size : number, default 10

![Header](https://img.shields.io/badge/Request-Header-D32F2F)

X-API-TOKEN : token

![Response](https://img.shields.io/badge/Response-Body-FF9800)

![200](https://img.shields.io/badge/200-OK-4CAF50)

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Eko Kurniawan",
      "last_name": "Khannedy",
      "email": "eko@example.com",
      "phone": "089999999"
    },
    {
      "id": 2,
      "first_name": "Eko Kurniawan",
      "last_name": "Khannedy",
      "email": "eko@example.com",
      "phone": "089999999"
    }
  ],
  "paging": {
    "current_page": 1,
    "total_page": 10,
    "size": 10
  }
}
```

![400](https://img.shields.io/badge/400-Failed-F44336)

```json
{
  "errors": "Unauthorized"
}
```
