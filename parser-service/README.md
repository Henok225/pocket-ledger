# Parser Service

A lightweight statement parsing microservice built with **Python, Flask, Pydantic, and Docker**.

The service accepts bank statements in different formats (CSV and PDF) and converts them into structured, validated transactions with automatic categorization.

The architecture is designed around the **SOLID principles**, making it easy to add support for new statement formats without modifying existing business logic.

---

## Features

* Parse CSV bank statements
* Parse PDF bank statements
* Validate transaction data using Pydantic
* Automatic transaction categorization
* Config-driven categorization rules
* Extensible parser architecture
* Dockerized deployment
* REST API endpoint for file uploads

---

## Tech Stack

### Backend

* **Python 3.9+**
* **Flask** — REST API framework
* **Pydantic** — Data validation and serialization
* **python-dateutil** — Date parsing
* **pdfplumber** — PDF text extraction
* **Gunicorn** — Production WSGI server

### DevOps

* **Docker** — Containerization

---

# Architecture

The service follows a layered architecture:

```
                 HTTP Request
                      |
                      v
              Flask API Endpoint
                      |
                      v
              Parser Registry
                      |
                      v
            StatementParser Interface
                 /            \
                /              \
               v                v
          CsvParser         PdfParser
               \              /
                \            /
                 v          v
             ParsedTransaction
                      |
                      v
                 JSON Response
```

---

# SOLID Design

## Single Responsibility Principle (SRP)

Each module has one responsibility:

```
app/
├── main.py              -> HTTP handling
├── models.py            -> Data models
├── categorizer/         -> Categorization logic
├── parsers/             -> Statement parsing
└── registry.py          -> Parser selection
```

---

## Open/Closed Principle (OCP)

The system is open for extension but closed for modification.

Adding a new parser does not require changing the API endpoint.

Example:

```
StatementParser
        |
        +-- CsvParser
        |
        +-- PdfParser
        |
        +-- ExcelParser (future)
```

Only a new parser implementation and registration are required.

---

## Parser Interface

All parsers implement:

```python
parse(file) -> list[ParsedTransaction]
```

The Flask endpoint does not know whether it is processing CSV or PDF.

It only communicates with the parser abstraction.

---

# Project Structure

```
parser-service/
│
├── app/
│   ├── main.py
│   ├── models.py
│   ├── registry.py
│   │
│   ├── parsers/
│   │   ├── base.py
│   │   ├── csv_parser.py
│   │   └── pdf_parser.py
│   │
│   └── categorizer/
│       └── categorizer.py
│
├── requirements.txt
├── Dockerfile
├── .dockerignore
├── .gitignore
└── README.md
```

---

# Installation

## 1. Clone the repository

```bash
git clone <repository-url>

cd parser-service
```

---

## 2. Create a virtual environment

Create:

```bash
python -m venv venv
```

Activate it:

### Linux/macOS

```bash
source venv/bin/activate
```

### Windows

```bash
venv\Scripts\activate
```

---

## 3. Install dependencies

```bash
pip install -r requirements.txt
```

---

# Running Locally

Start the Flask server:

```bash
python -m app.main
```

The API will run on:

```
http://localhost:8080
```

---

# API Usage

## Parse a statement

Endpoint:

```
POST /parse
```

Request:

```bash
curl -F "file=@statement.csv" http://localhost:8080/parse
```

or:

```bash
curl -F "file=@statement.pdf" http://localhost:8080/parse
```

---

# Example Input

CSV:

```csv
date,description,amount
2026-07-01,Albert Heijn,25.50
2026-07-02,Shell,60.00
2026-07-03,Coffee Shop,5.20
```

---

# Example Response

```json
[
  {
    "date": "2026-07-01",
    "description": "Albert Heijn",
    "amount": 25.50,
    "category": "groceries"
  },
  {
    "date": "2026-07-02",
    "description": "Shell",
    "amount": 60.00,
    "category": "transport"
  },
  {
    "date": "2026-07-03",
    "description": "Coffee Shop",
    "amount": 5.20,
    "category": "other"
  }
]
```

---

# Categorization

Categories are controlled through configuration rules.

Example:

```python
{
    "groceries": [
        "albert heijn",
        "jumbo"
    ],
    "transport": [
        "shell",
        "ns"
    ]
}
```

Adding a new category does not require changing the parsing code.

---

# Running with Docker

## Build the image

From the project root:

```bash
docker build -t parser-service .
```

---

## Run the container

```bash
docker run -p 8080:8080 parser-service
```

The service is now available at:

```
http://localhost:8080
```

---

## Test Docker deployment

```bash
curl -F "file=@statement.csv" http://localhost:8080/parse
```

---

# Docker Architecture

The Docker container contains:

```
Docker Container
│
├── Python Runtime
├── Dependencies
├── Flask Application
└── Gunicorn Server
```

The local virtual environment is not copied into Docker.

Dependencies are installed from:

```
requirements.txt
```

---

# Future Improvements

Possible extensions:

* Support more bank formats
* OCR support for scanned PDFs
* Database storage
* Authentication
* Background processing
* Automated tests with pytest
* CI/CD pipeline

---

# License

This project is for educational and demonstration purposes.
