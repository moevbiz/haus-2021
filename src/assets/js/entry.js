import { sub } from './chimp.js';
import { launchLetters } from './letters.js';

document.addEventListener('DOMContentLoaded', () => {
    const nl = document.querySelector('#nlsub');
    if (nl) {
        nl.addEventListener('submit', (e) => {
            sub(e);
        });
    };

    launchLetters('#lettergrid');

    const grid = document.querySelector('#lettergrid');

    const params = new URL(window.location).searchParams;
    const options = Object.fromEntries(params);

    if (options.shareable) {
        document.querySelector('main').style.display = 'none';
        grid.style.maxWidth = '500px';
    }

    if (options.layout === 'square') {
        grid.style.gridTemplateRows = 'repeat(2, minmax(50%, auto))';
        grid.style.height = '100vw';
        grid.style.maxHeight = '500px';
    }

    if (options.layout === 'stretch') {
        grid.style.gridTemplateRows = 'repeat(2, minmax(50vh, auto))';
        grid.querySelectorAll('img').forEach((img, i) => {
            console.log(i);
            if (i >= 4) {
                img.style.alignSelf = 'end';
            };
        })
    }

    if (options.string) {
        let p = document.createElement('p');
        p.innerText = options.string;
        p.contentEditable = true;
        p.style = {
            'text-align': 'center',
            'line-height': 1.25,
            'max-width': '90%',
        }
        p.addEventListener('input', () => {
            params.set('string', p.innerText);
            // window.location.search = params;
            history.replaceState(null, '', '?' + params);
        })
        if (options.size) {
            p.style.fontSize = options.size + 'px';
        }
        document.body.appendChild(p);
    }
})