import {sub} from './chimp.js';

document.addEventListener('DOMContentLoaded', () => {
    const nl = document.querySelector('#nlsub');
    if (nl) {
        nl.addEventListener('submit', (e) => {
            sub(e);
        });
    };
})