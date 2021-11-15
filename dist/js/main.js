/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/components/checkbox-delivery/checkbox-delivery.js":
/*!**********************************************************************!*\
  !*** ./src/blocks/components/checkbox-delivery/checkbox-delivery.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var radios = document.querySelectorAll('.checkbox-delivery');

if (radios) {
  radios.forEach(function (radio) {
    radio.addEventListener('click', function () {
      radios.forEach(function (i) {
        i.classList.remove('active-checkbox');
      });
      this.classList.add('active-checkbox');
    });
  });
}

/***/ }),

/***/ "./src/blocks/components/index-container/index-container.js":
/*!******************************************************************!*\
  !*** ./src/blocks/components/index-container/index-container.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var indexWrapper = document.querySelector('.index-wrapper');

if (indexWrapper) {
  var move = function move(obj, e) {
    obj.style = "";
    obj.style.top = e.clientY + "px";
    obj.style.left = e.clientX + "px";
  };

  indexWrapper.style.cursor = "none";
  var cursor = document.createElement("div"),
      follow = document.createElement("div");
  cursor.classList.add("cursor");
  follow.classList.add("follow");
  indexWrapper.appendChild(cursor);
  indexWrapper.appendChild(follow);

  if (cursor) {
    window.addEventListener("mousemove", function (event) {
      var e = event,
          t = e.target,
          f = follow,
          c = cursor;

      if (t.tagName == "A") {
        c.style.backgroundColor = "transparent";
        f.style.top = t.offsetTop + "px";
        f.style.left = t.offsetLeft + "px";
        f.style.width = t.clientWidth + "px";
        f.style.height = t.clientHeight + "px";
        f.classList.add("on-focus");
      } else {
        move(c, e);
        move(f, e);
        f.classList.remove("on-focus");
      }
    });
  }
}

/***/ }),

/***/ "./src/blocks/components/input/input.js":
/*!**********************************************!*\
  !*** ./src/blocks/components/input/input.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");

var forms = document.querySelectorAll(".form");
var inputsPhone = document.querySelectorAll(".js-phone");

if (forms) {
  forms.forEach(function (form) {
    var fields = form.querySelectorAll("input, textarea");
    fields.forEach(function (field) {
      field.addEventListener("change", function () {
        var inputValue = this.value;
        inputValue !== "" ? this.classList.add("input-focus") : this.classList.remove("input-focus");
      });
    });
  });
}

if (inputsPhone) {
  inputsPhone.forEach(function (phone) {
    var maskOptions = {
      mask: "+{7}(000)000-00-00"
    };
    var mask = Object(imask__WEBPACK_IMPORTED_MODULE_0__["default"])(phone, maskOptions);
  });
}

/***/ }),

/***/ "./src/blocks/components/logo/logo.js":
/*!********************************************!*\
  !*** ./src/blocks/components/logo/logo.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vivus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vivus */ "./node_modules/vivus/dist/vivus.js");
/* harmony import */ var vivus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vivus__WEBPACK_IMPORTED_MODULE_0__);

new vivus__WEBPACK_IMPORTED_MODULE_0___default.a('logo', {
  duration: 200,
  type: "delayed",
  animTimingFunction: vivus__WEBPACK_IMPORTED_MODULE_0___default.a.EASE_OUT
}, after);
/* fillPath */

var count = 0;

function fillPath(classname, color) {
  count++;
  var path = document.querySelector('.' + classname);
  path.setAttribute('class', "".concat(classname, " opacity-").concat(count));
}
/* after */


function after() {
  fillPath('logo-path-1', '#00408F');
  fillPath('logo-path-2', '#00408F');
  fillPath('logo-path-3', '#00408F');
  fillPath('logo-path-4', '#00408F');
  fillPath('logo-path-5', '#00408F');
  fillPath('logo-path-6', '#00408F');
  fillPath('logo-path-7', '#00408F');
  fillPath('logo-path-8', '#00408F');
  fillPath('logo-path-9', '#00408F');
  fillPath('logo-path-10', '#00408F');
}

/***/ }),

/***/ "./src/blocks/components/main-slider/main-slider.js":
/*!**********************************************************!*\
  !*** ./src/blocks/components/main-slider/main-slider.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");



swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_0__["Mousewheel"], swiper__WEBPACK_IMPORTED_MODULE_0__["Controller"]]); //Табы

var tabBtn = document.querySelectorAll(".js-tabs-btn");
tabBtn.forEach(function (item, i) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    var tabName = this.dataset.slider,
        tabContent = document.querySelector("#".concat(tabName));
    document.querySelectorAll(".slider-tab-item.active-tab").forEach(function (item, i) {
      item.classList.remove("active-tab");
    });
    document.querySelectorAll(".slider-tabs__btn.active-tab").forEach(function (item, i) {
      item.classList.remove("active-tab");
    });
    tabContent.classList.add("active-tab");
    this.classList.add("active-tab");
  });
});
var tabItems = document.querySelectorAll('.slider-tab-item');
var tabSlidersAnimating = [];
tabItems.forEach(function (tab) {
  var sliderLargeEl = tab.querySelector('.slider-first-tab-1'); // Большой (или первый или основной) слайдер текущего таба

  if (sliderLargeEl === null) {
    return;
  }

  var sliderSmallEl = tab.querySelector('.slider-two-tab-2'); // Маленький (или второй или дополнительный) слайдер текущего таба

  if (sliderSmallEl === null) {
    return;
  }

  var sliderLargeInstance = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderLargeEl, {
    slidesPerView: 1,
    speed: 1000,
    loopAdditionalSlides: 10,
    //mousewheel: true,
    navigation: {
      nextEl: ".slider-arrows__next",
      prevEl: ".slider-arrows__prev"
    },
    watchSlidesProgress: true
  });
  var sliderSmallInstance = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderSmallEl, {
    slidesPerView: 1,
    spaceBetween: 40,
    speed: 1000,
    //mousewheel: true,
    pagination: {
      el: ".slider-pagination",
      type: "fraction",
      renderFraction: function renderFraction(currentClass, totalClass) {
        return "<span class=\"".concat(currentClass, "\">0</span>\n\t\t\t\t\t\t<div class=\"swiper-pagination-line\">\n\t\t\t\t\t\t\t<span class=\"swiper-line-animation\">\u2014</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"").concat(totalClass, "\">0</span>");
      },
      formatFractionCurrent: addZero,
      formatFractionTotal: addZero
    }
  }); //Передача управления слайдерами

  sliderLargeInstance.controller.control = sliderSmallInstance;
  sliderSmallInstance.controller.control = sliderLargeInstance;
  tabSlidersAnimating.push(sliderLargeInstance);

  var animationOptionsPrev = function animationOptionsPrev() {
    var slideActive = tab.querySelector('.swiper-slide-active');
    var slideActiveImg = slideActive.querySelector('.slide-img');
    var slideActiveCaption = slideActive.querySelector('.caption-slide');
    var paginationCurrent = tab.querySelector('.swiper-pagination-current');
    var paginationLine = tab.querySelector('.swiper-line-animation');
    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      targets: slideActiveImg,
      translateX: ['-100%', 0],
      scale: [1.3, 1],
      delay: 300,
      duration: 1000,
      easing: 'easeInOutQuad',
      direction: 'normal'
    });
    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      targets: slideActiveCaption,
      translateX: ['-100%', 0],
      delay: 500,
      duration: 700,
      easing: 'easeInOutSine',
      direction: 'normal'
    });
    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      targets: paginationCurrent,
      translateY: ['-100%', 0],
      delay: 0,
      duration: 500,
      easing: 'easeInOutSine',
      direction: 'normal'
    });
    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      targets: paginationLine,
      translateX: ['-100%', 0],
      delay: 0,
      duration: 500,
      easing: 'easeInOutSine',
      direction: 'normal'
    });
  };

  var animationOptionsNext = function animationOptionsNext() {
    var slideActive = tab.querySelector('.swiper-slide-active');
    var slideActiveImg = slideActive.querySelector('.slide-img');
    var slideActiveCaption = slideActive.querySelector('.caption-slide');
    var paginationCurrent = tab.querySelector('.swiper-pagination-current');
    var paginationLine = tab.querySelector('.swiper-line-animation');
    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      targets: slideActiveImg,
      translateX: ['100%', 0],
      scale: [1.3, 1],
      delay: 300,
      duration: 1000,
      easing: 'easeInOutQuad',
      direction: 'normal'
    });
    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      targets: slideActiveCaption,
      translateX: ['100%', 0],
      delay: 500,
      duration: 700,
      easing: 'easeInOutSine',
      direction: 'normal'
    });
    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      targets: paginationCurrent,
      translateY: ['-100%', 0],
      delay: 0,
      duration: 500,
      easing: 'easeInOutSine',
      direction: 'normal'
    });
    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      targets: paginationLine,
      translateX: ['-100%', 0],
      delay: 0,
      duration: 500,
      easing: 'easeInOutSine',
      direction: 'normal'
    });
  };

  tabSlidersAnimating.forEach(function (slider) {
    slider.on('slidePrevTransitionStart', animationOptionsPrev);
    slider.on('slideNextTransitionStart', animationOptionsNext);
  });
}); //Добавляем 0 в начало в пагинации

function addZero(num) {
  return num > 9 ? num : '0' + num;
}

var tabsBtnFirst = document.querySelector('[data-slider="slider-tab-1"]');
var tabsBtnTwo = document.querySelector('[data-slider="slider-tab-2"]');
var mainSliderBgTwo = document.querySelector('.main-slider__bg--two');
var firstSliderBgTwo = document.querySelector('.slider-first__bg--two');
var twoSliderBgTwo = document.querySelector('.slider-two__bg--two');
var mainSliderBgFirst = document.querySelector('.main-slider__bg--first');

if (tabsBtnFirst) {
  tabsBtnFirst.addEventListener('click', function () {
    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      targets: mainSliderBgTwo,
      width: '100%',
      delay: 0,
      duration: 1500,
      easing: 'easeInOutSine',
      direction: 'normal'
    });
    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      targets: firstSliderBgTwo,
      width: 160,
      delay: 500,
      duration: 1000,
      easing: 'easeInOutSine',
      direction: 'normal'
    });
    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      targets: twoSliderBgTwo,
      width: '100%',
      delay: 1000,
      duration: 1000,
      easing: 'easeInOutSine',
      direction: 'normal'
    });
  });
}

if (tabsBtnTwo) {
  tabsBtnTwo.addEventListener('click', function () {
    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      targets: mainSliderBgTwo,
      width: '0%',
      delay: 0,
      duration: 1500,
      easing: 'easeInOutSine',
      direction: 'normal'
    });
    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      targets: firstSliderBgTwo,
      width: 0,
      delay: 800,
      duration: 1000,
      easing: 'easeInOutSine',
      direction: 'normal'
    });
    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      targets: twoSliderBgTwo,
      width: 0,
      delay: 300,
      duration: 1000,
      easing: 'easeInOutSine',
      direction: 'normal'
    });
    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      targets: mainSliderBgFirst,
      width: '100%',
      delay: 0,
      duration: 1500,
      easing: 'easeInOutSine',
      direction: 'normal'
    });
  });
}

/***/ }),

/***/ "./src/blocks/components/rebuilding/rebuilding.js":
/*!********************************************************!*\
  !*** ./src/blocks/components/rebuilding/rebuilding.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var rebuild = document.querySelector('.rebuilding');
var buttons = document.querySelectorAll('.rebuilding__item');
var catalogCards = document.querySelector('.card-items');

if (rebuild) {
  rebuild.addEventListener('click', function (event) {
    event.preventDefault();
    var target = event.target;
    var rebuildButton = target.closest('.rebuilding__item');
    var dataRebuild = rebuildButton.dataset.rebuld;
    buttons.forEach(function (button) {
      button.classList.remove('active');
    });

    if (rebuildButton) {
      dataRebuild === 'list' ? catalogCards.classList.add('cards-list') : catalogCards.classList.remove('cards-list');
      rebuildButton.classList.add('active');
    }
  });
}

/***/ }),

/***/ "./src/blocks/components/select/select.js":
/*!************************************************!*\
  !*** ./src/blocks/components/select/select.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);

var element = document.querySelector('.js-choice');

if (element) {
  var choices = new choices_js__WEBPACK_IMPORTED_MODULE_0___default.a(element, {
    searchEnabled: false,
    highlighted: false
  });
}

/***/ }),

/***/ "./src/blocks/components/sorting/sorting.js":
/*!**************************************************!*\
  !*** ./src/blocks/components/sorting/sorting.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/about-block/about-block.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/about-block/about-block.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");


var animationItems = document.querySelectorAll('.animation-img');

if (animationItems) {
  var animScroll = function animScroll() {
    animationItems.forEach(function (animationItem) {
      var animItem = animationItem;
      var animItemHeight = animItem.offsetHeight;
      var animItemOffset = offset(animItem).top;
      var animStart = 2;
      var animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add('anim-img');
      }
    });
  };

  var offset = function offset(element) {
    var rect = element.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  };

  window.addEventListener('scroll', animScroll);
}

if (document.documentElement.clientWidth < 768) {
  if (document.querySelector('.about-slider')) {
    var sliderAbout = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.about-slider', {
      slidesPerView: 'auto',
      spaceBetween: 24,
      speed: 1000
    });
  }
}

/***/ }),

/***/ "./src/blocks/modules/catalog/catalog.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/catalog/catalog.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");


swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]]);
var catalogSlider = document.querySelector('.catalog-slider');

if (catalogSlider) {
  var catalogSliderMain = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](catalogSlider, {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 64
      }
    }
  });
} //Перестроение навигации в адаптиве


var catalogNav = document.querySelector('.catalog-nav');
var catalogWrap = document.querySelector('.catalog-wrap');

if (document.documentElement.clientWidth < 1280) {
  if (catalogWrap) {
    var breadcrumbsCatalog = catalogWrap.querySelector('.breadcrumbs');
    breadcrumbsCatalog.after(catalogNav);
  }
}

/***/ }),

/***/ "./src/blocks/modules/certificates/certificates.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/certificates/certificates.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var glightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! glightbox */ "./node_modules/glightbox/dist/js/glightbox.min.js");
/* harmony import */ var glightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(glightbox__WEBPACK_IMPORTED_MODULE_1__);



swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]]);
var sliderLargeInstance = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.certificates__slider', {
  slidesPerView: 'auto',
  spaceBetween: 47,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
var lightbox = glightbox__WEBPACK_IMPORTED_MODULE_1___default()();

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var footerBox = document.querySelectorAll('.js-footer-box');
footerBox.forEach(function (item) {
  var footerBoxBtn = item.querySelector('p');
  footerBoxBtn.addEventListener('click', function () {
    this.parentElement.classList.toggle('footer-list-open');
  });
});

/***/ }),

/***/ "./src/blocks/modules/form-partners/form-partners.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/form-partners/form-partners.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");

var forms = document.querySelectorAll(".form");
var orderForms = document.querySelectorAll(".order-form");

var validateEmail = function validateEmail(email) {
  var a = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return a.test(email);
};

var validate = function validate(form) {
  var inputs = form.querySelectorAll(".input, .textarea");
  var mails = document.querySelectorAll('[name="mail"]');
  var hasError = false;

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function () {
      this.parentElement.classList.remove("error-input");
    });

    if (!inputs[i].value) {
      inputs[i].parentElement.classList.add("error-input");
      inputs[0].focus();
      hasError = true;
    }

    mails.forEach(function (mail) {
      mail.addEventListener("input", function () {
        if (!validateEmail(mail.value)) {
          mail.parentElement.classList.add("error-input");
          hasError = true;
        }
      });
    });
  }

  return !hasError;
};

forms.forEach(function (form) {
  var action = form.action;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var isValid = validate(form);

    if (!isValid) {
      return;
    }

    var formData = new FormData(this);
    fetch(action, {
      method: "POST",
      body: formData
    }).then(function (response) {
      if (response.ok) {
        var modalProduct = document.getElementById("modal-product");

        if (modalProduct.classList.contains("is-open")) {
          micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].close("modal-product");
        }

        micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].show("modal-succsess");
        var fields = form.querySelectorAll("input, textarea");
        fields.forEach(function (field) {
          field.classList.remove("input-focus");
        });
        form.reset();
      }
    });
  });
}); // orderForms.forEach((form) => {
//     const action = form.action;
//     form.addEventListener("submit", function (e) {
//         e.preventDefault();
//         const isValid = validate(form);
//         if (!isValid) {
//             return;
//         }
//         const formData = new FormData(this);
//         fetch(action, {
//             method: "POST",
//             body: formData,
//         }).then((response) => {
//             if (response.ok) {
//                 const fields = form.querySelectorAll("input, textarea");
//                 fields.forEach((field) => {
//                     field.classList.remove("input-focus");
//                 });
//                 form.reset();
//             }
//         });
//     });
// });

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var burgerBtn = document.querySelector('.burger-btn');
var burgerCloseBtn = document.querySelector('.burger-close');
var burgerMenu = document.querySelector('.burger-menu');

if (burgerBtn) {
  burgerBtn.addEventListener('click', function () {
    burgerMenu.style.left = '0%';
    document.querySelector('html').style.overflow = 'hidden';
  });
  burgerCloseBtn.addEventListener('click', function () {
    burgerMenu.style.left = '-100%';
    document.querySelector('html').style.overflow = 'visible';
  });
}

/***/ }),

/***/ "./src/blocks/modules/main/main.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/main/main.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");


swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]]);
var pageSliders = document.querySelectorAll(".page-slider");

if (pageSliders) {
  pageSliders.forEach(function (pageSlider) {
    var slider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](pageSlider, {
      slidesPerView: "auto",
      speed: 1000,
      spaceBetween: 32,
      pagination: {
        el: ".swiper-pagination"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  });
} //видео


var btnPlayVideo = document.querySelectorAll(".js-video");

if (btnPlayVideo) {
  btnPlayVideo.forEach(function (item) {
    item.addEventListener("click", function () {
      this.style.display = "none";
      console.log(this.nextSibling);
      this.nextElementSibling.play();
    });
  });
} //Табы


var tabBtn = document.querySelectorAll(".tabs__nav-button");
tabBtn.forEach(function (item, i) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    var tabName = this.dataset.tab,
        tabContent = document.querySelector("#".concat(tabName));
    console.log(tabName);
    document.querySelectorAll(".tabs__item.active-tab").forEach(function (item, i) {
      item.classList.remove("active-tab");
    });
    document.querySelectorAll(".tabs__nav-button.active-tab").forEach(function (item, i) {
      item.classList.remove("active-tab");
    });
    tabContent.classList.add("active-tab");
    this.classList.add("active-tab");
  });
});

/***/ }),

/***/ "./src/blocks/modules/modals/modals.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/modals/modals.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");

micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].init({
  closeTrigger: "data-custom-close",
  disableScroll: true,
  onShow: function onShow(modal) {
    var input = modal.querySelector("input");
    input.focus();
  }
});
var closeModalBtns = document.querySelectorAll(".modal__close");
closeModalBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    this.closest(".modal").classList.remove("is-open");
  });
});

/***/ }),

/***/ "./src/blocks/modules/product/product.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/product/product.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");


swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_0__["Thumbs"], swiper__WEBPACK_IMPORTED_MODULE_0__["EffectFade"]]);
var sliderSmall = document.querySelector('.js-slider-small');
var sliderBig = document.querySelector('.js-slider-main');

if (sliderSmall) {
  var productSliderSmall = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderSmall, {
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 500,
    direction: "horizontal",
    breakpoints: {
      1280: {
        slidesPerView: 4,
        spaceBetween: 48,
        direction: "vertical"
      }
    }
  });
  var productSliderMain = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderBig, {
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    thumbs: {
      swiper: productSliderSmall
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  productSliderSmall.update();
}

var productPage = document.querySelector('.product');

if (document.documentElement.clientWidth < 768) {
  if (productPage) {
    var productBtn = productPage.querySelector('.card-list-btn span');
    productBtn.textContent = 'В корзину';
  }
}

/***/ }),

/***/ "./src/blocks/modules/productions/productions.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/productions/productions.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var productionsTabBtn = document.querySelectorAll(".js-productions-tab-btn");
productionsTabBtn.forEach(function (item, i) {
  item.addEventListener("mouseenter", function (e) {
    e.preventDefault();
    var tabName = this.dataset.productions,
        tabContent = document.querySelector("#".concat(tabName));
    document.querySelectorAll(".productions__content-item.active-tab").forEach(function (item, i) {
      item.classList.remove("active-tab");
    });
    tabContent.classList.add("active-tab");
  });
});

var animateCursor = function animateCursor(selector, animate) {
  var animateBlock = document.querySelector(selector);

  if (animateBlock) {
    var link = animateBlock.querySelectorAll('.hover-this');
    var cursor = animateBlock.querySelector('.cursor');

    var animateIt = function animateIt(e, link) {
      var span = link.querySelector('span'),
          spanRect = span.getBoundingClientRect();
      var x = e.offsetX,
          y = e.offsetY,
          width = link.offsetWidth,
          height = link.offsetHeight,
          move = 25,
          xMove = Math.round(x / width * (move * 2) - move),
          yMove = Math.round(y / height * (move * 2) - move);
      span.style.transform = "translate( ".concat(xMove, "px, ").concat(yMove, "px)");
      span.style.setProperty('--x', Math.round(e.x - xMove) + 'px');
      span.style.setProperty('--y', Math.round(e.y - yMove) + 'px');
      if (e.type === 'mouseleave') span.style.transform = '';
    };

    var editCursor = function editCursor(e) {
      var x = e.clientX,
          y = e.clientY;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    };

    link.forEach(function (b) {
      return b.addEventListener('mousemove', function (e) {
        if (animate) {
          animateIt(e, b);
        }

        b.closest(selector).classList.add('show-cursor');
      });
    });
    link.forEach(function (b) {
      return b.addEventListener('mouseleave', function (e) {
        if (animate) {
          animateIt(e, b);
        }

        b.closest(selector).classList.remove('show-cursor');
      });
    });
    window.addEventListener('mousemove', editCursor);
  }
};

animateCursor('.productions', true);
animateCursor('.main-slider', false);
animateCursor('.news-page', false);

/***/ }),

/***/ "./src/blocks/modules/vacancies/vacancies.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/vacancies/vacancies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AccordionItem = function AccordionItem(item) {
  var _this = this;

  var activeClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'accordion-active';

  _classCallCheck(this, AccordionItem);

  _defineProperty(this, "toggle", function () {
    _this.isActive ? _this.close() : _this.open();
  });

  _defineProperty(this, "close", function () {
    _this.item.classList.remove(_this.activeClass);

    _this.content.style.maxHeight = null;
    _this.isActive = false;
    _this.buttonRotate.textContent = 'Смотреть';
  });

  _defineProperty(this, "open", function () {
    _this.item.classList.add(_this.activeClass);

    _this.content.style.maxHeight = _this.content.scrollHeight + "px";
    _this.isActive = true;
    _this.buttonRotate.textContent = 'Свернуть';
  });

  this.item = item;
  this.button = this.item.querySelector('.js-accordion-button');
  this.content = this.item.querySelector('.js-accordion-content');
  this.buttonRotate = this.button.querySelector('span');
  this.isActive = false;
  this.activeClass = activeClass;
};

var Accordion = function Accordion(parentSelector, activeClass) {
  var _this2 = this;

  _classCallCheck(this, Accordion);

  _defineProperty(this, "init", function () {
    _this2.items.forEach(function (item) {
      var itemInstance = new AccordionItem(item, _this2.activeClass);
      itemInstance.button.addEventListener('click', function () {
        // if ( this.activeInstance !== null ) {
        //     this.activeInstance.toggle()
        // }
        // if ( itemInstance === this.activeInstance ) {
        //     this.activeInstance = null
        //     return
        // }
        itemInstance.toggle();
        _this2.activeInstance = itemInstance;
      });
    });
  });

  this.accordionItem = document.querySelector(parentSelector);
  this.items = this.accordionItem.querySelectorAll('.js-accordion-item');
  this.activeInstance = null;
  this.activeClass = activeClass;
  this.init();
};

document.querySelectorAll('.js-accordion-item').forEach(function (item) {
  if (item) {
    var newAccordion = new Accordion('.js-vacancies', 'vacancies-open');
  }
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_logo_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/logo/logo */ "./src/blocks/components/logo/logo.js");
/* harmony import */ var _components_main_slider_main_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %components%/main-slider/main-slider */ "./src/blocks/components/main-slider/main-slider.js");
/* harmony import */ var _components_input_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %components%/input/input */ "./src/blocks/components/input/input.js");
/* harmony import */ var _components_index_container_index_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %components%/index-container/index-container */ "./src/blocks/components/index-container/index-container.js");
/* harmony import */ var _components_index_container_index_container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_index_container_index_container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_sorting_sorting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %components%/sorting/sorting */ "./src/blocks/components/sorting/sorting.js");
/* harmony import */ var _components_sorting_sorting__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_sorting_sorting__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_rebuilding_rebuilding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %components%/rebuilding/rebuilding */ "./src/blocks/components/rebuilding/rebuilding.js");
/* harmony import */ var _components_rebuilding_rebuilding__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_rebuilding_rebuilding__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_checkbox_delivery_checkbox_delivery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %components%/checkbox-delivery/checkbox-delivery */ "./src/blocks/components/checkbox-delivery/checkbox-delivery.js");
/* harmony import */ var _components_checkbox_delivery_checkbox_delivery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_checkbox_delivery_checkbox_delivery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_select_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %components%/select/select */ "./src/blocks/components/select/select.js");









/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_main_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/main/main */ "./src/blocks/modules/main/main.js");
/* harmony import */ var _modules_productions_productions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/productions/productions */ "./src/blocks/modules/productions/productions.js");
/* harmony import */ var _modules_productions_productions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_productions_productions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_certificates_certificates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/certificates/certificates */ "./src/blocks/modules/certificates/certificates.js");
/* harmony import */ var _modules_form_partners_form_partners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/form-partners/form-partners */ "./src/blocks/modules/form-partners/form-partners.js");
/* harmony import */ var _modules_about_block_about_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/about-block/about-block */ "./src/blocks/modules/about-block/about-block.js");
/* harmony import */ var _modules_catalog_catalog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/catalog/catalog */ "./src/blocks/modules/catalog/catalog.js");
/* harmony import */ var _modules_product_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/product/product */ "./src/blocks/modules/product/product.js");
/* harmony import */ var _modules_vacancies_vacancies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/vacancies/vacancies */ "./src/blocks/modules/vacancies/vacancies.js");
/* harmony import */ var _modules_vacancies_vacancies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_vacancies_vacancies__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_modals_modals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/modals/modals */ "./src/blocks/modules/modals/modals.js");












/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");



/***/ })

/******/ });
//# sourceMappingURL=main.js.map