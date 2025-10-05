from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "Car Personality Quiz Backend Running"})

@app.route('/quiz')
def quiz():
    questions = [
        {"id": 1, "question": "Do you prefer speed or comfort?"},
        {"id": 2, "question": "How often do you travel long distances?"},
        {"id": 3, "question": "What kind of environment do you like driving in?"},
        {"id": 4, "question": "Do you care more about fuel efficiency or power?"},
        {"id": 5, "question": "Do you like modern tech features in cars?"}
    ]
    return jsonify(questions)

if __name__ == '__main__':
    app.run(debug=True)
