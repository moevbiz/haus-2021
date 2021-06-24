/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mashvp/swup-html-lang-plugin/lib/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@mashvp/swup-html-lang-plugin/lib/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _plugin = __webpack_require__(/*! @swup/plugin */ "./node_modules/@swup/plugin/lib/index.js");

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HtmlLangPlugin = function (_Plugin) {
  _inherits(HtmlLangPlugin, _Plugin);

  function HtmlLangPlugin(options) {
    _classCallCheck(this, HtmlLangPlugin);

    var _this = _possibleConstructorReturn(this, (HtmlLangPlugin.__proto__ || Object.getPrototypeOf(HtmlLangPlugin)).call(this));

    _this.name = 'HtmlLangPlugin';


    var defaultOptions = {};

    _this.options = _extends({}, defaultOptions, options);
    _this.parser = new DOMParser();
    return _this;
  }

  _createClass(HtmlLangPlugin, [{
    key: 'mount',
    value: function mount() {
      var _this2 = this;

      this.swup.on('contentReplaced', function () {
        var _swup$cache$getCurren = _this2.swup.cache.getCurrentPage(),
            originalContent = _swup$cache$getCurren.originalContent;

        var page = _this2.parser.parseFromString(originalContent, 'text/html');
        var lang = page.documentElement.getAttribute('lang');

        if (document.documentElement.getAttribute('lang') !== lang) {
          document.documentElement.setAttribute('lang', lang);
        }
      });
    }
  }, {
    key: 'unmount',
    value: function unmount() {}
  }]);

  return HtmlLangPlugin;
}(_plugin2.default);

exports.default = HtmlLangPlugin;

/***/ }),

/***/ "./node_modules/@swup/plugin/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/@swup/plugin/lib/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plugin = function () {
    function Plugin() {
        _classCallCheck(this, Plugin);

        this.isSwupPlugin = true;
    }

    _createClass(Plugin, [{
        key: "mount",
        value: function mount() {
            // this is mount method rewritten by class extending
            // and is executed when swup is enabled with plugin
        }
    }, {
        key: "unmount",
        value: function unmount() {
            // this is unmount method rewritten by class extending
            // and is executed when swup with plugin is disabled
        }
    }, {
        key: "_beforeMount",
        value: function _beforeMount() {
            // here for any future hidden auto init
        }
    }, {
        key: "_afterUnmount",
        value: function _afterUnmount() {}
        // here for any future hidden auto-cleanup


        // this is here so we can tell if plugin was created by extending this class

    }]);

    return Plugin;
}();

exports.default = Plugin;

/***/ }),

/***/ "./node_modules/@swup/preload-plugin/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@swup/preload-plugin/lib/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _plugin = __webpack_require__(/*! @swup/plugin */ "./node_modules/@swup/plugin/lib/index.js");

var _plugin2 = _interopRequireDefault(_plugin);

var _delegate = __webpack_require__(/*! delegate */ "./node_modules/@swup/preload-plugin/node_modules/delegate/src/delegate.js");

var _delegate2 = _interopRequireDefault(_delegate);

var _utils = __webpack_require__(/*! swup/lib/utils */ "./node_modules/swup/lib/utils/index.js");

var _helpers = __webpack_require__(/*! swup/lib/helpers */ "./node_modules/swup/lib/helpers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PreloadPlugin = function (_Plugin) {
    _inherits(PreloadPlugin, _Plugin);

    function PreloadPlugin() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PreloadPlugin);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PreloadPlugin.__proto__ || Object.getPrototypeOf(PreloadPlugin)).call.apply(_ref, [this].concat(args))), _this), _this.name = "PreloadPlugin", _this.onContentReplaced = function () {
            _this.swup.preloadPages();
        }, _this.onMouseover = function (event) {
            var swup = _this.swup;

            swup.triggerEvent('hoverLink', event);

            var link = new _helpers.Link(event.delegateTarget);
            if (link.getAddress() !== (0, _helpers.getCurrentUrl)() && !swup.cache.exists(link.getAddress()) && swup.preloadPromise == null) {
                swup.preloadPromise = swup.preloadPage(link.getAddress());
                swup.preloadPromise.route = link.getAddress();
                swup.preloadPromise.finally(function () {
                    swup.preloadPromise = null;
                });
            }
        }, _this.preloadPage = function (pathname) {
            var swup = _this.swup;

            var link = new _helpers.Link(pathname);
            return new Promise(function (resolve, reject) {
                if (link.getAddress() != (0, _helpers.getCurrentUrl)() && !swup.cache.exists(link.getAddress())) {
                    (0, _helpers.fetch)({ url: link.getAddress(), headers: swup.options.requestHeaders }, function (response) {
                        if (response.status === 500) {
                            swup.triggerEvent('serverError');
                            reject();
                        } else {
                            // get json data
                            var page = swup.getPageData(response);
                            if (page != null) {
                                page.url = link.getAddress();
                                swup.cache.cacheUrl(page, swup.options.debugMode);
                                swup.triggerEvent('pagePreloaded');
                            } else {
                                reject(link.getAddress());
                                return;
                            }
                            resolve(swup.cache.getPage(link.getAddress()));
                        }
                    });
                } else {
                    resolve(swup.cache.getPage(link.getAddress()));
                }
            });
        }, _this.preloadPages = function () {
            (0, _utils.queryAll)('[data-swup-preload]').forEach(function (element) {
                _this.swup.preloadPage(element.href);
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PreloadPlugin, [{
        key: 'mount',
        value: function mount() {
            var swup = this.swup;

            swup._handlers.pagePreloaded = [];
            swup._handlers.hoverLink = [];

            swup.preloadPage = this.preloadPage;
            swup.preloadPages = this.preloadPages;

            // register mouseover handler
            swup.delegatedListeners.mouseover = (0, _delegate2.default)(document.body, swup.options.linkSelector, 'mouseover', this.onMouseover.bind(this));

            // initial preload of page form links with [data-swup-preload]
            swup.preloadPages();

            // do the same on every content replace
            swup.on('contentReplaced', this.onContentReplaced);
        }
    }, {
        key: 'unmount',
        value: function unmount() {
            var swup = this.swup;

            swup._handlers.pagePreloaded = null;
            swup._handlers.hoverLink = null;

            swup.preloadPage = null;
            swup.preloadPages = null;

            swup.delegatedListeners.mouseover.destroy();

            swup.off('contentReplaced', this.onContentReplaced);
        }
    }]);

    return PreloadPlugin;
}(_plugin2.default);

exports.default = PreloadPlugin;

/***/ }),

/***/ "./node_modules/@swup/preload-plugin/node_modules/delegate/src/closest.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@swup/preload-plugin/node_modules/delegate/src/closest.js ***!
  \********************************************************************************/
/***/ ((module) => {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),

/***/ "./node_modules/@swup/preload-plugin/node_modules/delegate/src/delegate.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@swup/preload-plugin/node_modules/delegate/src/delegate.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var closest = __webpack_require__(/*! ./closest */ "./node_modules/@swup/preload-plugin/node_modules/delegate/src/closest.js");

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chimp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chimp */ "./src/assets/js/chimp.js");
/* harmony import */ var _letters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./letters */ "./src/assets/js/letters.js");
/* harmony import */ var _swup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swup */ "./src/assets/js/swup.js");
/* harmony import */ var _toc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toc */ "./src/assets/js/toc.js");
/* harmony import */ var tocbot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tocbot */ "./node_modules/tocbot/src/js/index.js");
/* harmony import */ var tocbot__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tocbot__WEBPACK_IMPORTED_MODULE_4__);
// if (document.body.classList.contains('index')) {
//     var lang = navigator.language || navigator.userLanguage;
//     var title = document.querySelector('.js-title');
//     var desc = document.querySelector('.js-desc');
//     var advise = document.querySelector('.js-advise');
//     if (lang === 'fr-FR') {
//         title.textContent = "Entrée sur le site";
//         desc.textContent = "Choisissez une langue ci-dessus";
//         advise.textContent = "Vous pouvez l'importer et l'utiliser directement avec";
//     } else {
//         title.textContent = "Enter website";
//         desc.textContent = "Choose language above";
//         advise.textContent = "You can directly import it and use it with";
//     }
// }






if (document.querySelector('#lettergrid')) {
  (0,_letters__WEBPACK_IMPORTED_MODULE_1__.launchLetters)('#lettergrid');
}

var homes = ['/', '/de/', '/de'];

var init = function init() {
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
    tocbot__WEBPACK_IMPORTED_MODULE_4__.init(_toc__WEBPACK_IMPORTED_MODULE_3__.tocbotOptions);
  }

  document.querySelector('#nlsub').addEventListener('submit', function (e) {
    (0,_chimp__WEBPACK_IMPORTED_MODULE_0__.sub)(e);
  });

  if (document.querySelector('main').dataset.layout == 'home') {
    document.body.classList.add('is-home');
  } else {
    document.body.classList.remove('is-home');
  }
};

var unload = function unload() {
  tocbot__WEBPACK_IMPORTED_MODULE_4__.destroy();
};

var swup = (0,_swup__WEBPACK_IMPORTED_MODULE_2__.initSwup)();
init();
swup.on('willReplaceContent', unload);
swup.on('contentReplaced', init);
swup.on('clickLink', function (event) {
  if (event.target.classList.contains('is-menu-link')) {
    document.querySelectorAll('.c-nav li').forEach(function (l) {
      if (l.closest('.c-nav') != event.target.closest('.c-nav')) return;

      if (l == event.target) {
        l.classList.add('is-active');
      } else {
        l.classList.remove('is-active');
      }
    });

    if (document.body.classList.contains('is-menu-open')) {
      document.body.classList.remove('is-menu-open');
    }
  }
});
var menuBtn = document.querySelector('.c-menu-button');
menuBtn.addEventListener('click', function () {
  document.body.classList.toggle('is-menu-open');
});

/***/ }),

/***/ "./src/assets/js/chimp.js":
/*!********************************!*\
  !*** ./src/assets/js/chimp.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sub": () => (/* binding */ sub)
/* harmony export */ });
/*
 * Mailchimp AJAX form submit VanillaJS
 * Vanilla JS
 * Author: Michiel Vandewalle
 * Github author: https://github.com/michiel-vandewalle
 * Github project: https://github.com/michiel-vandewalle/Mailchimp-AJAX-form-submit-vanillaJS
 */
var sub = function sub(e) {
  e.preventDefault(); // Check for spam

  if (e.target.querySelector('#js-validate-robot').value !== '') {
    return false;
  } // Get url for mailchimp


  var url = e.target.action.replace('/post?', '/post-json?'); // Add form data to object

  var data = '';
  var inputs = e.target.querySelectorAll('#js-form-inputs input');

  for (var i = 0; i < inputs.length; i++) {
    data += '&' + inputs[i].name + '=' + encodeURIComponent(inputs[i].value);
  } // Create & add post script to the DOM


  var script = document.createElement('script');
  script.src = url + data;
  document.body.appendChild(script); // Callback function

  var callback = 'callback';

  window[callback] = function (data) {
    // Remove post script from the DOM
    delete window[callback];
    document.body.removeChild(script); // Display response message

    document.getElementById('js-subscribe-response').innerHTML = data.msg;
  };
};

/***/ }),

/***/ "./src/assets/js/letters.js":
/*!**********************************!*\
  !*** ./src/assets/js/letters.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "launchLetters": () => (/* binding */ launchLetters)
/* harmony export */ });
var string = 'hauswien';
var numberOfFiles = 4;
var letters = string.split('');

var file = function file(letter) {
  var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return location.origin + "/assets/letters/".concat(letter, "/").concat(i, ".svg");
};

function letterImageElement(letter, index) {
  var img = document.createElement('img');
  img.src = file(letter, index);
  img.dataset.index = index;
  img.addEventListener('click', function () {
    return replaceMe(img, letter);
  });
  return img;
}

function replaceMe(imgEl, letter) {
  var parent = imgEl.parentElement;
  var oldSvg = imgEl;
  var nextIndex = imgEl.dataset.index % numberOfFiles + 1;
  var newSvg = letterImageElement(letter, nextIndex);
  newSvg.classList.add('fading-in');
  oldSvg.classList.add('fading-out');
  parent.classList.add('is-animating');
  parent.appendChild(newSvg);
  window.setTimeout(function () {
    oldSvg.parentElement.removeChild(imgEl);
    newSvg.classList.remove('fading-in');
    parent.classList.remove('is-animating');
  }, 1000); // oldSvg.parentElement.remove(oldSvg);
}

var launchLetters = function launchLetters() {
  var gridElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var objectsToAppend = [];
  var appendIndex = 0;
  gridElement = document.querySelector(gridElement);
  gridElement.innerHTML = '';
  letters.forEach(function (letter) {
    var container = document.createElement('div');
    var rand = Math.floor(Math.random() * numberOfFiles) + 1;
    var svg = letterImageElement(letter, rand);
    container.appendChild(svg);

    if (!interval) {
      gridElement.appendChild(container);
    } else {
      objectsToAppend.push(container);
    } // next image on click
    // svg.addEventListener('click', e => {
    //     // svg.src = file(letter, nextIndex);
    //     // svg.dataset.index = nextIndex;
    // })

  });

  if (interval != 0) {
    var intervalVar = setInterval(function () {
      appendSvg();
    }, interval);

    var appendSvg = function appendSvg() {
      if (appendIndex >= objectsToAppend.length) {
        clearInterval(intervalVar);
        launchLetters('#lettergrid', interval);
        appendIndex = 0;
      } else {
        gridElement.appendChild(objectsToAppend[appendIndex]);
        appendIndex++;
      }
    };
  }
};

/***/ }),

/***/ "./src/assets/js/swup.js":
/*!*******************************!*\
  !*** ./src/assets/js/swup.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initSwup": () => (/* binding */ initSwup)
/* harmony export */ });
/* harmony import */ var swup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swup */ "./node_modules/swup/lib/index.js");
/* harmony import */ var _swup_preload_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swup/preload-plugin */ "./node_modules/@swup/preload-plugin/lib/index.js");
/* harmony import */ var _mashvp_swup_html_lang_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mashvp/swup-html-lang-plugin */ "./node_modules/@mashvp/swup-html-lang-plugin/lib/index.js");


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

var initSwup = function initSwup() {
  var swup = new swup__WEBPACK_IMPORTED_MODULE_0__.default({
    plugins: [new _swup_preload_plugin__WEBPACK_IMPORTED_MODULE_1__.default(), new _mashvp_swup_html_lang_plugin__WEBPACK_IMPORTED_MODULE_2__.default() // new SwupSlideTheme()
    ],
    containers: ['#swup', '.c-nav:not(.c-menu-button-container)']
  });
  return swup;
};

/***/ }),

/***/ "./src/assets/js/toc.js":
/*!******************************!*\
  !*** ./src/assets/js/toc.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tocbotOptions": () => (/* binding */ tocbotOptions)
/* harmony export */ });
var tocbotOptions = {
  // Where to render the table of contents.
  tocSelector: '.js-toc',
  // Where to grab the headings to build the table of contents.
  contentSelector: '.t-text-body',
  // Which headings to grab inside of the contentSelector element.
  headingSelector: 'h1, h2, h3',
  // For headings inside relative or absolute positioned containers within content.
  hasInnerContainers: true,
  headingsOffset: 100,
  scrollSmoothOffset: -100
};

/***/ }),

/***/ "./node_modules/delegate/src/closest.js":
/*!**********************************************!*\
  !*** ./node_modules/delegate/src/closest.js ***!
  \**********************************************/
/***/ ((module) => {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),

/***/ "./node_modules/delegate/src/delegate.js":
/*!***********************************************!*\
  !*** ./node_modules/delegate/src/delegate.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var closest = __webpack_require__(/*! ./closest */ "./node_modules/delegate/src/closest.js");

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/swup/lib/helpers/Link.js":
/*!***********************************************!*\
  !*** ./node_modules/swup/lib/helpers/Link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Link = function () {
	function Link(elementOrUrl) {
		_classCallCheck(this, Link);

		if (elementOrUrl instanceof Element || elementOrUrl instanceof SVGElement) {
			this.link = elementOrUrl;
		} else {
			this.link = document.createElement('a');
			this.link.href = elementOrUrl;
		}
	}

	_createClass(Link, [{
		key: 'getPath',
		value: function getPath() {
			var path = this.link.pathname;
			if (path[0] !== '/') {
				path = '/' + path;
			}
			return path;
		}
	}, {
		key: 'getAddress',
		value: function getAddress() {
			var path = this.link.pathname + this.link.search;

			if (this.link.getAttribute('xlink:href')) {
				path = this.link.getAttribute('xlink:href');
			}

			if (path[0] !== '/') {
				path = '/' + path;
			}
			return path;
		}
	}, {
		key: 'getHash',
		value: function getHash() {
			return this.link.hash;
		}
	}]);

	return Link;
}();

exports.default = Link;

/***/ }),

/***/ "./node_modules/swup/lib/helpers/classify.js":
/*!***************************************************!*\
  !*** ./node_modules/swup/lib/helpers/classify.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var classify = function classify(text) {
	var output = text.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
	.replace(/\//g, '-') // Replace / with -
	.replace(/[^\w\-]+/g, '') // Remove all non-word chars
	.replace(/\-\-+/g, '-') // Replace multiple - with single -
	.replace(/^-+/, '') // Trim - from start of text
	.replace(/-+$/, ''); // Trim - from end of text
	if (output[0] === '/') output = output.splice(1);
	if (output === '') output = 'homepage';
	return output;
};

exports.default = classify;

/***/ }),

/***/ "./node_modules/swup/lib/helpers/createHistoryRecord.js":
/*!**************************************************************!*\
  !*** ./node_modules/swup/lib/helpers/createHistoryRecord.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var createHistoryRecord = function createHistoryRecord(url) {
	window.history.pushState({
		url: url || window.location.href.split(window.location.hostname)[1],
		random: Math.random(),
		source: 'swup'
	}, document.getElementsByTagName('title')[0].innerText, url || window.location.href.split(window.location.hostname)[1]);
};

exports.default = createHistoryRecord;

/***/ }),

/***/ "./node_modules/swup/lib/helpers/fetch.js":
/*!************************************************!*\
  !*** ./node_modules/swup/lib/helpers/fetch.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fetch = function fetch(setOptions) {
	var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	var defaults = {
		url: window.location.pathname + window.location.search,
		method: 'GET',
		data: null,
		headers: {}
	};

	var options = _extends({}, defaults, setOptions);

	var request = new XMLHttpRequest();

	request.onreadystatechange = function () {
		if (request.readyState === 4) {
			if (request.status !== 500) {
				callback(request);
			} else {
				callback(request);
			}
		}
	};

	request.open(options.method, options.url, true);
	Object.keys(options.headers).forEach(function (key) {
		request.setRequestHeader(key, options.headers[key]);
	});
	request.send(options.data);
	return request;
};

exports.default = fetch;

/***/ }),

/***/ "./node_modules/swup/lib/helpers/getCurrentUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/swup/lib/helpers/getCurrentUrl.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var getCurrentUrl = function getCurrentUrl() {
	return window.location.pathname + window.location.search;
};

exports.default = getCurrentUrl;

/***/ }),

/***/ "./node_modules/swup/lib/helpers/getDataFromHtml.js":
/*!**********************************************************!*\
  !*** ./node_modules/swup/lib/helpers/getDataFromHtml.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/swup/lib/utils/index.js");

var getDataFromHtml = function getDataFromHtml(html, containers) {
	var fakeDom = document.createElement('html');
	fakeDom.innerHTML = html;
	var blocks = [];

	var _loop = function _loop(i) {
		if (fakeDom.querySelector(containers[i]) == null) {
			// page in invalid
			return {
				v: null
			};
		} else {
			(0, _utils.queryAll)(containers[i]).forEach(function (item, index) {
				(0, _utils.queryAll)(containers[i], fakeDom)[index].setAttribute('data-swup', blocks.length); // marks element with data-swup
				blocks.push((0, _utils.queryAll)(containers[i], fakeDom)[index].outerHTML);
			});
		}
	};

	for (var i = 0; i < containers.length; i++) {
		var _ret = _loop(i);

		if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	}

	var json = {
		title: fakeDom.querySelector('title').innerText,
		pageClass: fakeDom.querySelector('body').className,
		originalContent: html,
		blocks: blocks
	};

	// to prevent memory leaks
	fakeDom.innerHTML = '';
	fakeDom = null;

	return json;
};

exports.default = getDataFromHtml;

/***/ }),

/***/ "./node_modules/swup/lib/helpers/index.js":
/*!************************************************!*\
  !*** ./node_modules/swup/lib/helpers/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Link = exports.markSwupElements = exports.getCurrentUrl = exports.transitionEnd = exports.fetch = exports.getDataFromHtml = exports.createHistoryRecord = exports.classify = undefined;

var _classify = __webpack_require__(/*! ./classify */ "./node_modules/swup/lib/helpers/classify.js");

var _classify2 = _interopRequireDefault(_classify);

var _createHistoryRecord = __webpack_require__(/*! ./createHistoryRecord */ "./node_modules/swup/lib/helpers/createHistoryRecord.js");

var _createHistoryRecord2 = _interopRequireDefault(_createHistoryRecord);

var _getDataFromHtml = __webpack_require__(/*! ./getDataFromHtml */ "./node_modules/swup/lib/helpers/getDataFromHtml.js");

var _getDataFromHtml2 = _interopRequireDefault(_getDataFromHtml);

var _fetch = __webpack_require__(/*! ./fetch */ "./node_modules/swup/lib/helpers/fetch.js");

var _fetch2 = _interopRequireDefault(_fetch);

var _transitionEnd = __webpack_require__(/*! ./transitionEnd */ "./node_modules/swup/lib/helpers/transitionEnd.js");

var _transitionEnd2 = _interopRequireDefault(_transitionEnd);

var _getCurrentUrl = __webpack_require__(/*! ./getCurrentUrl */ "./node_modules/swup/lib/helpers/getCurrentUrl.js");

var _getCurrentUrl2 = _interopRequireDefault(_getCurrentUrl);

var _markSwupElements = __webpack_require__(/*! ./markSwupElements */ "./node_modules/swup/lib/helpers/markSwupElements.js");

var _markSwupElements2 = _interopRequireDefault(_markSwupElements);

var _Link = __webpack_require__(/*! ./Link */ "./node_modules/swup/lib/helpers/Link.js");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classify = exports.classify = _classify2.default;
var createHistoryRecord = exports.createHistoryRecord = _createHistoryRecord2.default;
var getDataFromHtml = exports.getDataFromHtml = _getDataFromHtml2.default;
var fetch = exports.fetch = _fetch2.default;
var transitionEnd = exports.transitionEnd = _transitionEnd2.default;
var getCurrentUrl = exports.getCurrentUrl = _getCurrentUrl2.default;
var markSwupElements = exports.markSwupElements = _markSwupElements2.default;
var Link = exports.Link = _Link2.default;

/***/ }),

/***/ "./node_modules/swup/lib/helpers/markSwupElements.js":
/*!***********************************************************!*\
  !*** ./node_modules/swup/lib/helpers/markSwupElements.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/swup/lib/utils/index.js");

var markSwupElements = function markSwupElements(element, containers) {
	var blocks = 0;

	var _loop = function _loop(i) {
		if (element.querySelector(containers[i]) == null) {
			console.warn('Element ' + containers[i] + ' is not in current page.');
		} else {
			(0, _utils.queryAll)(containers[i]).forEach(function (item, index) {
				(0, _utils.queryAll)(containers[i], element)[index].setAttribute('data-swup', blocks);
				blocks++;
			});
		}
	};

	for (var i = 0; i < containers.length; i++) {
		_loop(i);
	}
};

exports.default = markSwupElements;

/***/ }),

/***/ "./node_modules/swup/lib/helpers/transitionEnd.js":
/*!********************************************************!*\
  !*** ./node_modules/swup/lib/helpers/transitionEnd.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var transitionEnd = function transitionEnd() {
	var el = document.createElement('div');

	var transEndEventNames = {
		WebkitTransition: 'webkitTransitionEnd',
		MozTransition: 'transitionend',
		OTransition: 'oTransitionEnd otransitionend',
		transition: 'transitionend'
	};

	for (var name in transEndEventNames) {
		if (el.style[name] !== undefined) {
			return transEndEventNames[name];
		}
	}

	return false;
};

exports.default = transitionEnd;

/***/ }),

/***/ "./node_modules/swup/lib/index.js":
/*!****************************************!*\
  !*** ./node_modules/swup/lib/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// modules


var _delegate = __webpack_require__(/*! delegate */ "./node_modules/delegate/src/delegate.js");

var _delegate2 = _interopRequireDefault(_delegate);

var _Cache = __webpack_require__(/*! ./modules/Cache */ "./node_modules/swup/lib/modules/Cache.js");

var _Cache2 = _interopRequireDefault(_Cache);

var _loadPage = __webpack_require__(/*! ./modules/loadPage */ "./node_modules/swup/lib/modules/loadPage.js");

var _loadPage2 = _interopRequireDefault(_loadPage);

var _renderPage = __webpack_require__(/*! ./modules/renderPage */ "./node_modules/swup/lib/modules/renderPage.js");

var _renderPage2 = _interopRequireDefault(_renderPage);

var _triggerEvent = __webpack_require__(/*! ./modules/triggerEvent */ "./node_modules/swup/lib/modules/triggerEvent.js");

var _triggerEvent2 = _interopRequireDefault(_triggerEvent);

var _on = __webpack_require__(/*! ./modules/on */ "./node_modules/swup/lib/modules/on.js");

var _on2 = _interopRequireDefault(_on);

var _off = __webpack_require__(/*! ./modules/off */ "./node_modules/swup/lib/modules/off.js");

var _off2 = _interopRequireDefault(_off);

var _updateTransition = __webpack_require__(/*! ./modules/updateTransition */ "./node_modules/swup/lib/modules/updateTransition.js");

var _updateTransition2 = _interopRequireDefault(_updateTransition);

var _getAnimationPromises = __webpack_require__(/*! ./modules/getAnimationPromises */ "./node_modules/swup/lib/modules/getAnimationPromises.js");

var _getAnimationPromises2 = _interopRequireDefault(_getAnimationPromises);

var _getPageData = __webpack_require__(/*! ./modules/getPageData */ "./node_modules/swup/lib/modules/getPageData.js");

var _getPageData2 = _interopRequireDefault(_getPageData);

var _plugins = __webpack_require__(/*! ./modules/plugins */ "./node_modules/swup/lib/modules/plugins.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/swup/lib/utils/index.js");

var _helpers = __webpack_require__(/*! ./helpers */ "./node_modules/swup/lib/helpers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Swup = function () {
	function Swup(setOptions) {
		_classCallCheck(this, Swup);

		// default options
		var defaults = {
			animateHistoryBrowsing: false,
			animationSelector: '[class*="transition-"]',
			linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
			cache: true,
			containers: ['#swup'],
			requestHeaders: {
				'X-Requested-With': 'swup',
				Accept: 'text/html, application/xhtml+xml'
			},
			plugins: [],
			skipPopStateHandling: function skipPopStateHandling(event) {
				return !(event.state && event.state.source === 'swup');
			}
		};

		// merge options
		var options = _extends({}, defaults, setOptions);

		// handler arrays
		this._handlers = {
			animationInDone: [],
			animationInStart: [],
			animationOutDone: [],
			animationOutStart: [],
			animationSkipped: [],
			clickLink: [],
			contentReplaced: [],
			disabled: [],
			enabled: [],
			openPageInNewTab: [],
			pageLoaded: [],
			pageRetrievedFromCache: [],
			pageView: [],
			popState: [],
			samePage: [],
			samePageWithHash: [],
			serverError: [],
			transitionStart: [],
			transitionEnd: [],
			willReplaceContent: []
		};

		// variable for id of element to scroll to after render
		this.scrollToElement = null;
		// variable for promise used for preload, so no new loading of the same page starts while page is loading
		this.preloadPromise = null;
		// variable for save options
		this.options = options;
		// variable for plugins array
		this.plugins = [];
		// variable for current transition object
		this.transition = {};
		// variable for keeping event listeners from "delegate"
		this.delegatedListeners = {};
		// so we are able to remove the listener
		this.boundPopStateHandler = this.popStateHandler.bind(this);

		// make modules accessible in instance
		this.cache = new _Cache2.default();
		this.cache.swup = this;
		this.loadPage = _loadPage2.default;
		this.renderPage = _renderPage2.default;
		this.triggerEvent = _triggerEvent2.default;
		this.on = _on2.default;
		this.off = _off2.default;
		this.updateTransition = _updateTransition2.default;
		this.getAnimationPromises = _getAnimationPromises2.default;
		this.getPageData = _getPageData2.default;
		this.log = function () {}; // here so it can be used by plugins
		this.use = _plugins.use;
		this.unuse = _plugins.unuse;
		this.findPlugin = _plugins.findPlugin;

		// enable swup
		this.enable();
	}

	_createClass(Swup, [{
		key: 'enable',
		value: function enable() {
			var _this = this;

			// check for Promise support
			if (typeof Promise === 'undefined') {
				console.warn('Promise is not supported');
				return;
			}

			// add event listeners
			this.delegatedListeners.click = (0, _delegate2.default)(document, this.options.linkSelector, 'click', this.linkClickHandler.bind(this));
			window.addEventListener('popstate', this.boundPopStateHandler);

			// initial save to cache
			var page = (0, _helpers.getDataFromHtml)(document.documentElement.outerHTML, this.options.containers);
			page.url = page.responseURL = (0, _helpers.getCurrentUrl)();
			if (this.options.cache) {
				this.cache.cacheUrl(page);
			}

			// mark swup blocks in html
			(0, _helpers.markSwupElements)(document.documentElement, this.options.containers);

			// mount plugins
			this.options.plugins.forEach(function (plugin) {
				_this.use(plugin);
			});

			// modify initial history record
			window.history.replaceState(Object.assign({}, window.history.state, {
				url: window.location.href,
				random: Math.random(),
				source: 'swup'
			}), document.title, window.location.href);

			// trigger enabled event
			this.triggerEvent('enabled');

			// add swup-enabled class to html tag
			document.documentElement.classList.add('swup-enabled');

			// trigger page view event
			this.triggerEvent('pageView');
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			var _this2 = this;

			// remove delegated listeners
			this.delegatedListeners.click.destroy();

			// remove popstate listener
			window.removeEventListener('popstate', this.boundPopStateHandler);

			// empty cache
			this.cache.empty();

			// unmount plugins
			this.options.plugins.forEach(function (plugin) {
				_this2.unuse(plugin);
			});

			// remove swup data atributes from blocks
			(0, _utils.queryAll)('[data-swup]').forEach(function (element) {
				element.removeAttribute('data-swup');
			});

			// remove handlers
			this.off();

			// trigger disable event
			this.triggerEvent('disabled');

			// remove swup-enabled class from html tag
			document.documentElement.classList.remove('swup-enabled');
		}
	}, {
		key: 'linkClickHandler',
		value: function linkClickHandler(event) {
			// no control key pressed
			if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
				// index of pressed button needs to be checked because Firefox triggers click on all mouse buttons
				if (event.button === 0) {
					this.triggerEvent('clickLink', event);
					event.preventDefault();
					var link = new _helpers.Link(event.delegateTarget);
					if (link.getAddress() == (0, _helpers.getCurrentUrl)() || link.getAddress() == '') {
						// link to the same URL
						if (link.getHash() != '') {
							// link to the same URL with hash
							this.triggerEvent('samePageWithHash', event);
							var element = document.querySelector(link.getHash());
							if (element != null) {
								history.replaceState({
									url: link.getAddress() + link.getHash(),
									random: Math.random(),
									source: 'swup'
								}, document.title, link.getAddress() + link.getHash());
							} else {
								// referenced element not found
								console.warn('Element for offset not found (' + link.getHash() + ')');
							}
						} else {
							// link to the same URL without hash
							this.triggerEvent('samePage', event);
						}
					} else {
						// link to different url
						if (link.getHash() != '') {
							this.scrollToElement = link.getHash();
						}

						// get custom transition from data
						var customTransition = event.delegateTarget.getAttribute('data-swup-transition');

						// load page
						this.loadPage({ url: link.getAddress(), customTransition: customTransition }, false);
					}
				}
			} else {
				// open in new tab (do nothing)
				this.triggerEvent('openPageInNewTab', event);
			}
		}
	}, {
		key: 'popStateHandler',
		value: function popStateHandler(event) {
			if (this.options.skipPopStateHandling(event)) return;
			var link = new _helpers.Link(event.state ? event.state.url : window.location.pathname);
			if (link.getHash() !== '') {
				this.scrollToElement = link.getHash();
			} else {
				event.preventDefault();
			}
			this.triggerEvent('popState', event);
			this.loadPage({ url: link.getAddress() }, event);
		}
	}]);

	return Swup;
}();

exports.default = Swup;

/***/ }),

/***/ "./node_modules/swup/lib/modules/Cache.js":
/*!************************************************!*\
  !*** ./node_modules/swup/lib/modules/Cache.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cache = exports.Cache = function () {
	function Cache() {
		_classCallCheck(this, Cache);

		this.pages = {};
		this.last = null;
	}

	_createClass(Cache, [{
		key: 'cacheUrl',
		value: function cacheUrl(page) {
			if (page.url in this.pages === false) {
				this.pages[page.url] = page;
			}
			this.last = this.pages[page.url];
			this.swup.log('Cache (' + Object.keys(this.pages).length + ')', this.pages);
		}
	}, {
		key: 'getPage',
		value: function getPage(url) {
			return this.pages[url];
		}
	}, {
		key: 'getCurrentPage',
		value: function getCurrentPage() {
			return this.getPage(window.location.pathname + window.location.search);
		}
	}, {
		key: 'exists',
		value: function exists(url) {
			return url in this.pages;
		}
	}, {
		key: 'empty',
		value: function empty() {
			this.pages = {};
			this.last = null;
			this.swup.log('Cache cleared');
		}
	}, {
		key: 'remove',
		value: function remove(url) {
			delete this.pages[url];
		}
	}]);

	return Cache;
}();

exports.default = Cache;

/***/ }),

/***/ "./node_modules/swup/lib/modules/getAnimationPromises.js":
/*!***************************************************************!*\
  !*** ./node_modules/swup/lib/modules/getAnimationPromises.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/swup/lib/utils/index.js");

var _helpers = __webpack_require__(/*! ../helpers */ "./node_modules/swup/lib/helpers/index.js");

var getAnimationPromises = function getAnimationPromises() {
	var promises = [];
	var animatedElements = (0, _utils.queryAll)(this.options.animationSelector);
	animatedElements.forEach(function (element) {
		var promise = new Promise(function (resolve) {
			element.addEventListener((0, _helpers.transitionEnd)(), function (event) {
				if (element == event.target) {
					resolve();
				}
			});
		});
		promises.push(promise);
	});
	return promises;
};

exports.default = getAnimationPromises;

/***/ }),

/***/ "./node_modules/swup/lib/modules/getPageData.js":
/*!******************************************************!*\
  !*** ./node_modules/swup/lib/modules/getPageData.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _helpers = __webpack_require__(/*! ../helpers */ "./node_modules/swup/lib/helpers/index.js");

var getPageData = function getPageData(request) {
	// this method can be replaced in case other content than html is expected to be received from server
	// this function should always return {title, pageClass, originalContent, blocks, responseURL}
	// in case page has invalid structure - return null
	var html = request.responseText;
	var pageObject = (0, _helpers.getDataFromHtml)(html, this.options.containers);

	if (pageObject) {
		pageObject.responseURL = request.responseURL ? request.responseURL : window.location.href;
	} else {
		console.warn('Received page is invalid.');
		return null;
	}

	return pageObject;
};

exports.default = getPageData;

/***/ }),

/***/ "./node_modules/swup/lib/modules/loadPage.js":
/*!***************************************************!*\
  !*** ./node_modules/swup/lib/modules/loadPage.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _helpers = __webpack_require__(/*! ../helpers */ "./node_modules/swup/lib/helpers/index.js");

var loadPage = function loadPage(data, popstate) {
	var _this = this;

	// create array for storing animation promises
	var animationPromises = [],
	    xhrPromise = void 0;
	var animateOut = function animateOut() {
		_this.triggerEvent('animationOutStart');

		// handle classes
		document.documentElement.classList.add('is-changing');
		document.documentElement.classList.add('is-leaving');
		document.documentElement.classList.add('is-animating');
		if (popstate) {
			document.documentElement.classList.add('is-popstate');
		}
		document.documentElement.classList.add('to-' + (0, _helpers.classify)(data.url));

		// animation promise stuff
		animationPromises = _this.getAnimationPromises('out');
		Promise.all(animationPromises).then(function () {
			_this.triggerEvent('animationOutDone');
		});

		// create history record if this is not a popstate call
		if (!popstate) {
			// create pop element with or without anchor
			var state = void 0;
			if (_this.scrollToElement != null) {
				state = data.url + _this.scrollToElement;
			} else {
				state = data.url;
			}

			(0, _helpers.createHistoryRecord)(state);
		}
	};

	this.triggerEvent('transitionStart', popstate);

	// set transition object
	if (data.customTransition != null) {
		this.updateTransition(window.location.pathname, data.url, data.customTransition);
		document.documentElement.classList.add('to-' + (0, _helpers.classify)(data.customTransition));
	} else {
		this.updateTransition(window.location.pathname, data.url);
	}

	// start/skip animation
	if (!popstate || this.options.animateHistoryBrowsing) {
		animateOut();
	} else {
		this.triggerEvent('animationSkipped');
	}

	// start/skip loading of page
	if (this.cache.exists(data.url)) {
		xhrPromise = new Promise(function (resolve) {
			resolve();
		});
		this.triggerEvent('pageRetrievedFromCache');
	} else {
		if (!this.preloadPromise || this.preloadPromise.route != data.url) {
			xhrPromise = new Promise(function (resolve, reject) {
				(0, _helpers.fetch)(_extends({}, data, { headers: _this.options.requestHeaders }), function (response) {
					if (response.status === 500) {
						_this.triggerEvent('serverError');
						reject(data.url);
						return;
					} else {
						// get json data
						var page = _this.getPageData(response);
						if (page != null) {
							page.url = data.url;
						} else {
							reject(data.url);
							return;
						}
						// render page
						_this.cache.cacheUrl(page);
						_this.triggerEvent('pageLoaded');
					}
					resolve();
				});
			});
		} else {
			xhrPromise = this.preloadPromise;
		}
	}

	// when everything is ready, handle the outcome
	Promise.all(animationPromises.concat([xhrPromise])).then(function () {
		// render page
		_this.renderPage(_this.cache.getPage(data.url), popstate);
		_this.preloadPromise = null;
	}).catch(function (errorUrl) {
		// rewrite the skipPopStateHandling function to redirect manually when the history.go is processed
		_this.options.skipPopStateHandling = function () {
			window.location = errorUrl;
			return true;
		};

		// go back to the actual page were still at
		window.history.go(-1);
	});
};

exports.default = loadPage;

/***/ }),

/***/ "./node_modules/swup/lib/modules/off.js":
/*!**********************************************!*\
  !*** ./node_modules/swup/lib/modules/off.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var off = function off(event, handler) {
	var _this = this;

	if (event != null) {
		if (handler != null) {
			if (this._handlers[event] && this._handlers[event].filter(function (savedHandler) {
				return savedHandler === handler;
			}).length) {
				var toRemove = this._handlers[event].filter(function (savedHandler) {
					return savedHandler === handler;
				})[0];
				var index = this._handlers[event].indexOf(toRemove);
				if (index > -1) {
					this._handlers[event].splice(index, 1);
				}
			} else {
				console.warn("Handler for event '" + event + "' no found.");
			}
		} else {
			this._handlers[event] = [];
		}
	} else {
		Object.keys(this._handlers).forEach(function (keys) {
			_this._handlers[keys] = [];
		});
	}
};

exports.default = off;

/***/ }),

/***/ "./node_modules/swup/lib/modules/on.js":
/*!*********************************************!*\
  !*** ./node_modules/swup/lib/modules/on.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var on = function on(event, handler) {
	if (this._handlers[event]) {
		this._handlers[event].push(handler);
	} else {
		console.warn("Unsupported event " + event + ".");
	}
};

exports.default = on;

/***/ }),

/***/ "./node_modules/swup/lib/modules/plugins.js":
/*!**************************************************!*\
  !*** ./node_modules/swup/lib/modules/plugins.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var use = exports.use = function use(plugin) {
	if (!plugin.isSwupPlugin) {
		console.warn('Not swup plugin instance ' + plugin + '.');
		return;
	}

	this.plugins.push(plugin);
	plugin.swup = this;
	if (typeof plugin._beforeMount === 'function') {
		plugin._beforeMount();
	}
	plugin.mount();

	return this.plugins;
};

var unuse = exports.unuse = function unuse(plugin) {
	var pluginReference = void 0;

	if (typeof plugin === 'string') {
		pluginReference = this.plugins.find(function (p) {
			return plugin === p.name;
		});
	} else {
		pluginReference = plugin;
	}

	if (!pluginReference) {
		console.warn('No such plugin.');
		return;
	}

	pluginReference.unmount();

	if (typeof pluginReference._afterUnmount === 'function') {
		pluginReference._afterUnmount();
	}

	var index = this.plugins.indexOf(pluginReference);
	this.plugins.splice(index, 1);

	return this.plugins;
};

var findPlugin = exports.findPlugin = function findPlugin(pluginName) {
	return this.plugins.find(function (p) {
		return pluginName === p.name;
	});
};

/***/ }),

/***/ "./node_modules/swup/lib/modules/renderPage.js":
/*!*****************************************************!*\
  !*** ./node_modules/swup/lib/modules/renderPage.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/swup/lib/utils/index.js");

var _helpers = __webpack_require__(/*! ../helpers */ "./node_modules/swup/lib/helpers/index.js");

var renderPage = function renderPage(page, popstate) {
	var _this = this;

	document.documentElement.classList.remove('is-leaving');

	// replace state in case the url was redirected
	var link = new _helpers.Link(page.responseURL);
	if (window.location.pathname !== link.getPath()) {
		window.history.replaceState({
			url: link.getPath(),
			random: Math.random(),
			source: 'swup'
		}, document.title, link.getPath());

		// save new record for redirected url
		this.cache.cacheUrl(_extends({}, page, { url: link.getPath() }));
	}

	// only add for non-popstate transitions
	if (!popstate || this.options.animateHistoryBrowsing) {
		document.documentElement.classList.add('is-rendering');
	}

	this.triggerEvent('willReplaceContent', popstate);

	// replace blocks
	for (var i = 0; i < page.blocks.length; i++) {
		document.body.querySelector('[data-swup="' + i + '"]').outerHTML = page.blocks[i];
	}

	// set title
	document.title = page.title;

	this.triggerEvent('contentReplaced', popstate);
	this.triggerEvent('pageView', popstate);

	// empty cache if it's disabled (because pages could be preloaded and stuff)
	if (!this.options.cache) {
		this.cache.empty();
	}

	// start animation IN
	setTimeout(function () {
		if (!popstate || _this.options.animateHistoryBrowsing) {
			_this.triggerEvent('animationInStart');
			document.documentElement.classList.remove('is-animating');
		}
	}, 10);

	// handle end of animation
	if (!popstate || this.options.animateHistoryBrowsing) {
		var animationPromises = this.getAnimationPromises('in');
		Promise.all(animationPromises).then(function () {
			_this.triggerEvent('animationInDone');
			_this.triggerEvent('transitionEnd', popstate);
			// remove "to-{page}" classes
			document.documentElement.className.split(' ').forEach(function (classItem) {
				if (new RegExp('^to-').test(classItem) || classItem === 'is-changing' || classItem === 'is-rendering' || classItem === 'is-popstate') {
					document.documentElement.classList.remove(classItem);
				}
			});
		});
	} else {
		this.triggerEvent('transitionEnd', popstate);
	}

	// reset scroll-to element
	this.scrollToElement = null;
};

exports.default = renderPage;

/***/ }),

/***/ "./node_modules/swup/lib/modules/triggerEvent.js":
/*!*******************************************************!*\
  !*** ./node_modules/swup/lib/modules/triggerEvent.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var triggerEvent = function triggerEvent(eventName, originalEvent) {
	// call saved handlers with "on" method and pass originalEvent object if available
	this._handlers[eventName].forEach(function (handler) {
		try {
			handler(originalEvent);
		} catch (error) {
			console.error(error);
		}
	});

	// trigger event on document with prefix "swup:"
	var event = new CustomEvent('swup:' + eventName, { detail: eventName });
	document.dispatchEvent(event);
};

exports.default = triggerEvent;

/***/ }),

/***/ "./node_modules/swup/lib/modules/updateTransition.js":
/*!***********************************************************!*\
  !*** ./node_modules/swup/lib/modules/updateTransition.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var updateTransition = function updateTransition(from, to, custom) {
	// transition routes
	this.transition = {
		from: from,
		to: to,
		custom: custom
	};
};

exports.default = updateTransition;

/***/ }),

/***/ "./node_modules/swup/lib/utils/index.js":
/*!**********************************************!*\
  !*** ./node_modules/swup/lib/utils/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var query = exports.query = function query(selector) {
	var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

	if (typeof selector !== 'string') {
		return selector;
	}

	return context.querySelector(selector);
};

var queryAll = exports.queryAll = function queryAll(selector) {
	var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

	if (typeof selector !== 'string') {
		return selector;
	}

	return Array.prototype.slice.call(context.querySelectorAll(selector));
};

/***/ }),

/***/ "./node_modules/tocbot/src/js/build-html.js":
/*!**************************************************!*\
  !*** ./node_modules/tocbot/src/js/build-html.js ***!
  \**************************************************/
/***/ ((module) => {

/**
 * This file is responsible for building the DOM and updating DOM state.
 *
 * @author Tim Scanlin
 */

module.exports = function (options) {
  var forEach = [].forEach
  var some = [].some
  var body = document.body
  var currentlyHighlighting = true
  var SPACE_CHAR = ' '

  /**
   * Create link and list elements.
   * @param {Object} d
   * @param {HTMLElement} container
   * @return {HTMLElement}
   */
  function createEl (d, container) {
    var link = container.appendChild(createLink(d))
    if (d.children.length) {
      var list = createList(d.isCollapsed)
      d.children.forEach(function (child) {
        createEl(child, list)
      })
      link.appendChild(list)
    }
  }

  /**
   * Render nested heading array data into a given selector.
   * @param {String} selector
   * @param {Array} data
   * @return {HTMLElement}
   */
  function render (selector, data) {
    var collapsed = false
    var container = createList(collapsed)

    data.forEach(function (d) {
      createEl(d, container)
    })

    var parent = document.querySelector(selector)

    // Return if no parent is found.
    if (parent === null) {
      return
    }

    // Remove existing child if it exists.
    if (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }

    // Just return the parent and don't append the list if no links are found.
    if (data.length === 0) {
      return parent
    }

    // Append the Elements that have been created
    return parent.appendChild(container)
  }

  /**
   * Create link element.
   * @param {Object} data
   * @return {HTMLElement}
   */
  function createLink (data) {
    var item = document.createElement('li')
    var a = document.createElement('a')
    if (options.listItemClass) {
      item.setAttribute('class', options.listItemClass)
    }

    if (options.onClick) {
      a.onclick = options.onClick
    }

    if (options.includeHtml && data.childNodes.length) {
      forEach.call(data.childNodes, function (node) {
        a.appendChild(node.cloneNode(true))
      })
    } else {
      // Default behavior.
      a.textContent = data.textContent
    }
    a.setAttribute('href', options.basePath + '#' + data.id)
    a.setAttribute('class', options.linkClass +
      SPACE_CHAR + 'node-name--' + data.nodeName +
      SPACE_CHAR + options.extraLinkClasses)
    item.appendChild(a)
    return item
  }

  /**
   * Create list element.
   * @param {Boolean} isCollapsed
   * @return {HTMLElement}
   */
  function createList (isCollapsed) {
    var listElement = (options.orderedList) ? 'ol' : 'ul'
    var list = document.createElement(listElement)
    var classes = options.listClass +
      SPACE_CHAR + options.extraListClasses
    if (isCollapsed) {
      classes += SPACE_CHAR + options.collapsibleClass
      classes += SPACE_CHAR + options.isCollapsedClass
    }
    list.setAttribute('class', classes)
    return list
  }

  /**
   * Update fixed sidebar class.
   * @return {HTMLElement}
   */
  function updateFixedSidebarClass () {
    if (options.scrollContainer && document.querySelector(options.scrollContainer)) {
      var top
      top = document.querySelector(options.scrollContainer).scrollTop
    } else {
      top = document.documentElement.scrollTop || body.scrollTop
    }
    var posFixedEl = document.querySelector(options.positionFixedSelector)

    if (options.fixedSidebarOffset === 'auto') {
      options.fixedSidebarOffset = document.querySelector(options.tocSelector).offsetTop
    }

    if (top > options.fixedSidebarOffset) {
      if (posFixedEl.className.indexOf(options.positionFixedClass) === -1) {
        posFixedEl.className += SPACE_CHAR + options.positionFixedClass
      }
    } else {
      posFixedEl.className = posFixedEl.className.split(SPACE_CHAR + options.positionFixedClass).join('')
    }
  }

  /**
   * Get top position of heading
   * @param {HTMLElement}
   * @return {integer} position
   */
  function getHeadingTopPos (obj) {
    var position = 0
    if (obj !== document.querySelector(options.contentSelector && obj != null)) {
      position = obj.offsetTop
      if (options.hasInnerContainers) { position += getHeadingTopPos(obj.offsetParent) }
    }
    return position
  }

  /**
   * Update TOC highlighting and collpased groupings.
   */
  function updateToc (headingsArray) {
    // If a fixed content container was set
    if (options.scrollContainer && document.querySelector(options.scrollContainer)) {
      var top
      top = document.querySelector(options.scrollContainer).scrollTop
    } else {
      top = document.documentElement.scrollTop || body.scrollTop
    }

    // Add fixed class at offset
    if (options.positionFixedSelector) {
      updateFixedSidebarClass()
    }

    // Get the top most heading currently visible on the page so we know what to highlight.
    var headings = headingsArray
    var topHeader
    // Using some instead of each so that we can escape early.
    if (currentlyHighlighting &&
      document.querySelector(options.tocSelector) !== null &&
      headings.length > 0) {
      some.call(headings, function (heading, i) {
        if (getHeadingTopPos(heading) > top + options.headingsOffset + 10) {
          // Don't allow negative index value.
          var index = (i === 0) ? i : i - 1
          topHeader = headings[index]
          return true
        } else if (i === headings.length - 1) {
          // This allows scrolling for the last heading on the page.
          topHeader = headings[headings.length - 1]
          return true
        }
      })

      // Remove the active class from the other tocLinks.
      var tocLinks = document.querySelector(options.tocSelector)
        .querySelectorAll('.' + options.linkClass)
      forEach.call(tocLinks, function (tocLink) {
        tocLink.className = tocLink.className.split(SPACE_CHAR + options.activeLinkClass).join('')
      })
      var tocLis = document.querySelector(options.tocSelector)
        .querySelectorAll('.' + options.listItemClass)
      forEach.call(tocLis, function (tocLi) {
        tocLi.className = tocLi.className.split(SPACE_CHAR + options.activeListItemClass).join('')
      })

      // Add the active class to the active tocLink.
      var activeTocLink = document.querySelector(options.tocSelector)
        .querySelector('.' + options.linkClass +
          '.node-name--' + topHeader.nodeName +
          '[href="' + options.basePath + '#' + topHeader.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/@])/g, '\\$1') + '"]')
      if (activeTocLink.className.indexOf(options.activeLinkClass) === -1) {
        activeTocLink.className += SPACE_CHAR + options.activeLinkClass
      }
      var li = activeTocLink.parentNode
      if (li && li.className.indexOf(options.activeListItemClass) === -1) {
        li.className += SPACE_CHAR + options.activeListItemClass
      }

      var tocLists = document.querySelector(options.tocSelector)
        .querySelectorAll('.' + options.listClass + '.' + options.collapsibleClass)

      // Collapse the other collapsible lists.
      forEach.call(tocLists, function (list) {
        if (list.className.indexOf(options.isCollapsedClass) === -1) {
          list.className += SPACE_CHAR + options.isCollapsedClass
        }
      })

      // Expand the active link's collapsible list and its sibling if applicable.
      if (activeTocLink.nextSibling && activeTocLink.nextSibling.className.indexOf(options.isCollapsedClass) !== -1) {
        activeTocLink.nextSibling.className = activeTocLink.nextSibling.className.split(SPACE_CHAR + options.isCollapsedClass).join('')
      }
      removeCollapsedFromParents(activeTocLink.parentNode.parentNode)
    }
  }

  /**
   * Remove collpased class from parent elements.
   * @param {HTMLElement} element
   * @return {HTMLElement}
   */
  function removeCollapsedFromParents (element) {
    if (element.className.indexOf(options.collapsibleClass) !== -1 && element.className.indexOf(options.isCollapsedClass) !== -1) {
      element.className = element.className.split(SPACE_CHAR + options.isCollapsedClass).join('')
      return removeCollapsedFromParents(element.parentNode.parentNode)
    }
    return element
  }

  /**
   * Disable TOC Animation when a link is clicked.
   * @param {Event} event
   */
  function disableTocAnimation (event) {
    var target = event.target || event.srcElement
    if (typeof target.className !== 'string' || target.className.indexOf(options.linkClass) === -1) {
      return
    }
    // Bind to tocLink clicks to temporarily disable highlighting
    // while smoothScroll is animating.
    currentlyHighlighting = false
  }

  /**
   * Enable TOC Animation.
   */
  function enableTocAnimation () {
    currentlyHighlighting = true
  }

  return {
    enableTocAnimation: enableTocAnimation,
    disableTocAnimation: disableTocAnimation,
    render: render,
    updateToc: updateToc
  }
}


/***/ }),

/***/ "./node_modules/tocbot/src/js/default-options.js":
/*!*******************************************************!*\
  !*** ./node_modules/tocbot/src/js/default-options.js ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = {
  // Where to render the table of contents.
  tocSelector: '.js-toc',
  // Where to grab the headings to build the table of contents.
  contentSelector: '.js-toc-content',
  // Which headings to grab inside of the contentSelector element.
  headingSelector: 'h1, h2, h3',
  // Headings that match the ignoreSelector will be skipped.
  ignoreSelector: '.js-toc-ignore',
  // For headings inside relative or absolute positioned containers within content
  hasInnerContainers: false,
  // Main class to add to links.
  linkClass: 'toc-link',
  // Extra classes to add to links.
  extraLinkClasses: '',
  // Class to add to active links,
  // the link corresponding to the top most heading on the page.
  activeLinkClass: 'is-active-link',
  // Main class to add to lists.
  listClass: 'toc-list',
  // Extra classes to add to lists.
  extraListClasses: '',
  // Class that gets added when a list should be collapsed.
  isCollapsedClass: 'is-collapsed',
  // Class that gets added when a list should be able
  // to be collapsed but isn't necessarily collapsed.
  collapsibleClass: 'is-collapsible',
  // Class to add to list items.
  listItemClass: 'toc-list-item',
  // Class to add to active list items.
  activeListItemClass: 'is-active-li',
  // How many heading levels should not be collapsed.
  // For example, number 6 will show everything since
  // there are only 6 heading levels and number 0 will collapse them all.
  // The sections that are hidden will open
  // and close as you scroll to headings within them.
  collapseDepth: 0,
  // Smooth scrolling enabled.
  scrollSmooth: true,
  // Smooth scroll duration.
  scrollSmoothDuration: 420,
  // Smooth scroll offset.
  scrollSmoothOffset: 0,
  // Callback for scroll end.
  scrollEndCallback: function (e) {},
  // Headings offset between the headings and the top of the document (this is meant for minor adjustments).
  headingsOffset: 1,
  // Timeout between events firing to make sure it's
  // not too rapid (for performance reasons).
  throttleTimeout: 50,
  // Element to add the positionFixedClass to.
  positionFixedSelector: null,
  // Fixed position class to add to make sidebar fixed after scrolling
  // down past the fixedSidebarOffset.
  positionFixedClass: 'is-position-fixed',
  // fixedSidebarOffset can be any number but by default is set
  // to auto which sets the fixedSidebarOffset to the sidebar
  // element's offsetTop from the top of the document on init.
  fixedSidebarOffset: 'auto',
  // includeHtml can be set to true to include the HTML markup from the
  // heading node instead of just including the textContent.
  includeHtml: false,
  // onclick function to apply to all links in toc. will be called with
  // the event as the first parameter, and this can be used to stop,
  // propagation, prevent default or perform action
  onClick: function (e) {},
  // orderedList can be set to false to generate unordered lists (ul)
  // instead of ordered lists (ol)
  orderedList: true,
  // If there is a fixed article scroll container, set to calculate titles' offset
  scrollContainer: null,
  // prevent ToC DOM rendering if it's already rendered by an external system
  skipRendering: false,
  // Optional callback to change heading labels.
  // For example it can be used to cut down and put ellipses on multiline headings you deem too long.
  // Called each time a heading is parsed. Expects a string in return, the modified label to display.
  // function (string) => string
  headingLabelCallback: false,
  // ignore headings that are hidden in DOM
  ignoreHiddenElements: false,
  // Optional callback to modify properties of parsed headings.
  // The heading element is passed in node parameter and information parsed by default parser is provided in obj parameter.
  // Function has to return the same or modified obj.
  // The heading will be excluded from TOC if nothing is returned.
  // function (object, HTMLElement) => object | void
  headingObjectCallback: null,
  // Set the base path, useful if you use a `base` tag in `head`.
  basePath: '',
  // Only takes affect when `tocSelector` is scrolling,
  // keep the toc scroll position in sync with the content.
  disableTocScrollSync: false
}


/***/ }),

/***/ "./node_modules/tocbot/src/js/index.js":
/*!*********************************************!*\
  !*** ./node_modules/tocbot/src/js/index.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Tocbot
 * Tocbot creates a toble of contents based on HTML headings on a page,
 * this allows users to easily jump to different sections of the document.
 * Tocbot was inspired by tocify (http://gregfranko.com/jquery.tocify.js/).
 * The main differences are that it works natively without any need for jquery or jquery UI).
 *
 * @author Tim Scanlin
 */

/* globals define */

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory(root)),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
})(typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : this.window || this.global, function (root) {
  'use strict'

  // Default options.
  var defaultOptions = __webpack_require__(/*! ./default-options.js */ "./node_modules/tocbot/src/js/default-options.js")
  // Object to store current options.
  var options = {}
  // Object for public APIs.
  var tocbot = {}

  var BuildHtml = __webpack_require__(/*! ./build-html.js */ "./node_modules/tocbot/src/js/build-html.js")
  var ParseContent = __webpack_require__(/*! ./parse-content.js */ "./node_modules/tocbot/src/js/parse-content.js")
  var updateTocScroll = __webpack_require__(/*! ./update-toc-scroll.js */ "./node_modules/tocbot/src/js/update-toc-scroll.js")
  // Keep these variables at top scope once options are passed in.
  var buildHtml
  var parseContent

  // Just return if its not a browser.
  var supports = !!root && !!root.document && !!root.document.querySelector && !!root.addEventListener // Feature test
  if (typeof window === 'undefined' && !supports) {
    return
  }
  var headingsArray

  // From: https://github.com/Raynos/xtend
  var hasOwnProperty = Object.prototype.hasOwnProperty
  function extend () {
    var target = {}
    for (var i = 0; i < arguments.length; i++) {
      var source = arguments[i]
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }
    return target
  }

  // From: https://remysharp.com/2010/07/21/throttling-function-calls
  function throttle (fn, threshhold, scope) {
    threshhold || (threshhold = 250)
    var last
    var deferTimer
    return function () {
      var context = scope || this
      var now = +new Date()
      var args = arguments
      if (last && now < last + threshhold) {
        // hold on to it
        clearTimeout(deferTimer)
        deferTimer = setTimeout(function () {
          last = now
          fn.apply(context, args)
        }, threshhold)
      } else {
        last = now
        fn.apply(context, args)
      }
    }
  }

  /**
   * Destroy tocbot.
   */
  tocbot.destroy = function () {
    if (!options.skipRendering) {
      // Clear HTML.
      try {
        document.querySelector(options.tocSelector).innerHTML = ''
      } catch (e) {
        console.warn('Element not found: ' + options.tocSelector); // eslint-disable-line
      }
    }

    // Remove event listeners.
    if (options.scrollContainer && document.querySelector(options.scrollContainer)) {
      document.querySelector(options.scrollContainer).removeEventListener('scroll', this._scrollListener, false)
      document.querySelector(options.scrollContainer).removeEventListener('resize', this._scrollListener, false)
      if (buildHtml) {
        document.querySelector(options.scrollContainer).removeEventListener('click', this._clickListener, false)
      }
    } else {
      document.removeEventListener('scroll', this._scrollListener, false)
      document.removeEventListener('resize', this._scrollListener, false)
      if (buildHtml) {
        document.removeEventListener('click', this._clickListener, false)
      }
    }
  }

  /**
   * Initialize tocbot.
   * @param {object} customOptions
   */
  tocbot.init = function (customOptions) {
    // feature test
    if (!supports) {
      return
    }

    // Merge defaults with user options.
    // Set to options variable at the top.
    options = extend(defaultOptions, customOptions || {})
    this.options = options
    this.state = {}

    // Init smooth scroll if enabled (default).
    if (options.scrollSmooth) {
      options.duration = options.scrollSmoothDuration
      options.offset = options.scrollSmoothOffset
      tocbot.scrollSmooth = __webpack_require__(/*! ./scroll-smooth */ "./node_modules/tocbot/src/js/scroll-smooth/index.js").initSmoothScrolling(options)
    }

    // Pass options to these modules.
    buildHtml = BuildHtml(options)
    parseContent = ParseContent(options)

    // For testing purposes.
    this._buildHtml = buildHtml
    this._parseContent = parseContent

    // Destroy it if it exists first.
    tocbot.destroy()

    // Get headings array.
    headingsArray = parseContent.selectHeadings(options.contentSelector, options.headingSelector)
    // Return if no headings are found.
    if (headingsArray === null) {
      return
    }

    // Build nested headings array.
    var nestedHeadingsObj = parseContent.nestHeadingsArray(headingsArray)
    var nestedHeadings = nestedHeadingsObj.nest

    // Render.
    if (!options.skipRendering) {
      buildHtml.render(options.tocSelector, nestedHeadings)
    }

    // Update Sidebar and bind listeners.
    this._scrollListener = throttle(function (e) {
      buildHtml.updateToc(headingsArray)
      !options.disableTocScrollSync && updateTocScroll(options)
      var isTop = e && e.target && e.target.scrollingElement && e.target.scrollingElement.scrollTop === 0
      if ((e && (e.eventPhase === 0 || e.currentTarget === null)) || isTop) {
        buildHtml.updateToc(headingsArray)
        if (options.scrollEndCallback) {
          options.scrollEndCallback(e)
        }
      }
    }, options.throttleTimeout)
    this._scrollListener()
    if (options.scrollContainer && document.querySelector(options.scrollContainer)) {
      document.querySelector(options.scrollContainer).addEventListener('scroll', this._scrollListener, false)
      document.querySelector(options.scrollContainer).addEventListener('resize', this._scrollListener, false)
    } else {
      document.addEventListener('scroll', this._scrollListener, false)
      document.addEventListener('resize', this._scrollListener, false)
    }

    // Bind click listeners to disable animation.
    var timeout = null
    this._clickListener = throttle(function (event) {
      if (options.scrollSmooth) {
        buildHtml.disableTocAnimation(event)
      }
      buildHtml.updateToc(headingsArray)
      // Timeout to re-enable the animation.
      timeout && clearTimeout(timeout)
      timeout = setTimeout(function () {
        buildHtml.enableTocAnimation()
      }, options.scrollSmoothDuration)
    }, options.throttleTimeout)

    if (options.scrollContainer && document.querySelector(options.scrollContainer)) {
      document.querySelector(options.scrollContainer).addEventListener('click', this._clickListener, false)
    } else {
      document.addEventListener('click', this._clickListener, false)
    }

    return this
  }

  /**
   * Refresh tocbot.
   */
  tocbot.refresh = function (customOptions) {
    tocbot.destroy()
    tocbot.init(customOptions || this.options)
  }

  // Make tocbot available globally.
  root.tocbot = tocbot

  return tocbot
})


/***/ }),

/***/ "./node_modules/tocbot/src/js/parse-content.js":
/*!*****************************************************!*\
  !*** ./node_modules/tocbot/src/js/parse-content.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * This file is responsible for parsing the content from the DOM and making
 * sure data is nested properly.
 *
 * @author Tim Scanlin
 */

module.exports = function parseContent (options) {
  var reduce = [].reduce

  /**
   * Get the last item in an array and return a reference to it.
   * @param {Array} array
   * @return {Object}
   */
  function getLastItem (array) {
    return array[array.length - 1]
  }

  /**
   * Get heading level for a heading dom node.
   * @param {HTMLElement} heading
   * @return {Number}
   */
  function getHeadingLevel (heading) {
    return +heading.nodeName.split('H').join('')
  }

  /**
   * Get important properties from a heading element and store in a plain object.
   * @param {HTMLElement} heading
   * @return {Object}
   */
  function getHeadingObject (heading) {
    // each node is processed twice by this method because nestHeadingsArray() and addNode() calls it
    // first time heading is real DOM node element, second time it is obj
    // that is causing problem so I am processing only original DOM node
    if (!(heading instanceof window.HTMLElement)) return heading

    if (options.ignoreHiddenElements && (!heading.offsetHeight || !heading.offsetParent)) {
      return null
    }

    var obj = {
      id: heading.id,
      children: [],
      nodeName: heading.nodeName,
      headingLevel: getHeadingLevel(heading),
      textContent: options.headingLabelCallback ? String(options.headingLabelCallback(heading.textContent)) : heading.textContent.trim()
    }

    if (options.includeHtml) {
      obj.childNodes = heading.childNodes
    }

    if (options.headingObjectCallback) {
      return options.headingObjectCallback(obj, heading)
    }

    return obj
  }

  /**
   * Add a node to the nested array.
   * @param {Object} node
   * @param {Array} nest
   * @return {Array}
   */
  function addNode (node, nest) {
    var obj = getHeadingObject(node)
    var level = obj.headingLevel
    var array = nest
    var lastItem = getLastItem(array)
    var lastItemLevel = lastItem
      ? lastItem.headingLevel
      : 0
    var counter = level - lastItemLevel

    while (counter > 0) {
      lastItem = getLastItem(array)
      if (lastItem && lastItem.children !== undefined) {
        array = lastItem.children
      }
      counter--
    }

    if (level >= options.collapseDepth) {
      obj.isCollapsed = true
    }

    array.push(obj)
    return array
  }

  /**
   * Select headings in content area, exclude any selector in options.ignoreSelector
   * @param {String} contentSelector
   * @param {Array} headingSelector
   * @return {Array}
   */
  function selectHeadings (contentSelector, headingSelector) {
    var selectors = headingSelector
    if (options.ignoreSelector) {
      selectors = headingSelector.split(',')
        .map(function mapSelectors (selector) {
          return selector.trim() + ':not(' + options.ignoreSelector + ')'
        })
    }
    try {
      return document.querySelector(contentSelector)
        .querySelectorAll(selectors)
    } catch (e) {
      console.warn('Element not found: ' + contentSelector); // eslint-disable-line
      return null
    }
  }

  /**
   * Nest headings array into nested arrays with 'children' property.
   * @param {Array} headingsArray
   * @return {Object}
   */
  function nestHeadingsArray (headingsArray) {
    return reduce.call(headingsArray, function reducer (prev, curr) {
      var currentHeading = getHeadingObject(curr)
      if (currentHeading) {
        addNode(currentHeading, prev.nest)
      }
      return prev
    }, {
      nest: []
    })
  }

  return {
    nestHeadingsArray: nestHeadingsArray,
    selectHeadings: selectHeadings
  }
}


/***/ }),

/***/ "./node_modules/tocbot/src/js/scroll-smooth/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/tocbot/src/js/scroll-smooth/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

/* globals location, requestAnimationFrame */

exports.initSmoothScrolling = initSmoothScrolling

function initSmoothScrolling (options) {
  if (isCssSmoothSCrollSupported()) { }

  var duration = options.duration
  var offset = options.offset

  var pageUrl = location.hash
    ? stripHash(location.href)
    : location.href

  delegatedLinkHijacking()

  function delegatedLinkHijacking () {
    document.body.addEventListener('click', onClick, false)

    function onClick (e) {
      if (
        !isInPageLink(e.target) ||
        e.target.className.indexOf('no-smooth-scroll') > -1 ||
        (e.target.href.charAt(e.target.href.length - 2) === '#' &&
        e.target.href.charAt(e.target.href.length - 1) === '!') ||
        e.target.className.indexOf(options.linkClass) === -1) {
        return
      }

      // Don't prevent default or hash doesn't change.
      // e.preventDefault()

      jump(e.target.hash, {
        duration: duration,
        offset: offset,
        callback: function () {
          setFocus(e.target.hash)
        }
      })
    }
  }

  function isInPageLink (n) {
    return n.tagName.toLowerCase() === 'a' &&
      (n.hash.length > 0 || n.href.charAt(n.href.length - 1) === '#') &&
      (stripHash(n.href) === pageUrl || stripHash(n.href) + '#' === pageUrl)
  }

  function stripHash (url) {
    return url.slice(0, url.lastIndexOf('#'))
  }

  function isCssSmoothSCrollSupported () {
    return 'scrollBehavior' in document.documentElement.style
  }

  // Adapted from:
  // https://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/
  function setFocus (hash) {
    var element = document.getElementById(hash.substring(1))

    if (element) {
      if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
        element.tabIndex = -1
      }

      element.focus()
    }
  }
}

function jump (target, options) {
  var start = window.pageYOffset
  var opt = {
    duration: options.duration,
    offset: options.offset || 0,
    callback: options.callback,
    easing: options.easing || easeInOutQuad
  }
  // This makes ids that start with a number work: ('[id="' + decodeURI(target).split('#').join('') + '"]')
  // DecodeURI for nonASCII hashes, they was encoded, but id was not encoded, it lead to not finding the tgt element by id.
  // And this is for IE: document.body.scrollTop
  var tgt = document.querySelector('[id="' + decodeURI(target).split('#').join('') + '"]')
  var distance = typeof target === 'string'
    ? opt.offset + (
      target
        ? (tgt && tgt.getBoundingClientRect().top) || 0 // handle non-existent links better.
        : -(document.documentElement.scrollTop || document.body.scrollTop))
    : target
  var duration = typeof opt.duration === 'function'
    ? opt.duration(distance)
    : opt.duration
  var timeStart
  var timeElapsed

  requestAnimationFrame(function (time) { timeStart = time; loop(time) })
  function loop (time) {
    timeElapsed = time - timeStart

    window.scrollTo(0, opt.easing(timeElapsed, start, distance, duration))

    if (timeElapsed < duration) { requestAnimationFrame(loop) } else { end() }
  }

  function end () {
    window.scrollTo(0, start + distance)

    if (typeof opt.callback === 'function') { opt.callback() }
  }

  // Robert Penner's easeInOutQuad - http://robertpenner.com/easing/
  function easeInOutQuad (t, b, c, d) {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return -c / 2 * (t * (t - 2) - 1) + b
  }
}


/***/ }),

/***/ "./node_modules/tocbot/src/js/update-toc-scroll.js":
/*!*********************************************************!*\
  !*** ./node_modules/tocbot/src/js/update-toc-scroll.js ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = function updateTocScroll (options) {
  var toc = document.querySelector(options.tocSelector)
  if (toc && toc.scrollHeight > toc.clientHeight) {
    var activeItem = toc.querySelector('.' + options.activeListItemClass)
    if (activeItem) {
      toc.scrollTop = activeItem.offsetTop
    }
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/src/assets/js/build": 0,
/******/ 			"src/assets/css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkeleventy_multilang"] = self["webpackChunkeleventy_multilang"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["src/assets/css/main"], () => (__webpack_require__("./src/assets/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src/assets/css/main"], () => (__webpack_require__("./src/assets/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;