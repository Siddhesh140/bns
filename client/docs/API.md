# API Client Guide

## Overview

The API client (`src/utils/api.js`) provides a centralized HTTP client for backend communication with automatic authentication and error handling.

## Configuration

```javascript
// Environment variable for API URL
VITE_API_URL=http://localhost:3000
```

---

## Usage

```javascript
import api from './utils/api';

// Add a new user
const user = await api.addUser({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+919876543210',
  companyName: 'Tech Corp',
  position: 'Manager'
});

// Get all users
const users = await api.getUsers();

// Update a user
await api.updateUser('user-id', { name: 'Jane Doe' });

// Delete a user
await api.deleteUser('user-id');
```

---

## Methods

### User Endpoints

| Method | Description | Parameters |
|--------|-------------|------------|
| `addUser(userData)` | Create new user | `{name, email, phone, companyName, position}` |
| `getUsers()` | Get all users | - |
| `updateUser(id, data)` | Update user | `id: string`, `data: object` |
| `deleteUser(id)` | Delete user | `id: string` |

### Payment Endpoints

| Method | Description | Parameters |
|--------|-------------|------------|
| `createPaymentOrder(orderData)` | Create payment order | `{userId}` |
| `verifyPayment(paymentData)` | Verify payment | `{razorpayOrderId, razorpayPaymentId, razorpaySignature}` |

### Authentication Helpers

| Method | Description |
|--------|-------------|
| `setToken(token)` | Store JWT in localStorage |
| `getToken()` | Retrieve stored JWT |
| `clearToken()` | Remove stored JWT |
| `getTestToken()` | Get dev test token |

---

## Error Handling

The client automatically handles:

| Status | Behavior |
|--------|----------|
| `401` | Clears token, throws "Authentication required" |
| `429` | Throws "Too many requests" |
| Network error | Throws "Unable to connect to server" |
| Other errors | Throws error message from response |

```javascript
try {
  await api.addUser(userData);
} catch (error) {
  console.error(error.message);
  // "Authentication required" | "Too many requests" | etc.
}
```

---

## Authentication Flow

```javascript
// 1. Token is automatically included in requests
const config = {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  credentials: 'include'
};

// 2. On 401 response, token is automatically cleared
if (response.status === 401) {
  localStorage.removeItem('authToken');
}
```
