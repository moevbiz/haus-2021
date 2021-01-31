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
})