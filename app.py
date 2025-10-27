from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Sample quiz data
quiz_questions = [
    {
        "id": 1,
        "question": "Which car brand has a prancing horse logo?",
        "options": ["Ford", "Ferrari", "Toyota", "BMW"],
        "answer": "Ferrari"
    },
    {
        "id": 2,
        "question": "What does 'SUV' stand for?",
        "options": ["Super Utility Vehicle", "Sport Utility Vehicle", "Safe Urban Vehicle", "Speed Utility Vehicle"],
        "answer": "Sport Utility Vehicle"
    },
    {
        "id": 3,
        "question": "Which car company produces the Model S?",
        "options": ["Tesla", "Nissan", "Chevrolet", "Honda"],
        "answer": "Tesla"
    }
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/quiz')
def get_quiz():
    # Send questions without answers to frontend
    quiz_no_answers = [
        {
            "id": q["id"],
            "question": q["question"],
            "options": q["options"]
        }
        for q in quiz_questions
    ]
    return jsonify(quiz_no_answers)

@app.route('/submit', methods=['POST'])
def submit_answers():
    user_answers = request.json  # Expects {question_id: selected_option}
    score = 0
    total = len(quiz_questions)

    for q in quiz_questions:
        qid = str(q["id"])
        if qid in user_answers and user_answers[qid] == q["answer"]:
            score += 1

    return jsonify({"score": score, "total": total})

if __name__ == '__main__':
    app.run(debug=True)
