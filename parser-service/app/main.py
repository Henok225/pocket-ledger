from flask import Flask, jsonify, request
from flask_cors import CORS

from app.registry import get_parser

app = Flask(__name__)
CORS(app)
@app.post("/parse")
def parse_statement():

    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]

    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    extension = file.filename.rsplit(".", 1)[-1]

    parser = get_parser(extension)

    if parser is None:
        return jsonify({"error": "Unsupported file type"}), 400

    transactions = parser.parse(file)

    return jsonify(
        [transaction.model_dump(mode="json") for transaction in transactions]
    )

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=6060,
        debug=True
    )