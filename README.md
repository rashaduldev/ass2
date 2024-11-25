# Bike Store API 🚴

An **Express.js API** built with **TypeScript** and **MongoDB**, designed to manage a bike store efficiently. This API enables CRUD operations for bikes, manages orders, calculates revenue, and ensures data validation and integrity.

---

## 🚀 Features

1. **CRUD Operations for Bikes**:
   - Create, Read, Update, and Delete bikes with schema validation.
   - Search and filter bikes by `name`, `brand`, or `category`.

2. **Order Management**:
   - Place orders with automatic inventory updates.
   - Calculate total revenue using MongoDB aggregation.

3. **Error Handling**:
   - Consistent error responses for validation errors and insufficient stock.
   - Detailed error stack traces in development mode.

4. **Data Integrity**:
   - Mongoose schemas for data validation and consistency.
   - Enum validation for categories: `Mountain`, `Road`, `Hybrid`, `Electric`.

5. **API Documentation**:
   - Well-documented endpoints with sample request/response formats.

---

## 🛠️ Tech Stack

- **Node.js**: Runtime environment.
- **Express.js**: Framework for building REST APIs.
- **TypeScript**: Adds static typing.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM for MongoDB.

---

## 📬 API Endpoints

### **Bike Endpoints**

| Method | Endpoint                   | Description                     |
|--------|----------------------------|---------------------------------|
| POST   | `/api/products`            | Create a new bike.             |
| GET    | `/api/products`            | Get all bikes (with filters).  |
| GET    | `/api/products/:productId` | Get a specific bike by ID.     |
| PUT    | `/api/products/:productId` | Update a bike by ID.           |
| DELETE | `/api/products/:productId` | Delete a bike by ID.           |

### **Order Endpoints**

| Method | Endpoint                   | Description                     |
|--------|----------------------------|---------------------------------|
| POST   | `/api/orders`              | Place a new order.             |
| GET    | `/api/orders/revenue`      | Calculate total revenue.       |

---

## 🚀 Getting Started

### **Prerequisites**

- **Node.js** (v16+)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)

### **Setup**

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/bike-store-api.git
   cd bike-store-api


## Install dependencies:

npm install

## 

Build and run for production:

bash
Copy code
npm run build
npm startRun the development server:

npm run dev

## Build and run for production:

npm run build
npm start