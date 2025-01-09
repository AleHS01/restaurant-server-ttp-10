# Restaurant Server - TTP Assignment 10

The Restaurant Server application is a Node.js and PostgreSQL-based backend server. It provides endpoints for managing restaurant-related data, enabling users to perform CRUD operations on menu items, customers, employees, and orders. The app also includes advanced queries with table joins to fetch relational data across multiple tables.

## Features

- **Menu Management**: Add, view, and manage menu items.
- **Order Management**: Create and retrieve orders, including relational data with menu items and customers.
- **Customer Management**: Manage customer details like name, phone number, and email.
- **Employee Management**: Manage employee details like name, address, hire date, and position.
- **Advanced Queries**: Fetch relational data using inner joins across tables.
- **Database Integration**: Built with PostgreSQL for structured and relational data storage.


## Tech Stack
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

## Prerequisites

### MAC OS: For this only install **brew**, Install anything below **brew**, through **brew**.
- [brew](https://brew.sh/)
- [node](https://nodejs.org/en)
- [postgresql](https://www.postgresql.org)
  
## Install brew

```bash

bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

```

## Install node

```bash
brew install node
```
## Check npm Version
```bash
npm -v
```
## Installing PostgreSQL
1. Download and install PostgreSQL from the [official website](https://www.postgresql.org/download/).
2. Set up a new user and database during installation or through the PostgreSQL CLI:
   - Create a user and password (make sure to replace your password on the code when connecting to datatabase):  
     ```sql
     CREATE USER postgres WITH PASSWORD 'your_password';
     ```
   - Create a database:  
     ```sql
     CREATE DATABASE restaurantdb;
     ```
   - Grant privileges:  
     ```sql
     GRANT ALL PRIVILEGES ON DATABASE restaurantdb TO postgres;
     ```
---

## Setup
- Clone the repository:

```bash
git clone https://github.com/AleHS01/restaurant-server-ttp-10.git
cd restaurant-server-ttp-10
```
- Install dependecies:
```bash
npm install
```
### Database setup:
- Start PostgreSQL Server in CLI or using a desktop application like [PgAdmin](https://www.pgadmin.org) or [Postico](https://eggerapps.at/postico2/) for Mac
```bash
pg_ctl -D /usr/local/var/postgres start
```

- Use the `psql` CLI to create necessary tables:
```sql
CREATE TABLE menu (
    itemid SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    price NUMERIC(10, 2)
);

CREATE TABLE customer (
    customerid SERIAL PRIMARY KEY,
    name VARCHAR(255),
    phone VARCHAR(20),
    email VARCHAR(255)
);

CREATE TABLE employee (
    employee_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    address TEXT,
    hire_date DATE,
    position VARCHAR(100)
);

CREATE TABLE order_tb (
    orderid SERIAL PRIMARY KEY,
    order_date DATE,
    totalAmount NUMERIC(10, 2),
    customerid INT REFERENCES customer(customerid),
    employee_id INT REFERENCES employee(employee_id),
    itemid INT REFERENCES menu(itemid)
);

```

---


## Run the server
- Start the server
```bash
npm run start
```
- or use a task runner like nodemon for automatic restarts:
```bash
nodemon index.js
```

- Local Backend URL:
```bash
http://localhost:8080
```
---

## API Endpoints

### Menu
- `GET /api/menu`: Retrieve all menu items.
- `POST /api/menu`: Add a new menu item.

### Order
- `GET /api/order`: Retrieve all orders.
- `POST /api/order`: Create a new order.

### Customer
- `GET /api/customer`: Retrieve all customers.
- `POST /api/customer`: Add a new customer.

### Employee
- `GET /api/employee`: Retrieve all employees.
- `POST /api/employee`: Add a new employee.

### Table Joins
- `GET /api/tablejoins`: Join the `menu` and `order_tb` tables.
- `GET /api/tablejoins/two`: Join two tables.
- `GET /api/tablejoins/three`: Join three tables.
- `GET /api/tablejoins/four`: Join all four tables.

---

## Database Schema
<div align="center">
  <img width="500px" src="https://github.com/user-attachments/assets/41eadf92-679f-4129-8b0b-683311e44486">
</div>

