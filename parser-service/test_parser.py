from app.parsers.csv_parser import CsvParser

parser = CsvParser()

with open("statement.csv", "rb") as file:
    transactions = parser.parse(file)

for transaction in transactions:
    print(transaction.model_dump())