import csv

from dateutil import parser as date_parser

from app.categorizer.categorizer import categorize
from app.models import ParsedTransaction
from app.parsers.base import StatementParser


class CsvParser(StatementParser):

    def parse(self, file) -> list[ParsedTransaction]:

        content = file.read().decode("utf-8")

        reader = csv.DictReader(content.splitlines())

        transactions = []

        for row in reader:

            transaction = ParsedTransaction(
                date=date_parser.parse(row["date"]).date(),
                description=row["description"],
                amount=float(row["amount"]),
                category=categorize(row["description"])
            )

            transactions.append(transaction)

        return transactions