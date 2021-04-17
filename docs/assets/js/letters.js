const string = 'hauswien';
const numberOfFiles = 4;

const letters = string.split('');

const file = (letter, i = 0) => {
    return location.origin + `/assets/letters/${letter}/${i}.svg`;
}

export const launchLetters = (gridElement = null, interval = 0) => {
    let objectsToAppend = [];
    let appendIndex = 0;
    gridElement = document.querySelector(gridElement);
    gridElement.innerHTML = '';
    letters.forEach(letter => {
        let rand = Math.floor(Math.random() * numberOfFiles) + 1
        let url = file(letter, rand);
        let svg = document.createElement('img');
        svg.src = url;
        svg.dataset.index = rand;
        if (!interval) {
            gridElement.appendChild(svg);
        } else {
            objectsToAppend.push(svg);
        }

        // next image on click
        svg.addEventListener('click', e => {
            let nextIndex = svg.dataset.index%numberOfFiles + 1
            svg.src = file(letter, nextIndex);
            svg.dataset.index = nextIndex;
        })
    })
    if (interval != 0) {
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