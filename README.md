# Bike Store API 🚴

An Express.js API built with TypeScript and MongoDB using Mongoose to manage a Bike Store. The application handles CRUD operations for bikes, orders, and calculates revenue while ensuring data validation and integrity.

---

## Features 🌟

1. **CRUD Operations for Bikes**:
   - Create, Read, Update, and Delete bikes with proper schema validation.
   - Filter and search bikes based on `name`, `brand`, and `category`.

2. **Order Management**:
   - Place orders for bikes, update inventory automatically, and ensure sufficient stock.
   - Calculate total revenue from all orders using MongoDB aggregation.

3. **Error Handling**:
   - Standardized error responses for validation errors, resource not found, and insufficient stock.
   - Returns a detailed error object with stack traces in development mode.

4. **Data Integrity**:
   - Use of Mongoose schemas to enforce data consistency and validation.
   - Enum validation for bike categories: `Mountain`, `Road`, `Hybrid`, `Electric`.

5. **API Documentation**:
   - Clearly defined API endpoints with request and response formats.

---

## Tech Stack 🛠️

- **Node.js**: Backend runtime.
- **Express.js**: Framework for building RESTful APIs.
- **TypeScript**: For static typing and better development experience.
- **MongoDB**: Database for storing bikes and orders.
- **Mongoose**: ODM for MongoDB with schema validation.

---

## Endpoints 🚀

### **Bike Endpoints**

| Method | Endpoint                  | Description                     |
|--------|---------------------------|---------------------------------|
| POST   | `/api/products`           | Create a new bike.             |
| GET    | `/api/products`           | Get all bikes (optional filters). |
| GET    | `/api/products/:productId` | Get a specific bike by ID.     |
| PUT    | `/api/products/:productId` | Update a bike by ID.           |
| DELETE | `/api/products/:productId` | Delete a bike by ID.           |

### **Order Endpoints**

| Method | Endpoint                  | Description                     |
|--------|---------------------------|---------------------------------|
| POST   | `/api/orders`             | Place an order.                |
| GET    | `/api/orders/revenue`     | Calculate total revenue.       |

---

## Installation and Setup 🛠️

### Prerequisites

- **Node.js** (v16+)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/bike-store-api.git
   cd bike-store-api


Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory and add the following:

env
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=5000
Run the development server:

bash
Copy code
npm run dev
Build for production:

bash
Copy code
npm run build
npm start
Example API Usage 📬
Create a Bike
Request:

bash
Copy code
POST /api/products
Content-Type: application/json

{
  "name": "Xtreme Mountain Bike",
  "brand": "Giant",
  "price": 1200,
  "category": "Mountain",
  "description": "A high-performance bike built for tough terrains.",
  "quantity": 50,
  "inStock": true
}
Response:

json
Copy code
{
  "message": "Bike created successfully",
  "success": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Xtreme Mountain Bike",
    "brand": "Giant",
    "price": 1200,
    "category": "Mountain",
    "description": "A high-performance bike built for tough terrains.",
    "quantity": 50,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
Place an Order
Request:

bash
Copy code
POST /api/orders
Content-Type: application/json

{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 2400
}
Response:

json
Copy code
{
  "message": "Order created successfully",
  "status": true,
  "data": {
    "_id": "648b45f5e1234b56789a6789",
    "email": "customer@example.com",
    "product": "648a45e5f0123c45678d9012",
    "quantity": 2,
    "totalPrice": 2400,
    "createdAt": "2024-11-19T12:00:00.000Z",
    "updatedAt": "2024-11-19T12:00:00.000Z"
  }
}
Testing 🧪
Run tests:

bash
Copy code
npm test
Directory Structure 📂
bash
Copy code
bike-store-api/
├── src/
│   ├── models/       # Mongoose schemas
│   ├── routes/       # Express routes
│   ├── controllers/  # Request handlers
│   ├── app.ts        # Express app configuration
│   ├── server.ts     # Server entry point
├── .env              # Environment variables
├── package.json      # Project metadata
├── tsconfig.json     # TypeScript configuration
Contribution 🤝
Fork the repository.
Create a feature branch: git checkout -b feature-name.
Commit your changes: git commit -m "Add feature".
Push to the branch: git push origin feature-name.
Create a pull request.
