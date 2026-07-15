import pdfplumber
from dateutil import parser as date_parser

from app.categorizer.categorizer import categorize
from app.models import ParsedTransaction
from app.parsers.base import StatementParser


class PdfParser(StatementParser):

    def parse(self, file) -> list[ParsedTransaction]:

        transactions = []

        with pdfplumber.open(file) as pdf:

            for page in pdf.pages:

                text = page.extract_text()

                if not text:
                    continue

                lines = text.splitlines()

                for line in lines:

                    parts = line.split()

                    if len(parts) < 3:
                        continue

                    try:

                        date = date_parser.parse(parts[0]).date()

                        amount = float(parts[-1])

                        description = " ".join(parts[1:-1])

                        transaction = ParsedTransaction(
                            date=date,
                            description=description,
                            amount=amount,
                            category=categorize(description)
                        )

                        transactions.append(transaction)

                    except Exception:
                        continue

        return transactions