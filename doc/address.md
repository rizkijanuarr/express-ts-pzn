# Address API SPEC

## CREATE ADDRESS

### ![POST](https://img.shields.io/badge/POST-4CAF50?style=for-the-badge) `/api/contacts/:idContact/addresses`

![Header](https://img.shields.io/badge/Request-Header-D32F2F)

X-API-TOKEN : token

![Request](https://img.shields.io/badge/Request-Body-FF9800)

```json
{
  "street": "Jalan Apa",
  "city": "Kota Apa",
  "province": "Provinsi Apa",
  "country": "Negara Apa",
  "postal_code": "23123"
}
```

![Response](https://img.shields.io/badge/Response-Body-FF9800)

![201](https://img.shields.io/badge/201-Created-4CAF50)

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Apa",
    "city": "Kota Apa",
    "province": "Provinsi Apa",
    "country": "Negara Apa",
    "postal_code": "23123"
  }
}
```

![400](https://img.shields.io/badge/400-Failed-F44336)

```json
{
  "errors": "postal_code is required"
}
```

## GET ADDRESS

### ![GET](https://img.shields.io/badge/GET-2196F3?style=for-the-badge) `/api/contacts/:idContact/addresses/:idAddress`

![Header](https://img.shields.io/badge/Request-Header-D32F2F)

X-API-TOKEN : token

![Response](https://img.shields.io/badge/Response-Body-FF9800)

![200](https://img.shields.io/badge/200-OK-4CAF50)

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Apa",
    "city": "Kota Apa",
    "province": "Provinsi Apa",
    "country": "Negara Apa",
    "postal_code": "23123"
  }
}
```

![400](https://img.shields.io/badge/400-Failed-F44336)

```json
{
  "errors": "Address is not found"
}
```

## UPDATE ADDRESS

### ![PUT](https://img.shields.io/badge/PUT-9C27B0?style=for-the-badge) `/api/contacts/:idContact/addresses/:idAddress`

![Header](https://img.shields.io/badge/Request-Header-D32F2F)

X-API-TOKEN : token

![Request](https://img.shields.io/badge/Request-Body-FF9800)

```json
{
  "street": "Jalan Apa",
  "city": "Kota Apa",
  "province": "Provinsi Apa",
  "country": "Negara Apa",
  "postal_code": "23123"
}
```

![Response](https://img.shields.io/badge/Response-Body-FF9800)

![200](https://img.shields.io/badge/200-OK-4CAF50)

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Apa",
    "city": "Kota Apa",
    "province": "Provinsi Apa",
    "country": "Negara Apa",
    "postal_code": "23123"
  }
}
```

![400](https://img.shields.io/badge/400-Failed-F44336)

```json
{
  "errors": "postal_code is required"
}
```

## DELETE ADDRESS

### ![DELETE](https://img.shields.io/badge/DELETE-F44336?style=for-the-badge) `/api/contacts/:idContact/addresses/:idAddress`

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
  "errors": "Address is not found"
}
```

## LIST ADDRESS

### ![GET](https://img.shields.io/badge/GET-2196F3?style=for-the-badge) `/api/contacts/:idContact/addresses`

![Header](https://img.shields.io/badge/Request-Header-D32F2F)

X-API-TOKEN : token

![Response](https://img.shields.io/badge/Response-Body-FF9800)

![200](https://img.shields.io/badge/200-OK-4CAF50)

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jalan Apa",
      "city": "Kota Apa",
      "province": "Provinsi Apa",
      "country": "Negara Apa",
      "postal_code": "23123"
    },
    {
      "id": 2,
      "street": "Jalan Apa",
      "city": "Kota Apa",
      "province": "Provinsi Apa",
      "country": "Negara Apa",
      "postal_code": "23123"
    }
  ]
}
```

![400](https://img.shields.io/badge/400-Failed-F44336)

```json
{
  "errors": "Contact is not found"
}
```
