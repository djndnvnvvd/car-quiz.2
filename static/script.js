document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const submitBtn = document.getElementById('submit-btn');
    const resultDiv = document.getElementById('result');
    let quizData = [];

    // Fetch quiz questions from backend
    fetch('/quiz')
        .then(res => res.json())
        .then(data => {
            quizData = data;
            renderQuiz();
        });

    function renderQuiz() {
        quizContainer.innerHTML = '';
        quizData.forEach(q => {
            const div = document.createElement('div');
            div.classList.add('question');

            const questionTitle = document.createElement('h3');
            questionTitle.textContent = q.question;
            div.appendChild(questionTitle);

            const optionsDiv = document.createElement('div');
            optionsDiv.classList.add('options');

            q.options.forEach(option => {
                const label = document.createElement('label');
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `question-${q.id}`;
                input.value = option;
                label.appendChild(input);
                label.appendChild(document.createTextNode(option));
                optionsDiv.appendChild(label);
            });

            div.appendChild(optionsDiv);
            quizContainer.appendChild(div);
        });
    }

    submitBtn.addEventListener('click', () => {
        const answers = {};

        quizData.forEach(q => {
            const selected = document.querySelector(`input[name=question-${q.id}]:checked`);
            if (selected) {
                answers[q.id] = selected.value;
            }
        });

        fetch('/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(answers)
        })
        .then(res => res.json())
        .then(data => {
            resultDiv.textContent = `You scored ${data.score} out of ${data.total}!`;
        });
    });
});
