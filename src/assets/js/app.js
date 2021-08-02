import { sub } from './chimp';
import { launchLetters } from './letters';
import { initSwup, updateMenu } from './swup';
import { tocbotOptions } from './toc';
import * as tocbot from 'tocbot';

if (document.querySelector('#lettergrid')) {
    launchLetters('#lettergrid');
}

const homes = [ '/', '/de/', '/de'];

const init = () => {
    // updateMenu(swup.dataset.page);
    // console.log('init');
    console.log(location.pathname);

    if (homes.indexOf(window.location.pathname) >= 0) {
        // console.log('we home');
        document.querySelector('#lettergrid').classList.remove('faded');
    } else {
        document.querySelector('#lettergrid').classList.add('faded');
    }

    if (document.querySelector('.js-toc')) {
        tocbot.init(tocbotOptions);
    }

    document.querySelector('#nlsub').addEventListener('submit', e => {
        sub(e);
    })

    if (document.querySelector('main').dataset.layout == 'home') {
        document.body.classList.add('is-home');
    } else {
        document.body.classList.remove('is-home');
    }

    if (document.querySelector('.c-headline-image-container')) {
        document.querySelector('.c-headline-image-container').classList.add('is-animating');
        window.setTimeout(() => {
            document.querySelector('.c-headline-image-container').classList.remove('is-animating')
        }, 500)
    }
}

const unload = () => {
    tocbot.destroy();
}

const swup = initSwup();

init();

swup.on('willReplaceContent', unload);
swup.on('contentReplaced', init);
swup.on('clickLink', (event) => {
    if (event.target.classList.contains('is-menu-link')) {
        document.querySelectorAll('.c-nav li').forEach(l => {
            if (l.closest('.c-nav') != event.target.closest('.c-nav')) return;
            if (l == event.target) {l.classList.add('is-active')}
            else {l.classList.remove('is-active')}
        })
        if (document.body.classList.contains('is-menu-open')) {
            document.body.classList.remove('is-menu-open')
        }
    }
})

const menuBtn = document.querySelector('.c-menu-button');
menuBtn.addEventListener('click', () => {
    document.body.classList.toggle('is-menu-open');
})
