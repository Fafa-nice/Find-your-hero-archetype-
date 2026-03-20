import { questions, archetypes } from './data.js';

class OracleTest {
    constructor() {
        this.currentStep = -1; // -1: start screen, 0-29: questions, 30: result
        this.scores = { A: 0, B: 0, C: 0, D: 0 };
        
        this.dom = {
            screenStart: document.getElementById('screen-start'),
            screenQuestion: document.getElementById('screen-question'),
            screenResult: document.getElementById('screen-result'),
            btnStart: document.getElementById('btn-start'),
            btnRestart: document.getElementById('btn-restart'),
            questionText: document.getElementById('question-text'),
            optionsContainer: document.getElementById('options-container'),
            progressBar: document.getElementById('progress-bar'),
            progressIndicator: document.getElementById('progress-indicator')
        };

        this.initEvents();
    }

    initEvents() {
        this.dom.btnStart.addEventListener('click', () => this.startTest());
        this.dom.btnRestart.addEventListener('click', () => this.resetTest());
    }

    switchScreen(hideEl, showEl, callback) {
        hideEl.classList.remove('active');
        setTimeout(() => {
            hideEl.style.display = 'none';
            showEl.style.display = 'flex';

            void showEl.offsetWidth;
            showEl.classList.add('active');
            if (callback) callback();
        }, 400); // matches CSS transition time
    }

    startTest() {
        this.currentStep = 0;
        this.scores = { A: 0, B: 0, C: 0, D: 0 };
        this.switchScreen(this.dom.screenStart, this.dom.screenQuestion, () => this.renderQuestion());
    }

    resetTest() {
        this.currentStep = -1;
        this.switchScreen(this.dom.screenResult, this.dom.screenStart, () => {
            this.dom.progressIndicator.textContent = "序章 / 起源";
        });
    }

    renderQuestion() {
        if (this.currentStep >= questions.length) {
            this.showResult();
            return;
        }

        const q = questions[this.currentStep];
        this.dom.progressIndicator.textContent = `启示 ${this.currentStep + 1} / ${questions.length}`;
        this.dom.progressBar.style.width = `${((this.currentStep) / questions.length) * 100}%`;
        

        this.dom.questionText.style.opacity = 0;
        this.dom.optionsContainer.style.opacity = 0;

        setTimeout(() => {
            this.dom.questionText.textContent = q.text;
            this.dom.optionsContainer.innerHTML = '';
            
            q.options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.textContent = opt.text;
                btn.onclick = () => this.handleAnswer(opt.type);
                this.dom.optionsContainer.appendChild(btn);
            });

            this.dom.questionText.style.opacity = 1;
            this.dom.optionsContainer.style.opacity = 1;
            this.dom.questionText.style.transition = 'opacity 0.3s ease';
            this.dom.optionsContainer.style.transition = 'opacity 0.3s ease';
        }, 300);
    }

    handleAnswer(type) {
        if(this.scores[type] !== undefined) {
            this.scores[type]++;
        }
        this.currentStep++;
        this.renderQuestion();
    }

    showResult() {
        this.dom.progressBar.style.width = '100%';
        this.dom.progressIndicator.textContent = "终章 / 宿命";

        let maxScore = -1;
        let finalType = 'A';

        for (const [type, score] of Object.entries(this.scores)) {
            if (score > maxScore) {
                maxScore = score;
                finalType = type;
            }
        }

        const result = archetypes[finalType];
        document.getElementById('result-title').textContent = result.title;
        document.getElementById('result-desc').textContent = result.desc;

        this.switchScreen(this.dom.screenQuestion, this.dom.screenResult);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new OracleTest();
});
