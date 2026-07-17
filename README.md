# Pocket Ledger

Pocket Ledger is a full-stack personal finance application that helps users track transactions, analyze spending habits, and automatically import bank statements.

The project is built as a multi-service application:

* A **Next.js landing page** for the product website
* A **React dashboard** for managing and visualizing transactions
* A **Firebase Functions backend API** using TypeScript
* A **PostgreSQL database** managed with Prisma ORM
* A **Python parser microservice** for processing CSV and PDF bank statements

The project demonstrates modern software architecture concepts including:

* REST APIs
* TypeScript backend development
* Prisma ORM
* PostgreSQL
* Docker containers
* Microservices
* SOLID principles
* Dependency Injection
* Repository Pattern

# Architecture

```
                    User
                      |
                      |
        +-------------+-------------+
        |                           |
        v                           v

  Next.js Landing              React Dashboard
       |                            |
       |                            |
       |                            |
       +----------------------------+
                    |
                    |
                    v

          Firebase Functions API
              (TypeScript)

                    |
                    |
                    v

              Service Layer

                    |
                    |
                    v

          Repository Layer

                    |
                    |
                    v

              Prisma ORM

                    |
                    |
                    v

             PostgreSQL Database


Dashboard
    |
    |
    +---- CSV/PDF Upload
              |
              v

      Python Parser Service
          (Flask + Docker)
```

# Project Structure

```
pocket-ledger/

├── landing/
│   └── Next.js marketing website
│
├── dashboard/
│   └── React + TypeScript finance dashboard
│
├── functions/
│   └── Firebase Functions backend API
│
├── parser-service/
│   └── Python CSV/PDF parsing microservice
│
├── docker-compose.yml
│   └── PostgreSQL database container
│
└── README.md
```

# Technologies Used

## Frontend

### Landing Page

* Next.js
* TypeScript
* Tailwind CSS
* App Router

### Dashboard

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router
* Recharts

## Backend

* Firebase Cloud Functions
* TypeScript
* Prisma ORM
* PostgreSQL

## Parser Service

* Python
* Flask
* Pydantic
* pdfplumber
* Docker

## Database

* PostgreSQL

# Features

## Transaction Management

Users can:

* View transactions
* Add transactions manually
* Import transactions from statements

## Dashboard

The dashboard provides:

* Transaction table
* Total spending overview
* Spending by category chart
* Monthly spending chart

## Statement Parser

The parser service supports:

* CSV bank statements
* PDF bank statements

It converts uploaded files into structured transactions.

# Backend Architecture

The backend follows a layered architecture:

```
routes/
 |
 v
services/
 |
 v
repositories/
 |
 v
Prisma
 |
 v
PostgreSQL
```

## Routes Layer

Responsible only for:

* Receiving HTTP requests
* Validating input
* Returning responses

## Service Layer

Contains business logic.

Example:

* Transaction rules
* Validation
* Processing

## Repository Layer

Responsible only for database operations.

Prisma imports exist only here.

This keeps the application flexible and allows the database implementation to be replaced later.

# Running the Project

You need to run each service separately.

# 1. Start PostgreSQL Database

From the root folder:

```bash
sudo docker compose up -d
```

Check running containers:

```bash
sudo docker ps
```

# 2. Run Firebase Functions Backend

Go to:

```bash
cd functions
```

Install dependencies:

```bash
npm install
```

Generate Prisma client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

Start Firebase emulator:

```bash
npm run serve
```

The API will run locally through Firebase Emulator.

Example endpoints:

```
POST /addTransaction

GET /listTransactions
```

Example:

```bash
curl http://localhost:<PORT>/listTransactions
```

# 3. Run Parser Service

Go to:

```bash
cd parser-service
```

Create and activate virtual environment:

```bash
python -m venv venv

source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run locally:

```bash
python -m app.main
```

The parser API runs on:

```
http://localhost:8080
```

Test CSV upload:

```bash
curl -F "file=@statement.csv" http://localhost:8080/parse
```

Test PDF upload:

```bash
curl -F "file=@statement.pdf" http://localhost:8080/parse
```

## Running Parser with Docker

Build image:

```bash
sudo docker build -t parser-service .
```

Run container:

```bash
sudo docker run -p 8080:8080 parser-service
```

Run in background:

```bash
sudo docker run -d -p 8080:8080 --name parser parser-service
```

View logs:

```bash
sudo docker logs parser
```

Stop container:

```bash
sudo docker stop parser
```

# 4. Run Dashboard

Go to:

```bash
cd dashboard
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Dashboard runs on:

```
http://localhost:5173
```

# 5. Run Landing Page

Go to:

```bash
cd landing
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Landing page runs on:

```
http://localhost:3000
```

# Environment Variables

Create environment files where required.

Example:

```
DATABASE_URL=postgresql://username:password@localhost:5432/pocketledger
```

# Development Workflow

Start services in this order:

1. Database

```
docker compose up
```

2. Backend API

```
firebase emulator
```

3. Parser service

```
docker container
```

4. Dashboard

```
npm run dev
```

5. Landing page

```
npm run dev
```

# SOLID Principles Applied

## Single Responsibility Principle

Each part has one responsibility:

* Components render UI
* Services contain business logic
* Repositories handle database access

## Dependency Inversion Principle

The service depends on an interface:

```
TransactionRepository
```

instead of directly depending on Prisma.

This allows testing using a fake repository without a database.

## Open/Closed Principle

New parser formats can be added without modifying existing parser logic.

Example:

```
CsvParser
PdfParser
```

can implement the same parser interface.

# Future Improvements

Possible extensions:

* Firebase Authentication
* User accounts
* Budget goals
* Recurring transactions
* More bank formats
* Deployment with Vercel and Firebase
* Mobile application

# License

This project is for learning and portfolio purposes.
