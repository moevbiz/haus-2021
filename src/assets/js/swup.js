import Swup from 'swup';
import SwupPreloadPlugin from '@swup/preload-plugin';
import SwupHtmlLangPlugin from '@mashvp/swup-html-lang-plugin';
import SwupScrollPlugin from '@swup/scroll-plugin';

// import SwupSlideTheme from '@swup/slide-theme';

// export const updateMenu = (destination) => {
//     let menuItems = document.querySelectorAll('[data-nav-for]');
//     menuItems.forEach(menuItem => {
//         if (menuItem.dataset.navFor == destination) {
//             menuItem.classList.add('is-active');
//         } else {
//             menuItem.classList.remove('is-active');
//         }
//     })
// }

export const initSwup = () => {
    const swup = new Swup({
        plugins: [
            new SwupPreloadPlugin(), 
            new SwupHtmlLangPlugin(),
            new SwupScrollPlugin({
                animateScroll: false,
            }),
            // new SwupSlideTheme()
        ],
        containers: ['#swup', '.c-nav:not(.c-menu-button-container)']
    })
    return swup;
}