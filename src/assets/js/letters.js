const string = 'hauswien';

const letters = string.split('');

const file = (letter, i = 0) => {
    return `./letters/${letter}/${i}.svg`;
}

export const launchLetters = (gridElement = null) => {
    gridElement = document.querySelector(gridElement);
    gridElement.innerHTML = '';
    letters.forEach(letter => {
        let url = file(letter, Math.floor(Math.random() * 2) + 1)
        let svg = document.createElement('img');
        svg.src = url;
        gridElement.appendChild(svg);
    })
}