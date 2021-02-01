const string = 'hauswien';
const numberOfFiles = 4;

const letters = string.split('');

const file = (letter, i = 0) => {
    return `./letters/${letter}/${i}.svg`;
}

export const launchLetters = (gridElement = null, interval = 0) => {
    let objectsToAppend = [];
    let appendIndex = 0;
    gridElement = document.querySelector(gridElement);
    gridElement.innerHTML = '';
    letters.forEach(letter => {
        let url = file(letter, Math.floor(Math.random() * numberOfFiles) + 1)
        let svg = document.createElement('img');
        svg.src = url;
        if (!interval) {
            gridElement.appendChild(svg);
        } else {
            objectsToAppend.push(svg);
        }
    })
    if (interval) {
        let intervalVar = setInterval(() => {appendSvg()}, interval);

        const appendSvg = () => {
            if (appendIndex >= objectsToAppend.length) {
                clearInterval(intervalVar);
                launchLetters('#lettergrid', interval);
                appendIndex = 0;
            } else {
                gridElement.appendChild(objectsToAppend[appendIndex]);
                appendIndex++;
            }
        }
    }
}