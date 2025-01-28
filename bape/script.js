document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedback-form');
    const questionsList = document.getElementById('questions-list');

    // Загрузка вопросов из localStorage при загрузке страницы
    const loadQuestions = () => {
        const questions = JSON.parse(localStorage.getItem('questions')) || [];
        questions.forEach(question => {
            const questionElement = document.createElement('div');
            questionElement.textContent = question;
            questionsList.appendChild(questionElement);
        });
    };

    loadQuestions();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('user-name').value;
        const question = document.getElementById('user-question').value;

        // Сохранение вопроса в localStorage
        const questions = JSON.parse(localStorage.getItem('questions')) || [];
        questions.push(`${name}: ${question}`);
        localStorage.setItem('questions', JSON.stringify(questions));

        // Добавление вопроса в список на странице
        const questionElement = document.createElement('div');