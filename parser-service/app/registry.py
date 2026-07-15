from app.parsers.csv_parser import CsvParser
from app.parsers.pdf_parser import PdfParser

PARSERS = {
    "csv": CsvParser(),
    "pdf": PdfParser(),
}


def get_parser(extension: str):
    return PARSERS.get(extension.lower())