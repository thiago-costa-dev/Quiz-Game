const questionParagraph = document.querySelector('#question');

class Question {
    constructor(number, questionText, a, b, c, d, answerId) {
        this.number = number;
        this.questionText = questionText;
        this.choices = [a, b, c, d];
        this.answerId = answerId;
    };

    putQuestionInDom() {
        const strongNumber = document.createElement('strong');
        strongNumber.innerText = `${this.number}) `;

        const questionTextNode = document.createTextNode(this.questionText);

        questionParagraph.innerHTML = '';
        questionParagraph.appendChild(strongNumber);
        questionParagraph.appendChild(questionTextNode);

        const label1 = document.querySelector('#l-01');
        const label2 = document.querySelector('#l-02');
        const label3 = document.querySelector('#l-03');
        const label4 = document.querySelector('#l-04');

        label1.innerText = this.choices[0];
        label2.innerText = this.choices[1];
        label3.innerText = this.choices[2];
        label4.innerText = this.choices[3];
    };

    answerQuestion() {
        if (document.getElementById(this.answerId).checked) return true;
        return false;
    };

    uncheckRadioButton() {
        document.getElementById(this.answerId).checked = false;
    };
};

function arrayQuestions() {
    const question1 = new Question(
        1,
        '2 + 2 = ?',
        1,
        2,
        4,
        0,
        'c-03'
    );

    const question2 = new Question(
        2,
        'Who discovered the America?',
        'Christopher Columbus',
        'Pedro Alveres Cabral',
        'Isaac Newton',
        'Bjarni Herjolfsson',
        'c-04'
    );

    const question3 = new Question(
        3,
        '5 * 3 = ?',
        10,
        15,
        30,
        8,
        'c-02'
    );

    return [question1, question2, question3];
};

function wrongAnswer() {
    errorParagraph = document.querySelector('#error');

    errorParagraph.classList.add('active');
    setTimeout(() => {
        errorParagraph.classList.remove('active');
    }, 2000);
};

const questions = arrayQuestions();
questions[0].putQuestionInDom();
let currentQuestionIndex = 0;

const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', submitAnswer);

function submitAnswer() {
    if (questions[currentQuestionIndex].answerQuestion()) {

        questions[currentQuestionIndex].uncheckRadioButton();

        currentQuestionIndex++;
        try {
            questions[currentQuestionIndex].putQuestionInDom();
        } catch(e) {
            window.location.href = '../index.html';
        };

    } else {
        wrongAnswer();
    };
};