const string = 'hauswien';
const numberOfFiles = 4;

const letters = string.split('');

const file = (letter, i = 0) => {
    return location.origin + `/assets/letters/${letter}/${i}.svg`;
}

function letterImageElement(letter, index) {
    let img = document.createElement('img');
    img.src = file(letter, index);
    img.dataset.index = index;
    img.addEventListener('click', () => replaceMe(img, letter));
    return img;
}

function replaceMe(imgEl, letter) {
    let parent = imgEl.parentElement;
    let oldSvg = imgEl;
    let nextIndex = imgEl.dataset.index%numberOfFiles + 1;
    let newSvg = letterImageElement(letter, nextIndex);
    newSvg.classList.add('fading-in');
    oldSvg.classList.add('fading-out');
    parent.classList.add('is-animating');
    parent.appendChild(newSvg);
    window.setTimeout(() => {
        oldSvg.parentElement.removeChild(imgEl);
        newSvg.classList.remove('fading-in');
        parent.classList.remove('is-animating');
    }, 1000)
    // oldSvg.parentElement.remove(oldSvg);
}

export const launchLetters = (gridElement = null, interval = 0) => {
    let objectsToAppend = [];
    let appendIndex = 0;
    gridElement = document.querySelector(gridElement);
    gridElement.innerHTML = '';
    letters.forEach(letter => {
        let container = document.createElement('div');
        let rand = Math.floor(Math.random() * numberOfFiles) + 1
        let svg = letterImageElement(letter, rand)
        container.appendChild(svg);
        if (!interval) {
            gridElement.appendChild(container);
        } else {
            objectsToAppend.push(container);
        }

        // next image on click
        // svg.addEventListener('click', e => {
            
        //     // svg.src = file(letter, nextIndex);
        //     // svg.dataset.index = nextIndex;
        // })
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