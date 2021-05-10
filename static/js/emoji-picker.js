/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/emoji-button@2.2.2/dist/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (e, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (e = e || self).EmojiButton = n()
}(this, function () {
    "use strict";

    function e(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }

    function n(e, n) {
        for (var a = 0; a < n.length; a++) {
            var i = n[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function a(e, a, i) {
        return a && n(e.prototype, a), i && n(e, i), e
    }

    function i(e, n, a) {
        return n in e ? Object.defineProperty(e, n, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = a, e
    }

    function t(e, n) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n && (i = i.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable
            })), a.push.apply(a, i)
        }
        return a
    }

    function o(e) {
        for (var n = 1; n < arguments.length; n++) {
            var a = null != arguments[n] ? arguments[n] : {};
            n % 2 ? t(a, !0).forEach(function (n) {
                i(e, n, a[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : t(a).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
            })
        }
        return e
    }

    function r(e) {
        return function (e) {
            if (Array.isArray(e)) {
                for (var n = 0, a = new Array(e.length); n < e.length; n++) a[n] = e[n];
                return a
            }
        }(e) || function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function F() {
    }

    !function (e, n) {
        void 0 === n && (n = {});
        var a = n.insertAt;
        if (e && "undefined" != typeof document) {
            var i = document.head || document.getElementsByTagName("head")[0], t = document.createElement("style");
            t.type = "text/css", "top" === a && i.firstChild ? i.insertBefore(t, i.firstChild) : i.appendChild(t), t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e))
        }
    }('.emoji-picker {\n  margin: 0 0.5em;\n  border: 1px solid #999999;\n  border-radius: 5px;\n  box-shadow: 0px 0px 3px 1px #CCCCCC;\n  background: #FFFFFF;\n  width: 20.5rem;\n  height: 27.5rem;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.emoji-picker__content {\n  padding: 0.5em;\n  height: 20.5rem;\n}\n\n.emoji-picker__preview {\n  height: 2em;\n  padding: 0.5em;\n  border-top: 1px solid #999999;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.emoji-picker__preview-emoji {\n  font-size: 2em;\n  margin-right: 0.25em;\n  font-family: "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "EmojiOne Color", "Android Emoji";\n}\n\n.emoji-picker__preview-name {\n  color: #666666;\n  font-size: 0.85em;\n  overflow-wrap: break-word;\n  word-break: break-all;\n}\n\n.emoji-picker__tabs {\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\n\n.emoji-picker__tab {\n  list-style: none;\n  display: inline-block;\n  padding: 0 0.5em;\n  cursor: pointer;\n  flex-grow: 1;\n  text-align: center;\n}\n\n.emoji-picker__tab.active {\n  border-bottom: 3px solid #4F81E5;\n  color: #4F81E5;\n}\n\n.emoji-picker__tab-body {\n  display: none;\n  margin-top: 0.5em;\n}\n\n.emoji-picker__tab-body h2 {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  color: #333333;\n  margin: 0;\n}\n\n.emoji-picker__tab-body.active {\n  display: block;\n}\n\n.emoji-picker__emojis {\n  height: 17.5rem;\n  overflow-y: scroll;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  width: calc(1.3rem * 1.5 * 10);\n  margin: auto;\n}\n\n.emoji-picker__emojis.search-results {\n  height: 21rem;\n}\n\n.emoji-picker__emoji {\n  background: transparent;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 1.3rem;\n  width: 1.5em;\n  height: 1.5em;\n  padding: 0;\n  margin: 0;\n  font-family: "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "EmojiOne Color", "Android Emoji";\n}\n\n.emoji-picker__emoji:hover {\n  background: #E8F4F9;\n}\n\n.emoji-picker__search-container {\n  margin: 0.5em;\n  position: relative;\n  height: 2em;\n  display: flex;\n}\n\n.emoji-picker__search-container input {\n  box-sizing: border-box;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #CCCCCC;\n  padding-right: 2em;\n}\n\n.emoji-picker__search-icon {\n  position: absolute;\n  color: #CCCCCC;\n  width: 1em;\n  height: 1em;\n  right: 0.75em;\n  top: calc(50% - 0.5em);\n}\n\n.emoji-picker__search-not-found {\n  color: #666666;\n  text-align: center;\n  margin-top: 2em;\n}\n\n.emoji-picker__search-not-found-icon {\n  font-size: 3em;\n}\n\n.emoji-picker__search-not-found h2 {\n  margin: 0.5em 0;\n  font-size: 1em;\n}\n\n.emoji-picker__variant-overlay {\n  background: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20.5rem;\n  height: 27.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.emoji-picker__variant-popup {\n  background: #FFFFFF;\n  margin: 0.5em;\n  padding: 0.5em;\n  text-align: center;\n}\n\n.emoji-picker__variant-popup-close-button {\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  position: absolute;\n  right: 1em;\n  padding: 0;\n  top: calc(50% - 0.5em);\n  height: 1em;\n  width: 1em;\n}'), F.prototype = {
        on: function (e, n, a) {
            var i = this.e || (this.e = {});
            return (i[e] || (i[e] = [])).push({fn: n, ctx: a}), this
        }, once: function (e, n, a) {
            var i = this;

            function t() {
                i.off(e, t), n.apply(a, arguments)
            }

            return t._ = n, this.on(e, t, a)
        }, emit: function (e) {
            for (var n = [].slice.call(arguments, 1), a = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, t = a.length; i < t; i++) a[i].fn.apply(a[i].ctx, n);
            return this
        }, off: function (e, n) {
            var a = this.e || (this.e = {}), i = a[e], t = [];
            if (i && n) for (var o = 0, r = i.length; o < r; o++) i[o].fn !== n && i[o].fn._ !== n && t.push(i[o]);
            return t.length ? a[e] = t : delete a[e], this
        }
    };
    var c = F, l = F;
    c.TinyEmitter = l;
    for (var s = "undefined" != typeof window && "undefined" != typeof document, m = ["Edge", "Trident", "Firefox"], f = 0, g = 0; g < m.length; g += 1) if (s && navigator.userAgent.indexOf(m[g]) >= 0) {
        f = 1;
        break
    }
    var _ = s && window.Promise ? function (e) {
        var n = !1;
        return function () {
            n || (n = !0, window.Promise.resolve().then(function () {
                n = !1, e()
            }))
        }
    } : function (e) {
        var n = !1;
        return function () {
            n || (n = !0, setTimeout(function () {
                n = !1, e()
            }, f))
        }
    };

    function h(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function u(e, n) {
        if (1 !== e.nodeType) return [];
        var a = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return n ? a[n] : a
    }

    function d(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function p(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case"HTML":
            case"BODY":
                return e.ownerDocument.body;
            case"#document":
                return e.body
        }
        var n = u(e), a = n.overflow, i = n.overflowX, t = n.overflowY;
        return /(auto|scroll|overlay)/.test(a + t + i) ? e : p(d(e))
    }

    var k = s && !(!window.MSInputMethodContext || !document.documentMode),
        w = s && /MSIE 10/.test(navigator.userAgent);

    function b(e) {
        return 11 === e ? k : 10 === e ? w : k || w
    }

    function v(e) {
        if (!e) return document.documentElement;
        for (var n = b(10) ? document.body : null, a = e.offsetParent || null; a === n && e.nextElementSibling;) a = (e = e.nextElementSibling).offsetParent;
        var i = a && a.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(a.nodeName) && "static" === u(a, "position") ? v(a) : a : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function y(e) {
        return null !== e.parentNode ? y(e.parentNode) : e
    }

    function E(e, n) {
        if (!(e && e.nodeType && n && n.nodeType)) return document.documentElement;
        var a = e.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING, i = a ? e : n, t = a ? n : e,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(t, 0);
        var r, F, c = o.commonAncestorContainer;
        if (e !== c && n !== c || i.contains(t)) return "BODY" === (F = (r = c).nodeName) || "HTML" !== F && v(r.firstElementChild) !== r ? v(c) : c;
        var l = y(e);
        return l.host ? E(l.host, n) : E(e, y(n).host)
    }

    function C(e) {
        var n = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            a = e.nodeName;
        if ("BODY" === a || "HTML" === a) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[n]
        }
        return e[n]
    }

    function D(e, n) {
        var a = "x" === n ? "Left" : "Top", i = "Left" === a ? "Right" : "Bottom";
        return parseFloat(e["border" + a + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function B(e, n, a, i) {
        return Math.max(n["offset" + e], n["scroll" + e], a["client" + e], a["offset" + e], a["scroll" + e], b(10) ? parseInt(a["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }

    function x(e) {
        var n = e.body, a = e.documentElement, i = b(10) && getComputedStyle(a);
        return {height: B("Height", n, a, i), width: B("Width", n, a, i)}
    }

    var j = function (e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }, O = function () {
        function e(e, n) {
            for (var a = 0; a < n.length; a++) {
                var i = n[a];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (n, a, i) {
            return a && e(n.prototype, a), i && e(n, i), n
        }
    }(), z = function (e, n, a) {
        return n in e ? Object.defineProperty(e, n, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = a, e
    }, M = Object.assign || function (e) {
        for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
        }
        return e
    };

    function L(e) {
        return M({}, e, {right: e.left + e.width, bottom: e.top + e.height})
    }

    function T(e) {
        var n = {};
        try {
            if (b(10)) {
                n = e.getBoundingClientRect();
                var a = C(e, "top"), i = C(e, "left");
                n.top += a, n.left += i, n.bottom += a, n.right += i
            } else n = e.getBoundingClientRect()
        } catch (e) {
        }
        var t = {left: n.left, top: n.top, width: n.right - n.left, height: n.bottom - n.top},
            o = "HTML" === e.nodeName ? x(e.ownerDocument) : {}, r = o.width || e.clientWidth || t.right - t.left,
            F = o.height || e.clientHeight || t.bottom - t.top, c = e.offsetWidth - r, l = e.offsetHeight - F;
        if (c || l) {
            var s = u(e);
            c -= D(s, "x"), l -= D(s, "y"), t.width -= c, t.height -= l
        }
        return L(t)
    }

    function N(e, n) {
        var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = b(10), t = "HTML" === n.nodeName,
            o = T(e), r = T(n), F = p(e), c = u(n), l = parseFloat(c.borderTopWidth, 10),
            s = parseFloat(c.borderLeftWidth, 10);
        a && t && (r.top = Math.max(r.top, 0), r.left = Math.max(r.left, 0));
        var m = L({top: o.top - r.top - l, left: o.left - r.left - s, width: o.width, height: o.height});
        if (m.marginTop = 0, m.marginLeft = 0, !i && t) {
            var f = parseFloat(c.marginTop, 10), g = parseFloat(c.marginLeft, 10);
            m.top -= l - f, m.bottom -= l - f, m.left -= s - g, m.right -= s - g, m.marginTop = f, m.marginLeft = g
        }
        return (i && !a ? n.contains(F) : n === F && "BODY" !== F.nodeName) && (m = function (e, n) {
            var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = C(n, "top"), t = C(n, "left"),
                o = a ? -1 : 1;
            return e.top += i * o, e.bottom += i * o, e.left += t * o, e.right += t * o, e
        }(m, n)), m
    }

    function P(e) {
        if (!e || !e.parentElement || b()) return document.documentElement;
        for (var n = e.parentElement; n && "none" === u(n, "transform");) n = n.parentElement;
        return n || document.documentElement
    }

    function S(e, n, a, i) {
        var t = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o = {top: 0, left: 0},
            r = t ? P(e) : E(e, n);
        if ("viewport" === i) o = function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                a = e.ownerDocument.documentElement, i = N(e, a), t = Math.max(a.clientWidth, window.innerWidth || 0),
                o = Math.max(a.clientHeight, window.innerHeight || 0), r = n ? 0 : C(a), F = n ? 0 : C(a, "left");
            return L({top: r - i.top + i.marginTop, left: F - i.left + i.marginLeft, width: t, height: o})
        }(r, t); else {
            var F = void 0;
            "scrollParent" === i ? "BODY" === (F = p(d(n))).nodeName && (F = e.ownerDocument.documentElement) : F = "window" === i ? e.ownerDocument.documentElement : i;
            var c = N(F, r, t);
            if ("HTML" !== F.nodeName || function e(n) {
                var a = n.nodeName;
                if ("BODY" === a || "HTML" === a) return !1;
                if ("fixed" === u(n, "position")) return !0;
                var i = d(n);
                return !!i && e(i)
            }(r)) o = c; else {
                var l = x(e.ownerDocument), s = l.height, m = l.width;
                o.top += c.top - c.marginTop, o.bottom = s + c.top, o.left += c.left - c.marginLeft, o.right = m + c.left
            }
        }
        var f = "number" == typeof (a = a || 0);
        return o.left += f ? a : a.left || 0, o.top += f ? a : a.top || 0, o.right -= f ? a : a.right || 0, o.bottom -= f ? a : a.bottom || 0, o
    }

    function A(e, n, a, i, t) {
        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var r = S(a, i, o, t), F = {
            top: {width: r.width, height: n.top - r.top},
            right: {width: r.right - n.right, height: r.height},
            bottom: {width: r.width, height: r.bottom - n.bottom},
            left: {width: n.left - r.left, height: r.height}
        }, c = Object.keys(F).map(function (e) {
            return M({key: e}, F[e], {area: (n = F[e], n.width * n.height)});
            var n
        }).sort(function (e, n) {
            return n.area - e.area
        }), l = c.filter(function (e) {
            var n = e.width, i = e.height;
            return n >= a.clientWidth && i >= a.clientHeight
        }), s = l.length > 0 ? l[0].key : c[0].key, m = e.split("-")[1];
        return s + (m ? "-" + m : "")
    }

    function H(e, n, a) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return N(a, i ? P(n) : E(n, a), i)
    }

    function I(e) {
        var n = e.ownerDocument.defaultView.getComputedStyle(e),
            a = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0),
            i = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0);
        return {width: e.offsetWidth + i, height: e.offsetHeight + a}
    }

    function W(e) {
        var n = {left: "right", right: "left", bottom: "top", top: "bottom"};
        return e.replace(/left|right|bottom|top/g, function (e) {
            return n[e]
        })
    }

    function V(e, n, a) {
        a = a.split("-")[0];
        var i = I(e), t = {width: i.width, height: i.height}, o = -1 !== ["right", "left"].indexOf(a),
            r = o ? "top" : "left", F = o ? "left" : "top", c = o ? "height" : "width", l = o ? "width" : "height";
        return t[r] = n[r] + n[c] / 2 - i[c] / 2, t[F] = a === F ? n[F] - i[l] : n[W(F)], t
    }

    function q(e, n) {
        return Array.prototype.find ? e.find(n) : e.filter(n)[0]
    }

    function R(e, n, a) {
        return (void 0 === a ? e : e.slice(0, function (e, n, a) {
            if (Array.prototype.findIndex) return e.findIndex(function (e) {
                return e[n] === a
            });
            var i = q(e, function (e) {
                return e[n] === a
            });
            return e.indexOf(i)
        }(e, "name", a))).forEach(function (e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var a = e.function || e.fn;
            e.enabled && h(a) && (n.offsets.popper = L(n.offsets.popper), n.offsets.reference = L(n.offsets.reference), n = a(n, e))
        }), n
    }

    function U(e, n) {
        return e.some(function (e) {
            var a = e.name;
            return e.enabled && a === n
        })
    }

    function Y(e) {
        for (var n = [!1, "ms", "Webkit", "Moz", "O"], a = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < n.length; i++) {
            var t = n[i], o = t ? "" + t + a : e;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function K(e) {
        var n = e.ownerDocument;
        return n ? n.defaultView : window
    }

    function X(e, n, a, i) {
        a.updateBound = i, K(e).addEventListener("resize", a.updateBound, {passive: !0});
        var t = p(e);
        return function e(n, a, i, t) {
            var o = "BODY" === n.nodeName, r = o ? n.ownerDocument.defaultView : n;
            r.addEventListener(a, i, {passive: !0}), o || e(p(r.parentNode), a, i, t), t.push(r)
        }(t, "scroll", a.updateBound, a.scrollParents), a.scrollElement = t, a.eventsEnabled = !0, a
    }

    function G() {
        var e, n;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, n = this.state, K(e).removeEventListener("resize", n.updateBound), n.scrollParents.forEach(function (e) {
            e.removeEventListener("scroll", n.updateBound)
        }), n.updateBound = null, n.scrollParents = [], n.scrollElement = null, n.eventsEnabled = !1, n))
    }

    function J(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function Q(e, n) {
        Object.keys(n).forEach(function (a) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(a) && J(n[a]) && (i = "px"), e.style[a] = n[a] + i
        })
    }

    var Z = s && /Firefox/i.test(navigator.userAgent);

    function $(e, n, a) {
        var i = q(e, function (e) {
            return e.name === n
        }), t = !!i && e.some(function (e) {
            return e.name === a && e.enabled && e.order < i.order
        });
        if (!t) {
            var o = "`" + n + "`", r = "`" + a + "`";
            console.warn(r + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return t
    }

    var ee = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        ne = ee.slice(3);

    function ae(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a = ne.indexOf(e),
            i = ne.slice(a + 1).concat(ne.slice(0, a));
        return n ? i.reverse() : i
    }

    var ie = {FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise"};

    function te(e, n, a, i) {
        var t = [0, 0], o = -1 !== ["right", "left"].indexOf(i), r = e.split(/(\+|\-)/).map(function (e) {
            return e.trim()
        }), F = r.indexOf(q(r, function (e) {
            return -1 !== e.search(/,|\s/)
        }));
        r[F] && -1 === r[F].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var c = /\s*,\s*|\s+/,
            l = -1 !== F ? [r.slice(0, F).concat([r[F].split(c)[0]]), [r[F].split(c)[1]].concat(r.slice(F + 1))] : [r];
        return (l = l.map(function (e, i) {
            var t = (1 === i ? !o : o) ? "height" : "width", r = !1;
            return e.reduce(function (e, n) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(n) ? (e[e.length - 1] = n, r = !0, e) : r ? (e[e.length - 1] += n, r = !1, e) : e.concat(n)
            }, []).map(function (e) {
                return function (e, n, a, i) {
                    var t = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +t[1], r = t[2];
                    if (!o) return e;
                    if (0 === r.indexOf("%")) {
                        var F = void 0;
                        switch (r) {
                            case"%p":
                                F = a;
                                break;
                            case"%":
                            case"%r":
                            default:
                                F = i
                        }
                        return L(F)[n] / 100 * o
                    }
                    if ("vh" === r || "vw" === r) return ("vh" === r ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                    return o
                }(e, t, n, a)
            })
        })).forEach(function (e, n) {
            e.forEach(function (a, i) {
                J(a) && (t[n] += a * ("-" === e[i - 1] ? -1 : 1))
            })
        }), t
    }

    var oe = {
        placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
        }, onUpdate: function () {
        }, modifiers: {
            shift: {
                order: 100, enabled: !0, fn: function (e) {
                    var n = e.placement, a = n.split("-")[0], i = n.split("-")[1];
                    if (i) {
                        var t = e.offsets, o = t.reference, r = t.popper, F = -1 !== ["bottom", "top"].indexOf(a),
                            c = F ? "left" : "top", l = F ? "width" : "height",
                            s = {start: z({}, c, o[c]), end: z({}, c, o[c] + o[l] - r[l])};
                        e.offsets.popper = M({}, r, s[i])
                    }
                    return e
                }
            }, offset: {
                order: 200, enabled: !0, fn: function (e, n) {
                    var a = n.offset, i = e.placement, t = e.offsets, o = t.popper, r = t.reference,
                        F = i.split("-")[0], c = void 0;
                    return c = J(+a) ? [+a, 0] : te(a, o, r, F), "left" === F ? (o.top += c[0], o.left -= c[1]) : "right" === F ? (o.top += c[0], o.left += c[1]) : "top" === F ? (o.left += c[0], o.top -= c[1]) : "bottom" === F && (o.left += c[0], o.top += c[1]), e.popper = o, e
                }, offset: 0
            }, preventOverflow: {
                order: 300, enabled: !0, fn: function (e, n) {
                    var a = n.boundariesElement || v(e.instance.popper);
                    e.instance.reference === a && (a = v(a));
                    var i = Y("transform"), t = e.instance.popper.style, o = t.top, r = t.left, F = t[i];
                    t.top = "", t.left = "", t[i] = "";
                    var c = S(e.instance.popper, e.instance.reference, n.padding, a, e.positionFixed);
                    t.top = o, t.left = r, t[i] = F, n.boundaries = c;
                    var l = n.priority, s = e.offsets.popper, m = {
                        primary: function (e) {
                            var a = s[e];
                            return s[e] < c[e] && !n.escapeWithReference && (a = Math.max(s[e], c[e])), z({}, e, a)
                        }, secondary: function (e) {
                            var a = "right" === e ? "left" : "top", i = s[a];
                            return s[e] > c[e] && !n.escapeWithReference && (i = Math.min(s[a], c[e] - ("right" === e ? s.width : s.height))), z({}, a, i)
                        }
                    };
                    return l.forEach(function (e) {
                        var n = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                        s = M({}, s, m[n](e))
                    }), e.offsets.popper = s, e
                }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
            }, keepTogether: {
                order: 400, enabled: !0, fn: function (e) {
                    var n = e.offsets, a = n.popper, i = n.reference, t = e.placement.split("-")[0], o = Math.floor,
                        r = -1 !== ["top", "bottom"].indexOf(t), F = r ? "right" : "bottom", c = r ? "left" : "top",
                        l = r ? "width" : "height";
                    return a[F] < o(i[c]) && (e.offsets.popper[c] = o(i[c]) - a[l]), a[c] > o(i[F]) && (e.offsets.popper[c] = o(i[F])), e
                }
            }, arrow: {
                order: 500, enabled: !0, fn: function (e, n) {
                    var a;
                    if (!$(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var i = n.element;
                    if ("string" == typeof i) {
                        if (!(i = e.instance.popper.querySelector(i))) return e
                    } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var t = e.placement.split("-")[0], o = e.offsets, r = o.popper, F = o.reference,
                        c = -1 !== ["left", "right"].indexOf(t), l = c ? "height" : "width", s = c ? "Top" : "Left",
                        m = s.toLowerCase(), f = c ? "left" : "top", g = c ? "bottom" : "right", _ = I(i)[l];
                    F[g] - _ < r[m] && (e.offsets.popper[m] -= r[m] - (F[g] - _)), F[m] + _ > r[g] && (e.offsets.popper[m] += F[m] + _ - r[g]), e.offsets.popper = L(e.offsets.popper);
                    var h = F[m] + F[l] / 2 - _ / 2, d = u(e.instance.popper), p = parseFloat(d["margin" + s], 10),
                        k = parseFloat(d["border" + s + "Width"], 10), w = h - e.offsets.popper[m] - p - k;
                    return w = Math.max(Math.min(r[l] - _, w), 0), e.arrowElement = i, e.offsets.arrow = (z(a = {}, m, Math.round(w)), z(a, f, ""), a), e
                }, element: "[x-arrow]"
            }, flip: {
                order: 600,
                enabled: !0,
                fn: function (e, n) {
                    if (U(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var a = S(e.instance.popper, e.instance.reference, n.padding, n.boundariesElement, e.positionFixed),
                        i = e.placement.split("-")[0], t = W(i), o = e.placement.split("-")[1] || "", r = [];
                    switch (n.behavior) {
                        case ie.FLIP:
                            r = [i, t];
                            break;
                        case ie.CLOCKWISE:
                            r = ae(i);
                            break;
                        case ie.COUNTERCLOCKWISE:
                            r = ae(i, !0);
                            break;
                        default:
                            r = n.behavior
                    }
                    return r.forEach(function (F, c) {
                        if (i !== F || r.length === c + 1) return e;
                        i = e.placement.split("-")[0], t = W(i);
                        var l = e.offsets.popper, s = e.offsets.reference, m = Math.floor,
                            f = "left" === i && m(l.right) > m(s.left) || "right" === i && m(l.left) < m(s.right) || "top" === i && m(l.bottom) > m(s.top) || "bottom" === i && m(l.top) < m(s.bottom),
                            g = m(l.left) < m(a.left), _ = m(l.right) > m(a.right), h = m(l.top) < m(a.top),
                            u = m(l.bottom) > m(a.bottom),
                            d = "left" === i && g || "right" === i && _ || "top" === i && h || "bottom" === i && u,
                            p = -1 !== ["top", "bottom"].indexOf(i),
                            k = !!n.flipVariations && (p && "start" === o && g || p && "end" === o && _ || !p && "start" === o && h || !p && "end" === o && u),
                            w = !!n.flipVariationsByContent && (p && "start" === o && _ || p && "end" === o && g || !p && "start" === o && u || !p && "end" === o && h),
                            b = k || w;
                        (f || d || b) && (e.flipped = !0, (f || d) && (i = r[c + 1]), b && (o = function (e) {
                            return "end" === e ? "start" : "start" === e ? "end" : e
                        }(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = M({}, e.offsets.popper, V(e.instance.popper, e.offsets.reference, e.placement)), e = R(e.instance.modifiers, e, "flip"))
                    }), e
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            }, inner: {
                order: 700, enabled: !1, fn: function (e) {
                    var n = e.placement, a = n.split("-")[0], i = e.offsets, t = i.popper, o = i.reference,
                        r = -1 !== ["left", "right"].indexOf(a), F = -1 === ["top", "left"].indexOf(a);
                    return t[r ? "left" : "top"] = o[a] - (F ? t[r ? "width" : "height"] : 0), e.placement = W(n), e.offsets.popper = L(t), e
                }
            }, hide: {
                order: 800, enabled: !0, fn: function (e) {
                    if (!$(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var n = e.offsets.reference, a = q(e.instance.modifiers, function (e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (n.bottom < a.top || n.left > a.right || n.top > a.bottom || n.right < a.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            }, computeStyle: {
                order: 850, enabled: !0, fn: function (e, n) {
                    var a = n.x, i = n.y, t = e.offsets.popper, o = q(e.instance.modifiers, function (e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var r = void 0 !== o ? o : n.gpuAcceleration, F = v(e.instance.popper), c = T(F),
                        l = {position: t.position}, s = function (e, n) {
                            var a = e.offsets, i = a.popper, t = a.reference, o = Math.round, r = Math.floor,
                                F = function (e) {
                                    return e
                                }, c = o(t.width), l = o(i.width), s = -1 !== ["left", "right"].indexOf(e.placement),
                                m = -1 !== e.placement.indexOf("-"), f = n ? s || m || c % 2 == l % 2 ? o : r : F,
                                g = n ? o : F;
                            return {
                                left: f(c % 2 == 1 && l % 2 == 1 && !m && n ? i.left - 1 : i.left),
                                top: g(i.top),
                                bottom: g(i.bottom),
                                right: f(i.right)
                            }
                        }(e, window.devicePixelRatio < 2 || !Z), m = "bottom" === a ? "top" : "bottom",
                        f = "right" === i ? "left" : "right", g = Y("transform"), _ = void 0, h = void 0;
                    if (h = "bottom" === m ? "HTML" === F.nodeName ? -F.clientHeight + s.bottom : -c.height + s.bottom : s.top, _ = "right" === f ? "HTML" === F.nodeName ? -F.clientWidth + s.right : -c.width + s.right : s.left, r && g) l[g] = "translate3d(" + _ + "px, " + h + "px, 0)", l[m] = 0, l[f] = 0, l.willChange = "transform"; else {
                        var u = "bottom" === m ? -1 : 1, d = "right" === f ? -1 : 1;
                        l[m] = h * u, l[f] = _ * d, l.willChange = m + ", " + f
                    }
                    var p = {"x-placement": e.placement};
                    return e.attributes = M({}, p, e.attributes), e.styles = M({}, l, e.styles), e.arrowStyles = M({}, e.offsets.arrow, e.arrowStyles), e
                }, gpuAcceleration: !0, x: "bottom", y: "right"
            }, applyStyle: {
                order: 900, enabled: !0, fn: function (e) {
                    var n, a;
                    return Q(e.instance.popper, e.styles), n = e.instance.popper, a = e.attributes, Object.keys(a).forEach(function (e) {
                        !1 !== a[e] ? n.setAttribute(e, a[e]) : n.removeAttribute(e)
                    }), e.arrowElement && Object.keys(e.arrowStyles).length && Q(e.arrowElement, e.arrowStyles), e
                }, onLoad: function (e, n, a, i, t) {
                    var o = H(t, n, e, a.positionFixed),
                        r = A(a.placement, o, n, e, a.modifiers.flip.boundariesElement, a.modifiers.flip.padding);
                    return n.setAttribute("x-placement", r), Q(n, {position: a.positionFixed ? "fixed" : "absolute"}), a
                }, gpuAcceleration: void 0
            }
        }
    }, re = function () {
        function e(n, a) {
            var i = this, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            j(this, e), this.scheduleUpdate = function () {
                return requestAnimationFrame(i.update)
            }, this.update = _(this.update.bind(this)), this.options = M({}, e.Defaults, t), this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            }, this.reference = n && n.jquery ? n[0] : n, this.popper = a && a.jquery ? a[0] : a, this.options.modifiers = {}, Object.keys(M({}, e.Defaults.modifiers, t.modifiers)).forEach(function (n) {
                i.options.modifiers[n] = M({}, e.Defaults.modifiers[n] || {}, t.modifiers ? t.modifiers[n] : {})
            }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                return M({name: e}, i.options.modifiers[e])
            }).sort(function (e, n) {
                return e.order - n.order
            }), this.modifiers.forEach(function (e) {
                e.enabled && h(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
            }), this.update();
            var o = this.options.eventsEnabled;
            o && this.enableEventListeners(), this.state.eventsEnabled = o
        }

        return O(e, [{
            key: "update", value: function () {
                return function () {
                    if (!this.state.isDestroyed) {
                        var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
                        e.offsets.reference = H(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = A(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = V(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = R(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                    }
                }.call(this)
            }
        }, {
            key: "destroy", value: function () {
                return function () {
                    return this.state.isDestroyed = !0, U(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[Y("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                }.call(this)
            }
        }, {
            key: "enableEventListeners", value: function () {
                return function () {
                    this.state.eventsEnabled || (this.state = X(this.reference, this.options, this.state, this.scheduleUpdate))
                }.call(this)
            }
        }, {
            key: "disableEventListeners", value: function () {
                return G.call(this)
            }
        }]), e
    }();
    re.Utils = ("undefined" != typeof window ? window : global).PopperUtils, re.placements = ee, re.Defaults = oe;
    var Fe = ["animals", "smileys", "skinTones", "travel", "flags", "objects", "activities", "symbols", "food"],
        ce = [{n: ["monkey_face"], e: "🐵", c: 0}, {n: ["grinning"], e: "😀", c: 1}, {
            n: ["skin-tone-2"],
            e: "🏻",
            c: 2
        }, {n: ["earth_africa"], e: "🌍", c: 3}, {n: ["checkered_flag"], e: "🏁", c: 4}, {
            n: ["mute"],
            e: "🔇",
            c: 5
        }, {n: ["jack_o_lantern"], e: "🎃", c: 6}, {n: ["atm"], e: "🏧", c: 7}, {
            n: ["grapes"],
            e: "🍇",
            c: 8
        }, {n: ["earth_americas"], e: "🌎", c: 3}, {n: ["grin"], e: "😁", c: 1}, {
            n: ["melon"],
            e: "🍈",
            c: 8
        }, {n: ["triangular_flag_on_post"], e: "🚩", c: 4}, {n: ["monkey"], e: "🐒", c: 0}, {
            n: ["christmas_tree"],
            e: "🎄",
            c: 6
        }, {n: ["skin-tone-3"], e: "🏼", c: 2}, {n: ["put_litter_in_its_place"], e: "🚮", c: 7}, {
            n: ["speaker"],
            e: "🔈",
            c: 5
        }, {n: ["earth_asia"], e: "🌏", c: 3}, {n: ["crossed_flags"], e: "🎌", c: 4}, {
            n: ["joy"],
            e: "😂",
            c: 1
        }, {n: ["sound"], e: "🔉", c: 5}, {n: ["watermelon"], e: "🍉", c: 8}, {
            n: ["gorilla"],
            e: "🦍",
            c: 0
        }, {n: ["fireworks"], e: "🎆", c: 6}, {n: ["potable_water"], e: "🚰", c: 7}, {
            n: ["skin-tone-4"],
            e: "🏽",
            c: 2
        }, {n: ["wheelchair"], e: "♿", c: 7}, {n: ["rolling_on_the_floor_laughing"], e: "🤣", c: 1}, {
            n: ["loud_sound"],
            e: "🔊",
            c: 5
        }, {n: ["waving_black_flag"], e: "🏴", c: 4}, {n: ["tangerine"], e: "🍊", c: 8}, {
            n: ["dog"],
            e: "🐶",
            c: 0
        }, {n: ["sparkler"], e: "🎇", c: 6}, {n: ["skin-tone-5"], e: "🏾", c: 2}, {
            n: ["globe_with_meridians"],
            e: "🌐",
            c: 3
        }, {n: ["skin-tone-6"], e: "🏿", c: 2}, {n: ["smiley"], e: "😃", c: 1}, {
            n: ["loudspeaker"],
            e: "📢",
            c: 5
        }, {n: ["sparkles"], e: "✨", c: 6}, {n: ["dog2"], e: "🐕", c: 0}, {
            n: ["waving_white_flag"],
            e: "🏳️",
            c: 4
        }, {n: ["world_map"], e: "🗺️", c: 3}, {n: ["lemon"], e: "🍋", c: 8}, {
            n: ["mens"],
            e: "🚹",
            c: 7
        }, {n: ["womens"], e: "🚺", c: 7}, {n: ["rainbow-flag"], e: "🏳️‍🌈", c: 4}, {
            n: ["smile"],
            e: "😄",
            c: 1
        }, {n: ["banana"], e: "🍌", c: 8}, {n: ["mega"], e: "📣", c: 5}, {n: ["japan"], e: "🗾", c: 3}, {
            n: ["poodle"],
            e: "🐩",
            c: 0
        }, {n: ["balloon"], e: "🎈", c: 6}, {n: ["flag-ac"], e: "🇦🇨", c: 4}, {
            n: ["sweat_smile"],
            e: "😅",
            c: 1
        }, {n: ["pineapple"], e: "🍍", c: 8}, {n: ["restroom"], e: "🚻", c: 7}, {
            n: ["postal_horn"],
            e: "📯",
            c: 5
        }, {n: ["wolf"], e: "🐺", c: 0}, {n: ["tada"], e: "🎉", c: 6}, {
            n: ["snow_capped_mountain"],
            e: "🏔️",
            c: 3
        }, {n: ["laughing", "satisfied"], e: "😆", c: 1}, {n: ["apple"], e: "🍎", c: 8}, {
            n: ["flag-ad"],
            e: "🇦🇩",
            c: 4
        }, {n: ["fox_face"], e: "🦊", c: 0}, {n: ["confetti_ball"], e: "🎊", c: 6}, {
            n: ["bell"],
            e: "🔔",
            c: 5
        }, {n: ["mountain"], e: "⛰️", c: 3}, {n: ["baby_symbol"], e: "🚼", c: 7}, {
            n: ["wc"],
            e: "🚾",
            c: 7
        }, {n: ["wink"], e: "😉", c: 1}, {n: ["no_bell"], e: "🔕", c: 5}, {
            n: ["green_apple"],
            e: "🍏",
            c: 8
        }, {n: ["tanabata_tree"], e: "🎋", c: 6}, {n: ["flag-ae"], e: "🇦🇪", c: 4}, {
            n: ["volcano"],
            e: "🌋",
            c: 3
        }, {n: ["cat"], e: "🐱", c: 0}, {n: ["flag-af"], e: "🇦🇫", c: 4}, {
            n: ["musical_score"],
            e: "🎼",
            c: 5
        }, {n: ["blush"], e: "😊", c: 1}, {n: ["pear"], e: "🍐", c: 8}, {
            n: ["bamboo"],
            e: "🎍",
            c: 6
        }, {n: ["passport_control"], e: "🛂", c: 7}, {n: ["mount_fuji"], e: "🗻", c: 3}, {
            n: ["cat2"],
            e: "🐈",
            c: 0
        }, {n: ["musical_note"], e: "🎵", c: 5}, {n: ["dolls"], e: "🎎", c: 6}, {
            n: ["lion_face"],
            e: "🦁",
            c: 0
        }, {n: ["camping"], e: "🏕️", c: 3}, {n: ["flag-ag"], e: "🇦🇬", c: 4}, {
            n: ["customs"],
            e: "🛃",
            c: 7
        }, {n: ["yum"], e: "😋", c: 1}, {n: ["peach"], e: "🍑", c: 8}, {n: ["tiger"], e: "🐯", c: 0}, {
            n: ["notes"],
            e: "🎶",
            c: 5
        }, {n: ["flags"], e: "🎏", c: 6}, {n: ["beach_with_umbrella"], e: "🏖️", c: 3}, {
            n: ["cherries"],
            e: "🍒",
            c: 8
        }, {n: ["flag-ai"], e: "🇦🇮", c: 4}, {n: ["baggage_claim"], e: "🛄", c: 7}, {
            n: ["sunglasses"],
            e: "😎",
            c: 1
        }, {n: ["left_luggage"], e: "🛅", c: 7}, {n: ["wind_chime"], e: "🎐", c: 6}, {
            n: ["strawberry"],
            e: "🍓",
            c: 8
        }, {n: ["desert"], e: "🏜️", c: 3}, {n: ["studio_microphone"], e: "🎙️", c: 5}, {
            n: ["flag-al"],
            e: "🇦🇱",
            c: 4
        }, {n: ["tiger2"], e: "🐅", c: 0}, {n: ["heart_eyes"], e: "😍", c: 1}, {
            n: ["desert_island"],
            e: "🏝️",
            c: 3
        }, {n: ["kiwifruit"], e: "🥝", c: 8}, {n: ["rice_scene"], e: "🎑", c: 6}, {
            n: ["kissing_heart"],
            e: "😘",
            c: 1
        }, {n: ["warning"], e: "⚠️", c: 7}, {n: ["flag-am"], e: "🇦🇲", c: 4}, {
            n: ["leopard"],
            e: "🐆",
            c: 0
        }, {n: ["level_slider"], e: "🎚️", c: 5}, {n: ["horse"], e: "🐴", c: 0}, {
            n: ["children_crossing"],
            e: "🚸",
            c: 7
        }, {n: ["ribbon"], e: "🎀", c: 6}, {n: ["national_park"], e: "🏞️", c: 3}, {
            n: ["control_knobs"],
            e: "🎛️",
            c: 5
        }, {n: ["kissing"], e: "😗", c: 1}, {n: ["tomato"], e: "🍅", c: 8}, {
            n: ["flag-ao"],
            e: "🇦🇴",
            c: 4
        }, {n: ["stadium"], e: "🏟️", c: 3}, {n: ["flag-aq"], e: "🇦🇶", c: 4}, {
            n: ["gift"],
            e: "🎁",
            c: 6
        }, {n: ["no_entry"], e: "⛔", c: 7}, {n: ["kissing_smiling_eyes"], e: "😙", c: 1}, {
            n: ["coconut"],
            e: "🥥",
            c: 8
        }, {n: ["racehorse"], e: "🐎", c: 0}, {n: ["microphone"], e: "🎤", c: 5}, {
            n: ["classical_building"],
            e: "🏛️",
            c: 3
        }, {n: ["no_entry_sign"], e: "🚫", c: 7}, {n: ["reminder_ribbon"], e: "🎗️", c: 6}, {
            n: ["kissing_closed_eyes"],
            e: "😚",
            c: 1
        }, {n: ["unicorn_face"], e: "🦄", c: 0}, {n: ["flag-ar"], e: "🇦🇷", c: 4}, {
            n: ["headphones"],
            e: "🎧",
            c: 5
        }, {n: ["avocado"], e: "🥑", c: 8}, {n: ["relaxed"], e: "☺️", c: 1}, {
            n: ["zebra_face"],
            e: "🦓",
            c: 0
        }, {n: ["eggplant"], e: "🍆", c: 8}, {n: ["radio"], e: "📻", c: 5}, {
            n: ["building_construction"],
            e: "🏗️",
            c: 3
        }, {n: ["flag-as"], e: "🇦🇸", c: 4}, {n: ["admission_tickets"], e: "🎟️", c: 6}, {
            n: ["no_bicycles"],
            e: "🚳",
            c: 7
        }, {n: ["no_smoking"], e: "🚭", c: 7}, {n: ["slightly_smiling_face"], e: "🙂", c: 1}, {
            n: ["flag-at"],
            e: "🇦🇹",
            c: 4
        }, {n: ["ticket"], e: "🎫", c: 6}, {n: ["saxophone"], e: "🎷", c: 5}, {
            n: ["deer"],
            e: "🦌",
            c: 0
        }, {n: ["house_buildings"], e: "🏘️", c: 3}, {n: ["potato"], e: "🥔", c: 8}, {
            n: ["guitar"],
            e: "🎸",
            c: 5
        }, {n: ["carrot"], e: "🥕", c: 8}, {n: ["cityscape"], e: "🏙️", c: 3}, {
            n: ["flag-au"],
            e: "🇦🇺",
            c: 4
        }, {n: ["do_not_litter"], e: "🚯", c: 7}, {n: ["hugging_face"], e: "🤗", c: 1}, {
            n: ["cow"],
            e: "🐮",
            c: 0
        }, {n: ["medal"], e: "🎖️", c: 6}, {n: ["musical_keyboard"], e: "🎹", c: 5}, {
            n: ["corn"],
            e: "🌽",
            c: 8
        }, {n: ["derelict_house_building"], e: "🏚️", c: 3}, {n: ["non-potable_water"], e: "🚱", c: 7}, {
            n: ["trophy"],
            e: "🏆",
            c: 6
        }, {n: ["flag-aw"], e: "🇦🇼", c: 4}, {
            n: ["star-struck", "grinning_face_with_star_eyes"],
            e: "🤩",
            c: 1
        }, {n: ["ox"], e: "🐂", c: 0}, {n: ["trumpet"], e: "🎺", c: 5}, {
            n: ["hot_pepper"],
            e: "🌶️",
            c: 8
        }, {n: ["sports_medal"], e: "🏅", c: 6}, {n: ["flag-ax"], e: "🇦🇽", c: 4}, {
            n: ["water_buffalo"],
            e: "🐃",
            c: 0
        }, {n: ["no_pedestrians"], e: "🚷", c: 7}, {n: ["thinking_face"], e: "🤔", c: 1}, {
            n: ["house"],
            e: "🏠",
            c: 3
        }, {n: ["no_mobile_phones"], e: "📵", c: 7}, {n: ["flag-az"], e: "🇦🇿", c: 4}, {
            n: ["first_place_medal"],
            e: "🥇",
            c: 6
        }, {n: ["house_with_garden"], e: "🏡", c: 3}, {
            n: ["violin"],
            e: "🎻",
            c: 5
        }, {n: ["face_with_raised_eyebrow", "face_with_one_eyebrow_raised"], e: "🤨", c: 1}, {
            n: ["cucumber"],
            e: "🥒",
            c: 8
        }, {n: ["cow2"], e: "🐄", c: 0}, {n: ["flag-ba"], e: "🇧🇦", c: 4}, {
            n: ["pig"],
            e: "🐷",
            c: 0
        }, {n: ["drum_with_drumsticks"], e: "🥁", c: 5}, {n: ["underage"], e: "🔞", c: 7}, {
            n: ["broccoli"],
            e: "🥦",
            c: 8
        }, {n: ["office"], e: "🏢", c: 3}, {n: ["second_place_medal"], e: "🥈", c: 6}, {
            n: ["neutral_face"],
            e: "😐",
            c: 1
        }, {n: ["third_place_medal"], e: "🥉", c: 6}, {n: ["mushroom"], e: "🍄", c: 8}, {
            n: ["flag-bb"],
            e: "🇧🇧",
            c: 4
        }, {n: ["radioactive_sign"], e: "☢️", c: 7}, {n: ["pig2"], e: "🐖", c: 0}, {
            n: ["expressionless"],
            e: "😑",
            c: 1
        }, {n: ["iphone"], e: "📱", c: 5}, {n: ["post_office"], e: "🏣", c: 3}, {
            n: ["european_post_office"],
            e: "🏤",
            c: 3
        }, {n: ["soccer"], e: "⚽", c: 6}, {n: ["boar"], e: "🐗", c: 0}, {
            n: ["peanuts"],
            e: "🥜",
            c: 8
        }, {n: ["calling"], e: "📲", c: 5}, {n: ["biohazard_sign"], e: "☣️", c: 7}, {
            n: ["flag-bd"],
            e: "🇧🇩",
            c: 4
        }, {n: ["no_mouth"], e: "😶", c: 1}, {n: ["face_with_rolling_eyes"], e: "🙄", c: 1}, {
            n: ["phone", "telephone"],
            e: "☎️",
            c: 5
        }, {n: ["pig_nose"], e: "🐽", c: 0}, {n: ["chestnut"], e: "🌰", c: 8}, {
            n: ["arrow_up"],
            e: "⬆️",
            c: 7
        }, {n: ["hospital"], e: "🏥", c: 3}, {n: ["flag-be"], e: "🇧🇪", c: 4}, {
            n: ["baseball"],
            e: "⚾",
            c: 6
        }, {n: ["smirk"], e: "😏", c: 1}, {n: ["arrow_upper_right"], e: "↗️", c: 7}, {
            n: ["flag-bf"],
            e: "🇧🇫",
            c: 4
        }, {n: ["basketball"], e: "🏀", c: 6}, {n: ["ram"], e: "🐏", c: 0}, {n: ["bank"], e: "🏦", c: 3}, {
            n: ["bread"],
            e: "🍞",
            c: 8
        }, {n: ["telephone_receiver"], e: "📞", c: 5}, {n: ["croissant"], e: "🥐", c: 8}, {
            n: ["pager"],
            e: "📟",
            c: 5
        }, {n: ["sheep"], e: "🐑", c: 0}, {n: ["arrow_right"], e: "➡️", c: 7}, {
            n: ["persevere"],
            e: "😣",
            c: 1
        }, {n: ["flag-bg"], e: "🇧🇬", c: 4}, {n: ["volleyball"], e: "🏐", c: 6}, {
            n: ["hotel"],
            e: "🏨",
            c: 3
        }, {n: ["arrow_lower_right"], e: "↘️", c: 7}, {n: ["goat"], e: "🐐", c: 0}, {
            n: ["flag-bh"],
            e: "🇧🇭",
            c: 4
        }, {n: ["love_hotel"], e: "🏩", c: 3}, {n: ["disappointed_relieved"], e: "😥", c: 1}, {
            n: ["baguette_bread"],
            e: "🥖",
            c: 8
        }, {n: ["football"], e: "🏈", c: 6}, {n: ["fax"], e: "📠", c: 5}, {
            n: ["convenience_store"],
            e: "🏪",
            c: 3
        }, {n: ["dromedary_camel"], e: "🐪", c: 0}, {n: ["arrow_down"], e: "⬇️", c: 7}, {
            n: ["battery"],
            e: "🔋",
            c: 5
        }, {n: ["rugby_football"], e: "🏉", c: 6}, {n: ["pretzel"], e: "🥨", c: 8}, {
            n: ["open_mouth"],
            e: "😮",
            c: 1
        }, {n: ["flag-bi"], e: "🇧🇮", c: 4}, {n: ["flag-bj"], e: "🇧🇯", c: 4}, {
            n: ["pancakes"],
            e: "🥞",
            c: 8
        }, {n: ["school"], e: "🏫", c: 3}, {n: ["tennis"], e: "🎾", c: 6}, {
            n: ["zipper_mouth_face"],
            e: "🤐",
            c: 1
        }, {n: ["camel"], e: "🐫", c: 0}, {n: ["arrow_lower_left"], e: "↙️", c: 7}, {
            n: ["electric_plug"],
            e: "🔌",
            c: 5
        }, {n: ["cheese_wedge"], e: "🧀", c: 8}, {n: ["hushed"], e: "😯", c: 1}, {
            n: ["computer"],
            e: "💻",
            c: 5
        }, {n: ["giraffe_face"], e: "🦒", c: 0}, {n: ["8ball"], e: "🎱", c: 6}, {
            n: ["flag-bl"],
            e: "🇧🇱",
            c: 4
        }, {n: ["arrow_left"], e: "⬅️", c: 7}, {n: ["department_store"], e: "🏬", c: 3}, {
            n: ["meat_on_bone"],
            e: "🍖",
            c: 8
        }, {n: ["arrow_upper_left"], e: "↖️", c: 7}, {n: ["flag-bm"], e: "🇧🇲", c: 4}, {
            n: ["sleepy"],
            e: "😪",
            c: 1
        }, {n: ["bowling"], e: "🎳", c: 6}, {n: ["factory"], e: "🏭", c: 3}, {
            n: ["desktop_computer"],
            e: "🖥️",
            c: 5
        }, {n: ["elephant"], e: "🐘", c: 0}, {n: ["rhinoceros"], e: "🦏", c: 0}, {
            n: ["arrow_up_down"],
            e: "↕️",
            c: 7
        }, {n: ["cricket_bat_and_ball"], e: "🏏", c: 6}, {n: ["printer"], e: "🖨️", c: 5}, {
            n: ["poultry_leg"],
            e: "🍗",
            c: 8
        }, {n: ["tired_face"], e: "😫", c: 1}, {n: ["japanese_castle"], e: "🏯", c: 3}, {
            n: ["flag-bn"],
            e: "🇧🇳",
            c: 4
        }, {n: ["field_hockey_stick_and_ball"], e: "🏑", c: 6}, {
            n: ["sleeping"],
            e: "😴",
            c: 1
        }, {n: ["left_right_arrow"], e: "↔️", c: 7}, {n: ["keyboard"], e: "⌨️", c: 5}, {
            n: ["european_castle"],
            e: "🏰",
            c: 3
        }, {n: ["mouse"], e: "🐭", c: 0}, {n: ["flag-bo"], e: "🇧🇴", c: 4}, {
            n: ["cut_of_meat"],
            e: "🥩",
            c: 8
        }, {n: ["ice_hockey_stick_and_puck"], e: "🏒", c: 6}, {
            n: ["mouse2"],
            e: "🐁",
            c: 0
        }, {n: ["three_button_mouse"], e: "🖱️", c: 5}, {
            n: ["leftwards_arrow_with_hook"],
            e: "↩️",
            c: 7
        }, {n: ["bacon"], e: "🥓", c: 8}, {n: ["relieved"], e: "😌", c: 1}, {
            n: ["flag-bq"],
            e: "🇧🇶",
            c: 4
        }, {n: ["wedding"], e: "💒", c: 3}, {n: ["tokyo_tower"], e: "🗼", c: 3}, {
            n: ["arrow_right_hook"],
            e: "↪️",
            c: 7
        }, {n: ["hamburger"], e: "🍔", c: 8}, {n: ["stuck_out_tongue"], e: "😛", c: 1}, {
            n: ["trackball"],
            e: "🖲️",
            c: 5
        }, {n: ["flag-br"], e: "🇧🇷", c: 4}, {n: ["rat"], e: "🐀", c: 0}, {
            n: ["table_tennis_paddle_and_ball"],
            e: "🏓",
            c: 6
        }, {n: ["minidisc"], e: "💽", c: 5}, {n: ["stuck_out_tongue_winking_eye"], e: "😜", c: 1}, {
            n: ["fries"],
            e: "🍟",
            c: 8
        }, {n: ["badminton_racquet_and_shuttlecock"], e: "🏸", c: 6}, {
            n: ["statue_of_liberty"],
            e: "🗽",
            c: 3
        }, {n: ["flag-bs"], e: "🇧🇸", c: 4}, {n: ["arrow_heading_up"], e: "⤴️", c: 7}, {
            n: ["hamster"],
            e: "🐹",
            c: 0
        }, {n: ["stuck_out_tongue_closed_eyes"], e: "😝", c: 1}, {n: ["pizza"], e: "🍕", c: 8}, {
            n: ["boxing_glove"],
            e: "🥊",
            c: 6
        }, {n: ["floppy_disk"], e: "💾", c: 5}, {n: ["arrow_heading_down"], e: "⤵️", c: 7}, {
            n: ["flag-bt"],
            e: "🇧🇹",
            c: 4
        }, {n: ["rabbit"], e: "🐰", c: 0}, {n: ["church"], e: "⛪", c: 3}, {
            n: ["drooling_face"],
            e: "🤤",
            c: 1
        }, {n: ["flag-bv"], e: "🇧🇻", c: 4}, {n: ["mosque"], e: "🕌", c: 3}, {
            n: ["rabbit2"],
            e: "🐇",
            c: 0
        }, {n: ["hotdog"], e: "🌭", c: 8}, {n: ["martial_arts_uniform"], e: "🥋", c: 6}, {
            n: ["arrows_clockwise"],
            e: "🔃",
            c: 7
        }, {n: ["cd"], e: "💿", c: 5}, {n: ["arrows_counterclockwise"], e: "🔄", c: 7}, {
            n: ["sandwich"],
            e: "🥪",
            c: 8
        }, {n: ["chipmunk"], e: "🐿️", c: 0}, {n: ["synagogue"], e: "🕍", c: 3}, {
            n: ["unamused"],
            e: "😒",
            c: 1
        }, {n: ["goal_net"], e: "🥅", c: 6}, {n: ["flag-bw"], e: "🇧🇼", c: 4}, {
            n: ["dvd"],
            e: "📀",
            c: 5
        }, {n: ["hedgehog"], e: "🦔", c: 0}, {n: ["dart"], e: "🎯", c: 6}, {n: ["taco"], e: "🌮", c: 8}, {
            n: ["back"],
            e: "🔙",
            c: 7
        }, {n: ["flag-by"], e: "🇧🇾", c: 4}, {n: ["shinto_shrine"], e: "⛩️", c: 3}, {
            n: ["movie_camera"],
            e: "🎥",
            c: 5
        }, {n: ["sweat"], e: "😓", c: 1}, {n: ["burrito"], e: "🌯", c: 8}, {
            n: ["flag-bz"],
            e: "🇧🇿",
            c: 4
        }, {n: ["pensive"], e: "😔", c: 1}, {n: ["kaaba"], e: "🕋", c: 3}, {
            n: ["film_frames"],
            e: "🎞️",
            c: 5
        }, {n: ["bat"], e: "🦇", c: 0}, {n: ["golf"], e: "⛳", c: 6}, {
            n: ["end"],
            e: "🔚",
            c: 7
        }, {n: ["film_projector"], e: "📽️", c: 5}, {n: ["bear"], e: "🐻", c: 0}, {
            n: ["ice_skate"],
            e: "⛸️",
            c: 6
        }, {n: ["fountain"], e: "⛲", c: 3}, {n: ["confused"], e: "😕", c: 1}, {
            n: ["flag-ca"],
            e: "🇨🇦",
            c: 4
        }, {n: ["on"], e: "🔛", c: 7}, {n: ["stuffed_flatbread"], e: "🥙", c: 8}, {
            n: ["soon"],
            e: "🔜",
            c: 7
        }, {n: ["upside_down_face"], e: "🙃", c: 1}, {n: ["fishing_pole_and_fish"], e: "🎣", c: 6}, {
            n: ["tent"],
            e: "⛺",
            c: 3
        }, {n: ["clapper"], e: "🎬", c: 5}, {n: ["egg"], e: "🥚", c: 8}, {
            n: ["flag-cc"],
            e: "🇨🇨",
            c: 4
        }, {n: ["koala"], e: "🐨", c: 0}, {n: ["foggy"], e: "🌁", c: 3}, {n: ["tv"], e: "📺", c: 5}, {
            n: ["panda_face"],
            e: "🐼",
            c: 0
        }, {n: ["fried_egg", "cooking"], e: "🍳", c: 8}, {n: ["top"], e: "🔝", c: 7}, {
            n: ["flag-cd"],
            e: "🇨🇩",
            c: 4
        }, {n: ["money_mouth_face"], e: "🤑", c: 1}, {
            n: ["running_shirt_with_sash"],
            e: "🎽",
            c: 6
        }, {n: ["astonished"], e: "😲", c: 1}, {n: ["feet", "paw_prints"], e: "🐾", c: 0}, {
            n: ["camera"],
            e: "📷",
            c: 5
        }, {n: ["flag-cf"], e: "🇨🇫", c: 4}, {n: ["place_of_worship"], e: "🛐", c: 7}, {
            n: ["night_with_stars"],
            e: "🌃",
            c: 3
        }, {n: ["ski"], e: "🎿", c: 6}, {n: ["shallow_pan_of_food"], e: "🥘", c: 8}, {
            n: ["camera_with_flash"],
            e: "📸",
            c: 5
        }, {n: ["sunrise_over_mountains"], e: "🌄", c: 3}, {n: ["turkey"], e: "🦃", c: 0}, {
            n: ["white_frowning_face"],
            e: "☹️",
            c: 1
        }, {n: ["flag-cg"], e: "🇨🇬", c: 4}, {n: ["stew"], e: "🍲", c: 8}, {
            n: ["sled"],
            e: "🛷",
            c: 6
        }, {n: ["atom_symbol"], e: "⚛️", c: 7}, {n: ["curling_stone"], e: "🥌", c: 6}, {
            n: ["slightly_frowning_face"],
            e: "🙁",
            c: 1
        }, {n: ["sunrise"], e: "🌅", c: 3}, {n: ["om_symbol"], e: "🕉️", c: 7}, {
            n: ["chicken"],
            e: "🐔",
            c: 0
        }, {n: ["bowl_with_spoon"], e: "🥣", c: 8}, {n: ["flag-ch"], e: "🇨🇭", c: 4}, {
            n: ["video_camera"],
            e: "📹",
            c: 5
        }, {n: ["video_game"], e: "🎮", c: 6}, {n: ["rooster"], e: "🐓", c: 0}, {
            n: ["vhs"],
            e: "📼",
            c: 5
        }, {n: ["city_sunset"], e: "🌆", c: 3}, {n: ["confounded"], e: "😖", c: 1}, {
            n: ["green_salad"],
            e: "🥗",
            c: 8
        }, {n: ["star_of_david"], e: "✡️", c: 7}, {n: ["flag-ci"], e: "🇨🇮", c: 4}, {
            n: ["popcorn"],
            e: "🍿",
            c: 8
        }, {n: ["city_sunrise"], e: "🌇", c: 3}, {n: ["disappointed"], e: "😞", c: 1}, {
            n: ["mag"],
            e: "🔍",
            c: 5
        }, {n: ["hatching_chick"], e: "🐣", c: 0}, {n: ["joystick"], e: "🕹️", c: 6}, {
            n: ["wheel_of_dharma"],
            e: "☸️",
            c: 7
        }, {n: ["flag-ck"], e: "🇨🇰", c: 4}, {n: ["canned_food"], e: "🥫", c: 8}, {
            n: ["worried"],
            e: "😟",
            c: 1
        }, {n: ["baby_chick"], e: "🐤", c: 0}, {n: ["flag-cl"], e: "🇨🇱", c: 4}, {
            n: ["game_die"],
            e: "🎲",
            c: 6
        }, {n: ["mag_right"], e: "🔎", c: 5}, {n: ["yin_yang"], e: "☯️", c: 7}, {
            n: ["bridge_at_night"],
            e: "🌉",
            c: 3
        }, {n: ["spades"], e: "♠️", c: 6}, {n: ["hatched_chick"], e: "🐥", c: 0}, {
            n: ["flag-cm"],
            e: "🇨🇲",
            c: 4
        }, {n: ["latin_cross"], e: "✝️", c: 7}, {n: ["triumph"], e: "😤", c: 1}, {
            n: ["hotsprings"],
            e: "♨️",
            c: 3
        }, {n: ["bento"], e: "🍱", c: 8}, {n: ["microscope"], e: "🔬", c: 5}, {n: ["cry"], e: "😢", c: 1}, {
            n: ["bird"],
            e: "🐦",
            c: 0
        }, {n: ["cn", "flag-cn"], e: "🇨🇳", c: 4}, {n: ["telescope"], e: "🔭", c: 5}, {
            n: ["rice_cracker"],
            e: "🍘",
            c: 8
        }, {n: ["hearts"], e: "♥️", c: 6}, {n: ["orthodox_cross"], e: "☦️", c: 7}, {
            n: ["milky_way"],
            e: "🌌",
            c: 3
        }, {n: ["rice_ball"], e: "🍙", c: 8}, {n: ["satellite_antenna"], e: "📡", c: 5}, {
            n: ["flag-co"],
            e: "🇨🇴",
            c: 4
        }, {n: ["carousel_horse"], e: "🎠", c: 3}, {n: ["sob"], e: "😭", c: 1}, {
            n: ["diamonds"],
            e: "♦️",
            c: 6
        }, {n: ["star_and_crescent"], e: "☪️", c: 7}, {n: ["penguin"], e: "🐧", c: 0}, {
            n: ["dove_of_peace"],
            e: "🕊️",
            c: 0
        }, {n: ["flag-cp"], e: "🇨🇵", c: 4}, {n: ["ferris_wheel"], e: "🎡", c: 3}, {
            n: ["clubs"],
            e: "♣️",
            c: 6
        }, {n: ["peace_symbol"], e: "☮️", c: 7}, {n: ["candle"], e: "🕯️", c: 5}, {
            n: ["frowning"],
            e: "😦",
            c: 1
        }, {n: ["rice"], e: "🍚", c: 8}, {n: ["flag-cr"], e: "🇨🇷", c: 4}, {
            n: ["roller_coaster"],
            e: "🎢",
            c: 3
        }, {n: ["menorah_with_nine_branches"], e: "🕎", c: 7}, {n: ["black_joker"], e: "🃏", c: 6}, {
            n: ["eagle"],
            e: "🦅",
            c: 0
        }, {n: ["curry"], e: "🍛", c: 8}, {n: ["bulb"], e: "💡", c: 5}, {
            n: ["anguished"],
            e: "😧",
            c: 1
        }, {n: ["flag-cu"], e: "🇨🇺", c: 4}, {n: ["barber"], e: "💈", c: 3}, {
            n: ["duck"],
            e: "🦆",
            c: 0
        }, {n: ["six_pointed_star"], e: "🔯", c: 7}, {n: ["ramen"], e: "🍜", c: 8}, {
            n: ["flashlight"],
            e: "🔦",
            c: 5
        }, {n: ["mahjong"], e: "🀄", c: 6}, {n: ["fearful"], e: "😨", c: 1}, {
            n: ["aries"],
            e: "♈",
            c: 7
        }, {n: ["spaghetti"], e: "🍝", c: 8}, {n: ["circus_tent"], e: "🎪", c: 3}, {
            n: ["izakaya_lantern", "lantern"],
            e: "🏮",
            c: 5
        }, {n: ["flag-cv"], e: "🇨🇻", c: 4}, {n: ["weary"], e: "😩", c: 1}, {
            n: ["flower_playing_cards"],
            e: "🎴",
            c: 6
        }, {n: ["owl"], e: "🦉", c: 0}, {n: ["performing_arts"], e: "🎭", c: 3}, {
            n: ["frog"],
            e: "🐸",
            c: 0
        }, {n: ["flag-cw"], e: "🇨🇼", c: 4}, {
            n: ["notebook_with_decorative_cover"],
            e: "📔",
            c: 5
        }, {n: ["exploding_head", "shocked_face_with_exploding_head"], e: "🤯", c: 1}, {
            n: ["taurus"],
            e: "♉",
            c: 7
        }, {n: ["sweet_potato"], e: "🍠", c: 8}, {n: ["closed_book"], e: "📕", c: 5}, {
            n: ["gemini"],
            e: "♊",
            c: 7
        }, {n: ["frame_with_picture"], e: "🖼️", c: 3}, {n: ["flag-cx"], e: "🇨🇽", c: 4}, {
            n: ["grimacing"],
            e: "😬",
            c: 1
        }, {n: ["crocodile"], e: "🐊", c: 0}, {n: ["oden"], e: "🍢", c: 8}, {
            n: ["flag-cy"],
            e: "🇨🇾",
            c: 4
        }, {n: ["book", "open_book"], e: "📖", c: 5}, {n: ["turtle"], e: "🐢", c: 0}, {
            n: ["art"],
            e: "🎨",
            c: 3
        }, {n: ["sushi"], e: "🍣", c: 8}, {n: ["cold_sweat"], e: "😰", c: 1}, {
            n: ["cancer"],
            e: "♋",
            c: 7
        }, {n: ["fried_shrimp"], e: "🍤", c: 8}, {n: ["slot_machine"], e: "🎰", c: 3}, {
            n: ["scream"],
            e: "😱",
            c: 1
        }, {n: ["green_book"], e: "📗", c: 5}, {n: ["leo"], e: "♌", c: 7}, {
            n: ["flag-cz"],
            e: "🇨🇿",
            c: 4
        }, {n: ["lizard"], e: "🦎", c: 0}, {n: ["virgo"], e: "♍", c: 7}, {
            n: ["steam_locomotive"],
            e: "🚂",
            c: 3
        }, {n: ["de", "flag-de"], e: "🇩🇪", c: 4}, {n: ["flushed"], e: "😳", c: 1}, {
            n: ["blue_book"],
            e: "📘",
            c: 5
        }, {n: ["snake"], e: "🐍", c: 0}, {n: ["fish_cake"], e: "🍥", c: 8}, {
            n: ["railway_car"],
            e: "🚃",
            c: 3
        }, {n: ["dango"], e: "🍡", c: 8}, {n: ["orange_book"], e: "📙", c: 5}, {
            n: ["libra"],
            e: "♎",
            c: 7
        }, {n: ["dragon_face"], e: "🐲", c: 0}, {
            n: ["flag-dg"],
            e: "🇩🇬",
            c: 4
        }, {n: ["zany_face", "grinning_face_with_one_large_and_one_small_eye"], e: "🤪", c: 1}, {
            n: ["books"],
            e: "📚",
            c: 5
        }, {n: ["dragon"], e: "🐉", c: 0}, {n: ["flag-dj"], e: "🇩🇯", c: 4}, {
            n: ["dumpling"],
            e: "🥟",
            c: 8
        }, {n: ["dizzy_face"], e: "😵", c: 1}, {n: ["scorpius"], e: "♏", c: 7}, {
            n: ["bullettrain_side"],
            e: "🚄",
            c: 3
        }, {n: ["bullettrain_front"], e: "🚅", c: 3}, {n: ["notebook"], e: "📓", c: 5}, {
            n: ["fortune_cookie"],
            e: "🥠",
            c: 8
        }, {n: ["sagittarius"], e: "♐", c: 7}, {n: ["sauropod"], e: "🦕", c: 0}, {
            n: ["flag-dk"],
            e: "🇩🇰",
            c: 4
        }, {n: ["rage"], e: "😡", c: 1}, {n: ["ledger"], e: "📒", c: 5}, {n: ["angry"], e: "😠", c: 1}, {
            n: ["t-rex"],
            e: "🦖",
            c: 0
        }, {n: ["capricorn"], e: "♑", c: 7}, {n: ["takeout_box"], e: "🥡", c: 8}, {
            n: ["flag-dm"],
            e: "🇩🇲",
            c: 4
        }, {n: ["train2"], e: "🚆", c: 3}, {n: ["page_with_curl"], e: "📃", c: 5}, {
            n: ["whale"],
            e: "🐳",
            c: 0
        }, {
            n: ["face_with_symbols_on_mouth", "serious_face_with_symbols_covering_mouth"],
            e: "🤬",
            c: 1
        }, {n: ["flag-do"], e: "🇩🇴", c: 4}, {n: ["metro"], e: "🚇", c: 3}, {
            n: ["icecream"],
            e: "🍦",
            c: 8
        }, {n: ["aquarius"], e: "♒", c: 7}, {n: ["flag-dz"], e: "🇩🇿", c: 4}, {
            n: ["whale2"],
            e: "🐋",
            c: 0
        }, {n: ["mask"], e: "😷", c: 1}, {n: ["scroll"], e: "📜", c: 5}, {
            n: ["shaved_ice"],
            e: "🍧",
            c: 8
        }, {n: ["pisces"], e: "♓", c: 7}, {n: ["light_rail"], e: "🚈", c: 3}, {
            n: ["dolphin", "flipper"],
            e: "🐬",
            c: 0
        }, {n: ["face_with_thermometer"], e: "🤒", c: 1}, {n: ["flag-ea"], e: "🇪🇦", c: 4}, {
            n: ["ophiuchus"],
            e: "⛎",
            c: 7
        }, {n: ["station"], e: "🚉", c: 3}, {n: ["ice_cream"], e: "🍨", c: 8}, {
            n: ["page_facing_up"],
            e: "📄",
            c: 5
        }, {n: ["doughnut"], e: "🍩", c: 8}, {n: ["face_with_head_bandage"], e: "🤕", c: 1}, {
            n: ["fish"],
            e: "🐟",
            c: 0
        }, {n: ["newspaper"], e: "📰", c: 5}, {n: ["tram"], e: "🚊", c: 3}, {
            n: ["flag-ec"],
            e: "🇪🇨",
            c: 4
        }, {n: ["twisted_rightwards_arrows"], e: "🔀", c: 7}, {n: ["flag-ee"], e: "🇪🇪", c: 4}, {
            n: ["cookie"],
            e: "🍪",
            c: 8
        }, {n: ["monorail"], e: "🚝", c: 3}, {n: ["tropical_fish"], e: "🐠", c: 0}, {
            n: ["rolled_up_newspaper"],
            e: "🗞️",
            c: 5
        }, {n: ["nauseated_face"], e: "🤢", c: 1}, {n: ["repeat"], e: "🔁", c: 7}, {
            n: ["bookmark_tabs"],
            e: "📑",
            c: 5
        }, {n: ["repeat_one"], e: "🔂", c: 7}, {n: ["flag-eg"], e: "🇪🇬", c: 4}, {
            n: ["mountain_railway"],
            e: "🚞",
            c: 3
        }, {n: ["birthday"], e: "🎂", c: 8}, {
            n: ["blowfish"],
            e: "🐡",
            c: 0
        }, {n: ["face_vomiting", "face_with_open_mouth_vomiting"], e: "🤮", c: 1}, {
            n: ["arrow_forward"],
            e: "▶️",
            c: 7
        }, {n: ["bookmark"], e: "🔖", c: 5}, {n: ["flag-eh"], e: "🇪🇭", c: 4}, {
            n: ["shark"],
            e: "🦈",
            c: 0
        }, {n: ["train"], e: "🚋", c: 3}, {n: ["sneezing_face"], e: "🤧", c: 1}, {
            n: ["cake"],
            e: "🍰",
            c: 8
        }, {n: ["bus"], e: "🚌", c: 3}, {n: ["pie"], e: "🥧", c: 8}, {
            n: ["innocent"],
            e: "😇",
            c: 1
        }, {n: ["fast_forward"], e: "⏩", c: 7}, {n: ["label"], e: "🏷️", c: 5}, {
            n: ["octopus"],
            e: "🐙",
            c: 0
        }, {n: ["flag-er"], e: "🇪🇷", c: 4}, {
            n: ["black_right_pointing_double_triangle_with_vertical_bar"],
            e: "⏭️",
            c: 7
        }, {n: ["chocolate_bar"], e: "🍫", c: 8}, {n: ["oncoming_bus"], e: "🚍", c: 3}, {
            n: ["shell"],
            e: "🐚",
            c: 0
        }, {n: ["face_with_cowboy_hat"], e: "🤠", c: 1}, {n: ["moneybag"], e: "💰", c: 5}, {
            n: ["es", "flag-es"],
            e: "🇪🇸",
            c: 4
        }, {n: ["crab"], e: "🦀", c: 0}, {n: ["yen"], e: "💴", c: 5}, {
            n: ["flag-et"],
            e: "🇪🇹",
            c: 4
        }, {n: ["clown_face"], e: "🤡", c: 1}, {
            n: ["black_right_pointing_triangle_with_double_vertical_bar"],
            e: "⏯️",
            c: 7
        }, {n: ["trolleybus"], e: "🚎", c: 3}, {n: ["candy"], e: "🍬", c: 8}, {
            n: ["lying_face"],
            e: "🤥",
            c: 1
        }, {n: ["arrow_backward"], e: "◀️", c: 7}, {n: ["dollar"], e: "💵", c: 5}, {
            n: ["shrimp"],
            e: "🦐",
            c: 0
        }, {n: ["minibus"], e: "🚐", c: 3}, {n: ["flag-eu"], e: "🇪🇺", c: 4}, {
            n: ["lollipop"],
            e: "🍭",
            c: 8
        }, {n: ["squid"], e: "🦑", c: 0}, {n: ["euro"], e: "💶", c: 5}, {
            n: ["flag-fi"],
            e: "🇫🇮",
            c: 4
        }, {n: ["ambulance"], e: "🚑", c: 3}, {
            n: ["custard"],
            e: "🍮",
            c: 8
        }, {n: ["shushing_face", "face_with_finger_covering_closed_lips"], e: "🤫", c: 1}, {
            n: ["rewind"],
            e: "⏪",
            c: 7
        }, {
            n: ["black_left_pointing_double_triangle_with_vertical_bar"],
            e: "⏮️",
            c: 7
        }, {
            n: ["face_with_hand_over_mouth", "smiling_face_with_smiling_eyes_and_hand_covering_mouth"],
            e: "🤭",
            c: 1
        }, {n: ["flag-fj"], e: "🇫🇯", c: 4}, {n: ["honey_pot"], e: "🍯", c: 8}, {
            n: ["snail"],
            e: "🐌",
            c: 0
        }, {n: ["pound"], e: "💷", c: 5}, {n: ["fire_engine"], e: "🚒", c: 3}, {
            n: ["baby_bottle"],
            e: "🍼",
            c: 8
        }, {n: ["flag-fk"], e: "🇫🇰", c: 4}, {n: ["butterfly"], e: "🦋", c: 0}, {
            n: ["money_with_wings"],
            e: "💸",
            c: 5
        }, {n: ["face_with_monocle"], e: "🧐", c: 1}, {n: ["police_car"], e: "🚓", c: 3}, {
            n: ["arrow_up_small"],
            e: "🔼",
            c: 7
        }, {n: ["flag-fm"], e: "🇫🇲", c: 4}, {n: ["glass_of_milk"], e: "🥛", c: 8}, {
            n: ["credit_card"],
            e: "💳",
            c: 5
        }, {n: ["oncoming_police_car"], e: "🚔", c: 3}, {n: ["bug"], e: "🐛", c: 0}, {
            n: ["nerd_face"],
            e: "🤓",
            c: 1
        }, {n: ["arrow_double_up"], e: "⏫", c: 7}, {n: ["chart"], e: "💹", c: 5}, {
            n: ["flag-fo"],
            e: "🇫🇴",
            c: 4
        }, {n: ["ant"], e: "🐜", c: 0}, {n: ["arrow_down_small"], e: "🔽", c: 7}, {
            n: ["smiling_imp"],
            e: "😈",
            c: 1
        }, {n: ["taxi"], e: "🚕", c: 3}, {n: ["coffee"], e: "☕", c: 8}, {
            n: ["fr", "flag-fr"],
            e: "🇫🇷",
            c: 4
        }, {n: ["oncoming_taxi"], e: "🚖", c: 3}, {n: ["arrow_double_down"], e: "⏬", c: 7}, {
            n: ["imp"],
            e: "👿",
            c: 1
        }, {n: ["currency_exchange"], e: "💱", c: 5}, {n: ["tea"], e: "🍵", c: 8}, {
            n: ["bee", "honeybee"],
            e: "🐝",
            c: 0
        }, {n: ["heavy_dollar_sign"], e: "💲", c: 5}, {n: ["car", "red_car"], e: "🚗", c: 3}, {
            n: ["sake"],
            e: "🍶",
            c: 8
        }, {n: ["flag-ga"], e: "🇬🇦", c: 4}, {n: ["beetle"], e: "🐞", c: 0}, {
            n: ["japanese_ogre"],
            e: "👹",
            c: 1
        }, {n: ["double_vertical_bar"], e: "⏸️", c: 7}, {n: ["champagne"], e: "🍾", c: 8}, {
            n: ["japanese_goblin"],
            e: "👺",
            c: 1
        }, {n: ["black_square_for_stop"], e: "⏹️", c: 7}, {
            n: ["oncoming_automobile"],
            e: "🚘",
            c: 3
        }, {n: ["email", "envelope"], e: "✉️", c: 5}, {n: ["cricket"], e: "🦗", c: 0}, {
            n: ["gb", "uk", "flag-gb"],
            e: "🇬🇧",
            c: 4
        }, {n: ["black_circle_for_record"], e: "⏺️", c: 7}, {n: ["flag-gd"], e: "🇬🇩", c: 4}, {
            n: ["spider"],
            e: "🕷️",
            c: 0
        }, {n: ["blue_car"], e: "🚙", c: 3}, {n: ["skull"], e: "💀", c: 1}, {
            n: ["e-mail"],
            e: "📧",
            c: 5
        }, {n: ["wine_glass"], e: "🍷", c: 8}, {n: ["spider_web"], e: "🕸️", c: 0}, {
            n: ["cocktail"],
            e: "🍸",
            c: 8
        }, {n: ["skull_and_crossbones"], e: "☠️", c: 1}, {n: ["flag-ge"], e: "🇬🇪", c: 4}, {
            n: ["eject"],
            e: "⏏️",
            c: 7
        }, {n: ["truck"], e: "🚚", c: 3}, {n: ["incoming_envelope"], e: "📨", c: 5}, {
            n: ["tropical_drink"],
            e: "🍹",
            c: 8
        }, {n: ["scorpion"], e: "🦂", c: 0}, {n: ["cinema"], e: "🎦", c: 7}, {
            n: ["articulated_lorry"],
            e: "🚛",
            c: 3
        }, {n: ["envelope_with_arrow"], e: "📩", c: 5}, {n: ["ghost"], e: "👻", c: 1}, {
            n: ["flag-gf"],
            e: "🇬🇫",
            c: 4
        }, {n: ["bouquet"], e: "💐", c: 0}, {n: ["tractor"], e: "🚜", c: 3}, {
            n: ["beer"],
            e: "🍺",
            c: 8
        }, {n: ["outbox_tray"], e: "📤", c: 5}, {n: ["low_brightness"], e: "🔅", c: 7}, {
            n: ["alien"],
            e: "👽",
            c: 1
        }, {n: ["flag-gg"], e: "🇬🇬", c: 4}, {n: ["cherry_blossom"], e: "🌸", c: 0}, {
            n: ["inbox_tray"],
            e: "📥",
            c: 5
        }, {n: ["flag-gh"], e: "🇬🇭", c: 4}, {n: ["bike"], e: "🚲", c: 3}, {
            n: ["space_invader"],
            e: "👾",
            c: 1
        }, {n: ["beers"], e: "🍻", c: 8}, {n: ["high_brightness"], e: "🔆", c: 7}, {
            n: ["package"],
            e: "📦",
            c: 5
        }, {n: ["scooter"], e: "🛴", c: 3}, {n: ["white_flower"], e: "💮", c: 0}, {
            n: ["clinking_glasses"],
            e: "🥂",
            c: 8
        }, {n: ["robot_face"], e: "🤖", c: 1}, {n: ["signal_strength"], e: "📶", c: 7}, {
            n: ["flag-gi"],
            e: "🇬🇮",
            c: 4
        }, {n: ["flag-gl"], e: "🇬🇱", c: 4}, {n: ["motor_scooter"], e: "🛵", c: 3}, {
            n: ["mailbox"],
            e: "📫",
            c: 5
        }, {n: ["vibration_mode"], e: "📳", c: 7}, {n: ["hankey", "poop", "shit"], e: "💩", c: 1}, {
            n: ["rosette"],
            e: "🏵️",
            c: 0
        }, {n: ["tumbler_glass"], e: "🥃", c: 8}, {n: ["cup_with_straw"], e: "🥤", c: 8}, {
            n: ["flag-gm"],
            e: "🇬🇲",
            c: 4
        }, {n: ["mailbox_closed"], e: "📪", c: 5}, {n: ["mobile_phone_off"], e: "📴", c: 7}, {
            n: ["busstop"],
            e: "🚏",
            c: 3
        }, {n: ["smiley_cat"], e: "😺", c: 1}, {n: ["rose"], e: "🌹", c: 0}, {
            n: ["motorway"],
            e: "🛣️",
            c: 3
        }, {n: ["smile_cat"], e: "😸", c: 1}, {n: ["flag-gn"], e: "🇬🇳", c: 4}, {
            n: ["wilted_flower"],
            e: "🥀",
            c: 0
        }, {n: ["mailbox_with_mail"], e: "📬", c: 5}, {n: ["chopsticks"], e: "🥢", c: 8}, {
            n: ["female_sign"],
            e: "♀️",
            c: 7
        }, {n: ["mailbox_with_no_mail"], e: "📭", c: 5}, {n: ["knife_fork_plate"], e: "🍽️", c: 8}, {
            n: ["hibiscus"],
            e: "🌺",
            c: 0
        }, {n: ["flag-gp"], e: "🇬🇵", c: 4}, {n: ["railway_track"], e: "🛤️", c: 3}, {
            n: ["male_sign"],
            e: "♂️",
            c: 7
        }, {n: ["joy_cat"], e: "😹", c: 1}, {n: ["fuelpump"], e: "⛽", c: 3}, {
            n: ["sunflower"],
            e: "🌻",
            c: 0
        }, {n: ["postbox"], e: "📮", c: 5}, {n: ["flag-gq"], e: "🇬🇶", c: 4}, {
            n: ["heart_eyes_cat"],
            e: "😻",
            c: 1
        }, {n: ["fork_and_knife"], e: "🍴", c: 8}, {
            n: ["medical_symbol", "staff_of_aesculapius"],
            e: "⚕️",
            c: 7
        }, {n: ["recycle"], e: "♻️", c: 7}, {n: ["spoon"], e: "🥄", c: 8}, {
            n: ["blossom"],
            e: "🌼",
            c: 0
        }, {n: ["rotating_light"], e: "🚨", c: 3}, {n: ["smirk_cat"], e: "😼", c: 1}, {
            n: ["ballot_box_with_ballot"],
            e: "🗳️",
            c: 5
        }, {n: ["flag-gr"], e: "🇬🇷", c: 4}, {n: ["kissing_cat"], e: "😽", c: 1}, {
            n: ["pencil2"],
            e: "✏️",
            c: 5
        }, {n: ["traffic_light"], e: "🚥", c: 3}, {n: ["fleur_de_lis"], e: "⚜️", c: 7}, {
            n: ["tulip"],
            e: "🌷",
            c: 0
        }, {n: ["hocho", "knife"], e: "🔪", c: 8}, {n: ["flag-gs"], e: "🇬🇸", c: 4}, {
            n: ["seedling"],
            e: "🌱",
            c: 0
        }, {n: ["amphora"], e: "🏺", c: 8}, {n: ["scream_cat"], e: "🙀", c: 1}, {
            n: ["vertical_traffic_light"],
            e: "🚦",
            c: 3
        }, {n: ["black_nib"], e: "✒️", c: 5}, {n: ["flag-gt"], e: "🇬🇹", c: 4}, {
            n: ["trident"],
            e: "🔱",
            c: 7
        }, {n: ["flag-gu"], e: "🇬🇺", c: 4}, {n: ["name_badge"], e: "📛", c: 7}, {
            n: ["construction"],
            e: "🚧",
            c: 3
        }, {n: ["lower_left_fountain_pen"], e: "🖋️", c: 5}, {
            n: ["evergreen_tree"],
            e: "🌲",
            c: 0
        }, {n: ["crying_cat_face"], e: "😿", c: 1}, {n: ["flag-gw"], e: "🇬🇼", c: 4}, {
            n: ["lower_left_ballpoint_pen"],
            e: "🖊️",
            c: 5
        }, {n: ["pouting_cat"], e: "😾", c: 1}, {n: ["deciduous_tree"], e: "🌳", c: 0}, {
            n: ["octagonal_sign"],
            e: "🛑",
            c: 3
        }, {n: ["beginner"], e: "🔰", c: 7}, {n: ["flag-gy"], e: "🇬🇾", c: 4}, {
            n: ["lower_left_paintbrush"],
            e: "🖌️",
            c: 5
        }, {n: ["o"], e: "⭕", c: 7}, {n: ["palm_tree"], e: "🌴", c: 0}, {
            n: ["anchor"],
            e: "⚓",
            c: 3
        }, {n: ["see_no_evil"], e: "🙈", c: 1}, {n: ["boat", "sailboat"], e: "⛵", c: 3}, {
            n: ["white_check_mark"],
            e: "✅",
            c: 7
        }, {n: ["flag-hk"], e: "🇭🇰", c: 4}, {n: ["lower_left_crayon"], e: "🖍️", c: 5}, {
            n: ["hear_no_evil"],
            e: "🙉",
            c: 1
        }, {n: ["cactus"], e: "🌵", c: 0}, {n: ["ear_of_rice"], e: "🌾", c: 0}, {
            n: ["speak_no_evil"],
            e: "🙊",
            c: 1
        }, {n: ["flag-hm"], e: "🇭🇲", c: 4}, {n: ["ballot_box_with_check"], e: "☑️", c: 7}, {
            n: ["canoe"],
            e: "🛶",
            c: 3
        }, {n: ["memo", "pencil"], e: "📝", c: 5}, {n: ["herb"], e: "🌿", c: 0}, {
            n: ["flag-hn"],
            e: "🇭🇳",
            c: 4
        }, {n: ["heavy_check_mark"], e: "✔️", c: 7}, {n: ["briefcase"], e: "💼", c: 5}, {
            n: ["speedboat"],
            e: "🚤",
            c: 3
        }, {
            n: ["baby"],
            e: "👶",
            c: 1,
            v: {
                "1F3FB": {k: "baby-1F3FB", n: "baby", e: "👶🏻"},
                "1F3FC": {k: "baby-1F3FC", n: "baby", e: "👶🏼"},
                "1F3FD": {k: "baby-1F3FD", n: "baby", e: "👶🏽"},
                "1F3FE": {k: "baby-1F3FE", n: "baby", e: "👶🏾"},
                "1F3FF": {k: "baby-1F3FF", n: "baby", e: "👶🏿"}
            }
        }, {n: ["heavy_multiplication_x"], e: "✖️", c: 7}, {
            n: ["child"],
            e: "🧒",
            c: 1,
            v: {
                "1F3FB": {k: "child-1F3FB", n: "child", e: "🧒🏻"},
                "1F3FC": {k: "child-1F3FC", n: "child", e: "🧒🏼"},
                "1F3FD": {k: "child-1F3FD", n: "child", e: "🧒🏽"},
                "1F3FE": {k: "child-1F3FE", n: "child", e: "🧒🏾"},
                "1F3FF": {k: "child-1F3FF", n: "child", e: "🧒🏿"}
            }
        }, {n: ["shamrock"], e: "☘️", c: 0}, {n: ["passenger_ship"], e: "🛳️", c: 3}, {
            n: ["flag-hr"],
            e: "🇭🇷",
            c: 4
        }, {n: ["file_folder"], e: "📁", c: 5}, {n: ["x"], e: "❌", c: 7}, {
            n: ["four_leaf_clover"],
            e: "🍀",
            c: 0
        }, {n: ["open_file_folder"], e: "📂", c: 5}, {
            n: ["boy"],
            e: "👦",
            c: 1,
            v: {
                "1F3FB": {k: "boy-1F3FB", n: "boy", e: "👦🏻"},
                "1F3FC": {k: "boy-1F3FC", n: "boy", e: "👦🏼"},
                "1F3FD": {k: "boy-1F3FD", n: "boy", e: "👦🏽"},
                "1F3FE": {k: "boy-1F3FE", n: "boy", e: "👦🏾"},
                "1F3FF": {k: "boy-1F3FF", n: "boy", e: "👦🏿"}
            }
        }, {n: ["ferry"], e: "⛴️", c: 3}, {n: ["flag-ht"], e: "🇭🇹", c: 4}, {
            n: ["girl"],
            e: "👧",
            c: 1,
            v: {
                "1F3FB": {k: "girl-1F3FB", n: "girl", e: "👧🏻"},
                "1F3FC": {k: "girl-1F3FC", n: "girl", e: "👧🏼"},
                "1F3FD": {k: "girl-1F3FD", n: "girl", e: "👧🏽"},
                "1F3FE": {k: "girl-1F3FE", n: "girl", e: "👧🏾"},
                "1F3FF": {k: "girl-1F3FF", n: "girl", e: "👧🏿"}
            }
        }, {n: ["negative_squared_cross_mark"], e: "❎", c: 7}, {
            n: ["flag-hu"],
            e: "🇭🇺",
            c: 4
        }, {n: ["card_index_dividers"], e: "🗂️", c: 5}, {n: ["maple_leaf"], e: "🍁", c: 0}, {
            n: ["motor_boat"],
            e: "🛥️",
            c: 3
        }, {n: ["flag-ic"], e: "🇮🇨", c: 4}, {n: ["fallen_leaf"], e: "🍂", c: 0}, {
            n: ["adult"],
            e: "🧑",
            c: 1,
            v: {
                "1F3FB": {k: "adult-1F3FB", n: "adult", e: "🧑🏻"},
                "1F3FC": {k: "adult-1F3FC", n: "adult", e: "🧑🏼"},
                "1F3FD": {k: "adult-1F3FD", n: "adult", e: "🧑🏽"},
                "1F3FE": {k: "adult-1F3FE", n: "adult", e: "🧑🏾"},
                "1F3FF": {k: "adult-1F3FF", n: "adult", e: "🧑🏿"}
            }
        }, {n: ["ship"], e: "🚢", c: 3}, {n: ["heavy_plus_sign"], e: "➕", c: 7}, {
            n: ["date"],
            e: "📅",
            c: 5
        }, {
            n: ["man"],
            e: "👨",
            c: 1,
            v: {
                "1F3FB": {k: "man-1F3FB", n: "man", e: "👨🏻"},
                "1F3FC": {k: "man-1F3FC", n: "man", e: "👨🏼"},
                "1F3FD": {k: "man-1F3FD", n: "man", e: "👨🏽"},
                "1F3FE": {k: "man-1F3FE", n: "man", e: "👨🏾"},
                "1F3FF": {k: "man-1F3FF", n: "man", e: "👨🏿"}
            }
        }, {n: ["flag-id"], e: "🇮🇩", c: 4}, {n: ["leaves"], e: "🍃", c: 0}, {
            n: ["heavy_minus_sign"],
            e: "➖",
            c: 7
        }, {n: ["calendar"], e: "📆", c: 5}, {n: ["airplane"], e: "✈️", c: 3}, {
            n: ["spiral_note_pad"],
            e: "🗒️",
            c: 5
        }, {n: ["heavy_division_sign"], e: "➗", c: 7}, {n: ["small_airplane"], e: "🛩️", c: 3}, {
            n: ["woman"],
            e: "👩",
            c: 1,
            v: {
                "1F3FB": {k: "woman-1F3FB", n: "woman", e: "👩🏻"},
                "1F3FC": {k: "woman-1F3FC", n: "woman", e: "👩🏼"},
                "1F3FD": {k: "woman-1F3FD", n: "woman", e: "👩🏽"},
                "1F3FE": {k: "woman-1F3FE", n: "woman", e: "👩🏾"},
                "1F3FF": {k: "woman-1F3FF", n: "woman", e: "👩🏿"}
            }
        }, {n: ["flag-ie"], e: "🇮🇪", c: 4}, {n: ["curly_loop"], e: "➰", c: 7}, {
            n: ["flag-il"],
            e: "🇮🇱",
            c: 4
        }, {n: ["airplane_departure"], e: "🛫", c: 3}, {
            n: ["spiral_calendar_pad"],
            e: "🗓️",
            c: 5
        }, {
            n: ["older_adult"],
            e: "🧓",
            c: 1,
            v: {
                "1F3FB": {k: "older_adult-1F3FB", n: "older_adult", e: "🧓🏻"},
                "1F3FC": {k: "older_adult-1F3FC", n: "older_adult", e: "🧓🏼"},
                "1F3FD": {k: "older_adult-1F3FD", n: "older_adult", e: "🧓🏽"},
                "1F3FE": {k: "older_adult-1F3FE", n: "older_adult", e: "🧓🏾"},
                "1F3FF": {k: "older_adult-1F3FF", n: "older_adult", e: "🧓🏿"}
            }
        }, {n: ["airplane_arriving"], e: "🛬", c: 3}, {n: ["card_index"], e: "📇", c: 5}, {
            n: ["loop"],
            e: "➿",
            c: 7
        }, {
            n: ["older_man"],
            e: "👴",
            c: 1,
            v: {
                "1F3FB": {k: "older_man-1F3FB", n: "older_man", e: "👴🏻"},
                "1F3FC": {k: "older_man-1F3FC", n: "older_man", e: "👴🏼"},
                "1F3FD": {k: "older_man-1F3FD", n: "older_man", e: "👴🏽"},
                "1F3FE": {k: "older_man-1F3FE", n: "older_man", e: "👴🏾"},
                "1F3FF": {k: "older_man-1F3FF", n: "older_man", e: "👴🏿"}
            }
        }, {n: ["flag-im"], e: "🇮🇲", c: 4}, {n: ["flag-in"], e: "🇮🇳", c: 4}, {
            n: ["chart_with_upwards_trend"],
            e: "📈",
            c: 5
        }, {n: ["part_alternation_mark"], e: "〽️", c: 7}, {n: ["seat"], e: "💺", c: 3}, {
            n: ["older_woman"],
            e: "👵",
            c: 1,
            v: {
                "1F3FB": {k: "older_woman-1F3FB", n: "older_woman", e: "👵🏻"},
                "1F3FC": {k: "older_woman-1F3FC", n: "older_woman", e: "👵🏼"},
                "1F3FD": {k: "older_woman-1F3FD", n: "older_woman", e: "👵🏽"},
                "1F3FE": {k: "older_woman-1F3FE", n: "older_woman", e: "👵🏾"},
                "1F3FF": {k: "older_woman-1F3FF", n: "older_woman", e: "👵🏿"}
            }
        }, {n: ["eight_spoked_asterisk"], e: "✳️", c: 7}, {
            n: ["chart_with_downwards_trend"],
            e: "📉",
            c: 5
        }, {n: ["flag-io"], e: "🇮🇴", c: 4}, {
            n: ["male-doctor"],
            e: "👨‍⚕️",
            c: 1,
            v: {
                "1F3FB": {k: "male-doctor-1F3FB", n: "male-doctor", e: "👨🏻‍⚕️"},
                "1F3FC": {k: "male-doctor-1F3FC", n: "male-doctor", e: "👨🏼‍⚕️"},
                "1F3FD": {k: "male-doctor-1F3FD", n: "male-doctor", e: "👨🏽‍⚕️"},
                "1F3FE": {k: "male-doctor-1F3FE", n: "male-doctor", e: "👨🏾‍⚕️"},
                "1F3FF": {k: "male-doctor-1F3FF", n: "male-doctor", e: "👨🏿‍⚕️"}
            }
        }, {n: ["helicopter"], e: "🚁", c: 3}, {
            n: ["female-doctor"],
            e: "👩‍⚕️",
            c: 1,
            v: {
                "1F3FB": {k: "female-doctor-1F3FB", n: "female-doctor", e: "👩🏻‍⚕️"},
                "1F3FC": {k: "female-doctor-1F3FC", n: "female-doctor", e: "👩🏼‍⚕️"},
                "1F3FD": {k: "female-doctor-1F3FD", n: "female-doctor", e: "👩🏽‍⚕️"},
                "1F3FE": {k: "female-doctor-1F3FE", n: "female-doctor", e: "👩🏾‍⚕️"},
                "1F3FF": {k: "female-doctor-1F3FF", n: "female-doctor", e: "👩🏿‍⚕️"}
            }
        }, {n: ["suspension_railway"], e: "🚟", c: 3}, {n: ["bar_chart"], e: "📊", c: 5}, {
            n: ["flag-iq"],
            e: "🇮🇶",
            c: 4
        }, {n: ["eight_pointed_black_star"], e: "✴️", c: 7}, {
            n: ["mountain_cableway"],
            e: "🚠",
            c: 3
        }, {
            n: ["male-student"],
            e: "👨‍🎓",
            c: 1,
            v: {
                "1F3FB": {k: "male-student-1F3FB", n: "male-student", e: "👨🏻‍🎓"},
                "1F3FC": {k: "male-student-1F3FC", n: "male-student", e: "👨🏼‍🎓"},
                "1F3FD": {k: "male-student-1F3FD", n: "male-student", e: "👨🏽‍🎓"},
                "1F3FE": {k: "male-student-1F3FE", n: "male-student", e: "👨🏾‍🎓"},
                "1F3FF": {k: "male-student-1F3FF", n: "male-student", e: "👨🏿‍🎓"}
            }
        }, {n: ["clipboard"], e: "📋", c: 5}, {n: ["flag-ir"], e: "🇮🇷", c: 4}, {
            n: ["sparkle"],
            e: "❇️",
            c: 7
        }, {
            n: ["female-student"],
            e: "👩‍🎓",
            c: 1,
            v: {
                "1F3FB": {k: "female-student-1F3FB", n: "female-student", e: "👩🏻‍🎓"},
                "1F3FC": {k: "female-student-1F3FC", n: "female-student", e: "👩🏼‍🎓"},
                "1F3FD": {k: "female-student-1F3FD", n: "female-student", e: "👩🏽‍🎓"},
                "1F3FE": {k: "female-student-1F3FE", n: "female-student", e: "👩🏾‍🎓"},
                "1F3FF": {k: "female-student-1F3FF", n: "female-student", e: "👩🏿‍🎓"}
            }
        }, {n: ["pushpin"], e: "📌", c: 5}, {n: ["aerial_tramway"], e: "🚡", c: 3}, {
            n: ["flag-is"],
            e: "🇮🇸",
            c: 4
        }, {n: ["bangbang"], e: "‼️", c: 7}, {n: ["interrobang"], e: "⁉️", c: 7}, {
            n: ["satellite"],
            e: "🛰️",
            c: 3
        }, {n: ["it", "flag-it"], e: "🇮🇹", c: 4}, {
            n: ["male-teacher"],
            e: "👨‍🏫",
            c: 1,
            v: {
                "1F3FB": {k: "male-teacher-1F3FB", n: "male-teacher", e: "👨🏻‍🏫"},
                "1F3FC": {k: "male-teacher-1F3FC", n: "male-teacher", e: "👨🏼‍🏫"},
                "1F3FD": {k: "male-teacher-1F3FD", n: "male-teacher", e: "👨🏽‍🏫"},
                "1F3FE": {k: "male-teacher-1F3FE", n: "male-teacher", e: "👨🏾‍🏫"},
                "1F3FF": {k: "male-teacher-1F3FF", n: "male-teacher", e: "👨🏿‍🏫"}
            }
        }, {n: ["round_pushpin"], e: "📍", c: 5}, {n: ["flag-je"], e: "🇯🇪", c: 4}, {
            n: ["question"],
            e: "❓",
            c: 7
        }, {n: ["rocket"], e: "🚀", c: 3}, {
            n: ["female-teacher"],
            e: "👩‍🏫",
            c: 1,
            v: {
                "1F3FB": {k: "female-teacher-1F3FB", n: "female-teacher", e: "👩🏻‍🏫"},
                "1F3FC": {k: "female-teacher-1F3FC", n: "female-teacher", e: "👩🏼‍🏫"},
                "1F3FD": {k: "female-teacher-1F3FD", n: "female-teacher", e: "👩🏽‍🏫"},
                "1F3FE": {k: "female-teacher-1F3FE", n: "female-teacher", e: "👩🏾‍🏫"},
                "1F3FF": {k: "female-teacher-1F3FF", n: "female-teacher", e: "👩🏿‍🏫"}
            }
        }, {n: ["paperclip"], e: "📎", c: 5}, {n: ["linked_paperclips"], e: "🖇️", c: 5}, {
            n: ["flying_saucer"],
            e: "🛸",
            c: 3
        }, {
            n: ["male-judge"],
            e: "👨‍⚖️",
            c: 1,
            v: {
                "1F3FB": {k: "male-judge-1F3FB", n: "male-judge", e: "👨🏻‍⚖️"},
                "1F3FC": {k: "male-judge-1F3FC", n: "male-judge", e: "👨🏼‍⚖️"},
                "1F3FD": {k: "male-judge-1F3FD", n: "male-judge", e: "👨🏽‍⚖️"},
                "1F3FE": {k: "male-judge-1F3FE", n: "male-judge", e: "👨🏾‍⚖️"},
                "1F3FF": {k: "male-judge-1F3FF", n: "male-judge", e: "👨🏿‍⚖️"}
            }
        }, {n: ["grey_question"], e: "❔", c: 7}, {n: ["flag-jm"], e: "🇯🇲", c: 4}, {
            n: ["bellhop_bell"],
            e: "🛎️",
            c: 3
        }, {n: ["straight_ruler"], e: "📏", c: 5}, {n: ["flag-jo"], e: "🇯🇴", c: 4}, {
            n: ["female-judge"],
            e: "👩‍⚖️",
            c: 1,
            v: {
                "1F3FB": {k: "female-judge-1F3FB", n: "female-judge", e: "👩🏻‍⚖️"},
                "1F3FC": {k: "female-judge-1F3FC", n: "female-judge", e: "👩🏼‍⚖️"},
                "1F3FD": {k: "female-judge-1F3FD", n: "female-judge", e: "👩🏽‍⚖️"},
                "1F3FE": {k: "female-judge-1F3FE", n: "female-judge", e: "👩🏾‍⚖️"},
                "1F3FF": {k: "female-judge-1F3FF", n: "female-judge", e: "👩🏿‍⚖️"}
            }
        }, {n: ["grey_exclamation"], e: "❕", c: 7}, {n: ["door"], e: "🚪", c: 3}, {
            n: ["male-farmer"],
            e: "👨‍🌾",
            c: 1,
            v: {
                "1F3FB": {k: "male-farmer-1F3FB", n: "male-farmer", e: "👨🏻‍🌾"},
                "1F3FC": {k: "male-farmer-1F3FC", n: "male-farmer", e: "👨🏼‍🌾"},
                "1F3FD": {k: "male-farmer-1F3FD", n: "male-farmer", e: "👨🏽‍🌾"},
                "1F3FE": {k: "male-farmer-1F3FE", n: "male-farmer", e: "👨🏾‍🌾"},
                "1F3FF": {k: "male-farmer-1F3FF", n: "male-farmer", e: "👨🏿‍🌾"}
            }
        }, {n: ["jp", "flag-jp"], e: "🇯🇵", c: 4}, {
            n: ["triangular_ruler"],
            e: "📐",
            c: 5
        }, {n: ["exclamation", "heavy_exclamation_mark"], e: "❗", c: 7}, {
            n: ["bed"],
            e: "🛏️",
            c: 3
        }, {
            n: ["female-farmer"],
            e: "👩‍🌾",
            c: 1,
            v: {
                "1F3FB": {k: "female-farmer-1F3FB", n: "female-farmer", e: "👩🏻‍🌾"},
                "1F3FC": {k: "female-farmer-1F3FC", n: "female-farmer", e: "👩🏼‍🌾"},
                "1F3FD": {k: "female-farmer-1F3FD", n: "female-farmer", e: "👩🏽‍🌾"},
                "1F3FE": {k: "female-farmer-1F3FE", n: "female-farmer", e: "👩🏾‍🌾"},
                "1F3FF": {k: "female-farmer-1F3FF", n: "female-farmer", e: "👩🏿‍🌾"}
            }
        }, {n: ["scissors"], e: "✂️", c: 5}, {n: ["wavy_dash"], e: "〰️", c: 7}, {
            n: ["flag-ke"],
            e: "🇰🇪",
            c: 4
        }, {n: ["flag-kg"], e: "🇰🇬", c: 4}, {n: ["couch_and_lamp"], e: "🛋️", c: 3}, {
            n: ["male-cook"],
            e: "👨‍🍳",
            c: 1,
            v: {
                "1F3FB": {k: "male-cook-1F3FB", n: "male-cook", e: "👨🏻‍🍳"},
                "1F3FC": {k: "male-cook-1F3FC", n: "male-cook", e: "👨🏼‍🍳"},
                "1F3FD": {k: "male-cook-1F3FD", n: "male-cook", e: "👨🏽‍🍳"},
                "1F3FE": {k: "male-cook-1F3FE", n: "male-cook", e: "👨🏾‍🍳"},
                "1F3FF": {k: "male-cook-1F3FF", n: "male-cook", e: "👨🏿‍🍳"}
            }
        }, {n: ["card_file_box"], e: "🗃️", c: 5}, {n: ["copyright"], e: "©️", c: 7}, {
            n: ["file_cabinet"],
            e: "🗄️",
            c: 5
        }, {n: ["registered"], e: "®️", c: 7}, {n: ["flag-kh"], e: "🇰🇭", c: 4}, {
            n: ["female-cook"],
            e: "👩‍🍳",
            c: 1,
            v: {
                "1F3FB": {k: "female-cook-1F3FB", n: "female-cook", e: "👩🏻‍🍳"},
                "1F3FC": {k: "female-cook-1F3FC", n: "female-cook", e: "👩🏼‍🍳"},
                "1F3FD": {k: "female-cook-1F3FD", n: "female-cook", e: "👩🏽‍🍳"},
                "1F3FE": {k: "female-cook-1F3FE", n: "female-cook", e: "👩🏾‍🍳"},
                "1F3FF": {k: "female-cook-1F3FF", n: "female-cook", e: "👩🏿‍🍳"}
            }
        }, {n: ["toilet"], e: "🚽", c: 3}, {n: ["wastebasket"], e: "🗑️", c: 5}, {
            n: ["flag-ki"],
            e: "🇰🇮",
            c: 4
        }, {n: ["shower"], e: "🚿", c: 3}, {
            n: ["male-mechanic"],
            e: "👨‍🔧",
            c: 1,
            v: {
                "1F3FB": {k: "male-mechanic-1F3FB", n: "male-mechanic", e: "👨🏻‍🔧"},
                "1F3FC": {k: "male-mechanic-1F3FC", n: "male-mechanic", e: "👨🏼‍🔧"},
                "1F3FD": {k: "male-mechanic-1F3FD", n: "male-mechanic", e: "👨🏽‍🔧"},
                "1F3FE": {k: "male-mechanic-1F3FE", n: "male-mechanic", e: "👨🏾‍🔧"},
                "1F3FF": {k: "male-mechanic-1F3FF", n: "male-mechanic", e: "👨🏿‍🔧"}
            }
        }, {n: ["tm"], e: "™️", c: 7}, {n: ["hash"], e: "#️⃣", c: 7}, {
            n: ["flag-km"],
            e: "🇰🇲",
            c: 4
        }, {n: ["bathtub"], e: "🛁", c: 3}, {
            n: ["female-mechanic"],
            e: "👩‍🔧",
            c: 1,
            v: {
                "1F3FB": {k: "female-mechanic-1F3FB", n: "female-mechanic", e: "👩🏻‍🔧"},
                "1F3FC": {k: "female-mechanic-1F3FC", n: "female-mechanic", e: "👩🏼‍🔧"},
                "1F3FD": {k: "female-mechanic-1F3FD", n: "female-mechanic", e: "👩🏽‍🔧"},
                "1F3FE": {k: "female-mechanic-1F3FE", n: "female-mechanic", e: "👩🏾‍🔧"},
                "1F3FF": {k: "female-mechanic-1F3FF", n: "female-mechanic", e: "👩🏿‍🔧"}
            }
        }, {n: ["lock"], e: "🔒", c: 5}, {
            n: ["male-factory-worker"],
            e: "👨‍🏭",
            c: 1,
            v: {
                "1F3FB": {k: "male-factory-worker-1F3FB", n: "male-factory-worker", e: "👨🏻‍🏭"},
                "1F3FC": {k: "male-factory-worker-1F3FC", n: "male-factory-worker", e: "👨🏼‍🏭"},
                "1F3FD": {k: "male-factory-worker-1F3FD", n: "male-factory-worker", e: "👨🏽‍🏭"},
                "1F3FE": {k: "male-factory-worker-1F3FE", n: "male-factory-worker", e: "👨🏾‍🏭"},
                "1F3FF": {k: "male-factory-worker-1F3FF", n: "male-factory-worker", e: "👨🏿‍🏭"}
            }
        }, {n: ["flag-kn"], e: "🇰🇳", c: 4}, {n: ["hourglass"], e: "⌛", c: 3}, {
            n: ["keycap_star"],
            e: "*️⃣",
            c: 7
        }, {n: ["unlock"], e: "🔓", c: 5}, {n: ["flag-kp"], e: "🇰🇵", c: 4}, {
            n: ["female-factory-worker"],
            e: "👩‍🏭",
            c: 1,
            v: {
                "1F3FB": {k: "female-factory-worker-1F3FB", n: "female-factory-worker", e: "👩🏻‍🏭"},
                "1F3FC": {k: "female-factory-worker-1F3FC", n: "female-factory-worker", e: "👩🏼‍🏭"},
                "1F3FD": {k: "female-factory-worker-1F3FD", n: "female-factory-worker", e: "👩🏽‍🏭"},
                "1F3FE": {k: "female-factory-worker-1F3FE", n: "female-factory-worker", e: "👩🏾‍🏭"},
                "1F3FF": {k: "female-factory-worker-1F3FF", n: "female-factory-worker", e: "👩🏿‍🏭"}
            }
        }, {n: ["zero"], e: "0️⃣", c: 7}, {n: ["lock_with_ink_pen"], e: "🔏", c: 5}, {
            n: ["hourglass_flowing_sand"],
            e: "⏳",
            c: 3
        }, {n: ["one"], e: "1️⃣", c: 7}, {n: ["kr", "flag-kr"], e: "🇰🇷", c: 4}, {
            n: ["watch"],
            e: "⌚",
            c: 3
        }, {
            n: ["male-office-worker"],
            e: "👨‍💼",
            c: 1,
            v: {
                "1F3FB": {k: "male-office-worker-1F3FB", n: "male-office-worker", e: "👨🏻‍💼"},
                "1F3FC": {k: "male-office-worker-1F3FC", n: "male-office-worker", e: "👨🏼‍💼"},
                "1F3FD": {k: "male-office-worker-1F3FD", n: "male-office-worker", e: "👨🏽‍💼"},
                "1F3FE": {k: "male-office-worker-1F3FE", n: "male-office-worker", e: "👨🏾‍💼"},
                "1F3FF": {k: "male-office-worker-1F3FF", n: "male-office-worker", e: "👨🏿‍💼"}
            }
        }, {n: ["closed_lock_with_key"], e: "🔐", c: 5}, {
            n: ["female-office-worker"],
            e: "👩‍💼",
            c: 1,
            v: {
                "1F3FB": {k: "female-office-worker-1F3FB", n: "female-office-worker", e: "👩🏻‍💼"},
                "1F3FC": {k: "female-office-worker-1F3FC", n: "female-office-worker", e: "👩🏼‍💼"},
                "1F3FD": {k: "female-office-worker-1F3FD", n: "female-office-worker", e: "👩🏽‍💼"},
                "1F3FE": {k: "female-office-worker-1F3FE", n: "female-office-worker", e: "👩🏾‍💼"},
                "1F3FF": {k: "female-office-worker-1F3FF", n: "female-office-worker", e: "👩🏿‍💼"}
            }
        }, {n: ["two"], e: "2️⃣", c: 7}, {n: ["alarm_clock"], e: "⏰", c: 3}, {
            n: ["key"],
            e: "🔑",
            c: 5
        }, {n: ["flag-kw"], e: "🇰🇼", c: 4}, {n: ["stopwatch"], e: "⏱️", c: 3}, {
            n: ["male-scientist"],
            e: "👨‍🔬",
            c: 1,
            v: {
                "1F3FB": {k: "male-scientist-1F3FB", n: "male-scientist", e: "👨🏻‍🔬"},
                "1F3FC": {k: "male-scientist-1F3FC", n: "male-scientist", e: "👨🏼‍🔬"},
                "1F3FD": {k: "male-scientist-1F3FD", n: "male-scientist", e: "👨🏽‍🔬"},
                "1F3FE": {k: "male-scientist-1F3FE", n: "male-scientist", e: "👨🏾‍🔬"},
                "1F3FF": {k: "male-scientist-1F3FF", n: "male-scientist", e: "👨🏿‍🔬"}
            }
        }, {n: ["three"], e: "3️⃣", c: 7}, {n: ["flag-ky"], e: "🇰🇾", c: 4}, {
            n: ["old_key"],
            e: "🗝️",
            c: 5
        }, {n: ["flag-kz"], e: "🇰🇿", c: 4}, {n: ["hammer"], e: "🔨", c: 5}, {
            n: ["female-scientist"],
            e: "👩‍🔬",
            c: 1,
            v: {
                "1F3FB": {k: "female-scientist-1F3FB", n: "female-scientist", e: "👩🏻‍🔬"},
                "1F3FC": {k: "female-scientist-1F3FC", n: "female-scientist", e: "👩🏼‍🔬"},
                "1F3FD": {k: "female-scientist-1F3FD", n: "female-scientist", e: "👩🏽‍🔬"},
                "1F3FE": {k: "female-scientist-1F3FE", n: "female-scientist", e: "👩🏾‍🔬"},
                "1F3FF": {k: "female-scientist-1F3FF", n: "female-scientist", e: "👩🏿‍🔬"}
            }
        }, {n: ["timer_clock"], e: "⏲️", c: 3}, {n: ["four"], e: "4️⃣", c: 7}, {
            n: ["male-technologist"],
            e: "👨‍💻",
            c: 1,
            v: {
                "1F3FB": {k: "male-technologist-1F3FB", n: "male-technologist", e: "👨🏻‍💻"},
                "1F3FC": {k: "male-technologist-1F3FC", n: "male-technologist", e: "👨🏼‍💻"},
                "1F3FD": {k: "male-technologist-1F3FD", n: "male-technologist", e: "👨🏽‍💻"},
                "1F3FE": {k: "male-technologist-1F3FE", n: "male-technologist", e: "👨🏾‍💻"},
                "1F3FF": {k: "male-technologist-1F3FF", n: "male-technologist", e: "👨🏿‍💻"}
            }
        }, {n: ["mantelpiece_clock"], e: "🕰️", c: 3}, {n: ["five"], e: "5️⃣", c: 7}, {
            n: ["flag-la"],
            e: "🇱🇦",
            c: 4
        }, {n: ["pick"], e: "⛏️", c: 5}, {n: ["flag-lb"], e: "🇱🇧", c: 4}, {
            n: ["clock12"],
            e: "🕛",
            c: 3
        }, {n: ["hammer_and_pick"], e: "⚒️", c: 5}, {n: ["six"], e: "6️⃣", c: 7}, {
            n: ["female-technologist"],
            e: "👩‍💻",
            c: 1,
            v: {
                "1F3FB": {k: "female-technologist-1F3FB", n: "female-technologist", e: "👩🏻‍💻"},
                "1F3FC": {k: "female-technologist-1F3FC", n: "female-technologist", e: "👩🏼‍💻"},
                "1F3FD": {k: "female-technologist-1F3FD", n: "female-technologist", e: "👩🏽‍💻"},
                "1F3FE": {k: "female-technologist-1F3FE", n: "female-technologist", e: "👩🏾‍💻"},
                "1F3FF": {k: "female-technologist-1F3FF", n: "female-technologist", e: "👩🏿‍💻"}
            }
        }, {n: ["hammer_and_wrench"], e: "🛠️", c: 5}, {n: ["flag-lc"], e: "🇱🇨", c: 4}, {
            n: ["clock1230"],
            e: "🕧",
            c: 3
        }, {n: ["seven"], e: "7️⃣", c: 7}, {
            n: ["male-singer"],
            e: "👨‍🎤",
            c: 1,
            v: {
                "1F3FB": {k: "male-singer-1F3FB", n: "male-singer", e: "👨🏻‍🎤"},
                "1F3FC": {k: "male-singer-1F3FC", n: "male-singer", e: "👨🏼‍🎤"},
                "1F3FD": {k: "male-singer-1F3FD", n: "male-singer", e: "👨🏽‍🎤"},
                "1F3FE": {k: "male-singer-1F3FE", n: "male-singer", e: "👨🏾‍🎤"},
                "1F3FF": {k: "male-singer-1F3FF", n: "male-singer", e: "👨🏿‍🎤"}
            }
        }, {n: ["eight"], e: "8️⃣", c: 7}, {n: ["flag-li"], e: "🇱🇮", c: 4}, {
            n: ["dagger_knife"],
            e: "🗡️",
            c: 5
        }, {n: ["clock1"], e: "🕐", c: 3}, {
            n: ["female-singer"],
            e: "👩‍🎤",
            c: 1,
            v: {
                "1F3FB": {k: "female-singer-1F3FB", n: "female-singer", e: "👩🏻‍🎤"},
                "1F3FC": {k: "female-singer-1F3FC", n: "female-singer", e: "👩🏼‍🎤"},
                "1F3FD": {k: "female-singer-1F3FD", n: "female-singer", e: "👩🏽‍🎤"},
                "1F3FE": {k: "female-singer-1F3FE", n: "female-singer", e: "👩🏾‍🎤"},
                "1F3FF": {k: "female-singer-1F3FF", n: "female-singer", e: "👩🏿‍🎤"}
            }
        }, {
            n: ["male-artist"],
            e: "👨‍🎨",
            c: 1,
            v: {
                "1F3FB": {k: "male-artist-1F3FB", n: "male-artist", e: "👨🏻‍🎨"},
                "1F3FC": {k: "male-artist-1F3FC", n: "male-artist", e: "👨🏼‍🎨"},
                "1F3FD": {k: "male-artist-1F3FD", n: "male-artist", e: "👨🏽‍🎨"},
                "1F3FE": {k: "male-artist-1F3FE", n: "male-artist", e: "👨🏾‍🎨"},
                "1F3FF": {k: "male-artist-1F3FF", n: "male-artist", e: "👨🏿‍🎨"}
            }
        }, {n: ["crossed_swords"], e: "⚔️", c: 5}, {n: ["nine"], e: "9️⃣", c: 7}, {
            n: ["flag-lk"],
            e: "🇱🇰",
            c: 4
        }, {n: ["clock130"], e: "🕜", c: 3}, {n: ["clock2"], e: "🕑", c: 3}, {
            n: ["gun"],
            e: "🔫",
            c: 5
        }, {n: ["keycap_ten"], e: "🔟", c: 7}, {
            n: ["female-artist"],
            e: "👩‍🎨",
            c: 1,
            v: {
                "1F3FB": {k: "female-artist-1F3FB", n: "female-artist", e: "👩🏻‍🎨"},
                "1F3FC": {k: "female-artist-1F3FC", n: "female-artist", e: "👩🏼‍🎨"},
                "1F3FD": {k: "female-artist-1F3FD", n: "female-artist", e: "👩🏽‍🎨"},
                "1F3FE": {k: "female-artist-1F3FE", n: "female-artist", e: "👩🏾‍🎨"},
                "1F3FF": {k: "female-artist-1F3FF", n: "female-artist", e: "👩🏿‍🎨"}
            }
        }, {n: ["flag-lr"], e: "🇱🇷", c: 4}, {n: ["clock230"], e: "🕝", c: 3}, {
            n: ["100"],
            e: "💯",
            c: 7
        }, {n: ["bow_and_arrow"], e: "🏹", c: 5}, {
            n: ["male-pilot"],
            e: "👨‍✈️",
            c: 1,
            v: {
                "1F3FB": {k: "male-pilot-1F3FB", n: "male-pilot", e: "👨🏻‍✈️"},
                "1F3FC": {k: "male-pilot-1F3FC", n: "male-pilot", e: "👨🏼‍✈️"},
                "1F3FD": {k: "male-pilot-1F3FD", n: "male-pilot", e: "👨🏽‍✈️"},
                "1F3FE": {k: "male-pilot-1F3FE", n: "male-pilot", e: "👨🏾‍✈️"},
                "1F3FF": {k: "male-pilot-1F3FF", n: "male-pilot", e: "👨🏿‍✈️"}
            }
        }, {n: ["flag-ls"], e: "🇱🇸", c: 4}, {n: ["flag-lt"], e: "🇱🇹", c: 4}, {
            n: ["capital_abcd"],
            e: "🔠",
            c: 7
        }, {
            n: ["female-pilot"],
            e: "👩‍✈️",
            c: 1,
            v: {
                "1F3FB": {k: "female-pilot-1F3FB", n: "female-pilot", e: "👩🏻‍✈️"},
                "1F3FC": {k: "female-pilot-1F3FC", n: "female-pilot", e: "👩🏼‍✈️"},
                "1F3FD": {k: "female-pilot-1F3FD", n: "female-pilot", e: "👩🏽‍✈️"},
                "1F3FE": {k: "female-pilot-1F3FE", n: "female-pilot", e: "👩🏾‍✈️"},
                "1F3FF": {k: "female-pilot-1F3FF", n: "female-pilot", e: "👩🏿‍✈️"}
            }
        }, {n: ["clock3"], e: "🕒", c: 3}, {n: ["shield"], e: "🛡️", c: 5}, {
            n: ["male-astronaut"],
            e: "👨‍🚀",
            c: 1,
            v: {
                "1F3FB": {k: "male-astronaut-1F3FB", n: "male-astronaut", e: "👨🏻‍🚀"},
                "1F3FC": {k: "male-astronaut-1F3FC", n: "male-astronaut", e: "👨🏼‍🚀"},
                "1F3FD": {k: "male-astronaut-1F3FD", n: "male-astronaut", e: "👨🏽‍🚀"},
                "1F3FE": {k: "male-astronaut-1F3FE", n: "male-astronaut", e: "👨🏾‍🚀"},
                "1F3FF": {k: "male-astronaut-1F3FF", n: "male-astronaut", e: "👨🏿‍🚀"}
            }
        }, {n: ["abcd"], e: "🔡", c: 7}, {n: ["clock330"], e: "🕞", c: 3}, {
            n: ["flag-lu"],
            e: "🇱🇺",
            c: 4
        }, {n: ["wrench"], e: "🔧", c: 5}, {n: ["nut_and_bolt"], e: "🔩", c: 5}, {
            n: ["1234"],
            e: "🔢",
            c: 7
        }, {n: ["clock4"], e: "🕓", c: 3}, {
            n: ["female-astronaut"],
            e: "👩‍🚀",
            c: 1,
            v: {
                "1F3FB": {k: "female-astronaut-1F3FB", n: "female-astronaut", e: "👩🏻‍🚀"},
                "1F3FC": {k: "female-astronaut-1F3FC", n: "female-astronaut", e: "👩🏼‍🚀"},
                "1F3FD": {k: "female-astronaut-1F3FD", n: "female-astronaut", e: "👩🏽‍🚀"},
                "1F3FE": {k: "female-astronaut-1F3FE", n: "female-astronaut", e: "👩🏾‍🚀"},
                "1F3FF": {k: "female-astronaut-1F3FF", n: "female-astronaut", e: "👩🏿‍🚀"}
            }
        }, {n: ["flag-lv"], e: "🇱🇻", c: 4}, {n: ["gear"], e: "⚙️", c: 5}, {
            n: ["male-firefighter"],
            e: "👨‍🚒",
            c: 1,
            v: {
                "1F3FB": {k: "male-firefighter-1F3FB", n: "male-firefighter", e: "👨🏻‍🚒"},
                "1F3FC": {k: "male-firefighter-1F3FC", n: "male-firefighter", e: "👨🏼‍🚒"},
                "1F3FD": {k: "male-firefighter-1F3FD", n: "male-firefighter", e: "👨🏽‍🚒"},
                "1F3FE": {k: "male-firefighter-1F3FE", n: "male-firefighter", e: "👨🏾‍🚒"},
                "1F3FF": {k: "male-firefighter-1F3FF", n: "male-firefighter", e: "👨🏿‍🚒"}
            }
        }, {n: ["flag-ly"], e: "🇱🇾", c: 4}, {n: ["symbols"], e: "🔣", c: 7}, {
            n: ["clock430"],
            e: "🕟",
            c: 3
        }, {n: ["flag-ma"], e: "🇲🇦", c: 4}, {n: ["compression"], e: "🗜️", c: 5}, {
            n: ["female-firefighter"],
            e: "👩‍🚒",
            c: 1,
            v: {
                "1F3FB": {k: "female-firefighter-1F3FB", n: "female-firefighter", e: "👩🏻‍🚒"},
                "1F3FC": {k: "female-firefighter-1F3FC", n: "female-firefighter", e: "👩🏼‍🚒"},
                "1F3FD": {k: "female-firefighter-1F3FD", n: "female-firefighter", e: "👩🏽‍🚒"},
                "1F3FE": {k: "female-firefighter-1F3FE", n: "female-firefighter", e: "👩🏾‍🚒"},
                "1F3FF": {k: "female-firefighter-1F3FF", n: "female-firefighter", e: "👩🏿‍🚒"}
            }
        }, {n: ["abc"], e: "🔤", c: 7}, {n: ["clock5"], e: "🕔", c: 3}, {n: ["clock530"], e: "🕠", c: 3}, {
            n: ["a"],
            e: "🅰️",
            c: 7
        }, {n: ["alembic"], e: "⚗️", c: 5}, {n: ["flag-mc"], e: "🇲🇨", c: 4}, {
            n: ["cop"],
            e: "👮",
            c: 1,
            v: {
                "1F3FB": {k: "cop-1F3FB", n: "cop", e: "👮🏻"},
                "1F3FC": {k: "cop-1F3FC", n: "cop", e: "👮🏼"},
                "1F3FD": {k: "cop-1F3FD", n: "cop", e: "👮🏽"},
                "1F3FE": {k: "cop-1F3FE", n: "cop", e: "👮🏾"},
                "1F3FF": {k: "cop-1F3FF", n: "cop", e: "👮🏿"}
            }
        }, {n: ["scales"], e: "⚖️", c: 5}, {n: ["clock6"], e: "🕕", c: 3}, {
            n: ["flag-md"],
            e: "🇲🇩",
            c: 4
        }, {n: ["ab"], e: "🆎", c: 7}, {
            n: ["male-police-officer"],
            e: "👮‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "male-police-officer-1F3FB", n: "male-police-officer", e: "👮🏻‍♂️"},
                "1F3FC": {k: "male-police-officer-1F3FC", n: "male-police-officer", e: "👮🏼‍♂️"},
                "1F3FD": {k: "male-police-officer-1F3FD", n: "male-police-officer", e: "👮🏽‍♂️"},
                "1F3FE": {k: "male-police-officer-1F3FE", n: "male-police-officer", e: "👮🏾‍♂️"},
                "1F3FF": {k: "male-police-officer-1F3FF", n: "male-police-officer", e: "👮🏿‍♂️"}
            }
        }, {n: ["link"], e: "🔗", c: 5}, {n: ["flag-me"], e: "🇲🇪", c: 4}, {n: ["clock630"], e: "🕡", c: 3}, {
            n: ["b"],
            e: "🅱️",
            c: 7
        }, {
            n: ["female-police-officer"],
            e: "👮‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "female-police-officer-1F3FB", n: "female-police-officer", e: "👮🏻‍♀️"},
                "1F3FC": {k: "female-police-officer-1F3FC", n: "female-police-officer", e: "👮🏼‍♀️"},
                "1F3FD": {k: "female-police-officer-1F3FD", n: "female-police-officer", e: "👮🏽‍♀️"},
                "1F3FE": {k: "female-police-officer-1F3FE", n: "female-police-officer", e: "👮🏾‍♀️"},
                "1F3FF": {k: "female-police-officer-1F3FF", n: "female-police-officer", e: "👮🏿‍♀️"}
            }
        }, {n: ["clock7"], e: "🕖", c: 3}, {n: ["cl"], e: "🆑", c: 7}, {
            n: ["sleuth_or_spy"],
            e: "🕵️",
            c: 1,
            v: {
                "1F3FB": {k: "sleuth_or_spy-1F3FB", n: "sleuth_or_spy", e: "🕵🏻"},
                "1F3FC": {k: "sleuth_or_spy-1F3FC", n: "sleuth_or_spy", e: "🕵🏼"},
                "1F3FD": {k: "sleuth_or_spy-1F3FD", n: "sleuth_or_spy", e: "🕵🏽"},
                "1F3FE": {k: "sleuth_or_spy-1F3FE", n: "sleuth_or_spy", e: "🕵🏾"},
                "1F3FF": {k: "sleuth_or_spy-1F3FF", n: "sleuth_or_spy", e: "🕵🏿"}
            }
        }, {n: ["flag-mf"], e: "🇲🇫", c: 4}, {n: ["chains"], e: "⛓️", c: 5}, {
            n: ["syringe"],
            e: "💉",
            c: 5
        }, {
            n: ["male-detective"],
            e: "🕵️‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "male-detective-1F3FB", n: "male-detective", e: "🕵🏻‍♂️"},
                "1F3FC": {k: "male-detective-1F3FC", n: "male-detective", e: "🕵🏼‍♂️"},
                "1F3FD": {k: "male-detective-1F3FD", n: "male-detective", e: "🕵🏽‍♂️"},
                "1F3FE": {k: "male-detective-1F3FE", n: "male-detective", e: "🕵🏾‍♂️"},
                "1F3FF": {k: "male-detective-1F3FF", n: "male-detective", e: "🕵🏿‍♂️"}
            }
        }, {n: ["cool"], e: "🆒", c: 7}, {n: ["clock730"], e: "🕢", c: 3}, {
            n: ["flag-mg"],
            e: "🇲🇬",
            c: 4
        }, {n: ["free"], e: "🆓", c: 7}, {n: ["flag-mh"], e: "🇲🇭", c: 4}, {
            n: ["clock8"],
            e: "🕗",
            c: 3
        }, {n: ["pill"], e: "💊", c: 5}, {
            n: ["female-detective"],
            e: "🕵️‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "female-detective-1F3FB", n: "female-detective", e: "🕵🏻‍♀️"},
                "1F3FC": {k: "female-detective-1F3FC", n: "female-detective", e: "🕵🏼‍♀️"},
                "1F3FD": {k: "female-detective-1F3FD", n: "female-detective", e: "🕵🏽‍♀️"},
                "1F3FE": {k: "female-detective-1F3FE", n: "female-detective", e: "🕵🏾‍♀️"},
                "1F3FF": {k: "female-detective-1F3FF", n: "female-detective", e: "🕵🏿‍♀️"}
            }
        }, {n: ["clock830"], e: "🕣", c: 3}, {
            n: ["guardsman"],
            e: "💂",
            c: 1,
            v: {
                "1F3FB": {k: "guardsman-1F3FB", n: "guardsman", e: "💂🏻"},
                "1F3FC": {k: "guardsman-1F3FC", n: "guardsman", e: "💂🏼"},
                "1F3FD": {k: "guardsman-1F3FD", n: "guardsman", e: "💂🏽"},
                "1F3FE": {k: "guardsman-1F3FE", n: "guardsman", e: "💂🏾"},
                "1F3FF": {k: "guardsman-1F3FF", n: "guardsman", e: "💂🏿"}
            }
        }, {n: ["information_source"], e: "ℹ️", c: 7}, {n: ["flag-mk"], e: "🇲🇰", c: 4}, {
            n: ["smoking"],
            e: "🚬",
            c: 5
        }, {n: ["id"], e: "🆔", c: 7}, {n: ["clock9"], e: "🕘", c: 3}, {
            n: ["flag-ml"],
            e: "🇲🇱",
            c: 4
        }, {n: ["coffin"], e: "⚰️", c: 5}, {
            n: ["male-guard"],
            e: "💂‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "male-guard-1F3FB", n: "male-guard", e: "💂🏻‍♂️"},
                "1F3FC": {k: "male-guard-1F3FC", n: "male-guard", e: "💂🏼‍♂️"},
                "1F3FD": {k: "male-guard-1F3FD", n: "male-guard", e: "💂🏽‍♂️"},
                "1F3FE": {k: "male-guard-1F3FE", n: "male-guard", e: "💂🏾‍♂️"},
                "1F3FF": {k: "male-guard-1F3FF", n: "male-guard", e: "💂🏿‍♂️"}
            }
        }, {n: ["m"], e: "Ⓜ️", c: 7}, {n: ["funeral_urn"], e: "⚱️", c: 5}, {
            n: ["female-guard"],
            e: "💂‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "female-guard-1F3FB", n: "female-guard", e: "💂🏻‍♀️"},
                "1F3FC": {k: "female-guard-1F3FC", n: "female-guard", e: "💂🏼‍♀️"},
                "1F3FD": {k: "female-guard-1F3FD", n: "female-guard", e: "💂🏽‍♀️"},
                "1F3FE": {k: "female-guard-1F3FE", n: "female-guard", e: "💂🏾‍♀️"},
                "1F3FF": {k: "female-guard-1F3FF", n: "female-guard", e: "💂🏿‍♀️"}
            }
        }, {n: ["flag-mm"], e: "🇲🇲", c: 4}, {n: ["clock930"], e: "🕤", c: 3}, {
            n: ["moyai"],
            e: "🗿",
            c: 5
        }, {n: ["new"], e: "🆕", c: 7}, {n: ["flag-mn"], e: "🇲🇳", c: 4}, {
            n: ["construction_worker"],
            e: "👷",
            c: 1,
            v: {
                "1F3FB": {k: "construction_worker-1F3FB", n: "construction_worker", e: "👷🏻"},
                "1F3FC": {k: "construction_worker-1F3FC", n: "construction_worker", e: "👷🏼"},
                "1F3FD": {k: "construction_worker-1F3FD", n: "construction_worker", e: "👷🏽"},
                "1F3FE": {k: "construction_worker-1F3FE", n: "construction_worker", e: "👷🏾"},
                "1F3FF": {k: "construction_worker-1F3FF", n: "construction_worker", e: "👷🏿"}
            }
        }, {n: ["clock10"], e: "🕙", c: 3}, {n: ["clock1030"], e: "🕥", c: 3}, {
            n: ["ng"],
            e: "🆖",
            c: 7
        }, {
            n: ["male-construction-worker"],
            e: "👷‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "male-construction-worker-1F3FB", n: "male-construction-worker", e: "👷🏻‍♂️"},
                "1F3FC": {k: "male-construction-worker-1F3FC", n: "male-construction-worker", e: "👷🏼‍♂️"},
                "1F3FD": {k: "male-construction-worker-1F3FD", n: "male-construction-worker", e: "👷🏽‍♂️"},
                "1F3FE": {k: "male-construction-worker-1F3FE", n: "male-construction-worker", e: "👷🏾‍♂️"},
                "1F3FF": {k: "male-construction-worker-1F3FF", n: "male-construction-worker", e: "👷🏿‍♂️"}
            }
        }, {n: ["flag-mo"], e: "🇲🇴", c: 4}, {n: ["oil_drum"], e: "🛢️", c: 5}, {
            n: ["o2"],
            e: "🅾️",
            c: 7
        }, {
            n: ["female-construction-worker"],
            e: "👷‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "female-construction-worker-1F3FB", n: "female-construction-worker", e: "👷🏻‍♀️"},
                "1F3FC": {k: "female-construction-worker-1F3FC", n: "female-construction-worker", e: "👷🏼‍♀️"},
                "1F3FD": {k: "female-construction-worker-1F3FD", n: "female-construction-worker", e: "👷🏽‍♀️"},
                "1F3FE": {k: "female-construction-worker-1F3FE", n: "female-construction-worker", e: "👷🏾‍♀️"},
                "1F3FF": {k: "female-construction-worker-1F3FF", n: "female-construction-worker", e: "👷🏿‍♀️"}
            }
        }, {n: ["clock11"], e: "🕚", c: 3}, {n: ["crystal_ball"], e: "🔮", c: 5}, {
            n: ["flag-mp"],
            e: "🇲🇵",
            c: 4
        }, {n: ["flag-mq"], e: "🇲🇶", c: 4}, {
            n: ["prince"],
            e: "🤴",
            c: 1,
            v: {
                "1F3FB": {k: "prince-1F3FB", n: "prince", e: "🤴🏻"},
                "1F3FC": {k: "prince-1F3FC", n: "prince", e: "🤴🏼"},
                "1F3FD": {k: "prince-1F3FD", n: "prince", e: "🤴🏽"},
                "1F3FE": {k: "prince-1F3FE", n: "prince", e: "🤴🏾"},
                "1F3FF": {k: "prince-1F3FF", n: "prince", e: "🤴🏿"}
            }
        }, {n: ["ok"], e: "🆗", c: 7}, {n: ["clock1130"], e: "🕦", c: 3}, {
            n: ["shopping_trolley"],
            e: "🛒",
            c: 5
        }, {n: ["flag-mr"], e: "🇲🇷", c: 4}, {
            n: ["princess"],
            e: "👸",
            c: 1,
            v: {
                "1F3FB": {k: "princess-1F3FB", n: "princess", e: "👸🏻"},
                "1F3FC": {k: "princess-1F3FC", n: "princess", e: "👸🏼"},
                "1F3FD": {k: "princess-1F3FD", n: "princess", e: "👸🏽"},
                "1F3FE": {k: "princess-1F3FE", n: "princess", e: "👸🏾"},
                "1F3FF": {k: "princess-1F3FF", n: "princess", e: "👸🏿"}
            }
        }, {n: ["new_moon"], e: "🌑", c: 3}, {n: ["parking"], e: "🅿️", c: 7}, {
            n: ["sos"],
            e: "🆘",
            c: 7
        }, {
            n: ["man_with_turban"],
            e: "👳",
            c: 1,
            v: {
                "1F3FB": {k: "man_with_turban-1F3FB", n: "man_with_turban", e: "👳🏻"},
                "1F3FC": {k: "man_with_turban-1F3FC", n: "man_with_turban", e: "👳🏼"},
                "1F3FD": {k: "man_with_turban-1F3FD", n: "man_with_turban", e: "👳🏽"},
                "1F3FE": {k: "man_with_turban-1F3FE", n: "man_with_turban", e: "👳🏾"},
                "1F3FF": {k: "man_with_turban-1F3FF", n: "man_with_turban", e: "👳🏿"}
            }
        }, {n: ["flag-ms"], e: "🇲🇸", c: 4}, {n: ["waxing_crescent_moon"], e: "🌒", c: 3}, {
            n: ["up"],
            e: "🆙",
            c: 7
        }, {n: ["first_quarter_moon"], e: "🌓", c: 3}, {n: ["flag-mt"], e: "🇲🇹", c: 4}, {
            n: ["man-wearing-turban"],
            e: "👳‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-wearing-turban-1F3FB", n: "man-wearing-turban", e: "👳🏻‍♂️"},
                "1F3FC": {k: "man-wearing-turban-1F3FC", n: "man-wearing-turban", e: "👳🏼‍♂️"},
                "1F3FD": {k: "man-wearing-turban-1F3FD", n: "man-wearing-turban", e: "👳🏽‍♂️"},
                "1F3FE": {k: "man-wearing-turban-1F3FE", n: "man-wearing-turban", e: "👳🏾‍♂️"},
                "1F3FF": {k: "man-wearing-turban-1F3FF", n: "man-wearing-turban", e: "👳🏿‍♂️"}
            }
        }, {n: ["moon", "waxing_gibbous_moon"], e: "🌔", c: 3}, {
            n: ["woman-wearing-turban"],
            e: "👳‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-wearing-turban-1F3FB", n: "woman-wearing-turban", e: "👳🏻‍♀️"},
                "1F3FC": {k: "woman-wearing-turban-1F3FC", n: "woman-wearing-turban", e: "👳🏼‍♀️"},
                "1F3FD": {k: "woman-wearing-turban-1F3FD", n: "woman-wearing-turban", e: "👳🏽‍♀️"},
                "1F3FE": {k: "woman-wearing-turban-1F3FE", n: "woman-wearing-turban", e: "👳🏾‍♀️"},
                "1F3FF": {k: "woman-wearing-turban-1F3FF", n: "woman-wearing-turban", e: "👳🏿‍♀️"}
            }
        }, {n: ["vs"], e: "🆚", c: 7}, {n: ["flag-mu"], e: "🇲🇺", c: 4}, {
            n: ["man_with_gua_pi_mao"],
            e: "👲",
            c: 1,
            v: {
                "1F3FB": {k: "man_with_gua_pi_mao-1F3FB", n: "man_with_gua_pi_mao", e: "👲🏻"},
                "1F3FC": {k: "man_with_gua_pi_mao-1F3FC", n: "man_with_gua_pi_mao", e: "👲🏼"},
                "1F3FD": {k: "man_with_gua_pi_mao-1F3FD", n: "man_with_gua_pi_mao", e: "👲🏽"},
                "1F3FE": {k: "man_with_gua_pi_mao-1F3FE", n: "man_with_gua_pi_mao", e: "👲🏾"},
                "1F3FF": {k: "man_with_gua_pi_mao-1F3FF", n: "man_with_gua_pi_mao", e: "👲🏿"}
            }
        }, {n: ["koko"], e: "🈁", c: 7}, {n: ["full_moon"], e: "🌕", c: 3}, {
            n: ["flag-mv"],
            e: "🇲🇻",
            c: 4
        }, {
            n: ["person_with_headscarf"],
            e: "🧕",
            c: 1,
            v: {
                "1F3FB": {k: "person_with_headscarf-1F3FB", n: "person_with_headscarf", e: "🧕🏻"},
                "1F3FC": {k: "person_with_headscarf-1F3FC", n: "person_with_headscarf", e: "🧕🏼"},
                "1F3FD": {k: "person_with_headscarf-1F3FD", n: "person_with_headscarf", e: "🧕🏽"},
                "1F3FE": {k: "person_with_headscarf-1F3FE", n: "person_with_headscarf", e: "🧕🏾"},
                "1F3FF": {k: "person_with_headscarf-1F3FF", n: "person_with_headscarf", e: "🧕🏿"}
            }
        }, {n: ["waning_gibbous_moon"], e: "🌖", c: 3}, {n: ["sa"], e: "🈂️", c: 7}, {
            n: ["flag-mw"],
            e: "🇲🇼",
            c: 4
        }, {n: ["last_quarter_moon"], e: "🌗", c: 3}, {n: ["u6708"], e: "🈷️", c: 7}, {
            n: ["bearded_person"],
            e: "🧔",
            c: 1,
            v: {
                "1F3FB": {k: "bearded_person-1F3FB", n: "bearded_person", e: "🧔🏻"},
                "1F3FC": {k: "bearded_person-1F3FC", n: "bearded_person", e: "🧔🏼"},
                "1F3FD": {k: "bearded_person-1F3FD", n: "bearded_person", e: "🧔🏽"},
                "1F3FE": {k: "bearded_person-1F3FE", n: "bearded_person", e: "🧔🏾"},
                "1F3FF": {k: "bearded_person-1F3FF", n: "bearded_person", e: "🧔🏿"}
            }
        }, {n: ["flag-mx"], e: "🇲🇽", c: 4}, {n: ["u6709"], e: "🈶", c: 7}, {
            n: ["person_with_blond_hair"],
            e: "👱",
            c: 1,
            v: {
                "1F3FB": {k: "person_with_blond_hair-1F3FB", n: "person_with_blond_hair", e: "👱🏻"},
                "1F3FC": {k: "person_with_blond_hair-1F3FC", n: "person_with_blond_hair", e: "👱🏼"},
                "1F3FD": {k: "person_with_blond_hair-1F3FD", n: "person_with_blond_hair", e: "👱🏽"},
                "1F3FE": {k: "person_with_blond_hair-1F3FE", n: "person_with_blond_hair", e: "👱🏾"},
                "1F3FF": {k: "person_with_blond_hair-1F3FF", n: "person_with_blond_hair", e: "👱🏿"}
            }
        }, {n: ["waning_crescent_moon"], e: "🌘", c: 3}, {n: ["flag-my"], e: "🇲🇾", c: 4}, {
            n: ["u6307"],
            e: "🈯",
            c: 7
        }, {
            n: ["blond-haired-man"],
            e: "👱‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "blond-haired-man-1F3FB", n: "blond-haired-man", e: "👱🏻‍♂️"},
                "1F3FC": {k: "blond-haired-man-1F3FC", n: "blond-haired-man", e: "👱🏼‍♂️"},
                "1F3FD": {k: "blond-haired-man-1F3FD", n: "blond-haired-man", e: "👱🏽‍♂️"},
                "1F3FE": {k: "blond-haired-man-1F3FE", n: "blond-haired-man", e: "👱🏾‍♂️"},
                "1F3FF": {k: "blond-haired-man-1F3FF", n: "blond-haired-man", e: "👱🏿‍♂️"}
            }
        }, {n: ["crescent_moon"], e: "🌙", c: 3}, {n: ["flag-mz"], e: "🇲🇿", c: 4}, {
            n: ["new_moon_with_face"],
            e: "🌚",
            c: 3
        }, {n: ["flag-na"], e: "🇳🇦", c: 4}, {
            n: ["blond-haired-woman"],
            e: "👱‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "blond-haired-woman-1F3FB", n: "blond-haired-woman", e: "👱🏻‍♀️"},
                "1F3FC": {k: "blond-haired-woman-1F3FC", n: "blond-haired-woman", e: "👱🏼‍♀️"},
                "1F3FD": {k: "blond-haired-woman-1F3FD", n: "blond-haired-woman", e: "👱🏽‍♀️"},
                "1F3FE": {k: "blond-haired-woman-1F3FE", n: "blond-haired-woman", e: "👱🏾‍♀️"},
                "1F3FF": {k: "blond-haired-woman-1F3FF", n: "blond-haired-woman", e: "👱🏿‍♀️"}
            }
        }, {n: ["ideograph_advantage"], e: "🉐", c: 7}, {
            n: ["first_quarter_moon_with_face"],
            e: "🌛",
            c: 3
        }, {
            n: ["man_in_tuxedo"],
            e: "🤵",
            c: 1,
            v: {
                "1F3FB": {k: "man_in_tuxedo-1F3FB", n: "man_in_tuxedo", e: "🤵🏻"},
                "1F3FC": {k: "man_in_tuxedo-1F3FC", n: "man_in_tuxedo", e: "🤵🏼"},
                "1F3FD": {k: "man_in_tuxedo-1F3FD", n: "man_in_tuxedo", e: "🤵🏽"},
                "1F3FE": {k: "man_in_tuxedo-1F3FE", n: "man_in_tuxedo", e: "🤵🏾"},
                "1F3FF": {k: "man_in_tuxedo-1F3FF", n: "man_in_tuxedo", e: "🤵🏿"}
            }
        }, {n: ["flag-nc"], e: "🇳🇨", c: 4}, {n: ["u5272"], e: "🈹", c: 7}, {
            n: ["flag-ne"],
            e: "🇳🇪",
            c: 4
        }, {n: ["last_quarter_moon_with_face"], e: "🌜", c: 3}, {n: ["u7121"], e: "🈚", c: 7}, {
            n: ["bride_with_veil"],
            e: "👰",
            c: 1,
            v: {
                "1F3FB": {k: "bride_with_veil-1F3FB", n: "bride_with_veil", e: "👰🏻"},
                "1F3FC": {k: "bride_with_veil-1F3FC", n: "bride_with_veil", e: "👰🏼"},
                "1F3FD": {k: "bride_with_veil-1F3FD", n: "bride_with_veil", e: "👰🏽"},
                "1F3FE": {k: "bride_with_veil-1F3FE", n: "bride_with_veil", e: "👰🏾"},
                "1F3FF": {k: "bride_with_veil-1F3FF", n: "bride_with_veil", e: "👰🏿"}
            }
        }, {n: ["u7981"], e: "🈲", c: 7}, {
            n: ["pregnant_woman"],
            e: "🤰",
            c: 1,
            v: {
                "1F3FB": {k: "pregnant_woman-1F3FB", n: "pregnant_woman", e: "🤰🏻"},
                "1F3FC": {k: "pregnant_woman-1F3FC", n: "pregnant_woman", e: "🤰🏼"},
                "1F3FD": {k: "pregnant_woman-1F3FD", n: "pregnant_woman", e: "🤰🏽"},
                "1F3FE": {k: "pregnant_woman-1F3FE", n: "pregnant_woman", e: "🤰🏾"},
                "1F3FF": {k: "pregnant_woman-1F3FF", n: "pregnant_woman", e: "🤰🏿"}
            }
        }, {n: ["thermometer"], e: "🌡️", c: 3}, {n: ["flag-nf"], e: "🇳🇫", c: 4}, {
            n: ["sunny"],
            e: "☀️",
            c: 3
        }, {n: ["accept"], e: "🉑", c: 7}, {n: ["flag-ng"], e: "🇳🇬", c: 4}, {
            n: ["breast-feeding"],
            e: "🤱",
            c: 1,
            v: {
                "1F3FB": {k: "breast-feeding-1F3FB", n: "breast-feeding", e: "🤱🏻"},
                "1F3FC": {k: "breast-feeding-1F3FC", n: "breast-feeding", e: "🤱🏼"},
                "1F3FD": {k: "breast-feeding-1F3FD", n: "breast-feeding", e: "🤱🏽"},
                "1F3FE": {k: "breast-feeding-1F3FE", n: "breast-feeding", e: "🤱🏾"},
                "1F3FF": {k: "breast-feeding-1F3FF", n: "breast-feeding", e: "🤱🏿"}
            }
        }, {n: ["full_moon_with_face"], e: "🌝", c: 3}, {n: ["flag-ni"], e: "🇳🇮", c: 4}, {
            n: ["u7533"],
            e: "🈸",
            c: 7
        }, {
            n: ["angel"],
            e: "👼",
            c: 1,
            v: {
                "1F3FB": {k: "angel-1F3FB", n: "angel", e: "👼🏻"},
                "1F3FC": {k: "angel-1F3FC", n: "angel", e: "👼🏼"},
                "1F3FD": {k: "angel-1F3FD", n: "angel", e: "👼🏽"},
                "1F3FE": {k: "angel-1F3FE", n: "angel", e: "👼🏾"},
                "1F3FF": {k: "angel-1F3FF", n: "angel", e: "👼🏿"}
            }
        }, {n: ["sun_with_face"], e: "🌞", c: 3}, {
            n: ["santa"],
            e: "🎅",
            c: 1,
            v: {
                "1F3FB": {k: "santa-1F3FB", n: "santa", e: "🎅🏻"},
                "1F3FC": {k: "santa-1F3FC", n: "santa", e: "🎅🏼"},
                "1F3FD": {k: "santa-1F3FD", n: "santa", e: "🎅🏽"},
                "1F3FE": {k: "santa-1F3FE", n: "santa", e: "🎅🏾"},
                "1F3FF": {k: "santa-1F3FF", n: "santa", e: "🎅🏿"}
            }
        }, {n: ["u5408"], e: "🈴", c: 7}, {n: ["flag-nl"], e: "🇳🇱", c: 4}, {
            n: ["mrs_claus", "mother_christmas"],
            e: "🤶",
            c: 1,
            v: {
                "1F3FB": {k: "mrs_claus-1F3FB", n: "mrs_claus", e: "🤶🏻"},
                "1F3FC": {k: "mrs_claus-1F3FC", n: "mrs_claus", e: "🤶🏼"},
                "1F3FD": {k: "mrs_claus-1F3FD", n: "mrs_claus", e: "🤶🏽"},
                "1F3FE": {k: "mrs_claus-1F3FE", n: "mrs_claus", e: "🤶🏾"},
                "1F3FF": {k: "mrs_claus-1F3FF", n: "mrs_claus", e: "🤶🏿"}
            }
        }, {n: ["u7a7a"], e: "🈳", c: 7}, {n: ["star"], e: "⭐", c: 3}, {n: ["flag-no"], e: "🇳🇴", c: 4}, {
            n: ["mage"],
            e: "🧙",
            c: 1,
            v: {
                "1F3FB": {k: "mage-1F3FB", n: "mage", e: "🧙🏻"},
                "1F3FC": {k: "mage-1F3FC", n: "mage", e: "🧙🏼"},
                "1F3FD": {k: "mage-1F3FD", n: "mage", e: "🧙🏽"},
                "1F3FE": {k: "mage-1F3FE", n: "mage", e: "🧙🏾"},
                "1F3FF": {k: "mage-1F3FF", n: "mage", e: "🧙🏿"}
            }
        }, {n: ["star2"], e: "🌟", c: 3}, {n: ["flag-np"], e: "🇳🇵", c: 4}, {
            n: ["congratulations"],
            e: "㊗️",
            c: 7
        }, {n: ["flag-nr"], e: "🇳🇷", c: 4}, {n: ["stars"], e: "🌠", c: 3}, {
            n: ["female_mage"],
            e: "🧙‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "female_mage-1F3FB", n: "female_mage", e: "🧙🏻‍♀️"},
                "1F3FC": {k: "female_mage-1F3FC", n: "female_mage", e: "🧙🏼‍♀️"},
                "1F3FD": {k: "female_mage-1F3FD", n: "female_mage", e: "🧙🏽‍♀️"},
                "1F3FE": {k: "female_mage-1F3FE", n: "female_mage", e: "🧙🏾‍♀️"},
                "1F3FF": {k: "female_mage-1F3FF", n: "female_mage", e: "🧙🏿‍♀️"}
            }
        }, {n: ["secret"], e: "㊙️", c: 7}, {n: ["flag-nu"], e: "🇳🇺", c: 4}, {
            n: ["u55b6"],
            e: "🈺",
            c: 7
        }, {
            n: ["male_mage"],
            e: "🧙‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "male_mage-1F3FB", n: "male_mage", e: "🧙🏻‍♂️"},
                "1F3FC": {k: "male_mage-1F3FC", n: "male_mage", e: "🧙🏼‍♂️"},
                "1F3FD": {k: "male_mage-1F3FD", n: "male_mage", e: "🧙🏽‍♂️"},
                "1F3FE": {k: "male_mage-1F3FE", n: "male_mage", e: "🧙🏾‍♂️"},
                "1F3FF": {k: "male_mage-1F3FF", n: "male_mage", e: "🧙🏿‍♂️"}
            }
        }, {n: ["cloud"], e: "☁️", c: 3}, {n: ["flag-nz"], e: "🇳🇿", c: 4}, {
            n: ["partly_sunny"],
            e: "⛅",
            c: 3
        }, {
            n: ["fairy"],
            e: "🧚",
            c: 1,
            v: {
                "1F3FB": {k: "fairy-1F3FB", n: "fairy", e: "🧚🏻"},
                "1F3FC": {k: "fairy-1F3FC", n: "fairy", e: "🧚🏼"},
                "1F3FD": {k: "fairy-1F3FD", n: "fairy", e: "🧚🏽"},
                "1F3FE": {k: "fairy-1F3FE", n: "fairy", e: "🧚🏾"},
                "1F3FF": {k: "fairy-1F3FF", n: "fairy", e: "🧚🏿"}
            }
        }, {n: ["u6e80"], e: "🈵", c: 7}, {n: ["black_small_square"], e: "▪️", c: 7}, {
            n: ["thunder_cloud_and_rain"],
            e: "⛈️",
            c: 3
        }, {
            n: ["female_fairy"],
            e: "🧚‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "female_fairy-1F3FB", n: "female_fairy", e: "🧚🏻‍♀️"},
                "1F3FC": {k: "female_fairy-1F3FC", n: "female_fairy", e: "🧚🏼‍♀️"},
                "1F3FD": {k: "female_fairy-1F3FD", n: "female_fairy", e: "🧚🏽‍♀️"},
                "1F3FE": {k: "female_fairy-1F3FE", n: "female_fairy", e: "🧚🏾‍♀️"},
                "1F3FF": {k: "female_fairy-1F3FF", n: "female_fairy", e: "🧚🏿‍♀️"}
            }
        }, {n: ["flag-om"], e: "🇴🇲", c: 4}, {n: ["white_small_square"], e: "▫️", c: 7}, {
            n: ["flag-pa"],
            e: "🇵🇦",
            c: 4
        }, {n: ["mostly_sunny", "sun_small_cloud"], e: "🌤️", c: 3}, {
            n: ["male_fairy"],
            e: "🧚‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "male_fairy-1F3FB", n: "male_fairy", e: "🧚🏻‍♂️"},
                "1F3FC": {k: "male_fairy-1F3FC", n: "male_fairy", e: "🧚🏼‍♂️"},
                "1F3FD": {k: "male_fairy-1F3FD", n: "male_fairy", e: "🧚🏽‍♂️"},
                "1F3FE": {k: "male_fairy-1F3FE", n: "male_fairy", e: "🧚🏾‍♂️"},
                "1F3FF": {k: "male_fairy-1F3FF", n: "male_fairy", e: "🧚🏿‍♂️"}
            }
        }, {n: ["barely_sunny", "sun_behind_cloud"], e: "🌥️", c: 3}, {
            n: ["white_medium_square"],
            e: "◻️",
            c: 7
        }, {n: ["flag-pe"], e: "🇵🇪", c: 4}, {
            n: ["vampire"],
            e: "🧛",
            c: 1,
            v: {
                "1F3FB": {k: "vampire-1F3FB", n: "vampire", e: "🧛🏻"},
                "1F3FC": {k: "vampire-1F3FC", n: "vampire", e: "🧛🏼"},
                "1F3FD": {k: "vampire-1F3FD", n: "vampire", e: "🧛🏽"},
                "1F3FE": {k: "vampire-1F3FE", n: "vampire", e: "🧛🏾"},
                "1F3FF": {k: "vampire-1F3FF", n: "vampire", e: "🧛🏿"}
            }
        }, {
            n: ["female_vampire"],
            e: "🧛‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "female_vampire-1F3FB", n: "female_vampire", e: "🧛🏻‍♀️"},
                "1F3FC": {k: "female_vampire-1F3FC", n: "female_vampire", e: "🧛🏼‍♀️"},
                "1F3FD": {k: "female_vampire-1F3FD", n: "female_vampire", e: "🧛🏽‍♀️"},
                "1F3FE": {k: "female_vampire-1F3FE", n: "female_vampire", e: "🧛🏾‍♀️"},
                "1F3FF": {k: "female_vampire-1F3FF", n: "female_vampire", e: "🧛🏿‍♀️"}
            }
        }, {n: ["partly_sunny_rain", "sun_behind_rain_cloud"], e: "🌦️", c: 3}, {
            n: ["flag-pf"],
            e: "🇵🇫",
            c: 4
        }, {n: ["black_medium_square"], e: "◼️", c: 7}, {
            n: ["white_medium_small_square"],
            e: "◽",
            c: 7
        }, {n: ["rain_cloud"], e: "🌧️", c: 3}, {n: ["flag-pg"], e: "🇵🇬", c: 4}, {
            n: ["male_vampire"],
            e: "🧛‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "male_vampire-1F3FB", n: "male_vampire", e: "🧛🏻‍♂️"},
                "1F3FC": {k: "male_vampire-1F3FC", n: "male_vampire", e: "🧛🏼‍♂️"},
                "1F3FD": {k: "male_vampire-1F3FD", n: "male_vampire", e: "🧛🏽‍♂️"},
                "1F3FE": {k: "male_vampire-1F3FE", n: "male_vampire", e: "🧛🏾‍♂️"},
                "1F3FF": {k: "male_vampire-1F3FF", n: "male_vampire", e: "🧛🏿‍♂️"}
            }
        }, {n: ["flag-ph"], e: "🇵🇭", c: 4}, {
            n: ["merperson"],
            e: "🧜",
            c: 1,
            v: {
                "1F3FB": {k: "merperson-1F3FB", n: "merperson", e: "🧜🏻"},
                "1F3FC": {k: "merperson-1F3FC", n: "merperson", e: "🧜🏼"},
                "1F3FD": {k: "merperson-1F3FD", n: "merperson", e: "🧜🏽"},
                "1F3FE": {k: "merperson-1F3FE", n: "merperson", e: "🧜🏾"},
                "1F3FF": {k: "merperson-1F3FF", n: "merperson", e: "🧜🏿"}
            }
        }, {n: ["black_medium_small_square"], e: "◾", c: 7}, {
            n: ["snow_cloud"],
            e: "🌨️",
            c: 3
        }, {n: ["lightning", "lightning_cloud"], e: "🌩️", c: 3}, {
            n: ["black_large_square"],
            e: "⬛",
            c: 7
        }, {
            n: ["mermaid"],
            e: "🧜‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "mermaid-1F3FB", n: "mermaid", e: "🧜🏻‍♀️"},
                "1F3FC": {k: "mermaid-1F3FC", n: "mermaid", e: "🧜🏼‍♀️"},
                "1F3FD": {k: "mermaid-1F3FD", n: "mermaid", e: "🧜🏽‍♀️"},
                "1F3FE": {k: "mermaid-1F3FE", n: "mermaid", e: "🧜🏾‍♀️"},
                "1F3FF": {k: "mermaid-1F3FF", n: "mermaid", e: "🧜🏿‍♀️"}
            }
        }, {n: ["flag-pk"], e: "🇵🇰", c: 4}, {
            n: ["merman"],
            e: "🧜‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "merman-1F3FB", n: "merman", e: "🧜🏻‍♂️"},
                "1F3FC": {k: "merman-1F3FC", n: "merman", e: "🧜🏼‍♂️"},
                "1F3FD": {k: "merman-1F3FD", n: "merman", e: "🧜🏽‍♂️"},
                "1F3FE": {k: "merman-1F3FE", n: "merman", e: "🧜🏾‍♂️"},
                "1F3FF": {k: "merman-1F3FF", n: "merman", e: "🧜🏿‍♂️"}
            }
        }, {n: ["white_large_square"], e: "⬜", c: 7}, {
            n: ["tornado", "tornado_cloud"],
            e: "🌪️",
            c: 3
        }, {n: ["flag-pl"], e: "🇵🇱", c: 4}, {
            n: ["elf"],
            e: "🧝",
            c: 1,
            v: {
                "1F3FB": {k: "elf-1F3FB", n: "elf", e: "🧝🏻"},
                "1F3FC": {k: "elf-1F3FC", n: "elf", e: "🧝🏼"},
                "1F3FD": {k: "elf-1F3FD", n: "elf", e: "🧝🏽"},
                "1F3FE": {k: "elf-1F3FE", n: "elf", e: "🧝🏾"},
                "1F3FF": {k: "elf-1F3FF", n: "elf", e: "🧝🏿"}
            }
        }, {n: ["fog"], e: "🌫️", c: 3}, {n: ["large_orange_diamond"], e: "🔶", c: 7}, {
            n: ["flag-pm"],
            e: "🇵🇲",
            c: 4
        }, {n: ["flag-pn"], e: "🇵🇳", c: 4}, {n: ["wind_blowing_face"], e: "🌬️", c: 3}, {
            n: ["female_elf"],
            e: "🧝‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "female_elf-1F3FB", n: "female_elf", e: "🧝🏻‍♀️"},
                "1F3FC": {k: "female_elf-1F3FC", n: "female_elf", e: "🧝🏼‍♀️"},
                "1F3FD": {k: "female_elf-1F3FD", n: "female_elf", e: "🧝🏽‍♀️"},
                "1F3FE": {k: "female_elf-1F3FE", n: "female_elf", e: "🧝🏾‍♀️"},
                "1F3FF": {k: "female_elf-1F3FF", n: "female_elf", e: "🧝🏿‍♀️"}
            }
        }, {n: ["large_blue_diamond"], e: "🔷", c: 7}, {
            n: ["male_elf"],
            e: "🧝‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "male_elf-1F3FB", n: "male_elf", e: "🧝🏻‍♂️"},
                "1F3FC": {k: "male_elf-1F3FC", n: "male_elf", e: "🧝🏼‍♂️"},
                "1F3FD": {k: "male_elf-1F3FD", n: "male_elf", e: "🧝🏽‍♂️"},
                "1F3FE": {k: "male_elf-1F3FE", n: "male_elf", e: "🧝🏾‍♂️"},
                "1F3FF": {k: "male_elf-1F3FF", n: "male_elf", e: "🧝🏿‍♂️"}
            }
        }, {n: ["small_orange_diamond"], e: "🔸", c: 7}, {n: ["flag-pr"], e: "🇵🇷", c: 4}, {
            n: ["cyclone"],
            e: "🌀",
            c: 3
        }, {n: ["rainbow"], e: "🌈", c: 3}, {n: ["small_blue_diamond"], e: "🔹", c: 7}, {
            n: ["genie"],
            e: "🧞",
            c: 1
        }, {n: ["flag-ps"], e: "🇵🇸", c: 4}, {n: ["small_red_triangle"], e: "🔺", c: 7}, {
            n: ["closed_umbrella"],
            e: "🌂",
            c: 3
        }, {n: ["female_genie"], e: "🧞‍♀️", c: 1}, {n: ["flag-pt"], e: "🇵🇹", c: 4}, {
            n: ["flag-pw"],
            e: "🇵🇼",
            c: 4
        }, {n: ["small_red_triangle_down"], e: "🔻", c: 7}, {n: ["umbrella"], e: "☂️", c: 3}, {
            n: ["male_genie"],
            e: "🧞‍♂️",
            c: 1
        }, {n: ["zombie"], e: "🧟", c: 1}, {n: ["flag-py"], e: "🇵🇾", c: 4}, {
            n: ["diamond_shape_with_a_dot_inside"],
            e: "💠",
            c: 7
        }, {n: ["umbrella_with_rain_drops"], e: "☔", c: 3}, {n: ["radio_button"], e: "🔘", c: 7}, {
            n: ["female_zombie"],
            e: "🧟‍♀️",
            c: 1
        }, {n: ["flag-qa"], e: "🇶🇦", c: 4}, {n: ["umbrella_on_ground"], e: "⛱️", c: 3}, {
            n: ["black_square_button"],
            e: "🔲",
            c: 7
        }, {n: ["zap"], e: "⚡", c: 3}, {n: ["male_zombie"], e: "🧟‍♂️", c: 1}, {
            n: ["flag-re"],
            e: "🇷🇪",
            c: 4
        }, {n: ["flag-ro"], e: "🇷🇴", c: 4}, {n: ["snowflake"], e: "❄️", c: 3}, {
            n: ["white_square_button"],
            e: "🔳",
            c: 7
        }, {
            n: ["person_frowning"],
            e: "🙍",
            c: 1,
            v: {
                "1F3FB": {k: "person_frowning-1F3FB", n: "person_frowning", e: "🙍🏻"},
                "1F3FC": {k: "person_frowning-1F3FC", n: "person_frowning", e: "🙍🏼"},
                "1F3FD": {k: "person_frowning-1F3FD", n: "person_frowning", e: "🙍🏽"},
                "1F3FE": {k: "person_frowning-1F3FE", n: "person_frowning", e: "🙍🏾"},
                "1F3FF": {k: "person_frowning-1F3FF", n: "person_frowning", e: "🙍🏿"}
            }
        }, {n: ["flag-rs"], e: "🇷🇸", c: 4}, {
            n: ["man-frowning"],
            e: "🙍‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-frowning-1F3FB", n: "man-frowning", e: "🙍🏻‍♂️"},
                "1F3FC": {k: "man-frowning-1F3FC", n: "man-frowning", e: "🙍🏼‍♂️"},
                "1F3FD": {k: "man-frowning-1F3FD", n: "man-frowning", e: "🙍🏽‍♂️"},
                "1F3FE": {k: "man-frowning-1F3FE", n: "man-frowning", e: "🙍🏾‍♂️"},
                "1F3FF": {k: "man-frowning-1F3FF", n: "man-frowning", e: "🙍🏿‍♂️"}
            }
        }, {n: ["white_circle"], e: "⚪", c: 7}, {n: ["snowman"], e: "☃️", c: 3}, {
            n: ["snowman_without_snow"],
            e: "⛄",
            c: 3
        }, {n: ["ru", "flag-ru"], e: "🇷🇺", c: 4}, {n: ["black_circle"], e: "⚫", c: 7}, {
            n: ["woman-frowning"],
            e: "🙍‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-frowning-1F3FB", n: "woman-frowning", e: "🙍🏻‍♀️"},
                "1F3FC": {k: "woman-frowning-1F3FC", n: "woman-frowning", e: "🙍🏼‍♀️"},
                "1F3FD": {k: "woman-frowning-1F3FD", n: "woman-frowning", e: "🙍🏽‍♀️"},
                "1F3FE": {k: "woman-frowning-1F3FE", n: "woman-frowning", e: "🙍🏾‍♀️"},
                "1F3FF": {k: "woman-frowning-1F3FF", n: "woman-frowning", e: "🙍🏿‍♀️"}
            }
        }, {n: ["flag-rw"], e: "🇷🇼", c: 4}, {n: ["comet"], e: "☄️", c: 3}, {
            n: ["person_with_pouting_face"],
            e: "🙎",
            c: 1,
            v: {
                "1F3FB": {k: "person_with_pouting_face-1F3FB", n: "person_with_pouting_face", e: "🙎🏻"},
                "1F3FC": {k: "person_with_pouting_face-1F3FC", n: "person_with_pouting_face", e: "🙎🏼"},
                "1F3FD": {k: "person_with_pouting_face-1F3FD", n: "person_with_pouting_face", e: "🙎🏽"},
                "1F3FE": {k: "person_with_pouting_face-1F3FE", n: "person_with_pouting_face", e: "🙎🏾"},
                "1F3FF": {k: "person_with_pouting_face-1F3FF", n: "person_with_pouting_face", e: "🙎🏿"}
            }
        }, {n: ["red_circle"], e: "🔴", c: 7}, {n: ["large_blue_circle"], e: "🔵", c: 7}, {
            n: ["man-pouting"],
            e: "🙎‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-pouting-1F3FB", n: "man-pouting", e: "🙎🏻‍♂️"},
                "1F3FC": {k: "man-pouting-1F3FC", n: "man-pouting", e: "🙎🏼‍♂️"},
                "1F3FD": {k: "man-pouting-1F3FD", n: "man-pouting", e: "🙎🏽‍♂️"},
                "1F3FE": {k: "man-pouting-1F3FE", n: "man-pouting", e: "🙎🏾‍♂️"},
                "1F3FF": {k: "man-pouting-1F3FF", n: "man-pouting", e: "🙎🏿‍♂️"}
            }
        }, {n: ["flag-sa"], e: "🇸🇦", c: 4}, {n: ["fire"], e: "🔥", c: 3}, {
            n: ["woman-pouting"],
            e: "🙎‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-pouting-1F3FB", n: "woman-pouting", e: "🙎🏻‍♀️"},
                "1F3FC": {k: "woman-pouting-1F3FC", n: "woman-pouting", e: "🙎🏼‍♀️"},
                "1F3FD": {k: "woman-pouting-1F3FD", n: "woman-pouting", e: "🙎🏽‍♀️"},
                "1F3FE": {k: "woman-pouting-1F3FE", n: "woman-pouting", e: "🙎🏾‍♀️"},
                "1F3FF": {k: "woman-pouting-1F3FF", n: "woman-pouting", e: "🙎🏿‍♀️"}
            }
        }, {n: ["flag-sb"], e: "🇸🇧", c: 4}, {n: ["droplet"], e: "💧", c: 3}, {
            n: ["no_good"],
            e: "🙅",
            c: 1,
            v: {
                "1F3FB": {k: "no_good-1F3FB", n: "no_good", e: "🙅🏻"},
                "1F3FC": {k: "no_good-1F3FC", n: "no_good", e: "🙅🏼"},
                "1F3FD": {k: "no_good-1F3FD", n: "no_good", e: "🙅🏽"},
                "1F3FE": {k: "no_good-1F3FE", n: "no_good", e: "🙅🏾"},
                "1F3FF": {k: "no_good-1F3FF", n: "no_good", e: "🙅🏿"}
            }
        }, {n: ["flag-sc"], e: "🇸🇨", c: 4}, {n: ["ocean"], e: "🌊", c: 3}, {
            n: ["man-gesturing-no"],
            e: "🙅‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-gesturing-no-1F3FB", n: "man-gesturing-no", e: "🙅🏻‍♂️"},
                "1F3FC": {k: "man-gesturing-no-1F3FC", n: "man-gesturing-no", e: "🙅🏼‍♂️"},
                "1F3FD": {k: "man-gesturing-no-1F3FD", n: "man-gesturing-no", e: "🙅🏽‍♂️"},
                "1F3FE": {k: "man-gesturing-no-1F3FE", n: "man-gesturing-no", e: "🙅🏾‍♂️"},
                "1F3FF": {k: "man-gesturing-no-1F3FF", n: "man-gesturing-no", e: "🙅🏿‍♂️"}
            }
        }, {n: ["flag-sd"], e: "🇸🇩", c: 4}, {
            n: ["woman-gesturing-no"],
            e: "🙅‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-gesturing-no-1F3FB", n: "woman-gesturing-no", e: "🙅🏻‍♀️"},
                "1F3FC": {k: "woman-gesturing-no-1F3FC", n: "woman-gesturing-no", e: "🙅🏼‍♀️"},
                "1F3FD": {k: "woman-gesturing-no-1F3FD", n: "woman-gesturing-no", e: "🙅🏽‍♀️"},
                "1F3FE": {k: "woman-gesturing-no-1F3FE", n: "woman-gesturing-no", e: "🙅🏾‍♀️"},
                "1F3FF": {k: "woman-gesturing-no-1F3FF", n: "woman-gesturing-no", e: "🙅🏿‍♀️"}
            }
        }, {n: ["flag-se"], e: "🇸🇪", c: 4}, {n: ["flag-sg"], e: "🇸🇬", c: 4}, {
            n: ["ok_woman"],
            e: "🙆",
            c: 1,
            v: {
                "1F3FB": {k: "ok_woman-1F3FB", n: "ok_woman", e: "🙆🏻"},
                "1F3FC": {k: "ok_woman-1F3FC", n: "ok_woman", e: "🙆🏼"},
                "1F3FD": {k: "ok_woman-1F3FD", n: "ok_woman", e: "🙆🏽"},
                "1F3FE": {k: "ok_woman-1F3FE", n: "ok_woman", e: "🙆🏾"},
                "1F3FF": {k: "ok_woman-1F3FF", n: "ok_woman", e: "🙆🏿"}
            }
        }, {n: ["flag-sh"], e: "🇸🇭", c: 4}, {
            n: ["man-gesturing-ok"],
            e: "🙆‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-gesturing-ok-1F3FB", n: "man-gesturing-ok", e: "🙆🏻‍♂️"},
                "1F3FC": {k: "man-gesturing-ok-1F3FC", n: "man-gesturing-ok", e: "🙆🏼‍♂️"},
                "1F3FD": {k: "man-gesturing-ok-1F3FD", n: "man-gesturing-ok", e: "🙆🏽‍♂️"},
                "1F3FE": {k: "man-gesturing-ok-1F3FE", n: "man-gesturing-ok", e: "🙆🏾‍♂️"},
                "1F3FF": {k: "man-gesturing-ok-1F3FF", n: "man-gesturing-ok", e: "🙆🏿‍♂️"}
            }
        }, {n: ["flag-si"], e: "🇸🇮", c: 4}, {
            n: ["woman-gesturing-ok"],
            e: "🙆‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-gesturing-ok-1F3FB", n: "woman-gesturing-ok", e: "🙆🏻‍♀️"},
                "1F3FC": {k: "woman-gesturing-ok-1F3FC", n: "woman-gesturing-ok", e: "🙆🏼‍♀️"},
                "1F3FD": {k: "woman-gesturing-ok-1F3FD", n: "woman-gesturing-ok", e: "🙆🏽‍♀️"},
                "1F3FE": {k: "woman-gesturing-ok-1F3FE", n: "woman-gesturing-ok", e: "🙆🏾‍♀️"},
                "1F3FF": {k: "woman-gesturing-ok-1F3FF", n: "woman-gesturing-ok", e: "🙆🏿‍♀️"}
            }
        }, {
            n: ["information_desk_person"],
            e: "💁",
            c: 1,
            v: {
                "1F3FB": {k: "information_desk_person-1F3FB", n: "information_desk_person", e: "💁🏻"},
                "1F3FC": {k: "information_desk_person-1F3FC", n: "information_desk_person", e: "💁🏼"},
                "1F3FD": {k: "information_desk_person-1F3FD", n: "information_desk_person", e: "💁🏽"},
                "1F3FE": {k: "information_desk_person-1F3FE", n: "information_desk_person", e: "💁🏾"},
                "1F3FF": {k: "information_desk_person-1F3FF", n: "information_desk_person", e: "💁🏿"}
            }
        }, {n: ["flag-sj"], e: "🇸🇯", c: 4}, {
            n: ["man-tipping-hand"],
            e: "💁‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-tipping-hand-1F3FB", n: "man-tipping-hand", e: "💁🏻‍♂️"},
                "1F3FC": {k: "man-tipping-hand-1F3FC", n: "man-tipping-hand", e: "💁🏼‍♂️"},
                "1F3FD": {k: "man-tipping-hand-1F3FD", n: "man-tipping-hand", e: "💁🏽‍♂️"},
                "1F3FE": {k: "man-tipping-hand-1F3FE", n: "man-tipping-hand", e: "💁🏾‍♂️"},
                "1F3FF": {k: "man-tipping-hand-1F3FF", n: "man-tipping-hand", e: "💁🏿‍♂️"}
            }
        }, {n: ["flag-sk"], e: "🇸🇰", c: 4}, {n: ["flag-sl"], e: "🇸🇱", c: 4}, {
            n: ["woman-tipping-hand"],
            e: "💁‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-tipping-hand-1F3FB", n: "woman-tipping-hand", e: "💁🏻‍♀️"},
                "1F3FC": {k: "woman-tipping-hand-1F3FC", n: "woman-tipping-hand", e: "💁🏼‍♀️"},
                "1F3FD": {k: "woman-tipping-hand-1F3FD", n: "woman-tipping-hand", e: "💁🏽‍♀️"},
                "1F3FE": {k: "woman-tipping-hand-1F3FE", n: "woman-tipping-hand", e: "💁🏾‍♀️"},
                "1F3FF": {k: "woman-tipping-hand-1F3FF", n: "woman-tipping-hand", e: "💁🏿‍♀️"}
            }
        }, {n: ["flag-sm"], e: "🇸🇲", c: 4}, {
            n: ["raising_hand"],
            e: "🙋",
            c: 1,
            v: {
                "1F3FB": {k: "raising_hand-1F3FB", n: "raising_hand", e: "🙋🏻"},
                "1F3FC": {k: "raising_hand-1F3FC", n: "raising_hand", e: "🙋🏼"},
                "1F3FD": {k: "raising_hand-1F3FD", n: "raising_hand", e: "🙋🏽"},
                "1F3FE": {k: "raising_hand-1F3FE", n: "raising_hand", e: "🙋🏾"},
                "1F3FF": {k: "raising_hand-1F3FF", n: "raising_hand", e: "🙋🏿"}
            }
        }, {n: ["flag-sn"], e: "🇸🇳", c: 4}, {
            n: ["man-raising-hand"],
            e: "🙋‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-raising-hand-1F3FB", n: "man-raising-hand", e: "🙋🏻‍♂️"},
                "1F3FC": {k: "man-raising-hand-1F3FC", n: "man-raising-hand", e: "🙋🏼‍♂️"},
                "1F3FD": {k: "man-raising-hand-1F3FD", n: "man-raising-hand", e: "🙋🏽‍♂️"},
                "1F3FE": {k: "man-raising-hand-1F3FE", n: "man-raising-hand", e: "🙋🏾‍♂️"},
                "1F3FF": {k: "man-raising-hand-1F3FF", n: "man-raising-hand", e: "🙋🏿‍♂️"}
            }
        }, {n: ["flag-so"], e: "🇸🇴", c: 4}, {
            n: ["woman-raising-hand"],
            e: "🙋‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-raising-hand-1F3FB", n: "woman-raising-hand", e: "🙋🏻‍♀️"},
                "1F3FC": {k: "woman-raising-hand-1F3FC", n: "woman-raising-hand", e: "🙋🏼‍♀️"},
                "1F3FD": {k: "woman-raising-hand-1F3FD", n: "woman-raising-hand", e: "🙋🏽‍♀️"},
                "1F3FE": {k: "woman-raising-hand-1F3FE", n: "woman-raising-hand", e: "🙋🏾‍♀️"},
                "1F3FF": {k: "woman-raising-hand-1F3FF", n: "woman-raising-hand", e: "🙋🏿‍♀️"}
            }
        }, {n: ["flag-sr"], e: "🇸🇷", c: 4}, {
            n: ["bow"],
            e: "🙇",
            c: 1,
            v: {
                "1F3FB": {k: "bow-1F3FB", n: "bow", e: "🙇🏻"},
                "1F3FC": {k: "bow-1F3FC", n: "bow", e: "🙇🏼"},
                "1F3FD": {k: "bow-1F3FD", n: "bow", e: "🙇🏽"},
                "1F3FE": {k: "bow-1F3FE", n: "bow", e: "🙇🏾"},
                "1F3FF": {k: "bow-1F3FF", n: "bow", e: "🙇🏿"}
            }
        }, {
            n: ["man-bowing"],
            e: "🙇‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-bowing-1F3FB", n: "man-bowing", e: "🙇🏻‍♂️"},
                "1F3FC": {k: "man-bowing-1F3FC", n: "man-bowing", e: "🙇🏼‍♂️"},
                "1F3FD": {k: "man-bowing-1F3FD", n: "man-bowing", e: "🙇🏽‍♂️"},
                "1F3FE": {k: "man-bowing-1F3FE", n: "man-bowing", e: "🙇🏾‍♂️"},
                "1F3FF": {k: "man-bowing-1F3FF", n: "man-bowing", e: "🙇🏿‍♂️"}
            }
        }, {n: ["flag-ss"], e: "🇸🇸", c: 4}, {
            n: ["woman-bowing"],
            e: "🙇‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-bowing-1F3FB", n: "woman-bowing", e: "🙇🏻‍♀️"},
                "1F3FC": {k: "woman-bowing-1F3FC", n: "woman-bowing", e: "🙇🏼‍♀️"},
                "1F3FD": {k: "woman-bowing-1F3FD", n: "woman-bowing", e: "🙇🏽‍♀️"},
                "1F3FE": {k: "woman-bowing-1F3FE", n: "woman-bowing", e: "🙇🏾‍♀️"},
                "1F3FF": {k: "woman-bowing-1F3FF", n: "woman-bowing", e: "🙇🏿‍♀️"}
            }
        }, {n: ["flag-st"], e: "🇸🇹", c: 4}, {
            n: ["face_palm"],
            e: "🤦",
            c: 1,
            v: {
                "1F3FB": {k: "face_palm-1F3FB", n: "face_palm", e: "🤦🏻"},
                "1F3FC": {k: "face_palm-1F3FC", n: "face_palm", e: "🤦🏼"},
                "1F3FD": {k: "face_palm-1F3FD", n: "face_palm", e: "🤦🏽"},
                "1F3FE": {k: "face_palm-1F3FE", n: "face_palm", e: "🤦🏾"},
                "1F3FF": {k: "face_palm-1F3FF", n: "face_palm", e: "🤦🏿"}
            }
        }, {n: ["flag-sv"], e: "🇸🇻", c: 4}, {
            n: ["man-facepalming"],
            e: "🤦‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-facepalming-1F3FB", n: "man-facepalming", e: "🤦🏻‍♂️"},
                "1F3FC": {k: "man-facepalming-1F3FC", n: "man-facepalming", e: "🤦🏼‍♂️"},
                "1F3FD": {k: "man-facepalming-1F3FD", n: "man-facepalming", e: "🤦🏽‍♂️"},
                "1F3FE": {k: "man-facepalming-1F3FE", n: "man-facepalming", e: "🤦🏾‍♂️"},
                "1F3FF": {k: "man-facepalming-1F3FF", n: "man-facepalming", e: "🤦🏿‍♂️"}
            }
        }, {n: ["flag-sx"], e: "🇸🇽", c: 4}, {n: ["flag-sy"], e: "🇸🇾", c: 4}, {
            n: ["woman-facepalming"],
            e: "🤦‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-facepalming-1F3FB", n: "woman-facepalming", e: "🤦🏻‍♀️"},
                "1F3FC": {k: "woman-facepalming-1F3FC", n: "woman-facepalming", e: "🤦🏼‍♀️"},
                "1F3FD": {k: "woman-facepalming-1F3FD", n: "woman-facepalming", e: "🤦🏽‍♀️"},
                "1F3FE": {k: "woman-facepalming-1F3FE", n: "woman-facepalming", e: "🤦🏾‍♀️"},
                "1F3FF": {k: "woman-facepalming-1F3FF", n: "woman-facepalming", e: "🤦🏿‍♀️"}
            }
        }, {
            n: ["shrug"],
            e: "🤷",
            c: 1,
            v: {
                "1F3FB": {k: "shrug-1F3FB", n: "shrug", e: "🤷🏻"},
                "1F3FC": {k: "shrug-1F3FC", n: "shrug", e: "🤷🏼"},
                "1F3FD": {k: "shrug-1F3FD", n: "shrug", e: "🤷🏽"},
                "1F3FE": {k: "shrug-1F3FE", n: "shrug", e: "🤷🏾"},
                "1F3FF": {k: "shrug-1F3FF", n: "shrug", e: "🤷🏿"}
            }
        }, {n: ["flag-sz"], e: "🇸🇿", c: 4}, {n: ["flag-ta"], e: "🇹🇦", c: 4}, {
            n: ["man-shrugging"],
            e: "🤷‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-shrugging-1F3FB", n: "man-shrugging", e: "🤷🏻‍♂️"},
                "1F3FC": {k: "man-shrugging-1F3FC", n: "man-shrugging", e: "🤷🏼‍♂️"},
                "1F3FD": {k: "man-shrugging-1F3FD", n: "man-shrugging", e: "🤷🏽‍♂️"},
                "1F3FE": {k: "man-shrugging-1F3FE", n: "man-shrugging", e: "🤷🏾‍♂️"},
                "1F3FF": {k: "man-shrugging-1F3FF", n: "man-shrugging", e: "🤷🏿‍♂️"}
            }
        }, {
            n: ["woman-shrugging"],
            e: "🤷‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-shrugging-1F3FB", n: "woman-shrugging", e: "🤷🏻‍♀️"},
                "1F3FC": {k: "woman-shrugging-1F3FC", n: "woman-shrugging", e: "🤷🏼‍♀️"},
                "1F3FD": {k: "woman-shrugging-1F3FD", n: "woman-shrugging", e: "🤷🏽‍♀️"},
                "1F3FE": {k: "woman-shrugging-1F3FE", n: "woman-shrugging", e: "🤷🏾‍♀️"},
                "1F3FF": {k: "woman-shrugging-1F3FF", n: "woman-shrugging", e: "🤷🏿‍♀️"}
            }
        }, {n: ["flag-tc"], e: "🇹🇨", c: 4}, {
            n: ["massage"],
            e: "💆",
            c: 1,
            v: {
                "1F3FB": {k: "massage-1F3FB", n: "massage", e: "💆🏻"},
                "1F3FC": {k: "massage-1F3FC", n: "massage", e: "💆🏼"},
                "1F3FD": {k: "massage-1F3FD", n: "massage", e: "💆🏽"},
                "1F3FE": {k: "massage-1F3FE", n: "massage", e: "💆🏾"},
                "1F3FF": {k: "massage-1F3FF", n: "massage", e: "💆🏿"}
            }
        }, {n: ["flag-td"], e: "🇹🇩", c: 4}, {
            n: ["man-getting-massage"],
            e: "💆‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-getting-massage-1F3FB", n: "man-getting-massage", e: "💆🏻‍♂️"},
                "1F3FC": {k: "man-getting-massage-1F3FC", n: "man-getting-massage", e: "💆🏼‍♂️"},
                "1F3FD": {k: "man-getting-massage-1F3FD", n: "man-getting-massage", e: "💆🏽‍♂️"},
                "1F3FE": {k: "man-getting-massage-1F3FE", n: "man-getting-massage", e: "💆🏾‍♂️"},
                "1F3FF": {k: "man-getting-massage-1F3FF", n: "man-getting-massage", e: "💆🏿‍♂️"}
            }
        }, {n: ["flag-tf"], e: "🇹🇫", c: 4}, {
            n: ["woman-getting-massage"],
            e: "💆‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-getting-massage-1F3FB", n: "woman-getting-massage", e: "💆🏻‍♀️"},
                "1F3FC": {k: "woman-getting-massage-1F3FC", n: "woman-getting-massage", e: "💆🏼‍♀️"},
                "1F3FD": {k: "woman-getting-massage-1F3FD", n: "woman-getting-massage", e: "💆🏽‍♀️"},
                "1F3FE": {k: "woman-getting-massage-1F3FE", n: "woman-getting-massage", e: "💆🏾‍♀️"},
                "1F3FF": {k: "woman-getting-massage-1F3FF", n: "woman-getting-massage", e: "💆🏿‍♀️"}
            }
        }, {n: ["flag-tg"], e: "🇹🇬", c: 4}, {
            n: ["haircut"],
            e: "💇",
            c: 1,
            v: {
                "1F3FB": {k: "haircut-1F3FB", n: "haircut", e: "💇🏻"},
                "1F3FC": {k: "haircut-1F3FC", n: "haircut", e: "💇🏼"},
                "1F3FD": {k: "haircut-1F3FD", n: "haircut", e: "💇🏽"},
                "1F3FE": {k: "haircut-1F3FE", n: "haircut", e: "💇🏾"},
                "1F3FF": {k: "haircut-1F3FF", n: "haircut", e: "💇🏿"}
            }
        }, {n: ["flag-th"], e: "🇹🇭", c: 4}, {
            n: ["man-getting-haircut"],
            e: "💇‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-getting-haircut-1F3FB", n: "man-getting-haircut", e: "💇🏻‍♂️"},
                "1F3FC": {k: "man-getting-haircut-1F3FC", n: "man-getting-haircut", e: "💇🏼‍♂️"},
                "1F3FD": {k: "man-getting-haircut-1F3FD", n: "man-getting-haircut", e: "💇🏽‍♂️"},
                "1F3FE": {k: "man-getting-haircut-1F3FE", n: "man-getting-haircut", e: "💇🏾‍♂️"},
                "1F3FF": {k: "man-getting-haircut-1F3FF", n: "man-getting-haircut", e: "💇🏿‍♂️"}
            }
        }, {n: ["flag-tj"], e: "🇹🇯", c: 4}, {n: ["flag-tk"], e: "🇹🇰", c: 4}, {
            n: ["woman-getting-haircut"],
            e: "💇‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-getting-haircut-1F3FB", n: "woman-getting-haircut", e: "💇🏻‍♀️"},
                "1F3FC": {k: "woman-getting-haircut-1F3FC", n: "woman-getting-haircut", e: "💇🏼‍♀️"},
                "1F3FD": {k: "woman-getting-haircut-1F3FD", n: "woman-getting-haircut", e: "💇🏽‍♀️"},
                "1F3FE": {k: "woman-getting-haircut-1F3FE", n: "woman-getting-haircut", e: "💇🏾‍♀️"},
                "1F3FF": {k: "woman-getting-haircut-1F3FF", n: "woman-getting-haircut", e: "💇🏿‍♀️"}
            }
        }, {
            n: ["walking"],
            e: "🚶",
            c: 1,
            v: {
                "1F3FB": {k: "walking-1F3FB", n: "walking", e: "🚶🏻"},
                "1F3FC": {k: "walking-1F3FC", n: "walking", e: "🚶🏼"},
                "1F3FD": {k: "walking-1F3FD", n: "walking", e: "🚶🏽"},
                "1F3FE": {k: "walking-1F3FE", n: "walking", e: "🚶🏾"},
                "1F3FF": {k: "walking-1F3FF", n: "walking", e: "🚶🏿"}
            }
        }, {n: ["flag-tl"], e: "🇹🇱", c: 4}, {
            n: ["man-walking"],
            e: "🚶‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-walking-1F3FB", n: "man-walking", e: "🚶🏻‍♂️"},
                "1F3FC": {k: "man-walking-1F3FC", n: "man-walking", e: "🚶🏼‍♂️"},
                "1F3FD": {k: "man-walking-1F3FD", n: "man-walking", e: "🚶🏽‍♂️"},
                "1F3FE": {k: "man-walking-1F3FE", n: "man-walking", e: "🚶🏾‍♂️"},
                "1F3FF": {k: "man-walking-1F3FF", n: "man-walking", e: "🚶🏿‍♂️"}
            }
        }, {n: ["flag-tm"], e: "🇹🇲", c: 4}, {
            n: ["woman-walking"],
            e: "🚶‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-walking-1F3FB", n: "woman-walking", e: "🚶🏻‍♀️"},
                "1F3FC": {k: "woman-walking-1F3FC", n: "woman-walking", e: "🚶🏼‍♀️"},
                "1F3FD": {k: "woman-walking-1F3FD", n: "woman-walking", e: "🚶🏽‍♀️"},
                "1F3FE": {k: "woman-walking-1F3FE", n: "woman-walking", e: "🚶🏾‍♀️"},
                "1F3FF": {k: "woman-walking-1F3FF", n: "woman-walking", e: "🚶🏿‍♀️"}
            }
        }, {n: ["flag-tn"], e: "🇹🇳", c: 4}, {
            n: ["runner", "running"],
            e: "🏃",
            c: 1,
            v: {
                "1F3FB": {k: "runner-1F3FB", n: "runner", e: "🏃🏻"},
                "1F3FC": {k: "runner-1F3FC", n: "runner", e: "🏃🏼"},
                "1F3FD": {k: "runner-1F3FD", n: "runner", e: "🏃🏽"},
                "1F3FE": {k: "runner-1F3FE", n: "runner", e: "🏃🏾"},
                "1F3FF": {k: "runner-1F3FF", n: "runner", e: "🏃🏿"}
            }
        }, {n: ["flag-to"], e: "🇹🇴", c: 4}, {
            n: ["man-running"],
            e: "🏃‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-running-1F3FB", n: "man-running", e: "🏃🏻‍♂️"},
                "1F3FC": {k: "man-running-1F3FC", n: "man-running", e: "🏃🏼‍♂️"},
                "1F3FD": {k: "man-running-1F3FD", n: "man-running", e: "🏃🏽‍♂️"},
                "1F3FE": {k: "man-running-1F3FE", n: "man-running", e: "🏃🏾‍♂️"},
                "1F3FF": {k: "man-running-1F3FF", n: "man-running", e: "🏃🏿‍♂️"}
            }
        }, {n: ["flag-tr"], e: "🇹🇷", c: 4}, {n: ["flag-tt"], e: "🇹🇹", c: 4}, {
            n: ["woman-running"],
            e: "🏃‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-running-1F3FB", n: "woman-running", e: "🏃🏻‍♀️"},
                "1F3FC": {k: "woman-running-1F3FC", n: "woman-running", e: "🏃🏼‍♀️"},
                "1F3FD": {k: "woman-running-1F3FD", n: "woman-running", e: "🏃🏽‍♀️"},
                "1F3FE": {k: "woman-running-1F3FE", n: "woman-running", e: "🏃🏾‍♀️"},
                "1F3FF": {k: "woman-running-1F3FF", n: "woman-running", e: "🏃🏿‍♀️"}
            }
        }, {n: ["flag-tv"], e: "🇹🇻", c: 4}, {
            n: ["dancer"],
            e: "💃",
            c: 1,
            v: {
                "1F3FB": {k: "dancer-1F3FB", n: "dancer", e: "💃🏻"},
                "1F3FC": {k: "dancer-1F3FC", n: "dancer", e: "💃🏼"},
                "1F3FD": {k: "dancer-1F3FD", n: "dancer", e: "💃🏽"},
                "1F3FE": {k: "dancer-1F3FE", n: "dancer", e: "💃🏾"},
                "1F3FF": {k: "dancer-1F3FF", n: "dancer", e: "💃🏿"}
            }
        }, {n: ["flag-tw"], e: "🇹🇼", c: 4}, {
            n: ["man_dancing"],
            e: "🕺",
            c: 1,
            v: {
                "1F3FB": {k: "man_dancing-1F3FB", n: "man_dancing", e: "🕺🏻"},
                "1F3FC": {k: "man_dancing-1F3FC", n: "man_dancing", e: "🕺🏼"},
                "1F3FD": {k: "man_dancing-1F3FD", n: "man_dancing", e: "🕺🏽"},
                "1F3FE": {k: "man_dancing-1F3FE", n: "man_dancing", e: "🕺🏾"},
                "1F3FF": {k: "man_dancing-1F3FF", n: "man_dancing", e: "🕺🏿"}
            }
        }, {n: ["dancers"], e: "👯", c: 1}, {n: ["flag-tz"], e: "🇹🇿", c: 4}, {
            n: ["flag-ua"],
            e: "🇺🇦",
            c: 4
        }, {n: ["man-with-bunny-ears-partying"], e: "👯‍♂️", c: 1}, {
            n: ["woman-with-bunny-ears-partying"],
            e: "👯‍♀️",
            c: 1
        }, {n: ["flag-ug"], e: "🇺🇬", c: 4}, {n: ["flag-um"], e: "🇺🇲", c: 4}, {
            n: ["person_in_steamy_room"],
            e: "🧖",
            c: 1,
            v: {
                "1F3FB": {k: "person_in_steamy_room-1F3FB", n: "person_in_steamy_room", e: "🧖🏻"},
                "1F3FC": {k: "person_in_steamy_room-1F3FC", n: "person_in_steamy_room", e: "🧖🏼"},
                "1F3FD": {k: "person_in_steamy_room-1F3FD", n: "person_in_steamy_room", e: "🧖🏽"},
                "1F3FE": {k: "person_in_steamy_room-1F3FE", n: "person_in_steamy_room", e: "🧖🏾"},
                "1F3FF": {k: "person_in_steamy_room-1F3FF", n: "person_in_steamy_room", e: "🧖🏿"}
            }
        }, {
            n: ["woman_in_steamy_room"],
            e: "🧖‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman_in_steamy_room-1F3FB", n: "woman_in_steamy_room", e: "🧖🏻‍♀️"},
                "1F3FC": {k: "woman_in_steamy_room-1F3FC", n: "woman_in_steamy_room", e: "🧖🏼‍♀️"},
                "1F3FD": {k: "woman_in_steamy_room-1F3FD", n: "woman_in_steamy_room", e: "🧖🏽‍♀️"},
                "1F3FE": {k: "woman_in_steamy_room-1F3FE", n: "woman_in_steamy_room", e: "🧖🏾‍♀️"},
                "1F3FF": {k: "woman_in_steamy_room-1F3FF", n: "woman_in_steamy_room", e: "🧖🏿‍♀️"}
            }
        }, {n: ["flag-un"], e: "🇺🇳", c: 4}, {n: ["us", "flag-us"], e: "🇺🇸", c: 4}, {
            n: ["man_in_steamy_room"],
            e: "🧖‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man_in_steamy_room-1F3FB", n: "man_in_steamy_room", e: "🧖🏻‍♂️"},
                "1F3FC": {k: "man_in_steamy_room-1F3FC", n: "man_in_steamy_room", e: "🧖🏼‍♂️"},
                "1F3FD": {k: "man_in_steamy_room-1F3FD", n: "man_in_steamy_room", e: "🧖🏽‍♂️"},
                "1F3FE": {k: "man_in_steamy_room-1F3FE", n: "man_in_steamy_room", e: "🧖🏾‍♂️"},
                "1F3FF": {k: "man_in_steamy_room-1F3FF", n: "man_in_steamy_room", e: "🧖🏿‍♂️"}
            }
        }, {
            n: ["person_climbing"],
            e: "🧗",
            c: 1,
            v: {
                "1F3FB": {k: "person_climbing-1F3FB", n: "person_climbing", e: "🧗🏻"},
                "1F3FC": {k: "person_climbing-1F3FC", n: "person_climbing", e: "🧗🏼"},
                "1F3FD": {k: "person_climbing-1F3FD", n: "person_climbing", e: "🧗🏽"},
                "1F3FE": {k: "person_climbing-1F3FE", n: "person_climbing", e: "🧗🏾"},
                "1F3FF": {k: "person_climbing-1F3FF", n: "person_climbing", e: "🧗🏿"}
            }
        }, {n: ["flag-uy"], e: "🇺🇾", c: 4}, {
            n: ["woman_climbing"],
            e: "🧗‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman_climbing-1F3FB", n: "woman_climbing", e: "🧗🏻‍♀️"},
                "1F3FC": {k: "woman_climbing-1F3FC", n: "woman_climbing", e: "🧗🏼‍♀️"},
                "1F3FD": {k: "woman_climbing-1F3FD", n: "woman_climbing", e: "🧗🏽‍♀️"},
                "1F3FE": {k: "woman_climbing-1F3FE", n: "woman_climbing", e: "🧗🏾‍♀️"},
                "1F3FF": {k: "woman_climbing-1F3FF", n: "woman_climbing", e: "🧗🏿‍♀️"}
            }
        }, {n: ["flag-uz"], e: "🇺🇿", c: 4}, {
            n: ["man_climbing"],
            e: "🧗‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man_climbing-1F3FB", n: "man_climbing", e: "🧗🏻‍♂️"},
                "1F3FC": {k: "man_climbing-1F3FC", n: "man_climbing", e: "🧗🏼‍♂️"},
                "1F3FD": {k: "man_climbing-1F3FD", n: "man_climbing", e: "🧗🏽‍♂️"},
                "1F3FE": {k: "man_climbing-1F3FE", n: "man_climbing", e: "🧗🏾‍♂️"},
                "1F3FF": {k: "man_climbing-1F3FF", n: "man_climbing", e: "🧗🏿‍♂️"}
            }
        }, {n: ["flag-va"], e: "🇻🇦", c: 4}, {
            n: ["person_in_lotus_position"],
            e: "🧘",
            c: 1,
            v: {
                "1F3FB": {k: "person_in_lotus_position-1F3FB", n: "person_in_lotus_position", e: "🧘🏻"},
                "1F3FC": {k: "person_in_lotus_position-1F3FC", n: "person_in_lotus_position", e: "🧘🏼"},
                "1F3FD": {k: "person_in_lotus_position-1F3FD", n: "person_in_lotus_position", e: "🧘🏽"},
                "1F3FE": {k: "person_in_lotus_position-1F3FE", n: "person_in_lotus_position", e: "🧘🏾"},
                "1F3FF": {k: "person_in_lotus_position-1F3FF", n: "person_in_lotus_position", e: "🧘🏿"}
            }
        }, {n: ["flag-vc"], e: "🇻🇨", c: 4}, {n: ["flag-ve"], e: "🇻🇪", c: 4}, {
            n: ["woman_in_lotus_position"],
            e: "🧘‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman_in_lotus_position-1F3FB", n: "woman_in_lotus_position", e: "🧘🏻‍♀️"},
                "1F3FC": {k: "woman_in_lotus_position-1F3FC", n: "woman_in_lotus_position", e: "🧘🏼‍♀️"},
                "1F3FD": {k: "woman_in_lotus_position-1F3FD", n: "woman_in_lotus_position", e: "🧘🏽‍♀️"},
                "1F3FE": {k: "woman_in_lotus_position-1F3FE", n: "woman_in_lotus_position", e: "🧘🏾‍♀️"},
                "1F3FF": {k: "woman_in_lotus_position-1F3FF", n: "woman_in_lotus_position", e: "🧘🏿‍♀️"}
            }
        }, {
            n: ["man_in_lotus_position"],
            e: "🧘‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man_in_lotus_position-1F3FB", n: "man_in_lotus_position", e: "🧘🏻‍♂️"},
                "1F3FC": {k: "man_in_lotus_position-1F3FC", n: "man_in_lotus_position", e: "🧘🏼‍♂️"},
                "1F3FD": {k: "man_in_lotus_position-1F3FD", n: "man_in_lotus_position", e: "🧘🏽‍♂️"},
                "1F3FE": {k: "man_in_lotus_position-1F3FE", n: "man_in_lotus_position", e: "🧘🏾‍♂️"},
                "1F3FF": {k: "man_in_lotus_position-1F3FF", n: "man_in_lotus_position", e: "🧘🏿‍♂️"}
            }
        }, {n: ["flag-vg"], e: "🇻🇬", c: 4}, {n: ["flag-vi"], e: "🇻🇮", c: 4}, {
            n: ["bath"],
            e: "🛀",
            c: 1,
            v: {
                "1F3FB": {k: "bath-1F3FB", n: "bath", e: "🛀🏻"},
                "1F3FC": {k: "bath-1F3FC", n: "bath", e: "🛀🏼"},
                "1F3FD": {k: "bath-1F3FD", n: "bath", e: "🛀🏽"},
                "1F3FE": {k: "bath-1F3FE", n: "bath", e: "🛀🏾"},
                "1F3FF": {k: "bath-1F3FF", n: "bath", e: "🛀🏿"}
            }
        }, {
            n: ["sleeping_accommodation"],
            e: "🛌",
            c: 1,
            v: {
                "1F3FB": {k: "sleeping_accommodation-1F3FB", n: "sleeping_accommodation", e: "🛌🏻"},
                "1F3FC": {k: "sleeping_accommodation-1F3FC", n: "sleeping_accommodation", e: "🛌🏼"},
                "1F3FD": {k: "sleeping_accommodation-1F3FD", n: "sleeping_accommodation", e: "🛌🏽"},
                "1F3FE": {k: "sleeping_accommodation-1F3FE", n: "sleeping_accommodation", e: "🛌🏾"},
                "1F3FF": {k: "sleeping_accommodation-1F3FF", n: "sleeping_accommodation", e: "🛌🏿"}
            }
        }, {n: ["flag-vn"], e: "🇻🇳", c: 4}, {
            n: ["man_in_business_suit_levitating"],
            e: "🕴️",
            c: 1,
            v: {
                "1F3FB": {k: "man_in_business_suit_levitating-1F3FB", n: "man_in_business_suit_levitating", e: "🕴🏻"},
                "1F3FC": {k: "man_in_business_suit_levitating-1F3FC", n: "man_in_business_suit_levitating", e: "🕴🏼"},
                "1F3FD": {k: "man_in_business_suit_levitating-1F3FD", n: "man_in_business_suit_levitating", e: "🕴🏽"},
                "1F3FE": {k: "man_in_business_suit_levitating-1F3FE", n: "man_in_business_suit_levitating", e: "🕴🏾"},
                "1F3FF": {k: "man_in_business_suit_levitating-1F3FF", n: "man_in_business_suit_levitating", e: "🕴🏿"}
            }
        }, {n: ["flag-vu"], e: "🇻🇺", c: 4}, {n: ["flag-wf"], e: "🇼🇫", c: 4}, {
            n: ["speaking_head_in_silhouette"],
            e: "🗣️",
            c: 1
        }, {n: ["bust_in_silhouette"], e: "👤", c: 1}, {n: ["flag-ws"], e: "🇼🇸", c: 4}, {
            n: ["busts_in_silhouette"],
            e: "👥",
            c: 1
        }, {n: ["flag-xk"], e: "🇽🇰", c: 4}, {n: ["fencer"], e: "🤺", c: 1}, {
            n: ["flag-ye"],
            e: "🇾🇪",
            c: 4
        }, {n: ["flag-yt"], e: "🇾🇹", c: 4}, {
            n: ["horse_racing"],
            e: "🏇",
            c: 1,
            v: {
                "1F3FB": {k: "horse_racing-1F3FB", n: "horse_racing", e: "🏇🏻"},
                "1F3FC": {k: "horse_racing-1F3FC", n: "horse_racing", e: "🏇🏼"},
                "1F3FD": {k: "horse_racing-1F3FD", n: "horse_racing", e: "🏇🏽"},
                "1F3FE": {k: "horse_racing-1F3FE", n: "horse_racing", e: "🏇🏾"},
                "1F3FF": {k: "horse_racing-1F3FF", n: "horse_racing", e: "🏇🏿"}
            }
        }, {n: ["flag-za"], e: "🇿🇦", c: 4}, {n: ["skier"], e: "⛷️", c: 1}, {
            n: ["flag-zm"],
            e: "🇿🇲",
            c: 4
        }, {
            n: ["snowboarder"],
            e: "🏂",
            c: 1,
            v: {
                "1F3FB": {k: "snowboarder-1F3FB", n: "snowboarder", e: "🏂🏻"},
                "1F3FC": {k: "snowboarder-1F3FC", n: "snowboarder", e: "🏂🏼"},
                "1F3FD": {k: "snowboarder-1F3FD", n: "snowboarder", e: "🏂🏽"},
                "1F3FE": {k: "snowboarder-1F3FE", n: "snowboarder", e: "🏂🏾"},
                "1F3FF": {k: "snowboarder-1F3FF", n: "snowboarder", e: "🏂🏿"}
            }
        }, {
            n: ["golfer"],
            e: "🏌️",
            c: 1,
            v: {
                "1F3FB": {k: "golfer-1F3FB", n: "golfer", e: "🏌🏻"},
                "1F3FC": {k: "golfer-1F3FC", n: "golfer", e: "🏌🏼"},
                "1F3FD": {k: "golfer-1F3FD", n: "golfer", e: "🏌🏽"},
                "1F3FE": {k: "golfer-1F3FE", n: "golfer", e: "🏌🏾"},
                "1F3FF": {k: "golfer-1F3FF", n: "golfer", e: "🏌🏿"}
            }
        }, {n: ["flag-zw"], e: "🇿🇼", c: 4}, {
            n: ["man-golfing"],
            e: "🏌️‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-golfing-1F3FB", n: "man-golfing", e: "🏌🏻‍♂️"},
                "1F3FC": {k: "man-golfing-1F3FC", n: "man-golfing", e: "🏌🏼‍♂️"},
                "1F3FD": {k: "man-golfing-1F3FD", n: "man-golfing", e: "🏌🏽‍♂️"},
                "1F3FE": {k: "man-golfing-1F3FE", n: "man-golfing", e: "🏌🏾‍♂️"},
                "1F3FF": {k: "man-golfing-1F3FF", n: "man-golfing", e: "🏌🏿‍♂️"}
            }
        }, {n: ["flag-england"], e: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", c: 4}, {
            n: ["woman-golfing"],
            e: "🏌️‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-golfing-1F3FB", n: "woman-golfing", e: "🏌🏻‍♀️"},
                "1F3FC": {k: "woman-golfing-1F3FC", n: "woman-golfing", e: "🏌🏼‍♀️"},
                "1F3FD": {k: "woman-golfing-1F3FD", n: "woman-golfing", e: "🏌🏽‍♀️"},
                "1F3FE": {k: "woman-golfing-1F3FE", n: "woman-golfing", e: "🏌🏾‍♀️"},
                "1F3FF": {k: "woman-golfing-1F3FF", n: "woman-golfing", e: "🏌🏿‍♀️"}
            }
        }, {n: ["flag-scotland"], e: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", c: 4}, {
            n: ["flag-wales"],
            e: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
            c: 4
        }, {
            n: ["surfer"],
            e: "🏄",
            c: 1,
            v: {
                "1F3FB": {k: "surfer-1F3FB", n: "surfer", e: "🏄🏻"},
                "1F3FC": {k: "surfer-1F3FC", n: "surfer", e: "🏄🏼"},
                "1F3FD": {k: "surfer-1F3FD", n: "surfer", e: "🏄🏽"},
                "1F3FE": {k: "surfer-1F3FE", n: "surfer", e: "🏄🏾"},
                "1F3FF": {k: "surfer-1F3FF", n: "surfer", e: "🏄🏿"}
            }
        }, {
            n: ["man-surfing"],
            e: "🏄‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-surfing-1F3FB", n: "man-surfing", e: "🏄🏻‍♂️"},
                "1F3FC": {k: "man-surfing-1F3FC", n: "man-surfing", e: "🏄🏼‍♂️"},
                "1F3FD": {k: "man-surfing-1F3FD", n: "man-surfing", e: "🏄🏽‍♂️"},
                "1F3FE": {k: "man-surfing-1F3FE", n: "man-surfing", e: "🏄🏾‍♂️"},
                "1F3FF": {k: "man-surfing-1F3FF", n: "man-surfing", e: "🏄🏿‍♂️"}
            }
        }, {
            n: ["woman-surfing"],
            e: "🏄‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-surfing-1F3FB", n: "woman-surfing", e: "🏄🏻‍♀️"},
                "1F3FC": {k: "woman-surfing-1F3FC", n: "woman-surfing", e: "🏄🏼‍♀️"},
                "1F3FD": {k: "woman-surfing-1F3FD", n: "woman-surfing", e: "🏄🏽‍♀️"},
                "1F3FE": {k: "woman-surfing-1F3FE", n: "woman-surfing", e: "🏄🏾‍♀️"},
                "1F3FF": {k: "woman-surfing-1F3FF", n: "woman-surfing", e: "🏄🏿‍♀️"}
            }
        }, {
            n: ["rowboat"],
            e: "🚣",
            c: 1,
            v: {
                "1F3FB": {k: "rowboat-1F3FB", n: "rowboat", e: "🚣🏻"},
                "1F3FC": {k: "rowboat-1F3FC", n: "rowboat", e: "🚣🏼"},
                "1F3FD": {k: "rowboat-1F3FD", n: "rowboat", e: "🚣🏽"},
                "1F3FE": {k: "rowboat-1F3FE", n: "rowboat", e: "🚣🏾"},
                "1F3FF": {k: "rowboat-1F3FF", n: "rowboat", e: "🚣🏿"}
            }
        }, {
            n: ["man-rowing-boat"],
            e: "🚣‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-rowing-boat-1F3FB", n: "man-rowing-boat", e: "🚣🏻‍♂️"},
                "1F3FC": {k: "man-rowing-boat-1F3FC", n: "man-rowing-boat", e: "🚣🏼‍♂️"},
                "1F3FD": {k: "man-rowing-boat-1F3FD", n: "man-rowing-boat", e: "🚣🏽‍♂️"},
                "1F3FE": {k: "man-rowing-boat-1F3FE", n: "man-rowing-boat", e: "🚣🏾‍♂️"},
                "1F3FF": {k: "man-rowing-boat-1F3FF", n: "man-rowing-boat", e: "🚣🏿‍♂️"}
            }
        }, {
            n: ["woman-rowing-boat"],
            e: "🚣‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-rowing-boat-1F3FB", n: "woman-rowing-boat", e: "🚣🏻‍♀️"},
                "1F3FC": {k: "woman-rowing-boat-1F3FC", n: "woman-rowing-boat", e: "🚣🏼‍♀️"},
                "1F3FD": {k: "woman-rowing-boat-1F3FD", n: "woman-rowing-boat", e: "🚣🏽‍♀️"},
                "1F3FE": {k: "woman-rowing-boat-1F3FE", n: "woman-rowing-boat", e: "🚣🏾‍♀️"},
                "1F3FF": {k: "woman-rowing-boat-1F3FF", n: "woman-rowing-boat", e: "🚣🏿‍♀️"}
            }
        }, {
            n: ["swimmer"],
            e: "🏊",
            c: 1,
            v: {
                "1F3FB": {k: "swimmer-1F3FB", n: "swimmer", e: "🏊🏻"},
                "1F3FC": {k: "swimmer-1F3FC", n: "swimmer", e: "🏊🏼"},
                "1F3FD": {k: "swimmer-1F3FD", n: "swimmer", e: "🏊🏽"},
                "1F3FE": {k: "swimmer-1F3FE", n: "swimmer", e: "🏊🏾"},
                "1F3FF": {k: "swimmer-1F3FF", n: "swimmer", e: "🏊🏿"}
            }
        }, {
            n: ["man-swimming"],
            e: "🏊‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-swimming-1F3FB", n: "man-swimming", e: "🏊🏻‍♂️"},
                "1F3FC": {k: "man-swimming-1F3FC", n: "man-swimming", e: "🏊🏼‍♂️"},
                "1F3FD": {k: "man-swimming-1F3FD", n: "man-swimming", e: "🏊🏽‍♂️"},
                "1F3FE": {k: "man-swimming-1F3FE", n: "man-swimming", e: "🏊🏾‍♂️"},
                "1F3FF": {k: "man-swimming-1F3FF", n: "man-swimming", e: "🏊🏿‍♂️"}
            }
        }, {
            n: ["woman-swimming"],
            e: "🏊‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-swimming-1F3FB", n: "woman-swimming", e: "🏊🏻‍♀️"},
                "1F3FC": {k: "woman-swimming-1F3FC", n: "woman-swimming", e: "🏊🏼‍♀️"},
                "1F3FD": {k: "woman-swimming-1F3FD", n: "woman-swimming", e: "🏊🏽‍♀️"},
                "1F3FE": {k: "woman-swimming-1F3FE", n: "woman-swimming", e: "🏊🏾‍♀️"},
                "1F3FF": {k: "woman-swimming-1F3FF", n: "woman-swimming", e: "🏊🏿‍♀️"}
            }
        }, {
            n: ["person_with_ball"],
            e: "⛹️",
            c: 1,
            v: {
                "1F3FB": {k: "person_with_ball-1F3FB", n: "person_with_ball", e: "⛹🏻"},
                "1F3FC": {k: "person_with_ball-1F3FC", n: "person_with_ball", e: "⛹🏼"},
                "1F3FD": {k: "person_with_ball-1F3FD", n: "person_with_ball", e: "⛹🏽"},
                "1F3FE": {k: "person_with_ball-1F3FE", n: "person_with_ball", e: "⛹🏾"},
                "1F3FF": {k: "person_with_ball-1F3FF", n: "person_with_ball", e: "⛹🏿"}
            }
        }, {
            n: ["man-bouncing-ball"],
            e: "⛹️‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-bouncing-ball-1F3FB", n: "man-bouncing-ball", e: "⛹🏻‍♂️"},
                "1F3FC": {k: "man-bouncing-ball-1F3FC", n: "man-bouncing-ball", e: "⛹🏼‍♂️"},
                "1F3FD": {k: "man-bouncing-ball-1F3FD", n: "man-bouncing-ball", e: "⛹🏽‍♂️"},
                "1F3FE": {k: "man-bouncing-ball-1F3FE", n: "man-bouncing-ball", e: "⛹🏾‍♂️"},
                "1F3FF": {k: "man-bouncing-ball-1F3FF", n: "man-bouncing-ball", e: "⛹🏿‍♂️"}
            }
        }, {
            n: ["woman-bouncing-ball"],
            e: "⛹️‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-bouncing-ball-1F3FB", n: "woman-bouncing-ball", e: "⛹🏻‍♀️"},
                "1F3FC": {k: "woman-bouncing-ball-1F3FC", n: "woman-bouncing-ball", e: "⛹🏼‍♀️"},
                "1F3FD": {k: "woman-bouncing-ball-1F3FD", n: "woman-bouncing-ball", e: "⛹🏽‍♀️"},
                "1F3FE": {k: "woman-bouncing-ball-1F3FE", n: "woman-bouncing-ball", e: "⛹🏾‍♀️"},
                "1F3FF": {k: "woman-bouncing-ball-1F3FF", n: "woman-bouncing-ball", e: "⛹🏿‍♀️"}
            }
        }, {
            n: ["weight_lifter"],
            e: "🏋️",
            c: 1,
            v: {
                "1F3FB": {k: "weight_lifter-1F3FB", n: "weight_lifter", e: "🏋🏻"},
                "1F3FC": {k: "weight_lifter-1F3FC", n: "weight_lifter", e: "🏋🏼"},
                "1F3FD": {k: "weight_lifter-1F3FD", n: "weight_lifter", e: "🏋🏽"},
                "1F3FE": {k: "weight_lifter-1F3FE", n: "weight_lifter", e: "🏋🏾"},
                "1F3FF": {k: "weight_lifter-1F3FF", n: "weight_lifter", e: "🏋🏿"}
            }
        }, {
            n: ["man-lifting-weights"],
            e: "🏋️‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-lifting-weights-1F3FB", n: "man-lifting-weights", e: "🏋🏻‍♂️"},
                "1F3FC": {k: "man-lifting-weights-1F3FC", n: "man-lifting-weights", e: "🏋🏼‍♂️"},
                "1F3FD": {k: "man-lifting-weights-1F3FD", n: "man-lifting-weights", e: "🏋🏽‍♂️"},
                "1F3FE": {k: "man-lifting-weights-1F3FE", n: "man-lifting-weights", e: "🏋🏾‍♂️"},
                "1F3FF": {k: "man-lifting-weights-1F3FF", n: "man-lifting-weights", e: "🏋🏿‍♂️"}
            }
        }, {
            n: ["woman-lifting-weights"],
            e: "🏋️‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-lifting-weights-1F3FB", n: "woman-lifting-weights", e: "🏋🏻‍♀️"},
                "1F3FC": {k: "woman-lifting-weights-1F3FC", n: "woman-lifting-weights", e: "🏋🏼‍♀️"},
                "1F3FD": {k: "woman-lifting-weights-1F3FD", n: "woman-lifting-weights", e: "🏋🏽‍♀️"},
                "1F3FE": {k: "woman-lifting-weights-1F3FE", n: "woman-lifting-weights", e: "🏋🏾‍♀️"},
                "1F3FF": {k: "woman-lifting-weights-1F3FF", n: "woman-lifting-weights", e: "🏋🏿‍♀️"}
            }
        }, {
            n: ["bicyclist"],
            e: "🚴",
            c: 1,
            v: {
                "1F3FB": {k: "bicyclist-1F3FB", n: "bicyclist", e: "🚴🏻"},
                "1F3FC": {k: "bicyclist-1F3FC", n: "bicyclist", e: "🚴🏼"},
                "1F3FD": {k: "bicyclist-1F3FD", n: "bicyclist", e: "🚴🏽"},
                "1F3FE": {k: "bicyclist-1F3FE", n: "bicyclist", e: "🚴🏾"},
                "1F3FF": {k: "bicyclist-1F3FF", n: "bicyclist", e: "🚴🏿"}
            }
        }, {
            n: ["man-biking"],
            e: "🚴‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-biking-1F3FB", n: "man-biking", e: "🚴🏻‍♂️"},
                "1F3FC": {k: "man-biking-1F3FC", n: "man-biking", e: "🚴🏼‍♂️"},
                "1F3FD": {k: "man-biking-1F3FD", n: "man-biking", e: "🚴🏽‍♂️"},
                "1F3FE": {k: "man-biking-1F3FE", n: "man-biking", e: "🚴🏾‍♂️"},
                "1F3FF": {k: "man-biking-1F3FF", n: "man-biking", e: "🚴🏿‍♂️"}
            }
        }, {
            n: ["woman-biking"],
            e: "🚴‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-biking-1F3FB", n: "woman-biking", e: "🚴🏻‍♀️"},
                "1F3FC": {k: "woman-biking-1F3FC", n: "woman-biking", e: "🚴🏼‍♀️"},
                "1F3FD": {k: "woman-biking-1F3FD", n: "woman-biking", e: "🚴🏽‍♀️"},
                "1F3FE": {k: "woman-biking-1F3FE", n: "woman-biking", e: "🚴🏾‍♀️"},
                "1F3FF": {k: "woman-biking-1F3FF", n: "woman-biking", e: "🚴🏿‍♀️"}
            }
        }, {
            n: ["mountain_bicyclist"],
            e: "🚵",
            c: 1,
            v: {
                "1F3FB": {k: "mountain_bicyclist-1F3FB", n: "mountain_bicyclist", e: "🚵🏻"},
                "1F3FC": {k: "mountain_bicyclist-1F3FC", n: "mountain_bicyclist", e: "🚵🏼"},
                "1F3FD": {k: "mountain_bicyclist-1F3FD", n: "mountain_bicyclist", e: "🚵🏽"},
                "1F3FE": {k: "mountain_bicyclist-1F3FE", n: "mountain_bicyclist", e: "🚵🏾"},
                "1F3FF": {k: "mountain_bicyclist-1F3FF", n: "mountain_bicyclist", e: "🚵🏿"}
            }
        }, {
            n: ["man-mountain-biking"],
            e: "🚵‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-mountain-biking-1F3FB", n: "man-mountain-biking", e: "🚵🏻‍♂️"},
                "1F3FC": {k: "man-mountain-biking-1F3FC", n: "man-mountain-biking", e: "🚵🏼‍♂️"},
                "1F3FD": {k: "man-mountain-biking-1F3FD", n: "man-mountain-biking", e: "🚵🏽‍♂️"},
                "1F3FE": {k: "man-mountain-biking-1F3FE", n: "man-mountain-biking", e: "🚵🏾‍♂️"},
                "1F3FF": {k: "man-mountain-biking-1F3FF", n: "man-mountain-biking", e: "🚵🏿‍♂️"}
            }
        }, {
            n: ["woman-mountain-biking"],
            e: "🚵‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-mountain-biking-1F3FB", n: "woman-mountain-biking", e: "🚵🏻‍♀️"},
                "1F3FC": {k: "woman-mountain-biking-1F3FC", n: "woman-mountain-biking", e: "🚵🏼‍♀️"},
                "1F3FD": {k: "woman-mountain-biking-1F3FD", n: "woman-mountain-biking", e: "🚵🏽‍♀️"},
                "1F3FE": {k: "woman-mountain-biking-1F3FE", n: "woman-mountain-biking", e: "🚵🏾‍♀️"},
                "1F3FF": {k: "woman-mountain-biking-1F3FF", n: "woman-mountain-biking", e: "🚵🏿‍♀️"}
            }
        }, {n: ["racing_car"], e: "🏎️", c: 1}, {
            n: ["racing_motorcycle"],
            e: "🏍️",
            c: 1
        }, {
            n: ["person_doing_cartwheel"],
            e: "🤸",
            c: 1,
            v: {
                "1F3FB": {k: "person_doing_cartwheel-1F3FB", n: "person_doing_cartwheel", e: "🤸🏻"},
                "1F3FC": {k: "person_doing_cartwheel-1F3FC", n: "person_doing_cartwheel", e: "🤸🏼"},
                "1F3FD": {k: "person_doing_cartwheel-1F3FD", n: "person_doing_cartwheel", e: "🤸🏽"},
                "1F3FE": {k: "person_doing_cartwheel-1F3FE", n: "person_doing_cartwheel", e: "🤸🏾"},
                "1F3FF": {k: "person_doing_cartwheel-1F3FF", n: "person_doing_cartwheel", e: "🤸🏿"}
            }
        }, {
            n: ["man-cartwheeling"],
            e: "🤸‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-cartwheeling-1F3FB", n: "man-cartwheeling", e: "🤸🏻‍♂️"},
                "1F3FC": {k: "man-cartwheeling-1F3FC", n: "man-cartwheeling", e: "🤸🏼‍♂️"},
                "1F3FD": {k: "man-cartwheeling-1F3FD", n: "man-cartwheeling", e: "🤸🏽‍♂️"},
                "1F3FE": {k: "man-cartwheeling-1F3FE", n: "man-cartwheeling", e: "🤸🏾‍♂️"},
                "1F3FF": {k: "man-cartwheeling-1F3FF", n: "man-cartwheeling", e: "🤸🏿‍♂️"}
            }
        }, {
            n: ["woman-cartwheeling"],
            e: "🤸‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-cartwheeling-1F3FB", n: "woman-cartwheeling", e: "🤸🏻‍♀️"},
                "1F3FC": {k: "woman-cartwheeling-1F3FC", n: "woman-cartwheeling", e: "🤸🏼‍♀️"},
                "1F3FD": {k: "woman-cartwheeling-1F3FD", n: "woman-cartwheeling", e: "🤸🏽‍♀️"},
                "1F3FE": {k: "woman-cartwheeling-1F3FE", n: "woman-cartwheeling", e: "🤸🏾‍♀️"},
                "1F3FF": {k: "woman-cartwheeling-1F3FF", n: "woman-cartwheeling", e: "🤸🏿‍♀️"}
            }
        }, {n: ["wrestlers"], e: "🤼", c: 1}, {n: ["man-wrestling"], e: "🤼‍♂️", c: 1}, {
            n: ["woman-wrestling"],
            e: "🤼‍♀️",
            c: 1
        }, {
            n: ["water_polo"],
            e: "🤽",
            c: 1,
            v: {
                "1F3FB": {k: "water_polo-1F3FB", n: "water_polo", e: "🤽🏻"},
                "1F3FC": {k: "water_polo-1F3FC", n: "water_polo", e: "🤽🏼"},
                "1F3FD": {k: "water_polo-1F3FD", n: "water_polo", e: "🤽🏽"},
                "1F3FE": {k: "water_polo-1F3FE", n: "water_polo", e: "🤽🏾"},
                "1F3FF": {k: "water_polo-1F3FF", n: "water_polo", e: "🤽🏿"}
            }
        }, {
            n: ["man-playing-water-polo"],
            e: "🤽‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-playing-water-polo-1F3FB", n: "man-playing-water-polo", e: "🤽🏻‍♂️"},
                "1F3FC": {k: "man-playing-water-polo-1F3FC", n: "man-playing-water-polo", e: "🤽🏼‍♂️"},
                "1F3FD": {k: "man-playing-water-polo-1F3FD", n: "man-playing-water-polo", e: "🤽🏽‍♂️"},
                "1F3FE": {k: "man-playing-water-polo-1F3FE", n: "man-playing-water-polo", e: "🤽🏾‍♂️"},
                "1F3FF": {k: "man-playing-water-polo-1F3FF", n: "man-playing-water-polo", e: "🤽🏿‍♂️"}
            }
        }, {
            n: ["woman-playing-water-polo"],
            e: "🤽‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-playing-water-polo-1F3FB", n: "woman-playing-water-polo", e: "🤽🏻‍♀️"},
                "1F3FC": {k: "woman-playing-water-polo-1F3FC", n: "woman-playing-water-polo", e: "🤽🏼‍♀️"},
                "1F3FD": {k: "woman-playing-water-polo-1F3FD", n: "woman-playing-water-polo", e: "🤽🏽‍♀️"},
                "1F3FE": {k: "woman-playing-water-polo-1F3FE", n: "woman-playing-water-polo", e: "🤽🏾‍♀️"},
                "1F3FF": {k: "woman-playing-water-polo-1F3FF", n: "woman-playing-water-polo", e: "🤽🏿‍♀️"}
            }
        }, {
            n: ["handball"],
            e: "🤾",
            c: 1,
            v: {
                "1F3FB": {k: "handball-1F3FB", n: "handball", e: "🤾🏻"},
                "1F3FC": {k: "handball-1F3FC", n: "handball", e: "🤾🏼"},
                "1F3FD": {k: "handball-1F3FD", n: "handball", e: "🤾🏽"},
                "1F3FE": {k: "handball-1F3FE", n: "handball", e: "🤾🏾"},
                "1F3FF": {k: "handball-1F3FF", n: "handball", e: "🤾🏿"}
            }
        }, {
            n: ["man-playing-handball"],
            e: "🤾‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-playing-handball-1F3FB", n: "man-playing-handball", e: "🤾🏻‍♂️"},
                "1F3FC": {k: "man-playing-handball-1F3FC", n: "man-playing-handball", e: "🤾🏼‍♂️"},
                "1F3FD": {k: "man-playing-handball-1F3FD", n: "man-playing-handball", e: "🤾🏽‍♂️"},
                "1F3FE": {k: "man-playing-handball-1F3FE", n: "man-playing-handball", e: "🤾🏾‍♂️"},
                "1F3FF": {k: "man-playing-handball-1F3FF", n: "man-playing-handball", e: "🤾🏿‍♂️"}
            }
        }, {
            n: ["woman-playing-handball"],
            e: "🤾‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-playing-handball-1F3FB", n: "woman-playing-handball", e: "🤾🏻‍♀️"},
                "1F3FC": {k: "woman-playing-handball-1F3FC", n: "woman-playing-handball", e: "🤾🏼‍♀️"},
                "1F3FD": {k: "woman-playing-handball-1F3FD", n: "woman-playing-handball", e: "🤾🏽‍♀️"},
                "1F3FE": {k: "woman-playing-handball-1F3FE", n: "woman-playing-handball", e: "🤾🏾‍♀️"},
                "1F3FF": {k: "woman-playing-handball-1F3FF", n: "woman-playing-handball", e: "🤾🏿‍♀️"}
            }
        }, {
            n: ["juggling"],
            e: "🤹",
            c: 1,
            v: {
                "1F3FB": {k: "juggling-1F3FB", n: "juggling", e: "🤹🏻"},
                "1F3FC": {k: "juggling-1F3FC", n: "juggling", e: "🤹🏼"},
                "1F3FD": {k: "juggling-1F3FD", n: "juggling", e: "🤹🏽"},
                "1F3FE": {k: "juggling-1F3FE", n: "juggling", e: "🤹🏾"},
                "1F3FF": {k: "juggling-1F3FF", n: "juggling", e: "🤹🏿"}
            }
        }, {
            n: ["man-juggling"],
            e: "🤹‍♂️",
            c: 1,
            v: {
                "1F3FB": {k: "man-juggling-1F3FB", n: "man-juggling", e: "🤹🏻‍♂️"},
                "1F3FC": {k: "man-juggling-1F3FC", n: "man-juggling", e: "🤹🏼‍♂️"},
                "1F3FD": {k: "man-juggling-1F3FD", n: "man-juggling", e: "🤹🏽‍♂️"},
                "1F3FE": {k: "man-juggling-1F3FE", n: "man-juggling", e: "🤹🏾‍♂️"},
                "1F3FF": {k: "man-juggling-1F3FF", n: "man-juggling", e: "🤹🏿‍♂️"}
            }
        }, {
            n: ["woman-juggling"],
            e: "🤹‍♀️",
            c: 1,
            v: {
                "1F3FB": {k: "woman-juggling-1F3FB", n: "woman-juggling", e: "🤹🏻‍♀️"},
                "1F3FC": {k: "woman-juggling-1F3FC", n: "woman-juggling", e: "🤹🏼‍♀️"},
                "1F3FD": {k: "woman-juggling-1F3FD", n: "woman-juggling", e: "🤹🏽‍♀️"},
                "1F3FE": {k: "woman-juggling-1F3FE", n: "woman-juggling", e: "🤹🏾‍♀️"},
                "1F3FF": {k: "woman-juggling-1F3FF", n: "woman-juggling", e: "🤹🏿‍♀️"}
            }
        }, {n: ["couple", "man_and_woman_holding_hands"], e: "👫", c: 1}, {
            n: ["two_men_holding_hands"],
            e: "👬",
            c: 1
        }, {n: ["two_women_holding_hands"], e: "👭", c: 1}, {n: ["couplekiss"], e: "💏", c: 1}, {
            n: ["woman-kiss-man"],
            e: "👩‍❤️‍💋‍👨",
            c: 1
        }, {n: ["man-kiss-man"], e: "👨‍❤️‍💋‍👨", c: 1}, {
            n: ["woman-kiss-woman"],
            e: "👩‍❤️‍💋‍👩",
            c: 1
        }, {n: ["couple_with_heart"], e: "💑", c: 1}, {
            n: ["woman-heart-man"],
            e: "👩‍❤️‍👨",
            c: 1
        }, {n: ["man-heart-man"], e: "👨‍❤️‍👨", c: 1}, {
            n: ["woman-heart-woman"],
            e: "👩‍❤️‍👩",
            c: 1
        }, {n: ["family", "man-woman-boy"], e: "👪", c: 1}, {
            n: ["man-woman-boy", "family"],
            e: "👨‍👩‍👦",
            c: 1
        }, {n: ["man-woman-girl"], e: "👨‍👩‍👧", c: 1}, {
            n: ["man-woman-girl-boy"],
            e: "👨‍👩‍👧‍👦",
            c: 1
        }, {n: ["man-woman-boy-boy"], e: "👨‍👩‍👦‍👦", c: 1}, {
            n: ["man-woman-girl-girl"],
            e: "👨‍👩‍👧‍👧",
            c: 1
        }, {n: ["man-man-boy"], e: "👨‍👨‍👦", c: 1}, {
            n: ["man-man-girl"],
            e: "👨‍👨‍👧",
            c: 1
        }, {n: ["man-man-girl-boy"], e: "👨‍👨‍👧‍👦", c: 1}, {
            n: ["man-man-boy-boy"],
            e: "👨‍👨‍👦‍👦",
            c: 1
        }, {n: ["man-man-girl-girl"], e: "👨‍👨‍👧‍👧", c: 1}, {
            n: ["woman-woman-boy"],
            e: "👩‍👩‍👦",
            c: 1
        }, {n: ["woman-woman-girl"], e: "👩‍👩‍👧", c: 1}, {
            n: ["woman-woman-girl-boy"],
            e: "👩‍👩‍👧‍👦",
            c: 1
        }, {n: ["woman-woman-boy-boy"], e: "👩‍👩‍👦‍👦", c: 1}, {
            n: ["woman-woman-girl-girl"],
            e: "👩‍👩‍👧‍👧",
            c: 1
        }, {n: ["man-boy"], e: "👨‍👦", c: 1}, {n: ["man-boy-boy"], e: "👨‍👦‍👦", c: 1}, {
            n: ["man-girl"],
            e: "👨‍👧",
            c: 1
        }, {n: ["man-girl-boy"], e: "👨‍👧‍👦", c: 1}, {n: ["man-girl-girl"], e: "👨‍👧‍👧", c: 1}, {
            n: ["woman-boy"],
            e: "👩‍👦",
            c: 1
        }, {n: ["woman-boy-boy"], e: "👩‍👦‍👦", c: 1}, {n: ["woman-girl"], e: "👩‍👧", c: 1}, {
            n: ["woman-girl-boy"],
            e: "👩‍👧‍👦",
            c: 1
        }, {n: ["woman-girl-girl"], e: "👩‍👧‍👧", c: 1}, {
            n: ["selfie"],
            e: "🤳",
            c: 1,
            v: {
                "1F3FB": {k: "selfie-1F3FB", n: "selfie", e: "🤳🏻"},
                "1F3FC": {k: "selfie-1F3FC", n: "selfie", e: "🤳🏼"},
                "1F3FD": {k: "selfie-1F3FD", n: "selfie", e: "🤳🏽"},
                "1F3FE": {k: "selfie-1F3FE", n: "selfie", e: "🤳🏾"},
                "1F3FF": {k: "selfie-1F3FF", n: "selfie", e: "🤳🏿"}
            }
        }, {
            n: ["muscle"],
            e: "💪",
            c: 1,
            v: {
                "1F3FB": {k: "muscle-1F3FB", n: "muscle", e: "💪🏻"},
                "1F3FC": {k: "muscle-1F3FC", n: "muscle", e: "💪🏼"},
                "1F3FD": {k: "muscle-1F3FD", n: "muscle", e: "💪🏽"},
                "1F3FE": {k: "muscle-1F3FE", n: "muscle", e: "💪🏾"},
                "1F3FF": {k: "muscle-1F3FF", n: "muscle", e: "💪🏿"}
            }
        }, {
            n: ["point_left"],
            e: "👈",
            c: 1,
            v: {
                "1F3FB": {k: "point_left-1F3FB", n: "point_left", e: "👈🏻"},
                "1F3FC": {k: "point_left-1F3FC", n: "point_left", e: "👈🏼"},
                "1F3FD": {k: "point_left-1F3FD", n: "point_left", e: "👈🏽"},
                "1F3FE": {k: "point_left-1F3FE", n: "point_left", e: "👈🏾"},
                "1F3FF": {k: "point_left-1F3FF", n: "point_left", e: "👈🏿"}
            }
        }, {
            n: ["point_right"],
            e: "👉",
            c: 1,
            v: {
                "1F3FB": {k: "point_right-1F3FB", n: "point_right", e: "👉🏻"},
                "1F3FC": {k: "point_right-1F3FC", n: "point_right", e: "👉🏼"},
                "1F3FD": {k: "point_right-1F3FD", n: "point_right", e: "👉🏽"},
                "1F3FE": {k: "point_right-1F3FE", n: "point_right", e: "👉🏾"},
                "1F3FF": {k: "point_right-1F3FF", n: "point_right", e: "👉🏿"}
            }
        }, {
            n: ["point_up"],
            e: "☝️",
            c: 1,
            v: {
                "1F3FB": {k: "point_up-1F3FB", n: "point_up", e: "☝🏻"},
                "1F3FC": {k: "point_up-1F3FC", n: "point_up", e: "☝🏼"},
                "1F3FD": {k: "point_up-1F3FD", n: "point_up", e: "☝🏽"},
                "1F3FE": {k: "point_up-1F3FE", n: "point_up", e: "☝🏾"},
                "1F3FF": {k: "point_up-1F3FF", n: "point_up", e: "☝🏿"}
            }
        }, {
            n: ["point_up_2"],
            e: "👆",
            c: 1,
            v: {
                "1F3FB": {k: "point_up_2-1F3FB", n: "point_up_2", e: "👆🏻"},
                "1F3FC": {k: "point_up_2-1F3FC", n: "point_up_2", e: "👆🏼"},
                "1F3FD": {k: "point_up_2-1F3FD", n: "point_up_2", e: "👆🏽"},
                "1F3FE": {k: "point_up_2-1F3FE", n: "point_up_2", e: "👆🏾"},
                "1F3FF": {k: "point_up_2-1F3FF", n: "point_up_2", e: "👆🏿"}
            }
        }, {
            n: ["middle_finger", "reversed_hand_with_middle_finger_extended"],
            e: "🖕",
            c: 1,
            v: {
                "1F3FB": {k: "middle_finger-1F3FB", n: "middle_finger", e: "🖕🏻"},
                "1F3FC": {k: "middle_finger-1F3FC", n: "middle_finger", e: "🖕🏼"},
                "1F3FD": {k: "middle_finger-1F3FD", n: "middle_finger", e: "🖕🏽"},
                "1F3FE": {k: "middle_finger-1F3FE", n: "middle_finger", e: "🖕🏾"},
                "1F3FF": {k: "middle_finger-1F3FF", n: "middle_finger", e: "🖕🏿"}
            }
        }, {
            n: ["point_down"],
            e: "👇",
            c: 1,
            v: {
                "1F3FB": {k: "point_down-1F3FB", n: "point_down", e: "👇🏻"},
                "1F3FC": {k: "point_down-1F3FC", n: "point_down", e: "👇🏼"},
                "1F3FD": {k: "point_down-1F3FD", n: "point_down", e: "👇🏽"},
                "1F3FE": {k: "point_down-1F3FE", n: "point_down", e: "👇🏾"},
                "1F3FF": {k: "point_down-1F3FF", n: "point_down", e: "👇🏿"}
            }
        }, {
            n: ["v"],
            e: "✌️",
            c: 1,
            v: {
                "1F3FB": {k: "v-1F3FB", n: "v", e: "✌🏻"},
                "1F3FC": {k: "v-1F3FC", n: "v", e: "✌🏼"},
                "1F3FD": {k: "v-1F3FD", n: "v", e: "✌🏽"},
                "1F3FE": {k: "v-1F3FE", n: "v", e: "✌🏾"},
                "1F3FF": {k: "v-1F3FF", n: "v", e: "✌🏿"}
            }
        }, {
            n: ["crossed_fingers", "hand_with_index_and_middle_fingers_crossed"],
            e: "🤞",
            c: 1,
            v: {
                "1F3FB": {k: "crossed_fingers-1F3FB", n: "crossed_fingers", e: "🤞🏻"},
                "1F3FC": {k: "crossed_fingers-1F3FC", n: "crossed_fingers", e: "🤞🏼"},
                "1F3FD": {k: "crossed_fingers-1F3FD", n: "crossed_fingers", e: "🤞🏽"},
                "1F3FE": {k: "crossed_fingers-1F3FE", n: "crossed_fingers", e: "🤞🏾"},
                "1F3FF": {k: "crossed_fingers-1F3FF", n: "crossed_fingers", e: "🤞🏿"}
            }
        }, {
            n: ["spock-hand"],
            e: "🖖",
            c: 1,
            v: {
                "1F3FB": {k: "spock-hand-1F3FB", n: "spock-hand", e: "🖖🏻"},
                "1F3FC": {k: "spock-hand-1F3FC", n: "spock-hand", e: "🖖🏼"},
                "1F3FD": {k: "spock-hand-1F3FD", n: "spock-hand", e: "🖖🏽"},
                "1F3FE": {k: "spock-hand-1F3FE", n: "spock-hand", e: "🖖🏾"},
                "1F3FF": {k: "spock-hand-1F3FF", n: "spock-hand", e: "🖖🏿"}
            }
        }, {
            n: ["the_horns", "sign_of_the_horns"],
            e: "🤘",
            c: 1,
            v: {
                "1F3FB": {k: "the_horns-1F3FB", n: "the_horns", e: "🤘🏻"},
                "1F3FC": {k: "the_horns-1F3FC", n: "the_horns", e: "🤘🏼"},
                "1F3FD": {k: "the_horns-1F3FD", n: "the_horns", e: "🤘🏽"},
                "1F3FE": {k: "the_horns-1F3FE", n: "the_horns", e: "🤘🏾"},
                "1F3FF": {k: "the_horns-1F3FF", n: "the_horns", e: "🤘🏿"}
            }
        }, {
            n: ["call_me_hand"],
            e: "🤙",
            c: 1,
            v: {
                "1F3FB": {k: "call_me_hand-1F3FB", n: "call_me_hand", e: "🤙🏻"},
                "1F3FC": {k: "call_me_hand-1F3FC", n: "call_me_hand", e: "🤙🏼"},
                "1F3FD": {k: "call_me_hand-1F3FD", n: "call_me_hand", e: "🤙🏽"},
                "1F3FE": {k: "call_me_hand-1F3FE", n: "call_me_hand", e: "🤙🏾"},
                "1F3FF": {k: "call_me_hand-1F3FF", n: "call_me_hand", e: "🤙🏿"}
            }
        }, {
            n: ["raised_hand_with_fingers_splayed"],
            e: "🖐️",
            c: 1,
            v: {
                "1F3FB": {
                    k: "raised_hand_with_fingers_splayed-1F3FB",
                    n: "raised_hand_with_fingers_splayed",
                    e: "🖐🏻"
                },
                "1F3FC": {
                    k: "raised_hand_with_fingers_splayed-1F3FC",
                    n: "raised_hand_with_fingers_splayed",
                    e: "🖐🏼"
                },
                "1F3FD": {
                    k: "raised_hand_with_fingers_splayed-1F3FD",
                    n: "raised_hand_with_fingers_splayed",
                    e: "🖐🏽"
                },
                "1F3FE": {
                    k: "raised_hand_with_fingers_splayed-1F3FE",
                    n: "raised_hand_with_fingers_splayed",
                    e: "🖐🏾"
                },
                "1F3FF": {k: "raised_hand_with_fingers_splayed-1F3FF", n: "raised_hand_with_fingers_splayed", e: "🖐🏿"}
            }
        }, {
            n: ["hand", "raised_hand"],
            e: "✋",
            c: 1,
            v: {
                "1F3FB": {k: "hand-1F3FB", n: "hand", e: "✋🏻"},
                "1F3FC": {k: "hand-1F3FC", n: "hand", e: "✋🏼"},
                "1F3FD": {k: "hand-1F3FD", n: "hand", e: "✋🏽"},
                "1F3FE": {k: "hand-1F3FE", n: "hand", e: "✋🏾"},
                "1F3FF": {k: "hand-1F3FF", n: "hand", e: "✋🏿"}
            }
        }, {
            n: ["ok_hand"],
            e: "👌",
            c: 1,
            v: {
                "1F3FB": {k: "ok_hand-1F3FB", n: "ok_hand", e: "👌🏻"},
                "1F3FC": {k: "ok_hand-1F3FC", n: "ok_hand", e: "👌🏼"},
                "1F3FD": {k: "ok_hand-1F3FD", n: "ok_hand", e: "👌🏽"},
                "1F3FE": {k: "ok_hand-1F3FE", n: "ok_hand", e: "👌🏾"},
                "1F3FF": {k: "ok_hand-1F3FF", n: "ok_hand", e: "👌🏿"}
            }
        }, {
            n: ["+1", "thumbsup"],
            e: "👍",
            c: 1,
            v: {
                "1F3FB": {k: "+1-1F3FB", n: "+1", e: "👍🏻"},
                "1F3FC": {k: "+1-1F3FC", n: "+1", e: "👍🏼"},
                "1F3FD": {k: "+1-1F3FD", n: "+1", e: "👍🏽"},
                "1F3FE": {k: "+1-1F3FE", n: "+1", e: "👍🏾"},
                "1F3FF": {k: "+1-1F3FF", n: "+1", e: "👍🏿"}
            }
        }, {
            n: ["-1", "thumbsdown"],
            e: "👎",
            c: 1,
            v: {
                "1F3FB": {k: "-1-1F3FB", n: "-1", e: "👎🏻"},
                "1F3FC": {k: "-1-1F3FC", n: "-1", e: "👎🏼"},
                "1F3FD": {k: "-1-1F3FD", n: "-1", e: "👎🏽"},
                "1F3FE": {k: "-1-1F3FE", n: "-1", e: "👎🏾"},
                "1F3FF": {k: "-1-1F3FF", n: "-1", e: "👎🏿"}
            }
        }, {
            n: ["fist"],
            e: "✊",
            c: 1,
            v: {
                "1F3FB": {k: "fist-1F3FB", n: "fist", e: "✊🏻"},
                "1F3FC": {k: "fist-1F3FC", n: "fist", e: "✊🏼"},
                "1F3FD": {k: "fist-1F3FD", n: "fist", e: "✊🏽"},
                "1F3FE": {k: "fist-1F3FE", n: "fist", e: "✊🏾"},
                "1F3FF": {k: "fist-1F3FF", n: "fist", e: "✊🏿"}
            }
        }, {
            n: ["facepunch", "punch"],
            e: "👊",
            c: 1,
            v: {
                "1F3FB": {k: "facepunch-1F3FB", n: "facepunch", e: "👊🏻"},
                "1F3FC": {k: "facepunch-1F3FC", n: "facepunch", e: "👊🏼"},
                "1F3FD": {k: "facepunch-1F3FD", n: "facepunch", e: "👊🏽"},
                "1F3FE": {k: "facepunch-1F3FE", n: "facepunch", e: "👊🏾"},
                "1F3FF": {k: "facepunch-1F3FF", n: "facepunch", e: "👊🏿"}
            }
        }, {
            n: ["left-facing_fist"],
            e: "🤛",
            c: 1,
            v: {
                "1F3FB": {k: "left-facing_fist-1F3FB", n: "left-facing_fist", e: "🤛🏻"},
                "1F3FC": {k: "left-facing_fist-1F3FC", n: "left-facing_fist", e: "🤛🏼"},
                "1F3FD": {k: "left-facing_fist-1F3FD", n: "left-facing_fist", e: "🤛🏽"},
                "1F3FE": {k: "left-facing_fist-1F3FE", n: "left-facing_fist", e: "🤛🏾"},
                "1F3FF": {k: "left-facing_fist-1F3FF", n: "left-facing_fist", e: "🤛🏿"}
            }
        }, {
            n: ["right-facing_fist"],
            e: "🤜",
            c: 1,
            v: {
                "1F3FB": {k: "right-facing_fist-1F3FB", n: "right-facing_fist", e: "🤜🏻"},
                "1F3FC": {k: "right-facing_fist-1F3FC", n: "right-facing_fist", e: "🤜🏼"},
                "1F3FD": {k: "right-facing_fist-1F3FD", n: "right-facing_fist", e: "🤜🏽"},
                "1F3FE": {k: "right-facing_fist-1F3FE", n: "right-facing_fist", e: "🤜🏾"},
                "1F3FF": {k: "right-facing_fist-1F3FF", n: "right-facing_fist", e: "🤜🏿"}
            }
        }, {
            n: ["raised_back_of_hand"],
            e: "🤚",
            c: 1,
            v: {
                "1F3FB": {k: "raised_back_of_hand-1F3FB", n: "raised_back_of_hand", e: "🤚🏻"},
                "1F3FC": {k: "raised_back_of_hand-1F3FC", n: "raised_back_of_hand", e: "🤚🏼"},
                "1F3FD": {k: "raised_back_of_hand-1F3FD", n: "raised_back_of_hand", e: "🤚🏽"},
                "1F3FE": {k: "raised_back_of_hand-1F3FE", n: "raised_back_of_hand", e: "🤚🏾"},
                "1F3FF": {k: "raised_back_of_hand-1F3FF", n: "raised_back_of_hand", e: "🤚🏿"}
            }
        }, {
            n: ["wave"],
            e: "👋",
            c: 1,
            v: {
                "1F3FB": {k: "wave-1F3FB", n: "wave", e: "👋🏻"},
                "1F3FC": {k: "wave-1F3FC", n: "wave", e: "👋🏼"},
                "1F3FD": {k: "wave-1F3FD", n: "wave", e: "👋🏽"},
                "1F3FE": {k: "wave-1F3FE", n: "wave", e: "👋🏾"},
                "1F3FF": {k: "wave-1F3FF", n: "wave", e: "👋🏿"}
            }
        }, {
            n: ["i_love_you_hand_sign"],
            e: "🤟",
            c: 1,
            v: {
                "1F3FB": {k: "i_love_you_hand_sign-1F3FB", n: "i_love_you_hand_sign", e: "🤟🏻"},
                "1F3FC": {k: "i_love_you_hand_sign-1F3FC", n: "i_love_you_hand_sign", e: "🤟🏼"},
                "1F3FD": {k: "i_love_you_hand_sign-1F3FD", n: "i_love_you_hand_sign", e: "🤟🏽"},
                "1F3FE": {k: "i_love_you_hand_sign-1F3FE", n: "i_love_you_hand_sign", e: "🤟🏾"},
                "1F3FF": {k: "i_love_you_hand_sign-1F3FF", n: "i_love_you_hand_sign", e: "🤟🏿"}
            }
        }, {
            n: ["writing_hand"],
            e: "✍️",
            c: 1,
            v: {
                "1F3FB": {k: "writing_hand-1F3FB", n: "writing_hand", e: "✍🏻"},
                "1F3FC": {k: "writing_hand-1F3FC", n: "writing_hand", e: "✍🏼"},
                "1F3FD": {k: "writing_hand-1F3FD", n: "writing_hand", e: "✍🏽"},
                "1F3FE": {k: "writing_hand-1F3FE", n: "writing_hand", e: "✍🏾"},
                "1F3FF": {k: "writing_hand-1F3FF", n: "writing_hand", e: "✍🏿"}
            }
        }, {
            n: ["clap"],
            e: "👏",
            c: 1,
            v: {
                "1F3FB": {k: "clap-1F3FB", n: "clap", e: "👏🏻"},
                "1F3FC": {k: "clap-1F3FC", n: "clap", e: "👏🏼"},
                "1F3FD": {k: "clap-1F3FD", n: "clap", e: "👏🏽"},
                "1F3FE": {k: "clap-1F3FE", n: "clap", e: "👏🏾"},
                "1F3FF": {k: "clap-1F3FF", n: "clap", e: "👏🏿"}
            }
        }, {
            n: ["open_hands"],
            e: "👐",
            c: 1,
            v: {
                "1F3FB": {k: "open_hands-1F3FB", n: "open_hands", e: "👐🏻"},
                "1F3FC": {k: "open_hands-1F3FC", n: "open_hands", e: "👐🏼"},
                "1F3FD": {k: "open_hands-1F3FD", n: "open_hands", e: "👐🏽"},
                "1F3FE": {k: "open_hands-1F3FE", n: "open_hands", e: "👐🏾"},
                "1F3FF": {k: "open_hands-1F3FF", n: "open_hands", e: "👐🏿"}
            }
        }, {
            n: ["raised_hands"],
            e: "🙌",
            c: 1,
            v: {
                "1F3FB": {k: "raised_hands-1F3FB", n: "raised_hands", e: "🙌🏻"},
                "1F3FC": {k: "raised_hands-1F3FC", n: "raised_hands", e: "🙌🏼"},
                "1F3FD": {k: "raised_hands-1F3FD", n: "raised_hands", e: "🙌🏽"},
                "1F3FE": {k: "raised_hands-1F3FE", n: "raised_hands", e: "🙌🏾"},
                "1F3FF": {k: "raised_hands-1F3FF", n: "raised_hands", e: "🙌🏿"}
            }
        }, {
            n: ["palms_up_together"],
            e: "🤲",
            c: 1,
            v: {
                "1F3FB": {k: "palms_up_together-1F3FB", n: "palms_up_together", e: "🤲🏻"},
                "1F3FC": {k: "palms_up_together-1F3FC", n: "palms_up_together", e: "🤲🏼"},
                "1F3FD": {k: "palms_up_together-1F3FD", n: "palms_up_together", e: "🤲🏽"},
                "1F3FE": {k: "palms_up_together-1F3FE", n: "palms_up_together", e: "🤲🏾"},
                "1F3FF": {k: "palms_up_together-1F3FF", n: "palms_up_together", e: "🤲🏿"}
            }
        }, {
            n: ["pray"],
            e: "🙏",
            c: 1,
            v: {
                "1F3FB": {k: "pray-1F3FB", n: "pray", e: "🙏🏻"},
                "1F3FC": {k: "pray-1F3FC", n: "pray", e: "🙏🏼"},
                "1F3FD": {k: "pray-1F3FD", n: "pray", e: "🙏🏽"},
                "1F3FE": {k: "pray-1F3FE", n: "pray", e: "🙏🏾"},
                "1F3FF": {k: "pray-1F3FF", n: "pray", e: "🙏🏿"}
            }
        }, {n: ["handshake"], e: "🤝", c: 1}, {
            n: ["nail_care"],
            e: "💅",
            c: 1,
            v: {
                "1F3FB": {k: "nail_care-1F3FB", n: "nail_care", e: "💅🏻"},
                "1F3FC": {k: "nail_care-1F3FC", n: "nail_care", e: "💅🏼"},
                "1F3FD": {k: "nail_care-1F3FD", n: "nail_care", e: "💅🏽"},
                "1F3FE": {k: "nail_care-1F3FE", n: "nail_care", e: "💅🏾"},
                "1F3FF": {k: "nail_care-1F3FF", n: "nail_care", e: "💅🏿"}
            }
        }, {
            n: ["ear"],
            e: "👂",
            c: 1,
            v: {
                "1F3FB": {k: "ear-1F3FB", n: "ear", e: "👂🏻"},
                "1F3FC": {k: "ear-1F3FC", n: "ear", e: "👂🏼"},
                "1F3FD": {k: "ear-1F3FD", n: "ear", e: "👂🏽"},
                "1F3FE": {k: "ear-1F3FE", n: "ear", e: "👂🏾"},
                "1F3FF": {k: "ear-1F3FF", n: "ear", e: "👂🏿"}
            }
        }, {
            n: ["nose"],
            e: "👃",
            c: 1,
            v: {
                "1F3FB": {k: "nose-1F3FB", n: "nose", e: "👃🏻"},
                "1F3FC": {k: "nose-1F3FC", n: "nose", e: "👃🏼"},
                "1F3FD": {k: "nose-1F3FD", n: "nose", e: "👃🏽"},
                "1F3FE": {k: "nose-1F3FE", n: "nose", e: "👃🏾"},
                "1F3FF": {k: "nose-1F3FF", n: "nose", e: "👃🏿"}
            }
        }, {n: ["footprints"], e: "👣", c: 1}, {n: ["eyes"], e: "👀", c: 1}, {
            n: ["eye"],
            e: "👁️",
            c: 1
        }, {n: ["eye-in-speech-bubble"], e: "👁️‍🗨️", c: 1}, {n: ["brain"], e: "🧠", c: 1}, {
            n: ["tongue"],
            e: "👅",
            c: 1
        }, {n: ["lips"], e: "👄", c: 1}, {n: ["kiss"], e: "💋", c: 1}, {n: ["cupid"], e: "💘", c: 1}, {
            n: ["heart"],
            e: "❤️",
            c: 1
        }, {n: ["heartbeat"], e: "💓", c: 1}, {n: ["broken_heart"], e: "💔", c: 1}, {
            n: ["two_hearts"],
            e: "💕",
            c: 1
        }, {n: ["sparkling_heart"], e: "💖", c: 1}, {n: ["heartpulse"], e: "💗", c: 1}, {
            n: ["blue_heart"],
            e: "💙",
            c: 1
        }, {n: ["green_heart"], e: "💚", c: 1}, {n: ["yellow_heart"], e: "💛", c: 1}, {
            n: ["orange_heart"],
            e: "🧡",
            c: 1
        }, {n: ["purple_heart"], e: "💜", c: 1}, {n: ["black_heart"], e: "🖤", c: 1}, {
            n: ["gift_heart"],
            e: "💝",
            c: 1
        }, {n: ["revolving_hearts"], e: "💞", c: 1}, {
            n: ["heart_decoration"],
            e: "💟",
            c: 1
        }, {n: ["heavy_heart_exclamation_mark_ornament"], e: "❣️", c: 1}, {
            n: ["love_letter"],
            e: "💌",
            c: 1
        }, {n: ["zzz"], e: "💤", c: 1}, {n: ["anger"], e: "💢", c: 1}, {
            n: ["bomb"],
            e: "💣",
            c: 1
        }, {n: ["boom", "collision"], e: "💥", c: 1}, {n: ["sweat_drops"], e: "💦", c: 1}, {
            n: ["dash"],
            e: "💨",
            c: 1
        }, {n: ["dizzy"], e: "💫", c: 1}, {n: ["speech_balloon"], e: "💬", c: 1}, {
            n: ["left_speech_bubble"],
            e: "🗨️",
            c: 1
        }, {n: ["right_anger_bubble"], e: "🗯️", c: 1}, {n: ["thought_balloon"], e: "💭", c: 1}, {
            n: ["hole"],
            e: "🕳️",
            c: 1
        }, {n: ["eyeglasses"], e: "👓", c: 1}, {n: ["dark_sunglasses"], e: "🕶️", c: 1}, {
            n: ["necktie"],
            e: "👔",
            c: 1
        }, {n: ["shirt", "tshirt"], e: "👕", c: 1}, {n: ["jeans"], e: "👖", c: 1}, {
            n: ["scarf"],
            e: "🧣",
            c: 1
        }, {n: ["gloves"], e: "🧤", c: 1}, {n: ["coat"], e: "🧥", c: 1}, {n: ["socks"], e: "🧦", c: 1}, {
            n: ["dress"],
            e: "👗",
            c: 1
        }, {n: ["kimono"], e: "👘", c: 1}, {n: ["bikini"], e: "👙", c: 1}, {
            n: ["womans_clothes"],
            e: "👚",
            c: 1
        }, {n: ["purse"], e: "👛", c: 1}, {n: ["handbag"], e: "👜", c: 1}, {
            n: ["pouch"],
            e: "👝",
            c: 1
        }, {n: ["shopping_bags"], e: "🛍️", c: 1}, {n: ["school_satchel"], e: "🎒", c: 1}, {
            n: ["mans_shoe", "shoe"],
            e: "👞",
            c: 1
        }, {n: ["athletic_shoe"], e: "👟", c: 1}, {n: ["high_heel"], e: "👠", c: 1}, {
            n: ["sandal"],
            e: "👡",
            c: 1
        }, {n: ["boot"], e: "👢", c: 1}, {n: ["crown"], e: "👑", c: 1}, {
            n: ["womans_hat"],
            e: "👒",
            c: 1
        }, {n: ["tophat"], e: "🎩", c: 1}, {n: ["mortar_board"], e: "🎓", c: 1}, {
            n: ["billed_cap"],
            e: "🧢",
            c: 1
        }, {n: ["helmet_with_white_cross"], e: "⛑️", c: 1}, {n: ["prayer_beads"], e: "📿", c: 1}, {
            n: ["lipstick"],
            e: "💄",
            c: 1
        }, {n: ["ring"], e: "💍", c: 1}, {n: ["gem"], e: "💎", c: 1}];

    function le(e, n) {
        var a = document.createElement(e);
        return n && (a.className = n), a
    }

    function se(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
    }

    function me(e) {
        return "string" == typeof e.n ? e.n : e.n[0]
    }

    var fe = function () {
        function n(a) {
            e(this, n), this.events = a
        }

        return a(n, [{
            key: "render", value: function () {
                var e = this, n = le("div", "emoji-picker__preview");
                return this.emoji = le("div", "emoji-picker__preview-emoji"), n.appendChild(this.emoji), this.name = le("div", "emoji-picker__preview-name"), n.appendChild(this.name), this.events.on("showPreview", function (n) {
                    return e.showPreview(n)
                }), this.events.on("hidePreview", function () {
                    return e.hidePreview()
                }), n
            }
        }, {
            key: "showPreview", value: function (e) {
                this.emoji.innerHTML = e.e, this.name.innerHTML = me(e)
            }
        }, {
            key: "hidePreview", value: function () {
                this.emoji.innerHTML = "", this.name.innerHTML = ""
            }
        }]), n
    }();

    function ge(e, n) {
        for (var a = 0; a < n.length; a++) {
            var i = n[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function _e(e, n, a) {
        return n in e ? Object.defineProperty(e, n, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = a, e
    }

    function he(e) {
        for (var n = 1; n < arguments.length; n++) {
            var a = null != arguments[n] ? arguments[n] : {}, i = Object.keys(a);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(a).filter(function (e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable
            }))), i.forEach(function (n) {
                _e(e, n, a[n])
            })
        }
        return e
    }

    function ue(e, n) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, n) {
            var a = [], i = !0, t = !1, o = void 0;
            try {
                for (var r, F = e[Symbol.iterator](); !(i = (r = F.next()).done) && (a.push(r.value), !n || a.length !== n); i = !0) ;
            } catch (e) {
                t = !0, o = e
            } finally {
                try {
                    i || null == F.return || F.return()
                } finally {
                    if (t) throw o
                }
            }
            return a
        }(e, n) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    var de = function () {
    }, pe = {}, ke = {}, we = {mark: de, measure: de};
    try {
        "undefined" != typeof window && (pe = window), "undefined" != typeof document && (ke = document), "undefined" != typeof MutationObserver && MutationObserver, "undefined" != typeof performance && (we = performance)
    } catch (e) {
    }
    var be = (pe.navigator || {}).userAgent, ve = void 0 === be ? "" : be, ye = pe, Ee = ke, Ce = we,
        De = (ye.document, !!Ee.documentElement && !!Ee.head && "function" == typeof Ee.addEventListener && "function" == typeof Ee.createElement),
        Be = (~ve.indexOf("MSIE") || ve.indexOf("Trident/"), "fa"), xe = "svg-inline--fa", je = "data-fa-i2svg",
        Oe = (function () {
            try {
                process.env.NODE_ENV
            } catch (e) {
                return !1
            }
        }(), {GROUP: "group", SWAP_OPACITY: "swap-opacity", PRIMARY: "primary", SECONDARY: "secondary"}),
        ze = ye.FontAwesomeConfig || {};
    if (Ee && "function" == typeof Ee.querySelector) {
        [["data-family-prefix", "familyPrefix"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach(function (e) {
            var n = ue(e, 2), a = n[0], i = n[1], t = function (e) {
                return "" === e || "false" !== e && ("true" === e || e)
            }(function (e) {
                var n = Ee.querySelector("script[" + e + "]");
                if (n) return n.getAttribute(e)
            }(a));
            null != t && (ze[i] = t)
        })
    }
    var Me = he({}, {
        familyPrefix: Be,
        replacementClass: xe,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        mutateApproach: "async",
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0
    }, ze);
    Me.autoReplaceSvg || (Me.observeMutations = !1);
    var Le = he({}, Me);
    ye.FontAwesomeConfig = Le;
    var Te = ye || {};
    Te.___FONT_AWESOME___ || (Te.___FONT_AWESOME___ = {}), Te.___FONT_AWESOME___.styles || (Te.___FONT_AWESOME___.styles = {}), Te.___FONT_AWESOME___.hooks || (Te.___FONT_AWESOME___.hooks = {}), Te.___FONT_AWESOME___.shims || (Te.___FONT_AWESOME___.shims = []);
    var Ne = Te.___FONT_AWESOME___, Pe = [];
    De && ((Ee.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ee.readyState) || Ee.addEventListener("DOMContentLoaded", function e() {
        Ee.removeEventListener("DOMContentLoaded", e), 1, Pe.map(function (e) {
            return e()
        })
    }));
    "undefined" != typeof global && void 0 !== global.process && global.process.emit;
    var Se = {size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1};
    var Ae = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function He() {
        for (var e = 12, n = ""; e-- > 0;) n += Ae[62 * Math.random() | 0];
        return n
    }

    function Ie(e) {
        return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function We(e) {
        return Object.keys(e || {}).reduce(function (n, a) {
            return n + "".concat(a, ": ").concat(e[a], ";")
        }, "")
    }

    function Ve(e) {
        return e.size !== Se.size || e.x !== Se.x || e.y !== Se.y || e.rotate !== Se.rotate || e.flipX || e.flipY
    }

    function qe(e) {
        var n = e.transform, a = e.containerWidth, i = e.iconWidth,
            t = {transform: "translate(".concat(a / 2, " 256)")},
            o = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") "),
            r = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "),
            F = "rotate(".concat(n.rotate, " 0 0)");
        return {
            outer: t,
            inner: {transform: "".concat(o, " ").concat(r, " ").concat(F)},
            path: {transform: "translate(".concat(i / 2 * -1, " -256)")}
        }
    }

    var Re = {x: 0, y: 0, width: "100%", height: "100%"};

    function Ue(e) {
        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return e.attributes && (e.attributes.fill || n) && (e.attributes.fill = "black"), e
    }

    function Ye(e) {
        var n = e.icons, a = n.main, i = n.mask, t = e.prefix, o = e.iconName, r = e.transform, F = e.symbol,
            c = e.title, l = e.extra, s = e.watchable, m = void 0 !== s && s, f = i.found ? i : a, g = f.width,
            _ = f.height, h = "fa-w-".concat(Math.ceil(g / _ * 16)),
            u = [Le.replacementClass, o ? "".concat(Le.familyPrefix, "-").concat(o) : "", h].filter(function (e) {
                return -1 === l.classes.indexOf(e)
            }).concat(l.classes).join(" "), d = {
                children: [],
                attributes: he({}, l.attributes, {
                    "data-prefix": t,
                    "data-icon": o,
                    class: u,
                    role: l.attributes.role || "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 ".concat(g, " ").concat(_)
                })
            };
        m && (d.attributes[je] = ""), c && d.children.push({
            tag: "title",
            attributes: {id: d.attributes["aria-labelledby"] || "title-".concat(He())},
            children: [c]
        });
        var p = he({}, d, {prefix: t, iconName: o, main: a, mask: i, transform: r, symbol: F, styles: l.styles}),
            k = i.found && a.found ? function (e) {
                var n, a = e.children, i = e.attributes, t = e.main, o = e.mask, r = e.transform, F = t.width,
                    c = t.icon, l = o.width, s = o.icon, m = qe({transform: r, containerWidth: l, iconWidth: F}),
                    f = {tag: "rect", attributes: he({}, Re, {fill: "white"})},
                    g = c.children ? {children: c.children.map(Ue)} : {}, _ = {
                        tag: "g",
                        attributes: he({}, m.inner),
                        children: [Ue(he({tag: c.tag, attributes: he({}, c.attributes, m.path)}, g))]
                    }, h = {tag: "g", attributes: he({}, m.outer), children: [_]}, u = "mask-".concat(He()),
                    d = "clip-".concat(He()), p = {
                        tag: "mask",
                        attributes: he({}, Re, {id: u, maskUnits: "userSpaceOnUse", maskContentUnits: "userSpaceOnUse"}),
                        children: [f, h]
                    }, k = {
                        tag: "defs",
                        children: [{
                            tag: "clipPath",
                            attributes: {id: d},
                            children: (n = s, "g" === n.tag ? n.children : [n])
                        }, p]
                    };
                return a.push(k, {
                    tag: "rect",
                    attributes: he({
                        fill: "currentColor",
                        "clip-path": "url(#".concat(d, ")"),
                        mask: "url(#".concat(u, ")")
                    }, Re)
                }), {children: a, attributes: i}
            }(p) : function (e) {
                var n = e.children, a = e.attributes, i = e.main, t = e.transform, o = We(e.styles);
                if (o.length > 0 && (a.style = o), Ve(t)) {
                    var r = qe({transform: t, containerWidth: i.width, iconWidth: i.width});
                    n.push({
                        tag: "g",
                        attributes: he({}, r.outer),
                        children: [{
                            tag: "g",
                            attributes: he({}, r.inner),
                            children: [{
                                tag: i.icon.tag,
                                children: i.icon.children,
                                attributes: he({}, i.icon.attributes, r.path)
                            }]
                        }]
                    })
                } else n.push(i.icon);
                return {children: n, attributes: a}
            }(p), w = k.children, b = k.attributes;
        return p.children = w, p.attributes = b, F ? function (e) {
            var n = e.prefix, a = e.iconName, i = e.children, t = e.attributes, o = e.symbol;
            return [{
                tag: "svg",
                attributes: {style: "display: none;"},
                children: [{
                    tag: "symbol",
                    attributes: he({}, t, {id: !0 === o ? "".concat(n, "-").concat(Le.familyPrefix, "-").concat(a) : o}),
                    children: i
                }]
            }]
        }(p) : function (e) {
            var n = e.children, a = e.main, i = e.mask, t = e.attributes, o = e.styles, r = e.transform;
            if (Ve(r) && a.found && !i.found) {
                var F = {x: a.width / a.height / 2, y: .5};
                t.style = We(he({}, o, {"transform-origin": "".concat(F.x + r.x / 16, "em ").concat(F.y + r.y / 16, "em")}))
            }
            return [{tag: "svg", attributes: t, children: n}]
        }(p)
    }

    var Ke = function () {
    }, Xe = (Le.measurePerformance && Ce && Ce.mark && Ce.measure, function (e, n, a, i) {
        var t, o, r, F = Object.keys(e), c = F.length, l = void 0 !== i ? function (e, n) {
            return function (a, i, t, o) {
                return e.call(n, a, i, t, o)
            }
        }(n, i) : n;
        for (void 0 === a ? (t = 1, r = e[F[0]]) : (t = 0, r = a); t < c; t++) r = l(r, e[o = F[t]], o, e);
        return r
    });
    var Ge = Ne.styles, Je = Ne.shims, Qe = function () {
        var e = function (e) {
            return Xe(Ge, function (n, a, i) {
                return n[i] = Xe(a, e, {}), n
            }, {})
        };
        e(function (e, n, a) {
            return n[3] && (e[n[3]] = a), e
        }), e(function (e, n, a) {
            var i = n[2];
            return e[a] = a, i.forEach(function (n) {
                e[n] = a
            }), e
        });
        var n = "far" in Ge;
        Xe(Je, function (e, a) {
            var i = a[0], t = a[1], o = a[2];
            return "far" !== t || n || (t = "fas"), e[i] = {prefix: t, iconName: o}, e
        }, {})
    };
    Qe();
    Ne.styles;

    function Ze(e, n, a) {
        if (e && e[n] && e[n][a]) return {prefix: n, iconName: a, icon: e[n][a]}
    }

    function $e(e) {
        var n = e.tag, a = e.attributes, i = void 0 === a ? {} : a, t = e.children, o = void 0 === t ? [] : t;
        return "string" == typeof e ? Ie(e) : "<".concat(n, " ").concat(function (e) {
            return Object.keys(e || {}).reduce(function (n, a) {
                return n + "".concat(a, '="').concat(Ie(e[a]), '" ')
            }, "").trim()
        }(i), ">").concat(o.map($e).join(""), "</").concat(n, ">")
    }

    function en(e) {
        this.name = "MissingIcon", this.message = e || "Icon unavailable", this.stack = (new Error).stack
    }

    en.prototype = Object.create(Error.prototype), en.prototype.constructor = en;
    var nn = {fill: "currentColor"}, an = {attributeType: "XML", repeatCount: "indefinite", dur: "2s"},
        tn = (he({}, nn, {d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}), he({}, an, {attributeName: "opacity"}));
    he({}, nn, {cx: "256", cy: "364", r: "28"}), he({}, an, {
        attributeName: "r",
        values: "28;14;28;28;14;28;"
    }), he({}, tn, {values: "1;0;1;1;0;1;"}), he({}, nn, {
        opacity: "1",
        d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
    }), he({}, tn, {values: "1;0;0;0;0;1;"}), he({}, nn, {
        opacity: "0",
        d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
    }), he({}, tn, {values: "0;0;1;1;0;0;"}), Ne.styles;

    function on(e) {
        var n = e[0], a = e[1], i = ue(e.slice(4), 1)[0];
        return {
            found: !0,
            width: n,
            height: a,
            icon: Array.isArray(i) ? {
                tag: "g",
                attributes: {class: "".concat(Le.familyPrefix, "-").concat(Oe.GROUP)},
                children: [{
                    tag: "path",
                    attributes: {
                        class: "".concat(Le.familyPrefix, "-").concat(Oe.SECONDARY),
                        fill: "currentColor",
                        d: i[0]
                    }
                }, {
                    tag: "path",
                    attributes: {
                        class: "".concat(Le.familyPrefix, "-").concat(Oe.PRIMARY),
                        fill: "currentColor",
                        d: i[1]
                    }
                }]
            } : {tag: "path", attributes: {fill: "currentColor", d: i}}
        }
    }

    Ne.styles;
    var rn = 'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';

    function Fn() {
        Le.autoAddCss && !mn && (!function (e) {
            if (e && De) {
                var n = Ee.createElement("style");
                n.setAttribute("type", "text/css"), n.innerHTML = e;
                for (var a = Ee.head.childNodes, i = null, t = a.length - 1; t > -1; t--) {
                    var o = a[t], r = (o.tagName || "").toUpperCase();
                    ["STYLE", "LINK"].indexOf(r) > -1 && (i = o)
                }
                Ee.head.insertBefore(n, i)
            }
        }(function () {
            var e = Be, n = xe, a = Le.familyPrefix, i = Le.replacementClass, t = rn;
            if (a !== e || i !== n) {
                var o = new RegExp("\\.".concat(e, "\\-"), "g"), r = new RegExp("\\--".concat(e, "\\-"), "g"),
                    F = new RegExp("\\.".concat(n), "g");
                t = t.replace(o, ".".concat(a, "-")).replace(r, "--".concat(a, "-")).replace(F, ".".concat(i))
            }
            return t
        }()), mn = !0)
    }

    function cn(e) {
        var n = e.prefix, a = void 0 === n ? "fa" : n, i = e.iconName;
        if (i) return Ze(sn.definitions, a, i) || Ze(Ne.styles, a, i)
    }

    var ln, sn = new (function () {
        function e() {
            !function (e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.definitions = {}
        }

        var n, a, i;
        return n = e, (a = [{
            key: "add", value: function () {
                for (var e = this, n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                var t = a.reduce(this._pullDefinitions, {});
                Object.keys(t).forEach(function (n) {
                    e.definitions[n] = he({}, e.definitions[n] || {}, t[n]), function e(n, a) {
                        var i = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                            t = void 0 !== i && i, o = Object.keys(a).reduce(function (e, n) {
                                var i = a[n];
                                return i.icon ? e[i.iconName] = i.icon : e[n] = i, e
                            }, {});
                        "function" != typeof Ne.hooks.addPack || t ? Ne.styles[n] = he({}, Ne.styles[n] || {}, o) : Ne.hooks.addPack(n, o), "fas" === n && e("fa", a)
                    }(n, t[n]), Qe()
                })
            }
        }, {
            key: "reset", value: function () {
                this.definitions = {}
            }
        }, {
            key: "_pullDefinitions", value: function (e, n) {
                var a = n.prefix && n.iconName && n.icon ? {0: n} : n;
                return Object.keys(a).map(function (n) {
                    var i = a[n], t = i.prefix, o = i.iconName, r = i.icon;
                    e[t] || (e[t] = {}), e[t][o] = r
                }), e
            }
        }]) && ge(n.prototype, a), i && ge(n, i), e
    }()), mn = !1, fn = (ln = function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = n.transform,
            i = void 0 === a ? Se : a, t = n.symbol, o = void 0 !== t && t, r = n.mask, F = void 0 === r ? null : r,
            c = n.title, l = void 0 === c ? null : c, s = n.classes, m = void 0 === s ? [] : s, f = n.attributes,
            g = void 0 === f ? {} : f, _ = n.styles, h = void 0 === _ ? {} : _;
        if (e) {
            var u, d, p = e.prefix, k = e.iconName, w = e.icon;
            return u = he({type: "icon"}, e), d = function () {
                return Fn(), Le.autoA11y && (l ? g["aria-labelledby"] = "".concat(Le.replacementClass, "-title-").concat(He()) : (g["aria-hidden"] = "true", g.focusable = "false")), Ye({
                    icons: {
                        main: on(w),
                        mask: F ? on(F.icon) : {found: !1, width: null, height: null, icon: {}}
                    },
                    prefix: p,
                    iconName: k,
                    transform: he({}, Se, i),
                    symbol: o,
                    title: l,
                    extra: {attributes: g, styles: h, classes: m}
                })
            }, Object.defineProperty(u, "abstract", {get: d}), Object.defineProperty(u, "html", {
                get: function () {
                    return u.abstract.map(function (e) {
                        return $e(e)
                    })
                }
            }), Object.defineProperty(u, "node", {
                get: function () {
                    if (De) {
                        var e = Ee.createElement("div");
                        return e.innerHTML = u.html, e.children
                    }
                }
            }), u
        }
    }, function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            a = (e || {}).icon ? e : cn(e || {}), i = n.mask;
        return i && (i = (i || {}).icon ? i : cn(i || {})), ln(a, he({}, n, {mask: i}))
    });
    sn.add({
        prefix: "far",
        iconName: "building",
        icon: [448, 512, [], "f1ad", "M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"]
    }, {
        prefix: "fas",
        iconName: "cat",
        icon: [512, 512, [], "f6be", "M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"]
    }, {
        prefix: "fas",
        iconName: "coffee",
        icon: [640, 512, [], "f0f4", "M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"]
    }, {
        prefix: "far",
        iconName: "flag",
        icon: [512, 512, [], "f024", "M336.174 80c-49.132 0-93.305-32-161.913-32-31.301 0-58.303 6.482-80.721 15.168a48.04 48.04 0 0 0 2.142-20.727C93.067 19.575 74.167 1.594 51.201.104 23.242-1.71 0 20.431 0 48c0 17.764 9.657 33.262 24 41.562V496c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-83.443C109.869 395.28 143.259 384 199.826 384c49.132 0 93.305 32 161.913 32 58.479 0 101.972-22.617 128.548-39.981C503.846 367.161 512 352.051 512 335.855V95.937c0-34.459-35.264-57.768-66.904-44.117C409.193 67.309 371.641 80 336.174 80zM464 336c-21.783 15.412-60.824 32-102.261 32-59.945 0-102.002-32-161.913-32-43.361 0-96.379 9.403-127.826 24V128c21.784-15.412 60.824-32 102.261-32 59.945 0 102.002 32 161.913 32 43.271 0 96.32-17.366 127.826-32v240z"]
    }, {
        prefix: "far",
        iconName: "frown",
        icon: [496, 512, [], "f119", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 128c-40.2 0-78 17.7-103.8 48.6-8.5 10.2-7.1 25.3 3.1 33.8 10.2 8.4 25.3 7.1 33.8-3.1 16.6-19.9 41-31.4 66.9-31.4s50.3 11.4 66.9 31.4c8.1 9.7 23.1 11.9 33.8 3.1 10.2-8.5 11.5-23.6 3.1-33.8C326 321.7 288.2 304 248 304z"]
    }, {
        prefix: "fas",
        iconName: "futbol",
        icon: [512, 512, [], "f1e3", "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-48 0l-.003-.282-26.064 22.741-62.679-58.5 16.454-84.355 34.303 3.072c-24.889-34.216-60.004-60.089-100.709-73.141l13.651 31.939L256 139l-74.953-41.525 13.651-31.939c-40.631 13.028-75.78 38.87-100.709 73.141l34.565-3.073 16.192 84.355-62.678 58.5-26.064-22.741-.003.282c0 43.015 13.497 83.952 38.472 117.991l7.704-33.897 85.138 10.447 36.301 77.826-29.902 17.786c40.202 13.122 84.29 13.148 124.572 0l-29.902-17.786 36.301-77.826 85.138-10.447 7.704 33.897C442.503 339.952 456 299.015 456 256zm-248.102 69.571l-29.894-91.312L256 177.732l77.996 56.527-29.622 91.312h-96.476z"]
    }, {
        prefix: "fas",
        iconName: "history",
        icon: [512, 512, [], "f1da", "M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"]
    }, {
        prefix: "far",
        iconName: "lightbulb",
        icon: [352, 512, [], "f0eb", "M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"]
    }, {
        prefix: "fas",
        iconName: "music",
        icon: [512, 512, [], "f001", "M511.99 32.01c0-21.71-21.1-37.01-41.6-30.51L150.4 96c-13.3 4.2-22.4 16.5-22.4 30.5v261.42c-10.05-2.38-20.72-3.92-32-3.92-53.02 0-96 28.65-96 64s42.98 64 96 64 96-28.65 96-64V214.31l256-75.02v184.63c-10.05-2.38-20.72-3.92-32-3.92-53.02 0-96 28.65-96 64s42.98 64 96 64 96-28.65 96-64l-.01-351.99z"]
    }, {
        prefix: "fas",
        iconName: "search",
        icon: [512, 512, [], "f002", "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]
    }, {
        prefix: "far",
        iconName: "smile",
        icon: [496, 512, [], "f118", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"]
    }, {
        prefix: "fas",
        iconName: "times",
        icon: [352, 512, [], "f00d", "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]
    });
    var gn = fn({prefix: "far", iconName: "building"}).html, _n = fn({prefix: "fas", iconName: "cat"}).html,
        hn = fn({prefix: "fas", iconName: "coffee"}).html, un = fn({prefix: "far", iconName: "flag"}).html,
        dn = fn({prefix: "fas", iconName: "futbol"}).html, pn = fn({prefix: "far", iconName: "frown"}).html,
        kn = fn({prefix: "fas", iconName: "history"}).html, wn = fn({prefix: "far", iconName: "lightbulb"}).html,
        bn = fn({prefix: "fas", iconName: "music"}).html, vn = fn({prefix: "fas", iconName: "search"}).html,
        yn = fn({prefix: "far", iconName: "smile"}).html, En = fn({prefix: "fas", iconName: "times"}).html,
        Cn = "emojiPicker.recent";

    function Dn() {
        return JSON.parse(localStorage.getItem(Cn)) || []
    }

    var Bn = function () {
        function n(a, i, t, o) {
            e(this, n), this.emoji = a, this.showVariants = i, this.showPreview = t, this.events = o
        }

        return a(n, [{
            key: "render", value: function () {
                var e = this, n = le("button", "emoji-picker__emoji");
                return n.innerHTML = this.emoji.e, n.addEventListener("click", function () {
                    return e.onEmojiClick()
                }), n.addEventListener("mouseover", function () {
                    return e.onEmojiHover()
                }), n.addEventListener("mouseout", function () {
                    return e.onEmojiLeave()
                }), n
            }
        }, {
            key: "onEmojiClick", value: function () {
                var e, n, a;
                this.emoji.v && this.showVariants || (e = this.emoji, n = Dn(), a = {
                    e: e.e,
                    n: me(e),
                    k: e.k || me(e)
                }, localStorage.setItem(Cn, JSON.stringify([a].concat(r(n.filter(function (e) {
                    return e.k !== a.k
                }))).slice(0, 50)))), this.events.emit("emoji", {emoji: this.emoji, showVariants: this.showVariants})
            }
        }, {
            key: "onEmojiHover", value: function () {
                this.showPreview && this.events.emit("showPreview", this.emoji)
            }
        }, {
            key: "onEmojiLeave", value: function () {
                this.showPreview && this.events.emit("hidePreview")
            }
        }]), n
    }(), xn = function () {
        function n(a, i, t) {
            e(this, n), this.emojis = a, this.showVariants = i, this.events = t
        }

        return a(n, [{
            key: "render", value: function () {
                var e = this, n = le("div", "emoji-picker__emojis");
                return this.emojis.forEach(function (a) {
                    return n.appendChild(new Bn(a, e.showVariants, !0, e.events).render())
                }), n
            }
        }]), n
    }(), jn = function () {
        function n(a, i, t, o) {
            e(this, n), this.events = a, this.i18n = i, this.emojiData = t, this.autoFocusSearch = o
        }

        return a(n, [{
            key: "render", value: function () {
                var e = this;
                this.searchContainer = le("div", "emoji-picker__search-container"), this.searchField = le("input", "emoji-picker__search"), this.searchField.placeholder = this.i18n.search, this.searchContainer.appendChild(this.searchField);
                var n = le("span", "emoji-picker__search-icon");
                return n.innerHTML = vn, this.searchContainer.appendChild(n), this.autoFocusSearch && setTimeout(function () {
                    return e.searchField.focus()
                }), this.searchField.addEventListener("keydown", function (n) {
                    return e.onKeyDown(n)
                }), this.searchField.addEventListener("keyup", function () {
                    return e.onKeyUp()
                }), this.searchContainer
            }
        }, {
            key: "onKeyDown", value: function (e) {
                "Escape" === e.key && "" !== this.searchField.value && (e.stopPropagation(), this.searchField.value = "", this.events.emit("showTabs"))
            }
        }, {
            key: "onKeyUp", value: function () {
                var e = this;
                if (this.searchField.value) {
                    this.events.emit("hideTabs");
                    var n = this.emojiData.filter(function (n) {
                        return n.n.filter(function (n) {
                            return n.toLowerCase().indexOf(e.searchField.value.toLowerCase()) >= 0
                        }).length
                    });
                    this.events.emit("hidePreview"), n.length ? this.events.emit("showSearchResults", new xn(n, !0, this.events).render()) : this.events.emit("showSearchResults", new On(this.i18n.notFound).render())
                } else this.events.emit("showTabs")
            }
        }]), n
    }(), On = function () {
        function n(a) {
            e(this, n), this.message = a
        }

        return a(n, [{
            key: "render", value: function () {
                var e = le("div", "emoji-picker__search-not-found"),
                    n = le("div", "emoji-picker__search-not-found-icon");
                n.innerHTML = pn, e.appendChild(n);
                var a = le("h2");
                return a.innerHTML = this.message, e.appendChild(a), e
            }
        }]), n
    }(), zn = {
        search: "Search",
        categories: {
            recents: "Recently Used",
            smileys: "Smileys & People",
            animals: "Animals & Nature",
            food: "Food & Drink",
            activities: "Activities",
            travel: "Travel & Places",
            objects: "Objects",
            symbols: "Symbols",
            flags: "Flags"
        },
        notFound: "No emojis found"
    }, Mn = {};
    ce.forEach(function (e) {
        var n = Mn[Fe[e.c]];
        n || (n = Mn[Fe[e.c]] = []), n.push(e)
    });
    var Ln = {smileys: yn, animals: _n, food: hn, activities: dn, travel: gn, objects: wn, symbols: bn, flags: un},
        Tn = function () {
            function n(a, i) {
                e(this, n), this.events = a, this.i18n = i, this.activeTab = 1, this.setActiveTab = this.setActiveTab.bind(this)
            }

            return a(n, [{
                key: "setActiveTab", value: function (e) {
                    this.activeTab >= 0 && (this.tabBodies[this.activeTab].setActive(!1), this.tabs[this.activeTab].setActive(!1)), this.activeTab = e, this.tabBodies[this.activeTab].setActive(!0), this.tabs[this.activeTab].setActive(!0)
                }
            }, {
                key: "render", value: function () {
                    var e = le("div", "emoji-picker__tabs-container");
                    return e.appendChild(this.createTabs()), e.appendChild(this.createTabBodies()), this.setActiveTab(1), e
                }
            }, {
                key: "createTabs", value: function () {
                    var e = this;
                    this.tabsList = le("ul", "emoji-picker__tabs"), this.tabs = Object.keys(Ln).map(function (n, a) {
                        return new Nn(Ln[n], a + 1, e.setActiveTab)
                    });
                    var n = new Nn(kn, 0, this.setActiveTab);
                    return this.tabs.splice(0, 0, n), this.tabs.forEach(function (n) {
                        return e.tabsList.appendChild(n.render())
                    }), this.tabsList
                }
            }, {
                key: "createTabBodies", value: function () {
                    var e = this;
                    this.tabBodyContainer = le("div"), this.tabBodies = Object.keys(Ln).map(function (n, a) {
                        return new Pn(e.i18n.categories[n] || zn.categories[n], new xn(Mn[n], !0, e.events).render(), a + 1)
                    });
                    var n = new Pn(this.i18n.categories.recents || zn.categories.recents, new xn(Dn(), !1, this.events).render(), 0);
                    return this.tabBodies.splice(0, 0, n), this.events.on("emoji", function () {
                        var n = new Pn(e.i18n.categories.recents || zn.categories.recents, new xn(Dn(), !1, e.events).render(), 0);
                        setTimeout(function () {
                            e.tabBodyContainer.replaceChild(n.render(), e.tabBodyContainer.firstChild), e.tabBodies[0] = n, 0 === e.activeTab && e.setActiveTab(0)
                        })
                    }), this.tabBodies.forEach(function (n) {
                        return e.tabBodyContainer.appendChild(n.render())
                    }), this.tabBodyContainer
                }
            }]), n
        }(), Nn = function () {
            function n(a, i, t) {
                e(this, n), this.icon = a, this.index = i, this.setActiveTab = t
            }

            return a(n, [{
                key: "render", value: function () {
                    var e = this;
                    return this.tab = le("li", "emoji-picker__tab"), this.tab.innerHTML = this.icon, this.tab.addEventListener("click", function () {
                        return e.setActiveTab(e.index)
                    }), this.tab
                }
            }, {
                key: "setActive", value: function (e) {
                    e ? this.tab.classList.add("active") : this.tab.classList.remove("active")
                }
            }]), n
        }(), Pn = function () {
            function n(a, i, t) {
                e(this, n), this.category = a, this.content = i, this.index = t
            }

            return a(n, [{
                key: "render", value: function () {
                    this.container = le("div", "emoji-picker__tab-body");
                    var e = le("h2");
                    return e.innerHTML = this.category, this.container.appendChild(e), this.container.appendChild(this.content), this.container
                }
            }, {
                key: "setActive", value: function (e) {
                    e ? this.container.classList.add("active") : this.container.classList.remove("active")
                }
            }]), n
        }(), Sn = function () {
            function n(a, i) {
                e(this, n), this.events = a, this.emoji = i
            }

            return a(n, [{
                key: "render", value: function () {
                    var e = this, n = le("div", "emoji-picker__variant-popup"),
                        a = le("div", "emoji-picker__variant-overlay");
                    a.addEventListener("click", function (a) {
                        a.stopPropagation(), n.contains(a.target) || e.events.emit("hideVariantPopup")
                    }), n.appendChild(new Bn(this.emoji, !1, !1, this.events).render()), Object.keys(this.emoji.v).forEach(function (a) {
                        n.appendChild(new Bn(e.emoji.v[a], !1, !1, e.events).render())
                    });
                    var i = le("button", "emoji-picker__variant-popup-close-button");
                    return i.innerHTML = En, i.addEventListener("click", function (n) {
                        n.stopPropagation(), e.events.emit("hideVariantPopup")
                    }), n.appendChild(i), a.appendChild(n), a
                }
            }]), n
        }(), An = {position: "right-start", autoHide: !0, autoFocusSearch: !0};
    return function () {
        function n() {
            var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            e(this, n), this.pickerVisible = !1, this.options = o({}, An, {}, a), this.options.rootElement || (this.options.rootElement = document.body), this.i18n = o({}, zn, {}, a.i18n), this.onDocumentClick = this.onDocumentClick.bind(this), this.onDocumentKeydown = this.onDocumentKeydown.bind(this), this.events = new c, this.publicEvents = new c
        }

        return a(n, [{
            key: "on", value: function (e, n) {
                this.publicEvents.on(e, n)
            }
        }, {
            key: "off", value: function (e, n) {
                this.publicEvents.off(e, n)
            }
        }, {
            key: "buildPicker", value: function () {
                var e = this;
                this.pickerEl = le("div", "emoji-picker");
                var n = le("div", "emoji-picker__content"),
                    a = new jn(this.events, this.i18n, ce, this.options.autoFocusSearch).render();
                this.pickerEl.appendChild(a), this.pickerEl.appendChild(n);
                var i, t = new Tn(this.events, this.i18n).render();
                n.appendChild(t), this.events.on("hideTabs", function () {
                    n.contains(t) && n.removeChild(t)
                }), this.events.on("showTabs", function () {
                    n.contains(t) || (se(n), n.appendChild(t))
                }), this.events.on("showSearchResults", function (e) {
                    se(n), e.classList.add("search-results"), n.appendChild(e)
                }), this.pickerEl.appendChild(new fe(this.events).render()), this.events.on("emoji", function (n) {
                    var a = n.emoji, t = n.showVariants;
                    a.v && t ? (i = new Sn(e.events, a).render(), e.pickerEl.appendChild(i)) : (i && i.parentNode === e.pickerEl && e.pickerEl.removeChild(i), e.publicEvents.emit("emoji", a.e), e.options.autoHide && e.hidePicker())
                }), this.events.on("hideVariantPopup", function () {
                    e.pickerEl.removeChild(i), i = null
                }), this.options.rootElement.appendChild(this.pickerEl), setTimeout(function () {
                    document.addEventListener("click", e.onDocumentClick), document.addEventListener("keydown", e.onDocumentKeydown)
                })
            }
        }, {
            key: "onDocumentClick", value: function (e) {
                this.pickerEl.contains(e.target) || this.hidePicker()
            }
        }, {
            key: "hidePicker", value: function () {
                this.pickerVisible = !1, this.events.off("emoji"), this.events.off("hideVariantPopup"), this.options.rootElement.removeChild(this.pickerEl), this.popper.destroy(), document.removeEventListener("click", this.onDocumentClick), document.removeEventListener("keydown", this.onDocumentKeydown)
            }
        }, {
            key: "showPicker", value: function (e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.pickerVisible = !0, this.buildPicker(), this.popper = new re(e, this.pickerEl, {placement: n.position || this.options.position})
            }
        }, {
            key: "onDocumentKeydown", value: function (e) {
                "Escape" === e.key && this.hidePicker()
            }
        }]), n
    }()
});
//# sourceMappingURL=/sm/c8c93820904b35fb4af08e42601e019d8cdf80ddc92d90951b4444d6d92177a6.map