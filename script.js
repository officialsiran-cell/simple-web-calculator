const result = document.getElementById('result');

function appendValue(value) {
    result.value += value;
}

function clearDisplay() {
    result.value = '';
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        // Replace symbols for proper calculation
        let expression = result.value
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/−/g, '-');

        result.value = eval(expression);
    } catch (error) {
        result.value = 'Error';
    }
}
