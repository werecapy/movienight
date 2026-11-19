const button = document.getElementById('generate-button');
const output = document.getElementById('output');

button.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    output.textContent = `Generated Number: ${randomNumber}`;
});