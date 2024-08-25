document.addEventListener("DOMContentLoaded", () => {
    const runButton = document.getElementById("run-code");
    const codeInput = document.getElementById("code-input");
    const statusElement = document.getElementById("status");
    const getHintButton = document.getElementById("get-hint");
    const hintElement = document.getElementById("hint");
    const levelInfo = document.getElementById("level-info");

    // Підказки для різних завдань
    const hints = {
        level1: [
            "Подумайте про те, як створити змінну в JavaScript.",
            "Використовуйте ключове слово 'let' або 'const', щоб оголосити змінну.",
            "Не забудьте про правильний синтаксис для виведення тексту на екран."
        ],
        level2: [
            "Вам потрібно використовувати умовні оператори для перевірки умови.",
            "Згадайте, як використовувати 'if' і 'else'.",
            "Не забудьте про правильний синтаксис для умовних виразів."
        ]
        // Додайте інші рівні та підказки за потреби
    };

    // Інформація про рівні
    const levelInfoText = {
        level1: {
            title: "Рівень 1: Основи змінних",
            description: "Змінна — це контейнер для зберігання даних. В JavaScript змінні можна оголосити за допомогою ключових слів 'let', 'const' або 'var'.",
            example: "```javascript\nlet greeting = 'Привіт, Світ!';\nconsole.log(greeting);\n```"
        },
        level2: {
            title: "Рівень 2: Умовні оператори",
            description: "Умовні оператори дозволяють виконувати код в залежності від певної умови. Використовуйте оператори 'if', 'else if' і 'else'.",
            example: "```javascript\nlet number = 10;\nif (number > 5) {\n    console.log('Число більше 5');\n} else {\n    console.log('Число 5 або менше');\n}\n```"
        }
        // Додайте іншу інформацію про рівні за потреби
    };

    let currentLevel = 'level1'; // Поточний рівень завдання

    // Функція для оновлення інформації про рівень
    function updateLevelInfo() {
        const info = levelInfoText[currentLevel];
        levelInfo.innerHTML = `
            <h2>${info.title}</h2>
            <p>${info.description}</p>
            <p><strong>Приклад:</strong></p>
            <pre><code>${info.example}</code></pre>
        `;
    }

    // Функція для отримання підказки
    function getHint() {
        const levelHints = hints[currentLevel];
        const hintIndex = Math.floor(Math.random() * levelHints.length);
        hintElement.textContent = levelHints[hintIndex];
    }

    // Подія для кнопки отримання підказки
    getHintButton.addEventListener("click", getHint);

    // Функція для перевірки коду
    function checkCode() {
        const userCode = codeInput.value;
        try {
            const expectedResult = "Привіт, Світ!";
            const result = eval(userCode);

            if (result === expectedResult) {
                statusElement.textContent = "Правильно! Ви виконали завдання.";
            } else {
                statusElement.textContent = "Неправильно. Спробуйте ще раз.";
            }
        } catch (error) {
            statusElement.textContent = `Помилка: ${error.message}`;
        }
    }

    runButton.addEventListener("click", checkCode);

    // Оновлення інформації про рівень при завантаженні
    updateLevelInfo();
});
