# Universities API

A simple REST API for managing university records.  
This API allows users to add, edit, delete, and view universities easily.

## 🌍 Live API

Base URL:

https://universities-api-m9ej.onrender.com

---

## 📌 Features

- Add a new university
- Edit university records
- Delete a university
- View all universities
- RESTful API structure
- JSON responses
- Hosted on Render

---

## 🚀 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Render
- GitHub

---

## 📂 API Endpoints

### Get All Universities

```http
GET /universities
```

Example:

```bash
https://universities-api-m9ej.onrender.com/universities
```

---

### Add a New University

```http
POST /universities
```

Sample Request Body:

```json
{
  "name": "University of Ghana",
  "country": "Ghana",
  "city": "Accra"
}
```

---

### Edit a University

```http
PUT /univers
