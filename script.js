const container = document.getElementById("text-container");

const lines = [
    { text: "<strong><u>Недвижимость:</u></strong>", tag: true },
    "   -  Экспертиза и управление недвижимыми активами",
    "   -  Участие в электронных торгах (ФЗ №127, ФЗ №159,ФЗ №229)",
    "   -  Readivelopment",
    "   -  Портфельные инвестиции",
    "   -  Франчайзинг",
    "   -  Юридическая экспертиза в области недвижимости",
    "   -  Финансовый анализ и моделирование",
    "   -  Стратегическое планирование и консалтинг",
    "   -  Налоговый консалтинг, выявление и возврат налоговых переплат",
    "",
    { text: "<strong><u>Information Technology:</u></strong>", tag: true },
    "   -  Разработка продуктов любой сложности",
    "   -  Создание инновационных решений",
    "   -  Уникальные AI-решения и профессиональные инструменты для автоматизации и оптимизации бизнес-процессов",
    "   -  Глубокое машинное обучение и компьютерное зрение, ИИ",
    "   -  Лицензирование профессионального программного обеспечения",
    "   -   Оформления подписок на иностранные программные продукты",
    "   -  Разработка систем контроля", 
    "   -  Blockchain and Cryptocurrency - Market Asset Transactions"
];

let currentLine = 0;
let index = 0;

function typeWriter() {
    if (currentLine < lines.length) {
        let line = lines[currentLine];
        if (line.tag) {
            container.innerHTML += line.text;
            container.innerHTML += '<br>';
            currentLine++;
            setTimeout(typeWriter, 250);
            return;
        }

        if (index < line.length) {
            container.innerHTML += line.charAt(index);
            index++;
            setTimeout(typeWriter, 25);
        } else {
            container.innerHTML += '<br>';
            index = 0;
            currentLine++;
            setTimeout(typeWriter, 250);

            // Автоматическая прокрутка вниз
            container.scrollTop = container.scrollHeight;
        }
    }
}

typeWriter();
