(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vcBacktop"] = factory();
	else
		root["vcBacktop"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(3)
module.exports = __webpack_require__(7)

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(6)
if (false) {
(function () {
var hotAPI = require("vue-hot-reload-api")
hotAPI.install(require("vue"))
if (!hotAPI.compatible) return
var id = "-!babel!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Backtop.vue"
hotAPI.createRecord(id, module.exports)
module.hot.accept(["-!babel!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Backtop.vue","-!vue-html-loader!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Backtop.vue"], function () {
var newOptions = require("-!babel!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Backtop.vue")
if (newOptions && newOptions.__esModule) newOptions = newOptions.default
var newTemplate = require("-!vue-html-loader!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Backtop.vue")
hotAPI.update(id, newOptions, newTemplate)
})
})()
}

/***/ },
/* 2 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/.0.21.0@css-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-d39013f0&file=Backtop.vue!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Backtop.vue", function() {
			var newContent = require("!!./../../node_modules/.0.21.0@css-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-d39013f0&file=Backtop.vue!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Backtop.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".icon-top {\n  position: fixed;\n  z-index: 9999;\n  background-color: #676262;\n  border-radius: 50%;\n  opacity: .7;\n}\n.icon-top:hover {\n  opacity: .95;\n}\n.icon-top:hover i {\n  top: 17px;\n}\n.icon-top > i {\n  display: inline-block;\n  color: #fff;\n  margin: 0;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  background-image: url('data:image/png;base64,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');\n  background-position: center center;\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n", ""]);

// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = "<div class=\"vc-backtop-component\">\n        <a href=\"javascript:\" v-el:btn class=\"iconfont icon-top\" :style=\"style\" @click=\"backTop\" v-show=\"show\">\n            <i :style=\"{width: iconWidth, height: iconHeight}\"></i>\n        </a>\n    </div>";

/***/ },
/* 7 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// <template>
//     <div class="vc-backtop-component">
//         <a href="javascript:" v-el:btn class="iconfont icon-top" :style="style" @click="backTop" v-show="show">
//             <i :style="{width: iconWidth, height: iconHeight}"></i>
//         </a>
//     </div>
// </template>

// <style>
//     .icon-top {
//         position: fixed;
//         z-index: 9999;
//         background-color: #676262;
//         border-radius: 50%;
//         opacity: .7;
//     }
//     .icon-top:hover {
//         opacity: .95;
//     }
//     .icon-top:hover i {
//         top: 17px;
//     }
//     .icon-top > i {
//         display: inline-block;
//         color: #fff;
//         margin: 0;
//         position: absolute;
//         top: 45%;
//         left: 50%;
//         -webkit-transform: translate(-50%, -50%);
//         -moz-transform: translate(-50%, -50%);
//         transform: translate(-50%, -50%);
//         -webkit-transition: all 0.3s ease;
//         -moz-transition: all 0.3s ease;
//         transition: all 0.3s ease;
//         background-image: url('data:image/png;base64,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');
//         background-position: center center;
//         background-size: 100%;
//         background-repeat: no-repeat;
//     }
// </style>

// <script>
/**
    * 工具方法
    */
/*
* 频率控制 返回函数连续调用时，fn 执行频率限定为每多少时间执行一次
* @param fn {function}  需要调用的函数
* @param delay {number}    延迟时间，单位毫秒
* @param immediate {bool} 给 immediate参数传递false 绑定的函数先执行，而不是delay后后执行。
* @return {function}实际调用函数
*/
var throttle = function throttle(fn, delay, immediate, debounce) {
    var curr = +new Date(),
        //当前事件
    last_call = 0,
        last_exec = 0,
        timer = null,
        diff,
        //时间差
    context,
        //上下文
    args,
        exec = function exec() {
        last_exec = curr;
        fn.apply(context, args);
    };
    return function () {
        curr = +new Date();
        context = this, args = arguments, diff = curr - (debounce ? last_call : last_exec) - delay;
        clearTimeout(timer);
        if (debounce) {
            if (immediate) {
                timer = setTimeout(exec, delay);
            } else if (diff >= 0) {
                exec();
            }
        } else {
            if (diff >= 0) {
                exec();
            } else if (immediate) {
                timer = setTimeout(exec, -diff);
            }
        }
        last_call = curr;
    };
};

/*
* 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 delay，fn 才会执行
* @param fn {function}  要调用的函数
* @param delay   {number}    空闲时间
* @param immediate  {bool} 给 immediate参数传递false 绑定的函数先执行，而不是delay后后执行。
* @return {function}实际调用函数
*/
var debounce = function debounce(fn, delay, immediate) {
    return throttle(fn, delay, immediate, true);
};

function getScrollTop() {
    //取得滚动条的竖直距离  
    return document.documentElement.scrollTop || document.body.scrollTop;
}

function setScrollTop(value) {
    //设置滚动条的竖直距离,实现效果的关键就是在很短的间隔时间内不断地修改滚动条的竖直距离,以实现滚动效果  
    document.documentElement.scrollTop = value;
    document.body.scrollTop = value;
}

var DEFAULT_SIZE = 50;

exports.default = {
    name: 'vc-backtop',
    props: {
        style: {
            type: Object,
            default: function _default() {
                return {
                    width: DEFAULT_SIZE + 'px',
                    height: DEFAULT_SIZE + 'px',
                    top: 'auto',
                    left: 'auto',
                    right: '30px',
                    bottom: '40px'
                };
            }
        },
        scrollingHide: {
            type: Boolean,
            default: false
        },
        interval: {
            type: [Number, String],
            default: 32
        },
        scrollbarOffset: {
            type: [Number, String],
            default: 100
        },
        acceleration: {
            type: [Number, String],
            default: .5
        },
        time: {
            type: [Number, String],
            default: 10
        },
        mode: { // 动画模式
            type: String,
            default: 'raf'
        }
    },
    data: function data() {
        return {
            btn: null,
            show: false
        };
    },
    ready: function ready() {
        var _this = this;

        this.btn = this.$els.btn;
        setTimeout(function () {
            _this.bindEvent();
        });
    },

    methods: {
        bindEvent: function bindEvent() {
            var btn = this.btn;
            window.addEventListener('scroll', this.scrollHandler, false);
        },
        scrollHandler: function scrollHandler() {
            if (this.scrollingHide) {
                this.show = false;
                this._timer && clearTimeout(this._timer);
                this._timer = setTimeout(function () {
                    return throttle(this.scrollSpy, +this.interval)();
                }.bind(this), 250);
                return;
            }
            return throttle(this.scrollSpy, +this.interval)();
        },
        scrollSpy: function scrollSpy() {
            var scrollTop = getScrollTop();
            if (scrollTop > this.scrollbarOffset) {
                // 判断滚动条距离窗口顶部多远时显示出来，这里是100px
                this.show = true;
            } else {
                this.show = false;
            }
        },
        backTop: function backTop(acceleration, time) {
            var _this2 = this;

            //修改参数可调整返回顶部的速度  
            var speed = 1 + this.acceleration;
            if (this.mode !== 'raf') {
                (function () {
                    var timer = setInterval(function () {
                        setScrollTop(Math.floor(getScrollTop() / speed)); //这行代码是关键，取得滚动条竖直距离，除以speed后再给滚动条设置竖直距离  
                        if (getScrollTop() == 0) clearInterval(timer);
                    }, _this2.time);
                })();
            } else {
                requestAnimationFrame(function step() {
                    setScrollTop(Math.floor(getScrollTop() / speed));

                    if (getScrollTop() > 0) {
                        requestAnimationFrame(step);
                    }
                });
            }
        }
    },
    computed: {
        iconWidth: function iconWidth() {
            return parseFloat(this.style.width) / 2 + 'px';
        },
        iconHeight: function iconHeight() {
            return parseFloat(this.style.height) / 2 + 'px';
        }
    },
    beforeDestory: function beforeDestory() {
        window.removeEventListener('scroll', this.scrollHandler, false);
    }
};
// </script>

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _Backtop = __webpack_require__(1);

var _Backtop2 = _interopRequireDefault(_Backtop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _Backtop2.default;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=build.js.map