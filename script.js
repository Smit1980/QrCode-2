let currentLine = 0;
let index = 0;
let isTag = false;

function typeWriter() {
    if (currentLine < lines.length) {
        let line = lines[currentLine];
        if (typeof line === 'object') {
            container.innerHTML += line.tag;
            line = line.text;
        }

        if (index < line.length) {
            container.innerHTML += line.charAt(index);
            index++;
            setTimeout(typeWriter, 25);
        } else {
            if (typeof lines[currentLine] === 'object') {
                container.innerHTML += "</u></strong>";
            }
            container.innerHTML += '<br>';
            index = 0;
            currentLine++;
            setTimeout(typeWriter, 250);

            // Автоматическая прокрутка
            container.scrollTop = container.scrollHeight;
        }
    }
}

typeWriter();

